"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import {
  dictionaries,
  defaultLocale,
  type Dictionary,
  type Locale,
} from "./dictionaries";

type LanguageContextValue = {
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: Dictionary;
};

const LanguageContext = createContext<LanguageContextValue>({
  locale: defaultLocale,
  setLocale: () => {},
  t: dictionaries[defaultLocale],
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(defaultLocale);

  // Remember the visitor's choice across visits.
  useEffect(() => {
    try {
      const saved = window.localStorage.getItem("freetime-locale") as Locale | null;
      if (saved && dictionaries[saved]) setLocaleState(saved);
    } catch {
      /* storage unavailable — keep default */
    }
  }, []);

  const setLocale = (l: Locale) => {
    setLocaleState(l);
    try {
      window.localStorage.setItem("freetime-locale", l);
      document.documentElement.lang = l;
    } catch {
      /* ignore */
    }
  };

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t: dictionaries[locale] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
