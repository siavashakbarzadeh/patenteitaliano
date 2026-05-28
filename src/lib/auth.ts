// ─────────────────────────────────────────────────────────────────────────────
//  Auth — سیستم احراز هویت ساده (client-side)
// ─────────────────────────────────────────────────────────────────────────────

export type User = {
  username: string;
  displayName: string;
  role: "admin" | "student";
};

export type UserRecord = {
  username: string;
  password: string;
  displayName: string;
  role: "admin" | "student";
};

// لیست کاربران پیش‌فرض
const DEFAULT_USERS: UserRecord[] = [
  { username: "admin",   password: "30yavash@Ayda6667",  displayName: "مدیر سیستم", role: "admin"   },
  { username: "aida",    password: "30yavash@Ayda6667",  displayName: "Aida",        role: "student" },
  { username: "elnaz",   password: "30yavash@Ayda6667",  displayName: "Elnaz",       role: "student" },
  { username: "siavash", password: "30yavash@Ayda6667",  displayName: "Siavash",     role: "student" },
];

const SESSION_KEY = "patente_session";
const USERS_KEY = "patente_users_v1";
const ACCESS_KEY = "patente_section_access_v1";
const LOG_KEY = "patente_activity_log_v1";

// ── Dynamic user list ─────────────────────────────────────────────────────────
export function getAllUsers(): UserRecord[] {
  if (typeof window === "undefined") return DEFAULT_USERS;
  try {
    const raw = localStorage.getItem(USERS_KEY);
    if (raw) return JSON.parse(raw);
  } catch { /* ignore */ }
  return DEFAULT_USERS;
}

function saveUsers(users: UserRecord[]) {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

export function addUser(user: UserRecord): boolean {
  const users = getAllUsers();
  if (users.some(u => u.username.toLowerCase() === user.username.toLowerCase())) return false;
  users.push(user);
  saveUsers(users);
  return true;
}

export function updateUser(username: string, updates: Partial<Omit<UserRecord, "username">>): boolean {
  const users = getAllUsers();
  const idx = users.findIndex(u => u.username === username);
  if (idx === -1) return false;
  users[idx] = { ...users[idx], ...updates };
  saveUsers(users);
  return true;
}

export function deleteUser(username: string): boolean {
  if (username === "admin") return false; // can't delete admin
  const users = getAllUsers().filter(u => u.username !== username);
  saveUsers(users);
  return true;
}

// ── Login ─────────────────────────────────────────────────────────────────────
export function login(username: string, password: string): User | null {
  const users = getAllUsers();
  const found = users.find(
    u => u.username.toLowerCase() === username.toLowerCase() && u.password === password
  );
  if (!found) return null;
  const user: User = { username: found.username, displayName: found.displayName, role: found.role };
  localStorage.setItem(SESSION_KEY, JSON.stringify(user));
  logActivity(found.username, "login");
  return user;
}

// ── Logout ────────────────────────────────────────────────────────────────────
export function logout(): void {
  const session = getSession();
  if (session) logActivity(session.username, "logout");
  localStorage.removeItem(SESSION_KEY);
}

// ── Get current session ───────────────────────────────────────────────────────
export function getSession(): User | null {
  try {
    const raw = localStorage.getItem(SESSION_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as User;
  } catch {
    return null;
  }
}

// ── Check if logged in ────────────────────────────────────────────────────────
export function isLoggedIn(): boolean {
  return getSession() !== null;
}

// ── Section Access Control ────────────────────────────────────────────────────
// Map of username -> list of allowed section IDs
// If a user has no entry, they get default access (patente only, unless admin)
export type SectionAccess = Record<string, string[]>;

const ALL_SECTIONS = ["patente", "italiano", "espresso1", "espresso2", "espresso3", "espresso4", "espresso5", "espresso6"];

export function getSectionAccess(): SectionAccess {
  if (typeof window === "undefined") return {};
  try {
    const raw = localStorage.getItem(ACCESS_KEY);
    if (raw) return JSON.parse(raw);
  } catch { /* ignore */ }
  // Default access
  return {
    admin: ALL_SECTIONS,
    siavash: ALL_SECTIONS,
  };
}

export function saveSectionAccess(access: SectionAccess) {
  localStorage.setItem(ACCESS_KEY, JSON.stringify(access));
}

export function getUserSections(username: string): string[] {
  const access = getSectionAccess();
  if (access[username]) return access[username];
  // Default: only patente
  return ["patente"];
}

export function getAllSectionIds(): string[] {
  return ALL_SECTIONS;
}

// ── Activity Log ──────────────────────────────────────────────────────────────
export type ActivityEntry = {
  username: string;
  action: string;
  timestamp: string;
};

function logActivity(username: string, action: string) {
  if (typeof window === "undefined") return;
  try {
    const raw = localStorage.getItem(LOG_KEY);
    const log: ActivityEntry[] = raw ? JSON.parse(raw) : [];
    log.unshift({ username, action, timestamp: new Date().toISOString() });
    // Keep last 200 entries
    localStorage.setItem(LOG_KEY, JSON.stringify(log.slice(0, 200)));
  } catch { /* ignore */ }
}

export function getActivityLog(): ActivityEntry[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(LOG_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch { return []; }
}
