import { NextResponse } from "next/server";

// ---------------------------------------------------------------------------
// Waitlist endpoint
//
// Works out of the box (returns success), and can forward signups to a real
// service by setting ONE of these environment variables on Vercel:
//
//   WAITLIST_FORMSPREE_ENDPOINT  e.g. https://formspree.io/f/abcd1234
//     → create a free form at https://formspree.io (50 submissions/month free)
//
//   WAITLIST_WEB3FORMS_KEY       e.g. 1234abcd-....
//     → create a free access key at https://web3forms.com (250/month free)
//
// Both send each signup straight to your email inbox — no database needed.
// ---------------------------------------------------------------------------

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

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

  const formspree = process.env.WAITLIST_FORMSPREE_ENDPOINT;
  const web3forms = process.env.WAITLIST_WEB3FORMS_KEY;

  try {
    if (formspree) {
      await fetch(formspree, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ email, source: "freetime-landing" }),
      });
    } else if (web3forms) {
      await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: web3forms,
          subject: "Nuova iscrizione lista d'attesa Freetime",
          email,
          source: "freetime-landing",
        }),
      });
    } else {
      // No provider configured yet: log so signups are visible in
      // Vercel → Project → Logs while you finish setup.
      console.log(`[waitlist] new signup: ${email}`);
    }
  } catch (err) {
    console.error("[waitlist] forwarding failed:", err);
    return NextResponse.json({ ok: false, error: "provider_error" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
