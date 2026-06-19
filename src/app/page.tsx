import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  FileText,
  Globe2,
  Quote,
  AlertTriangle,
  XCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { Icon } from "@/components/icon-map";
import { CtaBand } from "@/components/sections/cta-band";
import { siteConfig } from "@/lib/site-config";
import { services } from "@/lib/services";
import {
  processSteps,
  principles,
  industries,
  verificationTiers,
  testimonial,
  clientTypes,
} from "@/lib/content";

const featuredServices = services.filter((s) => s.featured).slice(0, 6);

export default function HomePage() {
  return (
    <>
      <Hero />
      <MarketsStrip />
      <ValueProps />
      <ServicesPreview />
      <ProcessPreview />
      <VerificationSection />
      <IndustriesPreview />
      <Testimonial />
      <PrinciplesSection />
      <CtaBand />
    </>
  );
}

/* ───────────────────────── Hero ───────────────────────── */
function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink-950 text-white">
      <div className="bg-grid-dark pointer-events-none absolute inset-0 opacity-70" />
      <div
        className="pointer-events-none absolute -left-40 top-0 size-[36rem] rounded-full opacity-25 blur-3xl"
        style={{ background: "radial-gradient(circle, #274c7f, transparent 70%)" }}
      />
      <div
        className="pointer-events-none absolute -right-32 bottom-0 size-[30rem] rounded-full opacity-20 blur-3xl"
        style={{ background: "radial-gradient(circle, #b8924a, transparent 70%)" }}
      />

      <div className="container-wide relative grid gap-14 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-28">
        <div>
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-xs font-medium text-ink-100">
              <span className="size-1.5 rounded-full bg-gold-400" />
              Global Sourcing · Strategic Procurement Consultancy
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="mt-6 text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              Procurement done right.
              <span className="block text-gradient-gold">Sourced globally.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-100/80">
              We help importers, distributors, ecommerce brands and corporate
              buyers source products, verify suppliers and manage procurement
              projects across China, Asia, Europe, the Americas and Africa — with
              documented process and uncompromising client-side representation.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button asChild variant="gold" size="lg">
                <Link href="/book">
                  Book a Consultation <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                className="bg-white/10 text-white ring-1 ring-white/20 hover:bg-white/15"
              >
                <Link href="/services">Explore Services</Link>
              </Button>
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <ul className="mt-9 flex flex-wrap gap-x-6 gap-y-2 text-sm text-ink-100/70">
              {[
                "Independent supplier vetting",
                "Documented, not verbal",
                "No supplier commissions",
              ].map((t) => (
                <li key={t} className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-gold-400" /> {t}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        {/* Stat / proof card */}
        <Reveal delay={0.15} className="lg:justify-self-end">
          <div className="relative w-full max-w-md rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm sm:p-8">
            <div className="flex items-center gap-3">
              <span className="grid size-11 place-items-center rounded-lg bg-gold-500/15 ring-1 ring-gold-400/30">
                <Globe2 className="size-5.5 text-gold-400" />
              </span>
              <div>
                <p className="text-sm font-semibold text-white">
                  Sourcing where it makes sense
                </p>
                <p className="text-xs text-ink-100/60">
                  Not a China-only agency
                </p>
              </div>
            </div>

            <div className="mt-7 grid grid-cols-2 gap-px overflow-hidden rounded-xl bg-white/10">
              {siteConfig.stats.map((s) => (
                <div key={s.label} className="bg-ink-950/80 p-5">
                  <p className="font-display text-3xl font-semibold text-gold-400">
                    {s.value}
                  </p>
                  <p className="mt-1 text-xs leading-snug text-ink-100/70">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-6 flex items-center justify-between rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3">
              <div>
                <p className="text-xs uppercase tracking-wider text-ink-100/50">
                  Registered entity
                </p>
                <p className="text-sm font-medium text-white">
                  RC {siteConfig.rcNumber} · {siteConfig.registeredIn}
                </p>
              </div>
              <ShieldCheck className="size-6 text-gold-400" />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ─────────────────── Markets strip (trust bar) ─────────────────── */
function MarketsStrip() {
  return (
    <div className="border-y border-ink-100 bg-white">
      <div className="container-wide flex flex-col gap-4 py-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
          Sourcing markets
        </p>
        <div className="flex flex-wrap items-center gap-x-7 gap-y-2">
          {siteConfig.markets.map((m) => (
            <span
              key={m.name}
              className="text-sm font-semibold text-ink-800"
            >
              {m.name}
            </span>
          ))}
          <span className="text-sm text-muted-foreground">+ assessed per brief</span>
        </div>
      </div>
    </div>
  );
}

/* ───────────────────────── Value props ───────────────────────── */
function ValueProps() {
  const items = [
    {
      icon: <Globe2 className="size-6 text-gold-500" />,
      title: "Multi-platform, global reach",
      body: "We source across global manufacturing channels — accessing factory-direct pricing tiers that standard English-language search never surfaces.",
    },
    {
      icon: <ShieldCheck className="size-6 text-gold-500" />,
      title: "Independent supplier vetting",
      body: "Every supplier is documented and verified — registration, factory status, capacity and export history — before any recommendation is made.",
    },
    {
      icon: <FileText className="size-6 text-gold-500" />,
      title: "Documented, not verbal",
      body: "You receive written supplier reports, pricing benchmarks, negotiation outcomes and inspection findings — an auditable procurement record.",
    },
  ];
  return (
    <section className="py-20 sm:py-24">
      <div className="container-wide">
        <SectionHeading
          eyebrow="Why Arrowlink"
          title="The procurement market has no shortage of agents. It lacks rigour."
          description="We apply the same structured, independent, documented process to every engagement — regardless of order size or product category. That is the standard Arrowlink is built on."
        />
        <RevealGroup className="mt-14 grid gap-6 md:grid-cols-3">
          {items.map((item) => (
            <RevealItem
              key={item.title}
              className="group rounded-xl border border-ink-100 bg-white p-7 shadow-card transition-all hover:-translate-y-1 hover:border-gold-200 hover:shadow-elevated"
            >
              <span className="grid size-12 place-items-center rounded-lg bg-gold-50 ring-1 ring-gold-100">
                {item.icon}
              </span>
              <h3 className="mt-5 text-xl">{item.title}</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                {item.body}
              </p>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}

/* ───────────────────── Services preview ───────────────────── */
function ServicesPreview() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="container-wide">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="What we do"
            title="End-to-end procurement, broken into services you can buy"
            description="From a single supplier verification to full-cycle order management — engage exactly the support you need."
          />
          <Reveal delay={0.1}>
            <Button asChild variant="outline">
              <Link href="/services">
                All services <ArrowRight className="size-4" />
              </Link>
            </Button>
          </Reveal>
        </div>

        <RevealGroup className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredServices.map((s) => (
            <RevealItem key={s.slug}>
              <Link
                href={`/services#${s.slug}`}
                className="group flex h-full flex-col rounded-xl border border-ink-100 bg-paper p-7 transition-all hover:-translate-y-1 hover:border-gold-200 hover:bg-white hover:shadow-elevated"
              >
                <div className="flex items-center justify-between">
                  <span className="grid size-12 place-items-center rounded-lg bg-ink-900 text-gold-400 transition-colors group-hover:bg-ink-800">
                    <Icon name={s.icon} className="size-6" />
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-wider text-gold-600">
                    {s.price}
                  </span>
                </div>
                <h3 className="mt-5 text-lg">{s.title}</h3>
                <p className="mt-2.5 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {s.outcome}
                </p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-ink-900 group-hover:text-gold-600">
                  Learn more <ArrowRight className="size-4" />
                </span>
              </Link>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}

/* ───────────────────── Process preview ───────────────────── */
function ProcessPreview() {
  return (
    <section className="py-20 sm:py-24">
      <div className="container-wide grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeading
            eyebrow="How we work"
            title="A documented eight-stage procurement process"
            description="Every engagement follows the same structured path — consistency and accountability at every stage, with a written report at the end of each."
          />
          <Reveal delay={0.15}>
            <Button asChild className="mt-8" variant="default">
              <Link href="/how-we-work">
                See the full process <ArrowRight className="size-4" />
              </Link>
            </Button>
          </Reveal>
        </div>

        <RevealGroup className="space-y-3">
          {processSteps.slice(0, 4).map((step) => (
            <RevealItem
              key={step.n}
              className="flex gap-5 rounded-xl border border-ink-100 bg-white p-5 shadow-card"
            >
              <span className="font-display text-2xl font-semibold text-gold-400">
                {step.n}
              </span>
              <div>
                <h3 className="text-base font-semibold text-ink-900">
                  {step.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  {step.body}
                </p>
              </div>
            </RevealItem>
          ))}
          <RevealItem className="rounded-xl border border-dashed border-ink-200 bg-paper p-5 text-center text-sm font-medium text-muted-foreground">
            + 4 more stages through to pre-shipment inspection &amp; dispatch
          </RevealItem>
        </RevealGroup>
      </div>
    </section>
  );
}

/* ───────────────────── Verification section ───────────────────── */
function VerificationSection() {
  const toneStyles = {
    danger: { ring: "ring-red-200", icon: <XCircle className="size-5 text-red-500" /> },
    warning: { ring: "ring-amber-200", icon: <AlertTriangle className="size-5 text-amber-500" /> },
    success: { ring: "ring-emerald-200", icon: <CheckCircle2 className="size-5 text-emerald-500" /> },
  } as const;

  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="container-wide">
        <SectionHeading
          align="center"
          eyebrow="Risk intelligence"
          title="Every supplier gets a verdict — in writing"
          description="The Asian manufacturing market contains a significant proportion of trading companies and brokers presenting as factories. We classify every supplier before you commit a single dollar."
        />
        <RevealGroup className="mx-auto mt-14 grid max-w-5xl gap-6 md:grid-cols-3">
          {verificationTiers.map((t) => (
            <RevealItem
              key={t.tier}
              className={`rounded-xl border border-ink-100 bg-paper p-6 ring-1 ${toneStyles[t.tone].ring}`}
            >
              <div className="flex items-center gap-2.5">
                {toneStyles[t.tone].icon}
                <h3 className="text-base font-semibold text-ink-900">
                  {t.tier}
                </h3>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {t.body}
              </p>
            </RevealItem>
          ))}
        </RevealGroup>
        <Reveal delay={0.1} className="mt-10 text-center">
          <Button asChild variant="linkGold">
            <Link href="/services#supplier-verification">
              How supplier verification works <ArrowRight className="size-4" />
            </Link>
          </Button>
        </Reveal>
      </div>
    </section>
  );
}

/* ───────────────────── Industries preview ───────────────────── */
function IndustriesPreview() {
  return (
    <section className="py-20 sm:py-24">
      <div className="container-wide">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Sector coverage"
            title="Category-adaptable sourcing across nine sectors"
            description="The process is consistent; the product knowledge is specific. We operate where global manufacturing has established, proven supply chains."
          />
          <Reveal delay={0.1}>
            <Button asChild variant="outline">
              <Link href="/industries">
                View industries <ArrowRight className="size-4" />
              </Link>
            </Button>
          </Reveal>
        </div>
        <RevealGroup className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3">
          {industries.map((ind) => (
            <RevealItem
              key={ind.name}
              className="flex items-center gap-3.5 rounded-lg border border-ink-100 bg-white p-4 transition-colors hover:border-gold-200"
            >
              <span className="grid size-10 shrink-0 place-items-center rounded-md bg-gold-50 text-gold-600 ring-1 ring-gold-100">
                <Icon name={ind.icon} className="size-5" />
              </span>
              <span className="text-sm font-semibold text-ink-800">
                {ind.name}
              </span>
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal delay={0.1}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-2 rounded-xl border border-ink-100 bg-white p-6">
            <span className="mr-2 text-sm font-semibold text-ink-900">
              Built for:
            </span>
            {clientTypes.map((c) => (
              <span
                key={c}
                className="rounded-full bg-ink-50 px-3 py-1 text-xs font-medium text-ink-700"
              >
                {c}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ───────────────────── Testimonial ───────────────────── */
function Testimonial() {
  return (
    <section className="bg-ink-950 py-20 text-white sm:py-24">
      <div className="container-wide">
        <Reveal className="mx-auto max-w-3xl text-center">
          <Quote className="mx-auto size-10 text-gold-400" />
          <blockquote className="mt-6 font-display text-2xl leading-relaxed text-white sm:text-[1.75rem] sm:leading-relaxed">
            &ldquo;{testimonial.quote}&rdquo;
          </blockquote>
          <div className="mt-8">
            <p className="font-semibold text-gold-400">{testimonial.author}</p>
            <p className="mt-1 text-sm text-ink-100/70">{testimonial.role}</p>
            <p className="mt-1 text-xs uppercase tracking-wider text-ink-100/50">
              {testimonial.source}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ───────────────────── Principles ───────────────────── */
function PrinciplesSection() {
  return (
    <section className="py-20 sm:py-24">
      <div className="container-wide">
        <SectionHeading
          eyebrow="Operating principles"
          title="What it means to have procurement done right"
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
  );
}
