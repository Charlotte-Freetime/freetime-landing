"use client";

import { useLanguage } from "@/lib/language";
import Reveal from "./Reveal";

/** App feed mockup built in pure CSS — no screenshots needed. */
function PhoneMockup() {
  const { t } = useLanguage();
  const p = t.social.phone;

  const cards = [
    { ...{ title: p.card1_title, meta: p.card1_meta }, emoji: "🏺", color: "bg-terracotta-soft" },
    { ...{ title: p.card2_title, meta: p.card2_meta }, emoji: "🎾", color: "bg-forest-soft" },
    { ...{ title: p.card3_title, meta: p.card3_meta }, emoji: "🍹", color: "bg-saffron-soft" },
  ];

  return (
    <div className="relative mx-auto w-[280px] animate-floaty">
      {/* Decorative blobs */}
      <div
        aria-hidden="true"
        className="absolute -left-10 -top-8 h-28 w-28 rounded-full bg-saffron/30 blur-2xl"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-8 -right-10 h-32 w-32 rounded-full bg-lagoon/25 blur-2xl"
      />

      <div className="relative rounded-[2.6rem] border-[10px] border-ink bg-cream shadow-2xl">
        {/* Notch */}
        <div className="absolute left-1/2 top-2 h-5 w-24 -translate-x-1/2 rounded-full bg-ink" />

        <div className="space-y-3 px-4 pb-6 pt-10">
          <div className="flex items-center justify-between">
            <span className="font-display text-lg font-extrabold text-ink">
              {p.app_title}
            </span>
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-forest text-sm text-white">
              C
            </span>
          </div>

          {cards.map((card) => (
            <div
              key={card.title}
              className={`rounded-2xl p-3.5 shadow-sm ${card.color}`}
            >
              <div className="flex items-start gap-3">
                <span className="text-2xl" aria-hidden="true">
                  {card.emoji}
                </span>
                <div className="min-w-0 flex-1">
                  <p className="truncate font-display text-sm font-bold text-ink">
                    {card.title}
                  </p>
                  <p className="mt-0.5 text-xs text-ink/60">{card.meta}</p>
                </div>
              </div>
              <button
                tabIndex={-1}
                aria-hidden="true"
                className="mt-2.5 w-full rounded-full bg-ink py-1.5 text-xs font-bold text-white"
              >
                {p.join}
              </button>
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
    <section id="community" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-20 sm:px-6">
      <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal className="order-2 lg:order-1">
          <PhoneMockup />
        </Reveal>

        <div className="order-1 lg:order-2">
          <Reveal>
            <p className="font-display text-sm font-bold uppercase tracking-widest text-lagoon">
              {t.social.eyebrow}
            </p>
            <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
              {t.social.title}
            </h2>
            <p className="mt-4 text-lg text-ink/70">{t.social.sub}</p>
          </Reveal>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {t.social.features.map((f, i) => (
              <Reveal key={f.title} delay={(i % 2) * 80}>
                <div className="flex h-full gap-3 rounded-2xl border border-ink/5 bg-white p-4 shadow-sm transition hover:shadow-md">
                  <span className="text-xl" aria-hidden="true">
                    {f.emoji}
                  </span>
                  <div>
                    <h3 className="font-display text-[15px] font-bold text-ink">
                      {f.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-ink/60">{f.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
