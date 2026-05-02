// ─── Supabase Database Types ──────────────────────────────────────────────────
// Auto-generated shape — update with `npx supabase gen types typescript`
// For now these are hand-written to match our SQL schema

export type Json =
  | string | number | boolean | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  public: {
    Tables: {
      // ── users_profile ──────────────────────────────────────────────────────
      users_profile: {
        Row: {
          id: string;                   // uuid — matches auth.users.id
          name: string | null;
          level: "beginner" | "intermediate" | "advanced" | null;
          exam_date: string | null;     // ISO date
          native_language: string | null;
          tos_accepted: boolean;
          created_at: string;
          updated_at: string;
        };
        Insert: Omit<Database["public"]["Tables"]["users_profile"]["Row"], "created_at" | "updated_at">;
        Update: Partial<Database["public"]["Tables"]["users_profile"]["Insert"]>;
      };

      // ── user_progress ──────────────────────────────────────────────────────
      user_progress: {
        Row: {
          id: string;
          user_id: string;
          total_answered: number;
          total_correct: number;
          completed_quizzes: number;
          streak: number;
          last_quiz_date: string | null;
          chapter_stats: Json;          // Record<string, ChapterStat>
          wrong_answers: Json;          // Record<string, number>
          flagged_questions: Json;      // Record<string, boolean>
          total_time_spent: number;
          updated_at: string;
        };
        Insert: Omit<Database["public"]["Tables"]["user_progress"]["Row"], "id" | "updated_at">;
        Update: Partial<Database["public"]["Tables"]["user_progress"]["Insert"]>;
      };

      // ── gamification ──────────────────────────────────────────────────────
      gamification: {
        Row: {
          id: string;
          user_id: string;
          total_xp: number;
          level: number;
          login_xp: number;
          quiz_xp: number;
          time_xp: number;
          consecutive_days: number;
          last_login_date: string | null;
          referral_count: number;
          updated_at: string;
        };
        Insert: Omit<Database["public"]["Tables"]["gamification"]["Row"], "id" | "updated_at">;
        Update: Partial<Database["public"]["Tables"]["gamification"]["Insert"]>;
      };

      // ── feedback ──────────────────────────────────────────────────────────
      feedback: {
        Row: {
          id: string;
          user_id: string | null;
          type: string;
          rating: number;
          comment: string | null;
          chapter_num: number | null;
          submitted_at: string;
        };
        Insert: Omit<Database["public"]["Tables"]["feedback"]["Row"], "id" | "submitted_at">;
        Update: Partial<Database["public"]["Tables"]["feedback"]["Insert"]>;
      };

      // ── support_requests ──────────────────────────────────────────────────
      support_requests: {
        Row: {
          id: string;
          user_id: string | null;
          type: string;
          name: string | null;
          phone: string | null;
          email: string | null;
          message: string | null;
          resolved: boolean;
          submitted_at: string;
        };
        Insert: Omit<Database["public"]["Tables"]["support_requests"]["Row"], "id" | "submitted_at">;
        Update: Partial<Database["public"]["Tables"]["support_requests"]["Insert"]>;
      };

      // ── discount_codes ────────────────────────────────────────────────────
      discount_codes: {
        Row: {
          id: string;
          code: string;
          discount_percent: number;
          description: string | null;
          expires_at: string | null;
          max_uses: number | null;
          used_count: number;
          type: string;
          active: boolean;
          created_at: string;
        };
        Insert: Omit<Database["public"]["Tables"]["discount_codes"]["Row"], "id" | "created_at" | "used_count">;
        Update: Partial<Database["public"]["Tables"]["discount_codes"]["Insert"]>;
      };

      // ── exam_followup ────────────────────────────────────────────────────
      exam_followup: {
        Row: {
          id: string;
          user_id: string;
          passed: boolean | null;
          score: number | null;
          attempts: number;
          exam_date: string | null;
          notes: string | null;
          submitted_at: string;
        };
        Insert: Omit<Database["public"]["Tables"]["exam_followup"]["Row"], "id" | "submitted_at">;
        Update: Partial<Database["public"]["Tables"]["exam_followup"]["Insert"]>;
      };
    };
    Views: {};
    Functions: {};
    Enums: {};
  };
}
