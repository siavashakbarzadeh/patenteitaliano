/* eslint-disable @typescript-eslint/no-explicit-any */
// ─── Supabase DB Helpers ──────────────────────────────────────────────────────

import { supabase } from "./supabase";
import type { UserProgress } from "./store";
import type { GamificationState } from "./gamification";

const db = (table: string) => supabase.from(table) as any;

// ── User Progress ─────────────────────────────────────────────────────────────

export async function syncProgressToCloud(userId: string, progress: UserProgress): Promise<void> {
  await db("user_progress").upsert({
    user_id: userId,
    total_answered: progress.totalAnswered,
    total_correct: progress.totalCorrect,
    completed_quizzes: progress.completedQuizzes,
    streak: progress.streak,
    last_quiz_date: progress.lastQuizDate,
    chapter_stats: progress.chapterStats,
    wrong_answers: progress.wrongAnswers,
    flagged_questions: progress.flaggedQuestions,
    total_time_spent: progress.totalTimeSpent,
  }, { onConflict: "user_id" });
}

export async function loadProgressFromCloud(userId: string): Promise<UserProgress | null> {
  const { data, error } = await db("user_progress").select("*").eq("user_id", userId).single();
  if (error || !data) return null;
  return {
    totalAnswered: data.total_answered,
    totalCorrect: data.total_correct,
    completedQuizzes: data.completed_quizzes,
    streak: data.streak,
    lastQuizDate: data.last_quiz_date,
    chapterStats: data.chapter_stats,
    wrongAnswers: data.wrong_answers,
    flaggedQuestions: data.flagged_questions,
    totalTimeSpent: data.total_time_spent,
  };
}

// ── Gamification ──────────────────────────────────────────────────────────────

export async function syncGamificationToCloud(userId: string, gm: GamificationState): Promise<void> {
  await db("gamification").upsert({
    user_id: userId,
    total_xp: gm.totalXP,
    level: gm.level,
    login_xp: gm.loginXP,
    quiz_xp: gm.quizXP,
    time_xp: gm.timeXP,
    consecutive_days: gm.consecutiveDays,
    last_login_date: gm.lastLoginDate,
    referral_count: gm.referralCount,
  }, { onConflict: "user_id" });
}

export async function loadGamificationFromCloud(userId: string): Promise<Partial<GamificationState> | null> {
  const { data, error } = await db("gamification").select("*").eq("user_id", userId).single();
  if (error || !data) return null;
  return {
    totalXP: data.total_xp, level: data.level,
    loginXP: data.login_xp, quizXP: data.quiz_xp, timeXP: data.time_xp,
    consecutiveDays: data.consecutive_days, lastLoginDate: data.last_login_date,
    referralCount: data.referral_count,
  };
}

// ── Feedback ──────────────────────────────────────────────────────────────────

export async function submitFeedbackToCloud(payload: {
  userId: string | null; type: string; rating: number; comment?: string; chapterNum?: number;
}): Promise<void> {
  await db("feedback").insert({
    user_id: payload.userId, type: payload.type, rating: payload.rating,
    comment: payload.comment ?? null, chapter_num: payload.chapterNum ?? null,
  });
}

export async function getAllFeedbackFromCloud() {
  const { data } = await db("feedback").select("*").order("submitted_at", { ascending: false });
  return data ?? [];
}

// ── Support Requests ──────────────────────────────────────────────────────────

export async function submitSupportRequestToCloud(payload: {
  userId: string | null; type: string;
  name?: string; phone?: string; email?: string; message?: string;
}): Promise<void> {
  await db("support_requests").insert({
    user_id: payload.userId, type: payload.type, name: payload.name ?? null,
    phone: payload.phone ?? null, email: payload.email ?? null,
    message: payload.message ?? null, resolved: false,
  });
}

export async function getAllSupportRequestsFromCloud() {
  const { data } = await db("support_requests").select("*").order("submitted_at", { ascending: false });
  return data ?? [];
}

export async function resolveSupportRequestInCloud(id: string): Promise<void> {
  await db("support_requests").update({ resolved: true }).eq("id", id);
}

// ── Discount Codes ────────────────────────────────────────────────────────────

export async function getActiveDiscountCodesFromCloud() {
  const { data } = await db("discount_codes").select("*").eq("active", true);
  return data ?? [];
}

export async function validateDiscountCodeInCloud(code: string) {
  const { data, error } = await db("discount_codes")
    .select("*").eq("code", code.toUpperCase()).eq("active", true).single();
  if (error || !data) return { valid: false, message: "کد تخفیف یافت نشد", discount: null };
  if (data.expires_at && new Date(data.expires_at) < new Date())
    return { valid: false, message: "کد منقضی شده", discount: null };
  if (data.max_uses !== null && data.used_count >= data.max_uses)
    return { valid: false, message: "ظرفیت پر شده", discount: null };
  return { valid: true, message: `✓ تخفیف ${data.discount_percent}٪ اعمال شد`, discount: data };
}

export async function createDiscountCodeInCloud(code: {
  code: string; discount_percent: number; description: string;
  expires_at: string | null; max_uses: number | null; type: string;
}): Promise<void> {
  await db("discount_codes").insert({ ...code, active: true });
}

export async function toggleDiscountCodeInCloud(code: string, active: boolean): Promise<void> {
  await db("discount_codes").update({ active }).eq("code", code);
}

export async function deleteDiscountCodeFromCloud(code: string): Promise<void> {
  await db("discount_codes").delete().eq("code", code);
}

// ── Exam Follow-up ────────────────────────────────────────────────────────────

export async function submitExamFollowupToCloud(
  userId: string,
  data: { passed: boolean | null; score: number | null; attempts: number; examDate: string | null; notes: string }
): Promise<void> {
  await db("exam_followup").upsert({
    user_id: userId, passed: data.passed, score: data.score,
    attempts: data.attempts, exam_date: data.examDate, notes: data.notes,
  }, { onConflict: "user_id" });
}

// ── User Profile ──────────────────────────────────────────────────────────────

export async function getUserProfile(userId: string) {
  const { data } = await db("users_profile").select("*").eq("id", userId).single();
  return data;
}

export async function upsertUserProfile(
  userId: string,
  profile: { name?: string; level?: string; exam_date?: string | null; native_language?: string; tos_accepted?: boolean }
): Promise<void> {
  await db("users_profile").upsert({ id: userId, ...profile }, { onConflict: "id" });
}
