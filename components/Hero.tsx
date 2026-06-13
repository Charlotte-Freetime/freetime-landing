"use client";

import Image from "next/image";
import { useLanguage } from "@/lib/language";
import { useWaitlist } from "@/lib/waitlist-context";

// ---------------------------------------------------------------------------
// 📷 IMAGES — real Freetime photos, stored in /public/images.
// To swap any of these later, just replace the file (same name) or update
// the path below.
// ---------------------------------------------------------------------------
const photos = {
  ceramica: "/images/ceramica.jpg",
  padel: "/images/padel.jpg",
  cavalli: "/images/cavalli.jpg",
  vino: "/images/vino.jpg",
  yoga: "/images/yoga.jpg",
  gioielli: "/images/gioielli.jpg",
  erbe: "/images/erbe.jpg",
};

function WordTile({
  word,
  className,
}: {
  word: string;
  className: string;
}) {
  return (
    <div
      className={`flex items-center justify-center rounded-3xl p-4 font-display text-xl font-semibold uppercase tracking-[0.12em] text-white shadow-lg sm:text-2xl ${className}`}
    >
      {word}
    </div>
  );
}

function PhotoTile({
  src,
  alt,
  className = "",
  priority = false,
}: {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
}) {
  return (
    <div className={`relative overflow-hidden rounded-3xl shadow-lg ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes="(max-width: 640px) 45vw, 220px"
        className="object-cover transition-transform duration-700 hover:scale-105"
      />
    </div>
  );
}

export default function Hero() {
  const { t } = useLanguage();
  const { open } = useWaitlist();

  return (
    <section id="top" className="relative overflow-hidden pb-16 pt-28 sm:pt-32">
      {/* Warm background wash inherited from the original saffron header */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 h-[480px] w-[120%] -translate-x-1/2 rounded-[100%] bg-gradient-to-b from-saffron-soft via-saffron-soft/40 to-transparent"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr]">
        {/* --- Copy ---------------------------------------------------- */}
        <div className="text-center lg:text-left">
          <p className="inline-flex items-center gap-2 rounded-full border border-forest/15 bg-forest-soft px-4 py-1.5 text-sm font-medium text-forest">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-forest" aria-hidden="true" />
            {t.hero.eyebrow}
          </p>

          <h1
            className="mt-6 font-display text-5xl font-light leading-[1.04] tracking-tight text-ink sm:text-6xl lg:text-7xl"
            style={{ fontVariationSettings: '"opsz" 144, "SOFT" 0, "WONK" 0' }}
          >
            {t.hero.headline_1}{" "}
            <span
              className="relative inline-block italic text-forest"
              style={{ fontVariationSettings: '"opsz" 144, "SOFT" 0, "WONK" 0' }}
            >
              {t.hero.headline_2}
              <svg
                className="absolute -bottom-2 left-0 w-full text-saffron"
                viewBox="0 0 200 10"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <path
                  d="M2 7c40-5 120-7 196-2"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  fill="none"
                />
              </svg>
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-ink/70 lg:mx-0">
            {t.hero.sub}
          </p>

          <div className="mt-9 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start">
            <button
              onClick={open}
              className="w-full rounded-full bg-terracotta px-8 py-4 font-display text-base font-medium text-white shadow-lg shadow-terracotta/25 transition hover:-translate-y-0.5 hover:bg-[#a93f21] sm:w-auto"
            >
              {t.hero.cta_primary}
            </button>
            <a
              href="#come-funziona"
              className="w-full rounded-full border border-ink/20 px-8 py-[15px] text-center font-display text-base font-medium text-ink transition hover:border-ink/40 hover:bg-white/50 sm:w-auto"
            >
              {t.hero.cta_secondary}
            </a>
          </div>

          <p className="mt-4 text-sm text-ink/50">{t.hero.note}</p>
        </div>

        {/* --- Signature mosaic: Scopri · Connetti · Cresci -------------- */}
        {/* Evolved from the strongest section of the original site, now    */}
        {/* using real Freetime photos.                                     */}
        <div className="mx-auto grid w-full max-w-md grid-cols-3 gap-3 lg:max-w-none">
          <div className="flex flex-col gap-3">
            <WordTile word={t.hero.mosaic_discover} className="h-24 bg-terracotta sm:h-28" />
            <PhotoTile
              src={photos.ceramica}
              alt="Laboratorio di ceramica"
              className="h-40 animate-floaty sm:h-48"
              priority
            />
            <PhotoTile src={photos.vino} alt="Degustazione di vino in vigna" className="h-28 sm:h-32" />
          </div>
          <div className="mt-6 flex flex-col gap-3">
            <PhotoTile
              src={photos.padel}
              alt="Partita di padel"
              className="h-32 sm:h-36"
              priority
            />
            <WordTile word={t.hero.mosaic_connect} className="h-24 bg-forest sm:h-28" />
            <PhotoTile
              src={photos.gioielli}
              alt="Laboratorio di gioielli artigianali"
              className="h-36 animate-floaty [animation-delay:1.5s] sm:h-44"
            />
          </div>
          <div className="flex flex-col gap-3">
            <PhotoTile src={photos.cavalli} alt="Passeggiata a cavallo al tramonto" className="h-36 sm:h-44" />
            <PhotoTile
              src={photos.yoga}
              alt="Aerial yoga in studio"
              className="h-28 animate-floaty [animation-delay:3s] sm:h-32"
            />
            <WordTile word={t.hero.mosaic_evolve} className="h-24 bg-saffron-deep sm:h-28" />
          </div>
        </div>
      </div>
    </section>
  );
}
