"use client";

import Image from "next/image";
import { useLanguage } from "@/lib/language";
import { useWaitlist } from "@/lib/waitlist-context";
import Reveal from "./Reveal";

const hostPhoto =
  "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=1000&q=70";

export default function Hosts() {
  const { t } = useLanguage();
  const { open } = useWaitlist();

  return (
    <section id="creator" className="scroll-mt-20 bg-saffron-soft/60 py-20">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <div>
          <Reveal>
            <p className="font-display text-sm font-bold uppercase tracking-widest text-saffron-deep">
              {t.hosts.eyebrow}
            </p>
            <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
              {t.hosts.title}
            </h2>
            <p className="mt-4 text-lg text-ink/70">{t.hosts.sub}</p>
          </Reveal>

          <ul className="mt-8 space-y-3">
            {t.hosts.items.map((item, i) => (
              <Reveal key={item.title} delay={i * 70}>
                <li className="flex items-start gap-4 rounded-2xl bg-white/80 p-4 shadow-sm">
                  <span
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cream text-lg"
                    aria-hidden="true"
                  >
                    {item.emoji}
                  </span>
                  <div>
                    <h3 className="font-display text-base font-bold text-ink">
                      {item.title}
                    </h3>
                    <p className="mt-0.5 text-sm leading-relaxed text-ink/60">
                      {item.text}
                    </p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ul>

          <Reveal delay={400}>
            <button
              onClick={open}
              className="mt-8 rounded-full bg-forest px-7 py-3.5 font-display text-base font-bold text-white shadow-lg shadow-forest/25 transition hover:-translate-y-0.5 hover:bg-forest-deep"
            >
              {t.hosts.cta}
            </button>
          </Reveal>
        </div>

        <Reveal className="hidden lg:block">
          <div className="relative h-[540px] overflow-hidden rounded-4xl shadow-2xl">
            <Image
              src={hostPhoto}
              alt="Host che organizza un corso di cucina"
              fill
              sizes="(max-width: 1024px) 0px, 540px"
              className="object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/70 to-transparent p-6 pt-16">
              <p className="font-display text-lg font-bold text-white">
                🍝 Corso di pasta fresca
              </p>
              <p className="text-sm text-white/80">Host: Anna · ⭐ 4.9 · 26 recensioni</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
