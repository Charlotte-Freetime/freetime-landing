"use client";

import Image from "next/image";
import { useLanguage } from "@/lib/language";
import Reveal from "./Reveal";

export default function Hobbies() {
  const { t } = useLanguage();

  return (
    <section id="hobby" className="mx-auto max-w-6xl scroll-mt-24 px-4 py-24 sm:px-6">
      <Reveal className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-terracotta">
          {t.hobbies.eyebrow}
        </p>
        <h2 className="mt-4 font-display text-4xl font-light tracking-tight text-ink sm:text-5xl">
          {t.hobbies.title}
        </h2>
        <p className="mt-5 text-lg leading-relaxed text-ink/65">{t.hobbies.sub}</p>
      </Reveal>

      <div className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
        {t.hobbies.items.map((hobby, i) => (
          <Reveal key={hobby.name} delay={(i % 4) * 70}>
            <figure className="group relative aspect-[3/4] overflow-hidden rounded-2xl shadow-sm ring-1 ring-ink/5 transition-shadow duration-500 hover:shadow-xl">
              <Image
                src={hobby.img}
                alt={hobby.name}
                fill
                sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 260px"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
              />
              {/* Gradient scrim for legible caption */}
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-ink/75 via-ink/10 to-transparent"
              />
              <figcaption className="absolute inset-x-0 bottom-0 p-4">
                <span className="font-display text-lg font-medium leading-tight text-white drop-shadow-sm sm:text-xl">
                  {hobby.name}
                </span>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-10 text-center">
        <p className="text-sm font-medium uppercase tracking-[0.15em] text-ink/40">
          {t.hobbies.more}
        </p>
      </Reveal>
    </section>
  );
}
