"use client";

import { useState } from "react";
import { saveFeedback, type FeedbackEntry } from "@/lib/userSettings";

// ─── RatingModal — ارزشیابی پس از آزمون ──────────────────────────────────────
type RatingModalProps = {
  type: FeedbackEntry["type"];
  chapterNum?: number;
  chapterTitle?: string;
  onClose: () => void;
};

export default function RatingModal({ type, chapterNum, chapterTitle, onClose }: RatingModalProps) {
  const [rating, setRating] = useState<1 | 2 | 3 | 4 | 5 | null>(null);
  const [comment, setComment] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (!rating) return;
    saveFeedback({
      type, chapterNum, rating, comment: comment.trim() || undefined,
      submittedAt: new Date().toISOString(),
    });
    setSubmitted(true);
    setTimeout(onClose, 1500);
  };

  const labels: Record<number, string> = { 1: "ضعیف", 2: "متوسط", 3: "خوب", 4: "خیلی خوب", 5: "عالی" };
  const stars = [1, 2, 3, 4, 5] as const;

  const title = type === "chapter"
    ? `ارزشیابی فصل ${chapterNum}: ${chapterTitle ?? ""}`
    : type === "quiz_batch" ? "ارزشیابی جلسه تست"
    : type === "course_complete" ? "🎉 تبریک! دوره کامل شد"
    : "نظر شما";

  return (
    <>
      {/* Overlay */}
      <div
        onClick={onClose}
        style={{
          position: "fixed", inset: 0, zIndex: 9000,
          background: "rgba(0,0,0,0.7)", backdropFilter: "blur(4px)",
        }}
      />
      {/* Modal */}
      <div style={{
        position: "fixed", zIndex: 9001, inset: 0,
        display: "flex", alignItems: "center", justifyContent: "center", padding: 20,
      }}>
        <div className="glass-card animate-scale-in" style={{
          maxWidth: 400, width: "100%", padding: "28px 24px",
          border: "1px solid rgba(147,51,234,0.3)",
        }}>
          {submitted ? (
            <div style={{ textAlign: "center", padding: "20px 0" }}>
              <div style={{ fontSize: 48 }}>🙏</div>
              <div style={{ fontSize: 16, fontWeight: 700, color: "#22d3a5", marginTop: 12 }}>ممنون از نظرت!</div>
            </div>
          ) : (
            <>
              <div style={{ textAlign: "center", marginBottom: 20 }}>
                <div style={{ fontSize: 13, fontWeight: 700, color: "var(--accent-primary)", direction: "rtl" }}>{title}</div>
                <div style={{ fontSize: 11, color: "var(--text-muted)", marginTop: 4 }}>محتوا و آزمون این فصل را چطور ارزیابی می‌کنی؟</div>
              </div>

              {/* Stars */}
              <div style={{ display: "flex", justifyContent: "center", gap: 10, marginBottom: 20 }}>
                {stars.map(s => (
                  <button key={s} onClick={() => setRating(s)}
                    style={{
                      background: "none", border: "none", cursor: "pointer",
                      fontSize: rating !== null && s <= rating ? 32 : 28,
                      transition: "all 0.15s", filter: rating !== null && s <= rating ? "none" : "grayscale(0.5)",
                    }}>
                    {rating !== null && s <= rating ? "⭐" : "☆"}
                  </button>
                ))}
              </div>
              {rating && (
                <div style={{ textAlign: "center", fontSize: 12, color: "var(--text-secondary)", marginBottom: 16 }}>
                  {labels[rating]}
                </div>
              )}

              {/* Comment */}
              <textarea
                value={comment} onChange={e => setComment(e.target.value)}
                placeholder="نظر اختیاری... (پیشنهاد، انتقاد، سوال)"
                rows={3}
                style={{
                  width: "100%", background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(147,51,234,0.2)", borderRadius: 10,
                  padding: "10px 12px", color: "var(--text-primary)", fontSize: 12,
                  outline: "none", resize: "none", direction: "rtl", fontFamily: "inherit",
                  marginBottom: 16,
                }}
              />

              <div style={{ display: "flex", gap: 8 }}>
                <button onClick={onClose}
                  className="btn-secondary" style={{ flex: 1, padding: "10px 0", fontSize: 13 }}>
                  بعداً
                </button>
                <button onClick={handleSubmit} disabled={!rating}
                  style={{
                    flex: 2, padding: "10px 0", borderRadius: 12, fontSize: 13, fontWeight: 700,
                    cursor: rating ? "pointer" : "not-allowed", border: "none",
                    background: rating ? "linear-gradient(135deg,#9333ea,#f97316)" : "rgba(255,255,255,0.08)",
                    color: rating ? "white" : "var(--text-muted)",
                  }}>
                  ثبت نظر ✓
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
