"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "@/lib/language";
import { useWaitlist } from "@/lib/waitlist-context";

/**
 * Small floating pill, bottom-right. Appears only after the visitor scrolls
 * past the hero, so it never competes with the hero CTA.
 */
export default function FloatingWaitlist() {
  const { t } = useLanguage();
  const { open, isOpen } = useWaitlist();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.7);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (isOpen) return null;

  return (
    <button
      onClick={open}
      className={`fixed bottom-5 right-5 z-[80] flex items-center gap-2 rounded-full bg-forest px-5 py-3 font-display text-sm font-bold text-white shadow-xl shadow-forest/30 transition-all duration-300 hover:-translate-y-0.5 hover:bg-forest-deep ${
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <span aria-hidden="true">✉️</span>
      {t.waitlist.floating}
    </button>
  );
}
