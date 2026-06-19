import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";

type Crumb = { name: string; href?: string };

export function PageHero({
  eyebrow,
  title,
  description,
  crumbs = [],
  children,
  align = "left",
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  crumbs?: Crumb[];
  children?: React.ReactNode;
  align?: "left" | "center";
}) {
  return (
    <section className="relative overflow-hidden bg-ink-950 text-white">
      <div className="bg-grid-dark pointer-events-none absolute inset-0 opacity-60" />
      <div
        className="pointer-events-none absolute -right-40 -top-20 size-[34rem] rounded-full opacity-20 blur-3xl"
        style={{ background: "radial-gradient(circle, #274c7f, transparent 70%)" }}
      />
      <div
        className={cn(
          "container-wide relative py-16 sm:py-20 lg:py-24",
          align === "center" && "text-center",
        )}
      >
        {crumbs.length > 0 && (
          <Reveal>
            <nav
              aria-label="Breadcrumb"
              className={cn(
                "mb-6 flex items-center gap-1.5 text-sm text-ink-100/60",
                align === "center" && "justify-center",
              )}
            >
              <Link href="/" className="hover:text-white">
                Home
              </Link>
              {crumbs.map((c) => (
                <span key={c.name} className="flex items-center gap-1.5">
                  <ChevronRight className="size-3.5 opacity-50" />
                  {c.href ? (
                    <Link href={c.href} className="hover:text-white">
                      {c.name}
                    </Link>
                  ) : (
                    <span className="text-ink-100/90">{c.name}</span>
                  )}
                </span>
              ))}
            </nav>
          </Reveal>
        )}

        <Reveal delay={0.05}>
          {eyebrow && (
            <span
              className={cn(
                "eyebrow text-gold-400",
                align === "center" && "justify-center",
              )}
            >
              <span className="h-px w-6 bg-current opacity-60" />
              {eyebrow}
            </span>
          )}
          <h1
            className={cn(
              "mt-4 max-w-3xl text-4xl font-semibold leading-[1.08] tracking-tight text-white sm:text-5xl",
              align === "center" && "mx-auto",
            )}
          >
            {title}
          </h1>
        </Reveal>

        {description && (
          <Reveal delay={0.1}>
            <p
              className={cn(
                "mt-6 max-w-2xl text-lg leading-relaxed text-ink-100/80",
                align === "center" && "mx-auto",
              )}
            >
              {description}
            </p>
          </Reveal>
        )}

        {children && (
          <Reveal delay={0.15}>
            <div className={cn("mt-9", align === "center" && "flex justify-center")}>
              {children}
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
