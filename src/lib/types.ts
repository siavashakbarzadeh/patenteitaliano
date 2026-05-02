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
};
