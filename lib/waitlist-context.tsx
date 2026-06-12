"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";

type WaitlistContextValue = {
  isOpen: boolean;
  open: () => void;
  close: () => void;
};

const WaitlistContext = createContext<WaitlistContextValue>({
  isOpen: false,
  open: () => {},
  close: () => {},
});

const SESSION_KEY = "freetime-waitlist-shown";

export function WaitlistProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const autoShownRef = useRef(false);

  const markShown = () => {
    try {
      window.sessionStorage.setItem(SESSION_KEY, "1");
    } catch {
      /* ignore */
    }
  };

  const open = useCallback(() => {
    setIsOpen(true);
    markShown();
  }, []);

  const close = useCallback(() => setIsOpen(false), []);

  // Auto-open once per session: after 10 seconds OR at ~50% scroll,
  // whichever happens first.
  useEffect(() => {
    let alreadyShown = false;
    try {
      alreadyShown = window.sessionStorage.getItem(SESSION_KEY) === "1";
    } catch {
      /* ignore */
    }
    if (alreadyShown) return;

    const show = () => {
      if (autoShownRef.current) return;
      autoShownRef.current = true;
      setIsOpen(true);
      markShown();
      cleanup();
    };

    const timer = window.setTimeout(show, 10000);

    const onScroll = () => {
      const doc = document.documentElement;
      const scrollable = doc.scrollHeight - window.innerHeight;
      if (scrollable <= 0) return;
      const progress = window.scrollY / scrollable;
      if (progress >= 0.5) show();
    };

    const cleanup = () => {
      window.clearTimeout(timer);
      window.removeEventListener("scroll", onScroll);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return cleanup;
  }, []);

  return (
    <WaitlistContext.Provider value={{ isOpen, open, close }}>
      {children}
    </WaitlistContext.Provider>
  );
}

export function useWaitlist() {
  return useContext(WaitlistContext);
}
