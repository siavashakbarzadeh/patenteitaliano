"use client";

export type UserProgress = {
  totalAnswered: number;
  totalCorrect: number;
  chapterStats: Record<string, { answered: number; correct: number }>;
  completedQuizzes: number;
  streak: number;
  lastQuizDate: string | null;
};

const DEFAULT_PROGRESS: UserProgress = {
  totalAnswered: 0,
  totalCorrect: 0,
  chapterStats: {},
  completedQuizzes: 0,
  streak: 0,
  lastQuizDate: null,
};

const KEY = "patente_progress_v2";

export function getProgress(): UserProgress {
  if (typeof window === "undefined") return DEFAULT_PROGRESS;
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return DEFAULT_PROGRESS;
    return { ...DEFAULT_PROGRESS, ...JSON.parse(raw) };
  } catch {
    return DEFAULT_PROGRESS;
  }
}

export function saveProgress(progress: UserProgress): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(KEY, JSON.stringify(progress));
}

export function recordAnswer(chapter: number, isCorrect: boolean): UserProgress {
  const progress = getProgress();
  const key = String(chapter);
  progress.totalAnswered += 1;
  if (isCorrect) progress.totalCorrect += 1;
  if (!progress.chapterStats[key]) {
    progress.chapterStats[key] = { answered: 0, correct: 0 };
  }
  progress.chapterStats[key].answered += 1;
  if (isCorrect) progress.chapterStats[key].correct += 1;
  saveProgress(progress);
  return progress;
}

export function recordQuizComplete(): UserProgress {
  const progress = getProgress();
  progress.completedQuizzes += 1;
  const today = new Date().toDateString();
  if (progress.lastQuizDate === today) {
    // same day
  } else if (progress.lastQuizDate === new Date(Date.now() - 86400000).toDateString()) {
    progress.streak += 1;
  } else {
    progress.streak = 1;
  }
  progress.lastQuizDate = today;
  saveProgress(progress);
  return progress;
}

export function resetProgress(): void {
  if (typeof window === "undefined") return;
  localStorage.removeItem(KEY);
}

export function getAccuracy(progress: UserProgress): number {
  if (progress.totalAnswered === 0) return 0;
  return Math.round((progress.totalCorrect / progress.totalAnswered) * 100);
}
