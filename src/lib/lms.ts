// ─────────────────────────────────────────────────────────────────────────────
//  LMS — سیستم مدیریت آموزش (client-side localStorage)
// ─────────────────────────────────────────────────────────────────────────────

// ── Announcements ─────────────────────────────────────────────────────────────
export type Announcement = {
  id: string;
  title: string;
  body: string;
  priority: "normal" | "important" | "urgent";
  targetUsers: string[] | "all";
  createdAt: string;
  expiresAt: string | null;
  pinned: boolean;
};

const ANN_KEY = "lms_announcements_v1";

export function getAnnouncements(): Announcement[] {
  try { return JSON.parse(localStorage.getItem(ANN_KEY) || "[]"); } catch { return []; }
}

export function saveAnnouncement(ann: Announcement) {
  const list = getAnnouncements().filter(a => a.id !== ann.id);
  list.unshift(ann);
  localStorage.setItem(ANN_KEY, JSON.stringify(list));
}

export function deleteAnnouncement(id: string) {
  localStorage.setItem(ANN_KEY, JSON.stringify(getAnnouncements().filter(a => a.id !== id)));
}

// ── Certificates ──────────────────────────────────────────────────────────────
export type Certificate = {
  id: string;
  username: string;
  courseName: string;
  courseLevel: string;
  issuedAt: string;
  grade: string;
  note: string;
};

const CERT_KEY = "lms_certificates_v1";

export function getCertificates(): Certificate[] {
  try { return JSON.parse(localStorage.getItem(CERT_KEY) || "[]"); } catch { return []; }
}

export function issueCertificate(cert: Certificate) {
  const list = getCertificates();
  list.unshift(cert);
  localStorage.setItem(CERT_KEY, JSON.stringify(list));
}

export function deleteCertificate(id: string) {
  localStorage.setItem(CERT_KEY, JSON.stringify(getCertificates().filter(c => c.id !== id)));
}

// ── Student Notes (admin notes per student) ───────────────────────────────────
export type StudentNote = {
  id: string;
  username: string;
  note: string;
  createdAt: string;
};

const NOTES_KEY = "lms_student_notes_v1";

export function getStudentNotes(username?: string): StudentNote[] {
  try {
    const all: StudentNote[] = JSON.parse(localStorage.getItem(NOTES_KEY) || "[]");
    return username ? all.filter(n => n.username === username) : all;
  } catch { return []; }
}

export function addStudentNote(note: StudentNote) {
  const list = getStudentNotes();
  list.unshift(note);
  localStorage.setItem(NOTES_KEY, JSON.stringify(list));
}

export function deleteStudentNote(id: string) {
  localStorage.setItem(NOTES_KEY, JSON.stringify(getStudentNotes().filter(n => n.id !== id)));
}

// ── Course Config (lesson ready state, descriptions) ──────────────────────────
export type LessonConfig = {
  courseId: string; // e.g. "espresso1"
  lessonNum: number;
  ready: boolean;
  description: string;
  updatedAt: string;
};

const LESSON_KEY = "lms_lesson_config_v1";

export function getLessonConfigs(): LessonConfig[] {
  try { return JSON.parse(localStorage.getItem(LESSON_KEY) || "[]"); } catch { return []; }
}

export function setLessonConfig(config: LessonConfig) {
  const list = getLessonConfigs().filter(c => !(c.courseId === config.courseId && c.lessonNum === config.lessonNum));
  list.push(config);
  localStorage.setItem(LESSON_KEY, JSON.stringify(list));
}

export function getLessonConfig(courseId: string, lessonNum: number): LessonConfig | undefined {
  return getLessonConfigs().find(c => c.courseId === courseId && c.lessonNum === lessonNum);
}

// ── Messages (admin to student) ───────────────────────────────────────────────
export type Message = {
  id: string;
  from: string;
  to: string;
  subject: string;
  body: string;
  sentAt: string;
  read: boolean;
};

const MSG_KEY = "lms_messages_v1";

export function getMessages(username?: string): Message[] {
  try {
    const all: Message[] = JSON.parse(localStorage.getItem(MSG_KEY) || "[]");
    return username ? all.filter(m => m.to === username || m.from === username) : all;
  } catch { return []; }
}

export function sendMessage(msg: Message) {
  const list = getMessages();
  list.unshift(msg);
  localStorage.setItem(MSG_KEY, JSON.stringify(list));
}

export function markMessageRead(id: string) {
  const list = getMessages();
  const msg = list.find(m => m.id === id);
  if (msg) msg.read = true;
  localStorage.setItem(MSG_KEY, JSON.stringify(list));
}

export function deleteMessage(id: string) {
  localStorage.setItem(MSG_KEY, JSON.stringify(getMessages().filter(m => m.id !== id)));
}

// ── Schedule / Calendar ───────────────────────────────────────────────────────
export type ScheduleEvent = {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  type: "class" | "exam" | "event" | "deadline";
  targetUsers: string[] | "all";
};

const SCHED_KEY = "lms_schedule_v1";

export function getSchedule(): ScheduleEvent[] {
  try { return JSON.parse(localStorage.getItem(SCHED_KEY) || "[]"); } catch { return []; }
}

export function saveScheduleEvent(event: ScheduleEvent) {
  const list = getSchedule().filter(e => e.id !== event.id);
  list.push(event);
  list.sort((a, b) => a.date.localeCompare(b.date));
  localStorage.setItem(SCHED_KEY, JSON.stringify(list));
}

export function deleteScheduleEvent(id: string) {
  localStorage.setItem(SCHED_KEY, JSON.stringify(getSchedule().filter(e => e.id !== id)));
}
