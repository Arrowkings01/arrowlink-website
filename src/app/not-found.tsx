import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="bg-ink-950 text-white">
      <div className="container-wide flex min-h-[70vh] flex-col items-center justify-center py-24 text-center">
        <span className="font-display text-7xl font-semibold text-gold-400">404</span>
        <h1 className="mt-4 text-3xl text-white">This page couldn&apos;t be sourced</h1>
        <p className="mt-3 max-w-md text-ink-100/70">
          The page you&apos;re looking for has moved or no longer exists. Let&apos;s
          get you back to something useful.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button asChild variant="gold" size="lg">
            <Link href="/">Back to home</Link>
          </Button>
          <Button
            asChild
            size="lg"
            className="bg-white/10 text-white ring-1 ring-white/20 hover:bg-white/15"
          >
            <Link href="/services">Explore services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
