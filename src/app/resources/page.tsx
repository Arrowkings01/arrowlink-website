import type { Metadata } from "next";
import Link from "next/link";
import {
  FileText,
  Download,
  ShieldCheck,
  ClipboardList,
  BookOpen,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { PageHero } from "@/components/sections/page-hero";
import { CtaBand } from "@/components/sections/cta-band";
import { pageMetadata, faqJsonLd, breadcrumbJsonLd } from "@/lib/seo";
import { faqs } from "@/lib/content";

export const metadata: Metadata = pageMetadata({
  title: "Resources & Procurement Insight",
  description:
    "Procurement guides, the Arrowlink client onboarding brief, supplier-verification frameworks and answers to common sourcing questions.",
  path: "/resources",
  keywords: ["procurement guide", "supplier verification checklist", "sourcing FAQ"],
});

const guides = [
  {
    icon: <ClipboardList className="size-6 text-gold-500" />,
    title: "Client Onboarding Brief",
    body: "The structured brief we use to capture your product, specifications, budget and compliance requirements before a sourcing proposal is prepared.",
    cta: "Complete it online",
    href: "/onboarding",
  },
  {
    icon: <ShieldCheck className="size-6 text-gold-500" />,
    title: "Supplier Verification Framework",
    body: "How we classify suppliers as Verified, Conditional or High-Risk — and the six checkpoints applied before any recommendation.",
    cta: "See the framework",
    href: "/how-we-work#supplier-verification",
  },
  {
    icon: <BookOpen className="size-6 text-gold-500" />,
    title: "The 8-Stage Procurement Process",
    body: "A walkthrough of every stage from brief and market research to pre-shipment inspection and dispatch — and what you receive at each.",
    cta: "Read the process",
    href: "/how-we-work",
  },
];

export default function ResourcesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(faqs)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([{ name: "Resources", path: "/resources" }]),
          ),
        }}
      />
      <PageHero
        eyebrow="Resources"
        title="Procurement insight, frameworks and tools"
        description="Practical resources to help you source smarter and verify before you commit. More guides and articles are published as our insight library grows."
        crumbs={[{ name: "Resources" }]}
      />

      {/* Guides */}
      <section className="py-20 sm:py-24">
        <div className="container-wide">
          <SectionHeading
            eyebrow="Frameworks & tools"
            title="Start with the essentials"
          />
          <RevealGroup className="mt-12 grid gap-6 md:grid-cols-3">
            {guides.map((g) => (
              <RevealItem
                key={g.title}
                className="flex h-full flex-col rounded-xl border border-ink-100 bg-white p-7 shadow-card transition-all hover:-translate-y-1 hover:border-gold-200 hover:shadow-elevated"
              >
                <span className="grid size-12 place-items-center rounded-lg bg-gold-50 ring-1 ring-gold-100">
                  {g.icon}
                </span>
                <h3 className="mt-5 text-lg">{g.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {g.body}
                </p>
                <Link
                  href={g.href}
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-gold-600 hover:text-gold-700"
                >
                  {g.cta} <ArrowRight className="size-4" />
                </Link>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* Brochure download */}
      <section className="bg-white py-16">
        <div className="container-wide">
          <Reveal className="flex flex-col items-start gap-6 rounded-2xl border border-ink-100 bg-paper p-8 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-start gap-4">
              <span className="grid size-12 shrink-0 place-items-center rounded-lg bg-ink-900 text-gold-400">
                <FileText className="size-6" />
              </span>
              <div>
                <h3 className="text-lg">Corporate Brochure 2025</h3>
                <p className="mt-1 max-w-xl text-sm text-muted-foreground">
                  Our full capability overview — services, process, verification
                  methodology and engagement model. Available on request.
                </p>
              </div>
            </div>
            <Button asChild variant="gold">
              <Link href="/contact?subject=brochure">
                <Download className="size-4" /> Request the brochure
              </Link>
            </Button>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 sm:py-24">
        <div className="container-wide grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionHeading
              eyebrow="FAQ"
              title="Answers to common procurement questions"
              description="Still unsure? Book a consultation and we'll address your specific situation directly."
            />
            <Button asChild className="mt-6" variant="outline">
              <Link href="/book">
                Book a consultation <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
          <Reveal delay={0.05}>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((f, i) => (
                <AccordionItem key={f.q} value={`item-${i}`}>
                  <AccordionTrigger>{f.q}</AccordionTrigger>
                  <AccordionContent>{f.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
