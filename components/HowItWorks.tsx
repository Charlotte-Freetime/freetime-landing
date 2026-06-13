"use client";

import { useLanguage } from "@/lib/language";
import Reveal from "./Reveal";

const stepColors = [
  "bg-terracotta",
  "bg-saffron-deep",
  "bg-lagoon",
  "bg-forest",
];

export default function HowItWorks() {
  const { t } = useLanguage();

  return (
    <section
      id="come-funziona"
      className="scroll-mt-20 bg-forest py-20 text-white"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-saffron">
            {t.how.eyebrow}
          </p>
          <h2 className="mt-3 font-display text-4xl font-light tracking-tight sm:text-5xl">
            {t.how.title}
          </h2>
        </Reveal>

        <ol className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {t.how.steps.map((step, i) => (
            <Reveal key={step.title} delay={i * 100}>
              <li className="flex h-full flex-col rounded-3xl bg-white/[0.07] p-6 backdrop-blur-sm transition duration-300 hover:bg-white/[0.12]">
                <span
                  className={`flex h-11 w-11 items-center justify-center rounded-2xl font-display text-lg font-medium text-white shadow-lg ${stepColors[i]}`}
                  aria-hidden="true"
                >
                  {i + 1}
                </span>
                <h3 className="mt-5 font-display text-xl font-medium">{step.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-white/70">
                  {step.text}
                </p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
