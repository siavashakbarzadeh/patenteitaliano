// ─── Discount Code System ─────────────────────────────────────────────────────

const DISCOUNT_CODES_KEY = "patente_discount_codes_v1";
const APPLIED_CODE_KEY   = "patente_applied_code_v1";

export type DiscountCode = {
  code: string;
  discountPercent: number;
  description: string;
  expiresAt: string | null;       // ISO date string or null = no expiry
  maxUses: number | null;         // null = unlimited
  usedCount: number;
  type: "welcome" | "seasonal" | "referral" | "admin";
  createdAt: string;
  active: boolean;
};

// Default built-in welcome code
const DEFAULT_CODES: DiscountCode[] = [
  {
    code: "BENVENUTO25",
    discountPercent: 25,
    description: "کد خوش‌آمدگویی ویژه کاربران جدید",
    expiresAt: null,
    maxUses: null,
    usedCount: 0,
    type: "welcome",
    createdAt: new Date().toISOString(),
    active: true,
  },
];

export function getAllDiscountCodes(): DiscountCode[] {
  if (typeof window === "undefined") return DEFAULT_CODES;
  try {
    const raw = localStorage.getItem(DISCOUNT_CODES_KEY);
    if (!raw) return DEFAULT_CODES;
    const stored: DiscountCode[] = JSON.parse(raw);
    // Merge default welcome code if missing
    const hasBenvenuto = stored.some(c => c.code === "BENVENUTO25");
    return hasBenvenuto ? stored : [...DEFAULT_CODES, ...stored];
  } catch { return DEFAULT_CODES; }
}

export function saveAllDiscountCodes(codes: DiscountCode[]): void {
  if (typeof window !== "undefined") {
    localStorage.setItem(DISCOUNT_CODES_KEY, JSON.stringify(codes));
  }
}

export function createDiscountCode(code: Omit<DiscountCode, "createdAt" | "usedCount">): void {
  const all = getAllDiscountCodes();
  const newCode: DiscountCode = { ...code, usedCount: 0, createdAt: new Date().toISOString() };
  saveAllDiscountCodes([...all, newCode]);
}

export function validateCode(code: string): { valid: boolean; discount: DiscountCode | null; message: string } {
  const all = getAllDiscountCodes();
  const found = all.find(c => c.code.toUpperCase() === code.toUpperCase());

  if (!found) return { valid: false, discount: null, message: "کد تخفیف یافت نشد" };
  if (!found.active) return { valid: false, discount: null, message: "این کد غیرفعال است" };
  if (found.expiresAt && new Date(found.expiresAt) < new Date()) return { valid: false, discount: null, message: "کد تخفیف منقضی شده" };
  if (found.maxUses !== null && found.usedCount >= found.maxUses) return { valid: false, discount: null, message: "ظرفیت این کد پر شده" };

  return { valid: true, discount: found, message: `✓ تخفیف ${found.discountPercent}٪ اعمال شد` };
}

export function applyCode(code: string): boolean {
  const { valid, discount } = validateCode(code);
  if (!valid || !discount) return false;

  // Mark as applied for this user session
  if (typeof window !== "undefined") {
    localStorage.setItem(APPLIED_CODE_KEY, JSON.stringify({
      code: discount.code,
      discountPercent: discount.discountPercent,
      appliedAt: new Date().toISOString(),
    }));
  }

  // Increment usage
  const all = getAllDiscountCodes().map(c =>
    c.code === discount.code ? { ...c, usedCount: c.usedCount + 1 } : c
  );
  saveAllDiscountCodes(all);
  return true;
}

export function getAppliedCode(): { code: string; discountPercent: number; appliedAt: string } | null {
  try {
    return JSON.parse(localStorage.getItem(APPLIED_CODE_KEY) || "null");
  } catch { return null; }
}

export function deleteDiscountCode(code: string): void {
  const all = getAllDiscountCodes().filter(c => c.code !== code);
  saveAllDiscountCodes(all);
}

export function toggleCodeActive(code: string): void {
  const all = getAllDiscountCodes().map(c =>
    c.code === code ? { ...c, active: !c.active } : c
  );
  saveAllDiscountCodes(all);
}

// ─── Subscription Expiry ──────────────────────────────────────────────────────
const SUBSCRIPTION_EXPIRY_KEY = "patente_subscription_expiry_v1";

export type SubscriptionExpiry = {
  plan: string;
  expiresAt: string;          // ISO date
  renewedOnce: boolean;       // only one renewal allowed
};

export function getSubscriptionExpiry(): SubscriptionExpiry | null {
  try { return JSON.parse(localStorage.getItem(SUBSCRIPTION_EXPIRY_KEY) || "null"); } catch { return null; }
}

export function setSubscriptionExpiry(expiry: SubscriptionExpiry): void {
  localStorage.setItem(SUBSCRIPTION_EXPIRY_KEY, JSON.stringify(expiry));
}

export function isSubscriptionExpired(): boolean {
  const exp = getSubscriptionExpiry();
  if (!exp) return false;
  return new Date(exp.expiresAt) < new Date();
}

export function renewSubscription(days: number = 30): boolean {
  const exp = getSubscriptionExpiry();
  if (!exp || exp.renewedOnce) return false; // already renewed once
  const newExpiry = new Date(Math.max(Date.now(), new Date(exp.expiresAt).getTime()));
  newExpiry.setDate(newExpiry.getDate() + days);
  setSubscriptionExpiry({ ...exp, expiresAt: newExpiry.toISOString(), renewedOnce: true });
  return true;
}

// ─── Exam Follow-up ───────────────────────────────────────────────────────────
const FOLLOWUP_KEY = "patente_exam_followup_v1";

export type ExamFollowup = {
  passed: boolean | null;
  score: number | null;
  attempts: number;
  examDate: string | null;
  notes: string;
  submittedAt: string;
};

export function saveExamFollowup(data: Omit<ExamFollowup, "submittedAt">): void {
  localStorage.setItem(FOLLOWUP_KEY, JSON.stringify({ ...data, submittedAt: new Date().toISOString() }));
}

export function getExamFollowup(): ExamFollowup | null {
  try { return JSON.parse(localStorage.getItem(FOLLOWUP_KEY) || "null"); } catch { return null; }
}

export function shouldShowFollowup(completedQuizzes: number): boolean {
  if (getExamFollowup()) return false; // already filled
  return completedQuizzes >= 10; // show after 10+ quizzes
}
