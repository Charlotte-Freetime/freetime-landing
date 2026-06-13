import { NextResponse } from "next/server";

// ---------------------------------------------------------------------------
// Waitlist endpoint
//
// Sends each signup to your inbox via Web3Forms AND sends an automatic
// welcome email back to the person who signed up.
//
// Set this environment variable on Vercel:
//   WAITLIST_WEB3FORMS_KEY = 5ebfa436-2cf9-4237-b1b5-916317a50b40
//
// (Free tier: 250 submissions/month. No database needed.)
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

  // Web3Forms public access key. Falls back to the hardcoded key if the
  // Vercel env var isn't picked up. This key is public by design.
  const web3forms =
    process.env.WAITLIST_WEB3FORMS_KEY || "5ebfa436-2cf9-4237-b1b5-916317a50b40";

  if (!web3forms) {
    console.log(`[waitlist] new signup (no provider configured): ${email}`);
    return NextResponse.json({ ok: true });
  }

  try {
    // Notification to YOU + automatic welcome reply to the user.
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        access_key: web3forms,
        subject: "Nuova iscrizione lista d'attesa Freetime 🎉",
        from_name: "Freetime Waitlist",
        email,
        source: "freetime-landing",
        message: `Nuova iscrizione alla lista d'attesa: ${email}`,
        // Automatic confirmation email sent back to the user:
        autoresponder_subject: "Benvenuto in Freetime! 🎉",
        autoresponder_message: `Ciao!

Grazie per esserti iscritto alla lista d'attesa di Freetime 💚

Sei tra i primi a scoprire la nuova app per vivere hobby ed esperienze a Roma. Ti scriveremo appena saremo pronti al lancio.

Nel frattempo seguici su Instagram: @official.freetimeapp

A presto,
Il team di Freetime`,
      }),
    });

    const result = await res.json().catch(() => null);
    if (!res.ok || !result?.success) {
      console.error("[waitlist] web3forms rejected:", result);
      return NextResponse.json({ ok: false, error: "provider_error" }, { status: 502 });
    }
  } catch (err) {
    console.error("[waitlist] forwarding failed:", err);
    return NextResponse.json({ ok: false, error: "provider_error" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
