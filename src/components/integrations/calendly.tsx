"use client";

import * as React from "react";
import Script from "next/script";
import { Calendar, ExternalLink } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { Button } from "@/components/ui/button";

/**
 * Inline Calendly widget. Renders the embed when NEXT_PUBLIC_CALENDLY_URL is set;
 * otherwise shows a graceful fallback that still routes the lead to WhatsApp/email.
 */
export function CalendlyInline() {
  const url = siteConfig.calendlyUrl;

  if (!url) {
    return (
      <div className="rounded-2xl border border-dashed border-ink-200 bg-white p-10 text-center">
        <span className="mx-auto grid size-14 place-items-center rounded-full bg-gold-50 ring-1 ring-gold-100">
          <Calendar className="size-7 text-gold-600" />
        </span>
        <h3 className="mt-5 text-xl">Scheduling opens here</h3>
        <p className="mx-auto mt-2 max-w-md text-muted-foreground">
          Live calendar booking is being connected. In the meantime, request your
          consultation by message or email — we respond within one working day.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Button asChild variant="gold">
            <a href={siteConfig.contact.whatsapp} target="_blank" rel="noopener noreferrer">
              Request via WhatsApp
            </a>
          </Button>
          <Button asChild variant="outline">
            <a href={`mailto:${siteConfig.contact.email}?subject=Consultation%20Request`}>
              Email to book
            </a>
          </Button>
        </div>
        <p className="mt-6 text-xs text-muted-foreground">
          Admin note: set <code className="rounded bg-ink-50 px-1.5 py-0.5">NEXT_PUBLIC_CALENDLY_URL</code> in your env to embed the live calendar.
        </p>
      </div>
    );
  }

  return (
    <>
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="afterInteractive"
      />
      <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet" />
      <div
        className="calendly-inline-widget overflow-hidden rounded-2xl border border-ink-100 bg-white shadow-card"
        data-url={`${url}?hide_gdpr_banner=1&primary_color=b8924a`}
        style={{ minWidth: "320px", height: "720px" }}
      />
      <p className="mt-4 text-center text-sm text-muted-foreground">
        Prefer another channel?{" "}
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 font-semibold text-gold-600 hover:text-gold-700"
        >
          Open the scheduler in a new tab <ExternalLink className="size-3.5" />
        </a>
      </p>
    </>
  );
}
