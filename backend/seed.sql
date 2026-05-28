-- ═══════════════════════════════════════════════════════════════════════════════
--  Seed Data — Default users & configs
-- ═══════════════════════════════════════════════════════════════════════════════

-- Default users (passwords hashed with bcrypt — these are the plain passwords in comments)
-- In production, hash with bcrypt before inserting
INSERT INTO users (username, password_hash, display_name, role) VALUES
  ('admin',   '30yavash@Ayda6667',   'مدیر سیستم', 'admin'),
  ('aida',    '30yavash@Ayda6667',   'Aida',        'student'),
  ('elnaz',   '30yavash@Ayda6667',   'Elnaz',       'student'),
  ('siavash', '30yavash@Ayda6667',   'Siavash',     'student')
ON CONFLICT (username) DO NOTHING;

-- Default section access
INSERT INTO section_access (user_id, section_id)
SELECT u.id, s.section_id
FROM users u
CROSS JOIN (
  VALUES ('patente'), ('italiano'), ('espresso1'), ('espresso2'),
         ('espresso3'), ('espresso4'), ('espresso5'), ('espresso6')
) AS s(section_id)
WHERE u.username IN ('admin', 'siavash')
ON CONFLICT (user_id, section_id) DO NOTHING;

-- Aida & Elnaz only get patente
INSERT INTO section_access (user_id, section_id)
SELECT u.id, 'patente'
FROM users u
WHERE u.username IN ('aida', 'elnaz')
ON CONFLICT (user_id, section_id) DO NOTHING;

-- Default tag configs
INSERT INTO tag_configs (tag_index, label, color) VALUES
  (0, 'مرور بعدی', '#3b82f6'),
  (1, 'نکته مهم',  '#f59e0b'),
  (2, 'بسیار سخت', '#ef4444')
ON CONFLICT (tag_index) DO NOTHING;
