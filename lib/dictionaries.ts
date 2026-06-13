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
    values: "Missione",
    hosts: "Per le attività",
    faq: "FAQ",
    cta: "Lista d'attesa",
  },
  hero: {
    eyebrow: "Presto a Roma",
    headline_1: "Scopri cosa fare",
    headline_2: "vicino a te.",
    sub: "Trova hobby ed esperienze — anche piccole realtà che non conosci ancora — partecipa, incontra persone e torna ogni volta che vuoi vivere qualcosa di nuovo.",
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
    sub: "Dalle passioni di sempre a quelle che non sai ancora di avere. Ogni settimana nuove attività vicino a te — anche da piccole realtà locali ancora poco conosciute.",
    items: [
      { name: "Fotografia", emoji: "📷" },
      { name: "Escursionismo", emoji: "🥾" },
      { name: "Cucina", emoji: "🍝" },
      { name: "Tennis & Padel", emoji: "🎾" },
      { name: "Equitazione", emoji: "🐴" },
      { name: "Arte & Ceramica", emoji: "🎨" },
      { name: "Musica", emoji: "🎸" },
      { name: "Benessere & Yoga", emoji: "🧘" },
      { name: "Degustazioni", emoji: "🍷" },
      { name: "Artigianato", emoji: "💍" },
      { name: "Danza", emoji: "💃" },
      { name: "Lingue", emoji: "🗣️" },
    ],
    more: "…e molti altri al lancio",
  },
  how: {
    eyebrow: "Come funziona",
    title: "Scopri, partecipa, ripeti (o cambia)",
    steps: [
      {
        title: "Scopri cosa c'è vicino a te",
        text: "Esplora hobby ed esperienze nella tua zona, comprese piccole realtà locali che meritano di essere conosciute.",
      },
      {
        title: "Scegli e partecipa",
        text: "Trova qualcosa che ti incuriosisce e prenota il tuo posto in pochi tocchi.",
      },
      {
        title: "Incontra persone come te",
        text: "Ogni attività è un'occasione per conoscere persone che condividono i tuoi interessi.",
      },
      {
        title: "Torna o scopri qualcosa di nuovo",
        text: "Ti è piaciuto? Ripeti e diventa parte della community. Vuoi altro? C'è sempre una nuova attività da provare.",
      },
    ],
  },
  social: {
    eyebrow: "Molto più di un elenco di attività",
    title: "Un social network per la vita reale",
    sub: "Freetime unisce la scoperta di esperienze vicino a te a una vera community: ogni attività è un'occasione per conoscere persone, imparare qualcosa e condividere il momento.",
    features: [
      {
        title: "Profili personali",
        text: "Racconta chi sei attraverso i tuoi hobby e le attività che ami.",
        emoji: "👤",
      },
      {
        title: "Segui altri utenti",
        text: "Resta in contatto con le persone che incontri alle attività.",
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
        title: "Condividi i momenti",
        text: "Racconta le tue esperienze e ispira altri a provarle.",
        emoji: "✨",
      },
    ],
    phone: {
      app_title: "Freetime",
      card1_title: "Corso di ceramica",
      card1_meta: "Sab 15:00 · Trastevere · 4 posti",
      card2_title: "Padel — livello base",
      card2_meta: "Dom 10:30 · EUR · 2 posti",
      card3_title: "Aerial yoga",
      card3_meta: "Mar 18:30 · Monti · 6 posti",
      join: "Partecipa",
    },
  },
  values: {
    eyebrow: "Valori e missione",
    title: "Perché esiste Freetime",
    mission_label: "La nostra missione",
    mission:
      "Rendere semplice scoprire e vivere esperienze di valore vicino a te — dando visibilità anche alle piccole realtà locali che meritano di essere conosciute — attraverso una piattaforma affidabile, intuitiva e pensata per le persone.",
    vision_label: "Cosa vogliamo creare",
    vision:
      "Un luogo dove il tempo libero diventa un'occasione per crescere, divertirsi e creare connessioni vere: scopri qualcosa di nuovo, ripeti ciò che ami e costruisci la tua community, un'attività alla volta.",
    items: [
      {
        title: "Scoperta autentica",
        text: "Mettiamo in luce attività ed esperienze reali, comprese quelle di piccole realtà locali ancora poco conosciute.",
        emoji: "🔎",
      },
      {
        title: "Connessioni vere",
        text: "Ogni attività è un'occasione per incontrare persone con interessi simili ai tuoi.",
        emoji: "🤝",
      },
      {
        title: "Crescita personale",
        text: "Imparare qualcosa di nuovo o coltivare una passione: il tempo libero come spazio per crescere.",
        emoji: "🌱",
      },
      {
        title: "Fiducia e community",
        text: "Una piattaforma intuitiva e sicura, costruita insieme alla community che la usa.",
        emoji: "💚",
      },
    ],
  },
  hosts: {
    eyebrow: "In arrivo",
    title: "Organizzi attività ed esperienze?",
    sub: "Stiamo costruendo Freetime anche per chi organizza attività — specialmente piccole realtà locali che meritano più visibilità. Questa parte arriverà dopo il lancio: se ti interessa, faccelo sapere già da ora.",
    items: [
      {
        title: "Più visibilità",
        text: "Fatti scoprire da persone vicino a te interessate a quello che proponi.",
        emoji: "✨",
      },
      {
        title: "Una community che torna",
        text: "Trasforma chi partecipa una volta in una community che torna.",
        emoji: "🌱",
      },
      {
        title: "Gestione semplice",
        text: "Iscrizioni, presenze e comunicazioni in un unico posto (in arrivo).",
        emoji: "📋",
      },
    ],
    cta: "Avvisami quando è disponibile",
  },
  proof: {
    eyebrow: "La community cresce",
    title: "Le prime voci di Freetime",
    // ⚠️ PLACEHOLDER — sostituisci con testimonianze reali dei beta tester
    // prima del lancio pubblico.
    testimonials: [
      {
        quote:
          "Mi sono trasferita a Roma da poco: con Freetime ho scoperto un corso di ceramica vicino a casa che non avrei mai trovato da sola.",
        name: "Giulia M.",
        role: "Beta tester · Roma",
      },
      {
        quote:
          "Faccio aerial yoga da anni in un piccolo studio: con Freetime finalmente più persone della zona lo scoprono.",
        name: "Marco R.",
        role: "Beta tester · Roma",
      },
      {
        quote:
          "Ho provato il padel, poi una degustazione di vino, poi un laboratorio di ceramica — ogni volta qualcosa di nuovo e persone nuove.",
        name: "Sara L.",
        role: "Beta tester · Roma",
      },
    ],
    stats_note: "Obiettivi della community al lancio",
    stats: [
      { value: "500+", label: "iscritti in lista d'attesa" },
      { value: "12", label: "categorie di hobby" },
      { value: "1", label: "città italiana al lancio: Roma" },
    ],
  },
  faq: {
    eyebrow: "Domande frequenti",
    title: "Tutto quello che vuoi sapere",
    items: [
      {
        q: "Cos'è Freetime?",
        a: "Freetime è l'app per scoprire hobby ed esperienze vicino a te — comprese piccole realtà locali ancora poco conosciute — partecipare ad attività ed eventi, e incontrare persone che condividono i tuoi interessi. È un luogo per trovare cose nuove da fare e per costruire una community attorno alle tue passioni.",
      },
      {
        q: "Quando verrà lanciato?",
        a: "Stiamo lavorando al lancio a Roma. Gli iscritti alla lista d'attesa riceveranno l'accesso anticipato e tutti gli aggiornamenti in anteprima.",
      },
      {
        q: "È gratuito?",
        a: "Sì: scaricare Freetime, esplorare hobby ed esperienze e unirti alle community sarà gratuito. Alcune attività potranno avere un costo di partecipazione stabilito da chi le organizza, sempre indicato in modo chiaro.",
      },
      {
        q: "Posso proporre le mie attività su Freetime?",
        a: "È nei nostri piani: dopo il lancio vogliamo aprire Freetime anche a chi organizza attività, specialmente piccole realtà locali che meritano più visibilità. Se ti interessa, scrivici e sarai tra i primi a saperlo.",
      },
      {
        q: "Come funziona la lista d'attesa?",
        a: "Lasci la tua email e ti avvisiamo noi: riceverai aggiornamenti esclusivi sullo sviluppo e sarai tra i primi a provare l'app al lancio. Niente spam, promesso.",
      },
    ],
  },
  finalCta: {
    title: "Pronto a scoprire cosa c'è vicino a te?",
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
    tagline: "Hobby, esperienze e persone — vicino a te.",
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
    values: "Mission",
    hosts: "For activities",
    faq: "FAQ",
    cta: "Join waitlist",
  },
  hero: {
    eyebrow: "Coming soon to Rome",
    headline_1: "Discover what to do",
    headline_2: "near you.",
    sub: "Find hobbies and experiences — including small local gems you don't know yet — join in, meet people, and come back any time you want to try something new.",
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
    sub: "From lifelong passions to ones you don't know you have yet. New activities near you every week — including small local spots still under the radar.",
    items: [
      { name: "Photography", emoji: "📷" },
      { name: "Hiking", emoji: "🥾" },
      { name: "Cooking", emoji: "🍝" },
      { name: "Tennis & Padel", emoji: "🎾" },
      { name: "Horseback riding", emoji: "🐴" },
      { name: "Art & Ceramics", emoji: "🎨" },
      { name: "Music", emoji: "🎸" },
      { name: "Wellness & Yoga", emoji: "🧘" },
      { name: "Tastings", emoji: "🍷" },
      { name: "Crafts", emoji: "💍" },
      { name: "Dance", emoji: "💃" },
      { name: "Languages", emoji: "🗣️" },
    ],
    more: "…and many more at launch",
  },
  how: {
    eyebrow: "How it works",
    title: "Discover, join, repeat (or switch it up)",
    steps: [
      {
        title: "Discover what's near you",
        text: "Explore hobbies and experiences in your area, including small local gems worth knowing.",
      },
      {
        title: "Pick one and join",
        text: "Found something that catches your eye? Book your spot in a few taps.",
      },
      {
        title: "Meet people like you",
        text: "Every activity is a chance to meet people who share your interests.",
      },
      {
        title: "Come back or try something new",
        text: "Loved it? Come back and become part of the community. Want more? There's always something new to try.",
      },
    ],
  },
  social: {
    eyebrow: "Much more than a listings app",
    title: "A social network for real life",
    sub: "Freetime combines discovering experiences near you with a real community: every activity is a chance to meet people, learn something, and share the moment.",
    features: [
      {
        title: "Personal profiles",
        text: "Show who you are through the hobbies and activities you love.",
        emoji: "👤",
      },
      {
        title: "Follow other users",
        text: "Stay in touch with the people you meet at activities.",
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
        title: "Share the moment",
        text: "Tell others about your experiences and inspire them to try too.",
        emoji: "✨",
      },
    ],
    phone: {
      app_title: "Freetime",
      card1_title: "Pottery class",
      card1_meta: "Sat 3:00 PM · Trastevere · 4 spots",
      card2_title: "Padel — beginner level",
      card2_meta: "Sun 10:30 AM · EUR · 2 spots",
      card3_title: "Aerial yoga",
      card3_meta: "Tue 6:30 PM · Monti · 6 spots",
      join: "Join",
    },
  },
  values: {
    eyebrow: "Values & mission",
    title: "Why Freetime exists",
    mission_label: "Our mission",
    mission:
      "Make it easy to discover and enjoy valuable experiences near you — giving visibility to small local gems that deserve to be known — through a trustworthy, intuitive, people-first platform.",
    vision_label: "What we want to build",
    vision:
      "A place where free time becomes a chance to grow, have fun and build real connections: discover something new, come back to what you love, and build your community one activity at a time.",
    items: [
      {
        title: "Authentic discovery",
        text: "We highlight real activities and experiences, including small local spots still under the radar.",
        emoji: "🔎",
      },
      {
        title: "Real connections",
        text: "Every activity is a chance to meet people with interests like yours.",
        emoji: "🤝",
      },
      {
        title: "Personal growth",
        text: "Learning something new or nurturing a passion: free time as a space to grow.",
        emoji: "🌱",
      },
      {
        title: "Trust & community",
        text: "An intuitive, safe platform, built together with the community that uses it.",
        emoji: "💚",
      },
    ],
  },
  hosts: {
    eyebrow: "Coming soon",
    title: "Do you organise activities or experiences?",
    sub: "We're building Freetime for organisers too — especially small local spots that deserve more visibility. This part is coming after launch: if you're interested, let us know now.",
    items: [
      {
        title: "More visibility",
        text: "Get discovered by people near you who are interested in what you offer.",
        emoji: "✨",
      },
      {
        title: "A community that comes back",
        text: "Turn first-time participants into a community that returns.",
        emoji: "🌱",
      },
      {
        title: "Simple management",
        text: "Sign-ups, attendance and communication in one place (coming soon).",
        emoji: "📋",
      },
    ],
    cta: "Notify me when it's available",
  },
  proof: {
    eyebrow: "The community is growing",
    title: "First voices of Freetime",
    testimonials: [
      {
        quote:
          "I recently moved to Rome: with Freetime I discovered a pottery class near home I'd never have found on my own.",
        name: "Giulia M.",
        role: "Beta tester · Rome",
      },
      {
        quote:
          "I've run a small aerial yoga studio for years: with Freetime more people in the area are finally discovering it.",
        name: "Marco R.",
        role: "Beta tester · Rome",
      },
      {
        quote:
          "I tried padel, then a wine tasting, then a pottery workshop — every time something new and new people too.",
        name: "Sara L.",
        role: "Beta tester · Rome",
      },
    ],
    stats_note: "Community goals at launch",
    stats: [
      { value: "500+", label: "waitlist members" },
      { value: "12", label: "hobby categories" },
      { value: "1", label: "launch city: Rome" },
    ],
  },
  faq: {
    eyebrow: "Frequently asked questions",
    title: "Everything you want to know",
    items: [
      {
        q: "What is Freetime?",
        a: "Freetime is the app for discovering hobbies and experiences near you — including small local gems still under the radar — joining activities and events, and meeting people who share your interests. It's a place to find new things to do and build a community around your passions.",
      },
      {
        q: "When will it launch?",
        a: "We're working on the launch in Rome. Waitlist members will get early access and all updates first.",
      },
      {
        q: "Is it free?",
        a: "Yes: downloading Freetime, exploring hobbies and experiences, and joining communities will be free. Some activities may have a participation fee set by the organiser, always clearly shown.",
      },
      {
        q: "Can I list my own activities on Freetime?",
        a: "It's on our roadmap: after launch we want to open Freetime to organisers too, especially small local spots that deserve more visibility. If you're interested, get in touch and you'll be among the first to know.",
      },
      {
        q: "How does the waitlist work?",
        a: "Leave your email and we'll let you know: you'll get exclusive updates on development and be among the first to try the app at launch. No spam, promise.",
      },
    ],
  },
  finalCta: {
    title: "Ready to discover what's near you?",
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
    tagline: "Hobbies, experiences and people — near you.",
    made: "Made with ❤️ in Italy",
    rights: "All rights reserved.",
    contact: "Contact",
    follow: "Follow us",
  },
};

export const dictionaries: Record<Locale, typeof it> = { it, en };
export type Dictionary = typeof it;
