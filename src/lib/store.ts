"use client";

import type { ExtendedProgress, WrongAnswer, FlaggedQuestion } from "@/lib/types";

export type { ExtendedProgress as UserProgress };

// Keep backward compat alias
export type { ExtendedProgress };

const DEFAULT_PROGRESS: ExtendedProgress = {
  totalAnswered: 0,
  totalCorrect: 0,
  chapterStats: {},
  completedQuizzes: 0,
  streak: 0,
  lastQuizDate: null,
  wrongAnswers: {},
  flaggedQuestions: {},
  totalTimeSpent: 0,
};

const KEY = "patente_progress_v3";

export function getProgress(): ExtendedProgress {
  if (typeof window === "undefined") return DEFAULT_PROGRESS;
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) {
      // migrate from v2
      const oldRaw = localStorage.getItem("patente_progress_v2");
      if (oldRaw) {
        const old = JSON.parse(oldRaw);
        return { ...DEFAULT_PROGRESS, ...old, wrongAnswers: {}, flaggedQuestions: {}, totalTimeSpent: 0 };
      }
      return DEFAULT_PROGRESS;
    }
    return { ...DEFAULT_PROGRESS, ...JSON.parse(raw) };
  } catch {
    return DEFAULT_PROGRESS;
  }
}

export function saveProgress(progress: ExtendedProgress): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(KEY, JSON.stringify(progress));
}

export function recordAnswer(
  chapter: number,
  questionId: number,
  isCorrect: boolean,
  timeSpent = 0
): ExtendedProgress {
  const progress = getProgress();
  const key = String(chapter);
  progress.totalAnswered += 1;
  if (isCorrect) progress.totalCorrect += 1;
  if (!progress.chapterStats[key]) {
    progress.chapterStats[key] = { answered: 0, correct: 0, timeSpent: 0 };
  }
  progress.chapterStats[key].answered += 1;
  if (isCorrect) progress.chapterStats[key].correct += 1;
  progress.chapterStats[key].timeSpent = (progress.chapterStats[key].timeSpent ?? 0) + timeSpent;
  progress.totalTimeSpent = (progress.totalTimeSpent ?? 0) + timeSpent;

  if (!isCorrect) {
    const existing = progress.wrongAnswers[questionId];
    progress.wrongAnswers[questionId] = {
      questionId,
      chapter,
      answeredAt: new Date().toISOString(),
      timesWrong: (existing?.timesWrong ?? 0) + 1,
    };
  } else {
    // Clear wrong answer record if now correct
    delete progress.wrongAnswers[questionId];
  }

  saveProgress(progress);
  return progress;
}

export function recordQuizComplete(): ExtendedProgress {
  const progress = getProgress();
  progress.completedQuizzes += 1;
  const today = new Date().toDateString();
  if (progress.lastQuizDate === today) {
    // same day — streak unchanged
  } else if (progress.lastQuizDate === new Date(Date.now() - 86400000).toDateString()) {
    progress.streak += 1;
  } else {
    progress.streak = 1;
  }
  progress.lastQuizDate = today;
  saveProgress(progress);
  return progress;
}

export function toggleFlagQuestion(questionId: number, chapter: number): ExtendedProgress {
  const progress = getProgress();
  if (progress.flaggedQuestions[questionId]) {
    delete progress.flaggedQuestions[questionId];
  } else {
    progress.flaggedQuestions[questionId] = {
      questionId,
      chapter,
      flaggedAt: new Date().toISOString(),
    };
  }
  saveProgress(progress);
  return progress;
}

export function isFlagged(progress: ExtendedProgress, questionId: number): boolean {
  return !!progress.flaggedQuestions[questionId];
}

export function getWrongQuestionIds(progress: ExtendedProgress): number[] {
  return Object.keys(progress.wrongAnswers).map(Number);
}

export function getFlaggedQuestionIds(progress: ExtendedProgress): number[] {
  return Object.keys(progress.flaggedQuestions).map(Number);
}

export function resetProgress(): void {
  if (typeof window === "undefined") return;
  localStorage.removeItem(KEY);
  localStorage.removeItem("patente_progress_v2");
}

export function getAccuracy(progress: ExtendedProgress): number {
  if (progress.totalAnswered === 0) return 0;
  return Math.round((progress.totalCorrect / progress.totalAnswered) * 100);
}

// ── Color Tags (3-color system) ───────────────────────────────────────────────
import type { ColorTagSlot, ColorTagConfig, AttemptRecord, RaisedHand } from "@/lib/types";
import { DEFAULT_TAG_CONFIGS } from "@/lib/types";

const TAG_CONFIG_KEY = "patente_tag_configs";
const HARD_Q_KEY = "patente_hard_questions";
const RAISED_HAND_KEY = "patente_raised_hands";

export function getTagConfigs(): ColorTagConfig[] {
  try {
    const raw = localStorage.getItem(TAG_CONFIG_KEY);
    return raw ? JSON.parse(raw) : DEFAULT_TAG_CONFIGS;
  } catch { return DEFAULT_TAG_CONFIGS; }
}

export function saveTagConfigs(configs: ColorTagConfig[]): void {
  localStorage.setItem(TAG_CONFIG_KEY, JSON.stringify(configs));
}

export function setQuestionTag(questionId: number, slot: ColorTagSlot | null): ExtendedProgress {
  const progress = getProgress();
  if (!progress.questionTags) progress.questionTags = {};
  if (slot === null) {
    delete progress.questionTags[questionId];
  } else {
    progress.questionTags[questionId] = slot;
  }
  saveProgress(progress);
  return progress;
}

export function getQuestionTag(progress: ExtendedProgress, questionId: number): ColorTagSlot | null {
  return progress.questionTags?.[questionId] ?? null;
}

export function getTaggedQuestionIds(progress: ExtendedProgress, slot: ColorTagSlot): number[] {
  if (!progress.questionTags) return [];
  return Object.entries(progress.questionTags)
    .filter(([, s]) => s === slot)
    .map(([id]) => Number(id));
}

// ── Attempt History ───────────────────────────────────────────────────────────
export function recordAttemptHistory(
  questionId: number, chapter: number, isCorrect: boolean
): void {
  const progress = getProgress();
  if (!progress.attemptHistory) progress.attemptHistory = {};
  const existing = progress.attemptHistory[questionId] ?? {
    questionId, chapter, wrongCount: 0, correctCount: 0, sessions: [],
  };
  if (isCorrect) {
    existing.correctCount += 1;
  } else {
    existing.wrongCount += 1;
    existing.sessions = [new Date().toISOString(), ...existing.sessions].slice(0, 20);
  }
  progress.attemptHistory[questionId] = existing;
  saveProgress(progress);
}

export function getAttemptHistory(progress: ExtendedProgress): AttemptRecord[] {
  return Object.values(progress.attemptHistory ?? {})
    .sort((a, b) => b.wrongCount - a.wrongCount);
}

// ── Admin Hard Questions ───────────────────────────────────────────────────────
export function getHardQuestionIds(): number[] {
  try {
    return JSON.parse(localStorage.getItem(HARD_Q_KEY) || "[]");
  } catch { return []; }
}

export function setHardQuestion(id: number, isHard: boolean): void {
  const current = getHardQuestionIds();
  const updated = isHard ? [...new Set([...current, id])] : current.filter(x => x !== id);
  localStorage.setItem(HARD_Q_KEY, JSON.stringify(updated));
}

export function isHardQuestion(id: number): boolean {
  return getHardQuestionIds().includes(id);
}

// ── Raised Hand ───────────────────────────────────────────────────────────────
export function raiseHand(questionId: number, chapter: number, questionText: string): void {
  const existing: RaisedHand[] = getRaisedHands();
  const alreadySent = existing.some(r => r.questionId === questionId && !r.resolved);
  if (alreadySent) return;
  const entry: RaisedHand = {
    questionId, chapter, question: questionText,
    sentAt: new Date().toISOString(), resolved: false,
  };
  localStorage.setItem(RAISED_HAND_KEY, JSON.stringify([entry, ...existing]));
}

export function getRaisedHands(): RaisedHand[] {
  try {
    return JSON.parse(localStorage.getItem(RAISED_HAND_KEY) || "[]");
  } catch { return []; }
}

export function resolveRaisedHand(questionId: number): void {
  const updated = getRaisedHands().map(r =>
    r.questionId === questionId ? { ...r, resolved: true } : r
  );
  localStorage.setItem(RAISED_HAND_KEY, JSON.stringify(updated));
}

// ── Query Presets ─────────────────────────────────────────────────────────────
export type QueryPreset = {
  id: string;
  label: string;
  icon: string;
  description: string;
  mode: "hard" | "flagged" | "wrong" | "tagged0" | "tagged1" | "tagged2" | "hardWrong";
};

export const QUERY_PRESETS: QueryPreset[] = [
  { id: "hard",      label: "سوالات سخت",           icon: "🔥", description: "سوالات علامت‌گذاری شده توسط ادمین",               mode: "hard"      },
  { id: "flagged",   label: "علامت‌دار من",           icon: "🚩", description: "سوالاتی که خودت علامت زدی",                      mode: "flagged"   },
  { id: "wrong",     label: "غلط‌های من",             icon: "❌", description: "سوالاتی که جواب غلط دادی",                       mode: "wrong"     },
  { id: "tagged0",   label: "تگ قرمز",               icon: "🔴", description: "سوالات تگ‌شده با رنگ اول",                       mode: "tagged0"   },
  { id: "tagged1",   label: "تگ زرد",                icon: "🟡", description: "سوالات تگ‌شده با رنگ دوم",                       mode: "tagged1"   },
  { id: "tagged2",   label: "تگ سبز",                icon: "🟢", description: "سوالات تگ‌شده با رنگ سوم",                       mode: "tagged2"   },
  { id: "hardWrong", label: "سخت + غلط",            icon: "💀", description: "سوالات سخت که جواب غلط هم دادی",                 mode: "hardWrong" },
];
