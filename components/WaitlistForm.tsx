"use client";

import { useState, type FormEvent } from "react";
import { useLanguage } from "@/lib/language";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function WaitlistForm({
  variant = "light",
  onSuccess,
}: {
  /** "light" for cream backgrounds, "dark" for green/dark backgrounds */
  variant?: "light" | "dark";
  onSuccess?: () => void;
}) {
  const { t } = useLanguage();
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error" | "invalid">(
    "idle"
  );

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!EMAIL_RE.test(email.trim())) {
      setStatus("invalid");
      return;
    }
    setStatus("sending");
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim() }),
      });
      if (!res.ok) throw new Error("request_failed");
      setStatus("success");
      onSuccess?.();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div
        className={`rounded-2xl p-5 text-center animate-pop ${
          variant === "dark" ? "bg-white/10 text-white" : "bg-forest-soft text-forest-deep"
        }`}
        role="status"
      >
        <p className="font-display text-lg font-bold">{t.waitlist.success_title}</p>
        <p className="mt-1 text-sm opacity-90">{t.waitlist.success_text}</p>
      </div>
    );
  }

  const inputClasses =
    variant === "dark"
      ? "bg-white/95 text-ink placeholder:text-ink/50"
      : "bg-white text-ink placeholder:text-ink/50 border border-ink/10";

  return (
    <form onSubmit={handleSubmit} className="w-full" noValidate>
      <div className="flex flex-col gap-3 sm:flex-row">
        <label htmlFor={`waitlist-email-${variant}`} className="sr-only">
          {t.waitlist.placeholder}
        </label>
        <input
          id={`waitlist-email-${variant}`}
          type="email"
          inputMode="email"
          autoComplete="email"
          required
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (status === "invalid" || status === "error") setStatus("idle");
          }}
          placeholder={t.waitlist.placeholder}
          className={`h-13 min-w-0 flex-1 rounded-full px-5 py-3.5 text-base shadow-sm transition focus:shadow-md ${inputClasses}`}
        />
        <button
          type="submit"
          disabled={status === "sending"}
          className="rounded-full bg-terracotta px-6 py-3.5 font-display text-base font-bold text-white shadow-lg shadow-terracotta/30 transition hover:-translate-y-0.5 hover:bg-[#a93f21] active:translate-y-0 disabled:opacity-60"
        >
          {status === "sending" ? t.waitlist.sending : t.waitlist.button}
        </button>
      </div>
      <p
        className={`mt-2.5 text-xs ${
          variant === "dark" ? "text-white/70" : "text-ink/50"
        }`}
      >
        {status === "invalid"
          ? t.waitlist.invalid
          : status === "error"
            ? t.waitlist.error
            : t.waitlist.privacy}
      </p>
    </form>
  );
}
