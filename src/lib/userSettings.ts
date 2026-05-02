"use client";

// ─── User Settings (theme, font, study plan) ──────────────────────────────────

export type AppTheme = "dark" | "light" | "blue" | "sepia";
export type FontScale = "sm" | "md" | "lg" | "xl";

export type UserSettings = {
  theme: AppTheme;
  fontScale: FontScale;
  examDate: string | null;        // ISO date string
  studyDaysPerWeek: number;       // 1-7
  dailyGoalMinutes: number;       // target study minutes per day
  showChapterRating: boolean;     // prompt rating after quiz
  lastRatingPrompt: string | null; // ISO date of last rating prompt
};

const FONT_SCALE_MAP: Record<FontScale, string> = {
  sm: "13px",
  md: "15px",
  lg: "17px",
  xl: "20px",
};

const SETTINGS_KEY = "patente_user_settings_v1";
const FEEDBACK_KEY = "patente_feedback_v1";

const DEFAULTS: UserSettings = {
  theme: "dark",
  fontScale: "md",
  examDate: null,
  studyDaysPerWeek: 5,
  dailyGoalMinutes: 30,
  showChapterRating: true,
  lastRatingPrompt: null,
};

export function getUserSettings(): UserSettings {
  if (typeof window === "undefined") return DEFAULTS;
  try {
    const raw = localStorage.getItem(SETTINGS_KEY);
    return raw ? { ...DEFAULTS, ...JSON.parse(raw) } : DEFAULTS;
  } catch { return DEFAULTS; }
}

export function saveUserSettings(s: UserSettings): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(SETTINGS_KEY, JSON.stringify(s));
  applySettings(s);
}

export function applySettings(s: UserSettings): void {
  if (typeof document === "undefined") return;
  const root = document.documentElement;
  // theme
  root.removeAttribute("data-theme");
  if (s.theme !== "dark") root.setAttribute("data-theme", s.theme);
  // font size
  root.style.setProperty("--user-font-base", FONT_SCALE_MAP[s.fontScale]);
  document.body.style.fontSize = FONT_SCALE_MAP[s.fontScale];
}

// ─── Chapter Feedback / Rating ────────────────────────────────────────────────
export type FeedbackEntry = {
  type: "chapter" | "quiz_batch" | "course_complete" | "general";
  chapterNum?: number;
  rating: 1 | 2 | 3 | 4 | 5;
  comment?: string;
  submittedAt: string;
};

export function saveFeedback(entry: FeedbackEntry): void {
  if (typeof window === "undefined") return;
  const all = getFeedbackHistory();
  localStorage.setItem(FEEDBACK_KEY, JSON.stringify([entry, ...all].slice(0, 100)));
}

export function getFeedbackHistory(): FeedbackEntry[] {
  try {
    return JSON.parse(localStorage.getItem(FEEDBACK_KEY) || "[]");
  } catch { return []; }
}

// ─── Exam Clearance Detection ─────────────────────────────────────────────────
export function checkExamClearance(
  totalCorrect: number,
  totalAnswered: number,
  completedQuizzes: number
): { cleared: boolean; score: number; message: string } {
  if (totalAnswered < 50) return { cleared: false, score: 0, message: "" };
  const score = Math.round((totalCorrect / totalAnswered) * 100);
  if (score >= 80 && completedQuizzes >= 5) {
    return {
      cleared: true, score,
      message: `🎉 آفرین! با ${score}% دقت در ${completedQuizzes} آزمون، آماده شرکت در آزمون واقعی هستی!`,
    };
  }
  return { cleared: false, score, message: "" };
}

// ─── Study Plan ───────────────────────────────────────────────────────────────
export function getDaysUntilExam(examDate: string | null): number | null {
  if (!examDate) return null;
  const diff = new Date(examDate).getTime() - Date.now();
  return Math.max(0, Math.ceil(diff / 86400000));
}

export function getStudyPlanSummary(settings: UserSettings, chaptersTotal: number): string {
  const days = getDaysUntilExam(settings.examDate);
  if (!days) return "";
  const sessions = days * (settings.studyDaysPerWeek / 7);
  const perSession = Math.ceil(chaptersTotal / Math.max(1, sessions));
  return `با ${days} روز تا آزمون، هر روز تمرین: ~${perSession} فصل/روز`;
}
