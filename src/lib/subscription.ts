// ─────────────────────────────────────────────────────────────────────────────
//  Subscription System
// ─────────────────────────────────────────────────────────────────────────────

export type Plan = "free" | "premium";

export type Subscription = {
  username: string;
  plan: Plan;
  expiresAt?: string; // ISO date string, undefined = never expires
  activatedAt: string;
};

const SUB_KEY = "patente_subscriptions";

// ── Load all subscriptions ────────────────────────────────────────────────────
function loadAll(): Record<string, Subscription> {
  try {
    return JSON.parse(localStorage.getItem(SUB_KEY) || "{}");
  } catch {
    return {};
  }
}

// ── Save ──────────────────────────────────────────────────────────────────────
function saveAll(data: Record<string, Subscription>): void {
  localStorage.setItem(SUB_KEY, JSON.stringify(data));
}

// ── Get subscription for user ─────────────────────────────────────────────────
export function getSubscription(username: string): Subscription {
  const all = loadAll();
  return (
    all[username.toLowerCase()] ?? {
      username,
      plan: "free",
      activatedAt: new Date().toISOString(),
    }
  );
}

// ── Set plan (admin use) ──────────────────────────────────────────────────────
export function setPlan(
  username: string,
  plan: Plan,
  expiresAt?: string
): void {
  const all = loadAll();
  all[username.toLowerCase()] = {
    username: username.toLowerCase(),
    plan,
    expiresAt,
    activatedAt: new Date().toISOString(),
  };
  saveAll(all);
}

// ── Check if user has premium ─────────────────────────────────────────────────
export function isPremium(username: string): boolean {
  const sub = getSubscription(username);
  if (sub.plan !== "premium") return false;
  if (sub.expiresAt && new Date(sub.expiresAt) < new Date()) return false;
  return true;
}

// ── Get all subscriptions (admin) ─────────────────────────────────────────────
export function getAllSubscriptions(): Subscription[] {
  return Object.values(loadAll());
}

// ── Plan label helper ─────────────────────────────────────────────────────────
export function planLabel(plan: Plan): string {
  return plan === "premium" ? "🌟 پریمیوم" : "🆓 رایگان";
}
