import { createClient } from "@supabase/supabase-js";

// ── Environment Variables ─────────────────────────────────────────────────────
// Set these in Vercel Dashboard → Settings → Environment Variables:
//   NEXT_PUBLIC_SUPABASE_URL     → your Supabase project URL
//   NEXT_PUBLIC_SUPABASE_ANON_KEY → your Supabase anon/public key
//   SUPABASE_SERVICE_ROLE_KEY    → your Supabase service role key (server-side only)

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

// ── Public client (for client-side, respects RLS) ─────────────────────────────
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// ── Admin client (for API routes, bypasses RLS) ───────────────────────────────
export const supabaseAdmin = createClient(
  supabaseUrl,
  supabaseServiceKey || supabaseAnonKey,
  { auth: { autoRefreshToken: false, persistSession: false } }
);
