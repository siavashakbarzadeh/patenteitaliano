import { supabaseAdmin } from "../lib/supabase";

// ── Get / Upsert Progress ────────────────────────────────────────────────────
export async function getProgress(userId: string) {
  const { data } = await supabaseAdmin
    .from("user_progress")
    .select("*")
    .eq("user_id", userId)
    .single();
  return data;
}

export async function saveProgress(userId: string, progress: {
  totalAnswered: number; totalCorrect: number; completedQuizzes: number;
  streak: number; lastQuizDate: string | null; totalTimeSpent: number;
  chapterStats: Record<string, unknown>; wrongAnswers: Record<string, unknown>;
  flaggedQuestions: Record<string, unknown>;
}) {
  const { error } = await supabaseAdmin.from("user_progress").upsert({
    user_id: userId,
    total_answered: progress.totalAnswered,
    total_correct: progress.totalCorrect,
    completed_quizzes: progress.completedQuizzes,
    streak: progress.streak,
    last_quiz_date: progress.lastQuizDate,
    total_time_spent: progress.totalTimeSpent,
    chapter_stats: progress.chapterStats,
    wrong_answers: progress.wrongAnswers,
    flagged_questions: progress.flaggedQuestions,
    updated_at: new Date().toISOString(),
  }, { onConflict: "user_id" });
  return { error: error?.message ?? null };
}

export async function resetProgress(userId: string) {
  await supabaseAdmin.from("user_progress").delete().eq("user_id", userId);
}

// ── Hard Questions ────────────────────────────────────────────────────────────
export async function getHardQuestions() {
  const { data } = await supabaseAdmin.from("hard_questions").select("question_id");
  return (data ?? []).map(d => d.question_id);
}

export async function setHardQuestion(questionId: number, isHard: boolean) {
  if (isHard) {
    await supabaseAdmin.from("hard_questions").upsert({ question_id: questionId }, { onConflict: "question_id" });
  } else {
    await supabaseAdmin.from("hard_questions").delete().eq("question_id", questionId);
  }
}

// ── Raised Hands ──────────────────────────────────────────────────────────────
export async function getRaisedHands() {
  const { data } = await supabaseAdmin
    .from("raised_hands")
    .select("*")
    .order("sent_at", { ascending: false });
  return data ?? [];
}

export async function resolveRaisedHand(id: string) {
  await supabaseAdmin.from("raised_hands").update({ resolved: true }).eq("id", id);
}

// ── Tag Configs ───────────────────────────────────────────────────────────────
export async function getTagConfigs() {
  const { data } = await supabaseAdmin.from("tag_configs").select("*").order("tag_index");
  return data ?? [];
}

export async function saveTagConfigs(configs: { tagIndex: number; label: string; color: string }[]) {
  for (const cfg of configs) {
    await supabaseAdmin.from("tag_configs").upsert(
      { tag_index: cfg.tagIndex, label: cfg.label, color: cfg.color },
      { onConflict: "tag_index" }
    );
  }
}

// ── Feedback ──────────────────────────────────────────────────────────────────
export async function getFeedback() {
  const { data } = await supabaseAdmin.from("feedback").select("*").order("submitted_at", { ascending: false });
  return data ?? [];
}

// ── Support Requests ──────────────────────────────────────────────────────────
export async function getSupportRequests() {
  const { data } = await supabaseAdmin.from("support_requests").select("*").order("submitted_at", { ascending: false });
  return data ?? [];
}

export async function resolveSupportRequest(id: string) {
  await supabaseAdmin.from("support_requests").update({ resolved: true }).eq("id", id);
}

// ── Gamification ──────────────────────────────────────────────────────────────
export async function getGamification(userId: string) {
  const { data } = await supabaseAdmin.from("gamification").select("*").eq("user_id", userId).single();
  return data;
}
