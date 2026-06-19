import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, Check, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { Icon } from "@/components/icon-map";
import { PageHero } from "@/components/sections/page-hero";
import { CtaBand } from "@/components/sections/cta-band";
import { pageMetadata, breadcrumbJsonLd } from "@/lib/seo";
import { services, servicePackages } from "@/lib/services";

export const metadata: Metadata = pageMetadata({
  title: "Procurement & Sourcing Services",
  description:
    "Product sourcing, supplier verification, RFQ management, price negotiation, procurement management, quality inspection, freight and vendor management — engage exactly the support you need.",
  path: "/services",
  keywords: ["procurement services", "sourcing services", "supplier verification service"],
});

const categories = [
  "Sourcing",
  "Verification",
  "Management",
  "Quality & Logistics",
  "Growth",
] as const;

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([{ name: "Services", path: "/services" }]),
          ),
        }}
      />
      <PageHero
        eyebrow="Services"
        title="Procurement, broken into services you can actually buy"
        description="From a single supplier verification to full-cycle order management, every Arrowlink service is scoped, documented and delivered with the buyer's interest first."
        crumbs={[{ name: "Services" }]}
      >
        <Button asChild variant="gold" size="lg">
          <Link href="/book">
            Book a Consultation <ArrowRight className="size-4" />
          </Link>
        </Button>
      </PageHero>

      {/* Packages */}
      <section className="py-20 sm:py-24">
        <div className="container-wide">
          <SectionHeading
            eyebrow="Service packages"
            title="Transparent entry pricing. Custom proposals for managed work."
            description="Start with a fixed-scope package, or commission a tailored engagement. Either way, scope and cost are agreed in writing before work begins."
          />
          <RevealGroup className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {servicePackages.map((p) => (
              <RevealItem
                key={p.name}
                className={`relative flex h-full flex-col rounded-2xl border p-7 ${
                  p.highlight
                    ? "border-gold-300 bg-ink-950 text-white shadow-elevated"
                    : "border-ink-100 bg-white shadow-card"
                }`}
              >
                {p.highlight && (
                  <span className="absolute -top-3 left-7 inline-flex items-center gap-1 rounded-full bg-gold-500 px-3 py-1 text-xs font-semibold text-ink-900">
                    <Star className="size-3 fill-ink-900" /> Flagship
                  </span>
                )}
                <h3 className={`text-xl ${p.highlight ? "text-white" : ""}`}>
                  {p.name}
                </h3>
                <p
                  className={`mt-2 text-sm leading-relaxed ${
                    p.highlight ? "text-ink-100/80" : "text-muted-foreground"
                  }`}
                >
                  {p.summary}
                </p>
                <div className="mt-6 flex items-baseline gap-1.5">
                  <span
                    className={`font-display text-3xl font-semibold ${
                      p.highlight ? "text-gold-400" : "text-ink-900"
                    }`}
                  >
                    {p.price}
                  </span>
                  {p.priceNote && (
                    <span
                      className={`text-sm ${
                        p.highlight ? "text-ink-100/60" : "text-muted-foreground"
                      }`}
                    >
                      {p.priceNote}
                    </span>
                  )}
                </div>
                <p
                  className={`mt-2 text-xs font-medium uppercase tracking-wider ${
                    p.highlight ? "text-gold-300" : "text-gold-600"
                  }`}
                >
                  {p.cta}
                </p>
                <Button
                  asChild
                  variant={p.highlight ? "gold" : "outline"}
                  className="mt-7"
                >
                  <Link href="/book">Discuss this</Link>
                </Button>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* Full service catalogue grouped by category */}
      <section className="bg-white py-20 sm:py-24">
        <div className="container-wide">
          <SectionHeading
            eyebrow="Full capability"
            title="The complete procurement toolkit"
            description="Thirteen services across five disciplines — engage one, or combine them into a managed programme."
          />
          <div className="mt-14 space-y-16">
            {categories.map((cat) => {
              const items = services.filter((s) => s.category === cat);
              return (
                <div key={cat} id={cat.toLowerCase().replace(/\s|&/g, "")}>
                  <div className="mb-6 flex items-center gap-3">
                    <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-gold-600">
                      {cat}
                    </h3>
                    <span className="h-px flex-1 bg-ink-100" />
                  </div>
                  <RevealGroup className="grid gap-6 lg:grid-cols-2">
                    {items.map((s) => (
                      <RevealItem
                        key={s.slug}
                        id={s.slug}
                        className="scroll-mt-28 rounded-xl border border-ink-100 bg-paper p-7 transition-colors hover:border-gold-200"
                      >
                        <div className="flex items-start justify-between gap-4">
                          <span className="grid size-12 shrink-0 place-items-center rounded-lg bg-ink-900 text-gold-400">
                            <Icon name={s.icon} className="size-6" />
                          </span>
                          <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-ink-800 ring-1 ring-ink-100">
                            {s.price}
                            {s.priceNote ? ` · ${s.priceNote}` : ""}
                          </span>
                        </div>
                        <h4 className="mt-5 font-display text-xl text-ink-900">
                          {s.title}
                        </h4>
                        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                          {s.summary}
                        </p>
                        <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                          {s.includes.map((inc) => (
                            <li
                              key={inc}
                              className="flex items-start gap-2 text-sm text-ink-700"
                            >
                              <Check className="mt-0.5 size-4 shrink-0 text-gold-500" />
                              {inc}
                            </li>
                          ))}
                        </ul>
                        <p className="mt-5 border-t border-ink-100 pt-4 text-sm font-medium text-ink-900">
                          <span className="text-gold-600">Outcome:</span>{" "}
                          {s.outcome}
                        </p>
                      </RevealItem>
                    ))}
                  </RevealGroup>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CtaBand
        title="Not sure which service fits?"
        description="Tell us what you're trying to source or solve. We'll recommend the right starting point — and there's no charge for the conversation."
      />
    </>
  );
}
