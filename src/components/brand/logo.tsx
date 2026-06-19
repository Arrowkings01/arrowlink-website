import Image from "next/image";
import { cn } from "@/lib/utils";

/**
 * Arrowlink lockup — the real globe-and-arrow mark (transparent PNG sourced
 * from the official logo) paired with the wordmark. The mark sits beside the
 * wordmark for a compact horizontal lockup that fits the header/footer.
 */
export function Logo({
  className,
  light = false,
}: {
  className?: string;
  light?: boolean;
}) {
  return (
    <span className={cn("flex items-center gap-2.5", className)}>
      <Image
        src={light ? "/brand/arrowlink-mark-white.png" : "/brand/arrowlink-mark.png"}
        alt="Arrowlink Global Procurement logo"
        width={368}
        height={330}
        priority
        className="h-10 w-auto"
      />
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "text-[1.15rem] font-bold tracking-tight",
            light ? "text-white" : "text-brand-600",
          )}
        >
          ARROWLINK
        </span>
        <span
          className={cn(
            "mt-0.5 text-[0.6rem] font-semibold uppercase tracking-[0.2em]",
            light ? "text-brand-200" : "text-brand-500/80",
          )}
        >
          Global Procurement
        </span>
      </span>
    </span>
  );
}
