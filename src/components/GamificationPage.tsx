"use client";

import { useMemo } from "react";
import {
  getGamification, xpForNextLevel, getBadge, levelThreshold,
  type GamificationState,
} from "@/lib/gamification";
import type { UserProgress } from "@/lib/store";
import { getAccuracy } from "@/lib/store";
import { getUserSettings } from "@/lib/userSettings";

// ─── Gamification Dashboard Page ──────────────────────────────────────────────
// نظام انگیزشی: XP، سطح، پیشرفت، امتیازدهی، نمودار تفسیر شده

type GamificationPageProps = {
  progress: UserProgress;
  onBack: () => void;
};

export default function GamificationPage({ progress, onBack }: GamificationPageProps) {
  const gm = getGamification();
  const accuracy = getAccuracy(progress);
  const badge = getBadge(gm.level);
  const xpInfo = xpForNextLevel(gm.totalXP);
  const settings = getUserSettings();
  const userName = settings.examDate ? "دانش‌آموز عزیز" : "دانش‌آموز عزیز";

  const recommendations = useMemo(() => getRecommendations(progress, gm, accuracy), [progress, gm, accuracy]);

  return (
    <div className="page-wrap">
      {/* Header */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 24 }}>
        <button className="btn-secondary" style={{ padding: "8px 16px", fontSize: 13 }} onClick={onBack}>
          ← بازگشت
        </button>
        <div style={{ textAlign: "center" }}>
          <div style={{ fontSize: 11, fontWeight: 700, color: "var(--accent-primary)" }}>🏆 نظام انگیزشی</div>
          <div style={{ fontSize: 11, color: "var(--text-muted)" }}>امتیاز · سطح · پیشرفت</div>
        </div>
        <div style={{ width: 70 }} />
      </div>

      {/* ── Hero: Level Card ── */}
      <div style={{
        background: "linear-gradient(135deg, rgba(147,51,234,0.15), rgba(249,115,22,0.1))",
        border: "1px solid rgba(147,51,234,0.3)", borderRadius: 20,
        padding: "24px 20px", marginBottom: 16, textAlign: "center",
      }}>
        <div style={{ fontSize: 56 }}>{badge.emoji}</div>
        <div style={{ fontSize: 22, fontWeight: 800, color: badge.color, marginTop: 4 }}>
          سطح {gm.level} — {badge.title}
        </div>
        <div style={{ fontSize: 13, color: "var(--text-muted)", marginTop: 4 }}>
          {gm.totalXP} XP کل
        </div>

        {/* XP Progress to next level */}
        <div style={{ marginTop: 16, direction: "rtl" }}>
          <div style={{ display: "flex", justifyContent: "space-between", fontSize: 11, color: "var(--text-muted)", marginBottom: 6 }}>
            <span>سطح {gm.level}</span>
            <span>{xpInfo.current} / {xpInfo.needed} XP</span>
            <span>سطح {gm.level + 1}</span>
          </div>
          <div style={{ height: 8, borderRadius: 4, background: "rgba(255,255,255,0.1)", overflow: "hidden" }}>
            <div style={{
              height: "100%", borderRadius: 4,
              width: `${xpInfo.pct}%`,
              background: `linear-gradient(90deg, ${badge.color}, #f97316)`,
              transition: "width 1s ease",
            }} />
          </div>
          <div style={{ fontSize: 11, color: "var(--text-muted)", marginTop: 4, textAlign: "center" }}>
            {xpInfo.needed - xpInfo.current} XP تا سطح بعدی
          </div>
        </div>
      </div>

      {/* ── XP Sources ── */}
      <div className="glass-card" style={{ padding: "18px 20px", marginBottom: 16 }}>
        <h3 style={{ fontSize: 12, fontWeight: 700, color: "var(--text-muted)", marginBottom: 14, direction: "rtl" }}>
          📊 منابع امتیاز شما
        </h3>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 10 }}>
          <XPCard label="ورود روزانه" value={gm.loginXP} icon="📅" color="#60a5fa" />
          <XPCard label="آزمون‌ها" value={gm.quizXP} icon="🎯" color="#a78bfa" />
          <XPCard label="زمان مطالعه" value={gm.timeXP} icon="⏱️" color="#f59e0b" />
        </div>
        <div style={{ marginTop: 12, padding: "10px 14px", borderRadius: 10,
          background: "rgba(249,115,22,0.06)", border: "1px solid rgba(249,115,22,0.15)",
          fontSize: 11, color: "var(--text-muted)", direction: "rtl" }}>
          🔥 streak روزانه: <strong style={{ color: "#f97316" }}>{progress.streak} روز</strong> · 
          روزانه ورود = <strong style={{ color: "#60a5fa" }}>5-20 XP</strong> · 
          آزمون عالی = <strong style={{ color: "#a78bfa" }}>30 XP</strong>
        </div>
      </div>

      {/* ── How to earn more ── */}
      <div className="glass-card" style={{ padding: "18px 20px", marginBottom: 16 }}>
        <h3 style={{ fontSize: 12, fontWeight: 700, color: "var(--text-muted)", marginBottom: 14, direction: "rtl" }}>
          💡 چطور بیشتر XP بگیری؟
        </h3>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {[
            { icon: "📅", text: "هر روز وارد اپ شو → 5 XP (streak هفتگی = 20 XP)" },
            { icon: "🎯", text: "آزمون با دقت ۹۰٪+ → 30 XP" },
            { icon: "⏱️", text: "هر ۲ دقیقه مطالعه = 1 XP" },
            { icon: "🔗", text: "معرفی دوست → 50-100 XP تصادفی" },
          ].map((item, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: 10, direction: "rtl" }}>
              <span style={{ fontSize: 16, flexShrink: 0 }}>{item.icon}</span>
              <span style={{ fontSize: 12, color: "var(--text-secondary)" }}>{item.text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── Personalized Recommendations ── */}
      {recommendations.length > 0 && (
        <div className="glass-card" style={{ padding: "18px 20px", marginBottom: 16 }}>
          <h3 style={{ fontSize: 12, fontWeight: 700, color: "var(--text-muted)", marginBottom: 14, direction: "rtl" }}>
            🤖 تفسیر عملکرد + راهکارها
          </h3>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {recommendations.map((rec, i) => (
              <div key={i} style={{
                padding: "12px 16px", borderRadius: 12,
                background: `rgba(${rec.color},0.06)`, border: `1px solid rgba(${rec.color},0.2)`,
                direction: "rtl",
              }}>
                <div style={{ fontSize: 13, fontWeight: 700, marginBottom: 4 }}>{rec.icon} {rec.title}</div>
                <div style={{ fontSize: 12, color: "var(--text-secondary)", lineHeight: 1.7 }}>{rec.text}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ── Streak messages ── */}
      <div className="glass-card" style={{ padding: "16px 20px" }}>
        <h3 style={{ fontSize: 12, fontWeight: 700, color: "var(--text-muted)", marginBottom: 10, direction: "rtl" }}>
          🔥 وضعیت ورود روزانه
        </h3>
        <div style={{ display: "flex", gap: 6 }}>
          {Array.from({ length: 7 }, (_, i) => {
            const active = i < Math.min(gm.consecutiveDays, 7);
            return (
              <div key={i} style={{
                flex: 1, height: 32, borderRadius: 8, textAlign: "center", lineHeight: "32px",
                background: active ? "rgba(249,115,22,0.3)" : "rgba(255,255,255,0.05)",
                border: `1px solid ${active ? "rgba(249,115,22,0.5)" : "rgba(255,255,255,0.06)"}`,
                fontSize: 14,
              }}>
                {active ? "🔥" : "○"}
              </div>
            );
          })}
        </div>
        <p style={{ fontSize: 11, color: "var(--text-muted)", marginTop: 8, direction: "rtl" }}>
          {gm.consecutiveDays} روز متوالی · هر روز بیا تا streak از دست نره!
        </p>
      </div>
    </div>
  );
}

// ── XP Mini Card ──────────────────────────────────────────────────────────────
function XPCard({ label, value, icon, color }: { label: string; value: number; icon: string; color: string }) {
  return (
    <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)",
      borderRadius: 12, padding: "12px 8px", textAlign: "center" }}>
      <div style={{ fontSize: 20 }}>{icon}</div>
      <div style={{ fontSize: 18, fontWeight: 800, color, marginTop: 4 }}>{value}</div>
      <div style={{ fontSize: 9, color: "var(--text-muted)", marginTop: 2 }}>{label}</div>
    </div>
  );
}

// ── Smart Recommendations ─────────────────────────────────────────────────────
type Recommendation = { icon: string; title: string; text: string; color: string };

function getRecommendations(progress: UserProgress, gm: GamificationState, accuracy: number): Recommendation[] {
  const recs: Recommendation[] = [];

  if (progress.totalAnswered < 30) {
    recs.push({
      icon: "🚀", title: "شروع خوب!", color: "34,211,165",
      text: "هنوز در ابتدای مسیر هستی. هر روز حداقل ۱۰ سوال تمرین کن تا الگوی اشتباهاتت مشخص شود.",
    });
  } else if (accuracy >= 85) {
    recs.push({
      icon: "🏆", title: "عملکرد عالی!", color: "34,211,165",
      text: `دقت ${accuracy}٪ فوق‌العاده است! با آزمون‌های استاندارد ۳۰تایی آمادگیت را در شرایط واقعی بسنج.`,
    });
  } else if (accuracy >= 65) {
    recs.push({
      icon: "📈", title: "پیشرفت خوب", color: "147,51,234",
      text: `دقت ${accuracy}٪ خوب است. با تمرین سوالات «غلط‌های من» دقت‌ات را به ۸۵٪+ برسان.`,
    });
  } else {
    recs.push({
      icon: "💪", title: "نیاز به تمرین بیشتر", color: "249,115,22",
      text: `دقت ${accuracy}٪ هنوز پایین است. ابتدا فصل‌ها را از «📖 مطالعه» بخوان، سپس آزمون بده.`,
    });
  }

  if (progress.streak === 0) {
    recs.push({
      icon: "📅", title: "streak را شروع کن", color: "245,158,11",
      text: "هنوز streak روزانه نداری. هر روز وارد شدن streak می‌سازد و XP اضافه می‌گیری!",
    });
  } else if (progress.streak >= 7) {
    recs.push({
      icon: "🔥", title: `streak ${progress.streak} روزه!`, color: "239,68,68",
      text: "تداوم فوق‌العاده! ادامه بده. streak بلند مدت نشانه یادگیری واقعی است.",
    });
  }

  const totalQuestions = progress.totalAnswered;
  if (totalQuestions > 50 && gm.level < 3) {
    recs.push({
      icon: "⭐", title: "سطحت پایین‌تر از انتظار", color: "147,51,234",
      text: "با دقت بالاتر در آزمون‌ها XP بیشتری می‌گیری. سعی کن هر آزمون با ۸۰٪+ دقت تمام کنی.",
    });
  }

  if (gm.consecutiveDays === 0 && gm.totalXP > 0) {
    recs.push({
      icon: "⚠️", title: "مدتی نبودی!", color: "239,68,68",
      text: "streak‌ات صفر شده. امروز با شروع مجدد می‌توانی از نو بسازیش. فراموش نکن!",
    });
  }

  return recs.slice(0, 3);
}
