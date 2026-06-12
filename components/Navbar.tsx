"use client";

import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/lib/language";
import { useWaitlist } from "@/lib/waitlist-context";
import { locales } from "@/lib/dictionaries";

function Logo() {
  return (
    <a href="#top" className="flex items-center gap-2" aria-label="Freetime — home">
      {/* Location-pin mark, inherited from the original Freetime logo */}
      <span className="relative flex h-9 w-9 items-center justify-center rounded-full bg-lagoon text-white shadow-md shadow-lagoon/30">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M12 21s-7-5.1-7-11a7 7 0 1114 0c0 5.9-7 11-7 11z"
            fill="currentColor"
          />
          <circle cx="12" cy="10" r="2.6" fill="#E8A33D" />
        </svg>
      </span>
      <span className="font-display text-xl font-extrabold tracking-tight text-ink">
        Freetime
      </span>
    </a>
  );
}

function LanguageSwitcher() {
  const { locale, setLocale } = useLanguage();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  const current = locales.find((l) => l.code === locale)!;

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label="Cambia lingua / Change language"
        className="flex items-center gap-1.5 rounded-full border border-ink/10 bg-white/70 px-3 py-1.5 text-sm font-semibold text-ink/80 transition hover:border-ink/20"
      >
        <span aria-hidden="true">{current.flag}</span>
        <span className="uppercase">{current.code}</span>
        <svg width="10" height="6" viewBox="0 0 10 6" fill="none" aria-hidden="true">
          <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </button>
      {open && (
        <ul
          role="listbox"
          className="absolute right-0 top-full z-50 mt-2 w-40 animate-pop overflow-hidden rounded-2xl border border-ink/10 bg-white shadow-xl"
        >
          {locales.map((l) => (
            <li key={l.code}>
              <button
                role="option"
                aria-selected={l.code === locale}
                onClick={() => {
                  setLocale(l.code);
                  setOpen(false);
                }}
                className={`flex w-full items-center gap-2 px-4 py-2.5 text-left text-sm transition hover:bg-cream ${
                  l.code === locale ? "font-bold text-forest" : "text-ink/80"
                }`}
              >
                <span aria-hidden="true">{l.flag}</span>
                {l.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default function Navbar() {
  const { t } = useLanguage();
  const { open } = useWaitlist();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#hobby", label: t.nav.hobbies },
    { href: "#come-funziona", label: t.nav.how },
    { href: "#community", label: t.nav.social },
    { href: "#creator", label: t.nav.hosts },
    { href: "#faq", label: t.nav.faq },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-[70] transition-all duration-300 ${
        scrolled
          ? "border-b border-ink/5 bg-cream/85 shadow-sm backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Logo />

        {/* Desktop links */}
        <ul className="hidden items-center gap-6 lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm font-semibold text-ink/70 transition hover:text-ink"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2.5">
          <LanguageSwitcher />
          <button
            onClick={open}
            className="hidden rounded-full bg-terracotta px-4 py-2 font-display text-sm font-bold text-white shadow-md shadow-terracotta/25 transition hover:-translate-y-0.5 hover:bg-[#a93f21] sm:block"
          >
            {t.nav.cta}
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Menu"
            aria-expanded={menuOpen}
            className="flex h-10 w-10 items-center justify-center rounded-full text-ink lg:hidden"
          >
            <svg width="20" height="14" viewBox="0 0 20 14" fill="none" aria-hidden="true">
              {menuOpen ? (
                <path d="M2 1l16 12M18 1L2 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              ) : (
                <path d="M1 1h18M1 7h18M1 13h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="animate-pop border-t border-ink/5 bg-cream/95 px-4 pb-5 pt-2 backdrop-blur-md lg:hidden">
          <ul className="flex flex-col">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setMenuOpen(false)}
                  className="block rounded-xl px-3 py-3 font-semibold text-ink/80 transition hover:bg-ink/5"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <button
            onClick={() => {
              setMenuOpen(false);
              open();
            }}
            className="mt-2 w-full rounded-full bg-terracotta px-4 py-3 font-display font-bold text-white shadow-md shadow-terracotta/25"
          >
            {t.nav.cta}
          </button>
        </div>
      )}
    </header>
  );
}
