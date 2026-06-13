"use client";

import Image from "next/image";
import { useLanguage } from "@/lib/language";

export default function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-ink/5 bg-white/60">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-3">
        <div>
          <div className="relative h-9 w-36">
            <Image
              src="/images/freetime-logo-full.png"
              alt="Freetime"
              fill
              className="object-contain object-left"
            />
          </div>
          <p className="mt-3 max-w-xs text-sm text-ink/60">{t.footer.tagline}</p>
          <p className="mt-4 text-sm text-ink/50">{t.footer.made}</p>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-ink/40">
            {t.footer.contact}
          </p>
          <ul className="mt-3 space-y-2 text-sm text-ink/70">
            <li>
              <a
                href="mailto:thefreetimeapp.official@gmail.com"
                className="transition hover:text-ink"
              >
                thefreetimeapp.official@gmail.com
              </a>
            </li>
            <li>Roma, Italia</li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-ink/40">
            {t.footer.follow}
          </p>
          <ul className="mt-3 flex gap-3">
            <li>
              <a
                href="https://www.instagram.com/official.freetimeapp?igsh=MXMzMjAyd3d6ZHhxZA=="
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-cream text-ink/70 transition hover:bg-saffron-soft hover:text-ink"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="2" />
                  <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
                  <circle cx="17.2" cy="6.8" r="1.3" fill="currentColor" />
                </svg>
              </a>
            </li>
            <li>
              <a
                href="https://linktr.ee/FreeTime_official?utm_source=linktree_profile_share&ltsid=1c70b959-232a-4c6e-8d67-b9681dd77ce8"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Linktree"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-cream text-ink/70 transition hover:bg-saffron-soft hover:text-ink"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="M12 2v20M12 6L6 2M12 6l6-4M12 12L5 7M12 12l7-5M12 18l-4-3M12 18l4-3"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-ink/5 py-5 text-center text-xs text-ink/40">
        © {year} Freetime. {t.footer.rights}
      </div>
    </footer>
  );
}
