// ─────────────────────────────────────────────────────────────────────────────
//  LMS Extended — Courses, Enrollment, Assignments, Attendance, Badges, Notifications
// ─────────────────────────────────────────────────────────────────────────────

const COURSES_KEY = "lms_courses_v1";
const ENROLL_KEY = "lms_enrollment_v1";
const ASSIGN_KEY = "lms_assignments_v1";
const ATTEND_KEY = "lms_attendance_v1";
const BADGES_KEY = "lms_badges_v1";
const NOTIF_KEY = "lms_notifications_v1";

// ── Courses ───────────────────────────────────────────────────────────────────
export type Course = {
  id: string;
  title: string;
  description: string;
  level: string;
  status: "active" | "draft" | "archived";
  lessonsCount: number;
  category: string;
  createdAt: string;
};

export function getCourses(): Course[] {
  try { return JSON.parse(localStorage.getItem(COURSES_KEY) || "[]"); } catch { return []; }
}
export function saveCourse(c: Course) {
  const list = getCourses().filter(x => x.id !== c.id);
  list.unshift(c);
  localStorage.setItem(COURSES_KEY, JSON.stringify(list));
}
export function deleteCourse(id: string) {
  localStorage.setItem(COURSES_KEY, JSON.stringify(getCourses().filter(c => c.id !== id)));
}

// ── Enrollment ────────────────────────────────────────────────────────────────
export type Enrollment = {
  id: string;
  username: string;
  courseId: string;
  courseTitle: string;
  status: "active" | "completed" | "dropped";
  enrolledAt: string;
  progress: number; // 0-100
};

export function getEnrollments(username?: string): Enrollment[] {
  try {
    const all: Enrollment[] = JSON.parse(localStorage.getItem(ENROLL_KEY) || "[]");
    return username ? all.filter(e => e.username === username) : all;
  } catch { return []; }
}
export function saveEnrollment(e: Enrollment) {
  const list = getEnrollments().filter(x => x.id !== e.id);
  list.unshift(e);
  localStorage.setItem(ENROLL_KEY, JSON.stringify(list));
}
export function deleteEnrollment(id: string) {
  localStorage.setItem(ENROLL_KEY, JSON.stringify(getEnrollments().filter(e => e.id !== id)));
}

// ── Assignments ───────────────────────────────────────────────────────────────
export type Assignment = {
  id: string;
  title: string;
  description: string;
  courseId: string;
  dueDate: string;
  targetUsers: string[] | "all";
  createdAt: string;
};

export function getAssignments(): Assignment[] {
  try { return JSON.parse(localStorage.getItem(ASSIGN_KEY) || "[]"); } catch { return []; }
}
export function saveAssignment(a: Assignment) {
  const list = getAssignments().filter(x => x.id !== a.id);
  list.unshift(a);
  localStorage.setItem(ASSIGN_KEY, JSON.stringify(list));
}
export function deleteAssignment(id: string) {
  localStorage.setItem(ASSIGN_KEY, JSON.stringify(getAssignments().filter(a => a.id !== id)));
}

// ── Attendance ────────────────────────────────────────────────────────────────
export type AttendanceRecord = {
  id: string;
  username: string;
  date: string;
  status: "present" | "absent" | "late" | "excused";
  courseId: string;
  note: string;
};

export function getAttendance(username?: string): AttendanceRecord[] {
  try {
    const all: AttendanceRecord[] = JSON.parse(localStorage.getItem(ATTEND_KEY) || "[]");
    return username ? all.filter(a => a.username === username) : all;
  } catch { return []; }
}
export function saveAttendance(a: AttendanceRecord) {
  const list = getAttendance().filter(x => x.id !== a.id);
  list.unshift(a);
  localStorage.setItem(ATTEND_KEY, JSON.stringify(list));
}

// ── Badges ────────────────────────────────────────────────────────────────────
export type Badge = {
  id: string;
  title: string;
  icon: string;
  description: string;
  criteria: string;
};
export type UserBadge = {
  id: string;
  username: string;
  badgeId: string;
  awardedAt: string;
};

export function getBadges(): Badge[] {
  try {
    const b = JSON.parse(localStorage.getItem(BADGES_KEY) || "null");
    if (b) return b.badges ?? [];
  } catch {}
  return [
    { id: "1", title: "اولین قدم", icon: "🐣", description: "اولین آزمون را بده", criteria: "first_quiz" },
    { id: "2", title: "پشتکار", icon: "🔥", description: "۷ روز متوالی تمرین", criteria: "7_day_streak" },
    { id: "3", title: "نابغه", icon: "🧠", description: "۱۰۰٪ دقت در یک فصل", criteria: "perfect_chapter" },
    { id: "4", title: "سرعتی", icon: "⚡", description: "پاسخ زیر ۵ ثانیه", criteria: "fast_answer" },
    { id: "5", title: "مارتن", icon: "🏆", description: "اتمام تمام فصل‌ها", criteria: "all_chapters" },
  ];
}
export function saveBadges(badges: Badge[]) {
  const data = JSON.parse(localStorage.getItem(BADGES_KEY) || "{}");
  data.badges = badges;
  localStorage.setItem(BADGES_KEY, JSON.stringify(data));
}
export function getUserBadges(username?: string): UserBadge[] {
  try {
    const data = JSON.parse(localStorage.getItem(BADGES_KEY) || "{}");
    const all: UserBadge[] = data.userBadges ?? [];
    return username ? all.filter(b => b.username === username) : all;
  } catch { return []; }
}
export function awardBadge(username: string, badgeId: string) {
  const data = JSON.parse(localStorage.getItem(BADGES_KEY) || "{}");
  const list: UserBadge[] = data.userBadges ?? [];
  if (list.some(b => b.username === username && b.badgeId === badgeId)) return;
  list.unshift({ id: Date.now().toString(), username, badgeId, awardedAt: new Date().toISOString() });
  data.userBadges = list;
  localStorage.setItem(BADGES_KEY, JSON.stringify(data));
}

// ── Notifications ─────────────────────────────────────────────────────────────
export type Notification = {
  id: string;
  title: string;
  body: string;
  type: "info" | "warning" | "success" | "error";
  targetUsers: string[] | "all";
  read: string[]; // usernames who read it
  createdAt: string;
};

export function getNotifications(): Notification[] {
  try { return JSON.parse(localStorage.getItem(NOTIF_KEY) || "[]"); } catch { return []; }
}
export function saveNotification(n: Notification) {
  const list = getNotifications().filter(x => x.id !== n.id);
  list.unshift(n);
  localStorage.setItem(NOTIF_KEY, JSON.stringify(list));
}
export function deleteNotification(id: string) {
  localStorage.setItem(NOTIF_KEY, JSON.stringify(getNotifications().filter(n => n.id !== id)));
}
