import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, Linkedin, XCircle, Target, Eye, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { PageHero } from "@/components/sections/page-hero";
import { CtaBand } from "@/components/sections/cta-band";
import { pageMetadata, breadcrumbJsonLd } from "@/lib/seo";
import { principles, engagements } from "@/lib/content";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = pageMetadata({
  title: "About Arrowlink Global Procurement",
  description:
    "Arrowlink Global Procurement Ltd is a registered, process-driven procurement consultancy founded by Oluwadamilola Arowolo. Independent supplier vetting, documented process and client-side representation.",
  path: "/about",
  keywords: ["about arrowlink", "procurement consultancy nigeria", "Oluwadamilola Arowolo"],
});

const notUs = [
  {
    title: "Not a Trading Company",
    body: "We do not hold inventory or resell products. We act exclusively on behalf of our clients.",
  },
  {
    title: "Not a Freight Forwarder",
    body: "Logistics is coordinated through freight partners as required. We are not a shipping or customs-clearance provider.",
  },
  {
    title: "Not a Marketplace",
    body: "We do not list suppliers publicly. Every supplier relationship is built for the specific client engagement.",
  },
];

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([{ name: "About", path: "/about" }]),
          ),
        }}
      />
      <PageHero
        eyebrow="About Arrowlink"
        title="Procurement outcomes depend on process — not on knowing the right contact"
        description="Arrowlink Global Procurement Ltd is a registered, process-driven procurement and sourcing consultancy. We provide structured procurement services to importers, distributors, wholesalers and trading companies — sourcing globally on the buyer's behalf."
        crumbs={[{ name: "About" }]}
      />

      {/* Founder + story */}
      <section className="py-20 sm:py-24">
        <div className="container-wide grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="Who we are"
              title="Built on one principle"
              description="Procurement outcomes depend on supplier quality, process discipline and clear communication — not on sending the cheapest quote. We operate across global supply chains and manage the full procurement cycle on behalf of our clients, from initial supplier identification through to pre-shipment quality inspection."
            />
            <RevealGroup className="mt-8 grid gap-4 sm:grid-cols-3">
              {[
                { k: "Founded", v: "September 2024" },
                { k: "Incorporated", v: siteConfig.incorporated },
                { k: "Registration", v: `RC ${siteConfig.rcNumber}` },
              ].map((x) => (
                <RevealItem key={x.k} className="rounded-xl border border-ink-100 bg-white p-5 shadow-card">
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">
                    {x.k}
                  </p>
                  <p className="mt-1 font-display text-lg font-semibold text-ink-900">
                    {x.v}
                  </p>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>

          {/* Founder card */}
          <Reveal className="rounded-2xl border border-ink-100 bg-ink-950 p-8 text-white shadow-elevated">
            <div className="flex items-center gap-4">
              <span className="grid size-16 place-items-center rounded-full bg-gold-500/15 font-display text-2xl font-semibold text-gold-400 ring-1 ring-gold-400/30">
                OA
              </span>
              <div>
                <p className="font-display text-lg font-semibold text-white">
                  {siteConfig.founder}
                </p>
                <p className="text-sm text-gold-400">Founder & Principal</p>
              </div>
            </div>
            <p className="mt-6 text-sm leading-relaxed text-ink-100/80">
              Arrowlink was founded to bring structure, independence and
              documentation to a market full of intermediaries. The firm acts
              exclusively for the buyer — in every negotiation, inspection and
              supplier communication.
            </p>
            <Button asChild className="mt-7 bg-white/10 text-white ring-1 ring-white/20 hover:bg-white/15">
              <a href={siteConfig.contact.linkedin} target="_blank" rel="noopener noreferrer">
                <Linkedin className="size-4" /> Connect on LinkedIn
              </a>
            </Button>
          </Reveal>
        </div>
      </section>

      {/* Mission / Vision */}
      <section className="bg-white py-20 sm:py-24">
        <div className="container-wide grid gap-6 lg:grid-cols-2">
          <Reveal className="rounded-2xl border border-ink-100 bg-paper p-8">
            <span className="grid size-11 place-items-center rounded-lg bg-gold-50 ring-1 ring-gold-100">
              <Target className="size-5.5 text-gold-600" />
            </span>
            <h3 className="mt-5 text-xl">Our Mission</h3>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              To reduce the cost, risk and complexity of international procurement
              for importers and distributors — by providing structured sourcing,
              independent supplier vetting and professional procurement management
              that gives clients measurable control over their supply chain.
            </p>
          </Reveal>
          <Reveal delay={0.08} className="rounded-2xl border border-ink-100 bg-paper p-8">
            <span className="grid size-11 place-items-center rounded-lg bg-gold-50 ring-1 ring-gold-100">
              <Eye className="size-5.5 text-gold-600" />
            </span>
            <h3 className="mt-5 text-xl">Our Vision</h3>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              To be the procurement partner of choice for growing importers and
              distributors worldwide who need a reliable, transparent bridge to
              verified manufacturers across global markets.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Principles */}
      <section className="py-20 sm:py-24">
        <div className="container-wide">
          <SectionHeading
            eyebrow="Core operating principles"
            title="The standards behind every engagement"
          />
          <RevealGroup className="mt-12 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
            {principles.map((p, i) => (
              <RevealItem key={p.title} className="border-t border-ink-200 pt-5">
                <span className="font-display text-sm font-semibold text-gold-500">
                  0{i + 1}
                </span>
                <h3 className="mt-2 text-lg">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {p.body}
                </p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* What we are not */}
      <section className="bg-white py-20 sm:py-24">
        <div className="container-wide">
          <SectionHeading
            eyebrow="Clarity of role"
            title="What we are not"
            description="Knowing what a firm isn't is as important as knowing what it is. Our independence is structural."
          />
          <RevealGroup className="mt-12 grid gap-6 md:grid-cols-3">
            {notUs.map((n) => (
              <RevealItem
                key={n.title}
                className="rounded-xl border border-ink-100 bg-paper p-7"
              >
                <XCircle className="size-6 text-ink-300" />
                <h3 className="mt-4 text-lg">{n.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {n.body}
                </p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* Engagements + track record note */}
      <section className="py-20 sm:py-24">
        <div className="container-wide">
          <SectionHeading
            eyebrow="Representative engagements"
            title="A firm in active growth"
          />
          <RevealGroup className="mt-12 grid gap-6 md:grid-cols-3">
            {engagements.map((e) => (
              <RevealItem
                key={e.sector}
                className="rounded-xl border border-ink-100 bg-white p-7 shadow-card"
              >
                <p className="text-xs font-semibold uppercase tracking-wider text-gold-600">
                  {e.sector}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-ink-700">
                  {e.body}
                </p>
              </RevealItem>
            ))}
          </RevealGroup>
          <Reveal delay={0.1}>
            <div className="mt-10 rounded-2xl border border-ink-100 bg-ink-50 p-8">
              <div className="flex items-start gap-3">
                <Check className="mt-1 size-5 shrink-0 text-gold-500" />
                <p className="text-sm leading-relaxed text-ink-700">
                  <span className="font-semibold text-ink-900">
                    A note on our track record.
                  </span>{" "}
                  Arrowlink was founded in September 2024. We are a firm in active
                  growth — we do not claim decades of history, and we do not
                  exaggerate our scale. What we offer is a structured procurement
                  process, documented supplier methodology, accredited third-party
                  inspection partnerships, and a verified legal entity. Every claim
                  we make is supported by documentation available on request.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
