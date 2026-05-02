// ─────────────────────────────────────────────────────────────────────────────
//  Italiano per Argomenti — Data Types & Topic Registry
// ─────────────────────────────────────────────────────────────────────────────

export type VocabItem = {
  italian: string;
  persian: string;
  phonetic?: string;
  example?: string;
  examplePersian?: string;
};

export type PhraseItem = {
  italian: string;
  persian: string;
  context?: string;
};

export type DialogueLine = {
  speaker: "A" | "B";
  role?: string;    // e.g. "Paziente" | "Dottore"
  italian: string;
  persian: string;
};

export type GrammarNote = {
  title: string;
  body: string;
};

export type ReadingSection = {
  heading: string;          // Italian section heading
  headingFa?: string;       // Persian heading
  body: string;             // Italian paragraph(s) — newline = paragraph break
  bodyFa?: string;          // Persian translation
  callout?: {               // highlighted box (tips, key points)
    title: string;
    items: string[];
  };
  keywords?: string[];      // important words to highlight in body
};

export type Reading = {
  title: string;
  titleFa?: string;
  sections: ReadingSection[];
};

export type ItalianoTopic = {
  id: string;
  title: string;         // Italian title
  titleFa: string;       // Persian subtitle
  icon: string;
  color: string;         // CSS color for card accent
  colorBg: string;       // CSS background gradient
  level: "beginner" | "intermediate" | "advanced";
  levelFa: string;
  description: string;
  descriptionFa: string;
  vocabulary: VocabItem[];
  phrases: PhraseItem[];
  dialogue: DialogueLine[];
  grammarNotes?: GrammarNote[];
  culturalTip?: string;
  reading?: Reading;
};

// ─── Topic Registry ───────────────────────────────────────────────────────────
import { dalMedicoTopic } from "./topics/dal-medico";

export const italianoTopics: ItalianoTopic[] = [
  dalMedicoTopic,
  // future topics go here
  {
    id: "al-supermercato",
    title: "Al Supermercato",
    titleFa: "در سوپرمارکت",
    icon: "🛒",
    color: "#22c55e",
    colorBg: "linear-gradient(135deg, rgba(34,197,94,0.2), rgba(16,185,129,0.1))",
    level: "beginner",
    levelFa: "مبتدی",
    description: "Shopping vocabulary and phrases for the supermarket",
    descriptionFa: "واژه‌ها و عبارات خرید در سوپرمارکت",
    vocabulary: [], phrases: [], dialogue: [],
  },
  {
    id: "in-banca",
    title: "In Banca",
    titleFa: "در بانک",
    icon: "🏦",
    color: "#3b82f6",
    colorBg: "linear-gradient(135deg, rgba(59,130,246,0.2), rgba(99,102,241,0.1))",
    level: "intermediate",
    levelFa: "متوسط",
    description: "Bank operations, accounts, and financial phrases",
    descriptionFa: "عملیات بانکی، حساب‌ها و عبارات مالی",
    vocabulary: [], phrases: [], dialogue: [],
  },
  {
    id: "al-comune",
    title: "Al Comune",
    titleFa: "در شهرداری",
    icon: "🏛️",
    color: "#f59e0b",
    colorBg: "linear-gradient(135deg, rgba(245,158,11,0.2), rgba(249,115,22,0.1))",
    level: "intermediate",
    levelFa: "متوسط",
    description: "Public office vocabulary and bureaucratic Italian",
    descriptionFa: "واژگان اداری و ایتالیایی بوروکراتیک",
    vocabulary: [], phrases: [], dialogue: [],
  },
  {
    id: "lavoro-colloquio",
    title: "Colloquio di Lavoro",
    titleFa: "مصاحبه شغلی",
    icon: "💼",
    color: "#8b5cf6",
    colorBg: "linear-gradient(135deg, rgba(139,92,246,0.2), rgba(167,139,250,0.1))",
    level: "advanced",
    levelFa: "پیشرفته",
    description: "Job interview language and professional vocabulary",
    descriptionFa: "زبان مصاحبه شغلی و واژگان حرفه‌ای",
    vocabulary: [], phrases: [], dialogue: [],
  },
  {
    id: "affittare-casa",
    title: "Affittare Casa",
    titleFa: "اجاره خانه",
    icon: "🏠",
    color: "#ec4899",
    colorBg: "linear-gradient(135deg, rgba(236,72,153,0.2), rgba(244,114,182,0.1))",
    level: "intermediate",
    levelFa: "متوسط",
    description: "Renting, contracts, and housing vocabulary",
    descriptionFa: "اجاره، قراردادها و واژگان مسکن",
    vocabulary: [], phrases: [], dialogue: [],
  },
  {
    id: "scuola-bambini",
    title: "A Scuola con i Bambini",
    titleFa: "مدرسه با بچه‌ها",
    icon: "🎒",
    color: "#06b6d4",
    colorBg: "linear-gradient(135deg, rgba(6,182,212,0.2), rgba(14,165,233,0.1))",
    level: "beginner",
    levelFa: "مبتدی",
    description: "School system, teachers, and parent communication",
    descriptionFa: "سیستم آموزشی، معلمان و ارتباط با والدین",
    vocabulary: [], phrases: [], dialogue: [],
  },
  {
    id: "trasporti",
    title: "Trasporti Pubblici",
    titleFa: "حمل‌ونقل عمومی",
    icon: "🚌",
    color: "#14b8a6",
    colorBg: "linear-gradient(135deg, rgba(20,184,166,0.2), rgba(6,182,212,0.1))",
    level: "beginner",
    levelFa: "مبتدی",
    description: "Bus, metro, train and getting around Italy",
    descriptionFa: "اتوبوس، مترو، قطار و حرکت در ایتالیا",
    vocabulary: [], phrases: [], dialogue: [],
  },
  {
    id: "emergenze",
    title: "In Caso di Emergenza",
    titleFa: "در شرایط اضطراری",
    icon: "🚨",
    color: "#ef4444",
    colorBg: "linear-gradient(135deg, rgba(239,68,68,0.2), rgba(244,86,106,0.1))",
    level: "beginner",
    levelFa: "مبتدی",
    description: "Emergency phrases, numbers, and safety Italian",
    descriptionFa: "عبارات اضطراری، اعداد و ایمنی",
    vocabulary: [], phrases: [], dialogue: [],
  },
];
