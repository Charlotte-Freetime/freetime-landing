"use client";

import { useLanguage } from "@/lib/language";
import Reveal from "./Reveal";

// Rotating accent backgrounds so the grid feels alive but consistent.
const accents = [
  "bg-forest-soft text-forest-deep",
  "bg-saffron-soft text-saffron-deep",
  "bg-terracotta-soft text-terracotta",
  "bg-lagoon-soft text-lagoon",
];

export default function Hobbies() {
  const { t } = useLanguage();

  return (
    <section id="hobby" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-20 sm:px-6">
      <Reveal className="mx-auto max-w-2xl text-center">
        <p className="font-display text-sm font-bold uppercase tracking-widest text-terracotta">
          {t.hobbies.eyebrow}
        </p>
        <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
          {t.hobbies.title}
        </h2>
        <p className="mt-4 text-lg text-ink/70">{t.hobbies.sub}</p>
      </Reveal>

      <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
        {t.hobbies.items.map((hobby, i) => (
          <Reveal key={hobby.name} delay={(i % 4) * 60}>
            <div
              className={`group flex h-full cursor-default items-center gap-3 rounded-3xl p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-5 ${accents[i % accents.length]}`}
            >
              <span
                className="text-2xl transition-transform duration-300 group-hover:scale-125 sm:text-3xl"
                aria-hidden="true"
              >
                {hobby.emoji}
              </span>
              <span className="font-display text-sm font-bold sm:text-base">
                {hobby.name}
              </span>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-8 text-center">
        <p className="text-sm font-semibold text-ink/50">{t.hobbies.more}</p>
      </Reveal>
    </section>
  );
}
