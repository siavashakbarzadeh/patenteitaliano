// ─── Supabase Admin API Service ───────────────────────────────────────────────
// Generic CRUD operations for all admin tables via Supabase client
// Falls back to localStorage if Supabase is unavailable

/* eslint-disable @typescript-eslint/no-explicit-any */
import { supabase } from "./supabase";

// Map frontend module names to Supabase table names
const TABLE_MAP: Record<string, string> = {
  roles: "roles",
  categories: "categories",
  webinars: "webinars",
  quizzes: "lms_quizzes",
  orders: "orders",
  sales: "sales",
  meetings: "meetings",
  blogs: "blog_posts",
  forums: "forum_topics",
  products: "products",
  bundles: "bundles",
  forms: "forms",
  installments: "installment_plans",
  rewards: "rewards",
  newsletters: "newsletters",
  pages: "pages",
  contacts: "contacts",
  gifts: "gifts",
  currencies: "currencies",
  upcoming: "upcoming_courses",
  instructorReqs: "instructor_requests",
  promotions: "promotions",
  payChannels: "payment_channels",
  cashback: "cashback_rules",
  aiTemplates: "ai_templates",
  regions: "regions",
  floatingBars: "floating_bars",
  comments: "comments",
  reviews: "reviews",
  documents: "document_verifications",
  deleteReqs: "delete_account_requests",
  notifTemplates: "notification_templates",
};

// Snake_case converter
function toSnake(str: string): string {
  return str.replace(/([A-Z])/g, "_$1").toLowerCase().replace(/^_/, "");
}
function toCamel(str: string): string {
  return str.replace(/_([a-z])/g, (_, c) => c.toUpperCase());
}
function keysToSnake(obj: Record<string, any>): Record<string, any> {
  const result: Record<string, any> = {};
  for (const [k, v] of Object.entries(obj)) {
    if (k === "id" || k === "createdAt") continue; // skip client-generated fields
    result[toSnake(k)] = v;
  }
  return result;
}
function keysToCamel(obj: Record<string, any>): Record<string, any> {
  const result: Record<string, any> = {};
  for (const [k, v] of Object.entries(obj)) {
    result[toCamel(k)] = v;
  }
  return result;
}

// Check if Supabase is available
let _supabaseAvailable: boolean | null = null;
async function isSupabaseAvailable(): Promise<boolean> {
  if (_supabaseAvailable !== null) return _supabaseAvailable;
  try {
    const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
    if (!url || url === "https://placeholder.supabase.co") {
      _supabaseAvailable = false;
      return false;
    }
    // Quick health check
    const { error } = await (supabase.from("system_settings") as any).select("key").limit(1);
    _supabaseAvailable = !error;
    return _supabaseAvailable;
  } catch {
    _supabaseAvailable = false;
    return false;
  }
}

// ─── localStorage Fallback ────────────────────────────────────────────────────
function lsKey(mod: string) { return `lmsadmin_${mod}`; }
function lsLoad(mod: string): any[] {
  try { return JSON.parse(localStorage.getItem(lsKey(mod)) || "null") ?? []; }
  catch { return []; }
}
function lsSave(mod: string, data: any[]) {
  localStorage.setItem(lsKey(mod), JSON.stringify(data));
}

// ─── Generic CRUD ─────────────────────────────────────────────────────────────

export async function adminList(module: string): Promise<any[]> {
  if (await isSupabaseAvailable()) {
    const table = TABLE_MAP[module];
    if (!table) return [];
    const { data, error } = await (supabase.from(table) as any)
      .select("*").order("created_at", { ascending: false });
    if (error) { console.error(`adminList(${module}):`, error); return lsLoad(module); }
    return (data || []).map(keysToCamel);
  }
  return lsLoad(module);
}

export async function adminCreate(module: string, item: Record<string, any>): Promise<any> {
  if (await isSupabaseAvailable()) {
    const table = TABLE_MAP[module];
    if (!table) return null;
    const row = keysToSnake(item);
    const { data, error } = await (supabase.from(table) as any)
      .insert(row).select().single();
    if (error) { console.error(`adminCreate(${module}):`, error); return null; }
    return keysToCamel(data);
  }
  // localStorage fallback
  const list = lsLoad(module);
  const newItem = { ...item, id: Date.now().toString(), createdAt: new Date().toISOString() };
  list.unshift(newItem);
  lsSave(module, list);
  return newItem;
}

export async function adminUpdate(module: string, id: string, updates: Record<string, any>): Promise<any> {
  if (await isSupabaseAvailable()) {
    const table = TABLE_MAP[module];
    if (!table) return null;
    const row = keysToSnake(updates);
    const { data, error } = await (supabase.from(table) as any)
      .update(row).eq("id", id).select().single();
    if (error) { console.error(`adminUpdate(${module}):`, error); return null; }
    return keysToCamel(data);
  }
  const list = lsLoad(module);
  const idx = list.findIndex((r: any) => r.id === id);
  if (idx >= 0) { list[idx] = { ...list[idx], ...updates }; lsSave(module, list); return list[idx]; }
  return null;
}

export async function adminDelete(module: string, id: string): Promise<boolean> {
  if (await isSupabaseAvailable()) {
    const table = TABLE_MAP[module];
    if (!table) return false;
    const { error } = await (supabase.from(table) as any).delete().eq("id", id);
    if (error) { console.error(`adminDelete(${module}):`, error); return false; }
    return true;
  }
  const list = lsLoad(module);
  lsSave(module, list.filter((r: any) => r.id !== id));
  return true;
}

// ─── System Settings (special key-value) ──────────────────────────────────────

export async function getSettings(): Promise<Record<string, any>> {
  if (await isSupabaseAvailable()) {
    const { data, error } = await (supabase.from("system_settings") as any).select("*");
    if (error) { console.error("getSettings:", error); return {}; }
    const result: Record<string, any> = {};
    for (const row of (data || [])) {
      Object.assign(result, typeof row.value === "string" ? JSON.parse(row.value) : row.value);
    }
    return result;
  }
  // localStorage fallback
  try { return JSON.parse(localStorage.getItem("lmsadmin_systemSettings") || "{}"); }
  catch { return {}; }
}

export async function saveSettings(settings: Record<string, any>): Promise<boolean> {
  if (await isSupabaseAvailable()) {
    const groups: Record<string, Record<string, any>> = {
      general: {},
      seo: {},
      social: {},
      smtp: {},
      custom_code: {},
    };
    for (const [k, v] of Object.entries(settings)) {
      if (["siteName","siteUrl","timezone","language","currency","registrationEnabled","emailVerification","maintenanceMode","maxLoginAttempts"].includes(k)) groups.general[k] = v;
      else if (["seoTitle","seoDescription","seoKeywords","googleAnalytics"].includes(k)) groups.seo[k] = v;
      else if (["facebook","twitter","instagram","telegram","linkedin"].includes(k)) groups.social[k] = v;
      else if (k === "socialLinks") groups.social = v;
      else if (["smtpHost","smtpPort","smtpUser"].includes(k)) groups.smtp[k] = v;
      else if (["customHeaderCode","customFooterCode"].includes(k)) groups.custom_code[k] = v;
    }
    for (const [key, value] of Object.entries(groups)) {
      if (Object.keys(value).length > 0) {
        await (supabase.from("system_settings") as any)
          .upsert({ key, value, updated_at: new Date().toISOString() });
      }
    }
    return true;
  }
  localStorage.setItem("lmsadmin_systemSettings", JSON.stringify(settings));
  return true;
}
