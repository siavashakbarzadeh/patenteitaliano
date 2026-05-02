import { createClient } from "@supabase/supabase-js";
import type { Database } from "./database.types";

// ─── Supabase Client (Browser-side) ──────────────────────────────────────────
// Reads env vars set by Vercel / .env.local

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

if (!supabaseUrl || !supabaseAnonKey) {
  // Only warn in dev; in production Vercel provides these automatically
  if (process.env.NODE_ENV === "development") {
    console.warn(
      "⚠️  Supabase env vars missing!\n" +
      "Add NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY to .env.local"
    );
  }
}

// Singleton client — safe to call in Client Components
export const supabase = createClient<Database>(
  supabaseUrl ?? "https://placeholder.supabase.co",
  supabaseAnonKey ?? "placeholder"
);

// Convenience re-export
export type { Database };
