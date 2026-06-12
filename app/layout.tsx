import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Figtree } from "next/font/google";
import "./globals.css";

const display = Bricolage_Grotesque({
  subsets: ["latin", "latin-ext"],
  variable: "--font-display",
  display: "swap",
});

const body = Figtree({
  subsets: ["latin", "latin-ext"],
  variable: "--font-body",
  display: "swap",
});

// ---------------------------------------------------------------------------
// SEO — update `metadataBase` with your real domain after connecting it.
// ---------------------------------------------------------------------------
const SITE_URL = "https://www.freetimeapp.it"; // ← replace with your domain

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Freetime — Trasforma il tuo tempo libero in nuove passioni",
    template: "%s · Freetime",
  },
  description:
    "Scopri hobby, partecipa ad attività e incontra persone che condividono i tuoi interessi. Unisciti alla lista d'attesa di Freetime, il social marketplace per hobby ed esperienze.",
  keywords: [
    "hobby",
    "esperienze",
    "attività",
    "eventi",
    "community",
    "tempo libero",
    "social network",
    "Italia",
    "Freetime",
  ],
  openGraph: {
    type: "website",
    locale: "it_IT",
    url: SITE_URL,
    siteName: "Freetime",
    title: "Freetime — Trasforma il tuo tempo libero in nuove passioni",
    description:
      "Scopri hobby, partecipa ad attività e incontra persone che condividono i tuoi interessi. Presto in Italia.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Freetime — Trasforma il tuo tempo libero in nuove passioni",
    description:
      "Scopri hobby, partecipa ad attività e incontra persone che condividono i tuoi interessi.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#FAF6EF",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Freetime",
  url: SITE_URL,
  description:
    "Social marketplace per hobby ed esperienze: scopri attività, partecipa a eventi e incontra persone con i tuoi stessi interessi.",
  foundingLocation: { "@type": "Place", name: "Italia" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="it" className={`${display.variable} ${body.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
