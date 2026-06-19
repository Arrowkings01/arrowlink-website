import type { Metadata } from "next";
import Link from "next/link";
import { Clock, FileText, ShieldCheck, MessageCircle, Mail, ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { PageHero } from "@/components/sections/page-hero";
import { CalendlyInline } from "@/components/integrations/calendly";
import { pageMetadata, breadcrumbJsonLd } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = pageMetadata({
  title: "Book a Procurement Consultation",
  description:
    "Book a focused discovery call with Arrowlink Global Procurement. No commitment, no generic proposal — a clear conversation about your sourcing requirement and whether we're the right fit.",
  path: "/book",
  keywords: ["book procurement consultation", "sourcing consultation call"],
});

const expect = [
  { icon: <Clock className="size-5 text-gold-500" />, t: "A focused 30-minute discovery call about your specific requirement." },
  { icon: <FileText className="size-5 text-gold-500" />, t: "Confirmation of the right service, timeline and cost within 24 hours." },
  { icon: <ShieldCheck className="size-5 text-gold-500" />, t: "A written scope of work — agreed before any fee is charged." },
];

export default function BookPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([{ name: "Book a Consultation", path: "/book" }]),
          ),
        }}
      />
      <PageHero
        eyebrow="Book a consultation"
        title="Start with a conversation, not a contract"
        description="If you have a product to source, a supplier to verify, or an order to manage — the next step is a brief, focused discussion. No commitment. No generic proposal."
        crumbs={[{ name: "Book a Consultation" }]}
      />

      <section className="py-16 sm:py-20">
        <div className="container-wide grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          {/* Left: what to expect */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Reveal>
              <h2 className="text-2xl">What to expect</h2>
              <ul className="mt-6 space-y-5">
                {expect.map((e) => (
                  <li key={e.t} className="flex gap-3.5">
                    <span className="mt-0.5 grid size-9 shrink-0 place-items-center rounded-lg bg-gold-50 ring-1 ring-gold-100">
                      {e.icon}
                    </span>
                    <span className="text-ink-700">{e.t}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="mt-8 rounded-2xl border border-ink-100 bg-white p-6 shadow-card">
                <p className="text-sm font-semibold text-ink-900">
                  Prefer to reach out directly?
                </p>
                <div className="mt-4 space-y-3 text-sm">
                  <a href={siteConfig.contact.whatsapp} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 text-ink-700 hover:text-gold-600">
                    <MessageCircle className="size-4 text-gold-500" /> WhatsApp: {siteConfig.contact.phone}
                  </a>
                  <a href={`mailto:${siteConfig.contact.email}`} className="flex items-center gap-2.5 text-ink-700 hover:text-gold-600">
                    <Mail className="size-4 text-gold-500" /> {siteConfig.contact.email}
                  </a>
                </div>
                <Link href="/onboarding" className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-gold-600 hover:text-gold-700">
                  Ready to brief us in detail? Complete the onboarding form
                  <ArrowRight className="size-4" />
                </Link>
              </div>
            </Reveal>
          </div>

          {/* Right: Calendly */}
          <Reveal delay={0.05}>
            <CalendlyInline />
          </Reveal>
        </div>
      </section>
    </>
  );
}
