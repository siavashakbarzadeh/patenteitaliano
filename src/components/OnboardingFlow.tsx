"use client";

import { useState, useEffect } from "react";
import { saveUserSettings, getUserSettings } from "@/lib/userSettings";

// ─── First-Launch Flow: ToS → Onboarding ─────────────────────────────────────
// Shown once on first app open. Covers:
//  • Terms of Service acceptance
//  • Initial data collection (name, level, exam date)
//  • Welcome gift code display

const ONBOARDING_KEY = "patente_onboarding_v1";

export type OnboardingData = {
  accepted: boolean;
  name: string;
  level: "beginner" | "intermediate" | "advanced";
  examDate: string | null;
  nativeLanguage: string;
  completedAt: string;
};

export function getOnboardingData(): OnboardingData | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(ONBOARDING_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch { return null; }
}

export function saveOnboardingData(data: OnboardingData): void {
  if (typeof window !== "undefined") {
    localStorage.setItem(ONBOARDING_KEY, JSON.stringify(data));
  }
}

// ─── Welcome Gift Code for new users ─────────────────────────────────────────
export const WELCOME_GIFT_CODE = "BENVENUTO25";

// ─── Component ────────────────────────────────────────────────────────────────
type Step = "tos" | "profile" | "gift";

export default function OnboardingFlow({ onComplete }: { onComplete: (data: OnboardingData) => void }) {
  const [step, setStep] = useState<Step>("tos");
  const [tosAccepted, setTosAccepted] = useState(false);
  const [name, setName] = useState("");
  const [level, setLevel] = useState<"beginner" | "intermediate" | "advanced">("beginner");
  const [examDate, setExamDate] = useState("");
  const [lang, setLang] = useState("فارسی");
  const [giftCopied, setGiftCopied] = useState(false);

  const handleFinish = () => {
    const data: OnboardingData = {
      accepted: true, name, level,
      examDate: examDate || null,
      nativeLanguage: lang,
      completedAt: new Date().toISOString(),
    };
    saveOnboardingData(data);
    // Also save name and exam date to user settings
    const settings = getUserSettings();
    saveUserSettings({ ...settings, examDate: examDate || null });
    onComplete(data);
  };

  const levels = [
    { id: "beginner" as const,     label: "مبتدی — تازه شروع کردم", icon: "🐣" },
    { id: "intermediate" as const, label: "متوسط — کمی می‌دانم",    icon: "📚" },
    { id: "advanced" as const,     label: "پیشرفته — تقریباً آماده", icon: "🏆" },
  ];

  return (
    <>
      {/* Full-screen overlay */}
      <div style={{
        position: "fixed", inset: 0, zIndex: 10000,
        background: "rgba(0,0,0,0.85)", backdropFilter: "blur(12px)",
        display: "flex", alignItems: "center", justifyContent: "center", padding: 20,
      }}>
        <div style={{
          background: "linear-gradient(135deg, #130f1e, #1c1628)",
          border: "1px solid rgba(147,51,234,0.3)", borderRadius: 24,
          maxWidth: 480, width: "100%", overflow: "hidden",
          boxShadow: "0 24px 80px rgba(0,0,0,0.6)",
        }}>
          {/* Progress indicator */}
          <div style={{ display: "flex", height: 3 }}>
            {(["tos","profile","gift"] as Step[]).map((s, i) => (
              <div key={s} style={{ flex: 1, background: (["tos","profile","gift"].indexOf(step) >= i) ? "var(--accent-primary)" : "rgba(255,255,255,0.1)", transition: "background 0.3s" }} />
            ))}
          </div>

          <div style={{ padding: "28px 28px 24px" }}>
            {/* ── Step 1: ToS ── */}
            {step === "tos" && (
              <div>
                <div style={{ textAlign: "center", marginBottom: 20 }}>
                  <div style={{ fontSize: 40, marginBottom: 10 }}>🇮🇹</div>
                  <div style={{ fontSize: 20, fontWeight: 800, color: "var(--text-primary)", marginBottom: 4 }}>
                    خوش آمدی به PerlaPatente!
                  </div>
                  <div style={{ fontSize: 13, color: "var(--text-muted)" }}>
                    لطفاً قوانین استفاده را مطالعه و تأیید کن
                  </div>
                </div>

                <div style={{
                  height: 200, overflowY: "auto", padding: "14px 16px", marginBottom: 20,
                  background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: 14, fontSize: 12, color: "var(--text-secondary)", lineHeight: 2, direction: "rtl",
                }}>
                  <strong style={{ display: "block", marginBottom: 8, color: "var(--text-primary)" }}>شرایط و قوانین استفاده</strong>
                  <p>۱. این پلتفرم صرفاً برای اهداف آموزشی و کمک به آمادگی آزمون گواهینامه ایتالیایی طراحی شده است.</p>
                  <p>۲. محتوای آموزشی، سوالات و ویدیوها دارای حق مالکیت معنوی هستند و هرگونه کپی، توزیع یا استفاده تجاری بدون اجازه ممنوع است.</p>
                  <p>۳. ضبط صدا، تصویر و اسکرین‌شات از محتوای پلتفرم جز برای گزارش‌های پیشرفت شخصی مجاز نیست.</p>
                  <p>۴. داده‌های شخصی کاربر صرفاً برای بهبود تجربه آموزشی استفاده می‌شود و به اشخاص ثالث منتقل نمی‌شود.</p>
                  <p>۵. این سرویس دارای اشتراک با تاریخ انقضا می‌باشد. امکان یک نوبت تمدید پس از انقضا وجود دارد.</p>
                  <p>۶. پشتیبانی فقط از طریق کانال‌های رسمی پلتفرم ارائه می‌شود.</p>
                  <p>۷. استفاده از این پلتفرم به منزله پذیرش کلیه شرایط فوق است.</p>
                </div>

                <label style={{ display: "flex", alignItems: "flex-start", gap: 12, cursor: "pointer", marginBottom: 20, direction: "rtl" }}>
                  <input type="checkbox" checked={tosAccepted} onChange={e => setTosAccepted(e.target.checked)}
                    style={{ width: 18, height: 18, accentColor: "var(--accent-primary)", flexShrink: 0, marginTop: 2 }} />
                  <span style={{ fontSize: 13, color: "var(--text-secondary)", lineHeight: 1.7 }}>
                    شرایط و قوانین استفاده را خوانده‌ام و <strong style={{ color: "var(--text-primary)" }}>می‌پذیرم</strong>.
                  </span>
                </label>

                <button onClick={() => setStep("profile")} disabled={!tosAccepted}
                  style={{
                    width: "100%", padding: "13px 0", borderRadius: 14, fontWeight: 700, fontSize: 15,
                    background: tosAccepted ? "linear-gradient(135deg,#9333ea,#f97316)" : "rgba(255,255,255,0.08)",
                    color: tosAccepted ? "white" : "var(--text-muted)", border: "none",
                    cursor: tosAccepted ? "pointer" : "not-allowed", transition: "all 0.2s",
                  }}>
                  بعدی ←
                </button>
              </div>
            )}

            {/* ── Step 2: Profile ── */}
            {step === "profile" && (
              <div>
                <div style={{ textAlign: "center", marginBottom: 20 }}>
                  <div style={{ fontSize: 36, marginBottom: 8 }}>👤</div>
                  <div style={{ fontSize: 17, fontWeight: 800, color: "var(--text-primary)", marginBottom: 4 }}>فرم اطلاعاتی اولیه</div>
                  <div style={{ fontSize: 12, color: "var(--text-muted)" }}>این اطلاعات برای شخصی‌سازی برنامه آموزشی تو استفاده می‌شود</div>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                  <div>
                    <label style={{ fontSize: 12, color: "var(--text-muted)", display: "block", marginBottom: 6, direction: "rtl" }}>نام شما</label>
                    <input value={name} onChange={e => setName(e.target.value)}
                      placeholder="مثلاً: علی / Aida / Sara"
                      style={{ width: "100%", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(147,51,234,0.2)",
                        borderRadius: 10, padding: "10px 14px", color: "var(--text-primary)", fontSize: 14,
                        outline: "none", direction: "rtl" }}
                    />
                  </div>

                  <div>
                    <label style={{ fontSize: 12, color: "var(--text-muted)", display: "block", marginBottom: 8, direction: "rtl" }}>سطح فعلی آمادگی</label>
                    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                      {levels.map(lv => (
                        <button key={lv.id} onClick={() => setLevel(lv.id)}
                          style={{
                            padding: "10px 16px", borderRadius: 12, cursor: "pointer",
                            background: level === lv.id ? "rgba(147,51,234,0.15)" : "rgba(255,255,255,0.03)",
                            border: `2px solid ${level === lv.id ? "var(--accent-primary)" : "rgba(255,255,255,0.08)"}`,
                            display: "flex", alignItems: "center", gap: 10, direction: "rtl",
                          }}>
                          <span style={{ fontSize: 20 }}>{lv.icon}</span>
                          <span style={{ fontSize: 13, color: "var(--text-primary)" }}>{lv.label}</span>
                          {level === lv.id && <span style={{ marginRight: "auto", color: "var(--accent-primary)" }}>✓</span>}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label style={{ fontSize: 12, color: "var(--text-muted)", display: "block", marginBottom: 6, direction: "rtl" }}>تاریخ هدف آزمون (اختیاری)</label>
                    <input type="date" value={examDate} onChange={e => setExamDate(e.target.value)}
                      style={{ width: "100%", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(147,51,234,0.2)",
                        borderRadius: 10, padding: "10px 14px", color: "var(--text-primary)", fontSize: 14, outline: "none" }}
                    />
                  </div>

                  <div>
                    <label style={{ fontSize: 12, color: "var(--text-muted)", display: "block", marginBottom: 6, direction: "rtl" }}>زبان اول شما</label>
                    <select value={lang} onChange={e => setLang(e.target.value)}
                      style={{ width: "100%", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(147,51,234,0.2)",
                        borderRadius: 10, padding: "10px 14px", color: "var(--text-primary)", fontSize: 14, outline: "none" }}>
                      {["فارسی","عربی","انگلیسی","ترکی","روسی","سایر"].map(l => <option key={l} value={l}>{l}</option>)}
                    </select>
                  </div>
                </div>

                <div style={{ display: "flex", gap: 8, marginTop: 20 }}>
                  <button onClick={() => setStep("tos")} className="btn-secondary" style={{ flex: 1, padding: "11px 0", fontSize: 13 }}>
                    ← برگشت
                  </button>
                  <button onClick={() => setStep("gift")} disabled={!name.trim()}
                    style={{
                      flex: 2, padding: "11px 0", borderRadius: 12, fontWeight: 700, fontSize: 14,
                      background: name.trim() ? "linear-gradient(135deg,#9333ea,#f97316)" : "rgba(255,255,255,0.08)",
                      color: name.trim() ? "white" : "var(--text-muted)", border: "none", cursor: name.trim() ? "pointer" : "not-allowed",
                    }}>
                    بعدی ←
                  </button>
                </div>
              </div>
            )}

            {/* ── Step 3: Welcome Gift ── */}
            {step === "gift" && (
              <div style={{ textAlign: "center" }}>
                <div style={{ fontSize: 56, marginBottom: 12 }}>🎁</div>
                <div style={{ fontSize: 19, fontWeight: 800, color: "var(--text-primary)", marginBottom: 8 }}>
                  خوش آمدی، {name || "دوست عزیز"}!
                </div>
                <div style={{ fontSize: 13, color: "var(--text-muted)", marginBottom: 24, lineHeight: 1.7 }}>
                  به عنوان هدیه خوش‌آمدگویی، یک کد تخفیف ویژه برای شما آماده کرده‌ایم:
                </div>

                <div style={{
                  background: "linear-gradient(135deg,rgba(147,51,234,0.15),rgba(249,115,22,0.1))",
                  border: "2px dashed rgba(147,51,234,0.4)", borderRadius: 16,
                  padding: "20px 24px", marginBottom: 20,
                }}>
                  <div style={{ fontSize: 11, color: "var(--text-muted)", marginBottom: 8 }}>کد تخفیف خوش‌آمدگویی</div>
                  <div style={{ fontSize: 28, fontWeight: 900, letterSpacing: "0.15em", color: "var(--accent-primary)", fontFamily: "monospace" }}>
                    {WELCOME_GIFT_CODE}
                  </div>
                  <div style={{ fontSize: 11, color: "#22d3a5", marginTop: 8 }}>۲۵٪ تخفیف در اولین خرید اشتراک</div>
                </div>

                <button onClick={() => {
                  navigator.clipboard.writeText(WELCOME_GIFT_CODE).then(() => setGiftCopied(true));
                }}
                  style={{
                    padding: "10px 28px", borderRadius: 12, fontSize: 13, fontWeight: 700,
                    background: giftCopied ? "rgba(34,211,165,0.15)" : "rgba(147,51,234,0.2)",
                    color: giftCopied ? "#22d3a5" : "var(--accent-primary)",
                    border: `1px solid ${giftCopied ? "rgba(34,211,165,0.3)" : "rgba(147,51,234,0.3)"}`,
                    cursor: "pointer", marginBottom: 20, display: "block", width: "100%",
                  }}>
                  {giftCopied ? "✓ کپی شد!" : "📋 کپی کد"}
                </button>

                <button onClick={handleFinish}
                  style={{
                    width: "100%", padding: "13px 0", borderRadius: 14, fontWeight: 700, fontSize: 15,
                    background: "linear-gradient(135deg,#9333ea,#f97316)", color: "white",
                    border: "none", cursor: "pointer",
                  }}>
                  شروع یادگیری 🚀
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
