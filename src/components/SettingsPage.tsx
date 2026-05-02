"use client";

import { useState, useEffect } from "react";
import {
  getUserSettings, saveUserSettings, applySettings,
  type UserSettings, type AppTheme, type FontScale,
  getDaysUntilExam, getStudyPlanSummary,
} from "@/lib/userSettings";
import { getSession, logout } from "@/lib/auth";

// ─── SettingsPage — رنگ، فونت، برنامه مطالعاتی ────────────────────────────────
export default function SettingsPage({ onBack }: { onBack: () => void }) {
  const [settings, setSettings] = useState<UserSettings>(getUserSettings);
  const [saved, setSaved] = useState(false);

  // Apply on mount
  useEffect(() => { applySettings(settings); }, []);

  const update = <K extends keyof UserSettings>(key: K, value: UserSettings[K]) => {
    setSettings(prev => ({ ...prev, [key]: value }));
    setSaved(false);
  };

  const handleSave = () => {
    saveUserSettings(settings);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const days = getDaysUntilExam(settings.examDate);
  const planSummary = getStudyPlanSummary(settings, 25);

  const themes: { id: AppTheme; label: string; icon: string; preview: string }[] = [
    { id: "dark",  label: "تاریک (پیش‌فرض)", icon: "🌙", preview: "#0d0a14" },
    { id: "blue",  label: "آبی تیره",         icon: "🌊", preview: "#080e1a" },
    { id: "sepia", label: "سِپیا (چشم‌راحت)", icon: "🍂", preview: "#1a1408" },
    { id: "light", label: "روشن",             icon: "☀️", preview: "#f0edf8" },
  ];

  const fonts: { id: FontScale; label: string; size: string }[] = [
    { id: "sm", label: "کوچک",      size: "13px" },
    { id: "md", label: "متوسط",     size: "15px" },
    { id: "lg", label: "بزرگ",      size: "17px" },
    { id: "xl", label: "خیلی بزرگ", size: "20px" },
  ];

  const selStyle = {
    background: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(147,51,234,0.2)",
    borderRadius: 10, padding: "9px 14px", color: "var(--text-primary)",
    fontSize: 13, outline: "none", cursor: "pointer",
  };

  const user = getSession();

  return (
    <div className="page-wrap">
      {/* Header */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 24 }}>
        <button className="btn-secondary" style={{ padding: "8px 16px", fontSize: 13 }} onClick={onBack}>
          ← بازگشت
        </button>
        <div style={{ textAlign: "center" }}>
          <div style={{ fontSize: 11, fontWeight: 700, color: "var(--accent-primary)", letterSpacing: "0.08em" }}>
            ⚙️ تنظیمات
          </div>
          <div style={{ fontSize: 11, color: "var(--text-muted)" }}>رنگ · فونت · برنامه</div>
        </div>
        <button
          onClick={handleSave}
          style={{
            padding: "8px 18px", borderRadius: 10, fontWeight: 700, fontSize: 13, cursor: "pointer",
            background: saved ? "rgba(34,211,165,0.15)" : "linear-gradient(135deg,#9333ea,#f97316)",
            color: saved ? "#22d3a5" : "white", border: "none", transition: "all 0.3s",
          }}>
          {saved ? "✓ ذخیره شد" : "ذخیره"}
        </button>
      </div>

      {/* ── Account Card ── */}
      {user && (
        <div className="glass-card" style={{ marginBottom: 16, padding: "18px 20px" }}>
          <h3 style={{ fontSize: 13, fontWeight: 700, color: "var(--text-primary)", marginBottom: 16, direction: "rtl" }}>
            👤 حساب کاربری
          </h3>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", direction: "rtl" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              {/* Avatar circle */}
              <div style={{
                width: 48, height: 48, borderRadius: "50%", flexShrink: 0,
                background: "linear-gradient(135deg, #9333ea, #f97316)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 20, fontWeight: 900, color: "white",
              }}>
                {user.displayName?.[0]?.toUpperCase() ?? "?"}
              </div>
              <div>
                <div style={{ fontSize: 15, fontWeight: 800, color: "var(--text-primary)" }}>
                  {user.displayName}
                </div>
                <div style={{ fontSize: 11, color: "var(--text-muted)", marginTop: 2 }}>
                  @{user.username}
                </div>
              </div>
            </div>
            <button
              onClick={() => { logout(); window.location.reload(); }}
              style={{
                fontSize: 12, fontWeight: 700,
                color: "#ef4444",
                background: "rgba(239,68,68,0.1)",
                border: "1px solid rgba(239,68,68,0.25)",
                borderRadius: 10, padding: "8px 16px", cursor: "pointer",
                flexShrink: 0,
              }}
            >
              🚪 خروج
            </button>
          </div>
        </div>
      )}

      {/* ── Theme ── */}
      <SectionCard title="🎨 تم رنگی">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
          {themes.map(t => (
            <button key={t.id} onClick={() => update("theme", t.id)}
              style={{
                padding: "14px 16px", borderRadius: 12, cursor: "pointer",
                background: settings.theme === t.id
                  ? "rgba(147,51,234,0.15)" : "rgba(255,255,255,0.03)",
                border: `2px solid ${settings.theme === t.id ? "var(--accent-primary)" : "rgba(255,255,255,0.08)"}`,
                display: "flex", alignItems: "center", gap: 10, transition: "all 0.2s",
              }}>
              <div style={{ width: 28, height: 28, borderRadius: 8, background: t.preview, border: "1px solid rgba(255,255,255,0.2)", flexShrink: 0 }} />
              <div style={{ textAlign: "right", flex: 1 }}>
                <div style={{ fontSize: 18 }}>{t.icon}</div>
                <div style={{ fontSize: 11, color: "var(--text-secondary)", marginTop: 2 }}>{t.label}</div>
              </div>
              {settings.theme === t.id && <span style={{ color: "var(--accent-primary)", fontSize: 14 }}>✓</span>}
            </button>
          ))}
        </div>
      </SectionCard>

      {/* ── Font Size ── */}
      <SectionCard title="🔤 اندازه متن">
        <div style={{ display: "flex", gap: 8 }}>
          {fonts.map(f => (
            <button key={f.id} onClick={() => update("fontScale", f.id)}
              style={{
                flex: 1, padding: "12px 8px", borderRadius: 12, cursor: "pointer",
                background: settings.fontScale === f.id ? "rgba(147,51,234,0.15)" : "rgba(255,255,255,0.03)",
                border: `2px solid ${settings.fontScale === f.id ? "var(--accent-primary)" : "rgba(255,255,255,0.08)"}`,
                transition: "all 0.2s", display: "flex", flexDirection: "column", alignItems: "center", gap: 4,
              }}>
              <span style={{ fontSize: f.size, fontWeight: 700, color: "var(--text-primary)" }}>ت</span>
              <span style={{ fontSize: 10, color: "var(--text-muted)" }}>{f.label}</span>
            </button>
          ))}
        </div>
        <p style={{ fontSize: 11, color: "var(--text-muted)", marginTop: 10, direction: "rtl" }}>
          💡 تغییر اندازه متن روی همه صفحات اعمال می‌شود.
        </p>
      </SectionCard>

      {/* ── Study Plan / Exam Date ── */}
      <SectionCard title="📅 برنامه مطالعاتی">
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <div>
            <label style={{ fontSize: 12, color: "var(--text-muted)", display: "block", marginBottom: 6, direction: "rtl" }}>
              تاریخ آزمون شما
            </label>
            <input
              type="date"
              value={settings.examDate ?? ""}
              onChange={e => update("examDate", e.target.value || null)}
              style={{ ...selStyle, width: "100%" }}
            />
          </div>
          <div>
            <label style={{ fontSize: 12, color: "var(--text-muted)", display: "block", marginBottom: 6, direction: "rtl" }}>
              روزهای مطالعه در هفته: <strong style={{ color: "var(--text-primary)" }}>{settings.studyDaysPerWeek} روز</strong>
            </label>
            <input
              type="range" min={1} max={7} value={settings.studyDaysPerWeek}
              onChange={e => update("studyDaysPerWeek", Number(e.target.value))}
              style={{ width: "100%", accentColor: "var(--accent-primary)" }}
            />
          </div>
          <div>
            <label style={{ fontSize: 12, color: "var(--text-muted)", display: "block", marginBottom: 6, direction: "rtl" }}>
              هدف روزانه: <strong style={{ color: "var(--text-primary)" }}>{settings.dailyGoalMinutes} دقیقه</strong>
            </label>
            <input
              type="range" min={10} max={120} step={5} value={settings.dailyGoalMinutes}
              onChange={e => update("dailyGoalMinutes", Number(e.target.value))}
              style={{ width: "100%", accentColor: "var(--accent-secondary)" }}
            />
          </div>
          {/* Summary */}
          {days !== null && (
            <div style={{
              padding: "12px 16px", borderRadius: 12,
              background: days < 7 ? "rgba(239,68,68,0.08)" : "rgba(34,211,165,0.08)",
              border: `1px solid ${days < 7 ? "rgba(239,68,68,0.25)" : "rgba(34,211,165,0.25)"}`,
              direction: "rtl", fontSize: 13,
            }}>
              <div style={{ fontWeight: 700, color: days < 7 ? "#ef4444" : "#22d3a5" }}>
                ⏰ {days} روز تا آزمون
              </div>
              {planSummary && (
                <div style={{ color: "var(--text-muted)", marginTop: 4, fontSize: 12 }}>{planSummary}</div>
              )}
            </div>
          )}
        </div>
      </SectionCard>

      {/* ── Preferences ── */}
      <SectionCard title="⚙️ ترجیحات">
        <label style={{ display: "flex", alignItems: "center", justifyContent: "space-between", cursor: "pointer", direction: "rtl" }}>
          <span style={{ fontSize: 13, color: "var(--text-secondary)" }}>نمایش فرم ارزشیابی پس از آزمون</span>
          <div
            onClick={() => update("showChapterRating", !settings.showChapterRating)}
            style={{
              width: 44, height: 24, borderRadius: 12, cursor: "pointer",
              background: settings.showChapterRating ? "var(--accent-primary)" : "rgba(255,255,255,0.1)",
              position: "relative", transition: "background 0.2s", flexShrink: 0,
            }}>
            <div style={{
              position: "absolute", top: 2, borderRadius: "50%",
              left: settings.showChapterRating ? "auto" : 2,
              right: settings.showChapterRating ? 2 : "auto",
              width: 20, height: 20, background: "white", transition: "all 0.2s",
            }} />
          </div>
        </label>
      </SectionCard>
    </div>
  );
}

// ── Section Card ──────────────────────────────────────────────────────────────
function SectionCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="glass-card" style={{ marginBottom: 16, padding: "18px 20px" }}>
      <h3 style={{ fontSize: 13, fontWeight: 700, color: "var(--text-primary)", marginBottom: 16, direction: "rtl" }}>
        {title}
      </h3>
      {children}
    </div>
  );
}
