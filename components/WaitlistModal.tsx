"use client";

import { useEffect, useRef } from "react";
import { useLanguage } from "@/lib/language";
import { useWaitlist } from "@/lib/waitlist-context";
import WaitlistForm from "./WaitlistForm";

export default function WaitlistModal() {
  const { t } = useLanguage();
  const { isOpen, close } = useWaitlist();
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  // Close on Escape, lock body scroll, focus the dialog.
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, close]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[90] flex items-end justify-center p-4 sm:items-center"
      role="dialog"
      aria-modal="true"
      aria-labelledby="waitlist-modal-title"
    >
      {/* Backdrop */}
      <button
        aria-label={t.waitlist.close}
        onClick={close}
        className="absolute inset-0 bg-ink/50 backdrop-blur-sm"
        tabIndex={-1}
      />

      {/* Panel */}
      <div className="relative w-full max-w-md animate-pop rounded-4xl bg-cream p-7 shadow-2xl sm:p-8">
        <button
          ref={closeButtonRef}
          onClick={close}
          aria-label={t.waitlist.close}
          className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-ink/5 text-ink/60 transition hover:bg-ink/10 hover:text-ink"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
            <path
              d="M1 1l12 12M13 1L1 13"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>

        <div className="mb-1 text-3xl" aria-hidden="true">
          🎟️
        </div>
        <h2
          id="waitlist-modal-title"
          className="font-display text-2xl font-extrabold tracking-tight text-ink"
        >
          {t.waitlist.modal_title}
        </h2>
        <p className="mt-2 text-[15px] leading-relaxed text-ink/70">
          {t.waitlist.modal_text}
        </p>

        <div className="mt-5">
          <WaitlistForm variant="light" />
        </div>
      </div>
    </div>
  );
}
