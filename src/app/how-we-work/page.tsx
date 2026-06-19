import type { Metadata } from "next";
import { ShieldCheck, FileCheck2, Clock, Award, Check } from "lucide-react";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { PageHero } from "@/components/sections/page-hero";
import { CtaBand } from "@/components/sections/cta-band";
import { pageMetadata, breadcrumbJsonLd } from "@/lib/seo";
import { processSteps, verificationTiers } from "@/lib/content";

export const metadata: Metadata = pageMetadata({
  title: "How We Work — Our Procurement Process",
  description:
    "Every Arrowlink engagement follows a documented eight-stage procurement process — from brief and supplier verification through price negotiation, sampling and pre-shipment inspection.",
  path: "/how-we-work",
  keywords: ["procurement process", "supplier verification process", "pre-shipment inspection"],
});

const inspectionStats = [
  { value: "18+", label: "On-site checkpoints" },
  { value: "ISO 2859-1", label: "AQL sampling standard" },
  { value: "48h", label: "Inspection arrangement" },
  { value: "24h", label: "Report turnaround" },
];

const inspectionChecks = [
  "Quantity check",
  "Product appearance",
  "Performance & function tests",
  "Workmanship check",
  "Assembly & accessories",
  "Material check",
  "Size & measurements",
  "Colours & logo check",
  "Barcode scan test",
  "Packing & shipping marks",
  "Carton condition",
  "Abuse & compliance tests",
];

export default function HowWeWorkPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([{ name: "How We Work", path: "/how-we-work" }]),
          ),
        }}
      />
      <PageHero
        eyebrow="How we work"
        title="A documented process — at every stage, in writing"
        description="Every Arrowlink engagement follows the same structured eight-stage process, designed to ensure consistency, accountability and documented outcomes. No verbal-only updates. No undocumented commitments."
        crumbs={[{ name: "How We Work" }]}
      />

      {/* Process timeline */}
      <section className="py-20 sm:py-24">
        <div className="container-wide">
          <SectionHeading
            eyebrow="The engagement"
            title="Eight stages, brief to dispatch"
          />
          <RevealGroup className="mt-14 grid gap-6 md:grid-cols-2">
            {processSteps.map((step) => (
              <RevealItem
                key={step.n}
                className="relative rounded-xl border border-ink-100 bg-white p-7 shadow-card"
              >
                <div className="flex items-baseline gap-4">
                  <span className="font-display text-3xl font-semibold text-gold-400">
                    {step.n}
                  </span>
                  <h3 className="text-lg">{step.title}</h3>
                </div>
                <p className="mt-3 pl-[3.25rem] text-sm leading-relaxed text-muted-foreground">
                  {step.body}
                </p>
              </RevealItem>
            ))}
          </RevealGroup>
          <Reveal delay={0.1}>
            <p className="mt-10 rounded-xl border border-gold-200 bg-gold-50 p-6 text-center text-sm font-medium text-ink-800">
              All engagements are documented. Clients receive a written report at
              the end of every stage.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Verification deep-dive */}
      <section className="bg-white py-20 sm:py-24">
        <div className="container-wide">
          <SectionHeading
            eyebrow="Supplier verification"
            title="What we verify before you commit"
            description="Verification is not a one-time check. It is a structured process applied before every new supplier relationship is formalised."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <Reveal className="rounded-xl border border-ink-100 bg-paper p-7">
              <h3 className="text-lg">Verification checklist</h3>
              <ul className="mt-5 grid gap-3">
                {[
                  "Business registration and legal trading status",
                  "Factory vs. trading-company determination",
                  "Production scope and category relevance",
                  "Export history and verified transaction records",
                  "Platform certification and trade-assurance status",
                  "Capacity vs. claimed capability review",
                ].map((c) => (
                  <li key={c} className="flex items-start gap-2.5 text-sm text-ink-700">
                    <Check className="mt-0.5 size-4 shrink-0 text-gold-500" />
                    {c}
                  </li>
                ))}
              </ul>
            </Reveal>
            <div className="space-y-4">
              {verificationTiers.map((t) => (
                <Reveal
                  key={t.tier}
                  className="rounded-xl border border-ink-100 bg-paper p-5"
                >
                  <h4 className="text-sm font-semibold text-ink-900">{t.tier}</h4>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    {t.body}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Inspection partner */}
      <section className="py-20 sm:py-24">
        <div className="container-wide">
          <SectionHeading
            eyebrow="Quality assurance"
            title="Independent, third-party pre-shipment inspection"
            description="Quality inspections are coordinated through accredited, independent partners — including ISO 9001:2015-accredited, CNAS-certified firms operating across China and Asia since 2004. Inspector independence from both factory and buyer is a structural requirement, not a policy preference."
          />
          <RevealGroup className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {inspectionStats.map((s) => (
              <RevealItem
                key={s.label}
                className="rounded-xl border border-ink-100 bg-white p-6 text-center shadow-card"
              >
                <p className="font-display text-3xl font-semibold text-ink-900">
                  {s.value}
                </p>
                <p className="mt-1.5 text-xs text-muted-foreground">{s.label}</p>
              </RevealItem>
            ))}
          </RevealGroup>

          <Reveal className="mt-8 rounded-2xl border border-ink-100 bg-white p-8 shadow-card">
            <div className="flex flex-wrap items-center gap-6">
              {[
                { icon: <Award className="size-5 text-gold-500" />, t: "ISO 9001:2015 accredited" },
                { icon: <ShieldCheck className="size-5 text-gold-500" />, t: "CNAS certified" },
                { icon: <Clock className="size-5 text-gold-500" />, t: "Reports within 24 hours" },
                { icon: <FileCheck2 className="size-5 text-gold-500" />, t: "Critical defects: 0 permitted" },
              ].map((x) => (
                <span key={x.t} className="flex items-center gap-2 text-sm font-medium text-ink-800">
                  {x.icon} {x.t}
                </span>
              ))}
            </div>
            <div className="mt-7 border-t border-ink-100 pt-7">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-gold-600">
                Inspection checkpoints include
              </h3>
              <div className="mt-4 grid gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
                {inspectionChecks.map((c) => (
                  <span key={c} className="flex items-center gap-2 text-sm text-ink-700">
                    <Check className="size-4 shrink-0 text-gold-500" /> {c}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
