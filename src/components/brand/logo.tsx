import { cn } from "@/lib/utils";

/** Arrowlink wordmark with an arrow-link glyph. Pure SVG, no asset dependency. */
export function Logo({
  className,
  light = false,
}: {
  className?: string;
  light?: boolean;
}) {
  return (
    <span className={cn("flex items-center gap-2.5", className)}>
      <span
        className={cn(
          "grid size-9 place-items-center rounded-md",
          light ? "bg-white/10 ring-1 ring-white/20" : "bg-ink-900",
        )}
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className="size-5"
          aria-hidden="true"
        >
          <path
            d="M4 12h11M11 7l5 5-5 5"
            stroke="#b8924a"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="19.5" cy="12" r="2" fill="#b8924a" />
        </svg>
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-display text-[1.05rem] font-semibold tracking-tight",
            light ? "text-white" : "text-ink-900",
          )}
        >
          Arrowlink
        </span>
        <span
          className={cn(
            "text-[0.62rem] font-semibold uppercase tracking-[0.22em]",
            light ? "text-gold-300" : "text-gold-600",
          )}
        >
          Global Procurement
        </span>
      </span>
    </span>
  );
}
