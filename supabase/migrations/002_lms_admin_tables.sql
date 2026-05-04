-- ═══════════════════════════════════════════════════════════════════════════════
-- LMS Admin Tables Migration
-- All 32 new modules for admin panel backend
-- ═══════════════════════════════════════════════════════════════════════════════

-- 1. Roles & Permissions
CREATE TABLE IF NOT EXISTS roles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  permissions TEXT[] DEFAULT '{}',
  description TEXT DEFAULT '',
  created_at TIMESTAMPTZ DEFAULT now()
);

-- 2. Categories
CREATE TABLE IF NOT EXISTS categories (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  icon TEXT DEFAULT '',
  slug TEXT UNIQUE,
  parent_id UUID REFERENCES categories(id) ON DELETE SET NULL,
  sort_order INT DEFAULT 0,
  status TEXT DEFAULT 'active' CHECK (status IN ('active','inactive')),
  description TEXT DEFAULT '',
  created_at TIMESTAMPTZ DEFAULT now()
);

-- 3. Webinars / Courses (LMS)
CREATE TABLE IF NOT EXISTS webinars (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  slug TEXT UNIQUE,
  type TEXT DEFAULT 'course' CHECK (type IN ('course','webinar','text_lesson')),
  price NUMERIC(10,2) DEFAULT 0,
  status TEXT DEFAULT 'active' CHECK (status IN ('active','pending','draft','inactive')),
  teacher TEXT DEFAULT '',
  category_id UUID REFERENCES categories(id) ON DELETE SET NULL,
  description TEXT DEFAULT '',
  color TEXT DEFAULT '#9333ea',
  chapters_count INT DEFAULT 0,
  students_count INT DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- 4. LMS Quizzes
CREATE TABLE IF NOT EXISTS lms_quizzes (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  webinar_id UUID REFERENCES webinars(id) ON DELETE CASCADE,
  chapter_id TEXT DEFAULT '',
  total_mark INT DEFAULT 100,
  pass_mark INT DEFAULT 60,
  time_limit INT DEFAULT 30,
  attempts INT DEFAULT 3,
  status TEXT DEFAULT 'active' CHECK (status IN ('active','inactive')),
  questions_count INT DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- 5. Orders
CREATE TABLE IF NOT EXISTS orders (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  username TEXT DEFAULT '',
  amount NUMERIC(10,2) DEFAULT 0,
  status TEXT DEFAULT 'pending' CHECK (status IN ('paid','pending','refunded','failed')),
  items JSONB DEFAULT '[]',
  payment_method TEXT DEFAULT '',
  created_at TIMESTAMPTZ DEFAULT now()
);

-- 6. Sales
CREATE TABLE IF NOT EXISTS sales (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  webinar_id UUID REFERENCES webinars(id) ON DELETE SET NULL,
  webinar_title TEXT DEFAULT '',
  username TEXT DEFAULT '',
  amount NUMERIC(10,2) DEFAULT 0,
  commission NUMERIC(10,2) DEFAULT 0,
  status TEXT DEFAULT 'completed' CHECK (status IN ('completed','refunded','pending')),
  created_at TIMESTAMPTZ DEFAULT now()
);

-- 7. Meetings
CREATE TABLE IF NOT EXISTS meetings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  instructor TEXT DEFAULT '',
  date DATE,
  time TIME,
  duration INT DEFAULT 60,
  type TEXT DEFAULT 'zoom' CHECK (type IN ('zoom','bbb','agora','in_person')),
  capacity INT DEFAULT 30,
  price NUMERIC(10,2) DEFAULT 0,
  status TEXT DEFAULT 'scheduled' CHECK (status IN ('scheduled','completed','cancelled')),
  link TEXT DEFAULT '',
  description TEXT DEFAULT '',
  created_at TIMESTAMPTZ DEFAULT now()
);

-- 8. Blog Posts
CREATE TABLE IF NOT EXISTS blog_posts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  slug TEXT UNIQUE,
  author TEXT DEFAULT '',
  category TEXT DEFAULT '',
  content TEXT DEFAULT '',
  status TEXT DEFAULT 'draft' CHECK (status IN ('published','draft','pending')),
  image TEXT DEFAULT '',
  tags TEXT[] DEFAULT '{}',
  created_at TIMESTAMPTZ DEFAULT now()
);

-- 9. Forum Topics
CREATE TABLE IF NOT EXISTS forum_topics (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  category TEXT DEFAULT '',
  author TEXT DEFAULT '',
  posts_count INT DEFAULT 0,
  status TEXT DEFAULT 'open' CHECK (status IN ('open','closed','pinned','solved')),
  created_at TIMESTAMPTZ DEFAULT now()
);

-- 10. Products
CREATE TABLE IF NOT EXISTS products (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  type TEXT DEFAULT 'digital' CHECK (type IN ('digital','physical')),
  price NUMERIC(10,2) DEFAULT 0,
  inventory INT DEFAULT 100,
  status TEXT DEFAULT 'active' CHECK (status IN ('active','inactive')),
  category TEXT DEFAULT '',
  description TEXT DEFAULT '',
  downloads INT DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- 11. Bundles
CREATE TABLE IF NOT EXISTS bundles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  courses TEXT[] DEFAULT '{}',
  price NUMERIC(10,2) DEFAULT 0,
  original_price NUMERIC(10,2) DEFAULT 0,
  status TEXT DEFAULT 'active' CHECK (status IN ('active','inactive')),
  description TEXT DEFAULT '',
  created_at TIMESTAMPTZ DEFAULT now()
);

-- 12. Forms
CREATE TABLE IF NOT EXISTS forms (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  fields_count INT DEFAULT 0,
  submissions_count INT DEFAULT 0,
  status TEXT DEFAULT 'active' CHECK (status IN ('active','inactive')),
  created_at TIMESTAMPTZ DEFAULT now()
);

-- 13. Installment Plans
CREATE TABLE IF NOT EXISTS installment_plans (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  steps INT DEFAULT 3,
  upfront INT DEFAULT 30,
  target_items TEXT[] DEFAULT '{}',
  status TEXT DEFAULT 'active' CHECK (status IN ('active','inactive')),
  created_at TIMESTAMPTZ DEFAULT now()
);

-- 14. Rewards
CREATE TABLE IF NOT EXISTS rewards (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  type TEXT DEFAULT 'score' CHECK (type IN ('score','badge','certificate')),
  condition TEXT DEFAULT '',
  score INT DEFAULT 10,
  status TEXT DEFAULT 'active' CHECK (status IN ('active','inactive'))
);

-- 15. Newsletters
CREATE TABLE IF NOT EXISTS newsletters (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT NOT NULL,
  status TEXT DEFAULT 'active' CHECK (status IN ('active','unsubscribed')),
  subscribed_at TIMESTAMPTZ DEFAULT now()
);

-- 16. CMS Pages
CREATE TABLE IF NOT EXISTS pages (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  slug TEXT UNIQUE,
  content TEXT DEFAULT '',
  status TEXT DEFAULT 'draft' CHECK (status IN ('published','draft')),
  seo_title TEXT DEFAULT '',
  seo_description TEXT DEFAULT '',
  created_at TIMESTAMPTZ DEFAULT now()
);

-- 17. Contacts
CREATE TABLE IF NOT EXISTS contacts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT DEFAULT '',
  phone TEXT DEFAULT '',
  subject TEXT DEFAULT '',
  message TEXT DEFAULT '',
  status TEXT DEFAULT 'new' CHECK (status IN ('new','replied','closed')),
  reply TEXT DEFAULT '',
  created_at TIMESTAMPTZ DEFAULT now()
);

-- 18. Gifts
CREATE TABLE IF NOT EXISTS gifts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  sender TEXT NOT NULL,
  recipient TEXT NOT NULL,
  recipient_email TEXT DEFAULT '',
  item_title TEXT DEFAULT '',
  item_type TEXT DEFAULT 'course' CHECK (item_type IN ('course','bundle','product')),
  message TEXT DEFAULT '',
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending','delivered','claimed')),
  created_at TIMESTAMPTZ DEFAULT now()
);

-- 19. Currencies
CREATE TABLE IF NOT EXISTS currencies (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  code TEXT NOT NULL UNIQUE,
  name TEXT NOT NULL,
  symbol TEXT DEFAULT '',
  exchange_rate NUMERIC(12,4) DEFAULT 1,
  status TEXT DEFAULT 'active' CHECK (status IN ('active','inactive'))
);

-- 20. Upcoming Courses
CREATE TABLE IF NOT EXISTS upcoming_courses (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  category TEXT DEFAULT '',
  instructor TEXT DEFAULT '',
  release_date DATE,
  followers INT DEFAULT 0,
  status TEXT DEFAULT 'upcoming' CHECK (status IN ('upcoming','released')),
  description TEXT DEFAULT '',
  created_at TIMESTAMPTZ DEFAULT now()
);

-- 21. Instructor Requests
CREATE TABLE IF NOT EXISTS instructor_requests (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  username TEXT NOT NULL,
  display_name TEXT DEFAULT '',
  specialty TEXT DEFAULT '',
  experience TEXT DEFAULT '',
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending','approved','rejected')),
  created_at TIMESTAMPTZ DEFAULT now()
);

-- 22. Promotions
CREATE TABLE IF NOT EXISTS promotions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  type TEXT DEFAULT 'banner' CHECK (type IN ('banner','popup','special_offer')),
  target_url TEXT DEFAULT '',
  position TEXT DEFAULT '',
  start_date DATE,
  end_date DATE,
  status TEXT DEFAULT 'active' CHECK (status IN ('active','inactive')),
  impressions INT DEFAULT 0,
  clicks INT DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- 23. Payment Channels
CREATE TABLE IF NOT EXISTS payment_channels (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  type TEXT DEFAULT 'stripe' CHECK (type IN ('stripe','paypal','bank','crypto','manual')),
  status TEXT DEFAULT 'active' CHECK (status IN ('active','inactive')),
  is_default BOOLEAN DEFAULT false,
  credentials TEXT DEFAULT '',
  created_at TIMESTAMPTZ DEFAULT now()
);

-- 24. Cashback Rules
CREATE TABLE IF NOT EXISTS cashback_rules (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  percent NUMERIC(5,2) DEFAULT 5,
  min_purchase NUMERIC(10,2) DEFAULT 0,
  max_cashback NUMERIC(10,2) DEFAULT 50,
  target_type TEXT DEFAULT 'all' CHECK (target_type IN ('all','course','bundle','product')),
  status TEXT DEFAULT 'active' CHECK (status IN ('active','inactive')),
  start_date DATE,
  end_date DATE,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- 25. AI Content Templates
CREATE TABLE IF NOT EXISTS ai_templates (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  prompt TEXT DEFAULT '',
  category TEXT DEFAULT '',
  usage_count INT DEFAULT 0,
  status TEXT DEFAULT 'active' CHECK (status IN ('active','inactive')),
  created_at TIMESTAMPTZ DEFAULT now()
);

-- 26. Regions
CREATE TABLE IF NOT EXISTS regions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  type TEXT DEFAULT 'country' CHECK (type IN ('country','province','city')),
  parent_id UUID REFERENCES regions(id) ON DELETE SET NULL,
  code TEXT DEFAULT '',
  status TEXT DEFAULT 'active' CHECK (status IN ('active','inactive'))
);

-- 27. Floating Bars
CREATE TABLE IF NOT EXISTS floating_bars (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  content TEXT DEFAULT '',
  position TEXT DEFAULT 'top' CHECK (position IN ('top','bottom')),
  btn_text TEXT DEFAULT '',
  btn_url TEXT DEFAULT '',
  bg_color TEXT DEFAULT '#9333ea',
  text_color TEXT DEFAULT '#ffffff',
  status TEXT DEFAULT 'active' CHECK (status IN ('active','inactive')),
  start_date DATE,
  end_date DATE,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- 28. Comments Moderation
CREATE TABLE IF NOT EXISTS comments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  author TEXT NOT NULL,
  content TEXT DEFAULT '',
  webinar_title TEXT DEFAULT '',
  status TEXT DEFAULT 'pending' CHECK (status IN ('approved','pending','rejected')),
  created_at TIMESTAMPTZ DEFAULT now()
);

-- 29. Reviews
CREATE TABLE IF NOT EXISTS reviews (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  author TEXT NOT NULL,
  webinar_title TEXT DEFAULT '',
  rating INT DEFAULT 5 CHECK (rating BETWEEN 1 AND 5),
  content TEXT DEFAULT '',
  status TEXT DEFAULT 'pending' CHECK (status IN ('published','pending','hidden')),
  created_at TIMESTAMPTZ DEFAULT now()
);

-- 30. Document Verification
CREATE TABLE IF NOT EXISTS document_verifications (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  username TEXT NOT NULL,
  document_type TEXT DEFAULT '',
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending','approved','rejected')),
  note TEXT DEFAULT '',
  submitted_at TIMESTAMPTZ DEFAULT now()
);

-- 31. Delete Account Requests
CREATE TABLE IF NOT EXISTS delete_account_requests (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  username TEXT NOT NULL,
  reason TEXT DEFAULT '',
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending','approved','rejected')),
  created_at TIMESTAMPTZ DEFAULT now()
);

-- 32. Notification Templates
CREATE TABLE IF NOT EXISTS notification_templates (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  type TEXT DEFAULT 'email' CHECK (type IN ('email','sms','push')),
  subject TEXT DEFAULT '',
  body TEXT DEFAULT '',
  variables TEXT[] DEFAULT '{}',
  status TEXT DEFAULT 'active' CHECK (status IN ('active','inactive'))
);

-- 33. System Settings (key-value store)
CREATE TABLE IF NOT EXISTS system_settings (
  key TEXT PRIMARY KEY,
  value JSONB DEFAULT '{}'::jsonb,
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- ═══ Default data ═══════════════════════════════════════════════════════════════

INSERT INTO roles (name, permissions, description) VALUES
  ('مدیر ارشد', ARRAY['*'], 'دسترسی کامل'),
  ('مدیر محتوا', ARRAY['courses','blogs','pages','forums','categories'], 'مدیریت محتوا'),
  ('مدیر مالی', ARRAY['orders','sales','installments','subscriptions','discounts'], 'مدیریت مالی'),
  ('مدرس', ARRAY['courses','quizzes','assignments','meetings','students'], 'مدیریت دوره'),
  ('پشتیبان', ARRAY['support','contacts','requests','messages'], 'پشتیبانی')
ON CONFLICT DO NOTHING;

INSERT INTO currencies (code, name, symbol, exchange_rate) VALUES
  ('EUR', 'یورو', '€', 1),
  ('USD', 'دلار', '$', 1.08),
  ('IRR', 'ریال', '﷼', 58000)
ON CONFLICT (code) DO NOTHING;

INSERT INTO system_settings (key, value) VALUES
  ('general', '{"siteName":"Patente Italiana","siteUrl":"https://patenteitaliano.ir","timezone":"Asia/Tehran","language":"fa","currency":"EUR","registrationEnabled":true,"emailVerification":false,"maintenanceMode":false,"maxLoginAttempts":5}'),
  ('seo', '{"seoTitle":"آموزش گواهینامه ایتالیایی","seoDescription":"آزمون تمرینی گواهینامه رانندگی ایتالیا","seoKeywords":"patente,italiano","googleAnalytics":""}'),
  ('social', '{"facebook":"","twitter":"","instagram":"","telegram":"","linkedin":""}'),
  ('smtp', '{"smtpHost":"","smtpPort":"587","smtpUser":""}'),
  ('custom_code', '{"customHeaderCode":"","customFooterCode":""}')
ON CONFLICT (key) DO NOTHING;

-- ═══ RLS Policies ═══════════════════════════════════════════════════════════════
-- Enable RLS but allow authenticated users (admin check done at app level)

DO $$ 
DECLARE t TEXT;
BEGIN
  FOREACH t IN ARRAY ARRAY[
    'roles','categories','webinars','lms_quizzes','orders','sales','meetings',
    'blog_posts','forum_topics','products','bundles','forms','installment_plans',
    'rewards','newsletters','pages','contacts','gifts','currencies',
    'upcoming_courses','instructor_requests','promotions','payment_channels',
    'cashback_rules','ai_templates','regions','floating_bars','comments',
    'reviews','document_verifications','delete_account_requests',
    'notification_templates','system_settings'
  ] LOOP
    EXECUTE format('ALTER TABLE %I ENABLE ROW LEVEL SECURITY', t);
    EXECUTE format('CREATE POLICY "Allow authenticated full access on %s" ON %I FOR ALL TO authenticated USING (true) WITH CHECK (true)', t, t);
  END LOOP;
END $$;
