import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, Check, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { Icon } from "@/components/icon-map";
import { PageHero } from "@/components/sections/page-hero";
import { CtaBand } from "@/components/sections/cta-band";
import { pageMetadata, breadcrumbJsonLd } from "@/lib/seo";
import { industries, clientTypes } from "@/lib/content";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = pageMetadata({
  title: "Industries & Sourcing Markets",
  description:
    "Category-adaptable procurement across fashion, home, electronics, kitchenware, ceramics, bags, toys, industrial components and general merchandise — sourced from China, Vietnam, Turkey, Europe and beyond.",
  path: "/industries",
  keywords: ["sourcing industries", "global sourcing markets", "amazon private label sourcing"],
});

const whoWeWorkWith = [
  "Importers and distributors across the EU, UK and North America",
  "Ecommerce businesses sourcing for Shopify or Amazon stores",
  "Wholesalers expanding into new product categories",
  "Trading companies needing sourcing capacity for specific projects",
  "Procurement managers needing supplier verification for specific SKUs",
  "African importers entering global supply chains for the first time",
];

export default function IndustriesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([{ name: "Industries", path: "/industries" }]),
          ),
        }}
      />
      <PageHero
        eyebrow="Industries we serve"
        title="Consistent process. Category-specific knowledge."
        description="Arrowlink operates across product categories where global manufacturing has established proven supply chains. Our methodology adapts to your sector — the rigour never changes."
        crumbs={[{ name: "Industries" }]}
      />

      {/* Industry grid */}
      <section className="py-20 sm:py-24">
        <div className="container-wide">
          <SectionHeading
            eyebrow="Sector coverage"
            title="Nine sectors, one disciplined approach"
          />
          <RevealGroup className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((ind) => (
              <RevealItem
                key={ind.name}
                className="group rounded-xl border border-ink-100 bg-white p-7 shadow-card transition-all hover:-translate-y-1 hover:border-gold-200 hover:shadow-elevated"
              >
                <span className="grid size-12 place-items-center rounded-lg bg-gold-50 text-gold-600 ring-1 ring-gold-100">
                  <Icon name={ind.icon} className="size-6" />
                </span>
                <h3 className="mt-5 text-lg">{ind.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {ind.note}
                </p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* Sourcing markets */}
      <section className="bg-white py-20 sm:py-24">
        <div className="container-wide grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeading
            eyebrow="Global sourcing markets"
            title="We are not a China-only agency"
            description="China is our primary and deepest market — but we source wherever it makes commercial and compliance sense for your product. The right market is the one that fits your specification, cost target and risk profile."
          />
          <RevealGroup className="grid gap-4 sm:grid-cols-2">
            {siteConfig.markets.map((m) => (
              <RevealItem
                key={m.name}
                className="rounded-xl border border-ink-100 bg-paper p-5"
              >
                <div className="flex items-center gap-2">
                  <MapPin className="size-4 text-gold-500" />
                  <h3 className="text-base font-semibold text-ink-900">
                    {m.name}
                  </h3>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {m.note}
                </p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* Who we work with */}
      <section className="py-20 sm:py-24">
        <div className="container-wide grid gap-14 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Who we work with"
              title="Built for serious buyers at every stage"
            />
            <RevealGroup className="mt-8 space-y-3">
              {whoWeWorkWith.map((w) => (
                <RevealItem key={w} className="flex items-start gap-3">
                  <Check className="mt-0.5 size-5 shrink-0 text-gold-500" />
                  <span className="text-ink-700">{w}</span>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
          <Reveal className="rounded-2xl border border-ink-100 bg-white p-8 shadow-card">
            <h3 className="text-lg">Client profiles we support</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              From first-time importers to established procurement teams.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {clientTypes.map((c) => (
                <span
                  key={c}
                  className="rounded-full bg-ink-50 px-3.5 py-1.5 text-sm font-medium text-ink-700"
                >
                  {c}
                </span>
              ))}
            </div>
            <Button asChild className="mt-8" variant="gold">
              <Link href="/book">
                Discuss your category <ArrowRight className="size-4" />
              </Link>
            </Button>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
