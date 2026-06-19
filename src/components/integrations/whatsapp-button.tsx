"use client";

import * as React from "react";
import { MessageCircle, X } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

export function WhatsAppButton() {
  const [open, setOpen] = React.useState(false);
  const message = encodeURIComponent(
    "Hello Arrowlink, I'd like to discuss a procurement requirement.",
  );
  const href = `${siteConfig.contact.whatsapp}?text=${message}`;

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3 print:hidden">
      {open && (
        <div className="w-72 origin-bottom-right animate-fade-up rounded-xl border border-ink-100 bg-white p-4 shadow-elevated">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-2.5">
              <span className="grid size-9 place-items-center rounded-full bg-[#25D366]/10">
                <MessageCircle className="size-5 text-[#1da851]" />
              </span>
              <div>
                <p className="text-sm font-semibold text-ink-900">Arrowlink</p>
                <p className="text-xs text-emerald-600">● Typically replies fast</p>
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close"
              className="text-ink-400 hover:text-ink-700"
            >
              <X className="size-4" />
            </button>
          </div>
          <p className="mt-3 rounded-lg bg-ink-50 p-3 text-sm text-ink-700">
            Hi 👋 Tell us what you need to source or verify, and we&apos;ll point
            you to the right next step.
          </p>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 flex w-full items-center justify-center gap-2 rounded-lg bg-[#25D366] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#1da851]"
          >
            <MessageCircle className="size-4" /> Start WhatsApp chat
          </a>
        </div>
      )}
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label="Open WhatsApp chat"
        className={cn(
          "group grid size-14 place-items-center rounded-full bg-[#25D366] text-white shadow-elevated transition hover:scale-105 hover:bg-[#1da851]",
        )}
      >
        {open ? (
          <X className="size-6" />
        ) : (
          <MessageCircle className="size-7" />
        )}
      </button>
    </div>
  );
}
