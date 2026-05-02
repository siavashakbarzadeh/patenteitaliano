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
