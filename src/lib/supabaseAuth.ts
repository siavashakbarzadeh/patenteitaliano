"use client";

// ─── Supabase Auth Helpers ────────────────────────────────────────────────────

/* eslint-disable @typescript-eslint/no-explicit-any */
import { supabase } from "./supabase";

export type AuthUser = {
  id: string;
  email: string;
  name: string | null;
  isAdmin: boolean;
};

function getAdminEmails(): string[] {
  return (process.env.NEXT_PUBLIC_ADMIN_EMAILS ?? "").split(",").map(s => s.trim());
}

// ── Sign Up ───────────────────────────────────────────────────────────────────
export async function signUp(
  email: string,
  password: string,
  name: string
): Promise<{ user: AuthUser | null; error: string | null }> {
  const { data, error } = await supabase.auth.signUp({ email, password });
  if (error) return { user: null, error: error.message };
  if (!data.user) return { user: null, error: "خطا در ایجاد حساب" };

  await (supabase.from("users_profile") as any).insert({
    id: data.user.id, name, tos_accepted: true,
  });

  return { user: { id: data.user.id, email, name, isAdmin: false }, error: null };
}

// ── Sign In ───────────────────────────────────────────────────────────────────
export async function signIn(
  email: string,
  password: string
): Promise<{ user: AuthUser | null; error: string | null }> {
  const { data, error } = await supabase.auth.signInWithPassword({ email, password });
  if (error) return { user: null, error: "ایمیل یا رمز اشتباه است" };
  if (!data.user) return { user: null, error: "خطا در ورود" };

  const { data: profile } = await (supabase.from("users_profile") as any)
    .select("name").eq("id", data.user.id).single();

  return {
    user: {
      id: data.user.id,
      email: data.user.email!,
      name: (profile as any)?.name ?? null,
      isAdmin: getAdminEmails().includes(data.user.email ?? ""),
    },
    error: null,
  };
}

// ── Sign Out ──────────────────────────────────────────────────────────────────
export async function signOut(): Promise<void> {
  await supabase.auth.signOut();
}

// ── Get Current User ──────────────────────────────────────────────────────────
export async function getCurrentUser(): Promise<AuthUser | null> {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return null;

  const { data: profile } = await (supabase.from("users_profile") as any)
    .select("name").eq("id", user.id).single();

  return {
    id: user.id,
    email: user.email!,
    name: (profile as any)?.name ?? null,
    isAdmin: getAdminEmails().includes(user.email ?? ""),
  };
}

// ── Listen to Auth Changes ────────────────────────────────────────────────────
export function onAuthChange(callback: (user: AuthUser | null) => void) {
  return supabase.auth.onAuthStateChange(async (_event, session) => {
    if (!session?.user) { callback(null); return; }
    const u = session.user;
    const { data: profile } = await (supabase.from("users_profile") as any)
      .select("name").eq("id", u.id).single();
    callback({
      id: u.id, email: u.email!,
      name: (profile as any)?.name ?? null,
      isAdmin: getAdminEmails().includes(u.email ?? ""),
    });
  });
}

// ── Password Reset ────────────────────────────────────────────────────────────
export async function sendPasswordReset(email: string): Promise<{ error: string | null }> {
  const { error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: `${typeof window !== "undefined" ? window.location.origin : ""}/auth/reset`,
  });
  return { error: error?.message ?? null };
}

// ── Update Profile ────────────────────────────────────────────────────────────
export async function updateProfile(
  userId: string,
  data: { name?: string; exam_date?: string | null; level?: string; native_language?: string }
): Promise<{ error: string | null }> {
  const { error } = await (supabase.from("users_profile") as any)
    .update(data).eq("id", userId);
  return { error: error?.message ?? null };
}
