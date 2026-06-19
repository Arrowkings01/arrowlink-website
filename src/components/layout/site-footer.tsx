import Link from "next/link";
import { Mail, Phone, Linkedin, MessageCircle, MapPin } from "lucide-react";
import { siteConfig, footerNav } from "@/lib/site-config";
import { Logo } from "@/components/brand/logo";
import { Button } from "@/components/ui/button";

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-white/10 bg-ink-950 text-ink-100">
      {/* CTA band */}
      <div className="border-b border-white/10">
        <div className="container-wide flex flex-col items-start gap-6 py-12 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-xl">
            <h2 className="text-2xl font-semibold text-white sm:text-3xl">
              Have a product to source or a supplier to verify?
            </h2>
            <p className="mt-2 text-ink-200/80">
              Start with a focused discovery call. No commitment, no generic
              proposal — just a clear conversation about your requirement.
            </p>
          </div>
          <div className="flex flex-shrink-0 flex-wrap gap-3">
            <Button asChild variant="gold" size="lg">
              <Link href="/book">Book a Consultation</Link>
            </Button>
            <Button
              asChild
              size="lg"
              className="bg-white/10 text-white ring-1 ring-white/20 hover:bg-white/15"
            >
              <a href={siteConfig.contact.whatsapp} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="size-4" /> WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </div>

      <div className="container-wide grid gap-12 py-14 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <Logo light />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-ink-200/70">
            A strategic sourcing and procurement consultancy helping importers,
            distributors and corporate buyers source globally — with documented
            process and client-side representation.
          </p>
          <div className="mt-6 space-y-2.5 text-sm">
            <a href={`mailto:${siteConfig.contact.email}`} className="flex items-center gap-2.5 text-ink-200/80 hover:text-white">
              <Mail className="size-4 text-gold-400" /> {siteConfig.contact.email}
            </a>
            <a href={`tel:${siteConfig.contact.phoneIntl}`} className="flex items-center gap-2.5 text-ink-200/80 hover:text-white">
              <Phone className="size-4 text-gold-400" /> {siteConfig.contact.phone}
            </a>
            <p className="flex items-center gap-2.5 text-ink-200/80">
              <MapPin className="size-4 text-gold-400" /> Registered in {siteConfig.registeredIn} · Serving clients worldwide
            </p>
          </div>
          <div className="mt-6 flex gap-3">
            <a
              href={siteConfig.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="grid size-10 place-items-center rounded-md bg-white/5 text-ink-100 ring-1 ring-white/10 hover:bg-white/10 hover:text-white"
            >
              <Linkedin className="size-4.5" />
            </a>
            <a
              href={siteConfig.contact.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="grid size-10 place-items-center rounded-md bg-white/5 text-ink-100 ring-1 ring-white/10 hover:bg-white/10 hover:text-white"
            >
              <MessageCircle className="size-4.5" />
            </a>
          </div>
        </div>

        <FooterCol title="Company" links={footerNav.company} />
        <FooterCol title="Services" links={footerNav.services} />
        <FooterCol title="Engage" links={footerNav.engage} />
      </div>

      <div className="border-t border-white/10">
        <div className="container-wide flex flex-col gap-3 py-6 text-xs text-ink-200/60 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {siteConfig.legalName}. All rights reserved. · RC{" "}
            {siteConfig.rcNumber}
          </p>
          <p>
            Incorporated under {siteConfig.governingAct.split("—")[0].trim()} ·{" "}
            {siteConfig.structure}
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  links,
}: {
  title: string;
  links: { title: string; href: string }[];
}) {
  return (
    <div>
      <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-400">
        {title}
      </h3>
      <ul className="mt-4 space-y-2.5 text-sm">
        {links.map((l) => (
          <li key={l.href}>
            <Link
              href={l.href}
              className="text-ink-200/75 transition-colors hover:text-white"
            >
              {l.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
