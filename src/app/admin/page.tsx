"use client";

import { useState, useEffect } from "react";
import { questions, chapters } from "@/lib/questions";
import { getProgress, resetProgress, getAccuracy, type UserProgress,
  getHardQuestionIds, setHardQuestion,
  getRaisedHands, resolveRaisedHand,
  getTagConfigs, saveTagConfigs,
  type QueryPreset } from "@/lib/store";
import type { Question } from "@/lib/types";
import { DEFAULT_TAG_CONFIGS } from "@/lib/types";
import { loadVideos, addVideo, deleteVideo, type VideoItem } from "@/lib/videos";
import { getAllSubscriptions, setPlan, getSubscription, planLabel, type Plan } from "@/lib/subscription";
import { getSession } from "@/lib/auth";

// ─── Types ────────────────────────────────────────────────────────────────────
type AdminTab = "dashboard" | "chapters" | "questions" | "analytics" | "videos" | "subscriptions" | "hard" | "support" | "tags";

// ─── Helpers ─────────────────────────────────────────────────────────────────
function StatCard({ icon, label, value, color }: { icon: string; label: string; value: string | number; color: string }) {
  return (
    <div style={{
      background: "rgba(255,255,255,0.03)", border: `1px solid ${color}30`,
      borderRadius: 16, padding: "20px 24px",
      display: "flex", alignItems: "center", gap: 16,
    }}>
      <div style={{ fontSize: 32 }}>{icon}</div>
      <div>
        <div style={{ fontSize: 26, fontWeight: 900, color }}>{value}</div>
        <div style={{ fontSize: 12, color: "#888", marginTop: 2 }}>{label}</div>
      </div>
    </div>
  );
}

// ─── Dashboard Tab ────────────────────────────────────────────────────────────
function DashboardTab({ progress }: { progress: UserProgress }) {
  const accuracy = getAccuracy(progress);
  const availableChapters = chapters.filter(c => c.available).length;
  const totalQuestions = questions.length;
  const wrongCount = Object.keys(progress.wrongAnswers ?? {}).length;
  const flaggedCount = Object.keys(progress.flaggedQuestions ?? {}).length;

  const recentChapters = chapters
    .filter(c => c.available && progress.chapterStats[String(c.number)]?.answered > 0)
    .map(c => ({
      ...c,
      stats: progress.chapterStats[String(c.number)],
      acc: Math.round((progress.chapterStats[String(c.number)].correct / progress.chapterStats[String(c.number)].answered) * 100),
    }))
    .sort((a, b) => b.stats.answered - a.stats.answered)
    .slice(0, 5);

  return (
    <div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 14, marginBottom: 32 }}>
        <StatCard icon="📚" label="کل سوالات" value={totalQuestions} color="#9333ea" />
        <StatCard icon="✅" label="فصل‌های فعال" value={`${availableChapters}/25`} color="#22d3a5" />
        <StatCard icon="🎯" label="دقت کلی" value={`${accuracy}%`} color="#f97316" />
        <StatCard icon="📝" label="پاسخ داده شده" value={progress.totalAnswered} color="#6366f1" />
        <StatCard icon="❌" label="پاسخ‌های غلط ذخیره" value={wrongCount} color="#f4566a" />
        <StatCard icon="🚩" label="سوالات علامت‌دار" value={flaggedCount} color="#f59e0b" />
      </div>

      <h3 style={{ fontSize: 15, fontWeight: 700, color: "#9333ea", marginBottom: 14, letterSpacing: "0.06em" }}>
        فعال‌ترین فصل‌ها
      </h3>
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        {recentChapters.length === 0 ? (
          <p style={{ color: "#555", fontSize: 13 }}>هنوز هیچ آزمونی انجام نشده</p>
        ) : recentChapters.map(ch => (
          <div key={ch.number} style={{
            background: "rgba(255,255,255,0.03)", border: "1px solid rgba(147,51,234,0.12)",
            borderRadius: 12, padding: "14px 18px",
            display: "flex", alignItems: "center", justifyContent: "space-between",
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <span style={{ fontSize: 22 }}>{ch.icon}</span>
              <div>
                <div style={{ fontWeight: 700, fontSize: 14 }}>فصل {ch.number} — {ch.title}</div>
                <div style={{ fontSize: 12, color: "#888" }}>{ch.stats.answered} پاسخ داده</div>
              </div>
            </div>
            <span style={{
              fontSize: 18, fontWeight: 800,
              color: ch.acc >= 70 ? "#22d3a5" : ch.acc >= 40 ? "#f59e0b" : "#f4566a"
            }}>{ch.acc}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Chapters Tab ─────────────────────────────────────────────────────────────
function ChaptersTab({ progress }: { progress: UserProgress }) {
  return (
    <div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 12 }}>
        {chapters.map(ch => {
          const stats = progress.chapterStats[String(ch.number)];
          const qCount = questions.filter(q => q.chapter === ch.number).length;
          const acc = stats?.answered > 0 ? Math.round((stats.correct / stats.answered) * 100) : null;
          return (
            <div key={ch.number} style={{
              background: ch.available ? "rgba(147,51,234,0.06)" : "rgba(255,255,255,0.02)",
              border: `1px solid ${ch.available ? "rgba(147,51,234,0.2)" : "rgba(255,255,255,0.06)"}`,
              borderRadius: 14, padding: "16px 18px",
              opacity: ch.available ? 1 : 0.5,
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
                <span style={{
                  width: 36, height: 36, borderRadius: 10, display: "flex",
                  alignItems: "center", justifyContent: "center", fontSize: 18,
                  background: ch.available ? "linear-gradient(135deg,#9333ea,#f97316)" : "rgba(255,255,255,0.06)",
                }}>{ch.icon}</span>
                <div>
                  <div style={{ fontSize: 11, color: "#9333ea", fontWeight: 700 }}>فصل {String(ch.number).padStart(2,"0")}</div>
                  <div style={{ fontSize: 13, fontWeight: 700 }}>{ch.title}</div>
                </div>
                <div style={{ marginLeft: "auto", display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 4 }}>
                  <span style={{
                    fontSize: 10, fontWeight: 700, padding: "2px 8px", borderRadius: 20,
                    background: ch.available ? "rgba(34,211,165,0.15)" : "rgba(255,255,255,0.06)",
                    color: ch.available ? "#22d3a5" : "#666",
                  }}>{ch.available ? "فعال" : "قفل"}</span>
                </div>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: 12, color: "#888" }}>
                <span>📝 {qCount} سوال</span>
                {acc !== null && (
                  <span style={{ color: acc >= 70 ? "#22d3a5" : acc >= 40 ? "#f59e0b" : "#f4566a", fontWeight: 700 }}>
                    {acc}% دقت
                  </span>
                )}
                {stats?.answered > 0 && <span>{stats.answered} پاسخ</span>}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ─── Questions Tab ────────────────────────────────────────────────────────────
function QuestionsTab({ progress }: { progress: UserProgress }) {
  const [filterChapter, setFilterChapter] = useState<number | "all">("all");
  const [filterStatus, setFilterStatus] = useState<"all" | "wrong" | "flagged">("all");
  const [search, setSearch] = useState("");
  const [expanded, setExpanded] = useState<number | null>(null);

  const wrongIds = Object.keys(progress.wrongAnswers ?? {}).map(Number);
  const flaggedIds = Object.keys(progress.flaggedQuestions ?? {}).map(Number);

  const filtered = questions.filter(q => {
    if (filterChapter !== "all" && q.chapter !== filterChapter) return false;
    if (filterStatus === "wrong" && !wrongIds.includes(q.id)) return false;
    if (filterStatus === "flagged" && !flaggedIds.includes(q.id)) return false;
    if (search && !q.question.toLowerCase().includes(search.toLowerCase())) return false;
    return true;
  });

  const availableChapterNums = [...new Set(questions.map(q => q.chapter))].sort((a,b) => a - b);

  return (
    <div>
      {/* Filters */}
      <div style={{ display: "flex", gap: 10, marginBottom: 20, flexWrap: "wrap" }}>
        <input
          type="text" value={search} onChange={e => setSearch(e.target.value)}
          placeholder="جستجو در سوالات..."
          style={{
            flex: 1, minWidth: 200, background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(147,51,234,0.2)", borderRadius: 10,
            padding: "9px 14px", color: "white", fontSize: 13, outline: "none",
          }}
        />
        <select value={filterChapter} onChange={e => setFilterChapter(e.target.value === "all" ? "all" : Number(e.target.value))}
          style={{
            background: "rgba(255,255,255,0.04)", border: "1px solid rgba(147,51,234,0.2)",
            borderRadius: 10, padding: "9px 14px", color: "white", fontSize: 13,
          }}>
          <option value="all">همه فصل‌ها</option>
          {availableChapterNums.map(n => (
            <option key={n} value={n}>فصل {n}</option>
          ))}
        </select>
        <select value={filterStatus} onChange={e => setFilterStatus(e.target.value as "all" | "wrong" | "flagged")}
          style={{
            background: "rgba(255,255,255,0.04)", border: "1px solid rgba(147,51,234,0.2)",
            borderRadius: 10, padding: "9px 14px", color: "white", fontSize: 13,
          }}>
          <option value="all">همه</option>
          <option value="wrong">❌ غلط شده</option>
          <option value="flagged">🚩 علامت‌دار</option>
        </select>
      </div>

      <div style={{ fontSize: 12, color: "#888", marginBottom: 12 }}>
        {filtered.length} سوال پیدا شد
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 8, maxHeight: "60vh", overflowY: "auto" }}>
        {filtered.map(q => {
          const isWrong = wrongIds.includes(q.id);
          const isFlagged = flaggedIds.includes(q.id);
          const isExpanded = expanded === q.id;
          return (
            <div key={q.id} style={{
              background: "rgba(255,255,255,0.03)",
              border: `1px solid ${isWrong ? "rgba(244,86,106,0.3)" : isFlagged ? "rgba(245,158,11,0.3)" : "rgba(147,51,234,0.12)"}`,
              borderRadius: 12, overflow: "hidden",
            }}>
              <button onClick={() => setExpanded(isExpanded ? null : q.id)}
                style={{
                  width: "100%", background: "none", border: "none", cursor: "pointer",
                  padding: "12px 16px", display: "flex", alignItems: "center",
                  justifyContent: "space-between", gap: 10, textAlign: "left",
                }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, flex: 1, minWidth: 0 }}>
                  <span style={{ fontSize: 10, color: "#9333ea", fontWeight: 700, flexShrink: 0 }}>
                    #{q.id} · ف{q.chapter}
                  </span>
                  <span style={{ fontSize: 13, color: "white", direction: "rtl", textAlign: "right",
                    overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", flex: 1 }}>
                    {q.question}
                  </span>
                </div>
                <div style={{ display: "flex", gap: 6, flexShrink: 0 }}>
                  {isWrong && <span style={{ fontSize: 10, background: "rgba(244,86,106,0.15)", color: "#f4566a", padding: "2px 6px", borderRadius: 6 }}>غلط</span>}
                  {isFlagged && <span style={{ fontSize: 10, background: "rgba(245,158,11,0.15)", color: "#f59e0b", padding: "2px 6px", borderRadius: 6 }}>🚩</span>}
                  <span style={{ color: "#666", fontSize: 14 }}>{isExpanded ? "▲" : "▼"}</span>
                </div>
              </button>
              {isExpanded && (
                <div style={{ padding: "0 16px 14px", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
                  <div style={{ fontSize: 13, color: "white", direction: "rtl", lineHeight: 1.7, padding: "12px 0 10px" }}>
                    {q.question}
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: 6, marginBottom: 12 }}>
                    {q.options.map((opt, i) => (
                      <div key={i} style={{
                        padding: "8px 12px", borderRadius: 8, fontSize: 12, direction: "rtl",
                        background: i === q.correct ? "rgba(34,211,165,0.1)" : "rgba(255,255,255,0.03)",
                        border: `1px solid ${i === q.correct ? "rgba(34,211,165,0.3)" : "rgba(255,255,255,0.06)"}`,
                        color: i === q.correct ? "#22d3a5" : "#aaa",
                        fontWeight: i === q.correct ? 700 : 400,
                      }}>
                        {String.fromCharCode(65+i)}. {opt}
                        {i === q.correct && " ✓"}
                      </div>
                    ))}
                  </div>
                  <div style={{
                    padding: "10px 12px", borderRadius: 8, background: "rgba(99,102,241,0.08)",
                    border: "1px solid rgba(99,102,241,0.2)", fontSize: 12, color: "#b8a8d4",
                    direction: "rtl", lineHeight: 1.7,
                  }}>
                    💡 {q.explanation}
                  </div>
                  {q.pageRef && (
                    <div style={{ marginTop: 8, fontSize: 11, color: "#666" }}>📄 صفحه {q.pageRef}</div>
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

// ─── Analytics Tab ────────────────────────────────────────────────────────────
function AnalyticsTab({ progress }: { progress: UserProgress }) {
  const availableChapters = chapters.filter(c => c.available);
  const totalTime = progress.totalTimeSpent ?? 0;
  const avgTime = progress.totalAnswered > 0 ? Math.round(totalTime / progress.totalAnswered) : 0;

  return (
    <div>
      {/* Time stats */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 12, marginBottom: 28 }}>
        <StatCard icon="⏱️" label="کل زمان (ثانیه)" value={totalTime} color="#6366f1" />
        <StatCard icon="⚡" label="میانگین زمان/سوال" value={`${avgTime}s`} color="#9333ea" />
        <StatCard icon="🔥" label="روز متوالی" value={progress.streak} color="#f97316" />
      </div>

      {/* Per-chapter bar chart */}
      <h3 style={{ fontSize: 14, fontWeight: 700, color: "#9333ea", marginBottom: 14 }}>عملکرد فصل به فصل</h3>
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        {availableChapters.map(ch => {
          const stats = progress.chapterStats[String(ch.number)] ?? { answered: 0, correct: 0 };
          const acc = stats.answered > 0 ? Math.round((stats.correct / stats.answered) * 100) : 0;
          const totalQ = questions.filter(q => q.chapter === ch.number).length;
          const coverage = Math.round((stats.answered / totalQ) * 100);
          return (
            <div key={ch.number} style={{
              background: "rgba(255,255,255,0.03)", border: "1px solid rgba(147,51,234,0.12)",
              borderRadius: 12, padding: "14px 16px",
            }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <span style={{ fontSize: 18 }}>{ch.icon}</span>
                  <span style={{ fontSize: 13, fontWeight: 600 }}>فصل {ch.number} — {ch.title}</span>
                </div>
                <div style={{ display: "flex", gap: 14, fontSize: 12 }}>
                  <span style={{ color: "#888" }}>{stats.answered}/{totalQ} پاسخ</span>
                  <span style={{ fontWeight: 700,
                    color: acc >= 70 ? "#22d3a5" : acc >= 40 ? "#f59e0b" : stats.answered === 0 ? "#666" : "#f4566a" }}>
                    {stats.answered === 0 ? "—" : `${acc}%`}
                  </span>
                </div>
              </div>
              {/* Accuracy bar */}
              <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
                <span style={{ fontSize: 10, color: "#888", width: 50 }}>دقت</span>
                <div style={{ flex: 1, height: 6, background: "rgba(255,255,255,0.06)", borderRadius: 3, overflow: "hidden" }}>
                  <div style={{
                    height: "100%", borderRadius: 3,
                    width: `${acc}%`,
                    background: acc >= 70 ? "linear-gradient(90deg,#10b981,#059669)"
                      : acc >= 40 ? "linear-gradient(90deg,#f59e0b,#d97706)"
                      : "linear-gradient(90deg,#ef4444,#dc2626)",
                    transition: "width 0.6s cubic-bezier(0.4,0,0.2,1)",
                  }} />
                </div>
              </div>
              {/* Coverage bar */}
              <div style={{ display: "flex", gap: 6, alignItems: "center", marginTop: 4 }}>
                <span style={{ fontSize: 10, color: "#888", width: 50 }}>پوشش</span>
                <div style={{ flex: 1, height: 4, background: "rgba(255,255,255,0.06)", borderRadius: 2, overflow: "hidden" }}>
                  <div style={{
                    height: "100%", borderRadius: 2,
                    width: `${coverage}%`,
                    background: "linear-gradient(90deg,#6366f1,#9333ea)",
                    transition: "width 0.6s cubic-bezier(0.4,0,0.2,1)",
                  }} />
                </div>
                <span style={{ fontSize: 10, color: "#888" }}>{coverage}%</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ─── Videos Tab ──────────────────────────────────────────────────────────────
function VideosTab() {
  const [videos, setVideos] = useState<VideoItem[]>([]);
  const [form, setForm] = useState({ chapterNum: 12, titleFa: "", titleIt: "", url: "", downloadUrl: "", isPremium: false, duration: "", description: "" });
  const [adding, setAdding] = useState(false);

  useEffect(() => { setVideos(loadVideos()); }, []);

  const handleAdd = () => {
    if (!form.titleFa || !form.url) return;
    addVideo({ ...form });
    setVideos(loadVideos());
    setForm({ chapterNum: 12, titleFa: "", titleIt: "", url: "", downloadUrl: "", isPremium: false, duration: "", description: "" });
    setAdding(false);
  };

  const handleDelete = (id: string) => {
    if (!confirm("این ویدیو حذف شود?")) return;
    deleteVideo(id);
    setVideos(loadVideos());
  };

  const inputStyle = { width: "100%", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(147,51,234,0.2)", borderRadius: 8, padding: "8px 12px", color: "white", fontSize: 13, outline: "none" };

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
        <span style={{ fontSize: 13, color: "#888" }}>{videos.length} ویدیو در پایگاه داده</span>
        <button onClick={() => setAdding(!adding)} style={{ padding: "8px 18px", borderRadius: 10, background: "linear-gradient(135deg,#9333ea,#f97316)", border: "none", color: "white", fontWeight: 700, fontSize: 13, cursor: "pointer" }}>
          {adding ? "انصراف" : "+ افزودن ویدیو"}
        </button>
      </div>

      {/* Add form */}
      {adding && (
        <div style={{ background: "rgba(147,51,234,0.06)", border: "1px solid rgba(147,51,234,0.2)", borderRadius: 14, padding: 20, marginBottom: 20, display: "flex", flexDirection: "column", gap: 10 }}>
          <h3 style={{ fontSize: 14, fontWeight: 700, marginBottom: 4 }}>ویدیو جدید</h3>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
            <div><label style={{ fontSize: 11, color: "#888", display: "block", marginBottom: 4 }}>عنوان فارسی *</label><input style={inputStyle} value={form.titleFa} onChange={e => setForm(f => ({ ...f, titleFa: e.target.value }))} placeholder="فاصله ایمنی در جاده" /></div>
            <div><label style={{ fontSize: 11, color: "#888", display: "block", marginBottom: 4 }}>عنوان ایتالیایی</label><input style={inputStyle} value={form.titleIt} onChange={e => setForm(f => ({ ...f, titleIt: e.target.value }))} placeholder="Distanza di Sicurezza" /></div>
            <div><label style={{ fontSize: 11, color: "#888", display: "block", marginBottom: 4 }}>آدرس ویدیو (YouTube/Direct) *</label><input style={inputStyle} value={form.url} onChange={e => setForm(f => ({ ...f, url: e.target.value }))} placeholder="https://youtube.com/watch?v=..." /></div>
            <div><label style={{ fontSize: 11, color: "#888", display: "block", marginBottom: 4 }}>لینک دانلود (اختیاری)</label><input style={inputStyle} value={form.downloadUrl} onChange={e => setForm(f => ({ ...f, downloadUrl: e.target.value }))} placeholder="https://..." /></div>
            <div><label style={{ fontSize: 11, color: "#888", display: "block", marginBottom: 4 }}>فصل</label><select style={inputStyle} value={form.chapterNum} onChange={e => setForm(f => ({ ...f, chapterNum: Number(e.target.value) }))}>{Array.from({length: 25}, (_, i) => <option key={i+1} value={i+1}>فصل {i+1}</option>)}</select></div>
            <div><label style={{ fontSize: 11, color: "#888", display: "block", marginBottom: 4 }}>مدت زمان</label><input style={inputStyle} value={form.duration} onChange={e => setForm(f => ({ ...f, duration: e.target.value }))} placeholder="3:45" /></div>
          </div>
          <div><label style={{ fontSize: 11, color: "#888", display: "block", marginBottom: 4 }}>توضیحات</label><textarea style={{ ...inputStyle, minHeight: 60, resize: "vertical" }} value={form.description} onChange={e => setForm(f => ({ ...f, description: e.target.value }))} placeholder="توضیح کوتاه..." /></div>
          <label style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, cursor: "pointer" }}>
            <input type="checkbox" checked={form.isPremium} onChange={e => setForm(f => ({ ...f, isPremium: e.target.checked }))} />
            ویدیو پریمیوم (فقط کاربران اشتراکی)
          </label>
          <button onClick={handleAdd} style={{ alignSelf: "flex-start", padding: "9px 20px", borderRadius: 10, background: "#22d3a5", border: "none", color: "#0d0a14", fontWeight: 700, cursor: "pointer" }}>ذخیره ویدیو</button>
        </div>
      )}

      {/* Video list */}
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        {videos.map(v => (
          <div key={v.id} style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(147,51,234,0.12)", borderRadius: 12, padding: "14px 18px" }}>
            <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 12 }}>
              <div style={{ flex: 1 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
                  <span style={{ fontSize: 10, color: "#9333ea", fontWeight: 700 }}>فصل {v.chapterNum}</span>
                  {v.isPremium && <span style={{ fontSize: 9, background: "rgba(167,139,250,0.15)", color: "#a78bfa", padding: "1px 6px", borderRadius: 4, fontWeight: 700 }}>P</span>}
                  {v.duration && <span style={{ fontSize: 10, color: "#888" }}>⏱ {v.duration}</span>}
                </div>
                <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 2 }}>{v.titleFa}</div>
                <div style={{ fontSize: 11, color: "#888", fontStyle: "italic", marginBottom: 6 }}>{v.titleIt}</div>
                <a href={v.url} target="_blank" rel="noopener noreferrer" style={{ fontSize: 11, color: "#6366f1", wordBreak: "break-all" }}>{v.url}</a>
              </div>
              <button onClick={() => handleDelete(v.id)} style={{ padding: "6px 12px", borderRadius: 8, background: "rgba(244,86,106,0.1)", border: "1px solid rgba(244,86,106,0.2)", color: "#f4566a", cursor: "pointer", fontSize: 12, flexShrink: 0 }}>حذف</button>
            </div>
          </div>
        ))}
        {videos.length === 0 && <p style={{ color: "#555", fontSize: 13 }}>هنوز ویدیویی اضافه نشده</p>}
      </div>
    </div>
  );
}

// ─── Subscriptions Tab ────────────────────────────────────────────────────────
function SubscriptionsTab() {
  // Known users (from auth.ts) — in production this would come from API
  const knownUsers = ["admin", "aida"];
  const [subs, setSubs] = useState<Record<string, { plan: Plan; expiresAt: string }>>({});

  useEffect(() => {
    const data: Record<string, { plan: Plan; expiresAt: string }> = {};
    knownUsers.forEach(u => {
      const sub = getSubscription(u);
      data[u] = { plan: sub.plan, expiresAt: sub.expiresAt ?? "" };
    });
    setSubs(data);
  }, []);

  const handleSave = (username: string) => {
    const s = subs[username];
    setPlan(username, s.plan, s.expiresAt || undefined);
    alert(`اشتراک ${username} ذخیره شد`);
  };

  return (
    <div>
      <p style={{ fontSize: 13, color: "#888", marginBottom: 20 }}>مدیریت اشتراک کاربران — پریمیوم یا رایگان</p>
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        {knownUsers.map(username => (
          <div key={username} style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(147,51,234,0.15)", borderRadius: 14, padding: "18px 22px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
              <div style={{ width: 38, height: 38, borderRadius: "50%", background: "linear-gradient(135deg,#9333ea,#f97316)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16 }}>👤</div>
              <div>
                <div style={{ fontWeight: 700, fontSize: 15 }}>{username}</div>
                <div style={{ fontSize: 11, color: "#888" }}>{planLabel(subs[username]?.plan ?? "free")}</div>
              </div>
            </div>
            <div style={{ display: "flex", gap: 10, alignItems: "flex-end", flexWrap: "wrap" }}>
              <div>
                <label style={{ fontSize: 11, color: "#888", display: "block", marginBottom: 4 }}>نوع اشتراک</label>
                <select
                  value={subs[username]?.plan ?? "free"}
                  onChange={e => setSubs(s => ({ ...s, [username]: { ...s[username], plan: e.target.value as Plan } }))}
                  style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(147,51,234,0.2)", borderRadius: 8, padding: "7px 12px", color: "white", fontSize: 13 }}>
                  <option value="free">🆓 رایگان</option>
                  <option value="premium">🌟 پریمیوم</option>
                </select>
              </div>
              {subs[username]?.plan === "premium" && (
                <div>
                  <label style={{ fontSize: 11, color: "#888", display: "block", marginBottom: 4 }}>تاریخ انقضا (اختیاری)</label>
                  <input
                    type="date"
                    value={subs[username]?.expiresAt?.slice(0, 10) ?? ""}
                    onChange={e => setSubs(s => ({ ...s, [username]: { ...s[username], expiresAt: e.target.value ? new Date(e.target.value).toISOString() : "" } }))}
                    style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(147,51,234,0.2)", borderRadius: 8, padding: "7px 12px", color: "white", fontSize: 13 }}
                  />
                </div>
              )}
              <button onClick={() => handleSave(username)} style={{ padding: "8px 18px", borderRadius: 10, background: "linear-gradient(135deg,#22d3a5,#059669)", border: "none", color: "#0d0a14", fontWeight: 700, fontSize: 13, cursor: "pointer" }}>ذخیره</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Hard Questions Tab ───────────────────────────────────────────────────────
function HardQuestionsTab() {
  const [hardIds, setHardIds] = useState<number[]>([]);
  const [search, setSearch] = useState("");
  const [filterChapter, setFilterChapter] = useState<number | "all">("all");

  useEffect(() => { setHardIds(getHardQuestionIds()); }, []);

  const toggle = (id: number) => {
    const isNowHard = !hardIds.includes(id);
    setHardQuestion(id, isNowHard);
    setHardIds(getHardQuestionIds());
  };

  const selStyle = { background: "rgba(255,255,255,0.04)", border: "1px solid rgba(147,51,234,0.2)", borderRadius: 8, padding: "8px 12px", color: "white", fontSize: 13 };

  const filtered = questions.filter(q => {
    if (filterChapter !== "all" && q.chapter !== filterChapter) return false;
    if (search && !q.question.toLowerCase().includes(search.toLowerCase())) return false;
    return true;
  });

  const chapterNums = [...new Set(questions.map(q => q.chapter))].sort((a, b) => a - b);

  return (
    <div>
      <p style={{ fontSize: 13, color: "#888", marginBottom: 16 }}>
        🔥 سوالات زیر را به عنوان «سخت» علامت‌گذاری کنید. دانش‌آموز می‌تواند با فیلتر «تست هوشمند» فقط این‌ها را تست بزند.
        <strong style={{ color: "#ef4444", marginRight: 8 }}>{hardIds.length} سوال سخت</strong>
      </p>
      <div style={{ display: "flex", gap: 10, marginBottom: 16, flexWrap: "wrap" }}>
        <input type="text" value={search} onChange={e => setSearch(e.target.value)} placeholder="جستجو..." style={{ ...selStyle, flex: 1, minWidth: 160 }} />
        <select value={filterChapter} onChange={e => setFilterChapter(e.target.value === "all" ? "all" : Number(e.target.value))} style={selStyle}>
          <option value="all">همه فصل‌ها</option>
          {chapterNums.map(n => <option key={n} value={n}>فصل {n}</option>)}
        </select>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 6, maxHeight: "65vh", overflowY: "auto" }}>
        {filtered.map(q => {
          const isHard = hardIds.includes(q.id);
          return (
            <div key={q.id} style={{
              background: isHard ? "rgba(239,68,68,0.06)" : "rgba(255,255,255,0.02)",
              border: `1px solid ${isHard ? "rgba(239,68,68,0.3)" : "rgba(147,51,234,0.1)"}`,
              borderRadius: 10, padding: "10px 14px",
              display: "flex", alignItems: "center", gap: 12,
            }}>
              <button onClick={() => toggle(q.id)} style={{
                width: 32, height: 32, borderRadius: 8, border: "none", cursor: "pointer",
                background: isHard ? "rgba(239,68,68,0.8)" : "rgba(255,255,255,0.06)",
                fontSize: 14, flexShrink: 0,
              }}>{isHard ? "🔥" : "○"}</button>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: 10, color: "#9333ea", marginBottom: 2 }}>#{q.id} · ف{q.chapter}</div>
                <div style={{ fontSize: 12, color: "white", direction: "rtl", textAlign: "right",
                  overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{q.question}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ─── Support / Raised Hand Tab ────────────────────────────────────────────────
function SupportTab() {
  const [hands, setHands] = useState(getRaisedHands());

  const resolve = (questionId: number) => {
    resolveRaisedHand(questionId);
    setHands(getRaisedHands());
  };

  const pending = hands.filter(h => !h.resolved);
  const resolved = hands.filter(h => h.resolved);

  return (
    <div>
      <p style={{ fontSize: 13, color: "#888", marginBottom: 16 }}>
        ✋ سوالاتی که دانش‌آموزان «ابهام دارم» زدند. پس از رفع ابهام، آن را «حل شده» کنید.
        <strong style={{ color: "#a78bfa", marginRight: 8 }}>{pending.length} در انتظار</strong>
      </p>
      <h3 style={{ fontSize: 13, fontWeight: 700, color: "#a78bfa", marginBottom: 10 }}>در انتظار بررسی</h3>
      <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 24 }}>
        {pending.length === 0 && <p style={{ color: "#555", fontSize: 13 }}>ابهامی در انتظار ندارید ✓</p>}
        {pending.map(h => (
          <div key={h.questionId} style={{ background: "rgba(167,139,250,0.06)", border: "1px solid rgba(167,139,250,0.2)", borderRadius: 12, padding: "14px 16px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 12 }}>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 10, color: "#a78bfa", marginBottom: 4 }}>#{h.questionId} · ف{h.chapter} · {new Date(h.sentAt).toLocaleDateString("fa-IR")}</div>
                <div style={{ fontSize: 13, direction: "rtl", textAlign: "right", lineHeight: 1.6, color: "white" }}>{h.question}</div>
              </div>
              <button onClick={() => resolve(h.questionId)} style={{ padding: "6px 14px", borderRadius: 8, background: "rgba(34,211,165,0.1)", border: "1px solid rgba(34,211,165,0.3)", color: "#22d3a5", cursor: "pointer", fontSize: 12, flexShrink: 0 }}>حل شد ✓</button>
            </div>
          </div>
        ))}
      </div>
      {resolved.length > 0 && (
        <>
          <h3 style={{ fontSize: 13, fontWeight: 700, color: "#555", marginBottom: 10 }}>حل شده‌ها ({resolved.length})</h3>
          <div style={{ display: "flex", flexDirection: "column", gap: 6, opacity: 0.5, maxHeight: "30vh", overflowY: "auto" }}>
            {resolved.map(h => (
              <div key={h.questionId} style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 10, padding: "10px 14px" }}>
                <div style={{ fontSize: 10, color: "#666", marginBottom: 2 }}>#{h.questionId}</div>
                <div style={{ fontSize: 12, direction: "rtl", textAlign: "right", color: "#666" }}>{h.question}</div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

// ─── Tag Config Tab ───────────────────────────────────────────────────────────
function TagConfigTab() {
  const [configs, setConfigs] = useState(() => getTagConfigs());

  const update = (idx: number, key: "label" | "color", value: string) => {
    setConfigs(prev => prev.map((c, i) => i === idx ? { ...c, [key]: value } : c));
  };

  const handleSave = () => {
    saveTagConfigs(configs);
    alert("تنظیمات تگ ذخیره شد");
  };

  return (
    <div>
      <p style={{ fontSize: 13, color: "#888", marginBottom: 20 }}>
        🏷️ سه رنگ تگ را که دانش‌آموزان می‌توانند به سوالات اختصاص دهند سفارشی کنید.
      </p>
      <div style={{ display: "flex", flexDirection: "column", gap: 14, marginBottom: 24 }}>
        {configs.map((cfg, idx) => (
          <div key={idx} style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(147,51,234,0.15)", borderRadius: 14, padding: "16px 20px", display: "flex", alignItems: "center", gap: 14 }}>
            <div style={{ width: 36, height: 36, borderRadius: "50%", background: cfg.color, flexShrink: 0 }} />
            <div style={{ flex: 1, display: "flex", gap: 10, flexWrap: "wrap" }}>
              <div>
                <label style={{ fontSize: 11, color: "#888", display: "block", marginBottom: 4 }}>برچسب (فارسی)</label>
                <input value={cfg.label} onChange={e => update(idx, "label", e.target.value)}
                  style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(147,51,234,0.2)", borderRadius: 8, padding: "7px 12px", color: "white", fontSize: 13, outline: "none" }} />
              </div>
              <div>
                <label style={{ fontSize: 11, color: "#888", display: "block", marginBottom: 4 }}>رنگ</label>
                <input type="color" value={cfg.color} onChange={e => update(idx, "color", e.target.value)}
                  style={{ width: 50, height: 36, borderRadius: 8, border: "none", cursor: "pointer", background: "none" }} />
              </div>
            </div>
          </div>
        ))}
      </div>
      <button onClick={handleSave} style={{ padding: "10px 24px", borderRadius: 12, background: "linear-gradient(135deg,#9333ea,#f97316)", border: "none", color: "white", fontWeight: 700, fontSize: 14, cursor: "pointer" }}>
        ذخیره تنظیمات
      </button>
      <div style={{ marginTop: 16, padding: "12px 16px", borderRadius: 10, background: "rgba(99,102,241,0.06)", border: "1px solid rgba(99,102,241,0.15)", fontSize: 12, color: "#888" }}>
        💡 این تگ‌ها در صفحه آزمون با دایره‌های رنگی نشان داده می‌شوند. دانش‌آموز می‌تواند هر سوال را با یکی از این رنگ‌ها علامت‌گذاری کند.
      </div>
    </div>
  );
}

// ─── Main Admin Page ──────────────────────────────────────────────────────────
export default function AdminPage() {
  const [tab, setTab] = useState<AdminTab>("dashboard");
  const [progress, setProgress] = useState<UserProgress>(() => ({
    totalAnswered: 0, totalCorrect: 0, chapterStats: {},
    completedQuizzes: 0, streak: 0, lastQuizDate: null,
    wrongAnswers: {}, flaggedQuestions: {}, totalTimeSpent: 0,
  }));

  useEffect(() => {
    setProgress(getProgress());
  }, []);

  const handleReset = () => {
    if (confirm("همه پیشرفت‌ها پاک شوند؟")) {
      resetProgress();
      setProgress(getProgress());
    }
  };

  const tabs: { id: AdminTab; label: string; icon: string }[] = [
    { id: "dashboard",     label: "داشبورد",   icon: "🏠" },
    { id: "chapters",      label: "فصل‌ها",     icon: "📚" },
    { id: "questions",     label: "سوالات",     icon: "❓" },
    { id: "analytics",     label: "تحلیل",      icon: "📊" },
    { id: "videos",        label: "ویدیوها",    icon: "🎬" },
    { id: "subscriptions", label: "اشتراک‌ها",  icon: "🌟" },
    { id: "hard",          label: "سخت‌ها",    icon: "🔥" },
    { id: "support",       label: "پشتیبانی",  icon: "✋" },
    { id: "tags",          label: "تگ‌رنگ‌ها",  icon: "🏷️" },
  ];

  return (
    <div style={{
      minHeight: "100vh",
      background: "#0d0a14",
      color: "#f5f0ff",
      fontFamily: "system-ui, sans-serif",
    }}>
      {/* Sidebar + Main layout */}
      <div style={{ display: "flex", minHeight: "100vh" }}>

        {/* Sidebar */}
        <aside style={{
          width: 220, flexShrink: 0,
          background: "rgba(0,0,0,0.4)",
          borderRight: "1px solid rgba(147,51,234,0.15)",
          padding: "24px 0",
          display: "flex", flexDirection: "column",
          position: "sticky", top: 0, height: "100vh",
        }}>
          {/* Logo */}
          <div style={{ padding: "0 20px 28px" }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: "#9333ea", letterSpacing: "0.12em", marginBottom: 4 }}>
              PATENTE ITALIANA
            </div>
            <div style={{ fontSize: 18, fontWeight: 900, lineHeight: 1.2 }}>
              پنل مدیریت
            </div>
          </div>

          {/* Nav items */}
          <nav style={{ flex: 1, display: "flex", flexDirection: "column", gap: 4, padding: "0 12px" }}>
            {tabs.map(t => (
              <button key={t.id} onClick={() => setTab(t.id)} style={{
                display: "flex", alignItems: "center", gap: 10,
                padding: "10px 14px", borderRadius: 12, border: "none", cursor: "pointer",
                background: tab === t.id ? "linear-gradient(135deg,rgba(147,51,234,0.25),rgba(249,115,22,0.1))" : "none",
                color: tab === t.id ? "#d8aaff" : "#888",
                fontWeight: tab === t.id ? 700 : 500, fontSize: 14,
                transition: "all 0.2s",
                borderLeft: tab === t.id ? "3px solid #9333ea" : "3px solid transparent",
                textAlign: "left",
              }}>
                <span style={{ fontSize: 18 }}>{t.icon}</span>
                {t.label}
              </button>
            ))}
          </nav>

          {/* Bottom actions */}
          <div style={{ padding: "16px 12px", borderTop: "1px solid rgba(147,51,234,0.1)" }}>
            <a href="/" style={{
              display: "flex", alignItems: "center", gap: 8,
              padding: "10px 14px", borderRadius: 12, color: "#888", fontSize: 13,
              textDecoration: "none", transition: "color 0.2s",
            }}>
              ← بازگشت به اپ
            </a>
            <button onClick={handleReset} style={{
              display: "flex", alignItems: "center", gap: 8,
              padding: "10px 14px", borderRadius: 12, color: "#f4566a", fontSize: 13,
              background: "none", border: "none", cursor: "pointer", width: "100%",
            }}>
              🗑️ ریست پیشرفت
            </button>
          </div>
        </aside>

        {/* Main content */}
        <main style={{ flex: 1, padding: "32px 36px", overflowY: "auto" }}>
          {/* Header */}
          <div style={{ marginBottom: 28 }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <div>
                <h1 style={{ fontSize: 24, fontWeight: 900, marginBottom: 4 }}>
                  {tabs.find(t => t.id === tab)?.icon} {tabs.find(t => t.id === tab)?.label}
                </h1>
                <p style={{ fontSize: 13, color: "#888" }}>
                  {tab === "dashboard" && "نمای کلی وضعیت اپ و پیشرفت کاربر"}
                  {tab === "chapters" && `${chapters.length} فصل — ${chapters.filter(c=>c.available).length} فعال`}
                  {tab === "questions" && `${questions.length} سوال در پایگاه داده`}
                  {tab === "analytics" && "تحلیل عملکرد و آمار دقیق"}
                </p>
              </div>
              <div style={{
                padding: "6px 14px", borderRadius: 20,
                background: "rgba(34,211,165,0.1)", border: "1px solid rgba(34,211,165,0.3)",
                fontSize: 12, color: "#22d3a5", fontWeight: 700,
              }}>
                Live
              </div>
            </div>
          </div>

          {/* Divider */}
          <div style={{ height: 1, background: "rgba(147,51,234,0.1)", marginBottom: 28 }} />

          {/* Tab content */}
          {tab === "dashboard"      && <DashboardTab progress={progress} />}
          {tab === "chapters"        && <ChaptersTab progress={progress} />}
          {tab === "questions"       && <QuestionsTab progress={progress} />}
          {tab === "analytics"       && <AnalyticsTab progress={progress} />}
          {tab === "videos"          && <VideosTab />}
          {tab === "subscriptions"   && <SubscriptionsTab />}
          {tab === "hard"            && <HardQuestionsTab />}
          {tab === "support"         && <SupportTab />}
          {tab === "tags"            && <TagConfigTab />}
        </main>
      </div>
    </div>
  );
}
