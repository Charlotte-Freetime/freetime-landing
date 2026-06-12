"use client";

import { useLanguage } from "@/lib/language";
import Reveal from "./Reveal";

const avatarColors = ["bg-terracotta", "bg-lagoon", "bg-saffron-deep"];

export default function SocialProof() {
  const { t } = useLanguage();

  return (
    <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <Reveal className="mx-auto max-w-2xl text-center">
        <p className="font-display text-sm font-bold uppercase tracking-widest text-forest">
          {t.proof.eyebrow}
        </p>
        <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
          {t.proof.title}
        </h2>
      </Reveal>

      {/* ⚠️ Testimonianze placeholder — sostituiscile con feedback reali dei
          beta tester prima del lancio pubblico. */}
      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {t.proof.testimonials.map((tm, i) => (
          <Reveal key={tm.name} delay={i * 100}>
            <figure className="flex h-full flex-col rounded-3xl border border-ink/5 bg-white p-6 shadow-sm">
              <div className="text-saffron-deep" aria-hidden="true">
                {"★★★★★"}
              </div>
              <blockquote className="mt-4 flex-1 text-[15px] leading-relaxed text-ink/80">
                “{tm.quote}”
              </blockquote>
              <figcaption className="mt-5 flex items-center gap-3">
                <span
                  className={`flex h-10 w-10 items-center justify-center rounded-full font-display font-bold text-white ${avatarColors[i % avatarColors.length]}`}
                  aria-hidden="true"
                >
                  {tm.name.charAt(0)}
                </span>
                <div>
                  <p className="font-display text-sm font-bold text-ink">{tm.name}</p>
                  <p className="text-xs text-ink/50">{tm.role}</p>
                </div>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>

      {/* Launch goals — honestly framed as goals, not fake metrics */}
      <Reveal delay={150}>
        <div className="mt-12 rounded-4xl bg-lagoon-soft/70 p-8 sm:p-10">
          <p className="text-center text-sm font-semibold uppercase tracking-widest text-lagoon">
            {t.proof.stats_note}
          </p>
          <div className="mt-6 grid gap-8 text-center sm:grid-cols-3">
            {t.proof.stats.map((s) => (
              <div key={s.label}>
                <p className="font-display text-4xl font-extrabold text-ink sm:text-5xl">
                  {s.value}
                </p>
                <p className="mt-1 text-sm font-semibold text-ink/60">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
