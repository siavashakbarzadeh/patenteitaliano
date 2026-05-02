"use client";

import { useState, useMemo } from "react";
import { questions, chapters } from "@/lib/questions";
import type { Question } from "@/lib/types";

// ─── BrowsePage — مرور سوالات با جواب (بدون تست زنی) ────────────────────────
export default function BrowsePage({ onBack }: { onBack: () => void }) {
  const [filterChapter, setFilterChapter] = useState<number | "all">("all");
  const [filterTag, setFilterTag] = useState<string>("all");
  const [showAnswers, setShowAnswers] = useState(true);
  const [expanded, setExpanded] = useState<number | null>(null);
  const [search, setSearch] = useState("");

  // All available chapter numbers
  const chapterNums = [...new Set(questions.map(q => q.chapter))].sort((a, b) => a - b);

  // All tags in selected chapter
  const availableTags = useMemo(() => {
    const src = filterChapter === "all" ? questions : questions.filter(q => q.chapter === filterChapter);
    const tags = new Set<string>();
    src.forEach(q => (q as Question & { tags?: string[] }).tags?.forEach(t => tags.add(t)));
    return [...tags].sort();
  }, [filterChapter]);

  const filtered = useMemo(() => {
    return questions.filter(q => {
      if (filterChapter !== "all" && q.chapter !== filterChapter) return false;
      if (filterTag !== "all" && !(q as Question & { tags?: string[] }).tags?.includes(filterTag)) return false;
      if (search && !q.question.toLowerCase().includes(search.toLowerCase())) return false;
      return true;
    });
  }, [filterChapter, filterTag, search]);

  const selStyle = {
    background: "rgba(255,255,255,0.05)", border: "1px solid rgba(99,102,241,0.2)",
    borderRadius: 10, padding: "9px 14px", color: "var(--text-primary)", fontSize: 13, outline: "none",
  };

  return (
    <div className="page-wrap">
      {/* Header */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 20 }}>
        <button className="btn-secondary" style={{ padding: "8px 16px", fontSize: 13 }} onClick={onBack}>
          ← بازگشت
        </button>
        <div style={{ textAlign: "center" }}>
          <div style={{ fontSize: 11, fontWeight: 700, color: "var(--accent-primary)", letterSpacing: "0.08em" }}>
            مرور سوالات
          </div>
          <div style={{ fontSize: 12, color: "var(--text-muted)" }}>{filtered.length} سوال</div>
        </div>
        <button
          onClick={() => setShowAnswers(!showAnswers)}
          style={{
            padding: "7px 14px", borderRadius: 10, fontSize: 12, fontWeight: 700, cursor: "pointer",
            background: showAnswers ? "rgba(34,211,165,0.1)" : "rgba(255,255,255,0.05)",
            color: showAnswers ? "#22d3a5" : "var(--text-muted)",
            border: `1px solid ${showAnswers ? "rgba(34,211,165,0.3)" : "rgba(255,255,255,0.1)"}`,
          }}
        >
          {showAnswers ? "✓ جواب نمایش" : "جواب پنهان"}
        </button>
      </div>

      {/* Filters */}
      <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 16 }}>
        {/* Search */}
        <input
          type="text" value={search} onChange={e => setSearch(e.target.value)}
          placeholder="🔍 جستجو در سوالات..."
          style={{ ...selStyle, width: "100%" }}
        />
        <div style={{ display: "flex", gap: 8 }}>
          {/* Chapter filter */}
          <select value={filterChapter}
            onChange={e => { setFilterChapter(e.target.value === "all" ? "all" : Number(e.target.value)); setFilterTag("all"); }}
            style={selStyle}>
            <option value="all">همه فصل‌ها</option>
            {chapterNums.map(n => (
              <option key={n} value={n}>فصل {n} — {chapters.find(c => c.number === n)?.title ?? ""}</option>
            ))}
          </select>
          {/* Tag filter */}
          {availableTags.length > 0 && (
            <select value={filterTag} onChange={e => setFilterTag(e.target.value)} style={selStyle}>
              <option value="all">همه مباحث</option>
              {availableTags.map(t => <option key={t} value={t}>{t}</option>)}
            </select>
          )}
        </div>
      </div>

      {/* Question list */}
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        {filtered.length === 0 && (
          <div style={{ textAlign: "center", padding: 40, color: "var(--text-muted)" }}>
            سوالی یافت نشد
          </div>
        )}
        {filtered.map((q, idx) => {
          const qWithMeta = q as Question & { tags?: string[]; pageRef?: string; vocab?: { it: string; fa: string }[] };
          const isOpen = expanded === q.id;
          return (
            <div key={q.id} className="glass-card" style={{ overflow: "hidden", padding: 0 }}>
              {/* Question header */}
              <button
                onClick={() => setExpanded(isOpen ? null : q.id)}
                style={{ width: "100%", background: "none", border: "none", cursor: "pointer",
                  padding: "14px 18px", textAlign: "left", display: "flex", alignItems: "flex-start", gap: 10 }}
              >
                {/* Index */}
                <span style={{ fontSize: 10, fontWeight: 700, color: "var(--accent-primary)",
                  background: "rgba(99,102,241,0.1)", borderRadius: 5, padding: "2px 6px", flexShrink: 0, marginTop: 2 }}>
                  {idx + 1}
                </span>
                {/* Question text */}
                <span style={{ fontSize: 13, color: "var(--text-primary)", direction: "rtl",
                  textAlign: "right", lineHeight: 1.6, flex: 1 }}>
                  {q.question}
                </span>
                {/* Meta badges */}
                <div style={{ display: "flex", flexDirection: "column", gap: 3, flexShrink: 0, alignItems: "flex-end" }}>
                  <span style={{ fontSize: 10, color: "#6366f1", fontWeight: 600 }}>ف{q.chapter}</span>
                  {qWithMeta.pageRef && (
                    <span style={{ fontSize: 9, color: "var(--text-muted)" }}>ص{qWithMeta.pageRef}</span>
                  )}
                  <span style={{ fontSize: 12, color: "var(--text-muted)" }}>{isOpen ? "▲" : "▼"}</span>
                </div>
              </button>

              {/* Expanded content */}
              {isOpen && (
                <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", padding: "12px 18px 16px" }}>
                  {/* Options */}
                  <div style={{ display: "flex", flexDirection: "column", gap: 6, marginBottom: 12 }}>
                    {q.options.map((opt, i) => {
                      const isCorrect = i === q.correct;
                      const showHighlight = showAnswers && isCorrect;
                      return (
                        <div key={i} style={{
                          padding: "9px 14px", borderRadius: 10, fontSize: 13, direction: "rtl",
                          background: showHighlight ? "rgba(34,211,165,0.1)" : "rgba(255,255,255,0.03)",
                          border: `1px solid ${showHighlight ? "rgba(34,211,165,0.35)" : "rgba(255,255,255,0.06)"}`,
                          color: showHighlight ? "#22d3a5" : "var(--text-secondary)",
                          fontWeight: showHighlight ? 700 : 400,
                          display: "flex", alignItems: "center", justifyContent: "space-between",
                        }}>
                          <span>{String.fromCharCode(1575 + i)}. {opt}</span>
                          {showHighlight && <span>✓</span>}
                        </div>
                      );
                    })}
                  </div>

                  {/* Explanation */}
                  {q.explanation && (
                    <div style={{
                      padding: "10px 14px", borderRadius: 10,
                      background: "rgba(99,102,241,0.07)", border: "1px solid rgba(99,102,241,0.2)",
                      fontSize: 12, color: "var(--text-muted)", direction: "rtl", lineHeight: 1.7, marginBottom: 8,
                    }}>
                      💡 {q.explanation}
                    </div>
                  )}

                  {/* Tags + Page ref + Vocab */}
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: 6 }}>
                    {qWithMeta.pageRef && (
                      <span style={{ fontSize: 10, color: "#60a5fa", background: "rgba(96,165,250,0.1)",
                        border: "1px solid rgba(96,165,250,0.2)", borderRadius: 5, padding: "2px 8px" }}>
                        📄 ص {qWithMeta.pageRef}
                      </span>
                    )}
                    {qWithMeta.tags?.map(t => (
                      <button key={t} onClick={e => { e.stopPropagation(); setFilterTag(t); }}
                        style={{ fontSize: 10, color: "#a78bfa", background: "rgba(167,139,250,0.1)",
                          border: "1px solid rgba(167,139,250,0.2)", borderRadius: 5, padding: "2px 8px", cursor: "pointer" }}>
                        #{t}
                      </button>
                    ))}
                  </div>

                  {/* Vocab */}
                  {qWithMeta.vocab && qWithMeta.vocab.length > 0 && (
                    <div style={{ marginTop: 10, display: "flex", flexWrap: "wrap", gap: 6 }}>
                      {qWithMeta.vocab.map((v, vi) => (
                        <span key={vi} style={{ fontSize: 11, padding: "3px 8px", borderRadius: 6,
                          background: "rgba(251,191,36,0.08)", border: "1px solid rgba(251,191,36,0.2)",
                          color: "#fbbf24" }}>
                          {v.italian} = {v.persian}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
