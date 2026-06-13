"use client";

import Image from "next/image";
import { useLanguage } from "@/lib/language";
import Reveal from "./Reveal";

export default function Values() {
  const { t } = useLanguage();

  return (
    <section id="missione" className="scroll-mt-20 bg-terracotta-soft/60 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-terracotta">
            {t.values.eyebrow}
          </p>
          <h2 className="mt-3 font-display text-4xl font-light tracking-tight text-ink sm:text-5xl">
            {t.values.title}
          </h2>
        </Reveal>

        <div className="mt-12 grid items-center gap-10 lg:grid-cols-[1fr_1fr]">
          {/* Photo, grounded in the subject's world */}
          <Reveal className="order-2 lg:order-1">
            <div className="relative h-[360px] overflow-hidden rounded-4xl shadow-xl sm:h-[440px]">
              <Image
                src="/images/erbe.jpg"
                alt="Preparazione artigianale di prodotti naturali"
                fill
                sizes="(max-width: 1024px) 100vw, 600px"
                className="object-cover"
              />
            </div>
          </Reveal>

          {/* Mission + vision statements */}
          <div className="order-1 space-y-6 lg:order-2">
            <Reveal>
              <div className="rounded-3xl bg-white p-6 shadow-sm sm:p-8">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-forest">
                  {t.values.mission_label}
                </p>
                <p className="mt-3 text-lg leading-relaxed text-ink/80">
                  {t.values.mission}
                </p>
              </div>
            </Reveal>
            <Reveal delay={80}>
              <div className="rounded-3xl bg-white p-6 shadow-sm sm:p-8">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-lagoon">
                  {t.values.vision_label}
                </p>
                <p className="mt-3 text-lg leading-relaxed text-ink/80">
                  {t.values.vision}
                </p>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Value pillars */}
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {t.values.items.map((item, i) => (
            <Reveal key={item.title} delay={i * 70}>
              <div className="flex h-full flex-col rounded-3xl bg-white/70 p-6 shadow-sm">
                <span
                  className="font-display text-2xl font-light italic text-terracotta"
                  aria-hidden="true"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 font-display text-lg font-medium text-ink">
                  {item.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-ink/60">{item.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
