import { NextResponse } from "next/server";
import { z } from "zod";

/**
 * Lead capture endpoint for the contact and onboarding forms.
 *
 * Out of the box it validates the payload and logs it server-side, returning
 * success so the UI works immediately. Wire a provider by setting env vars:
 *  - HUBSPOT_PRIVATE_APP_TOKEN  -> forwards to HubSpot Forms/Contacts API
 *  - RESEND_API_KEY             -> emails LEAD_NOTIFICATION_EMAIL
 * Both blocks below are clearly marked and safe to enable.
 */

const leadSchema = z.object({
  type: z.enum(["contact", "onboarding"]).default("contact"),
  name: z.string().min(2).max(120),
  email: z.string().email(),
  company: z.string().max(160).optional().default(""),
  phone: z.string().max(40).optional().default(""),
  country: z.string().max(80).optional().default(""),
  service: z.string().max(120).optional().default(""),
  message: z.string().max(5000).optional().default(""),
  // Onboarding-specific structured payload (free-form, validated loosely)
  details: z.record(z.string(), z.any()).optional(),
  // Honeypot — must be empty
  website: z.string().max(0).optional().default(""),
});

export async function POST(request: Request) {
  let json: unknown;
  try {
    json = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  const parsed = leadSchema.safeParse(json);
  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, error: "Validation failed", issues: parsed.error.flatten() },
      { status: 422 },
    );
  }

  // Honeypot triggered — pretend success, drop silently.
  if (parsed.data.website) {
    return NextResponse.json({ ok: true });
  }

  const lead = parsed.data;

  // ── Optional: forward to HubSpot ───────────────────────────────
  const hubspotToken = process.env.HUBSPOT_PRIVATE_APP_TOKEN;
  if (hubspotToken) {
    try {
      await fetch("https://api.hubapi.com/crm/v3/objects/contacts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${hubspotToken}`,
        },
        body: JSON.stringify({
          properties: {
            email: lead.email,
            firstname: lead.name,
            company: lead.company,
            phone: lead.phone,
            country: lead.country,
            message: lead.message,
            lead_source: `Website — ${lead.type}`,
          },
        }),
      });
    } catch (err) {
      console.error("[lead] HubSpot forward failed", err);
    }
  }

  // ── Optional: email notification via Resend ───────────────────
  const resendKey = process.env.RESEND_API_KEY;
  const notify = process.env.LEAD_NOTIFICATION_EMAIL;
  if (resendKey && notify) {
    try {
      await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${resendKey}`,
        },
        body: JSON.stringify({
          from: "Arrowlink Website <noreply@arrowlinkprocurement.com>",
          to: [notify],
          subject: `New ${lead.type} lead — ${lead.name}${lead.company ? ` (${lead.company})` : ""}`,
          text: formatLeadEmail(lead),
        }),
      });
    } catch (err) {
      console.error("[lead] Resend email failed", err);
    }
  }

  // Always log so a submission is never lost, even without integrations.
  console.info("[lead] received", {
    type: lead.type,
    name: lead.name,
    email: lead.email,
    company: lead.company,
    at: new Date().toISOString(),
  });

  return NextResponse.json({ ok: true });
}

function formatLeadEmail(lead: z.infer<typeof leadSchema>): string {
  const lines = [
    `Type: ${lead.type}`,
    `Name: ${lead.name}`,
    `Email: ${lead.email}`,
    `Company: ${lead.company || "—"}`,
    `Phone: ${lead.phone || "—"}`,
    `Country: ${lead.country || "—"}`,
    `Service: ${lead.service || "—"}`,
    "",
    "Message:",
    lead.message || "—",
  ];
  if (lead.details) {
    lines.push("", "Onboarding details:");
    for (const [k, v] of Object.entries(lead.details)) {
      lines.push(`  ${k}: ${Array.isArray(v) ? v.join(", ") : String(v)}`);
    }
  }
  return lines.join("\n");
}
