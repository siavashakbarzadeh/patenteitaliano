-- ═══════════════════════════════════════════════════════════════════════════════
--  Patente Italiana LMS — Supabase Database Schema
--  Run this in Supabase SQL Editor to create all tables
-- ═══════════════════════════════════════════════════════════════════════════════

-- ── Users ─────────────────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  username TEXT UNIQUE NOT NULL,
  password_hash TEXT NOT NULL,
  display_name TEXT NOT NULL,
  role TEXT NOT NULL DEFAULT 'student' CHECK (role IN ('admin', 'student')),
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

CREATE INDEX idx_users_username ON users(username);

-- ── Section Access (which sections each user can see) ─────────────────────────
CREATE TABLE IF NOT EXISTS section_access (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  section_id TEXT NOT NULL, -- 'patente', 'italiano', 'espresso1'...'espresso6'
  UNIQUE(user_id, section_id)
);

CREATE INDEX idx_section_access_user ON section_access(user_id);

-- ── Activity Log ──────────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS activity_log (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  username TEXT NOT NULL,
  action TEXT NOT NULL, -- 'login', 'logout', 'quiz_complete', etc.
  metadata JSONB DEFAULT '{}',
  created_at TIMESTAMPTZ DEFAULT now()
);

CREATE INDEX idx_activity_log_user ON activity_log(user_id);
CREATE INDEX idx_activity_log_created ON activity_log(created_at DESC);

-- ── User Progress ─────────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS user_progress (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE UNIQUE,
  total_answered INT DEFAULT 0,
  total_correct INT DEFAULT 0,
  completed_quizzes INT DEFAULT 0,
  streak INT DEFAULT 0,
  last_quiz_date TEXT,
  total_time_spent INT DEFAULT 0,
  chapter_stats JSONB DEFAULT '{}',
  wrong_answers JSONB DEFAULT '{}',
  flagged_questions JSONB DEFAULT '{}',
  updated_at TIMESTAMPTZ DEFAULT now()
);

CREATE INDEX idx_progress_user ON user_progress(user_id);

-- ── Announcements ─────────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS announcements (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  body TEXT DEFAULT '',
  priority TEXT DEFAULT 'normal' CHECK (priority IN ('normal', 'important', 'urgent')),
  target_users TEXT DEFAULT 'all', -- 'all' or JSON array of usernames
  pinned BOOLEAN DEFAULT false,
  expires_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT now()
);

CREATE INDEX idx_announcements_created ON announcements(created_at DESC);

-- ── Certificates ──────────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS certificates (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  username TEXT NOT NULL,
  course_name TEXT NOT NULL,
  course_level TEXT NOT NULL,
  grade TEXT DEFAULT '',
  note TEXT DEFAULT '',
  issued_at TIMESTAMPTZ DEFAULT now()
);

CREATE INDEX idx_certificates_user ON certificates(user_id);

-- ── Messages ──────────────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS messages (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  from_user TEXT NOT NULL,
  to_user TEXT NOT NULL,
  subject TEXT NOT NULL,
  body TEXT DEFAULT '',
  is_read BOOLEAN DEFAULT false,
  sent_at TIMESTAMPTZ DEFAULT now()
);

CREATE INDEX idx_messages_to ON messages(to_user);
CREATE INDEX idx_messages_from ON messages(from_user);

-- ── Schedule Events ───────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS schedule_events (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  description TEXT DEFAULT '',
  event_date DATE NOT NULL,
  event_time TIME,
  event_type TEXT DEFAULT 'class' CHECK (event_type IN ('class', 'exam', 'event', 'deadline')),
  target_users TEXT DEFAULT 'all',
  created_at TIMESTAMPTZ DEFAULT now()
);

CREATE INDEX idx_schedule_date ON schedule_events(event_date);

-- ── Hard Questions ────────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS hard_questions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  question_id INT UNIQUE NOT NULL,
  marked_at TIMESTAMPTZ DEFAULT now()
);

-- ── Tag Configs ───────────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS tag_configs (
  id SERIAL PRIMARY KEY,
  tag_index INT NOT NULL UNIQUE, -- 0, 1, 2
  label TEXT NOT NULL,
  color TEXT NOT NULL
);

-- ── Feedback History ──────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS feedback (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  rating INT NOT NULL CHECK (rating BETWEEN 1 AND 5),
  comment TEXT DEFAULT '',
  feedback_type TEXT DEFAULT 'general',
  chapter_num INT,
  submitted_at TIMESTAMPTZ DEFAULT now()
);

-- ── Support Requests ──────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS support_requests (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT,
  email TEXT,
  phone TEXT,
  message TEXT,
  request_type TEXT DEFAULT 'contact',
  resolved BOOLEAN DEFAULT false,
  submitted_at TIMESTAMPTZ DEFAULT now()
);

-- ── Raised Hands (question doubts) ───────────────────────────────────────────
CREATE TABLE IF NOT EXISTS raised_hands (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  question_id INT NOT NULL,
  chapter INT,
  question_text TEXT,
  resolved BOOLEAN DEFAULT false,
  sent_at TIMESTAMPTZ DEFAULT now()
);

-- ── Videos ────────────────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS videos (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  chapter_num INT NOT NULL,
  title_fa TEXT NOT NULL,
  title_it TEXT DEFAULT '',
  url TEXT NOT NULL,
  download_url TEXT DEFAULT '',
  is_premium BOOLEAN DEFAULT false,
  duration TEXT DEFAULT '',
  description TEXT DEFAULT '',
  created_at TIMESTAMPTZ DEFAULT now()
);

-- ── Subscriptions ─────────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS subscriptions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE UNIQUE,
  plan TEXT DEFAULT 'free' CHECK (plan IN ('free', 'premium')),
  expires_at TIMESTAMPTZ,
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- ── Discount Codes ────────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS discount_codes (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  code TEXT UNIQUE NOT NULL,
  discount_percent INT NOT NULL,
  description TEXT DEFAULT '',
  code_type TEXT DEFAULT 'admin',
  max_uses INT,
  used_count INT DEFAULT 0,
  active BOOLEAN DEFAULT true,
  expires_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- ── Gamification ──────────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS gamification (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE UNIQUE,
  total_xp INT DEFAULT 0,
  level INT DEFAULT 1,
  login_xp INT DEFAULT 0,
  quiz_xp INT DEFAULT 0,
  time_xp INT DEFAULT 0,
  consecutive_days INT DEFAULT 0,
  referral_count INT DEFAULT 0,
  last_login_date TEXT,
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- ── Student Notes (admin notes about students) ───────────────────────────────
CREATE TABLE IF NOT EXISTS student_notes (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  username TEXT NOT NULL,
  note TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- ── Lesson Configs (course content management) ───────────────────────────────
CREATE TABLE IF NOT EXISTS lesson_configs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  course_id TEXT NOT NULL,
  lesson_num INT NOT NULL,
  ready BOOLEAN DEFAULT false,
  description TEXT DEFAULT '',
  updated_at TIMESTAMPTZ DEFAULT now(),
  UNIQUE(course_id, lesson_num)
);

-- ═══════════════════════════════════════════════════════════════════════════════
--  Row Level Security (RLS)
-- ═══════════════════════════════════════════════════════════════════════════════

-- Enable RLS on all tables
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE section_access ENABLE ROW LEVEL SECURITY;
ALTER TABLE activity_log ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_progress ENABLE ROW LEVEL SECURITY;
ALTER TABLE announcements ENABLE ROW LEVEL SECURITY;
ALTER TABLE certificates ENABLE ROW LEVEL SECURITY;
ALTER TABLE messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE schedule_events ENABLE ROW LEVEL SECURITY;

-- Public read for announcements & schedule
CREATE POLICY "Anyone can read announcements" ON announcements FOR SELECT USING (true);
CREATE POLICY "Anyone can read schedule" ON schedule_events FOR SELECT USING (true);

-- Service role can do everything (API routes use service key)
-- These policies allow the API to manage all data
CREATE POLICY "Service can manage users" ON users FOR ALL USING (true);
CREATE POLICY "Service can manage access" ON section_access FOR ALL USING (true);
CREATE POLICY "Service can manage log" ON activity_log FOR ALL USING (true);
CREATE POLICY "Service can manage progress" ON user_progress FOR ALL USING (true);
CREATE POLICY "Service can manage announcements" ON announcements FOR ALL USING (true);
CREATE POLICY "Service can manage certificates" ON certificates FOR ALL USING (true);
CREATE POLICY "Service can manage messages" ON messages FOR ALL USING (true);
CREATE POLICY "Service can manage schedule" ON schedule_events FOR ALL USING (true);
