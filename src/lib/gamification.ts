// ─── Gamification / XP System ─────────────────────────────────────────────────
// Points for: daily login, quiz performance, time spent, quizzes completed

import { getUserSettings } from "./userSettings";

const GAMIFICATION_KEY = "patente_gamification_v1";

export type GamificationState = {
  totalXP: number;
  level: number;
  lastLoginDate: string | null;       // ISO date (date part only)
  consecutiveDays: number;
  todayLoginBonus: boolean;           // already received today's bonus
  quizXP: number;
  timeXP: number;
  loginXP: number;
  referralCount: number;              // installs via shared link (simulated)
  unlockedFreeSections: number[];     // chapter numbers unlocked via XP
  milestones: string[];               // achieved milestone IDs
};

const DEFAULTS: GamificationState = {
  totalXP: 0, level: 1,
  lastLoginDate: null, consecutiveDays: 0, todayLoginBonus: false,
  quizXP: 0, timeXP: 0, loginXP: 0,
  referralCount: 0, unlockedFreeSections: [],
  milestones: [],
};

export function getGamification(): GamificationState {
  if (typeof window === "undefined") return DEFAULTS;
  try {
    const raw = localStorage.getItem(GAMIFICATION_KEY);
    return raw ? { ...DEFAULTS, ...JSON.parse(raw) } : DEFAULTS;
  } catch { return DEFAULTS; }
}

function save(state: GamificationState): GamificationState {
  const level = xpToLevel(state.totalXP);
  const updated = { ...state, level };
  if (typeof window !== "undefined") {
    localStorage.setItem(GAMIFICATION_KEY, JSON.stringify(updated));
  }
  return updated;
}

// ── XP → Level ────────────────────────────────────────────────────────────────
export function xpToLevel(xp: number): number {
  // Level thresholds: 0, 50, 150, 300, 500, 800, 1200, 1800, ...
  let lvl = 1;
  let threshold = 50;
  let increment = 100;
  while (xp >= threshold) {
    lvl++;
    threshold += increment;
    increment = Math.round(increment * 1.4);
  }
  return lvl;
}

export function levelThreshold(level: number): number {
  let threshold = 50;
  let increment = 100;
  for (let i = 1; i < level; i++) {
    threshold += increment;
    increment = Math.round(increment * 1.4);
  }
  return threshold;
}

export function xpForNextLevel(xp: number): { current: number; needed: number; pct: number } {
  const level = xpToLevel(xp);
  const currentThreshold = levelThreshold(level);
  const nextThreshold = levelThreshold(level + 1);
  const current = xp - currentThreshold;
  const needed = nextThreshold - currentThreshold;
  return { current: Math.max(0, current), needed, pct: Math.min(100, Math.round((current / needed) * 100)) };
}

// ── Daily Login Bonus ─────────────────────────────────────────────────────────
const DAILY_MESSAGES = [
  "چه خوب که امروز به PerlaPatente سر زدی! 🌟 یک امتیاز گرفتی!",
  "سلام! آمدنت مایه خوشحالیه 😊 امروز هم یاد بگیریم!",
  "قدمت روی چشم! امتیاز امروزت آماده‌ست 🎯",
  "برگشتی! می‌دونستیم میای 💪 امتیازت منتظره!",
  "روز به خیر! هر روز یک قدم به آزمون نزدیک‌تری 🚗",
  "خوش اومدی! تداوم کلید موفقیته 🔑 امتیاز روزانه‌ات ثبت شد",
  "سلام! امروز هم فردا بیا، امتیازات جمع می‌شن 📈",
  "عالیه که برگشتی! یادگیری منظم فرق می‌کنه 🏆",
  "سلام مطالعه‌گر عزیز! PerlaPatente مفتخر به حضور توئه ✨",
  "هر روز حاضر باشی، موفقیت حتمیه! امتیاز روزانه‌ات ثبت شد 🎖️",
];

export type LoginBonusResult = {
  granted: boolean;
  xpEarned: number;
  message: string;
  consecutiveDays: number;
  newState: GamificationState;
};

export function claimDailyLogin(): LoginBonusResult {
  const state = getGamification();
  const today = new Date().toISOString().split("T")[0];

  if (state.lastLoginDate === today) {
    return { granted: false, xpEarned: 0, message: "", consecutiveDays: state.consecutiveDays, newState: state };
  }

  const yesterday = new Date(Date.now() - 86400000).toISOString().split("T")[0];
  const consecutive = state.lastLoginDate === yesterday ? state.consecutiveDays + 1 : 1;
  const bonus = consecutive >= 7 ? 20 : consecutive >= 3 ? 12 : 5;
  const msg = DAILY_MESSAGES[Math.floor(Math.random() * DAILY_MESSAGES.length)];

  const newState = save({
    ...state,
    totalXP: state.totalXP + bonus,
    loginXP: state.loginXP + bonus,
    lastLoginDate: today,
    consecutiveDays: consecutive,
    todayLoginBonus: true,
  });

  return { granted: true, xpEarned: bonus, message: msg, consecutiveDays: consecutive, newState };
}

// ── Quiz XP ───────────────────────────────────────────────────────────────────
export function awardQuizXP(score: number, total: number): { xpEarned: number; milestone: string | null } {
  const state = getGamification();
  const accuracy = total > 0 ? score / total : 0;
  // Only award for decent performance
  let xp = 0;
  if (accuracy >= 0.9) xp = 30;
  else if (accuracy >= 0.8) xp = 20;
  else if (accuracy >= 0.7) xp = 12;
  else if (accuracy >= 0.5) xp = 6;
  else if (accuracy > 0) xp = 2; // tried but low score

  let milestone: string | null = null;
  const newTotal = state.totalXP + xp;
  const newLevel = xpToLevel(newTotal);

  if (newLevel > state.level) {
    milestone = `🎉 سطح ${newLevel} باز شد!`;
  }

  save({ ...state, totalXP: newTotal, quizXP: state.quizXP + xp });
  return { xpEarned: xp, milestone };
}

// ── Time XP ───────────────────────────────────────────────────────────────────
// Call periodically — 1 XP per 2 minutes of active app use
export function awardTimeXP(secondsSpent: number): void {
  const xp = Math.floor(secondsSpent / 120);
  if (xp <= 0) return;
  const state = getGamification();
  save({ ...state, totalXP: state.totalXP + xp, timeXP: state.timeXP + xp });
}

// ── Referral (simulated) ──────────────────────────────────────────────────────
export function recordReferral(): { xpEarned: number } {
  const state = getGamification();
  const randomBonus = 50 + Math.floor(Math.random() * 50); // 50-100 XP
  save({ ...state, totalXP: state.totalXP + randomBonus, referralCount: state.referralCount + 1 });
  return { xpEarned: randomBonus };
}

// ── Level badges ──────────────────────────────────────────────────────────────
export const LEVEL_BADGE: Record<number, { emoji: string; title: string; color: string }> = {
  1:  { emoji: "🐣", title: "مبتدی", color: "#888" },
  2:  { emoji: "🚗", title: "راننده جوان", color: "#60a5fa" },
  3:  { emoji: "📚", title: "دانشجو", color: "#a78bfa" },
  4:  { emoji: "🎯", title: "تمرین‌کار", color: "#f59e0b" },
  5:  { emoji: "⭐", title: "ستاره", color: "#f97316" },
  6:  { emoji: "🏆", title: "قهرمان", color: "#22d3a5" },
  7:  { emoji: "💎", title: "الماس", color: "#c084fc" },
  8:  { emoji: "🦋", title: "استاد", color: "#ec4899" },
  9:  { emoji: "🌟", title: "نخبه", color: "#fbbf24" },
  10: { emoji: "👑", title: "پادشاه راه", color: "#ef4444" },
};

export function getBadge(level: number) {
  return LEVEL_BADGE[Math.min(level, 10)] ?? LEVEL_BADGE[10];
}

// ── Support Requests ──────────────────────────────────────────────────────────
const SUPPORT_REQUESTS_KEY = "patente_support_requests_v1";

export type SupportRequest = {
  id: string;
  type: "class_test" | "online_course" | "collaboration" | "suggestion" | "contact";
  message?: string;
  name?: string;
  phone?: string;
  email?: string;
  submittedAt: string;
  resolved: boolean;
};

export function submitSupportRequest(req: Omit<SupportRequest, "id" | "submittedAt" | "resolved">): void {
  if (typeof window === "undefined") return;
  const all = getSupportRequests();
  const newReq: SupportRequest = {
    ...req,
    id: `req_${Date.now()}`,
    submittedAt: new Date().toISOString(),
    resolved: false,
  };
  localStorage.setItem(SUPPORT_REQUESTS_KEY, JSON.stringify([newReq, ...all].slice(0, 50)));
}

export function getSupportRequests(): SupportRequest[] {
  try { return JSON.parse(localStorage.getItem(SUPPORT_REQUESTS_KEY) || "[]"); } catch { return []; }
}

export function resolveSupportRequest(id: string): void {
  const all = getSupportRequests().map(r => r.id === id ? { ...r, resolved: true } : r);
  localStorage.setItem(SUPPORT_REQUESTS_KEY, JSON.stringify(all));
}
