import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { siteConfig } from "@/lib/site-config";

type CtaBandProps = {
  title?: string;
  description?: string;
  primaryLabel?: string;
  primaryHref?: string;
};

export function CtaBand({
  title = "Let's scope your procurement requirement.",
  description = "Book a focused discovery call. We'll confirm the right service, timeline and cost within 24 hours — and agree a written scope before any fee is charged.",
  primaryLabel = "Book a Consultation",
  primaryHref = "/book",
}: CtaBandProps) {
  return (
    <section className="bg-paper py-20 sm:py-24">
      <div className="container-wide">
        <Reveal className="relative overflow-hidden rounded-2xl bg-ink-950 px-6 py-14 shadow-elevated sm:px-12 lg:px-16 lg:py-20">
          <div className="bg-grid-dark pointer-events-none absolute inset-0 opacity-60" />
          <div
            className="pointer-events-none absolute -right-24 -top-24 size-72 rounded-full opacity-30 blur-3xl"
            style={{ background: "radial-gradient(circle, #b8924a, transparent 70%)" }}
          />
          <div className="relative max-w-2xl">
            <span className="eyebrow text-gold-400">
              <span className="h-px w-6 bg-current opacity-60" />
              Start the conversation
            </span>
            <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
              {title}
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-ink-100/80">
              {description}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild variant="gold" size="lg">
                <Link href={primaryHref}>
                  {primaryLabel} <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                className="bg-white/10 text-white ring-1 ring-white/20 hover:bg-white/15"
              >
                <a
                  href={siteConfig.contact.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="size-4" /> Message on WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
