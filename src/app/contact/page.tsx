import type { Metadata } from "next";
import Link from "next/link";
import {
  Mail,
  Phone,
  MessageCircle,
  Linkedin,
  MapPin,
  Building2,
  ArrowRight,
} from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { PageHero } from "@/components/sections/page-hero";
import { ContactForm } from "@/components/forms/contact-form";
import { pageMetadata, breadcrumbJsonLd } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = pageMetadata({
  title: "Contact Arrowlink Global Procurement",
  description:
    "Get in touch with Arrowlink Global Procurement. Send a brief description of your product and sourcing requirement — we acknowledge enquiries within one working day.",
  path: "/contact",
  keywords: ["contact procurement consultancy", "sourcing enquiry"],
});

const channels = [
  {
    icon: <Mail className="size-5 text-gold-500" />,
    label: "General enquiries",
    value: siteConfig.contact.email,
    href: `mailto:${siteConfig.contact.email}`,
  },
  {
    icon: <Mail className="size-5 text-gold-500" />,
    label: "Direct to the founder",
    value: siteConfig.contact.directEmail,
    href: `mailto:${siteConfig.contact.directEmail}`,
  },
  {
    icon: <Phone className="size-5 text-gold-500" />,
    label: "Phone",
    value: siteConfig.contact.phone,
    href: `tel:${siteConfig.contact.phoneIntl}`,
  },
  {
    icon: <MessageCircle className="size-5 text-gold-500" />,
    label: "WhatsApp Business",
    value: siteConfig.contact.phone,
    href: siteConfig.contact.whatsapp,
  },
  {
    icon: <Linkedin className="size-5 text-gold-500" />,
    label: "LinkedIn",
    value: "in/oluwadamilolaarowolo",
    href: siteConfig.contact.linkedin,
  },
];

const engageSteps = [
  "Send a brief description of your product and sourcing requirement.",
  "We confirm the relevant service, timeline and cost within 24 hours.",
  "A written scope of work is agreed before any fee is charged.",
  "Work begins. Progress is reported in writing at every stage.",
];

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([{ name: "Contact", path: "/contact" }]),
          ),
        }}
      />
      <PageHero
        eyebrow="Contact"
        title="Start a procurement conversation"
        description="If you have a product to source, a supplier to verify, or an order to manage — the next step is a focused conversation about your requirement and whether Arrowlink is the right fit."
        crumbs={[{ name: "Contact" }]}
      />

      <section className="py-16 sm:py-20">
        <div className="container-wide grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:gap-16">
          {/* Form */}
          <div>
            <Reveal>
              <h2 className="text-2xl">Send us a message</h2>
              <p className="mt-2 text-muted-foreground">
                All information is treated in confidence and never shared with
                suppliers without your written consent.
              </p>
            </Reveal>
            <div className="mt-7">
              <ContactForm />
            </div>
          </div>

          {/* Channels + steps */}
          <div className="space-y-8">
            <Reveal>
              <div className="rounded-2xl border border-ink-100 bg-white p-7 shadow-card">
                <h3 className="text-lg">Direct channels</h3>
                <ul className="mt-5 space-y-4">
                  {channels.map((c) => (
                    <li key={c.label}>
                      <a
                        href={c.href}
                        target={c.href.startsWith("http") ? "_blank" : undefined}
                        rel="noopener noreferrer"
                        className="group flex items-start gap-3.5"
                      >
                        <span className="mt-0.5 grid size-9 shrink-0 place-items-center rounded-lg bg-gold-50 ring-1 ring-gold-100">
                          {c.icon}
                        </span>
                        <span>
                          <span className="block text-xs uppercase tracking-wider text-muted-foreground">
                            {c.label}
                          </span>
                          <span className="block text-sm font-medium text-ink-900 group-hover:text-gold-600">
                            {c.value}
                          </span>
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="rounded-2xl border border-ink-100 bg-paper p-7">
                <h3 className="text-lg">How to engage</h3>
                <ol className="mt-5 space-y-4">
                  {engageSteps.map((s, i) => (
                    <li key={s} className="flex gap-3.5">
                      <span className="grid size-7 shrink-0 place-items-center rounded-full bg-ink-900 text-xs font-semibold text-gold-400">
                        {i + 1}
                      </span>
                      <span className="text-sm text-ink-700">{s}</span>
                    </li>
                  ))}
                </ol>
                <Link
                  href="/onboarding"
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-gold-600 hover:text-gold-700"
                >
                  Skip ahead — complete the onboarding brief{" "}
                  <ArrowRight className="size-4" />
                </Link>
              </div>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="rounded-2xl border border-ink-100 bg-white p-7 shadow-card">
                <div className="flex items-center gap-2.5">
                  <Building2 className="size-5 text-gold-500" />
                  <h3 className="text-lg">Company registration</h3>
                </div>
                <dl className="mt-4 grid grid-cols-1 gap-x-6 gap-y-2.5 text-sm sm:grid-cols-2">
                  <Detail k="Legal name" v={siteConfig.legalName} />
                  <Detail k="RC number" v={siteConfig.rcNumber} />
                  <Detail k="Founded" v="September 2024" />
                  <Detail k="Incorporated" v={siteConfig.incorporated} />
                  <Detail k="Governing act" v="CAMA 2020 — Nigeria" />
                  <Detail k="Structure" v="Ltd by Shares" />
                </dl>
                <p className="mt-5 flex items-center gap-2 border-t border-ink-100 pt-4 text-sm text-muted-foreground">
                  <MapPin className="size-4 text-gold-500" />
                  Registered in {siteConfig.registeredIn} · Operating remotely,
                  serving clients worldwide
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}

function Detail({ k, v }: { k: string; v: string }) {
  return (
    <div>
      <dt className="text-xs uppercase tracking-wider text-muted-foreground">{k}</dt>
      <dd className="font-medium text-ink-900">{v}</dd>
    </div>
  );
}
