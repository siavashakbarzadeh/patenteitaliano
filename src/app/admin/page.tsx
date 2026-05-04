"use client";

import { useState, useEffect } from "react";
import { questions, chapters } from "@/lib/questions";
import { getProgress, resetProgress, getAccuracy, type UserProgress,
  getHardQuestionIds, setHardQuestion,
  getRaisedHands, resolveRaisedHand,
  getTagConfigs, saveTagConfigs } from "@/lib/store";
import type { Question } from "@/lib/types";
import { DEFAULT_TAG_CONFIGS } from "@/lib/types";
import { loadVideos, addVideo, deleteVideo, type VideoItem } from "@/lib/videos";
import { getAllSubscriptions, setPlan, getSubscription, planLabel, type Plan } from "@/lib/subscription";
import { getSession, getAllUsers, addUser, updateUser, deleteUser, getUserSections, getSectionAccess, saveSectionAccess, getAllSectionIds, getActivityLog, type UserRecord } from "@/lib/auth";
import { getFeedbackHistory } from "@/lib/userSettings";
import { getSupportRequests, resolveSupportRequest, getGamification } from "@/lib/gamification";
import { getAnnouncements, saveAnnouncement, deleteAnnouncement, getCertificates, issueCertificate, deleteCertificate, getMessages, sendMessage, deleteMessage, getSchedule, saveScheduleEvent, deleteScheduleEvent, type Announcement, type Certificate, type Message, type ScheduleEvent } from "@/lib/lms";
import { getCourses, saveCourse, deleteCourse, getEnrollments, saveEnrollment, deleteEnrollment, getAssignments, saveAssignment, deleteAssignment, getAttendance, saveAttendance, getBadges, saveBadges, getUserBadges, awardBadge, getNotifications, saveNotification, deleteNotification, type Course, type Enrollment, type Assignment, type AttendanceRecord, type Badge, type Notification } from "@/lib/lmsExtended";
import { RolesTab, CategoriesTab, WebinarsTab, QuizzesTab, OrdersTab, SalesTab, MeetingsTab, BlogsTab } from "@/components/AdminTabsBatch1";
import { ForumsTab, ProductsTab, BundlesTab, FormsTab, InstallmentsTab, RewardsTab, NewslettersTab, PagesTab } from "@/components/AdminTabsBatch2";
import { ContactsTab, GiftsTab, CurrenciesTab, UpcomingTab, InstructorRequestsTab, PromotionsTab, PaymentChannelsTab, CashbackTab } from "@/components/AdminTabsBatch3";
import { AiTemplatesTab, RegionsTab, FloatingBarsTab, CommentsTab, ReviewsTab, DocumentsTab, DeleteRequestsTab, NotifTemplatesTab, SystemSettingsTab } from "@/components/AdminTabsBatch4";
import CourseManagerTab from "@/components/CourseManagerTab";

type AdminTab = "dashboard" | "chapters" | "questions" | "analytics" | "videos" | "subscriptions" | "hard" | "support" | "tags" | "feedback" | "requests" | "gamification" | "discounts" | "users" | "access" | "activitylog" | "announcements" | "certificates" | "messages" | "students" | "schedule" | "courses" | "enrollment" | "assignments" | "attendance" | "badges" | "notifications" | "reports" | "roles" | "categories" | "webinars" | "lmsquizzes" | "orders" | "sales" | "meetings" | "blogs" | "forums" | "products" | "bundles" | "forms" | "installments" | "rewards" | "newsletters" | "pages" | "contacts" | "gifts" | "currencies" | "upcoming" | "instructorReqs" | "promotions" | "payChannels" | "cashback" | "aiTemplates" | "regions" | "floatingBars" | "comments" | "reviews" | "documents" | "deleteReqs" | "notifTemplates" | "systemSettings" | "courseManager";

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
  const knownUsers = getAllUsers().map(u => u.username);
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

// ─── Feedback Tab ─────────────────────────────────────────────────────────────
function FeedbackTab() {
  const history = getFeedbackHistory();
  const stars = ["", "⭐", "⭐⭐", "⭐⭐⭐", "⭐⭐⭐⭐", "⭐⭐⭐⭐⭐"];
  const avgRating = history.length > 0
    ? (history.reduce((s, h) => s + h.rating, 0) / history.length).toFixed(1)
    : "—";

  const typeLabel: Record<string, string> = {
    chapter: "فصل", quiz_batch: "تست", course_complete: "دوره", general: "عمومی",
  };

  return (
    <div>
      <div style={{ display: "flex", alignItems: "center", gap: 20, marginBottom: 20, direction: "rtl" }}>
        <div style={{ background: "rgba(251,191,36,0.08)", border: "1px solid rgba(251,191,36,0.2)", borderRadius: 14, padding: "14px 20px", textAlign: "center" }}>
          <div style={{ fontSize: 28, fontWeight: 800, color: "#fbbf24" }}>{avgRating}</div>
          <div style={{ fontSize: 10, color: "#888" }}>میانگین امتیاز</div>
        </div>
        <div>
          <div style={{ fontSize: 14, fontWeight: 700, color: "var(--text-primary)" }}>{history.length} نظر دریافتی</div>
          <div style={{ fontSize: 12, color: "#888", marginTop: 4 }}>از ارزشیابی‌های دانش‌آموزان</div>
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 8, maxHeight: "65vh", overflowY: "auto" }}>
        {history.length === 0 && <p style={{ color: "#555", fontSize: 13 }}>هنوز ارزشیابی‌ای ثبت نشده است.</p>}
        {history.map((h, i) => (
          <div key={i} style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(251,191,36,0.15)", borderRadius: 12, padding: "12px 16px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 4 }}>
              <span style={{ fontSize: 12, color: "#fbbf24" }}>{stars[h.rating]}</span>
              <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                {h.chapterNum && <span style={{ fontSize: 10, color: "#9333ea" }}>ف{h.chapterNum}</span>}
                <span style={{ fontSize: 10, color: "#555" }}>{typeLabel[h.type] ?? h.type}</span>
                <span style={{ fontSize: 10, color: "#444" }}>{new Date(h.submittedAt).toLocaleDateString("fa-IR")}</span>
              </div>
            </div>
            {h.comment && (
              <div style={{ fontSize: 12, direction: "rtl", textAlign: "right", color: "var(--text-secondary)", lineHeight: 1.6 }}>
                {h.comment}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Requests Tab (درخواست‌های کاربران) ───────────────────────────────────────
function RequestsTab() {
  const [requests, setRequests] = useState(() => getSupportRequests());

  const typeLabel: Record<string, string> = {
    class_test: "کلاس تست", online_course: "دوره آنلاین",
    collaboration: "همکاری", suggestion: "پیشنهاد", contact: "تماس",
  };
  const typeColor: Record<string, string> = {
    class_test: "#60a5fa", online_course: "#a78bfa",
    collaboration: "#22d3a5", suggestion: "#fbbf24", contact: "#f97316",
  };

  const handleResolve = (id: string) => {
    resolveSupportRequest(id);
    setRequests(getSupportRequests());
  };

  const pending = requests.filter(r => !r.resolved);
  const resolved = requests.filter(r => r.resolved);

  return (
    <div>
      <div style={{ display: "flex", gap: 14, marginBottom: 20, direction: "rtl" }}>
        <div style={{ background: "rgba(239,68,68,0.08)", border: "1px solid rgba(239,68,68,0.2)", borderRadius: 12, padding: "12px 18px", textAlign: "center" }}>
          <div style={{ fontSize: 22, fontWeight: 800, color: "#ef4444" }}>{pending.length}</div>
          <div style={{ fontSize: 10, color: "#888" }}>در انتظار</div>
        </div>
        <div style={{ background: "rgba(34,211,165,0.08)", border: "1px solid rgba(34,211,165,0.2)", borderRadius: 12, padding: "12px 18px", textAlign: "center" }}>
          <div style={{ fontSize: 22, fontWeight: 800, color: "#22d3a5" }}>{resolved.length}</div>
          <div style={{ fontSize: 10, color: "#888" }}>رسیدگی شده</div>
        </div>
      </div>

      {requests.length === 0 && (
        <p style={{ color: "#555", fontSize: 13, direction: "rtl" }}>هنوز درخواستی ثبت نشده است.</p>
      )}

      <div style={{ display: "flex", flexDirection: "column", gap: 8, maxHeight: "65vh", overflowY: "auto" }}>
        {requests.map(r => (
          <div key={r.id} style={{
            background: r.resolved ? "rgba(255,255,255,0.02)" : "rgba(255,255,255,0.04)",
            border: `1px solid ${r.resolved ? "rgba(255,255,255,0.08)" : "rgba(147,51,234,0.2)"}`,
            borderRadius: 12, padding: "12px 16px",
            opacity: r.resolved ? 0.6 : 1,
          }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }}>
              <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                {!r.resolved && (
                  <button onClick={() => handleResolve(r.id)}
                    style={{ padding: "4px 10px", borderRadius: 8, fontSize: 10, cursor: "pointer",
                      background: "rgba(34,211,165,0.15)", color: "#22d3a5", border: "1px solid rgba(34,211,165,0.3)", fontWeight: 700 }}>
                    ✓ رسیدگی شد
                  </button>
                )}
                {r.resolved && <span style={{ fontSize: 10, color: "#22d3a5" }}>✓ رسیدگی شد</span>}
              </div>
              <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                <span style={{ fontSize: 10, padding: "2px 8px", borderRadius: 6,
                  background: `rgba(${typeColor[r.type]?.replace("#","")},0.1)`,
                  color: typeColor[r.type] || "#888" }}>
                  {typeLabel[r.type] || r.type}
                </span>
                <span style={{ fontSize: 10, color: "#444" }}>
                  {new Date(r.submittedAt).toLocaleDateString("fa-IR")}
                </span>
              </div>
            </div>
            <div style={{ direction: "rtl", textAlign: "right", fontSize: 12, color: "var(--text-secondary)" }}>
              {r.name && <div style={{ fontWeight: 600, marginBottom: 2 }}>{r.name} {r.phone && `· ${r.phone}`} {r.email && `· ${r.email}`}</div>}
              {r.message && <div style={{ color: "var(--text-muted)" }}>{r.message}</div>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Gamification Admin Tab (آمار نظام انگیزشی) ─────────────────────────────
function GamificationAdminTab() {
  const gm = getGamification();
  const badge = {1:"🐣",2:"🚗",3:"📚",4:"🎯",5:"⭐",6:"🏆",7:"💎",8:"🦋",9:"🌟",10:"👑"};

  const rows: { label: string; value: string | number; icon: string }[] = [
    { icon: "⭐", label: "کل XP", value: gm.totalXP },
    { icon: "📊", label: "سطح", value: `${badge[Math.min(gm.level,10) as keyof typeof badge] ?? "👑"} سطح ${gm.level}` },
    { icon: "📅", label: "XP از ورود روزانه", value: gm.loginXP },
    { icon: "🎯", label: "XP از آزمون‌ها", value: gm.quizXP },
    { icon: "⏱️", label: "XP از زمان مطالعه", value: gm.timeXP },
    { icon: "🔥", label: "streak روزانه", value: `${gm.consecutiveDays} روز` },
    { icon: "🔗", label: "تعداد معرفی‌ها", value: gm.referralCount },
    { icon: "📱", label: "آخرین ورود", value: gm.lastLoginDate ? new Date(gm.lastLoginDate).toLocaleDateString("fa-IR") : "—" },
  ];

  return (
    <div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
        {rows.map((row, i) => (
          <div key={i} style={{
            background: "rgba(255,255,255,0.03)", border: "1px solid rgba(147,51,234,0.12)",
            borderRadius: 12, padding: "14px 16px", direction: "rtl",
          }}>
            <div style={{ fontSize: 10, color: "var(--text-muted)", marginBottom: 4 }}>{row.icon} {row.label}</div>
            <div style={{ fontSize: 18, fontWeight: 800, color: "var(--text-primary)" }}>{row.value}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Discount Codes Tab ───────────────────────────────────────────────────────
function DiscountCodesTab() {
  const { getAllDiscountCodes, createDiscountCode, deleteDiscountCode, toggleCodeActive } = require("@/lib/discountCodes");
  const [codes, setCodes] = useState(() => getAllDiscountCodes());
  const [form, setForm] = useState({ code: "", discountPercent: 20, description: "", expiresAt: "", maxUses: "" });
  const [showForm, setShowForm] = useState(false);

  const refresh = () => setCodes(getAllDiscountCodes());

  const handleCreate = () => {
    if (!form.code.trim()) return;
    createDiscountCode({
      code: form.code.toUpperCase().trim(),
      discountPercent: form.discountPercent,
      description: form.description,
      expiresAt: form.expiresAt || null,
      maxUses: form.maxUses ? parseInt(form.maxUses) : null,
      type: "admin",
      active: true,
    });
    setForm({ code: "", discountPercent: 20, description: "", expiresAt: "", maxUses: "" });
    setShowForm(false);
    refresh();
  };

  const inputStyle = {
    width: "100%", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(147,51,234,0.2)",
    borderRadius: 8, padding: "8px 12px", color: "var(--text-primary)", fontSize: 12,
    outline: "none", direction: "rtl" as const, fontFamily: "inherit", marginBottom: 8,
  };

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16, direction: "rtl" }}>
        <div style={{ fontSize: 13, fontWeight: 700, color: "var(--text-primary)" }}>{codes.length} کد تخفیف</div>
        <button onClick={() => setShowForm(!showForm)}
          style={{ padding: "8px 16px", borderRadius: 10, fontSize: 12, cursor: "pointer", fontWeight: 700,
            background: "linear-gradient(135deg,#9333ea,#f97316)", color: "white", border: "none" }}>
          + کد جدید
        </button>
      </div>

      {showForm && (
        <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(147,51,234,0.2)",
          borderRadius: 14, padding: "16px", marginBottom: 16 }}>
          <input style={inputStyle} placeholder="کد تخفیف (مثل: NOROUZ30)" value={form.code}
            onChange={e => setForm(p => ({ ...p, code: e.target.value.toUpperCase() }))} />
          <input style={inputStyle} type="number" placeholder="درصد تخفیف" value={form.discountPercent}
            onChange={e => setForm(p => ({ ...p, discountPercent: parseInt(e.target.value) }))} />
          <input style={inputStyle} placeholder="توضیح (مثل: کد مناسبتی نوروز)" value={form.description}
            onChange={e => setForm(p => ({ ...p, description: e.target.value }))} />
          <input style={inputStyle} type="date" placeholder="تاریخ انقضا (اختیاری)" value={form.expiresAt}
            onChange={e => setForm(p => ({ ...p, expiresAt: e.target.value }))} />
          <input style={inputStyle} type="number" placeholder="حداکثر استفاده (خالی = نامحدود)" value={form.maxUses}
            onChange={e => setForm(p => ({ ...p, maxUses: e.target.value }))} />
          <button onClick={handleCreate} disabled={!form.code.trim()}
            style={{ width: "100%", padding: "10px 0", borderRadius: 10, fontSize: 13, fontWeight: 700,
              background: "linear-gradient(135deg,#9333ea,#f97316)", color: "white", border: "none", cursor: "pointer" }}>
            ایجاد کد
          </button>
        </div>
      )}

      <div style={{ display: "flex", flexDirection: "column", gap: 8, maxHeight: "55vh", overflowY: "auto" }}>
        {codes.map((c: { code: string; discountPercent: number; description: string; type: string; usedCount: number; maxUses: number|null; expiresAt: string|null; active: boolean }, i: number) => (
          <div key={i} style={{
            background: "rgba(255,255,255,0.03)", border: `1px solid ${c.active ? "rgba(147,51,234,0.2)" : "rgba(255,255,255,0.05)"}`,
            borderRadius: 12, padding: "12px 16px", opacity: c.active ? 1 : 0.5,
          }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 4 }}>
              <div style={{ display: "flex", gap: 6 }}>
                <button onClick={() => { toggleCodeActive(c.code); refresh(); }}
                  style={{ padding: "3px 8px", borderRadius: 6, fontSize: 9, cursor: "pointer",
                    background: c.active ? "rgba(34,211,165,0.15)" : "rgba(239,68,68,0.15)",
                    color: c.active ? "#22d3a5" : "#ef4444", border: "none" }}>
                  {c.active ? "فعال" : "غیرفعال"}
                </button>
                <button onClick={() => { deleteDiscountCode(c.code); refresh(); }}
                  style={{ padding: "3px 8px", borderRadius: 6, fontSize: 9, cursor: "pointer",
                    background: "rgba(239,68,68,0.1)", color: "#ef4444", border: "none" }}>
                  حذف
                </button>
              </div>
              <div style={{ display: "flex", gap: 8, alignItems: "center", direction: "rtl" }}>
                <code style={{ fontSize: 14, fontWeight: 800, color: "#fbbf24", letterSpacing: "0.1em" }}>{c.code}</code>
                <span style={{ fontSize: 12, color: "#22d3a5" }}>{c.discountPercent}٪</span>
              </div>
            </div>
            <div style={{ direction: "rtl", fontSize: 11, color: "var(--text-muted)" }}>
              {c.description} · استفاده: {c.usedCount}{c.maxUses ? `/${c.maxUses}` : ""} 
              {c.expiresAt && ` · انقضا: ${new Date(c.expiresAt).toLocaleDateString("fa-IR")}`}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Users Tab ────────────────────────────────────────────────────────────────
function UsersTab() {
  const [users, setUsers] = useState<UserRecord[]>(() => getAllUsers());
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({ username: "", password: "", displayName: "", role: "student" as "admin" | "student" });
  const [editingUser, setEditingUser] = useState<string | null>(null);
  const [editForm, setEditForm] = useState({ password: "", displayName: "", role: "student" as "admin" | "student" });

  const refresh = () => setUsers(getAllUsers());
  const inputStyle = { width: "100%", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(147,51,234,0.2)", borderRadius: 8, padding: "8px 12px", color: "white", fontSize: 13, outline: "none" };

  const handleAdd = () => {
    if (!form.username.trim() || !form.password.trim()) return;
    const ok = addUser({ username: form.username.trim().toLowerCase(), password: form.password, displayName: form.displayName || form.username, role: form.role });
    if (!ok) { alert("این نام کاربری قبلاً وجود دارد"); return; }
    setForm({ username: "", password: "", displayName: "", role: "student" });
    setShowForm(false);
    refresh();
  };

  const handleSaveEdit = (username: string) => {
    const updates: Partial<Omit<UserRecord, "username">> = {};
    if (editForm.password) updates.password = editForm.password;
    if (editForm.displayName) updates.displayName = editForm.displayName;
    updates.role = editForm.role;
    updateUser(username, updates);
    setEditingUser(null);
    refresh();
  };

  const handleDelete = (username: string) => {
    if (!confirm(`کاربر ${username} حذف شود؟`)) return;
    deleteUser(username);
    refresh();
  };

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20, direction: "rtl" }}>
        <span style={{ fontSize: 13, color: "#888" }}>{users.length} کاربر</span>
        <button onClick={() => setShowForm(!showForm)} style={{ padding: "8px 18px", borderRadius: 10, background: "linear-gradient(135deg,#9333ea,#f97316)", border: "none", color: "white", fontWeight: 700, fontSize: 13, cursor: "pointer" }}>
          {showForm ? "انصراف" : "+ کاربر جدید"}
        </button>
      </div>

      {showForm && (
        <div style={{ background: "rgba(147,51,234,0.06)", border: "1px solid rgba(147,51,234,0.2)", borderRadius: 14, padding: 20, marginBottom: 20, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
          <div><label style={{ fontSize: 11, color: "#888", display: "block", marginBottom: 4 }}>نام کاربری *</label><input style={inputStyle} value={form.username} onChange={e => setForm(f => ({ ...f, username: e.target.value }))} placeholder="username" /></div>
          <div><label style={{ fontSize: 11, color: "#888", display: "block", marginBottom: 4 }}>رمز عبور *</label><input style={inputStyle} type="password" value={form.password} onChange={e => setForm(f => ({ ...f, password: e.target.value }))} placeholder="password" /></div>
          <div><label style={{ fontSize: 11, color: "#888", display: "block", marginBottom: 4 }}>نام نمایشی</label><input style={inputStyle} value={form.displayName} onChange={e => setForm(f => ({ ...f, displayName: e.target.value }))} placeholder="Display Name" /></div>
          <div><label style={{ fontSize: 11, color: "#888", display: "block", marginBottom: 4 }}>نقش</label><select style={inputStyle} value={form.role} onChange={e => setForm(f => ({ ...f, role: e.target.value as "admin" | "student" }))}><option value="student">دانشجو</option><option value="admin">مدیر</option></select></div>
          <button onClick={handleAdd} style={{ gridColumn: "1/-1", padding: "9px 20px", borderRadius: 10, background: "#22d3a5", border: "none", color: "#0d0a14", fontWeight: 700, cursor: "pointer" }}>ذخیره کاربر</button>
        </div>
      )}

      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        {users.map(u => (
          <div key={u.username} style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(147,51,234,0.12)", borderRadius: 12, padding: "14px 18px" }}>
            {editingUser === u.username ? (
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr auto", gap: 8, alignItems: "end" }}>
                <div><label style={{ fontSize: 10, color: "#888" }}>نام نمایشی</label><input style={inputStyle} value={editForm.displayName} onChange={e => setEditForm(f => ({ ...f, displayName: e.target.value }))} /></div>
                <div><label style={{ fontSize: 10, color: "#888" }}>رمز جدید (خالی=بدون تغییر)</label><input style={inputStyle} type="password" value={editForm.password} onChange={e => setEditForm(f => ({ ...f, password: e.target.value }))} /></div>
                <div><label style={{ fontSize: 10, color: "#888" }}>نقش</label><select style={inputStyle} value={editForm.role} onChange={e => setEditForm(f => ({ ...f, role: e.target.value as "admin" | "student" }))}><option value="student">دانشجو</option><option value="admin">مدیر</option></select></div>
                <div style={{ display: "flex", gap: 6 }}>
                  <button onClick={() => handleSaveEdit(u.username)} style={{ padding: "6px 12px", borderRadius: 8, background: "rgba(34,211,165,0.15)", border: "1px solid rgba(34,211,165,0.3)", color: "#22d3a5", cursor: "pointer", fontSize: 11 }}>ذخیره</button>
                  <button onClick={() => setEditingUser(null)} style={{ padding: "6px 12px", borderRadius: 8, background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", color: "#888", cursor: "pointer", fontSize: 11 }}>لغو</button>
                </div>
              </div>
            ) : (
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <div style={{ width: 38, height: 38, borderRadius: "50%", background: u.role === "admin" ? "linear-gradient(135deg,#9333ea,#f97316)" : "rgba(99,102,241,0.2)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16 }}>{u.role === "admin" ? "👑" : "👤"}</div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: 14 }}>{u.displayName} <span style={{ fontSize: 11, color: "#888" }}>@{u.username}</span></div>
                    <div style={{ display: "flex", gap: 6, marginTop: 2 }}>
                      <span style={{ fontSize: 10, padding: "1px 8px", borderRadius: 6, background: u.role === "admin" ? "rgba(147,51,234,0.15)" : "rgba(99,102,241,0.1)", color: u.role === "admin" ? "#c084fc" : "#818cf8" }}>{u.role === "admin" ? "مدیر" : "دانشجو"}</span>
                      <span style={{ fontSize: 10, color: "#555" }}>رمز: {'•'.repeat(u.password.length)}</span>
                    </div>
                  </div>
                </div>
                <div style={{ display: "flex", gap: 6 }}>
                  <button onClick={() => { setEditingUser(u.username); setEditForm({ password: "", displayName: u.displayName, role: u.role }); }} style={{ padding: "5px 10px", borderRadius: 8, background: "rgba(99,102,241,0.1)", border: "1px solid rgba(99,102,241,0.2)", color: "#818cf8", cursor: "pointer", fontSize: 11 }}>ویرایش</button>
                  {u.username !== "admin" && <button onClick={() => handleDelete(u.username)} style={{ padding: "5px 10px", borderRadius: 8, background: "rgba(244,86,106,0.1)", border: "1px solid rgba(244,86,106,0.2)", color: "#f4566a", cursor: "pointer", fontSize: 11 }}>حذف</button>}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Section Access Tab ───────────────────────────────────────────────────────
function SectionAccessTab() {
  const [access, setAccess] = useState(() => getSectionAccess());
  const users = getAllUsers();
  const allSections = getAllSectionIds();

  const sectionLabels: Record<string, string> = {
    patente: "🚗 Patente Italiana",
    italiano: "💬 Italiano per Argomenti",
    espresso1: "☕ Espresso 1 (A1)",
    espresso2: "☕ Espresso 2 (A2)",
    espresso3: "☕ Espresso 3 (B1)",
    espresso4: "☕ Espresso 4 (B2)",
    espresso5: "☕ Espresso 5 (C1)",
    espresso6: "☕ Espresso 6 (C2)",
  };

  const toggle = (username: string, section: string) => {
    setAccess(prev => {
      const current = prev[username] || ["patente"];
      const next = current.includes(section)
        ? current.filter(s => s !== section)
        : [...current, section];
      return { ...prev, [username]: next };
    });
  };

  const handleSave = () => {
    saveSectionAccess(access);
    alert("دسترسی‌ها ذخیره شد");
  };

  return (
    <div>
      <p style={{ fontSize: 13, color: "#888", marginBottom: 20, direction: "rtl" }}>
        🔐 تعیین کنید هر کاربر به چه بخش‌هایی دسترسی داشته باشد. بخش‌های انتخاب‌نشده در صفحه اصلی نمایش داده نمی‌شوند.
      </p>
      <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 20 }}>
        {users.map(u => {
          const userAccess = access[u.username] || ["patente"];
          return (
            <div key={u.username} style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(147,51,234,0.12)", borderRadius: 14, padding: "16px 20px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
                <div style={{ width: 32, height: 32, borderRadius: "50%", background: "linear-gradient(135deg,#9333ea,#f97316)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14 }}>{u.role === "admin" ? "👑" : "👤"}</div>
                <div style={{ fontWeight: 700, fontSize: 14 }}>{u.displayName} <span style={{ fontSize: 11, color: "#888" }}>@{u.username}</span></div>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                {allSections.map(sec => {
                  const active = userAccess.includes(sec);
                  return (
                    <button key={sec} onClick={() => toggle(u.username, sec)} style={{
                      padding: "5px 12px", borderRadius: 8, fontSize: 11, cursor: "pointer",
                      background: active ? "rgba(34,211,165,0.12)" : "rgba(255,255,255,0.03)",
                      border: `1px solid ${active ? "rgba(34,211,165,0.3)" : "rgba(255,255,255,0.08)"}`,
                      color: active ? "#22d3a5" : "#555", fontWeight: active ? 700 : 400,
                    }}>{active ? "✓ " : ""}{sectionLabels[sec] || sec}</button>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
      <button onClick={handleSave} style={{ padding: "10px 28px", borderRadius: 12, background: "linear-gradient(135deg,#9333ea,#f97316)", border: "none", color: "white", fontWeight: 700, fontSize: 14, cursor: "pointer" }}>
        ذخیره دسترسی‌ها
      </button>
    </div>
  );
}

// ─── Activity Log Tab ─────────────────────────────────────────────────────────
function ActivityLogTab() {
  const [log] = useState(() => getActivityLog());
  const actionLabels: Record<string, string> = { login: "🟢 ورود", logout: "🔴 خروج" };

  return (
    <div>
      <p style={{ fontSize: 13, color: "#888", marginBottom: 16, direction: "rtl" }}>
        📋 آخرین {log.length} فعالیت ورود/خروج کاربران
      </p>
      <div style={{ display: "flex", flexDirection: "column", gap: 6, maxHeight: "70vh", overflowY: "auto" }}>
        {log.length === 0 && <p style={{ color: "#555", fontSize: 13 }}>هنوز فعالیتی ثبت نشده</p>}
        {log.map((entry, i) => (
          <div key={i} style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(147,51,234,0.08)", borderRadius: 10, padding: "10px 14px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <span style={{ fontSize: 13 }}>{actionLabels[entry.action] || entry.action}</span>
              <span style={{ fontWeight: 700, fontSize: 13 }}>{entry.username}</span>
            </div>
            <span style={{ fontSize: 11, color: "#555" }}>
              {new Date(entry.timestamp).toLocaleDateString("fa-IR")} · {new Date(entry.timestamp).toLocaleTimeString("fa-IR", { hour: "2-digit", minute: "2-digit" })}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Students Overview Tab ────────────────────────────────────────────────────
function StudentsTab({ progress }: { progress: UserProgress }) {
  const users = getAllUsers().filter(u => u.role === "student");
  const log = getActivityLog();
  const certs = getCertificates();

  return (
    <div>
      <p style={{ fontSize: 13, color: "#888", marginBottom: 20, direction: "rtl" }}>🎓 نمای کلی وضعیت هر دانش‌آموز</p>
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        {users.map(u => {
          const userLog = log.filter(l => l.username === u.username);
          const lastLogin = userLog.find(l => l.action === "login");
          const sections = getUserSections(u.username);
          const userCerts = certs.filter(c => c.username === u.username);
          return (
            <div key={u.username} style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(147,51,234,0.12)", borderRadius: 16, padding: "20px 22px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 14 }}>
                <div style={{ width: 48, height: 48, borderRadius: "50%", background: "linear-gradient(135deg,#6366f1,#9333ea)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20 }}>👤</div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 800, fontSize: 16 }}>{u.displayName} <span style={{ fontSize: 11, color: "#888" }}>@{u.username}</span></div>
                  <div style={{ fontSize: 11, color: "#888", marginTop: 2 }}>آخرین ورود: {lastLogin ? new Date(lastLogin.timestamp).toLocaleDateString("fa-IR") : "—"}</div>
                </div>
                <div style={{ textAlign: "center" }}>
                  <div style={{ fontSize: 22, fontWeight: 900, color: "#22d3a5" }}>{userCerts.length}</div>
                  <div style={{ fontSize: 10, color: "#888" }}>گواهی</div>
                </div>
              </div>
              <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 10 }}>
                {sections.map(s => (
                  <span key={s} style={{ fontSize: 10, padding: "2px 8px", borderRadius: 6, background: "rgba(147,51,234,0.1)", color: "#c084fc" }}>{s}</span>
                ))}
              </div>
              <div style={{ display: "flex", gap: 10, fontSize: 11, color: "#888" }}>
                <span>🔑 ورود: {userLog.filter(l => l.action === "login").length} بار</span>
                <span>🎖️ گواهی: {userCerts.map(c => c.courseName).join(", ") || "—"}</span>
              </div>
            </div>
          );
        })}
        {users.length === 0 && <p style={{ color: "#555", fontSize: 13 }}>هنوز دانش‌آموزی ثبت نشده</p>}
      </div>
    </div>
  );
}

// ─── Announcements Tab ────────────────────────────────────────────────────────
function AnnouncementsTab() {
  const [list, setList] = useState(() => getAnnouncements());
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({ title: "", body: "", priority: "normal" as Announcement["priority"], pinned: false });
  const inputStyle = { width: "100%", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(147,51,234,0.2)", borderRadius: 8, padding: "8px 12px", color: "white", fontSize: 13, outline: "none" };
  const priColors = { normal: "#888", important: "#f59e0b", urgent: "#ef4444" };
  const priLabels = { normal: "عادی", important: "مهم", urgent: "فوری" };

  const handleSave = () => {
    if (!form.title.trim()) return;
    saveAnnouncement({ id: Date.now().toString(), title: form.title, body: form.body, priority: form.priority, targetUsers: "all", createdAt: new Date().toISOString(), expiresAt: null, pinned: form.pinned });
    setForm({ title: "", body: "", priority: "normal", pinned: false });
    setShowForm(false);
    setList(getAnnouncements());
  };

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20, direction: "rtl" }}>
        <span style={{ fontSize: 13, color: "#888" }}>{list.length} اطلاعیه</span>
        <button onClick={() => setShowForm(!showForm)} style={{ padding: "8px 18px", borderRadius: 10, background: "linear-gradient(135deg,#9333ea,#f97316)", border: "none", color: "white", fontWeight: 700, fontSize: 13, cursor: "pointer" }}>{showForm ? "انصراف" : "+ اطلاعیه جدید"}</button>
      </div>
      {showForm && (
        <div style={{ background: "rgba(147,51,234,0.06)", border: "1px solid rgba(147,51,234,0.2)", borderRadius: 14, padding: 20, marginBottom: 20, display: "flex", flexDirection: "column", gap: 10 }}>
          <input style={inputStyle} value={form.title} onChange={e => setForm(f => ({ ...f, title: e.target.value }))} placeholder="عنوان اطلاعیه *" />
          <textarea style={{ ...inputStyle, minHeight: 80, resize: "vertical" }} value={form.body} onChange={e => setForm(f => ({ ...f, body: e.target.value }))} placeholder="متن اطلاعیه..." />
          <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
            <select style={inputStyle} value={form.priority} onChange={e => setForm(f => ({ ...f, priority: e.target.value as Announcement["priority"] }))}>
              <option value="normal">عادی</option><option value="important">مهم</option><option value="urgent">فوری</option>
            </select>
            <label style={{ fontSize: 12, display: "flex", alignItems: "center", gap: 6, cursor: "pointer" }}><input type="checkbox" checked={form.pinned} onChange={e => setForm(f => ({ ...f, pinned: e.target.checked }))} />📌 سنجاق</label>
          </div>
          <button onClick={handleSave} style={{ alignSelf: "flex-start", padding: "9px 20px", borderRadius: 10, background: "#22d3a5", border: "none", color: "#0d0a14", fontWeight: 700, cursor: "pointer" }}>ذخیره</button>
        </div>
      )}
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        {list.map(a => (
          <div key={a.id} style={{ background: "rgba(255,255,255,0.03)", border: `1px solid ${priColors[a.priority]}30`, borderRadius: 12, padding: "14px 18px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                {a.pinned && <span>📌</span>}
                <span style={{ fontWeight: 700, fontSize: 14 }}>{a.title}</span>
                <span style={{ fontSize: 9, padding: "1px 6px", borderRadius: 4, background: `${priColors[a.priority]}20`, color: priColors[a.priority] }}>{priLabels[a.priority]}</span>
              </div>
              <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
                <span style={{ fontSize: 10, color: "#555" }}>{new Date(a.createdAt).toLocaleDateString("fa-IR")}</span>
                <button onClick={() => { deleteAnnouncement(a.id); setList(getAnnouncements()); }} style={{ padding: "3px 8px", borderRadius: 6, background: "rgba(244,86,106,0.1)", color: "#f4566a", border: "none", cursor: "pointer", fontSize: 10 }}>حذف</button>
              </div>
            </div>
            {a.body && <div style={{ fontSize: 12, color: "var(--text-secondary)", direction: "rtl", lineHeight: 1.7 }}>{a.body}</div>}
          </div>
        ))}
        {list.length === 0 && <p style={{ color: "#555", fontSize: 13 }}>هنوز اطلاعیه‌ای ثبت نشده</p>}
      </div>
    </div>
  );
}

// ─── Certificates Tab ─────────────────────────────────────────────────────────
function CertificatesTab() {
  const [list, setList] = useState(() => getCertificates());
  const [showForm, setShowForm] = useState(false);
  const users = getAllUsers().filter(u => u.role === "student");
  const [form, setForm] = useState({ username: users[0]?.username ?? "", courseName: "Espresso 1", courseLevel: "A1", grade: "عالی", note: "" });
  const inputStyle = { width: "100%", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(147,51,234,0.2)", borderRadius: 8, padding: "8px 12px", color: "white", fontSize: 13, outline: "none" };

  const handleIssue = () => {
    if (!form.username) return;
    issueCertificate({ id: Date.now().toString(), username: form.username, courseName: form.courseName, courseLevel: form.courseLevel, issuedAt: new Date().toISOString(), grade: form.grade, note: form.note });
    setShowForm(false);
    setList(getCertificates());
  };

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20, direction: "rtl" }}>
        <span style={{ fontSize: 13, color: "#888" }}>{list.length} گواهی صادر شده</span>
        <button onClick={() => setShowForm(!showForm)} style={{ padding: "8px 18px", borderRadius: 10, background: "linear-gradient(135deg,#9333ea,#f97316)", border: "none", color: "white", fontWeight: 700, fontSize: 13, cursor: "pointer" }}>{showForm ? "انصراف" : "🎖️ صدور گواهی"}</button>
      </div>
      {showForm && (
        <div style={{ background: "rgba(147,51,234,0.06)", border: "1px solid rgba(147,51,234,0.2)", borderRadius: 14, padding: 20, marginBottom: 20, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
          <div><label style={{ fontSize: 11, color: "#888", display: "block", marginBottom: 4 }}>دانش‌آموز</label><select style={inputStyle} value={form.username} onChange={e => setForm(f => ({ ...f, username: e.target.value }))}>{users.map(u => <option key={u.username} value={u.username}>{u.displayName}</option>)}</select></div>
          <div><label style={{ fontSize: 11, color: "#888", display: "block", marginBottom: 4 }}>دوره</label><input style={inputStyle} value={form.courseName} onChange={e => setForm(f => ({ ...f, courseName: e.target.value }))} /></div>
          <div><label style={{ fontSize: 11, color: "#888", display: "block", marginBottom: 4 }}>سطح</label><input style={inputStyle} value={form.courseLevel} onChange={e => setForm(f => ({ ...f, courseLevel: e.target.value }))} /></div>
          <div><label style={{ fontSize: 11, color: "#888", display: "block", marginBottom: 4 }}>نمره</label><select style={inputStyle} value={form.grade} onChange={e => setForm(f => ({ ...f, grade: e.target.value }))}><option>عالی</option><option>خوب</option><option>قابل قبول</option></select></div>
          <div style={{ gridColumn: "1/-1" }}><label style={{ fontSize: 11, color: "#888", display: "block", marginBottom: 4 }}>یادداشت</label><input style={inputStyle} value={form.note} onChange={e => setForm(f => ({ ...f, note: e.target.value }))} /></div>
          <button onClick={handleIssue} style={{ gridColumn: "1/-1", padding: "9px 20px", borderRadius: 10, background: "#22d3a5", border: "none", color: "#0d0a14", fontWeight: 700, cursor: "pointer" }}>صدور گواهی</button>
        </div>
      )}
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        {list.map(c => (
          <div key={c.id} style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(251,191,36,0.15)", borderRadius: 12, padding: "14px 18px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <div style={{ fontSize: 28 }}>🎖️</div>
              <div>
                <div style={{ fontWeight: 700, fontSize: 14 }}>{users.find(u => u.username === c.username)?.displayName ?? c.username}</div>
                <div style={{ fontSize: 12, color: "#fbbf24" }}>{c.courseName} · {c.courseLevel} · {c.grade}</div>
                {c.note && <div style={{ fontSize: 11, color: "#888" }}>{c.note}</div>}
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 4 }}>
              <span style={{ fontSize: 10, color: "#555" }}>{new Date(c.issuedAt).toLocaleDateString("fa-IR")}</span>
              <button onClick={() => { deleteCertificate(c.id); setList(getCertificates()); }} style={{ padding: "3px 8px", borderRadius: 6, background: "rgba(244,86,106,0.1)", color: "#f4566a", border: "none", cursor: "pointer", fontSize: 10 }}>حذف</button>
            </div>
          </div>
        ))}
        {list.length === 0 && <p style={{ color: "#555", fontSize: 13 }}>هنوز گواهی‌ای صادر نشده</p>}
      </div>
    </div>
  );
}

// ─── Messages Tab ─────────────────────────────────────────────────────────────
function MessagesTab() {
  const [list, setList] = useState(() => getMessages());
  const [showForm, setShowForm] = useState(false);
  const users = getAllUsers().filter(u => u.role === "student");
  const [form, setForm] = useState({ to: users[0]?.username ?? "", subject: "", body: "" });
  const inputStyle = { width: "100%", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(147,51,234,0.2)", borderRadius: 8, padding: "8px 12px", color: "white", fontSize: 13, outline: "none" };

  const handleSend = () => {
    if (!form.subject.trim() || !form.to) return;
    sendMessage({ id: Date.now().toString(), from: "admin", to: form.to, subject: form.subject, body: form.body, sentAt: new Date().toISOString(), read: false });
    setForm({ to: users[0]?.username ?? "", subject: "", body: "" });
    setShowForm(false);
    setList(getMessages());
  };

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20, direction: "rtl" }}>
        <span style={{ fontSize: 13, color: "#888" }}>{list.length} پیام</span>
        <button onClick={() => setShowForm(!showForm)} style={{ padding: "8px 18px", borderRadius: 10, background: "linear-gradient(135deg,#9333ea,#f97316)", border: "none", color: "white", fontWeight: 700, fontSize: 13, cursor: "pointer" }}>{showForm ? "انصراف" : "✉️ پیام جدید"}</button>
      </div>
      {showForm && (
        <div style={{ background: "rgba(147,51,234,0.06)", border: "1px solid rgba(147,51,234,0.2)", borderRadius: 14, padding: 20, marginBottom: 20, display: "flex", flexDirection: "column", gap: 10 }}>
          <select style={inputStyle} value={form.to} onChange={e => setForm(f => ({ ...f, to: e.target.value }))}>{users.map(u => <option key={u.username} value={u.username}>{u.displayName} (@{u.username})</option>)}</select>
          <input style={inputStyle} value={form.subject} onChange={e => setForm(f => ({ ...f, subject: e.target.value }))} placeholder="موضوع *" />
          <textarea style={{ ...inputStyle, minHeight: 80, resize: "vertical" }} value={form.body} onChange={e => setForm(f => ({ ...f, body: e.target.value }))} placeholder="متن پیام..." />
          <button onClick={handleSend} style={{ alignSelf: "flex-start", padding: "9px 20px", borderRadius: 10, background: "#22d3a5", border: "none", color: "#0d0a14", fontWeight: 700, cursor: "pointer" }}>ارسال</button>
        </div>
      )}
      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
        {list.map(m => (
          <div key={m.id} style={{ background: "rgba(255,255,255,0.02)", border: `1px solid rgba(147,51,234,${m.read ? "0.08" : "0.2"})`, borderRadius: 10, padding: "12px 16px", opacity: m.read ? 0.6 : 1 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 4 }}>
              <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                {!m.read && <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#6366f1" }} />}
                <span style={{ fontWeight: 700, fontSize: 13 }}>{m.subject}</span>
              </div>
              <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
                <span style={{ fontSize: 10, color: "#888" }}>{m.from} → {m.to}</span>
                <span style={{ fontSize: 10, color: "#555" }}>{new Date(m.sentAt).toLocaleDateString("fa-IR")}</span>
                <button onClick={() => { deleteMessage(m.id); setList(getMessages()); }} style={{ padding: "2px 6px", borderRadius: 4, background: "rgba(244,86,106,0.1)", color: "#f4566a", border: "none", cursor: "pointer", fontSize: 9 }}>✕</button>
              </div>
            </div>
            {m.body && <div style={{ fontSize: 12, color: "var(--text-secondary)", direction: "rtl", lineHeight: 1.6 }}>{m.body}</div>}
          </div>
        ))}
        {list.length === 0 && <p style={{ color: "#555", fontSize: 13 }}>هنوز پیامی ارسال نشده</p>}
      </div>
    </div>
  );
}

// ─── Schedule Tab ─────────────────────────────────────────────────────────────
function ScheduleTab() {
  const [list, setList] = useState(() => getSchedule());
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({ title: "", description: "", date: "", time: "", type: "class" as ScheduleEvent["type"] });
  const inputStyle = { width: "100%", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(147,51,234,0.2)", borderRadius: 8, padding: "8px 12px", color: "white", fontSize: 13, outline: "none" };
  const typeColors: Record<string, string> = { class: "#6366f1", exam: "#ef4444", event: "#22d3a5", deadline: "#f59e0b" };
  const typeLabels: Record<string, string> = { class: "کلاس", exam: "آزمون", event: "رویداد", deadline: "ددلاین" };

  const handleSave = () => {
    if (!form.title.trim() || !form.date) return;
    saveScheduleEvent({ id: Date.now().toString(), title: form.title, description: form.description, date: form.date, time: form.time, type: form.type, targetUsers: "all" });
    setForm({ title: "", description: "", date: "", time: "", type: "class" });
    setShowForm(false);
    setList(getSchedule());
  };

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20, direction: "rtl" }}>
        <span style={{ fontSize: 13, color: "#888" }}>{list.length} رویداد</span>
        <button onClick={() => setShowForm(!showForm)} style={{ padding: "8px 18px", borderRadius: 10, background: "linear-gradient(135deg,#9333ea,#f97316)", border: "none", color: "white", fontWeight: 700, fontSize: 13, cursor: "pointer" }}>{showForm ? "انصراف" : "📅 رویداد جدید"}</button>
      </div>
      {showForm && (
        <div style={{ background: "rgba(147,51,234,0.06)", border: "1px solid rgba(147,51,234,0.2)", borderRadius: 14, padding: 20, marginBottom: 20, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
          <div style={{ gridColumn: "1/-1" }}><label style={{ fontSize: 11, color: "#888", display: "block", marginBottom: 4 }}>عنوان *</label><input style={inputStyle} value={form.title} onChange={e => setForm(f => ({ ...f, title: e.target.value }))} /></div>
          <div><label style={{ fontSize: 11, color: "#888", display: "block", marginBottom: 4 }}>تاریخ *</label><input type="date" style={inputStyle} value={form.date} onChange={e => setForm(f => ({ ...f, date: e.target.value }))} /></div>
          <div><label style={{ fontSize: 11, color: "#888", display: "block", marginBottom: 4 }}>ساعت</label><input type="time" style={inputStyle} value={form.time} onChange={e => setForm(f => ({ ...f, time: e.target.value }))} /></div>
          <div><label style={{ fontSize: 11, color: "#888", display: "block", marginBottom: 4 }}>نوع</label><select style={inputStyle} value={form.type} onChange={e => setForm(f => ({ ...f, type: e.target.value as ScheduleEvent["type"] }))}><option value="class">کلاس</option><option value="exam">آزمون</option><option value="event">رویداد</option><option value="deadline">ددلاین</option></select></div>
          <div><label style={{ fontSize: 11, color: "#888", display: "block", marginBottom: 4 }}>توضیح</label><input style={inputStyle} value={form.description} onChange={e => setForm(f => ({ ...f, description: e.target.value }))} /></div>
          <button onClick={handleSave} style={{ gridColumn: "1/-1", padding: "9px 20px", borderRadius: 10, background: "#22d3a5", border: "none", color: "#0d0a14", fontWeight: 700, cursor: "pointer" }}>ذخیره</button>
        </div>
      )}
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        {list.map(ev => (
          <div key={ev.id} style={{ background: "rgba(255,255,255,0.03)", border: `1px solid ${typeColors[ev.type]}30`, borderRadius: 12, padding: "14px 18px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <div style={{ width: 4, height: 36, borderRadius: 2, background: typeColors[ev.type] }} />
              <div>
                <div style={{ fontWeight: 700, fontSize: 14 }}>{ev.title}</div>
                <div style={{ fontSize: 11, color: "#888" }}>{typeLabels[ev.type]} · {ev.date}{ev.time ? ` · ${ev.time}` : ""}</div>
                {ev.description && <div style={{ fontSize: 11, color: "#666", marginTop: 2 }}>{ev.description}</div>}
              </div>
            </div>
            <button onClick={() => { deleteScheduleEvent(ev.id); setList(getSchedule()); }} style={{ padding: "3px 8px", borderRadius: 6, background: "rgba(244,86,106,0.1)", color: "#f4566a", border: "none", cursor: "pointer", fontSize: 10 }}>حذف</button>
          </div>
        ))}
        {list.length === 0 && <p style={{ color: "#555", fontSize: 13, direction: "rtl" }}>هنوز رویدادی ثبت نشده</p>}
      </div>
    </div>
  );
}

// ─── Courses Tab ──────────────────────────────────────────────────────────────
function CoursesTab() {
  const [list, setList] = useState(() => getCourses());
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({ title: "", description: "", level: "A1", status: "active" as Course["status"], lessonsCount: 0, category: "" });
  const inputStyle = { width: "100%", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(147,51,234,0.2)", borderRadius: 8, padding: "8px 12px", color: "white", fontSize: 13, outline: "none" };
  const statusColors = { active: "#22d3a5", draft: "#f59e0b", archived: "#888" };
  const statusLabels = { active: "فعال", draft: "پیش‌نویس", archived: "آرشیو" };
  const handleSave = () => {
    if (!form.title.trim()) return;
    saveCourse({ id: Date.now().toString(), ...form, createdAt: new Date().toISOString() });
    setForm({ title: "", description: "", level: "A1", status: "active", lessonsCount: 0, category: "" });
    setShowForm(false); setList(getCourses());
  };
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20, direction: "rtl" }}>
        <span style={{ fontSize: 13, color: "#888" }}>{list.length} دوره</span>
        <button onClick={() => setShowForm(!showForm)} style={{ padding: "8px 18px", borderRadius: 10, background: "linear-gradient(135deg,#9333ea,#f97316)", border: "none", color: "white", fontWeight: 700, fontSize: 13, cursor: "pointer" }}>{showForm ? "انصراف" : "📦 دوره جدید"}</button>
      </div>
      {showForm && (
        <div style={{ background: "rgba(147,51,234,0.06)", border: "1px solid rgba(147,51,234,0.2)", borderRadius: 14, padding: 20, marginBottom: 20, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
          <div><label style={{ fontSize: 11, color: "#888", display: "block", marginBottom: 4 }}>عنوان *</label><input style={inputStyle} value={form.title} onChange={e => setForm(f => ({ ...f, title: e.target.value }))} /></div>
          <div><label style={{ fontSize: 11, color: "#888", display: "block", marginBottom: 4 }}>سطح</label><select style={inputStyle} value={form.level} onChange={e => setForm(f => ({ ...f, level: e.target.value }))}><option>A1</option><option>A2</option><option>B1</option><option>B2</option><option>C1</option><option>C2</option></select></div>
          <div><label style={{ fontSize: 11, color: "#888", display: "block", marginBottom: 4 }}>دسته‌بندی</label><input style={inputStyle} value={form.category} onChange={e => setForm(f => ({ ...f, category: e.target.value }))} /></div>
          <div><label style={{ fontSize: 11, color: "#888", display: "block", marginBottom: 4 }}>تعداد درس</label><input type="number" style={inputStyle} value={form.lessonsCount} onChange={e => setForm(f => ({ ...f, lessonsCount: +e.target.value }))} /></div>
          <div><label style={{ fontSize: 11, color: "#888", display: "block", marginBottom: 4 }}>وضعیت</label><select style={inputStyle} value={form.status} onChange={e => setForm(f => ({ ...f, status: e.target.value as Course["status"] }))}><option value="active">فعال</option><option value="draft">پیش‌نویس</option><option value="archived">آرشیو</option></select></div>
          <div style={{ gridColumn: "1/-1" }}><label style={{ fontSize: 11, color: "#888", display: "block", marginBottom: 4 }}>توضیحات</label><input style={inputStyle} value={form.description} onChange={e => setForm(f => ({ ...f, description: e.target.value }))} /></div>
          <button onClick={handleSave} style={{ gridColumn: "1/-1", padding: "9px 20px", borderRadius: 10, background: "#22d3a5", border: "none", color: "#0d0a14", fontWeight: 700, cursor: "pointer" }}>ذخیره دوره</button>
        </div>
      )}
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        {list.map(c => (
          <div key={c.id} style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(147,51,234,0.12)", borderRadius: 12, padding: "14px 18px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div>
              <div style={{ fontWeight: 700, fontSize: 14 }}>{c.title} <span style={{ fontSize: 10, padding: "1px 6px", borderRadius: 4, background: `${statusColors[c.status]}20`, color: statusColors[c.status] }}>{statusLabels[c.status]}</span></div>
              <div style={{ fontSize: 11, color: "#888" }}>{c.level} · {c.lessonsCount} درس{c.category ? ` · ${c.category}` : ""}</div>
            </div>
            <button onClick={() => { deleteCourse(c.id); setList(getCourses()); }} style={{ padding: "3px 8px", borderRadius: 6, background: "rgba(244,86,106,0.1)", color: "#f4566a", border: "none", cursor: "pointer", fontSize: 10 }}>حذف</button>
          </div>
        ))}
        {list.length === 0 && <p style={{ color: "#555", fontSize: 13 }}>هنوز دوره‌ای ثبت نشده</p>}
      </div>
    </div>
  );
}

// ─── Enrollment Tab ───────────────────────────────────────────────────────────
function EnrollmentTab() {
  const [list, setList] = useState(() => getEnrollments());
  const [showForm, setShowForm] = useState(false);
  const users = getAllUsers().filter(u => u.role === "student");
  const courses = getCourses();
  const [form, setForm] = useState({ username: users[0]?.username ?? "", courseId: courses[0]?.id ?? "", courseTitle: courses[0]?.title ?? "" });
  const inputStyle = { width: "100%", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(147,51,234,0.2)", borderRadius: 8, padding: "8px 12px", color: "white", fontSize: 13, outline: "none" };
  const statusColors = { active: "#22d3a5", completed: "#6366f1", dropped: "#ef4444" };
  const handleSave = () => {
    if (!form.username || !form.courseId) return;
    const ct = courses.find(c => c.id === form.courseId);
    saveEnrollment({ id: Date.now().toString(), username: form.username, courseId: form.courseId, courseTitle: ct?.title ?? "", status: "active", enrolledAt: new Date().toISOString(), progress: 0 });
    setShowForm(false); setList(getEnrollments());
  };
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20, direction: "rtl" }}>
        <span style={{ fontSize: 13, color: "#888" }}>{list.length} ثبت‌نام</span>
        <button onClick={() => setShowForm(!showForm)} style={{ padding: "8px 18px", borderRadius: 10, background: "linear-gradient(135deg,#9333ea,#f97316)", border: "none", color: "white", fontWeight: 700, fontSize: 13, cursor: "pointer" }}>{showForm ? "انصراف" : "📋 ثبت‌نام جدید"}</button>
      </div>
      {showForm && (
        <div style={{ background: "rgba(147,51,234,0.06)", border: "1px solid rgba(147,51,234,0.2)", borderRadius: 14, padding: 20, marginBottom: 20, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
          <div><label style={{ fontSize: 11, color: "#888", display: "block", marginBottom: 4 }}>دانش‌آموز</label><select style={inputStyle} value={form.username} onChange={e => setForm(f => ({ ...f, username: e.target.value }))}>{users.map(u => <option key={u.username} value={u.username}>{u.displayName}</option>)}</select></div>
          <div><label style={{ fontSize: 11, color: "#888", display: "block", marginBottom: 4 }}>دوره</label><select style={inputStyle} value={form.courseId} onChange={e => setForm(f => ({ ...f, courseId: e.target.value }))}>{courses.map(c => <option key={c.id} value={c.id}>{c.title}</option>)}</select></div>
          <button onClick={handleSave} style={{ gridColumn: "1/-1", padding: "9px 20px", borderRadius: 10, background: "#22d3a5", border: "none", color: "#0d0a14", fontWeight: 700, cursor: "pointer" }}>ثبت‌نام</button>
        </div>
      )}
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        {list.map(e => (
          <div key={e.id} style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(147,51,234,0.12)", borderRadius: 12, padding: "14px 18px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div>
              <div style={{ fontWeight: 700, fontSize: 14 }}>{users.find(u => u.username === e.username)?.displayName ?? e.username}</div>
              <div style={{ fontSize: 11, color: "#888" }}>{e.courseTitle} · <span style={{ color: statusColors[e.status] }}>{e.status}</span> · {e.progress}%</div>
            </div>
            <button onClick={() => { deleteEnrollment(e.id); setList(getEnrollments()); }} style={{ padding: "3px 8px", borderRadius: 6, background: "rgba(244,86,106,0.1)", color: "#f4566a", border: "none", cursor: "pointer", fontSize: 10 }}>حذف</button>
          </div>
        ))}
        {list.length === 0 && <p style={{ color: "#555", fontSize: 13 }}>هنوز ثبت‌نامی نشده</p>}
      </div>
    </div>
  );
}

// ─── Assignments Tab ──────────────────────────────────────────────────────────
function AssignmentsTab() {
  const [list, setList] = useState(() => getAssignments());
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({ title: "", description: "", courseId: "", dueDate: "" });
  const inputStyle = { width: "100%", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(147,51,234,0.2)", borderRadius: 8, padding: "8px 12px", color: "white", fontSize: 13, outline: "none" };
  const handleSave = () => {
    if (!form.title.trim()) return;
    saveAssignment({ id: Date.now().toString(), title: form.title, description: form.description, courseId: form.courseId, dueDate: form.dueDate, targetUsers: "all", createdAt: new Date().toISOString() });
    setForm({ title: "", description: "", courseId: "", dueDate: "" }); setShowForm(false); setList(getAssignments());
  };
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20, direction: "rtl" }}>
        <span style={{ fontSize: 13, color: "#888" }}>{list.length} تکلیف</span>
        <button onClick={() => setShowForm(!showForm)} style={{ padding: "8px 18px", borderRadius: 10, background: "linear-gradient(135deg,#9333ea,#f97316)", border: "none", color: "white", fontWeight: 700, fontSize: 13, cursor: "pointer" }}>{showForm ? "انصراف" : "📝 تکلیف جدید"}</button>
      </div>
      {showForm && (
        <div style={{ background: "rgba(147,51,234,0.06)", border: "1px solid rgba(147,51,234,0.2)", borderRadius: 14, padding: 20, marginBottom: 20, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
          <div style={{ gridColumn: "1/-1" }}><label style={{ fontSize: 11, color: "#888", display: "block", marginBottom: 4 }}>عنوان *</label><input style={inputStyle} value={form.title} onChange={e => setForm(f => ({ ...f, title: e.target.value }))} /></div>
          <div><label style={{ fontSize: 11, color: "#888", display: "block", marginBottom: 4 }}>مهلت</label><input type="date" style={inputStyle} value={form.dueDate} onChange={e => setForm(f => ({ ...f, dueDate: e.target.value }))} /></div>
          <div><label style={{ fontSize: 11, color: "#888", display: "block", marginBottom: 4 }}>توضیح</label><input style={inputStyle} value={form.description} onChange={e => setForm(f => ({ ...f, description: e.target.value }))} /></div>
          <button onClick={handleSave} style={{ gridColumn: "1/-1", padding: "9px 20px", borderRadius: 10, background: "#22d3a5", border: "none", color: "#0d0a14", fontWeight: 700, cursor: "pointer" }}>ذخیره</button>
        </div>
      )}
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        {list.map(a => {
          const overdue = a.dueDate && new Date(a.dueDate) < new Date();
          return (
            <div key={a.id} style={{ background: "rgba(255,255,255,0.03)", border: `1px solid ${overdue ? "rgba(239,68,68,0.2)" : "rgba(147,51,234,0.12)"}`, borderRadius: 12, padding: "14px 18px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div>
                <div style={{ fontWeight: 700, fontSize: 14 }}>{a.title} {overdue && <span style={{ fontSize: 9, color: "#ef4444" }}>منقضی</span>}</div>
                <div style={{ fontSize: 11, color: "#888" }}>{a.dueDate || "بدون مهلت"}{a.description ? ` · ${a.description}` : ""}</div>
              </div>
              <button onClick={() => { deleteAssignment(a.id); setList(getAssignments()); }} style={{ padding: "3px 8px", borderRadius: 6, background: "rgba(244,86,106,0.1)", color: "#f4566a", border: "none", cursor: "pointer", fontSize: 10 }}>حذف</button>
            </div>
          );
        })}
        {list.length === 0 && <p style={{ color: "#555", fontSize: 13 }}>هنوز تکلیفی ثبت نشده</p>}
      </div>
    </div>
  );
}

// ─── Attendance Tab ───────────────────────────────────────────────────────────
function AttendanceTab() {
  const [list, setList] = useState(() => getAttendance());
  const [showForm, setShowForm] = useState(false);
  const users = getAllUsers().filter(u => u.role === "student");
  const [form, setForm] = useState({ username: users[0]?.username ?? "", date: new Date().toISOString().split("T")[0], status: "present" as AttendanceRecord["status"], courseId: "", note: "" });
  const inputStyle = { width: "100%", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(147,51,234,0.2)", borderRadius: 8, padding: "8px 12px", color: "white", fontSize: 13, outline: "none" };
  const statusIcons: Record<string, string> = { present: "✅", absent: "❌", late: "⏰", excused: "📋" };
  const statusLabels: Record<string, string> = { present: "حاضر", absent: "غایب", late: "تأخیر", excused: "موجه" };
  const handleSave = () => {
    saveAttendance({ id: Date.now().toString(), username: form.username, date: form.date, status: form.status, courseId: form.courseId, note: form.note });
    setShowForm(false); setList(getAttendance());
  };
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20, direction: "rtl" }}>
        <span style={{ fontSize: 13, color: "#888" }}>{list.length} رکورد</span>
        <button onClick={() => setShowForm(!showForm)} style={{ padding: "8px 18px", borderRadius: 10, background: "linear-gradient(135deg,#9333ea,#f97316)", border: "none", color: "white", fontWeight: 700, fontSize: 13, cursor: "pointer" }}>{showForm ? "انصراف" : "✅ ثبت حضور"}</button>
      </div>
      {showForm && (
        <div style={{ background: "rgba(147,51,234,0.06)", border: "1px solid rgba(147,51,234,0.2)", borderRadius: 14, padding: 20, marginBottom: 20, display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 10 }}>
          <div><label style={{ fontSize: 11, color: "#888", display: "block", marginBottom: 4 }}>دانش‌آموز</label><select style={inputStyle} value={form.username} onChange={e => setForm(f => ({ ...f, username: e.target.value }))}>{users.map(u => <option key={u.username} value={u.username}>{u.displayName}</option>)}</select></div>
          <div><label style={{ fontSize: 11, color: "#888", display: "block", marginBottom: 4 }}>تاریخ</label><input type="date" style={inputStyle} value={form.date} onChange={e => setForm(f => ({ ...f, date: e.target.value }))} /></div>
          <div><label style={{ fontSize: 11, color: "#888", display: "block", marginBottom: 4 }}>وضعیت</label><select style={inputStyle} value={form.status} onChange={e => setForm(f => ({ ...f, status: e.target.value as AttendanceRecord["status"] }))}><option value="present">حاضر</option><option value="absent">غایب</option><option value="late">تأخیر</option><option value="excused">موجه</option></select></div>
          <button onClick={handleSave} style={{ gridColumn: "1/-1", padding: "9px 20px", borderRadius: 10, background: "#22d3a5", border: "none", color: "#0d0a14", fontWeight: 700, cursor: "pointer" }}>ثبت</button>
        </div>
      )}
      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
        {list.map(a => (
          <div key={a.id} style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(147,51,234,0.08)", borderRadius: 10, padding: "10px 14px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <span style={{ fontSize: 16 }}>{statusIcons[a.status]}</span>
              <span style={{ fontWeight: 700, fontSize: 13 }}>{users.find(u => u.username === a.username)?.displayName ?? a.username}</span>
              <span style={{ fontSize: 11, color: "#888" }}>{statusLabels[a.status]}</span>
            </div>
            <span style={{ fontSize: 11, color: "#555" }}>{a.date}</span>
          </div>
        ))}
        {list.length === 0 && <p style={{ color: "#555", fontSize: 13 }}>هنوز حضوری ثبت نشده</p>}
      </div>
    </div>
  );
}

// ─── Badges Tab ───────────────────────────────────────────────────────────────
function BadgesTab() {
  const [badges] = useState(() => getBadges());
  const [awarded, setAwarded] = useState(() => getUserBadges());
  const users = getAllUsers().filter(u => u.role === "student");
  const [selUser, setSelUser] = useState(users[0]?.username ?? "");
  const [selBadge, setSelBadge] = useState(badges[0]?.id ?? "");
  const inputStyle = { background: "rgba(255,255,255,0.05)", border: "1px solid rgba(147,51,234,0.2)", borderRadius: 8, padding: "8px 12px", color: "white", fontSize: 13, outline: "none" };

  const handleAward = () => {
    if (!selUser || !selBadge) return;
    awardBadge(selUser, selBadge);
    setAwarded(getUserBadges());
  };

  return (
    <div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 24 }}>
        {badges.map(b => (
          <div key={b.id} style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(147,51,234,0.12)", borderRadius: 14, padding: "16px 20px", textAlign: "center", width: 130 }}>
            <div style={{ fontSize: 32, marginBottom: 6 }}>{b.icon}</div>
            <div style={{ fontWeight: 700, fontSize: 12 }}>{b.title}</div>
            <div style={{ fontSize: 10, color: "#888", marginTop: 2 }}>{b.description}</div>
          </div>
        ))}
      </div>
      <div style={{ background: "rgba(147,51,234,0.06)", border: "1px solid rgba(147,51,234,0.2)", borderRadius: 14, padding: 16, marginBottom: 20, display: "flex", gap: 10, alignItems: "end" }}>
        <div><label style={{ fontSize: 11, color: "#888", display: "block", marginBottom: 4 }}>دانش‌آموز</label><select style={inputStyle} value={selUser} onChange={e => setSelUser(e.target.value)}>{users.map(u => <option key={u.username} value={u.username}>{u.displayName}</option>)}</select></div>
        <div><label style={{ fontSize: 11, color: "#888", display: "block", marginBottom: 4 }}>نشان</label><select style={inputStyle} value={selBadge} onChange={e => setSelBadge(e.target.value)}>{badges.map(b => <option key={b.id} value={b.id}>{b.icon} {b.title}</option>)}</select></div>
        <button onClick={handleAward} style={{ padding: "8px 16px", borderRadius: 10, background: "#22d3a5", border: "none", color: "#0d0a14", fontWeight: 700, cursor: "pointer", fontSize: 12 }}>اهدا</button>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
        {awarded.map(a => {
          const badge = badges.find(b => b.id === a.badgeId);
          return (
            <div key={a.id} style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(251,191,36,0.15)", borderRadius: 10, padding: "10px 14px", display: "flex", alignItems: "center", gap: 10 }}>
              <span style={{ fontSize: 20 }}>{badge?.icon ?? "🏅"}</span>
              <span style={{ fontWeight: 700, fontSize: 13 }}>{users.find(u => u.username === a.username)?.displayName ?? a.username}</span>
              <span style={{ fontSize: 11, color: "#fbbf24" }}>{badge?.title}</span>
              <span style={{ fontSize: 10, color: "#555", marginLeft: "auto" }}>{new Date(a.awardedAt).toLocaleDateString("fa-IR")}</span>
            </div>
          );
        })}
        {awarded.length === 0 && <p style={{ color: "#555", fontSize: 13 }}>هنوز نشانی اهدا نشده</p>}
      </div>
    </div>
  );
}

// ─── Notifications Tab ────────────────────────────────────────────────────────
function NotificationsTab() {
  const [list, setList] = useState(() => getNotifications());
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({ title: "", body: "", type: "info" as Notification["type"] });
  const inputStyle = { width: "100%", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(147,51,234,0.2)", borderRadius: 8, padding: "8px 12px", color: "white", fontSize: 13, outline: "none" };
  const typeIcons: Record<string, string> = { info: "ℹ️", warning: "⚠️", success: "✅", error: "❌" };
  const handleSave = () => {
    if (!form.title.trim()) return;
    saveNotification({ id: Date.now().toString(), title: form.title, body: form.body, type: form.type, targetUsers: "all", read: [], createdAt: new Date().toISOString() });
    setForm({ title: "", body: "", type: "info" }); setShowForm(false); setList(getNotifications());
  };
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20, direction: "rtl" }}>
        <span style={{ fontSize: 13, color: "#888" }}>{list.length} اعلان</span>
        <button onClick={() => setShowForm(!showForm)} style={{ padding: "8px 18px", borderRadius: 10, background: "linear-gradient(135deg,#9333ea,#f97316)", border: "none", color: "white", fontWeight: 700, fontSize: 13, cursor: "pointer" }}>{showForm ? "انصراف" : "🔔 اعلان جدید"}</button>
      </div>
      {showForm && (
        <div style={{ background: "rgba(147,51,234,0.06)", border: "1px solid rgba(147,51,234,0.2)", borderRadius: 14, padding: 20, marginBottom: 20, display: "flex", flexDirection: "column", gap: 10 }}>
          <input style={inputStyle} value={form.title} onChange={e => setForm(f => ({ ...f, title: e.target.value }))} placeholder="عنوان *" />
          <textarea style={{ ...inputStyle, minHeight: 60, resize: "vertical" }} value={form.body} onChange={e => setForm(f => ({ ...f, body: e.target.value }))} placeholder="متن..." />
          <select style={inputStyle} value={form.type} onChange={e => setForm(f => ({ ...f, type: e.target.value as Notification["type"] }))}><option value="info">ℹ️ اطلاع</option><option value="warning">⚠️ هشدار</option><option value="success">✅ موفق</option><option value="error">❌ خطا</option></select>
          <button onClick={handleSave} style={{ alignSelf: "flex-start", padding: "9px 20px", borderRadius: 10, background: "#22d3a5", border: "none", color: "#0d0a14", fontWeight: 700, cursor: "pointer" }}>ارسال</button>
        </div>
      )}
      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
        {list.map(n => (
          <div key={n.id} style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(147,51,234,0.08)", borderRadius: 10, padding: "10px 14px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
              <span>{typeIcons[n.type]}</span>
              <span style={{ fontWeight: 700, fontSize: 13 }}>{n.title}</span>
              {n.body && <span style={{ fontSize: 11, color: "#888" }}>— {n.body.slice(0, 50)}</span>}
            </div>
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
              <span style={{ fontSize: 10, color: "#555" }}>{new Date(n.createdAt).toLocaleDateString("fa-IR")}</span>
              <button onClick={() => { deleteNotification(n.id); setList(getNotifications()); }} style={{ padding: "2px 6px", borderRadius: 4, background: "rgba(244,86,106,0.1)", color: "#f4566a", border: "none", cursor: "pointer", fontSize: 9 }}>✕</button>
            </div>
          </div>
        ))}
        {list.length === 0 && <p style={{ color: "#555", fontSize: 13 }}>هنوز اعلانی ثبت نشده</p>}
      </div>
    </div>
  );
}

// ─── Reports Tab ──────────────────────────────────────────────────────────────
function ReportsTab({ progress }: { progress: UserProgress }) {
  const users = getAllUsers();
  const students = users.filter(u => u.role === "student");
  const log = getActivityLog();
  const certs = getCertificates();
  const enrollments = getEnrollments();
  const attendance = getAttendance();
  const courses = getCourses();
  const totalLogins = log.filter(l => l.action === "login").length;
  const presentCount = attendance.filter(a => a.status === "present").length;
  const absentCount = attendance.filter(a => a.status === "absent").length;

  const cardStyle = { background: "rgba(255,255,255,0.03)", border: "1px solid rgba(147,51,234,0.12)", borderRadius: 14, padding: "20px", textAlign: "center" as const };
  return (
    <div>
      <p style={{ fontSize: 13, color: "#888", marginBottom: 20, direction: "rtl" }}>📈 خلاصه گزارش سیستم</p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12, marginBottom: 24 }}>
        <div style={cardStyle}><div style={{ fontSize: 28, fontWeight: 900, color: "#9333ea" }}>{users.length}</div><div style={{ fontSize: 11, color: "#888" }}>کل کاربران</div></div>
        <div style={cardStyle}><div style={{ fontSize: 28, fontWeight: 900, color: "#6366f1" }}>{students.length}</div><div style={{ fontSize: 11, color: "#888" }}>دانش‌آموزان</div></div>
        <div style={cardStyle}><div style={{ fontSize: 28, fontWeight: 900, color: "#22d3a5" }}>{courses.length}</div><div style={{ fontSize: 11, color: "#888" }}>دوره‌ها</div></div>
        <div style={cardStyle}><div style={{ fontSize: 28, fontWeight: 900, color: "#fbbf24" }}>{certs.length}</div><div style={{ fontSize: 11, color: "#888" }}>گواهی‌ها</div></div>
        <div style={cardStyle}><div style={{ fontSize: 28, fontWeight: 900, color: "#f97316" }}>{totalLogins}</div><div style={{ fontSize: 11, color: "#888" }}>کل ورودها</div></div>
        <div style={cardStyle}><div style={{ fontSize: 28, fontWeight: 900, color: "#22d3a5" }}>{enrollments.length}</div><div style={{ fontSize: 11, color: "#888" }}>ثبت‌نام‌ها</div></div>
        <div style={cardStyle}><div style={{ fontSize: 28, fontWeight: 900, color: "#22d3a5" }}>{presentCount}</div><div style={{ fontSize: 11, color: "#888" }}>حضور</div></div>
        <div style={cardStyle}><div style={{ fontSize: 28, fontWeight: 900, color: "#ef4444" }}>{absentCount}</div><div style={{ fontSize: 11, color: "#888" }}>غیبت</div></div>
      </div>
      <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(147,51,234,0.12)", borderRadius: 14, padding: "20px" }}>
        <h3 style={{ fontSize: 14, fontWeight: 700, marginBottom: 12 }}>📊 آمار آزمون‌ها</h3>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 12 }}>
          <div style={{ textAlign: "center" }}><div style={{ fontSize: 22, fontWeight: 900, color: "#6366f1" }}>{progress.totalAnswered}</div><div style={{ fontSize: 11, color: "#888" }}>کل پاسخ‌ها</div></div>
          <div style={{ textAlign: "center" }}><div style={{ fontSize: 22, fontWeight: 900, color: "#22d3a5" }}>{progress.totalCorrect}</div><div style={{ fontSize: 11, color: "#888" }}>صحیح</div></div>
          <div style={{ textAlign: "center" }}><div style={{ fontSize: 22, fontWeight: 900, color: "#f97316" }}>{progress.totalAnswered ? Math.round(progress.totalCorrect / progress.totalAnswered * 100) : 0}%</div><div style={{ fontSize: 11, color: "#888" }}>دقت</div></div>
        </div>
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

  const tabs: { id: AdminTab; label: string; icon: string; group?: string }[] = [
    { id: "dashboard",     label: "داشبورد",     icon: "🏠" },
    { id: "reports",       label: "گزارش‌ها",    icon: "📈", group: "EDUCATION" },
    { id: "courses",       label: "دوره‌ها",     icon: "📦" },
    { id: "webinars",      label: "وبینارها",    icon: "🎓" },
    { id: "chapters",      label: "فصل‌ها",      icon: "📚" },
    { id: "questions",     label: "سوالات",      icon: "❓" },
    { id: "lmsquizzes",    label: "آزمون‌ها",    icon: "📝" },
    { id: "assignments",   label: "تکالیف",      icon: "📝" },
    { id: "enrollment",    label: "ثبت‌نام‌ها",  icon: "📋" },
    { id: "attendance",    label: "حضور/غیاب",  icon: "✅" },
    { id: "certificates",  label: "گواهی‌ها",    icon: "🎖️" },
    { id: "schedule",      label: "تقویم",       icon: "📅" },
    { id: "analytics",     label: "تحلیل",       icon: "📊" },
    { id: "videos",        label: "ویدیوها",     icon: "🎬" },
    { id: "hard",          label: "سخت‌ها",     icon: "🔥" },
    { id: "categories",    label: "دسته‌بندی",   icon: "📂" },
    { id: "meetings",      label: "جلسات",      icon: "🎥" },
    { id: "students",      label: "دانش‌آموزان", icon: "🎓", group: "USERS" },
    { id: "users",         label: "کاربران",     icon: "👥" },
    { id: "roles",         label: "نقش‌ها",      icon: "🔑" },
    { id: "access",        label: "دسترسی‌ها",   icon: "🔐" },
    { id: "badges",        label: "نشان‌ها",     icon: "🏅" },
    { id: "gamification",  label: "انگیزش",      icon: "🏆" },
    { id: "rewards",       label: "پاداش‌ها",    icon: "🎁" },
    { id: "activitylog",   label: "لاگ فعالیت",  icon: "📋" },
    { id: "instructorReqs", label: "درخواست مدرسی", icon: "🎓" },
    { id: "documents",     label: "مدارک",      icon: "📑" },
    { id: "deleteReqs",    label: "حذف حساب",   icon: "🗑️" },
    { id: "support",       label: "پشتیبانی",   icon: "✋", group: "CRM" },
    { id: "messages",      label: "پیام‌ها",     icon: "✉️" },
    { id: "announcements", label: "اطلاعیه‌ها",  icon: "📢" },
    { id: "notifications", label: "اعلان‌ها",    icon: "🔔" },
    { id: "notifTemplates", label: "قالب اعلان",  icon: "📋" },
    { id: "feedback",      label: "ارزشیابی",   icon: "⭐" },
    { id: "requests",      label: "درخواست‌ها",  icon: "📨" },
    { id: "contacts",      label: "تماس‌ها",    icon: "📞" },
    { id: "newsletters",   label: "خبرنامه",    icon: "📧" },
    { id: "comments",      label: "نظرات",      icon: "💬" },
    { id: "reviews",       label: "بررسی‌ها",    icon: "⭐" },
    { id: "tags",          label: "تگ‌رنگ‌ها",   icon: "🏷️" },
    { id: "subscriptions", label: "اشتراک‌ها",   icon: "🌟", group: "FINANCIAL" },
    { id: "discounts",     label: "کد تخفیف",   icon: "🏷" },
    { id: "orders",        label: "سفارش‌ها",   icon: "🛒" },
    { id: "sales",         label: "فروش",       icon: "💰" },
    { id: "installments",  label: "اقساط",      icon: "💳" },
    { id: "cashback",      label: "کش‌بک",     icon: "💸" },
    { id: "payChannels",   label: "درگاه پرداخت", icon: "🏦" },
    { id: "currencies",    label: "ارزها",      icon: "💱" },
    { id: "gifts",         label: "هدایا",      icon: "🎁" },
    { id: "blogs",         label: "بلاگ",       icon: "📰", group: "CONTENT" },
    { id: "forums",        label: "انجمن",      icon: "💬" },
    { id: "products",      label: "محصولات",    icon: "🛍️" },
    { id: "bundles",       label: "باندل‌ها",    icon: "📦" },
    { id: "pages",         label: "صفحات CMS",  icon: "📄" },
    { id: "forms",         label: "فرم‌ها",     icon: "📋" },
    { id: "promotions",    label: "تبلیغات",    icon: "📣" },
    { id: "floatingBars",  label: "نوار شناور", icon: "📌" },
    { id: "upcoming",      label: "دوره‌های آینده", icon: "🔜" },
    { id: "aiTemplates",   label: "قالب‌های AI", icon: "🤖", group: "SYSTEM" },
    { id: "regions",       label: "مناطق",      icon: "🌍" },
    { id: "systemSettings", label: "تنظیمات سیستم", icon: "⚙️" },
    { id: "courseManager", label: "مدیریت دوره‌ها", icon: "🏛️" },
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
          <nav style={{ flex: 1, display: "flex", flexDirection: "column", gap: 2, padding: "0 12px", overflowY: "auto" }}>
            {tabs.map(t => (
              <div key={t.id}>
                {t.group && <div style={{ fontSize: 9, fontWeight: 800, color: "#555", letterSpacing: "0.15em", padding: "12px 14px 4px", textTransform: "uppercase" }}>{t.group}</div>}
                <button onClick={() => setTab(t.id)} style={{
                  display: "flex", alignItems: "center", gap: 8, width: "100%",
                  padding: "7px 12px", borderRadius: 10, border: "none", cursor: "pointer",
                  background: tab === t.id ? "linear-gradient(135deg,rgba(147,51,234,0.25),rgba(249,115,22,0.1))" : "none",
                  color: tab === t.id ? "#d8aaff" : "#888",
                  fontWeight: tab === t.id ? 700 : 500, fontSize: 12,
                  transition: "all 0.2s",
                  borderLeft: tab === t.id ? "3px solid #9333ea" : "3px solid transparent",
                  textAlign: "left",
                }}>
                  <span style={{ fontSize: 15 }}>{t.icon}</span>
                  {t.label}
                </button>
              </div>
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
          {tab === "feedback"        && <FeedbackTab />}
          {tab === "requests"        && <RequestsTab />}
          {tab === "gamification"    && <GamificationAdminTab />}
          {tab === "discounts"       && <DiscountCodesTab />}
          {tab === "users"           && <UsersTab />}
          {tab === "access"          && <SectionAccessTab />}
          {tab === "activitylog"     && <ActivityLogTab />}
          {tab === "announcements"   && <AnnouncementsTab />}
          {tab === "certificates"    && <CertificatesTab />}
          {tab === "messages"        && <MessagesTab />}
          {tab === "students"        && <StudentsTab progress={progress} />}
          {tab === "schedule"        && <ScheduleTab />}
          {tab === "courses"         && <CoursesTab />}
          {tab === "enrollment"      && <EnrollmentTab />}
          {tab === "assignments"     && <AssignmentsTab />}
          {tab === "attendance"      && <AttendanceTab />}
          {tab === "badges"          && <BadgesTab />}
          {tab === "notifications"   && <NotificationsTab />}
          {tab === "reports"         && <ReportsTab progress={progress} />}
          {tab === "roles"           && <RolesTab />}
          {tab === "categories"      && <CategoriesTab />}
          {tab === "webinars"        && <WebinarsTab />}
          {tab === "lmsquizzes"      && <QuizzesTab />}
          {tab === "orders"          && <OrdersTab />}
          {tab === "sales"           && <SalesTab />}
          {tab === "meetings"        && <MeetingsTab />}
          {tab === "blogs"           && <BlogsTab />}
          {tab === "forums"          && <ForumsTab />}
          {tab === "products"        && <ProductsTab />}
          {tab === "bundles"         && <BundlesTab />}
          {tab === "forms"           && <FormsTab />}
          {tab === "installments"    && <InstallmentsTab />}
          {tab === "rewards"         && <RewardsTab />}
          {tab === "newsletters"     && <NewslettersTab />}
          {tab === "pages"           && <PagesTab />}
          {tab === "contacts"        && <ContactsTab />}
          {tab === "gifts"           && <GiftsTab />}
          {tab === "currencies"      && <CurrenciesTab />}
          {tab === "upcoming"        && <UpcomingTab />}
          {tab === "instructorReqs"  && <InstructorRequestsTab />}
          {tab === "promotions"      && <PromotionsTab />}
          {tab === "payChannels"     && <PaymentChannelsTab />}
          {tab === "cashback"        && <CashbackTab />}
          {tab === "aiTemplates"     && <AiTemplatesTab />}
          {tab === "regions"         && <RegionsTab />}
          {tab === "floatingBars"    && <FloatingBarsTab />}
          {tab === "comments"        && <CommentsTab />}
          {tab === "reviews"         && <ReviewsTab />}
          {tab === "documents"       && <DocumentsTab />}
          {tab === "deleteReqs"      && <DeleteRequestsTab />}
          {tab === "notifTemplates"  && <NotifTemplatesTab />}
          {tab === "systemSettings"  && <SystemSettingsTab />}
          {tab === "courseManager"    && <CourseManagerTab />}
        </main>
      </div>
    </div>
  );
}
