// ── Shared types used across all chapters ────────────────────────────────────

export type Question = {
  id: number;
  chapter: number; // 1-25
  question: string;
  options: string[];
  correct: number;
  explanation: string;
  // optional enrichments
  pageRef?: number;          // page number in the book
  difficulty?: "easy" | "medium" | "hard";
  tags?: string[];           // topic tags for filtering
  vocab?: { italian: string; persian: string }[]; // key vocab in this question
  trucchi?: string[];        // shortcut key words/phrases for quick answer (trucchi)
};

export type Chapter = {
  number: number;
  title: string;
  subtitle: string;
  icon: string;
  available: boolean;
};

// ── Progress / Store types ────────────────────────────────────────────────────

export type WrongAnswer = {
  questionId: number;
  chapter: number;
  answeredAt: string; // ISO date string
  timesWrong: number;
};

export type FlaggedQuestion = {
  questionId: number;
  chapter: number;
  flaggedAt: string;
};

// ── Color Tags (3 colors, user-defined meaning) ───────────────────────────────
export type ColorTagSlot = 0 | 1 | 2; // tag color index

export type ColorTagConfig = {
  label: string;   // user-defined label e.g. "مهم", "مرور لازم"
  color: string;   // hex color
};

export const DEFAULT_TAG_CONFIGS: ColorTagConfig[] = [
  { label: "مهم",        color: "#ef4444" }, // red
  { label: "مرور لازم", color: "#f59e0b" }, // yellow
  { label: "آسان",       color: "#22d3a5" }, // green
];

// ── Attempt History ───────────────────────────────────────────────────────────
export type AttemptRecord = {
  questionId: number;
  chapter: number;
  wrongCount: number;
  correctCount: number;
  sessions: string[]; // ISO timestamps of each wrong attempt
};

// ── Raised Hand (unclear question sent to support) ───────────────────────────
export type RaisedHand = {
  questionId: number;
  chapter: number;
  question: string;
  sentAt: string;
  resolved: boolean;
};

export type ExtendedProgress = {
  totalAnswered: number;
  totalCorrect: number;
  chapterStats: Record<string, { answered: number; correct: number; timeSpent: number }>;
  completedQuizzes: number;
  streak: number;
  lastQuizDate: string | null;
  wrongAnswers: Record<number, WrongAnswer>;   // keyed by questionId
  flaggedQuestions: Record<number, FlaggedQuestion>; // keyed by questionId
  totalTimeSpent: number; // seconds
  // ── new fields ──
  questionTags?: Record<number, ColorTagSlot>;  // user color-tag per question
  attemptHistory?: Record<number, AttemptRecord>; // full attempt tracking
  hardQuestions?: number[]; // admin-flagged hard question ids (stored in separate key)
};
