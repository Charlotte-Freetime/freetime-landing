// ---------------------------------------------------------------------------
// Freetime — multilingual dictionaries
// Italian is the default language. To add a new language (e.g. Spanish):
//   1. Copy the `it` object, translate the values, name it `es`.
//   2. Add it to the `dictionaries` export and to `locales` below.
// That's it — the switcher in the navbar picks it up automatically.
// ---------------------------------------------------------------------------

export type Locale = "it" | "en";

export const locales: { code: Locale; label: string; flag: string }[] = [
  { code: "it", label: "Italiano", flag: "🇮🇹" },
  { code: "en", label: "English", flag: "🇬🇧" },
];

export const defaultLocale: Locale = "it";

const it = {
  nav: {
    hobbies: "Hobby",
    how: "Come funziona",
    social: "Community",
    hosts: "Per i creator",
    faq: "FAQ",
    cta: "Lista d'attesa",
  },
  hero: {
    eyebrow: "La tua versione migliore inizia nel tuo tempo libero",
    headline_1: "Trasforma il tuo tempo libero",
    headline_2: "in nuove passioni.",
    sub: "Scopri hobby, partecipa ad attività e incontra persone che condividono i tuoi interessi.",
    note: "Unisciti alla lista d'attesa e sii tra i primi a provare Freetime.",
    cta_primary: "Unisciti alla lista d'attesa",
    cta_secondary: "Scopri di più",
    mosaic_discover: "Scopri",
    mosaic_connect: "Connetti",
    mosaic_evolve: "Cresci",
    badge_soon: "Presto in Italia",
  },
  hobbies: {
    eyebrow: "Per ogni passione",
    title: "C'è un hobby che ti aspetta",
    sub: "Dalle passioni di sempre a quelle che non sai ancora di avere. Ogni settimana nuove attività vicino a te.",
    items: [
      { name: "Fotografia", emoji: "📷" },
      { name: "Escursionismo", emoji: "🥾" },
      { name: "Cucina", emoji: "🍝" },
      { name: "Tennis & Padel", emoji: "🎾" },
      { name: "Calcio", emoji: "⚽" },
      { name: "Arte & Ceramica", emoji: "🎨" },
      { name: "Musica", emoji: "🎸" },
      { name: "Scacchi", emoji: "♟️" },
      { name: "Fitness & Yoga", emoji: "🧘" },
      { name: "Gaming", emoji: "🎮" },
      { name: "Danza", emoji: "💃" },
      { name: "Lingue", emoji: "🗣️" },
    ],
    more: "…e molti altri al lancio",
  },
  how: {
    eyebrow: "Come funziona",
    title: "Quattro passi verso la tua prossima passione",
    steps: [
      {
        title: "Scopri nuovi hobby",
        text: "Esplora attività ed esperienze vicino a te, scelte in base ai tuoi interessi.",
      },
      {
        title: "Trova persone con i tuoi interessi",
        text: "Profili e community ti aiutano a incontrare chi condivide le tue passioni.",
      },
      {
        title: "Partecipa ad attività ed eventi",
        text: "Prenota il tuo posto in pochi tocchi e vivi l'esperienza dal vivo.",
      },
      {
        title: "Costruisci la tua community",
        text: "Resta in contatto, crea gruppi e trasforma un incontro in un'abitudine.",
      },
    ],
  },
  social: {
    eyebrow: "Molto più di un marketplace",
    title: "Un social network per la vita reale",
    sub: "Freetime unisce la scoperta di esperienze a una vera community: ogni attività è un'occasione per conoscere persone.",
    features: [
      {
        title: "Profili personali",
        text: "Racconta chi sei attraverso le tue passioni, non solo le tue foto.",
        emoji: "👤",
      },
      {
        title: "Segui altri utenti",
        text: "Resta aggiornato sulle attività delle persone che ti ispirano.",
        emoji: "➕",
      },
      {
        title: "Community dedicate",
        text: "Gruppi tematici per ogni hobby, quartiere e livello di esperienza.",
        emoji: "🫂",
      },
      {
        title: "Feed di attività",
        text: "Scopri cosa succede intorno a te, in tempo reale.",
        emoji: "📍",
      },
      {
        title: "Messaggi",
        text: "Organizza, chiedi, conosci: la chat integrata per ogni evento e gruppo.",
        emoji: "💬",
      },
      {
        title: "Eventi locali",
        text: "Dal corso di ceramica al torneo di padel: tutto nella tua città.",
        emoji: "🗓️",
      },
    ],
    phone: {
      app_title: "Freetime",
      card1_title: "Corso di ceramica",
      card1_meta: "Sab 15:00 · Trastevere · 4 posti",
      card2_title: "Padel — livello base",
      card2_meta: "Dom 10:30 · EUR · 2 posti",
      card3_title: "Aperitivo di lingue 🇮🇹🇬🇧🇪🇸",
      card3_meta: "Gio 19:00 · Monti · 12 posti",
      join: "Partecipa",
    },
  },
  hosts: {
    eyebrow: "Per host e creator",
    title: "Condividi la tua passione. Falla diventare qualcosa di più.",
    sub: "Su Freetime chiunque può organizzare attività: dall'insegnante di yoga al fotografo, dall'appassionato di scacchi al sommelier.",
    items: [
      {
        title: "Crea eventi",
        text: "Pubblica la tua attività in pochi minuti, con date, posti e dettagli.",
        emoji: "✨",
      },
      {
        title: "Costruisci una community",
        text: "Trasforma i partecipanti in una community che torna, settimana dopo settimana.",
        emoji: "🌱",
      },
      {
        title: "Gestisci partecipanti",
        text: "Iscrizioni, presenze e comunicazioni in un unico posto.",
        emoji: "📋",
      },
      {
        title: "Condividi passioni",
        text: "Racconta quello che ami a persone davvero interessate.",
        emoji: "❤️",
      },
      {
        title: "Monetizza le tue attività",
        text: "Imposta un prezzo per le tue esperienze e ricevi i pagamenti in modo semplice.",
        emoji: "💶",
      },
    ],
    cta: "Voglio diventare host",
  },
  proof: {
    eyebrow: "La community cresce",
    title: "Le prime voci di Freetime",
    // ⚠️ PLACEHOLDER — sostituisci con testimonianze reali dei beta tester
    // prima del lancio pubblico.
    testimonials: [
      {
        quote:
          "Mi sono trasferita a Roma da poco: con Freetime ho trovato un gruppo di escursionismo e nuove amicizie nel giro di due settimane.",
        name: "Giulia M.",
        role: "Beta tester · Roma",
      },
      {
        quote:
          "Insegno ceramica da anni. L'idea di avere iscrizioni, community e pagamenti in un'unica app è esattamente ciò che mi mancava.",
        name: "Marco R.",
        role: "Host · Torino",
      },
      {
        quote:
          "Finalmente un social che ti porta fuori casa invece di tenerti incollato allo schermo.",
        name: "Sara L.",
        role: "Beta tester · Milano",
      },
    ],
    stats_note: "Obiettivi della community al lancio",
    stats: [
      { value: "500+", label: "iscritti in lista d'attesa" },
      { value: "12", label: "categorie di hobby" },
      { value: "3", label: "città italiane al lancio" },
    ],
  },
  faq: {
    eyebrow: "Domande frequenti",
    title: "Tutto quello che vuoi sapere",
    items: [
      {
        q: "Cos'è Freetime?",
        a: "Freetime è un social marketplace per hobby ed esperienze: un'app dove scopri attività vicino a te, partecipi a eventi e incontri persone che condividono i tuoi interessi. È sia un luogo dove trovare cose da fare, sia un social network per la vita reale.",
      },
      {
        q: "Quando verrà lanciato?",
        a: "Stiamo lavorando al lancio in Italia. Gli iscritti alla lista d'attesa riceveranno l'accesso anticipato e tutti gli aggiornamenti in anteprima.",
      },
      {
        q: "È gratuito?",
        a: "Sì: scaricare Freetime, esplorare hobby e unirti alle community sarà gratuito. Alcune attività organizzate dagli host potranno avere un costo di partecipazione, sempre indicato in modo chiaro.",
      },
      {
        q: "Posso creare le mie attività?",
        a: "Assolutamente sì. Chiunque potrà diventare host: creare eventi, gestire i partecipanti, costruire una community e, se vorrai, monetizzare le tue esperienze.",
      },
      {
        q: "Come funziona la lista d'attesa?",
        a: "Lasci la tua email e ti avvisiamo noi: riceverai aggiornamenti esclusivi sullo sviluppo e sarai tra i primi a provare l'app al lancio. Niente spam, promesso.",
      },
    ],
  },
  finalCta: {
    title: "Pronto a trasformare il tuo tempo libero?",
    text: "Unisciti alla lista d'attesa e scopri Freetime prima di tutti.",
    cta: "Unisciti alla lista d'attesa",
  },
  waitlist: {
    floating: "Lista d'attesa",
    modal_title: "Unisciti alla lista d'attesa",
    modal_text:
      "Sii tra i primi a conoscere Freetime. Ricevi aggiornamenti esclusivi e l'accesso anticipato al lancio.",
    placeholder: "La tua email",
    button: "Avvisami al lancio",
    sending: "Invio…",
    success_title: "Sei in lista! 🎉",
    success_text: "Ti scriveremo appena Freetime sarà pronto. A presto!",
    error: "Ops, qualcosa è andato storto. Riprova tra un istante.",
    invalid: "Inserisci un indirizzo email valido.",
    privacy: "Niente spam. Solo aggiornamenti su Freetime.",
    close: "Chiudi",
  },
  footer: {
    tagline: "Hobby, esperienze e persone — nella tua città.",
    made: "Fatto con ❤️ in Italia",
    rights: "Tutti i diritti riservati.",
    contact: "Contatti",
    follow: "Seguici",
  },
};

// English dictionary — same structure as `it`.
const en: typeof it = {
  nav: {
    hobbies: "Hobbies",
    how: "How it works",
    social: "Community",
    hosts: "For creators",
    faq: "FAQ",
    cta: "Join waitlist",
  },
  hero: {
    eyebrow: "Your best self starts in your free time",
    headline_1: "Turn your free time",
    headline_2: "into new passions.",
    sub: "Discover hobbies, join activities and meet people who share your interests.",
    note: "Join the waitlist and be among the first to try Freetime.",
    cta_primary: "Join the waitlist",
    cta_secondary: "Learn more",
    mosaic_discover: "Discover",
    mosaic_connect: "Connect",
    mosaic_evolve: "Evolve",
    badge_soon: "Coming soon in Italy",
  },
  hobbies: {
    eyebrow: "For every passion",
    title: "There's a hobby waiting for you",
    sub: "From lifelong passions to ones you don't know you have yet. New activities near you, every week.",
    items: [
      { name: "Photography", emoji: "📷" },
      { name: "Hiking", emoji: "🥾" },
      { name: "Cooking", emoji: "🍝" },
      { name: "Tennis & Padel", emoji: "🎾" },
      { name: "Football", emoji: "⚽" },
      { name: "Art & Ceramics", emoji: "🎨" },
      { name: "Music", emoji: "🎸" },
      { name: "Chess", emoji: "♟️" },
      { name: "Fitness & Yoga", emoji: "🧘" },
      { name: "Gaming", emoji: "🎮" },
      { name: "Dance", emoji: "💃" },
      { name: "Languages", emoji: "🗣️" },
    ],
    more: "…and many more at launch",
  },
  how: {
    eyebrow: "How it works",
    title: "Four steps to your next passion",
    steps: [
      {
        title: "Discover new hobbies",
        text: "Explore activities and experiences near you, matched to your interests.",
      },
      {
        title: "Find people who share your interests",
        text: "Profiles and communities help you meet people who love what you love.",
      },
      {
        title: "Join activities and events",
        text: "Book your spot in a few taps and live the experience in real life.",
      },
      {
        title: "Build your community",
        text: "Stay in touch, create groups and turn one meetup into a habit.",
      },
    ],
  },
  social: {
    eyebrow: "Much more than a marketplace",
    title: "A social network for real life",
    sub: "Freetime combines experience discovery with a real community: every activity is a chance to meet people.",
    features: [
      {
        title: "Personal profiles",
        text: "Show who you are through your passions, not just your photos.",
        emoji: "👤",
      },
      {
        title: "Follow other users",
        text: "Stay up to date with the activities of people who inspire you.",
        emoji: "➕",
      },
      {
        title: "Dedicated communities",
        text: "Topic groups for every hobby, neighbourhood and skill level.",
        emoji: "🫂",
      },
      {
        title: "Activity feed",
        text: "See what's happening around you, in real time.",
        emoji: "📍",
      },
      {
        title: "Messages",
        text: "Organise, ask, connect: built-in chat for every event and group.",
        emoji: "💬",
      },
      {
        title: "Local events",
        text: "From pottery classes to padel tournaments: all in your city.",
        emoji: "🗓️",
      },
    ],
    phone: {
      app_title: "Freetime",
      card1_title: "Pottery class",
      card1_meta: "Sat 3:00 PM · Trastevere · 4 spots",
      card2_title: "Padel — beginner level",
      card2_meta: "Sun 10:30 AM · EUR · 2 spots",
      card3_title: "Language aperitivo 🇮🇹🇬🇧🇪🇸",
      card3_meta: "Thu 7:00 PM · Monti · 12 spots",
      join: "Join",
    },
  },
  hosts: {
    eyebrow: "For hosts & creators",
    title: "Share your passion. Turn it into something more.",
    sub: "On Freetime anyone can organise activities: from yoga teachers to photographers, from chess lovers to sommeliers.",
    items: [
      {
        title: "Create events",
        text: "Publish your activity in minutes, with dates, spots and details.",
        emoji: "✨",
      },
      {
        title: "Build a community",
        text: "Turn participants into a community that comes back, week after week.",
        emoji: "🌱",
      },
      {
        title: "Manage participants",
        text: "Sign-ups, attendance and communication, all in one place.",
        emoji: "📋",
      },
      {
        title: "Share your passions",
        text: "Tell people who truly care about what you love.",
        emoji: "❤️",
      },
      {
        title: "Monetise your activities",
        text: "Set a price for your experiences and get paid the easy way.",
        emoji: "💶",
      },
    ],
    cta: "I want to become a host",
  },
  proof: {
    eyebrow: "The community is growing",
    title: "First voices of Freetime",
    testimonials: [
      {
        quote:
          "I recently moved to Rome: with Freetime I found a hiking group and new friends within two weeks.",
        name: "Giulia M.",
        role: "Beta tester · Rome",
      },
      {
        quote:
          "I've been teaching ceramics for years. Having sign-ups, community and payments in one app is exactly what I was missing.",
        name: "Marco R.",
        role: "Host · Turin",
      },
      {
        quote:
          "Finally a social network that gets you out of the house instead of glueing you to a screen.",
        name: "Sara L.",
        role: "Beta tester · Milan",
      },
    ],
    stats_note: "Community goals at launch",
    stats: [
      { value: "500+", label: "waitlist members" },
      { value: "12", label: "hobby categories" },
      { value: "3", label: "Italian launch cities" },
    ],
  },
  faq: {
    eyebrow: "Frequently asked questions",
    title: "Everything you want to know",
    items: [
      {
        q: "What is Freetime?",
        a: "Freetime is a social marketplace for hobbies and experiences: an app where you discover activities near you, join events and meet people who share your interests. It's both a place to find things to do and a social network for real life.",
      },
      {
        q: "When will it launch?",
        a: "We're working on the launch in Italy. Waitlist members will get early access and all updates first.",
      },
      {
        q: "Is it free?",
        a: "Yes: downloading Freetime, exploring hobbies and joining communities will be free. Some activities organised by hosts may have a participation fee, always clearly shown.",
      },
      {
        q: "Can I create my own activities?",
        a: "Absolutely. Anyone will be able to become a host: create events, manage participants, build a community and, if you want, monetise your experiences.",
      },
      {
        q: "How does the waitlist work?",
        a: "Leave your email and we'll let you know: you'll get exclusive updates on development and be among the first to try the app at launch. No spam, promise.",
      },
    ],
  },
  finalCta: {
    title: "Ready to transform your free time?",
    text: "Join the waitlist and discover Freetime before anyone else.",
    cta: "Join the waitlist",
  },
  waitlist: {
    floating: "Waitlist",
    modal_title: "Join the waitlist",
    modal_text:
      "Be among the first to know Freetime. Get exclusive updates and early access at launch.",
    placeholder: "Your email",
    button: "Notify me at launch",
    sending: "Sending…",
    success_title: "You're on the list! 🎉",
    success_text: "We'll write to you as soon as Freetime is ready. See you soon!",
    error: "Oops, something went wrong. Please try again in a moment.",
    invalid: "Please enter a valid email address.",
    privacy: "No spam. Only Freetime updates.",
    close: "Close",
  },
  footer: {
    tagline: "Hobbies, experiences and people — in your city.",
    made: "Made with ❤️ in Italy",
    rights: "All rights reserved.",
    contact: "Contact",
    follow: "Follow us",
  },
};

export const dictionaries: Record<Locale, typeof it> = { it, en };
export type Dictionary = typeof it;
