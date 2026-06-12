"use client";

import { useLanguage } from "@/lib/language";

export default function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-ink/5 bg-white/60">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-3">
        <div>
          <p className="font-display text-xl font-extrabold text-ink">Freetime</p>
          <p className="mt-2 max-w-xs text-sm text-ink/60">{t.footer.tagline}</p>
          <p className="mt-4 text-sm text-ink/50">{t.footer.made}</p>
        </div>

        <div>
          <p className="font-display text-sm font-bold uppercase tracking-widest text-ink/40">
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
          <p className="font-display text-sm font-bold uppercase tracking-widest text-ink/40">
            {t.footer.follow}
          </p>
          <ul className="mt-3 flex gap-3">
            {/* ↓ Update with your real profile URLs */}
            <li>
              <a
                href="https://instagram.com/"
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
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-cream text-ink/70 transition hover:bg-saffron-soft hover:text-ink"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M4.98 3.5a2.5 2.5 0 11-.02 5 2.5 2.5 0 01.02-5zM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.5c0-1.3-.02-3-1.83-3-1.84 0-2.12 1.43-2.12 2.9V21H9z" />
                </svg>
              </a>
            </li>
            <li>
              <a
                href="https://facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-cream text-ink/70 transition hover:bg-saffron-soft hover:text-ink"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M13.5 21v-7h2.4l.4-3h-2.8V9.1c0-.9.25-1.5 1.55-1.5h1.35V4.9c-.25-.03-1.1-.1-2.1-.1-2.1 0-3.5 1.3-3.5 3.6V11H8.5v3h2.3v7h2.7z" />
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
