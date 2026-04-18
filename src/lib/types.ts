// ── Shared types used across all chapters ────────────────────────────────────

export type Question = {
  id: number;
  chapter: number; // 1-25
  question: string;
  options: string[];
  correct: number;
  explanation: string;
};

export type Chapter = {
  number: number;
  title: string;
  subtitle: string;
  icon: string;
  available: boolean;
};
