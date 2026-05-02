"use client";

import { useMemo } from "react";
import type { UserProgress } from "@/lib/store";
import { getAccuracy } from "@/lib/store";
import { questions, chapters } from "@/lib/questions";
import { checkExamClearance } from "@/lib/userSettings";

// ─── ProgressChartsPage — گزارشات آماری ──────────────────────────────────────
export default function ProgressChartsPage({ progress, onBack }: { progress: UserProgress; onBack: () => void }) {
  const clearance = checkExamClearance(progress.totalCorrect, progress.totalAnswered, progress.completedQuizzes);
  const accuracy = getAccuracy(progress);

  // Per-chapter accuracy data
  const chapterData = useMemo(() =>
    chapters.filter(c => c.available).map(ch => {
      const stats = progress.chapterStats[String(ch.number)];
      const acc = stats?.answered > 0 ? Math.round((stats.correct / stats.answered) * 100) : null;
      const totalQ = questions.filter(q => q.chapter === ch.number).length;
      return { ch, stats, acc, totalQ };
    }),
    [progress]
  );

  // Attempt history top wrong questions
  const topWrong = useMemo(() => {
    const history = Object.values(progress.attemptHistory ?? {})
      .sort((a, b) => b.wrongCount - a.wrongCount)
      .slice(0, 5);
    return history.map(h => {
      const q = questions.find(q => q.id === h.questionId);
      return { ...h, questionText: q?.question ?? `#${h.questionId}` };
    });
  }, [progress]);

  return (
    <div className="page-wrap">
      {/* Header */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 24 }}>
        <button className="btn-secondary" style={{ padding: "8px 16px", fontSize: 13 }} onClick={onBack}>
          ← بازگشت
        </button>
        <div style={{ textAlign: "center" }}>
          <div style={{ fontSize: 11, fontWeight: 700, color: "var(--accent-primary)", letterSpacing: "0.08em" }}>📊 گزارش پیشرفت</div>
          <div style={{ fontSize: 11, color: "var(--text-muted)" }}>آمار کامل فعالیت</div>
        </div>
        <div style={{ width: 70 }} />
      </div>

      {/* ── Exam Clearance Banner ── */}
      {clearance.cleared && (
        <div style={{
          padding: "16px 20px", borderRadius: 16, marginBottom: 20,
          background: "linear-gradient(135deg, rgba(34,211,165,0.15), rgba(99,102,241,0.1))",
          border: "1px solid rgba(34,211,165,0.4)",
          direction: "rtl", textAlign: "right",
        }}>
          <div style={{ fontSize: 24, marginBottom: 6 }}>🎉</div>
          <div style={{ fontSize: 14, fontWeight: 800, color: "#22d3a5" }}>Exam Clearance!</div>
          <div style={{ fontSize: 13, color: "var(--text-secondary)", marginTop: 4, lineHeight: 1.6 }}>
            {clearance.message}
          </div>
        </div>
      )}

      {/* ── Overview Cards ── */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 10, marginBottom: 20 }}>
        <MiniCard label="دقت کل" value={`${accuracy}%`} color={accuracy >= 80 ? "#22d3a5" : accuracy >= 60 ? "#f59e0b" : "#ef4444"} />
        <MiniCard label="تست کامل" value={String(progress.completedQuizzes)} color="#a78bfa" />
        <MiniCard label="streak 🔥" value={`${progress.streak} روز`} color="#f97316" />
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 10, marginBottom: 20 }}>
        <MiniCard label="سوال پاسخ داده" value={String(progress.totalAnswered)} color="#60a5fa" />
        <MiniCard label="زمان کل" value={formatTime(progress.totalTimeSpent ?? 0)} color="#c084fc" />
      </div>

      {/* ── Accuracy Gauge ── */}
      <div className="glass-card" style={{ padding: "20px 24px", marginBottom: 16, textAlign: "center" }}>
        <div style={{ fontSize: 12, fontWeight: 700, color: "var(--text-muted)", marginBottom: 14 }}>
          📈 دقت کلی
        </div>
        <AccuracyGauge value={accuracy} />
      </div>

      {/* ── Chapter Accuracy Bars ── */}
      <div className="glass-card" style={{ padding: "20px 24px", marginBottom: 16 }}>
        <div style={{ fontSize: 12, fontWeight: 700, color: "var(--text-muted)", marginBottom: 16, direction: "rtl" }}>
          📚 دقت به تفکیک فصل
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {chapterData.map(({ ch, acc }) => (
            <div key={ch.number}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 3, direction: "rtl" }}>
                <span style={{ fontSize: 11, color: "var(--text-secondary)" }}>
                  {ch.icon} ف{ch.number}
                </span>
                <span style={{ fontSize: 11, fontWeight: 700,
                  color: acc === null ? "var(--text-muted)" : acc >= 80 ? "#22d3a5" : acc >= 60 ? "#f59e0b" : "#ef4444" }}>
                  {acc === null ? "—" : `${acc}%`}
                </span>
              </div>
              <div style={{ height: 6, borderRadius: 3, background: "rgba(255,255,255,0.06)", overflow: "hidden" }}>
                <div style={{
                  height: "100%", borderRadius: 3, transition: "width 0.8s ease",
                  width: acc === null ? "0%" : `${acc}%`,
                  background: acc === null ? "transparent"
                    : acc >= 80 ? "#22d3a5"
                    : acc >= 60 ? "#f59e0b"
                    : "#ef4444",
                }} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Most Wrong Questions ── */}
      {topWrong.length > 0 && (
        <div className="glass-card" style={{ padding: "20px 24px", marginBottom: 16 }}>
          <div style={{ fontSize: 12, fontWeight: 700, color: "var(--text-muted)", marginBottom: 16, direction: "rtl" }}>
            ❌ بیشترین اشتباه‌ها
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {topWrong.map((item, i) => (
              <div key={item.questionId} style={{
                display: "flex", alignItems: "center", gap: 10,
                padding: "10px 14px", borderRadius: 10,
                background: "rgba(239,68,68,0.05)", border: "1px solid rgba(239,68,68,0.15)",
              }}>
                <span style={{ fontSize: 18, fontWeight: 800, color: "#ef4444", flexShrink: 0 }}>
                  {i + 1}
                </span>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: 11, color: "#ef4444", marginBottom: 2 }}>
                    ❌ {item.wrongCount} بار · ✓ {item.correctCount} بار
                  </div>
                  <div style={{ fontSize: 11, color: "var(--text-secondary)", direction: "rtl",
                    overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                    {item.questionText}
                  </div>
                </div>
                <div style={{ width: 36, height: 36, borderRadius: "50%", flexShrink: 0, position: "relative" }}>
                  <svg viewBox="0 0 36 36" style={{ width: "100%", height: "100%", transform: "rotate(-90deg)" }}>
                    <circle cx="18" cy="18" r="15" fill="none" stroke="rgba(239,68,68,0.15)" strokeWidth="3" />
                    <circle cx="18" cy="18" r="15" fill="none" stroke="#ef4444" strokeWidth="3"
                      strokeDasharray={`${(item.correctCount / Math.max(1, item.wrongCount + item.correctCount)) * 94} 94`} />
                  </svg>
                  <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 9, fontWeight: 700, color: "#ef4444" }}>
                    {Math.round((item.correctCount / Math.max(1, item.wrongCount + item.correctCount)) * 100)}%
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Not enough data */}
      {progress.totalAnswered < 20 && (
        <div style={{ textAlign: "center", padding: "20px 0", color: "var(--text-muted)", fontSize: 12 }}>
          📊 بعد از حداقل ۲۰ سوال، نمودارهای کامل‌تر نمایش داده می‌شوند.
        </div>
      )}
    </div>
  );
}

// ── Mini Stat Card ────────────────────────────────────────────────────────────
function MiniCard({ label, value, color }: { label: string; value: string; color: string }) {
  return (
    <div style={{
      background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)",
      borderRadius: 14, padding: "14px 16px", textAlign: "center",
    }}>
      <div style={{ fontSize: 20, fontWeight: 800, color }}>{value}</div>
      <div style={{ fontSize: 10, color: "var(--text-muted)", marginTop: 4 }}>{label}</div>
    </div>
  );
}

// ── Accuracy Gauge (SVG arc) ───────────────────────────────────────────────────
function AccuracyGauge({ value }: { value: number }) {
  const circumference = 2 * Math.PI * 60;
  const dashOffset = circumference * (1 - value / 100);
  const color = value >= 80 ? "#22d3a5" : value >= 60 ? "#f59e0b" : "#ef4444";

  return (
    <div style={{ display: "inline-flex", flexDirection: "column", alignItems: "center" }}>
      <svg width="140" height="140" viewBox="0 0 140 140">
        <circle cx="70" cy="70" r="60" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="12" />
        <circle cx="70" cy="70" r="60" fill="none" stroke={color} strokeWidth="12"
          strokeDasharray={circumference} strokeDashoffset={dashOffset}
          strokeLinecap="round"
          style={{ transform: "rotate(-90deg)", transformOrigin: "70px 70px", transition: "stroke-dashoffset 1s ease" }} />
        <text x="70" y="64" textAnchor="middle" fill={color} fontSize="26" fontWeight="800">{value}%</text>
        <text x="70" y="84" textAnchor="middle" fill="var(--text-muted)" fontSize="11">دقت کلی</text>
      </svg>
    </div>
  );
}

// ── Format time ───────────────────────────────────────────────────────────────
function formatTime(seconds: number): string {
  if (seconds < 60) return `${seconds}ث`;
  if (seconds < 3600) return `${Math.floor(seconds / 60)}د`;
  return `${Math.floor(seconds / 3600)}س`;
}
