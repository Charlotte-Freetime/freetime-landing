# Freetime — Landing Page

Landing page premium, mobile-first, in italiano (con switcher IT/EN), costruita con **Next.js 14 + React + TypeScript + Tailwind CSS**.

---

## 🚀 Avvio in locale

```bash
npm install
npm run dev
```

Apri http://localhost:3000

> Richiede Node.js 18.17+ (consigliato Node 20). Scaricalo da https://nodejs.org se non lo hai.

---

## 🌍 Pubblicazione su Vercel + dominio GoDaddy

### Passo 1 — Carica il progetto su GitHub
1. Crea un account gratuito su https://github.com (se non lo hai).
2. Crea un nuovo repository, es. `freetime-landing`.
3. Dalla cartella del progetto:
   ```bash
   git init
   git add .
   git commit -m "Freetime landing page"
   git branch -M main
   git remote add origin https://github.com/TUO-USERNAME/freetime-landing.git
   git push -u origin main
   ```

### Passo 2 — Deploy su Vercel (gratuito)
1. Vai su https://vercel.com → **Sign up with GitHub**.
2. Clicca **Add New… → Project** → importa `freetime-landing`.
3. Non cambiare nulla (Vercel riconosce Next.js da solo) → **Deploy**.
4. Dopo ~1 minuto il sito è online su `freetime-landing.vercel.app`.

### Passo 3 — Collega il dominio GoDaddy
1. In Vercel: **Project → Settings → Domains → Add** → scrivi il tuo dominio
   (es. `freetimeapp.it`) e anche `www.freetimeapp.it`.
2. Vercel ti mostra i record DNS da inserire. Vai su GoDaddy:
   **Il mio account → Domini → (il tuo dominio) → DNS → Gestisci DNS**.
3. Inserisci/modifica questi record:

   | Tipo  | Nome | Valore                  |
   |-------|------|-------------------------|
   | A     | @    | `76.76.21.21`           |
   | CNAME | www  | `cname.vercel-dns.com`  |

   ⚠️ Se esiste già un record A su `@` (es. "Parked") **modificalo**, non aggiungerne un secondo. Elimina eventuali record CNAME `www` esistenti che puntano altrove.
4. Salva. La propagazione richiede da 10 minuti a qualche ora.
   Quando in Vercel il dominio mostra ✅, il sito è live con HTTPS automatico.

### Passo 4 — Aggiorna il dominio nel codice
In `app/layout.tsx` sostituisci:
```ts
const SITE_URL = "https://www.freetimeapp.it"; // ← metti il tuo dominio reale
```
Poi `git add . && git commit -m "domain" && git push` → Vercel ripubblica da solo.

---

## ✉️ Attivare la lista d'attesa (ricevere le email)

Il form funziona già (mostra il messaggio di successo), ma per **ricevere le iscrizioni nella tua casella email** scegli UNA di queste opzioni gratuite:

**Opzione A — Formspree** (consigliata, 50 iscrizioni/mese gratis)
1. Crea un form su https://formspree.io → copia l'endpoint (es. `https://formspree.io/f/abcd1234`).
2. In Vercel: **Settings → Environment Variables** → aggiungi:
   - Nome: `WAITLIST_FORMSPREE_ENDPOINT`
   - Valore: l'endpoint copiato
3. **Redeploy** (Deployments → ⋯ → Redeploy).

**Opzione B — Web3Forms** (250/mese gratis)
1. Genera una access key su https://web3forms.com con la tua email.
2. Variabile su Vercel: `WAITLIST_WEB3FORMS_KEY` = la tua key → Redeploy.

Senza configurazione, le iscrizioni vengono comunque registrate nei **Logs** di Vercel.

---

## 🎨 Personalizzazione rapida

| Cosa                       | Dove                                              |
|----------------------------|---------------------------------------------------|
| Testi (IT/EN)              | `lib/dictionaries.ts`                              |
| Aggiungere una lingua      | `lib/dictionaries.ts` (istruzioni in cima al file) |
| Colori del brand           | `tailwind.config.ts` → `theme.extend.colors`       |
| Foto della hero            | `components/Hero.tsx` → oggetto `photos`           |
| Foto sezione host          | `components/Hosts.tsx` → `hostPhoto`               |
| Testimonianze (placeholder!)| `lib/dictionaries.ts` → `proof.testimonials`      |
| Link social                | `components/Footer.tsx`                            |
| SEO / titolo / descrizione | `app/layout.tsx`                                   |

> 📷 **Foto proprie:** metti i file in `public/images/` e nei componenti sostituisci gli URL Unsplash con `"/images/nomefile.jpg"`.

> ⚠️ **Prima del lancio:** sostituisci le testimonianze placeholder con feedback reali dei beta tester.

---

## 🧩 Struttura del progetto

```
app/
  layout.tsx          → font, SEO, metadata, JSON-LD
  page.tsx            → assembla tutte le sezioni
  globals.css         → token globali, animazioni, accessibilità
  api/waitlist/       → endpoint iscrizioni lista d'attesa
components/
  Navbar.tsx          → nav sticky + switcher lingua + menu mobile
  Hero.tsx            → hero con mosaico "Scopri · Connetti · Cresci"
  Hobbies.tsx         → 12 card hobby
  HowItWorks.tsx      → 4 passi
  SocialFeatures.tsx  → funzioni social + mockup telefono in CSS
  Hosts.tsx           → sezione host & creator
  SocialProof.tsx     → testimonianze + obiettivi al lancio
  FAQ.tsx             → accordion accessibile
  FinalCTA.tsx        → CTA finale con form
  Footer.tsx          → contatti e social
  WaitlistModal.tsx   → popup (10s o 50% scroll, 1 volta per sessione)
  FloatingWaitlist.tsx→ bottone flottante
  WaitlistForm.tsx    → form condiviso con validazione
lib/
  dictionaries.ts     → tutti i testi IT/EN
  language.tsx        → provider lingua (salva la scelta)
  waitlist-context.tsx→ logica popup e stato sessione
```
