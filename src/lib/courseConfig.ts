// ─────────────────────────────────────────────────────────────────────────────
//  Course Config — مدیریت داینامیک دوره‌ها
// ─────────────────────────────────────────────────────────────────────────────

export type NavItemConfig = {
  id: string;
  label: string;
  icon: string;   // lucide icon name
  enabled: boolean;
};

export type CourseConfig = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  colorPrimary: string;
  colorSecondary: string;
  colorRgb: string;
  badges: string[];
  navItems: NavItemConfig[];
  enabled: boolean;
  order: number;
  accessKey: string;
};

const STORAGE_KEY = "patente_course_configs_v1";

// ── Default Courses ───────────────────────────────────────────────────────────
const DEFAULT_COURSES: CourseConfig[] = [
  {
    id: "patente",
    title: "Patente Italiana",
    subtitle: "گواهینامه رانندگی",
    description: "۲۵ فصل آیین‌نامه، سوالات آزمون تمرینی، مطالعه با ترجمه فارسی، آمار پیشرفت و بیشتر...",
    icon: "🚗",
    colorPrimary: "#9333ea",
    colorSecondary: "#f97316",
    colorRgb: "147,51,234",
    badges: ["📚 ۲۵ فصل", "✍️ آزمون تمرینی", "📊 آمار", "🏆 امتیاز"],
    navItems: [
      { id: "home", label: "خانه", icon: "Home", enabled: true },
      { id: "chapters", label: "فصل‌ها", icon: "BookOpen", enabled: true },
      { id: "charts", label: "آمار", icon: "BarChart2", enabled: true },
      { id: "gamification", label: "امتیاز", icon: "Award", enabled: true },
      { id: "support", label: "پشتیبانی", icon: "MessageCircle", enabled: true },
      { id: "faq", label: "راهنما", icon: "HelpCircle", enabled: true },
    ],
    enabled: true,
    order: 1,
    accessKey: "patente",
  },
  {
    id: "italiano",
    title: "Italiano per Argomenti",
    subtitle: "آموزش موضوعی زبان",
    description: "یادگیری ایتالیایی از طریق موضوعات روزانه: پزشک، بانک، خرید، شهرداری، مدرسه و بیشتر...",
    icon: "💬",
    colorPrimary: "#0ea5e9",
    colorSecondary: "#10b981",
    colorRgb: "14,165,233",
    badges: ["🏥 Dal Medico", "🛒 Supermercato", "🏦 Banca", "🏛️ Comune"],
    navItems: [
      { id: "home", label: "خانه", icon: "Home", enabled: true },
      { id: "chapters", label: "درس‌ها", icon: "BookOpen", enabled: true },
      { id: "charts", label: "آمار", icon: "BarChart2", enabled: true },
      { id: "support", label: "پشتیبانی", icon: "MessageCircle", enabled: true },
      { id: "faq", label: "راهنما", icon: "HelpCircle", enabled: true },
    ],
    enabled: true,
    order: 2,
    accessKey: "italiano",
  },
  {
    id: "espresso1",
    title: "Espresso 1",
    subtitle: "اسپرسو ۱ — مقدماتی (A1)",
    description: "آموزش ایتالیایی سطح A1 با کتاب Espresso",
    icon: "☕",
    colorPrimary: "#f59e0b",
    colorSecondary: "#ea580c",
    colorRgb: "245,158,11",
    badges: ["📖 A1", "☕ Espresso"],
    navItems: [
      { id: "home", label: "خانه", icon: "Home", enabled: true },
      { id: "chapters", label: "درس‌ها", icon: "BookOpen", enabled: true },
      { id: "support", label: "پشتیبانی", icon: "MessageCircle", enabled: true },
    ],
    enabled: true,
    order: 3,
    accessKey: "espresso1",
  },
  {
    id: "espresso2",
    title: "Espresso 2",
    subtitle: "اسپرسو ۲ — پایه (A2)",
    description: "آموزش ایتالیایی سطح A2 با کتاب Espresso",
    icon: "☕",
    colorPrimary: "#10b981",
    colorSecondary: "#059669",
    colorRgb: "16,185,129",
    badges: ["📖 A2", "☕ Espresso"],
    navItems: [
      { id: "home", label: "خانه", icon: "Home", enabled: true },
      { id: "chapters", label: "درس‌ها", icon: "BookOpen", enabled: true },
      { id: "support", label: "پشتیبانی", icon: "MessageCircle", enabled: true },
    ],
    enabled: true,
    order: 4,
    accessKey: "espresso2",
  },
  {
    id: "espresso3",
    title: "Espresso 3",
    subtitle: "اسپرسو ۳ — متوسط (B1)",
    description: "آموزش ایتالیایی سطح B1 با کتاب Espresso",
    icon: "☕",
    colorPrimary: "#3b82f6",
    colorSecondary: "#2563eb",
    colorRgb: "59,130,246",
    badges: ["📖 B1", "☕ Espresso"],
    navItems: [
      { id: "home", label: "خانه", icon: "Home", enabled: true },
      { id: "chapters", label: "درس‌ها", icon: "BookOpen", enabled: true },
      { id: "support", label: "پشتیبانی", icon: "MessageCircle", enabled: true },
    ],
    enabled: true,
    order: 5,
    accessKey: "espresso3",
  },
  {
    id: "espresso4",
    title: "Espresso 4",
    subtitle: "اسپرسو ۴ — بالاتر (B2)",
    description: "آموزش ایتالیایی سطح B2 با کتاب Espresso",
    icon: "☕",
    colorPrimary: "#8b5cf6",
    colorSecondary: "#7c3aed",
    colorRgb: "139,92,246",
    badges: ["📖 B2", "☕ Espresso"],
    navItems: [
      { id: "home", label: "خانه", icon: "Home", enabled: true },
      { id: "chapters", label: "درس‌ها", icon: "BookOpen", enabled: true },
      { id: "support", label: "پشتیبانی", icon: "MessageCircle", enabled: true },
    ],
    enabled: true,
    order: 6,
    accessKey: "espresso4",
  },
  {
    id: "espresso5",
    title: "Espresso 5",
    subtitle: "اسپرسو ۵ — پیشرفته (C1)",
    description: "آموزش ایتالیایی سطح C1 با کتاب Espresso",
    icon: "☕",
    colorPrimary: "#ec4899",
    colorSecondary: "#db2777",
    colorRgb: "236,72,153",
    badges: ["📖 C1", "☕ Espresso"],
    navItems: [
      { id: "home", label: "خانه", icon: "Home", enabled: true },
      { id: "chapters", label: "درس‌ها", icon: "BookOpen", enabled: true },
      { id: "support", label: "پشتیبانی", icon: "MessageCircle", enabled: true },
    ],
    enabled: true,
    order: 7,
    accessKey: "espresso5",
  },
  {
    id: "espresso6",
    title: "Espresso 6",
    subtitle: "اسپرسو ۶ — تخصصی (C2)",
    description: "آموزش ایتالیایی سطح C2 با کتاب Espresso",
    icon: "☕",
    colorPrimary: "#ef4444",
    colorSecondary: "#dc2626",
    colorRgb: "239,68,68",
    badges: ["📖 C2", "☕ Espresso"],
    navItems: [
      { id: "home", label: "خانه", icon: "Home", enabled: true },
      { id: "chapters", label: "درس‌ها", icon: "BookOpen", enabled: true },
      { id: "support", label: "پشتیبانی", icon: "MessageCircle", enabled: true },
    ],
    enabled: true,
    order: 8,
    accessKey: "espresso6",
  },
];

// ── CRUD ──────────────────────────────────────────────────────────────────────
export function getCourseConfigs(): CourseConfig[] {
  if (typeof window === "undefined") return DEFAULT_COURSES;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const saved: CourseConfig[] = JSON.parse(raw);
      // Merge with defaults: keep any new defaults not in saved
      const savedIds = new Set(saved.map(c => c.id));
      const merged = [...saved];
      for (const def of DEFAULT_COURSES) {
        if (!savedIds.has(def.id)) merged.push(def);
      }
      return merged.sort((a, b) => a.order - b.order);
    }
  } catch { /* ignore */ }
  return DEFAULT_COURSES;
}

export function saveCourseConfigs(configs: CourseConfig[]): void {
  if (typeof window !== "undefined") {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(configs));
  }
}

export function getCourseById(id: string): CourseConfig | undefined {
  return getCourseConfigs().find(c => c.id === id);
}

export function getEnabledCourses(): CourseConfig[] {
  return getCourseConfigs().filter(c => c.enabled);
}

export function saveSingleCourse(course: CourseConfig): void {
  const all = getCourseConfigs();
  const idx = all.findIndex(c => c.id === course.id);
  if (idx >= 0) {
    all[idx] = course;
  } else {
    all.push(course);
  }
  saveCourseConfigs(all);
}

export function deleteCourse(id: string): void {
  const all = getCourseConfigs().filter(c => c.id !== id);
  saveCourseConfigs(all);
}

export function getNavItemsForCourse(courseId: string): NavItemConfig[] {
  const course = getCourseById(courseId);
  if (!course) return DEFAULT_COURSES[0].navItems;
  return course.navItems.filter(n => n.enabled);
}
