"use client";

import { useLanguage } from "@/lib/language";
import Reveal from "./Reveal";
import WaitlistForm from "./WaitlistForm";

export default function FinalCTA() {
  const { t } = useLanguage();

  return (
    <section className="px-4 pb-20 sm:px-6">
      <Reveal>
        <div className="relative mx-auto max-w-5xl overflow-hidden rounded-4xl bg-forest px-6 py-16 text-center text-white sm:px-12 sm:py-20">
          {/* Ambient blobs */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-16 -top-16 h-56 w-56 rounded-full bg-saffron/25 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-20 -right-12 h-64 w-64 rounded-full bg-lagoon/30 blur-3xl"
          />

          <div className="relative">
            <h2 className="mt-4 font-display text-4xl font-light tracking-tight sm:text-5xl">
              {t.finalCta.title}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-white/80">
              {t.finalCta.text}
            </p>
            <div className="mx-auto mt-8 max-w-lg">
              <WaitlistForm variant="dark" />
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
