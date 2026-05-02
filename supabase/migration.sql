-- ═══════════════════════════════════════════════════════════════════════════
-- Patente Italiana — Supabase SQL Migration
-- Run this in: Supabase Dashboard → SQL Editor → New Query → Run
-- ═══════════════════════════════════════════════════════════════════════════

-- ── 1. Enable UUID extension ────────────────────────────────────────────────
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ── 2. Users Profile ────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS public.users_profile (
  id             UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  name           TEXT,
  level          TEXT CHECK (level IN ('beginner','intermediate','advanced')),
  exam_date      DATE,
  native_language TEXT DEFAULT 'فارسی',
  tos_accepted   BOOLEAN NOT NULL DEFAULT FALSE,
  created_at     TIMESTAMPTZ DEFAULT NOW(),
  updated_at     TIMESTAMPTZ DEFAULT NOW()
);

-- ── 3. User Progress ────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS public.user_progress (
  id               UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id          UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  total_answered   INTEGER NOT NULL DEFAULT 0,
  total_correct    INTEGER NOT NULL DEFAULT 0,
  completed_quizzes INTEGER NOT NULL DEFAULT 0,
  streak           INTEGER NOT NULL DEFAULT 0,
  last_quiz_date   TEXT,
  chapter_stats    JSONB NOT NULL DEFAULT '{}',
  wrong_answers    JSONB NOT NULL DEFAULT '{}',
  flagged_questions JSONB NOT NULL DEFAULT '{}',
  total_time_spent INTEGER NOT NULL DEFAULT 0,
  updated_at       TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE (user_id)
);

-- ── 4. Gamification ─────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS public.gamification (
  id               UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id          UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  total_xp         INTEGER NOT NULL DEFAULT 0,
  level            INTEGER NOT NULL DEFAULT 1,
  login_xp         INTEGER NOT NULL DEFAULT 0,
  quiz_xp          INTEGER NOT NULL DEFAULT 0,
  time_xp          INTEGER NOT NULL DEFAULT 0,
  consecutive_days INTEGER NOT NULL DEFAULT 0,
  last_login_date  TEXT,
  referral_count   INTEGER NOT NULL DEFAULT 0,
  updated_at       TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE (user_id)
);

-- ── 5. Feedback / Ratings ───────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS public.feedback (
  id           UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id      UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  type         TEXT NOT NULL,
  rating       INTEGER NOT NULL CHECK (rating BETWEEN 1 AND 5),
  comment      TEXT,
  chapter_num  INTEGER,
  submitted_at TIMESTAMPTZ DEFAULT NOW()
);

-- ── 6. Support Requests ─────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS public.support_requests (
  id           UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id      UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  type         TEXT NOT NULL,
  name         TEXT,
  phone        TEXT,
  email        TEXT,
  message      TEXT,
  resolved     BOOLEAN NOT NULL DEFAULT FALSE,
  submitted_at TIMESTAMPTZ DEFAULT NOW()
);

-- ── 7. Discount Codes ───────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS public.discount_codes (
  id               UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  code             TEXT NOT NULL UNIQUE,
  discount_percent INTEGER NOT NULL CHECK (discount_percent BETWEEN 1 AND 100),
  description      TEXT,
  expires_at       TIMESTAMPTZ,
  max_uses         INTEGER,
  used_count       INTEGER NOT NULL DEFAULT 0,
  type             TEXT NOT NULL DEFAULT 'admin',
  active           BOOLEAN NOT NULL DEFAULT TRUE,
  created_at       TIMESTAMPTZ DEFAULT NOW()
);

-- ── 8. Exam Follow-up ───────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS public.exam_followup (
  id           UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id      UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  passed       BOOLEAN,
  score        INTEGER CHECK (score BETWEEN 0 AND 30),
  attempts     INTEGER NOT NULL DEFAULT 1,
  exam_date    DATE,
  notes        TEXT,
  submitted_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE (user_id)
);

-- ── 9. Insert Default Welcome Code ──────────────────────────────────────────
INSERT INTO public.discount_codes (code, discount_percent, description, type)
VALUES ('BENVENUTO25', 25, 'کد خوش‌آمدگویی کاربران جدید', 'welcome')
ON CONFLICT (code) DO NOTHING;

-- ── 10. Insert Default Admin User (Aida) ────────────────────────────────────
-- NOTE: Create the user in Auth first (Auth → Users → Invite / Add User)
-- Then run this after getting the user UUID:
-- INSERT INTO public.users_profile (id, name, tos_accepted)
-- VALUES ('<aida-uuid-here>', 'Aida', TRUE);

-- ── 11. Row Level Security (RLS) ────────────────────────────────────────────
ALTER TABLE public.users_profile     ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_progress     ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.gamification      ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.feedback          ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.support_requests  ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.exam_followup     ENABLE ROW LEVEL SECURITY;
-- discount_codes is public read, admin write
ALTER TABLE public.discount_codes    ENABLE ROW LEVEL SECURITY;

-- Users can only read/write their own data
CREATE POLICY "Users own their profile"
  ON public.users_profile FOR ALL USING (auth.uid() = id);

CREATE POLICY "Users own their progress"
  ON public.user_progress FOR ALL USING (auth.uid() = user_id);

CREATE POLICY "Users own their gamification"
  ON public.gamification FOR ALL USING (auth.uid() = user_id);

CREATE POLICY "Users insert feedback"
  ON public.feedback FOR INSERT WITH CHECK (auth.uid() = user_id OR user_id IS NULL);

CREATE POLICY "Users read own feedback"
  ON public.feedback FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users submit support requests"
  ON public.support_requests FOR INSERT WITH CHECK (TRUE);

CREATE POLICY "Users own exam followup"
  ON public.exam_followup FOR ALL USING (auth.uid() = user_id);

-- Discount codes: anyone can read active codes, only service role writes
CREATE POLICY "Public read active discount codes"
  ON public.discount_codes FOR SELECT USING (active = TRUE);

-- ── 12. Auto-update updated_at ───────────────────────────────────────────────
CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN NEW.updated_at = NOW(); RETURN NEW; END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER set_users_profile_updated_at
  BEFORE UPDATE ON public.users_profile
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();

CREATE TRIGGER set_user_progress_updated_at
  BEFORE UPDATE ON public.user_progress
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();

CREATE TRIGGER set_gamification_updated_at
  BEFORE UPDATE ON public.gamification
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();
