import type { Metadata } from "next";
import { ShieldCheck, Clock, FileText, Lock } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { PageHero } from "@/components/sections/page-hero";
import { OnboardingForm } from "@/components/forms/onboarding-form";
import { pageMetadata, breadcrumbJsonLd } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Client Onboarding Brief",
  description:
    "Complete the Arrowlink client onboarding brief. The information you provide is used to prepare a sourcing strategy, supplier verification plan and procurement proposal specific to your project.",
  path: "/onboarding",
  keywords: ["client onboarding", "procurement brief", "sourcing requirement form"],
});

const assurances = [
  { icon: <Clock className="size-5 text-gold-500" />, t: "Receipt acknowledged within 1 working day" },
  { icon: <FileText className="size-5 text-gold-500" />, t: "Custom proposal within 3–5 working days" },
  { icon: <Lock className="size-5 text-gold-500" />, t: "Held in confidence — never shared with suppliers" },
];

export default function OnboardingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([{ name: "Client Onboarding", path: "/onboarding" }]),
          ),
        }}
      />
      <PageHero
        eyebrow="Client onboarding brief"
        title="Tell us about your procurement project"
        description="The more detail you provide, the more accurate the supplier shortlist, pricing benchmarks and procurement strategy we prepare. It takes about five minutes — and nothing is committed until a written scope is agreed."
        crumbs={[{ name: "Client Onboarding" }]}
      >
        <div className="flex flex-wrap gap-x-6 gap-y-2">
          {assurances.map((a) => (
            <span key={a.t} className="flex items-center gap-2 text-sm text-ink-100/80">
              {a.icon} {a.t}
            </span>
          ))}
        </div>
      </PageHero>

      <section className="py-16 sm:py-20">
        <div className="container-wide max-w-4xl">
          <Reveal>
            <OnboardingForm />
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 flex items-center justify-center gap-2 text-center text-sm text-muted-foreground">
              <ShieldCheck className="size-4 text-gold-500" />
              Confidential — submitted information is used solely to prepare your
              sourcing proposal.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
