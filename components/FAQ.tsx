"use client";

import { useState } from "react";
import { useLanguage } from "@/lib/language";
import Reveal from "./Reveal";

export default function FAQ() {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="mx-auto max-w-3xl scroll-mt-20 px-4 py-20 sm:px-6">
      <Reveal className="text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-terracotta">
          {t.faq.eyebrow}
        </p>
        <h2 className="mt-3 font-display text-4xl font-light tracking-tight text-ink sm:text-5xl">
          {t.faq.title}
        </h2>
      </Reveal>

      <div className="mt-10 space-y-3">
        {t.faq.items.map((item, i) => {
          const isOpen = openIndex === i;
          return (
            <Reveal key={item.q} delay={i * 60}>
              <div className="overflow-hidden rounded-2xl border border-ink/5 bg-white shadow-sm">
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${i}`}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                >
                  <span className="font-display text-lg font-medium text-ink">
                    {item.q}
                  </span>
                  <span
                    aria-hidden="true"
                    className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-cream text-ink transition-transform duration-300 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  >
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path
                        d="M6 1v10M1 6h10"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                </button>
                <div
                  id={`faq-panel-${i}`}
                  className={`grid transition-all duration-300 ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-[15px] leading-relaxed text-ink/70">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
