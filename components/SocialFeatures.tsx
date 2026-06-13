"use client";

import Image from "next/image";
import { useLanguage } from "@/lib/language";
import Reveal from "./Reveal";

/** App feed mockup with real activity photos inside each card. */
function PhoneMockup() {
  const { t } = useLanguage();
  const p = t.social.phone;

  const cards = [
    { title: p.card1_title, meta: p.card1_meta, img: "/images/ceramica.jpg" },
    { title: p.card2_title, meta: p.card2_meta, img: "/images/padel.jpg" },
    { title: p.card3_title, meta: p.card3_meta, img: "/images/yoga.jpg" },
  ];

  return (
    <div className="relative mx-auto w-[290px]">
      {/* Soft ambient glow */}
      <div
        aria-hidden="true"
        className="absolute -left-12 -top-10 h-32 w-32 rounded-full bg-saffron/25 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-10 -right-12 h-36 w-36 rounded-full bg-lagoon/20 blur-3xl"
      />

      <div className="relative rounded-[2.8rem] border-[11px] border-ink bg-cream shadow-2xl">
        {/* Notch */}
        <div className="absolute left-1/2 top-2.5 z-10 h-5 w-24 -translate-x-1/2 rounded-full bg-ink" />

        <div className="space-y-3 px-3.5 pb-6 pt-10">
          <div className="flex items-center justify-between px-1">
            <span className="font-display text-lg font-semibold text-ink">
              {p.app_title}
            </span>
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-forest text-sm font-semibold text-white">
              C
            </span>
          </div>

          {cards.map((card) => (
            <div
              key={card.title}
              className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-ink/5"
            >
              <div className="relative h-24 w-full">
                <Image
                  src={card.img}
                  alt={card.title}
                  fill
                  sizes="270px"
                  className="object-cover"
                />
              </div>
              <div className="p-3">
                <p className="font-display text-[15px] font-semibold leading-tight text-ink">
                  {card.title}
                </p>
                <p className="mt-0.5 text-xs text-ink/55">{card.meta}</p>
                <div
                  aria-hidden="true"
                  className="mt-2.5 w-full rounded-full bg-terracotta py-1.5 text-center text-xs font-semibold text-white"
                >
                  {p.join}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function SocialFeatures() {
  const { t } = useLanguage();

  return (
    <section id="community" className="mx-auto max-w-6xl scroll-mt-24 px-4 py-24 sm:px-6">
      <div className="grid items-center gap-16 lg:grid-cols-[0.85fr_1.15fr]">
        <Reveal className="order-2 lg:order-1">
          <PhoneMockup />
        </Reveal>

        <div className="order-1 lg:order-2">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-lagoon">
              {t.social.eyebrow}
            </p>
            <h2 className="mt-4 font-display text-4xl font-light tracking-tight text-ink sm:text-5xl">
              {t.social.title}
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-ink/65">{t.social.sub}</p>
          </Reveal>

          <div className="mt-10 grid gap-x-8 gap-y-7 sm:grid-cols-2">
            {t.social.features.map((f, i) => (
              <Reveal key={f.title} delay={(i % 2) * 80}>
                <div className="border-l-2 border-saffron/40 pl-4">
                  <h3 className="font-display text-lg font-medium text-ink">{f.title}</h3>
                  <p className="mt-1.5 text-[15px] leading-relaxed text-ink/60">{f.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
