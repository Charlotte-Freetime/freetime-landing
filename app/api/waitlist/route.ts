import { NextResponse } from "next/server";

// ---------------------------------------------------------------------------
// Waitlist endpoint — sends each signup to Formspree, which forwards it
// to your inbox. No database needed.
//
// Endpoint: https://formspree.io/f/mwvjwnor
// (Free tier: 50 submissions/month. Manage recipients & auto-reply in the
//  Formspree dashboard under your form's settings.)
// ---------------------------------------------------------------------------

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const FORMSPREE_ENDPOINT = "https://formspree.io/f/mwvjwnor";

export async function POST(request: Request) {
  let email = "";
  try {
    const data = await request.json();
    email = String(data?.email ?? "").trim().toLowerCase();
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_body" }, { status: 400 });
  }

  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ ok: false, error: "invalid_email" }, { status: 400 });
  }

  try {
    const res = await fetch(FORMSPREE_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        email,
        _subject: "Nuova iscrizione lista d'attesa Freetime 🎉",
        message: `Nuova iscrizione alla lista d'attesa: ${email}`,
        source: "freetime-landing",
      }),
    });

    const raw = await res.text();
    if (!res.ok) {
      console.error(`[waitlist] formspree rejected — status ${res.status}, body: ${raw}`);
      return NextResponse.json({ ok: false, error: "provider_error" }, { status: 502 });
    }
  } catch (err) {
    console.error("[waitlist] forwarding failed:", err);
    return NextResponse.json({ ok: false, error: "provider_error" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
