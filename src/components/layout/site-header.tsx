"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";
import { mainNav, siteConfig } from "@/lib/site-config";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/brand/logo";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  React.useEffect(() => {
    setOpen(false);
  }, [pathname]);

  React.useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "border-b border-ink-100/80 bg-paper/90 backdrop-blur-md supports-[backdrop-filter]:bg-paper/75"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div className="container-wide flex h-18 items-center justify-between py-3">
        <Link href="/" aria-label={`${siteConfig.shortName} home`}>
          <Logo />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {mainNav.map((item) => {
            const active =
              pathname === item.href || pathname.startsWith(item.href + "/");
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-md px-3.5 py-2 text-sm font-medium transition-colors",
                  active
                    ? "text-ink-900"
                    : "text-ink-700 hover:text-ink-900 hover:bg-ink-50",
                )}
              >
                {item.title}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={`tel:${siteConfig.contact.phoneIntl}`}
            className="flex items-center gap-1.5 text-sm font-medium text-ink-700 hover:text-ink-900"
          >
            <Phone className="size-4 text-gold-500" />
            {siteConfig.contact.phone}
          </a>
          <Button asChild variant="gold" size="sm">
            <Link href="/book">Book a Consultation</Link>
          </Button>
        </div>

        <button
          type="button"
          className="grid size-11 place-items-center rounded-md text-ink-900 hover:bg-ink-50 lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "lg:hidden",
          open ? "block" : "hidden",
        )}
      >
        <div className="container-wide border-t border-ink-100 bg-paper pb-8 pt-4">
          <nav className="flex flex-col" aria-label="Mobile">
            {mainNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="border-b border-ink-100/70 py-3.5 text-base font-medium text-ink-800"
              >
                {item.title}
              </Link>
            ))}
          </nav>
          <div className="mt-6 flex flex-col gap-3">
            <Button asChild variant="gold" size="lg">
              <Link href="/book">Book a Consultation</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href={`tel:${siteConfig.contact.phoneIntl}`}>
                <Phone className="size-4" /> {siteConfig.contact.phone}
              </a>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
