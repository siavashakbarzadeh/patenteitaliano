import { supabaseAdmin } from "../lib/supabase";

// ── Get user's sections ───────────────────────────────────────────────────────
export async function getUserSections(userId: string) {
  const { data } = await supabaseAdmin
    .from("section_access")
    .select("section_id")
    .eq("user_id", userId);
  return (data ?? []).map(d => d.section_id);
}

// ── Get all section access ────────────────────────────────────────────────────
export async function getAllSectionAccess() {
  const { data } = await supabaseAdmin
    .from("section_access")
    .select("user_id, section_id, users(username)");
  return data ?? [];
}

// ── Set user sections (replace all) ───────────────────────────────────────────
export async function setUserSections(userId: string, sections: string[]) {
  // Delete existing
  await supabaseAdmin.from("section_access").delete().eq("user_id", userId);
  // Insert new
  if (sections.length > 0) {
    await supabaseAdmin.from("section_access").insert(
      sections.map(s => ({ user_id: userId, section_id: s }))
    );
  }
}

// ── Activity Log ──────────────────────────────────────────────────────────────
export async function getActivityLog(limit = 200) {
  const { data } = await supabaseAdmin
    .from("activity_log")
    .select("username, action, created_at")
    .order("created_at", { ascending: false })
    .limit(limit);
  return data ?? [];
}
