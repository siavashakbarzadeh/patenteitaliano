// ─────────────────────────────────────────────────────────────────────────────
//  Auth — سیستم احراز هویت ساده (client-side)
// ─────────────────────────────────────────────────────────────────────────────

export type User = {
  username: string;
  displayName: string;
  role: "admin" | "student";
};

// لیست کاربران ثابت — در صورت نیاز می‌توان از API جایگزین کرد
const USERS: Array<{ username: string; password: string; displayName: string; role: "admin" | "student" }> = [
  { username: "admin",  password: "admin123",  displayName: "مدیر سیستم", role: "admin"   },
  { username: "aida",   password: "123456",    displayName: "Aida",        role: "student" },
  { username: "elnaz",  password: "1234567",   displayName: "Elnaz",       role: "student" },
  { username: "siavash", password: "12345678",  displayName: "Siavash",     role: "student" },
];

const SESSION_KEY = "patente_session";

// ── Login ─────────────────────────────────────────────────────────────────────
export function login(username: string, password: string): User | null {
  const found = USERS.find(
    u => u.username.toLowerCase() === username.toLowerCase() && u.password === password
  );
  if (!found) return null;
  const user: User = { username: found.username, displayName: found.displayName, role: found.role };
  localStorage.setItem(SESSION_KEY, JSON.stringify(user));
  return user;
}

// ── Logout ────────────────────────────────────────────────────────────────────
export function logout(): void {
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
