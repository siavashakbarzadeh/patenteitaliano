// ── Chapter metadata for all 25 chapters ─────────────────────────────────────
// To add a new chapter: set available: true and add its questions file under ./XX/index.ts

import type { Chapter } from "@/lib/types";

export const chapters: Chapter[] = [
  { number: 1,  title: "Segnali di Pericolo",            subtitle: "Triangoli con bordo rosso",           icon: "⚠️",  available: false },
  { number: 2,  title: "Segnali di Divieto",              subtitle: "Cerchi con bordo rosso",              icon: "🚫",  available: false },
  { number: 3,  title: "Segnali di Obbligo",              subtitle: "Cerchi blu con frecce bianche",       icon: "🔵",  available: false },
  { number: 4,  title: "Segnali di Precedenza",           subtitle: "Stop, Dare Precedenza, Rotatoria",    icon: "🛑",  available: false },
  { number: 5,  title: "Segnaletica Orizzontale",         subtitle: "Strisce, righe e frecce sull'asfalto",icon: "🛣️",  available: false },
  { number: 6,  title: "Segnali Luminosi",                subtitle: "Semafori e luci stradali",            icon: "🚦",  available: false },
  { number: 7,  title: "Segnali dei Vigili",              subtitle: "Gestione manuale del traffico",       icon: "👮",  available: false },
  { number: 8,  title: "Segnali Complementari",           subtitle: "Pannelli integrativi e distanza",     icon: "📋",  available: false },
  { number: 9,  title: "Segnali di Indicazione",          subtitle: "Cartelli informativi e servizi",      icon: "🗺️",  available: false },
  { number: 10, title: "Comportamento alla Guida",        subtitle: "Norme generali di condotta",          icon: "🚗",  available: false },
  { number: 11, title: "Precedenza agli Incroci",         subtitle: "Regole di precedenza e rotatorie",    icon: "🔄",  available: false },
  { number: 12, title: "Sorpasso",                        subtitle: "Quando e come sorpassare",            icon: "↪️",  available: false },
  { number: 13, title: "Norme sulla Circolazione dei Veicoli", subtitle: "Posizione, corsie, tram e abbaglianti", icon: "🛣️",  available: true  },
  { number: 14, title: "Ordine di Precedenza negli Incroci", subtitle: "Destra libera, STOP, tram e svolta a sinistra", icon: "🔄",  available: true  },
  { number: 15, title: "Norme Relative al Sorpasso",        subtitle: "Fasi, divieti e sorpasso a destra",      icon: "↪️",  available: true  },
  { number: 16, title: "Fermata, Sosta e Partenza",    subtitle: "Arresto, fermata, sosta, divieti e portiere",  icon: "🅿️",  available: true  },
  { number: 17, title: "Ingombro, Autostrada e Trasporto", subtitle: "Triangolo, giubbotto, autostrada, traino", icon: "🚧",  available: true  },
  { number: 18, title: "Uso delle Luci e Dispositivi Acustici", subtitle: "Luci, clacson, spie e segnali", icon: "💡",  available: true  },
  { number: 19, title: "کمربند و صندلی کودک",           subtitle: "کمربند، ایربگ، صندلی کودک، کلاه ایمنی",   icon: "🔒",  available: true  },
  { number: 20, title: "Patenti di Guida",                subtitle: "Categorie, sanzioni, documenti",      icon: "📄",  available: true  },
  { number: 21, title: "Autostrade e Strade Extraurbane", subtitle: "Norme per strade veloci",             icon: "🏎️",  available: false },
  { number: 22, title: "Incidenti e Pronto Soccorso",     subtitle: "Comportamento dopo un incidente",     icon: "🚑",  available: false },
  { number: 23, title: "Meccanica e Manutenzione",        subtitle: "Il veicolo e il suo funzionamento",   icon: "🔧",  available: false },
  { number: 24, title: "Rispetto dell'Ambiente",          subtitle: "Ecologia, emissioni, risparmio",      icon: "🌿",  available: false },
  { number: 25, title: "Veicoli e Norme Speciali",        subtitle: "Categorie particolari di veicoli",    icon: "🚛",  available: false },
];
