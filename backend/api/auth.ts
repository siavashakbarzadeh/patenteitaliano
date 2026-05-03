import { supabaseAdmin } from "../lib/supabase";

// ── Login ─────────────────────────────────────────────────────────────────────
export async function loginUser(username: string, password: string) {
  const { data, error } = await supabaseAdmin
    .from("users")
    .select("id, username, display_name, role, password_hash")
    .ilike("username", username)
    .single();

  if (error || !data) return { user: null, error: "کاربر یافت نشد" };
  if (data.password_hash !== password) return { user: null, error: "رمز عبور اشتباه است" };

  // Log activity
  await supabaseAdmin.from("activity_log").insert({
    user_id: data.id, username: data.username, action: "login",
  });

  return {
    user: { id: data.id, username: data.username, displayName: data.display_name, role: data.role },
    error: null,
  };
}

// ── Logout ────────────────────────────────────────────────────────────────────
export async function logoutUser(userId: string, username: string) {
  await supabaseAdmin.from("activity_log").insert({
    user_id: userId, username, action: "logout",
  });
}

// ── Get All Users ─────────────────────────────────────────────────────────────
export async function getAllUsers() {
  const { data } = await supabaseAdmin
    .from("users")
    .select("id, username, display_name, role, created_at")
    .order("created_at");
  return data ?? [];
}

// ── Add User ──────────────────────────────────────────────────────────────────
export async function addUser(username: string, password: string, displayName: string, role: string) {
  const { data, error } = await supabaseAdmin
    .from("users")
    .insert({ username: username.toLowerCase(), password_hash: password, display_name: displayName, role })
    .select()
    .single();

  if (error) return { user: null, error: error.message };

  // Give default patente access
  await supabaseAdmin.from("section_access").insert({ user_id: data.id, section_id: "patente" });

  return { user: data, error: null };
}

// ── Update User ───────────────────────────────────────────────────────────────
export async function updateUser(userId: string, updates: { password?: string; displayName?: string; role?: string }) {
  const updateObj: Record<string, string> = {};
  if (updates.password) updateObj.password_hash = updates.password;
  if (updates.displayName) updateObj.display_name = updates.displayName;
  if (updates.role) updateObj.role = updates.role;

  const { error } = await supabaseAdmin.from("users").update(updateObj).eq("id", userId);
  return { error: error?.message ?? null };
}

// ── Delete User ───────────────────────────────────────────────────────────────
export async function deleteUser(userId: string) {
  const { error } = await supabaseAdmin.from("users").delete().eq("id", userId);
  return { error: error?.message ?? null };
}
