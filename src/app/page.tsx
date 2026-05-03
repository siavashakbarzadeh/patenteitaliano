"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { questions, chapters, type Question } from "@/lib/questions";
import { getSession, logout } from "@/lib/auth";
import {
  getProgress,
  recordAnswer,
  recordAttemptHistory,
  recordQuizComplete,
  getAccuracy,
  resetProgress,
  toggleFlagQuestion,
  isFlagged,
  getWrongQuestionIds,
  getFlaggedQuestionIds,
  setQuestionTag,
  getQuestionTag,
  getTagConfigs,
  getTaggedQuestionIds,
  getHardQuestionIds,
  raiseHand,
  getAttemptHistory,
  QUERY_PRESETS,
  type UserProgress,
} from "@/lib/store";
import { DEFAULT_TAG_CONFIGS } from "@/lib/types";
import { chapter20Content } from "@/lib/chapters/20/content";
import { chapter19Content } from "@/lib/chapters/19/content";
import { chapter18Content } from "@/lib/chapters/18/content";
import { chapter17Content } from "@/lib/chapters/17/content";
import { chapter16Content } from "@/lib/chapters/16/content";
import { chapter15Content } from "@/lib/chapters/15/content";
import { chapter14Content } from "@/lib/chapters/14/content";
import { chapter13Content } from "@/lib/chapters/13/content";
import { chapter12Content } from "@/lib/chapters/12/content";
import { chapter11Content } from "@/lib/chapters/11/content";
import { chapter10Content } from "@/lib/chapters/10/content";
import { chapter9Content }  from "@/lib/chapters/9/content";
import { chapter8Content }  from "@/lib/chapters/8/content";
import { chapter7Content }  from "@/lib/chapters/7/content";
import { chapter6Content }  from "@/lib/chapters/6/content";
import { chapter5Content }  from "@/lib/chapters/5/content";
import { chapter4Content }  from "@/lib/chapters/4/content";
import { chapter3Content }  from "@/lib/chapters/3/content";
import { chapter2Content }  from "@/lib/chapters/2/content";
import { chapter1Content }  from "@/lib/chapters/1/content";
import { chapter21Content } from "@/lib/chapters/21/content";
import { chapter22Content } from "@/lib/chapters/22/content";
import { chapter23Content } from "@/lib/chapters/23/content";
import { chapter24Content } from "@/lib/chapters/24/content";
import { chapter25Content } from "@/lib/chapters/25/content";
import type { ChapterContent } from "@/lib/chapters/20/content";
import {
  CheckCircle2,
  XCircle,
  RotateCcw,
  Trophy,
  Flame,
  Target,
  BookOpen,
  BarChart2,
  Home,
  Zap,
  AlertCircle,
  Lock,
  GraduationCap,
  Languages,
  ChevronDown,
  ChevronUp,
  Flag,
  Clock,
  ListFilter,
  RefreshCw,
  BookMarked,
  Sparkles,
  Star,
  Highlighter,
  Underline,
  StickyNote,
  Image as ImageIcon,
  Timer,
  Settings,
  HelpCircle,
  Award,
  MessageCircle,
} from "lucide-react";
import VideoPanel from "@/components/VideoPanel";
import BrowsePage from "@/components/BrowsePage";
import SettingsPage from "@/components/SettingsPage";
import FAQPage from "@/components/FAQPage";
import RatingModal from "@/components/RatingModal";
import ProgressChartsPage from "@/components/ProgressChartsPage";
import SupportHubPage from "@/components/SupportHubPage";
import GamificationPage from "@/components/GamificationPage";
import OnboardingFlow, { getOnboardingData } from "@/components/OnboardingFlow";
import DictionaryPage from "@/components/DictionaryPage";
import ItalianoSection from "@/components/ItalianoSection";
import { getUserSettings, applySettings, checkExamClearance } from "@/lib/userSettings";
import { claimDailyLogin, awardQuizXP, getGamification, getBadge } from "@/lib/gamification";
import { validateCode, applyCode, getAppliedCode } from "@/lib/discountCodes";

// ─── Types ────────────────────────────────────────────────────────────────────
type Page = "home" | "chapters" | "quiz" | "results" | "stats" | "study" | "review" | "browse" | "settings" | "faq" | "charts" | "support" | "gamification" | "dictionary";
type QuizMode = "chapter" | "wrong" | "flagged" | "mixed" | "standard" | "hard" | "tagged0" | "tagged1" | "tagged2" | "hardWrong";

interface QuizState {
  questions: Question[];
  current: number;
  selected: number | null;
  answered: boolean;
  score: number;
  wrongIds: number[];
  timePerQuestion: number; // seconds spent on current question
  mode: QuizMode;
  chapterNum: number;
}

const contentRegistry: Record<number, ChapterContent> = {
  1:  chapter1Content,
  2:  chapter2Content,
  3:  chapter3Content,
  4:  chapter4Content,
  5:  chapter5Content,
  6:  chapter6Content,
  7:  chapter7Content,
  8:  chapter8Content,
  9:  chapter9Content,
  10: chapter10Content,
  11: chapter11Content,
  12: chapter12Content,
  13: chapter13Content,
  14: chapter14Content,
  15: chapter15Content,
  16: chapter16Content,
  17: chapter17Content,
  18: chapter18Content,
  19: chapter19Content,
  20: chapter20Content,
  21: chapter21Content,
  22: chapter22Content,
  23: chapter23Content,
  24: chapter24Content,
  25: chapter25Content,
};

// ─── Helpers ──────────────────────────────────────────────────────────────────
function shuffle<T>(arr: T[]): T[] {
  return [...arr].sort(() => Math.random() - 0.5);
}
function buildQuiz(chapterNum: number, mode: QuizMode = "chapter", extraIds: number[] = []): Question[] {
  if (mode === "wrong" || mode === "flagged") {
    const pool = questions.filter(q => extraIds.includes(q.id));
    return shuffle(pool);
  }
  if (mode === "mixed") {
    return shuffle(questions.filter(q => chapters.find(c => c.number === q.chapter)?.available));
  }
  if (mode === "standard") {
    const pool = shuffle(questions.filter(q => chapters.find(c => c.number === q.chapter)?.available));
    return pool.slice(0, 30);
  }
  // Query preset modes — extraIds carries the question ids
  if (["hard", "tagged0", "tagged1", "tagged2", "hardWrong"].includes(mode)) {
    if (extraIds.length === 0) return [];
    return shuffle(questions.filter(q => extraIds.includes(q.id)));
  }
  return shuffle(questions.filter((q) => q.chapter === chapterNum));
}

// ─── Italian Flag ─────────────────────────────────────────────────────────────
function ItalianFlag() {
  return (
    <span className="it-flag">
      <span style={{ background: "#009246" }} />
      <span style={{ background: "#ffffff" }} />
      <span style={{ background: "#ce2b37" }} />
    </span>
  );
}

// ─── NavBar ───────────────────────────────────────────────────────────────────
function NavBar({ page, onNav }: { page: Page; onNav: (p: Page) => void }) {
  if (["quiz", "results", "study"].includes(page)) return null;
  const items: { id: Page; label: string; icon: React.ReactNode }[] = [
    { id: "home",         label: "خانه",      icon: <Home size={18} /> },
    { id: "chapters",     label: "فصل‌ها",    icon: <BookOpen size={18} /> },
    { id: "charts",       label: "آمار",       icon: <BarChart2 size={18} /> },
    { id: "gamification", label: "امتیاز",    icon: <Award size={18} /> },
    { id: "support",      label: "پشتیبانی",  icon: <MessageCircle size={18} /> },
    { id: "faq",          label: "راهنما",    icon: <HelpCircle size={18} /> },
    { id: "settings",     label: "تنظیمات",   icon: <Settings size={18} /> },
  ];
  return (
    <nav style={{
      position: "fixed", bottom: 0, left: 0, right: 0,
      background: "rgba(10,10,15,0.96)",
      borderTop: "1px solid rgba(255,255,255,0.06)",
      backdropFilter: "blur(20px)",
      display: "flex", justifyContent: "center", gap: 0,
      overflowX: "auto", paddingBottom: 20, zIndex: 100,
    }}>
      {items.map((item) => (
        <button
          key={item.id} id={`nav-${item.id}`}
          className={`nav-item ${page === item.id ? "active" : ""}`}
          onClick={() => onNav(item.id)}
          style={{ flexShrink: 0, padding: "8px 12px", minWidth: 68 }}
        >
          {item.icon}
          <span style={{ fontSize: 9 }}>{item.label}</span>
        </button>
      ))}
    </nav>
  );
}

// ─── Study Page ───────────────────────────────────────────────────────────────
function StudyPage({ chapterNum, onBack, onGoToQuiz }: {
  chapterNum: number;
  onBack: () => void;
  onGoToQuiz: () => void;
}) {
  const content = contentRegistry[chapterNum];
  const [openSection, setOpenSection] = useState<string | null>(
    content?.sections[0]?.id ?? null
  );
  // ── Underline state: { sectionId: Set of para indices underlined }
  const [underlines, setUnderlines] = useState<Record<string, number[]>>(() => {
    try { return JSON.parse(localStorage.getItem(`ul-${chapterNum}`) || "{}"); } catch { return {}; }
  });
  // ── Note state: { sectionId: note text }
  const [userNotes, setUserNotes] = useState<Record<string, string>>(() => {
    try { return JSON.parse(localStorage.getItem(`notes-${chapterNum}`) || "{}"); } catch { return {}; }
  });
  // ── UI mode per section
  const [underlineMode, setUnderlineMode] = useState<string | null>(null);
  const [noteOpen, setNoteOpen] = useState<string | null>(null);

  const toggleUnderline = (sectionId: string, paraIdx: number) => {
    const cur = underlines[sectionId] || [];
    const next = cur.includes(paraIdx) ? cur.filter(i => i !== paraIdx) : [...cur, paraIdx];
    const upd = { ...underlines, [sectionId]: next };
    setUnderlines(upd);
    localStorage.setItem(`ul-${chapterNum}`, JSON.stringify(upd));
  };

  const saveNote = (sectionId: string, text: string) => {
    const upd = { ...userNotes, [sectionId]: text };
    setUserNotes(upd);
    localStorage.setItem(`notes-${chapterNum}`, JSON.stringify(upd));
  };

  if (!content) {
    return (
      <div style={{ padding: "40px 20px", textAlign: "center" }}>
        <p style={{ color: "var(--text-muted)" }}>محتوای آموزشی برای این فصل هنوز اضافه نشده است.</p>
        <button className="btn-secondary" style={{ marginTop: 20 }} onClick={onBack}>← بازگشت</button>
      </div>
    );
  }

  return (
    <div className="page-wrap-slim">
      {/* Top bar */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 20 }}>
        <button id="btn-study-back" className="btn-secondary"
          style={{ padding: "8px 16px", fontSize: 13 }} onClick={onBack}>
          ← خروج
        </button>
        <div style={{ textAlign: "center" }}>
          <div style={{ fontSize: 11, color: "var(--accent-primary)", fontWeight: 700, letterSpacing: "0.08em" }}>
            فصل {chapterNum}
          </div>
          <div style={{ fontSize: 13, fontWeight: 600, color: "var(--text-secondary)" }}>مطالعه</div>
        </div>
        <button id="btn-study-go-quiz" className="btn-primary"
          style={{ padding: "8px 14px", fontSize: 12 }} onClick={onGoToQuiz}>
          آزمون ←
        </button>
      </div>

      {/* Chapter header */}
      <div className="glass-card animate-fade-in-up" style={{
        padding: "20px 22px", marginBottom: 16,
        background: "linear-gradient(135deg, rgba(99,102,241,0.15), rgba(139,92,246,0.08))",
        border: "1px solid rgba(99,102,241,0.3)",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
          <GraduationCap size={20} color="var(--accent-primary)" />
          <span style={{ fontSize: 12, fontWeight: 700, color: "var(--accent-primary)", letterSpacing: "0.06em" }}>
            {content.pageRange}
          </span>
        </div>
        <h1 style={{ fontSize: 16, fontWeight: 800, lineHeight: 1.5, marginBottom: 6, direction: "rtl", textAlign: "right" }}>
          {content.titleFa}
        </h1>
        <p style={{ fontSize: 12, color: "var(--text-muted)", lineHeight: 1.5, fontStyle: "italic" }}>
          {content.titleIt}
        </p>
      </div>

      {/* Summary card */}
      {content.summary && (
        <div className="animate-fade-in-up" style={{
          background: "rgba(251,191,36,0.07)", border: "1px solid rgba(251,191,36,0.2)",
          borderRadius: 14, padding: "14px 18px", marginBottom: 16,
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
            <Sparkles size={14} color="#fbbf24" />
            <span style={{ fontSize: 11, fontWeight: 700, color: "#fbbf24", letterSpacing: "0.06em" }}>خلاصه فصل</span>
          </div>
          <p style={{ fontSize: 13, color: "var(--text-secondary)", lineHeight: 1.8, direction: "rtl", textAlign: "right", margin: 0 }}>
            {content.summary}
          </p>
        </div>
      )}

      {/* Sections */}
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        {content.sections.map((section, idx) => {
          const isOpen = openSection === section.id;
          return (
            <div key={section.id} className="glass-card animate-fade-in-up"
              style={{ overflow: "hidden", animationDelay: `${idx * 0.04}s`, padding: 0 }}>
              <button onClick={() => setOpenSection(isOpen ? null : section.id)}
                style={{ width: "100%", display: "flex", alignItems: "center",
                  justifyContent: "space-between", padding: "16px 20px",
                  background: "none", border: "none", cursor: "pointer", textAlign: "left", gap: 12 }}>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 10, fontWeight: 700, color: "var(--accent-primary)",
                    letterSpacing: "0.06em", marginBottom: 4 }}>{section.titleIt}</div>
                  <div style={{ fontSize: 15, fontWeight: 700, direction: "rtl",
                    color: "var(--text-primary)", lineHeight: 1.4 }}>{section.titleFa}</div>
                </div>
                <div style={{ flexShrink: 0, color: "var(--text-muted)" }}>
                  {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                </div>
              </button>

              {isOpen && (
                <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", padding: "4px 0 16px" }}>

                  {/* 🛠 Section Toolbar */}
                  <div style={{ display: "flex", gap: 6, padding: "8px 20px 4px", justifyContent: "flex-end" }}>
                    {/* Underline toggle */}
                    <button
                      onClick={() => setUnderlineMode(underlineMode === section.id ? null : section.id)}
                      style={{
                        display: "flex", alignItems: "center", gap: 4,
                        padding: "4px 10px", borderRadius: 8, border: "1px solid",
                        fontSize: 11, fontWeight: 600, cursor: "pointer",
                        borderColor: underlineMode === section.id ? "#a78bfa" : "rgba(255,255,255,0.1)",
                        background: underlineMode === section.id ? "rgba(167,139,250,0.15)" : "rgba(255,255,255,0.04)",
                        color: underlineMode === section.id ? "#a78bfa" : "var(--text-muted)",
                      }}
                      title="حالت زیرخط‌کشی — روی هر پاراگراف کلیک کنید"
                    >
                      <Underline size={12} />
                      {underlineMode === section.id ? "خروج underline" : "underline"}
                    </button>
                    {/* Note toggle */}
                    <button
                      onClick={() => setNoteOpen(noteOpen === section.id ? null : section.id)}
                      style={{
                        display: "flex", alignItems: "center", gap: 4,
                        padding: "4px 10px", borderRadius: 8, border: "1px solid",
                        fontSize: 11, fontWeight: 600, cursor: "pointer",
                        borderColor: (userNotes[section.id] || noteOpen === section.id) ? "#fbbf24" : "rgba(255,255,255,0.1)",
                        background: (userNotes[section.id] || noteOpen === section.id) ? "rgba(251,191,36,0.12)" : "rgba(255,255,255,0.04)",
                        color: (userNotes[section.id] || noteOpen === section.id) ? "#fbbf24" : "var(--text-muted)",
                      }}
                    >
                      <StickyNote size={12} />
                      نت گذاری
                    </button>
                  </div>

                  {/* 🗒 User Note (post-it) */}
                  {noteOpen === section.id && (
                    <div style={{ padding: "0 20px 12px" }}>
                      <div style={{
                        background: "rgba(251,191,36,0.08)", border: "1px solid rgba(251,191,36,0.25)",
                        borderRadius: 12, padding: "12px",
                      }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 8 }}>
                          <StickyNote size={13} color="#fbbf24" />
                          <span style={{ fontSize: 11, fontWeight: 700, color: "#fbbf24" }}>یادداشت شخصی</span>
                          {userNotes[section.id] && (
                            <button onClick={() => saveNote(section.id, "")}
                              style={{ marginRight: "auto", fontSize: 10, color: "rgba(239,68,68,0.7)",
                                background: "none", border: "none", cursor: "pointer" }}>
                              حذف یادداشت
                            </button>
                          )}
                        </div>
                        <textarea
                          value={userNotes[section.id] || ""}
                          onChange={e => saveNote(section.id, e.target.value)}
                          placeholder="یادداشت خود را اینجا بنویسید..."
                          style={{
                            width: "100%", minHeight: 90, resize: "vertical",
                            background: "rgba(251,191,36,0.06)", border: "1px solid rgba(251,191,36,0.2)",
                            borderRadius: 8, padding: "8px 10px",
                            fontSize: 13, color: "#fde68a", lineHeight: 1.7,
                            direction: "rtl", textAlign: "right",
                            fontFamily: "inherit", outline: "none",
                          }}
                        />
                      </div>
                    </div>
                  )}

                  {/* Body paragraphs */}
                  <div style={{ padding: "0 20px", display: "flex", flexDirection: "column", gap: 12, marginBottom: 16 }}>
                    {underlineMode === section.id && (
                      <div style={{ fontSize: 11, color: "#a78bfa", direction: "rtl", textAlign: "right",
                        padding: "4px 8px", background: "rgba(167,139,250,0.08)", borderRadius: 6 }}>
                        💡 روی هر پاراگراف کلیک کنید تا زیرخط بگیرد / برداشته شود
                      </div>
                    )}
                    {section.body.map((para, pIdx) => {
                      const isUnderlined = (underlines[section.id] || []).includes(pIdx);
                      const inUlMode = underlineMode === section.id;
                      return (
                        <p key={pIdx}
                          onClick={() => inUlMode && toggleUnderline(section.id, pIdx)}
                          style={{
                            fontSize: 14, lineHeight: 1.8, direction: "rtl", textAlign: "right",
                            color: "var(--text-secondary)",
                            background: isUnderlined ? "rgba(167,139,250,0.08)"
                              : para.startsWith("⚠️") || para.startsWith("🚫") ? "rgba(239,68,68,0.06)"
                              : para.startsWith("✅") ? "rgba(16,185,129,0.06)" : "transparent",
                            borderRadius: (isUnderlined || para.startsWith("⚠️") || para.startsWith("🚫") || para.startsWith("✅")) ? 10 : 0,
                            padding: (isUnderlined || para.startsWith("⚠️") || para.startsWith("🚫") || para.startsWith("✅")) ? "10px 14px" : 0,
                            borderRight: isUnderlined ? "3px solid #a78bfa"
                              : para.startsWith("📌") ? "3px solid var(--accent-primary)" : "none",
                            paddingRight: (isUnderlined || para.startsWith("📌")) ? 12 : undefined,
                            whiteSpace: "pre-line",
                            cursor: inUlMode ? "pointer" : "default",
                            transition: "all 0.15s ease",
                            textDecoration: isUnderlined ? "underline dotted rgba(167,139,250,0.6)" : "none",
                            textUnderlineOffset: "4px",
                          }}
                        >{para}</p>
                      );
                    })}
                  </div>

                  {/* ★ Starred Notes */}
                  {section.notes && section.notes.length > 0 && (
                    <div style={{ padding: "0 16px", marginBottom: 14 }}>
                      <div style={{ background: "rgba(251,191,36,0.07)", border: "1px solid rgba(251,191,36,0.2)", borderRadius: 12, padding: "12px 16px" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 8 }}>
                          <Star size={13} color="#fbbf24" fill="#fbbf24" />
                          <span style={{ fontSize: 11, fontWeight: 700, color: "#fbbf24" }}>نکات مهم</span>
                        </div>
                        <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                          {section.notes.map((note, nIdx) => (
                            <p key={nIdx} style={{ fontSize: 13, color: "#fde68a", lineHeight: 1.7, direction: "rtl", textAlign: "right", margin: 0 }}>
                              {note}
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* 🔴 Highlights — test-referenced phrases */}
                  {section.highlights && section.highlights.length > 0 && (
                    <div style={{ padding: "0 16px", marginBottom: 14 }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 8, padding: "0 2px" }}>
                        <Highlighter size={13} color="#f97316" />
                        <span style={{ fontSize: 11, fontWeight: 700, color: "#f97316" }}>جمله‌های مرجع آزمون</span>
                      </div>
                      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                        {section.highlights.map((hl, hIdx) => (
                          <p key={hIdx} style={{
                            fontSize: 12, lineHeight: 1.7, fontStyle: "italic",
                            color: "var(--text-secondary)", margin: 0,
                            padding: "8px 14px",
                            background: "rgba(249,115,22,0.06)",
                            borderLeft: "3px solid rgba(249,115,22,0.5)",
                            borderRadius: "0 8px 8px 0",
                          }}>
                            &ldquo;{hl}&rdquo;
                          </p>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* 🇮🇹 → 🇬🇧 English Equivalents */}
                  {section.englishEquivalents && section.englishEquivalents.length > 0 && (
                    <div style={{ padding: "0 16px", marginBottom: 14 }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 8, padding: "0 2px" }}>
                        <BookOpen size={13} color="#34d399" />
                        <span style={{ fontSize: 11, fontWeight: 700, color: "#34d399" }}>معادل‌های انگلیسی (حفظ آسان‌تر)</span>
                      </div>
                      <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                        {section.englishEquivalents.map((eq, eIdx) => (
                          <div key={eIdx} style={{
                            background: "rgba(52,211,153,0.07)", border: "1px solid rgba(52,211,153,0.2)",
                            borderRadius: 10, padding: "6px 12px",
                          }}>
                            <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                              <span style={{ fontSize: 12, fontWeight: 700, color: "#34d399", fontStyle: "italic" }}>{eq.italian}</span>
                              <span style={{ fontSize: 10, color: "#666" }}>≈</span>
                              <span style={{ fontSize: 12, color: "var(--text-secondary)" }}>{eq.english}</span>
                            </div>
                            {eq.note && (
                              <p style={{ fontSize: 10, color: "var(--text-muted)", margin: "2px 0 0", direction: "rtl", textAlign: "right" }}>{eq.note}</p>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* 🗝️ Key Verbs */}
                  {section.keyVerbs && section.keyVerbs.length > 0 && (
                    <div style={{ padding: "0 16px" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10, padding: "0 4px" }}>
                        <Languages size={15} color="var(--accent-secondary)" />
                        <span style={{ fontSize: 11, fontWeight: 700, color: "var(--accent-secondary)", letterSpacing: "0.08em" }}>
                          افعال و اصطلاحات کلیدی
                        </span>
                      </div>
                      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                        {section.keyVerbs.map((verb, vIdx) => (
                          <div key={vIdx} style={{
                            background: "rgba(99,102,241,0.06)", border: "1px solid rgba(99,102,241,0.15)",
                            borderRadius: 10, padding: "12px 14px",
                          }}>
                            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6, flexWrap: "wrap" }}>
                              <code style={{ fontSize: 13, fontWeight: 700, color: "#a78bfa",
                                background: "rgba(167,139,250,0.12)", padding: "2px 8px", borderRadius: 6 }}>
                                {verb.italian}
                              </code>
                              <span style={{ fontSize: 12, color: "var(--text-muted)" }}>←</span>
                              <span style={{ fontSize: 13, fontWeight: 600, color: "var(--text-primary)", direction: "rtl" }}>
                                {verb.persian}
                              </span>
                            </div>
                            <p style={{ fontSize: 12, color: "var(--text-muted)", lineHeight: 1.6,
                              fontStyle: "italic", direction: "rtl", textAlign: "right", margin: 0, whiteSpace: "pre-line" }}>
                              {verb.example}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* 🖼 Supplementary Images */}
                  {section.images && section.images.length > 0 && (
                    <div style={{ padding: "0 16px", marginTop: 6 }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 8 }}>
                        <ImageIcon size={13} color="#60a5fa" />
                        <span style={{ fontSize: 11, fontWeight: 700, color: "#60a5fa" }}>عکس‌های تکمیلی</span>
                      </div>
                      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                        {section.images.map((img, iIdx) => (
                          <div key={iIdx} style={{ borderRadius: 10, overflow: "hidden", border: "1px solid rgba(96,165,250,0.2)" }}>
                            <img src={img.src} alt={img.caption || ""} style={{ width: "100%", display: "block" }} />
                            {img.caption && (
                              <p style={{ fontSize: 11, color: "var(--text-muted)", textAlign: "center",
                                padding: "6px 10px", margin: 0, direction: "rtl" }}>{img.caption}</p>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* 🎬 Video Panel */}
                  <div style={{ padding: "10px 16px 0" }}>
                    <VideoPanel chapterNum={chapterNum} />
                  </div>

                </div>
              )}
            </div>
          );
        })}
      </div>

      <div style={{ marginTop: 28, display: "flex", flexDirection: "column", gap: 12 }}>
        <button id="btn-study-start-quiz" className="btn-primary" style={{ width: "100%" }} onClick={onGoToQuiz}>
          🎯 شروع آزمون فصل {chapterNum}
        </button>
        <button className="btn-secondary" style={{ width: "100%" }} onClick={onBack}>
          ← بازگشت به فصل‌ها
        </button>
      </div>
    </div>
  );
}


// ─── Home Page ────────────────────────────────────────────────────────────────
function HomePage({ progress, onNavigate, onSelectChapter, onStudyChapter }: {
  progress: UserProgress;
  onNavigate: (p: Page) => void;
  onSelectChapter: (ch: number) => void;
  onStudyChapter: (ch: number) => void;
}) {
  const accuracy   = getAccuracy(progress);
  const availableCount = chapters.filter((c) => c.available).length;
  const doneCount  = Object.values(progress.chapterStats).filter(s => s.answered > 0).length;
  const pct        = availableCount > 0 ? Math.round((doneCount / availableCount) * 100) : 0;
  const circumference = 2 * Math.PI * 26; // r=26

  return (
    <div className="page-wrap">

      {/* ── Hero header ───────────────────────────────────────────────────── */}
      <div className="animate-fade-in-up" style={{ marginBottom: 28 }}>
        {/* Badge */}
        <div style={{
          display: "inline-flex", alignItems: "center", gap: 8,
          background: "rgba(147,51,234,0.12)", border: "1px solid rgba(147,51,234,0.25)",
          borderRadius: 20, padding: "5px 14px", marginBottom: 14,
        }}>
          <ItalianFlag />
          <span style={{ fontSize: 11, color: "#c084fc", fontWeight: 700, letterSpacing: "0.08em" }}>
            PATENTE B · CODICE DELLA STRADA
          </span>
        </div>

        <h1 style={{ fontSize: 30, fontWeight: 900, lineHeight: 1.25, marginBottom: 6, direction: "rtl" }}>
          آموزش{" "}
          <span style={{
            background: "linear-gradient(135deg, #9333ea, #f97316)",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
          }}>
            گواهینامه ایتالیایی
          </span>
        </h1>
        <p style={{ fontSize: 13, color: "var(--text-muted)", direction: "rtl" }}>
          آزمون تمرینی، مطالعه فارسی، پیگیری پیشرفت
        </p>
      </div>

      {/* ── Stats cards ───────────────────────────────────────────────────── */}
      <div className="animate-fade-in-up" style={{
        display: "grid", gridTemplateColumns: "1fr 1fr 1fr",
        gap: 10, marginBottom: 24, animationDelay: "0.08s",
      }}>
        {/* Accuracy */}
        <div style={{
          background: "linear-gradient(135deg, rgba(99,102,241,0.18), rgba(139,92,246,0.1))",
          border: "1px solid rgba(99,102,241,0.3)", borderRadius: 16,
          padding: "16px 10px", textAlign: "center",
          display: "flex", flexDirection: "column", alignItems: "center", gap: 6,
        }}>
          <Target size={20} color="#818cf8" />
          <span style={{ fontSize: 22, fontWeight: 900, color: "#818cf8" }}>{accuracy}%</span>
          <span style={{ fontSize: 10, color: "var(--text-muted)", fontWeight: 600 }}>دقت</span>
        </div>
        {/* Answers */}
        <div style={{
          background: "linear-gradient(135deg, rgba(249,115,22,0.15), rgba(234,88,12,0.08))",
          border: "1px solid rgba(249,115,22,0.25)", borderRadius: 16,
          padding: "16px 10px", textAlign: "center",
          display: "flex", flexDirection: "column", alignItems: "center", gap: 6,
        }}>
          <Zap size={20} color="#fb923c" />
          <span style={{ fontSize: 22, fontWeight: 900, color: "#fb923c" }}>{progress.totalAnswered}</span>
          <span style={{ fontSize: 10, color: "var(--text-muted)", fontWeight: 600 }}>پاسخ داده</span>
        </div>
        {/* Streak */}
        <div style={{
          background: progress.streak > 0
            ? "linear-gradient(135deg, rgba(251,191,36,0.15), rgba(245,158,11,0.08))"
            : "rgba(255,255,255,0.03)",
          border: `1px solid ${progress.streak > 0 ? "rgba(251,191,36,0.3)" : "rgba(255,255,255,0.07)"}`,
          borderRadius: 16, padding: "16px 10px", textAlign: "center",
          display: "flex", flexDirection: "column", alignItems: "center", gap: 6,
        }}>
          <Flame size={20} color={progress.streak > 0 ? "#fbbf24" : "#6b7280"} />
          <span style={{ fontSize: 22, fontWeight: 900, color: progress.streak > 0 ? "#fbbf24" : "var(--text-muted)" }}>
            {progress.streak}
          </span>
          <span style={{ fontSize: 10, color: "var(--text-muted)", fontWeight: 600 }}>روز 🔥</span>
        </div>
      </div>

      {/* ── Progress overview card ─────────────────────────────────────────── */}
      <div className="animate-fade-in-up glass-card" style={{ padding: "20px", marginBottom: 20, animationDelay: "0.12s" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 18 }}>
          {/* SVG ring */}
          <div style={{ position: "relative", width: 64, height: 64, flexShrink: 0 }}>
            <svg width="64" height="64" viewBox="0 0 64 64">
              <circle cx="32" cy="32" r="26" fill="none" stroke="rgba(147,51,234,0.12)" strokeWidth="7" />
              <circle cx="32" cy="32" r="26" fill="none"
                stroke="url(#pgGrad)" strokeWidth="7"
                strokeDasharray={circumference}
                strokeDashoffset={circumference * (1 - pct / 100)}
                strokeLinecap="round"
                style={{ transform: "rotate(-90deg)", transformOrigin: "32px 32px", transition: "stroke-dashoffset 1s ease" }}
              />
              <defs>
                <linearGradient id="pgGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#9333ea" />
                  <stop offset="100%" stopColor="#f97316" />
                </linearGradient>
              </defs>
              <text x="32" y="37" textAnchor="middle" fill="white" fontSize="12" fontWeight="800">{pct}%</text>
            </svg>
          </div>
          <div style={{ flex: 1, direction: "rtl" }}>
            <h2 style={{ fontSize: 16, fontWeight: 800, marginBottom: 4 }}>پیشرفت مطالعه</h2>
            <p style={{ fontSize: 12, color: "var(--text-secondary)", lineHeight: 1.6 }}>
              <strong style={{ color: "#c084fc" }}>{doneCount}</strong> فصل تمرین شده از{" "}
              <strong style={{ color: "var(--text-primary)" }}>{availableCount}</strong> فصل در دسترس
            </p>
            {progress.completedQuizzes > 0 && (
              <p style={{ fontSize: 11, color: "var(--text-muted)", marginTop: 3 }}>
                🏆 {progress.completedQuizzes} آزمون کامل شده
              </p>
            )}
          </div>
        </div>

        {/* Chapter dots grid */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 16 }}>
          {chapters.map((ch) => {
            const stats = progress.chapterStats[String(ch.number)];
            const done = stats && stats.answered > 0;
            const acc = done ? Math.round((stats.correct / stats.answered) * 100) : null;
            return (
              <div
                key={ch.number}
                title={`فصل ${ch.number}: ${ch.title}`}
                onClick={() => ch.available && onSelectChapter(ch.number)}
                style={{
                  width: 30, height: 30, borderRadius: 9,
                  background: !ch.available ? "rgba(255,255,255,0.03)"
                    : done && acc !== null && acc >= 70 ? "linear-gradient(135deg, #22c55e, #16a34a)"
                    : done ? "linear-gradient(135deg, #f97316, #dc2626)"
                    : "rgba(147,51,234,0.18)",
                  border: ch.available
                    ? done ? "1px solid rgba(255,255,255,0.2)" : "1px solid rgba(147,51,234,0.35)"
                    : "1px solid rgba(255,255,255,0.05)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 10, fontWeight: 700,
                  color: ch.available ? "white" : "rgba(255,255,255,0.2)",
                  cursor: ch.available ? "pointer" : "default",
                  transition: "all 0.2s",
                  boxShadow: done ? "0 2px 8px rgba(0,0,0,0.3)" : "none",
                }}
              >
                {ch.number}
              </div>
            );
          })}
        </div>

        {/* Legend */}
        <div style={{ display: "flex", gap: 14, marginBottom: 16, direction: "rtl", flexWrap: "wrap" }}>
          {[
            { color: "linear-gradient(135deg,#22c55e,#16a34a)", label: "≥۷۰٪" },
            { color: "linear-gradient(135deg,#f97316,#dc2626)", label: "تمرین شده" },
            { color: "rgba(147,51,234,0.18)", label: "شروع نشده" },
          ].map(l => (
            <div key={l.label} style={{ display: "flex", alignItems: "center", gap: 5 }}>
              <div style={{ width: 12, height: 12, borderRadius: 4, background: l.color, border: "1px solid rgba(255,255,255,0.1)" }} />
              <span style={{ fontSize: 10, color: "var(--text-muted)" }}>{l.label}</span>
            </div>
          ))}
        </div>

        <button id="btn-go-chapters" className="btn-primary" style={{ width: "100%", fontSize: 14 }}
          onClick={() => onNavigate("chapters")}>
          مشاهده همه ۲۵ فصل ←
        </button>
      </div>

      {/* ── Quick actions ─────────────────────────────────────────────────── */}
      <div className="animate-fade-in-up" style={{ marginBottom: 24, animationDelay: "0.16s" }}>
        <div style={{ fontSize: 12, fontWeight: 700, color: "var(--text-muted)", marginBottom: 10, direction: "rtl" }}>
          ⚡ دسترسی سریع
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
          {[
            { icon: "🎯", label: "آزمون مختلط", sub: "از همه فصل‌ها", id: "mixed", color: "#818cf8" },
            { icon: "📋", label: "آزمون استاندارد", sub: "۳۰ سوال", id: "standard", color: "#34d399" },
            { icon: "🔍", label: "مرور سوالات", sub: "با جواب", id: "browse", color: "#f59e0b" },
            { icon: "📊", label: "گزارش آمار", sub: "پیشرفت تفصیلی", id: "charts", color: "#f87171" },
          ].map(a => (
            <button key={a.id} onClick={() => onNavigate(a.id as Page)} style={{
              background: "var(--bg-card)", border: "1px solid rgba(255,255,255,0.06)",
              borderRadius: 16, padding: "14px 16px", cursor: "pointer",
              display: "flex", alignItems: "center", gap: 12, direction: "rtl",
              transition: "all 0.2s", textAlign: "right",
            }}>
              <div style={{
                width: 40, height: 40, borderRadius: 12, flexShrink: 0,
                background: `${a.color}18`, border: `1px solid ${a.color}30`,
                display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20,
              }}>{a.icon}</div>
              <div>
                <div style={{ fontSize: 13, fontWeight: 700, color: "var(--text-primary)" }}>{a.label}</div>
                <div style={{ fontSize: 11, color: "var(--text-muted)" }}>{a.sub}</div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* ── Chapter cards ─────────────────────────────────────────────────── */}
      {chapters.filter(c => c.available).map((ch) => {
        const stats = progress.chapterStats[String(ch.number)];
        const answered = stats?.answered ?? 0;
        const correct  = stats?.correct ?? 0;
        const acc = answered > 0 ? Math.round((correct / answered) * 100) : null;
        const total = questions.filter(q => q.chapter === ch.number).length;
        const hasContent = !!contentRegistry[ch.number];
        const accColor = acc === null ? "var(--text-muted)"
          : acc >= 70 ? "#22c55e" : acc >= 40 ? "#f59e0b" : "#ef4444";

        return (
          <div key={ch.number} className="animate-fade-in-up glass-card"
            style={{ padding: "18px", marginBottom: 12, animationDelay: "0.2s" }}>
            {/* Top row */}
            <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 14 }}>
              {/* Icon */}
              <div style={{
                width: 48, height: 48, borderRadius: 14, flexShrink: 0,
                background: "linear-gradient(135deg, rgba(99,102,241,0.3), rgba(139,92,246,0.2))",
                border: "1px solid rgba(99,102,241,0.3)",
                display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22,
              }}>
                {ch.icon}
              </div>
              {/* Info */}
              <div style={{ flex: 1, direction: "rtl" }}>
                <div style={{ fontSize: 10, color: "#a78bfa", fontWeight: 700, letterSpacing: "0.05em", marginBottom: 2 }}>
                  فصل {ch.number}
                </div>
                <div style={{ fontSize: 15, fontWeight: 800, color: "var(--text-primary)", marginBottom: 2 }}>{ch.title}</div>
                <div style={{ fontSize: 11, color: "var(--text-muted)" }}>{total} سوال</div>
              </div>
              {/* Accuracy badge */}
              {acc !== null ? (
                <div style={{
                  textAlign: "center", background: `${accColor}15`,
                  border: `1px solid ${accColor}30`, borderRadius: 12,
                  padding: "6px 12px", flexShrink: 0,
                }}>
                  <div style={{ fontSize: 18, fontWeight: 900, color: accColor }}>{acc}%</div>
                  <div style={{ fontSize: 9, color: "var(--text-muted)" }}>دقت</div>
                </div>
              ) : (
                <div style={{
                  textAlign: "center", background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.07)", borderRadius: 12,
                  padding: "6px 12px", flexShrink: 0,
                }}>
                  <div style={{ fontSize: 18 }}>🆕</div>
                  <div style={{ fontSize: 9, color: "var(--text-muted)" }}>جدید</div>
                </div>
              )}
            </div>

            {/* Progress bar */}
            {answered > 0 && (
              <div style={{ marginBottom: 14 }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 5, direction: "rtl" }}>
                  <span style={{ fontSize: 10, color: "var(--text-muted)" }}>{answered} سوال تمرین شده</span>
                  <span style={{ fontSize: 10, color: accColor, fontWeight: 700 }}>{correct} صحیح</span>
                </div>
                <div style={{ height: 5, borderRadius: 3, background: "rgba(255,255,255,0.06)", overflow: "hidden" }}>
                  <div style={{
                    height: "100%", borderRadius: 3,
                    width: `${Math.min(100, (answered / total) * 100)}%`,
                    background: `linear-gradient(90deg, ${accColor}, ${accColor}90)`,
                    transition: "width 0.8s ease",
                  }} />
                </div>
              </div>
            )}

            {/* Actions */}
            <div style={{ display: "flex", gap: 8 }}>
              {hasContent && (
                <button id={`btn-study-ch${ch.number}`} className="btn-secondary"
                  style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: 6, fontSize: 13 }}
                  onClick={() => onStudyChapter(ch.number)}>
                  <BookOpen size={14} /> مطالعه
                </button>
              )}
              <button id={`btn-start-ch${ch.number}`} className="btn-primary"
                style={{ flex: hasContent ? 1 : 2, fontSize: 13 }}
                onClick={() => onSelectChapter(ch.number)}>
                ✍️ آزمون
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}


// ── presetCount helper — how many questions match each preset ─────────────────
function presetCount(mode: string, progress: UserProgress): number {
  if (mode === "hard") return getHardQuestionIds().length;
  if (mode === "flagged") return getFlaggedQuestionIds(progress).length;
  if (mode === "wrong") return getWrongQuestionIds(progress).length;
  if (mode === "tagged0") return getTaggedQuestionIds(progress, 0).length;
  if (mode === "tagged1") return getTaggedQuestionIds(progress, 1).length;
  if (mode === "tagged2") return getTaggedQuestionIds(progress, 2).length;
  if (mode === "hardWrong") {
    const hard = new Set(getHardQuestionIds());
    return getWrongQuestionIds(progress).filter((id) => hard.has(id)).length;
  }
  return 0;
}

// ─── Chapters Page ────────────────────────────────────────────────────────────
function ChaptersPage({ progress, onSelectChapter, onStudyChapter, onMixedQuiz, onStandardQuiz, onBrowse, onPresetQuiz }: {
  progress: UserProgress;
  onSelectChapter: (ch: number) => void;
  onStudyChapter: (ch: number) => void;
  onMixedQuiz?: () => void;
  onStandardQuiz?: () => void;
  onBrowse?: () => void;
  onPresetQuiz?: (mode: string) => void;
}) {
  const [search, setSearch] = useState("");
  const filtered = chapters.filter(ch =>
    !search ||
    ch.title.toLowerCase().includes(search.toLowerCase()) ||
    String(ch.number).includes(search)
  );

  return (
    <div className="page-wrap">
      <div className="animate-fade-in-up" style={{ marginBottom: 20 }}>
        <h1 style={{ fontSize: 26, fontWeight: 800, marginBottom: 6, direction: "rtl" }}>۲۵ فصل آیین‌نامه</h1>
        <p style={{ color: "var(--text-secondary)", fontSize: 14, direction: "rtl", textAlign: "right" }}>
          هر فصل دو بخش دارد:{" "}
          <strong style={{ color: "var(--text-primary)" }}>📖 مطالعه</strong> و{" "}
          <strong style={{ color: "var(--text-primary)" }}>🎯 آزمون</strong>.
        </p>
      </div>

      {/* Search + Action bar */}
      <div style={{ display: "flex", gap: 8, marginBottom: 18, flexWrap: "wrap" }}>
        <div style={{ flex: 1, minWidth: 160, position: "relative" }}>
          <input
            type="text" value={search} onChange={e => setSearch(e.target.value)}
            placeholder="جستجو فصل..."
            style={{
              width: "100%", boxSizing: "border-box",
              background: "rgba(255,255,255,0.04)", border: "1px solid rgba(147,51,234,0.2)",
              borderRadius: 12, padding: "10px 14px", color: "white", fontSize: 13,
              outline: "none", direction: "rtl",
            }}
          />
        </div>
        {onBrowse && (
          <button id="btn-browse" onClick={onBrowse}
            style={{
              flexShrink: 0, padding: "10px 13px", borderRadius: 12, fontSize: 12,
              fontWeight: 700, border: "1px solid rgba(96,165,250,0.3)",
              background: "rgba(96,165,250,0.08)", color: "#60a5fa", cursor: "pointer",
              display: "flex", alignItems: "center", gap: 5, whiteSpace: "nowrap",
            }}>
            <BookOpen size={13} /> مرور جواب‌دار
          </button>
        )}
        {onStandardQuiz && (
          <button id="btn-standard-quiz" onClick={onStandardQuiz}
            style={{
              flexShrink: 0, padding: "10px 13px", borderRadius: 12, fontSize: 12,
              fontWeight: 700, border: "1px solid rgba(34,211,165,0.3)",
              background: "rgba(34,211,165,0.08)", color: "#22d3a5", cursor: "pointer",
              display: "flex", alignItems: "center", gap: 5, whiteSpace: "nowrap",
            }}>
            <Timer size={13} /> استاندارد ۳۰ت
          </button>
        )}
        {onMixedQuiz && (
          <button id="btn-mixed-quiz" onClick={onMixedQuiz}
            style={{
              flexShrink: 0, padding: "10px 13px", borderRadius: 12, fontSize: 12,
              fontWeight: 700, border: "1px solid rgba(249,115,22,0.3)",
              background: "rgba(249,115,22,0.08)", color: "#f97316", cursor: "pointer",
              display: "flex", alignItems: "center", gap: 5, whiteSpace: "nowrap",
            }}>
            <Zap size={13} /> ترکیبی
          </button>
        )}
      </div>

      {/* ── Query Presets ── */}
      {onPresetQuiz && (
        <div style={{ marginBottom: 20 }}>
          <div style={{ fontSize: 11, fontWeight: 700, color: "var(--text-muted)", marginBottom: 8, letterSpacing: "0.07em" }}>
            🎲 تست هوشمند
          </div>
          <div style={{ display: "flex", gap: 8, overflowX: "auto", paddingBottom: 4 }}>
            {QUERY_PRESETS.map(preset => {
              const count = presetCount(preset.mode, progress);
              return (
                <button key={preset.id}
                  onClick={() => count > 0 && onPresetQuiz(preset.mode)}
                  disabled={count === 0}
                  title={preset.description}
                  style={{
                    flexShrink: 0, display: "flex", flexDirection: "column", alignItems: "center", gap: 3,
                    padding: "9px 12px", borderRadius: 12, border: "1px solid rgba(255,255,255,0.08)",
                    background: count > 0 ? "rgba(255,255,255,0.04)" : "rgba(255,255,255,0.02)",
                    cursor: count > 0 ? "pointer" : "not-allowed",
                    opacity: count > 0 ? 1 : 0.4, transition: "all 0.15s",
                    minWidth: 72,
                  }}>
                  <span style={{ fontSize: 18 }}>{preset.icon}</span>
                  <span style={{ fontSize: 10, fontWeight: 700, color: "var(--text-secondary)" }}>{preset.label}</span>
                  <span style={{ fontSize: 10, color: "var(--text-muted)" }}>{count} سوال</span>
                </button>
              );
            })}
          </div>
        </div>
      )}

      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        {filtered.map((ch, i) => {
          const stats = progress.chapterStats[String(ch.number)];
          const acc = stats && stats.answered > 0
            ? Math.round((stats.correct / stats.answered) * 100) : null;
          const total = questions.filter(q => q.chapter === ch.number).length;
          const hasContent = !!contentRegistry[ch.number];

          return (
            <div key={ch.number} className="glass-card animate-fade-in-up"
              style={{ opacity: ch.available ? 1 : 0.45, animationDelay: `${i * 0.03}s`,
                padding: "14px 18px", border: "1px solid var(--border-subtle)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: ch.available ? 12 : 0 }}>
                <div style={{ width: 40, height: 40, borderRadius: 12, flexShrink: 0,
                  background: ch.available ? "linear-gradient(135deg, #9333ea, #f97316)" : "rgba(255,255,255,0.06)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 14, fontWeight: 700, color: "white" }}>
                  {ch.available ? ch.icon : <Lock size={14} color="var(--text-muted)" />}
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: 11, fontWeight: 600,
                    color: ch.available ? "#c084fc" : "var(--text-muted)", marginBottom: 2 }}>
                    فصل {String(ch.number).padStart(2, "0")}
                  </div>
                  <div style={{ fontSize: 14, fontWeight: 600, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                    {ch.title}
                  </div>
                  <div style={{ fontSize: 11, color: "var(--text-muted)" }}>
                    {ch.available ? `${total} سوال` : "برای باز کردن عکس‌های فصل را بفرست"}
                  </div>
                  {/* Topic tags from questions */}
                  {ch.available && (() => {
                    const chTags = [...new Set(questions.filter(q => q.chapter === ch.number && q.tags).flatMap(q => q.tags!))];
                    return chTags.length > 0 ? (
                      <div style={{ display: "flex", flexWrap: "wrap", gap: 4, marginTop: 5 }}>
                        {chTags.slice(0, 4).map(tag => (
                          <span key={tag} style={{
                            fontSize: 9, padding: "1px 7px", borderRadius: 8, fontWeight: 600,
                            background: "rgba(147,51,234,0.1)", color: "#a78bfa",
                            border: "1px solid rgba(147,51,234,0.15)",
                          }}>{tag}</span>
                        ))}
                        {chTags.length > 4 && <span style={{ fontSize: 9, color: "var(--text-muted)" }}>+{chTags.length - 4}</span>}
                      </div>
                    ) : null;
                  })()}
                </div>
                {acc !== null && (
                  <span style={{ fontSize: 14, fontWeight: 800, flexShrink: 0,
                    color: acc >= 70 ? "var(--success)" : acc >= 40 ? "var(--warning)" : "var(--error)" }}>
                    {acc}%
                  </span>
                )}
              </div>

              {ch.available && (
                <div style={{ display: "flex", gap: 8 }}>
                  {hasContent && (
                    <button id={`ch-study-${ch.number}`} className="btn-secondary"
                      style={{ flex: 1, padding: "9px 12px", fontSize: 13,
                        display: "flex", alignItems: "center", justifyContent: "center", gap: 6 }}
                      onClick={() => onStudyChapter(ch.number)}>
                      <BookOpen size={14} /> مطالعه
                    </button>
                  )}
                  <button id={`ch-item-${ch.number}`} className="btn-primary"
                    style={{ flex: 1, padding: "9px 12px", fontSize: 13 }}
                    onClick={() => onSelectChapter(ch.number)}>
                    🎯 آزمون
                  </button>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ─── Quiz Page ────────────────────────────────────────────────────────────────
function QuizPage({ chapterNum, onFinish, onBack, mode = "chapter", extraIds = [] }: {
  chapterNum: number;
  onFinish: (score: number, total: number) => void;
  onBack: () => void;
  mode?: QuizMode;
  extraIds?: number[];
}) {
  const ch = chapters.find((c) => c.number === chapterNum);
  const [quiz, setQuiz] = useState<QuizState>(() => ({
    questions: buildQuiz(chapterNum, mode, extraIds),
    current: 0, selected: null, answered: false, score: 0, wrongIds: [],
    timePerQuestion: 0, mode: "chapter", chapterNum,
  }));
  const [progress, setProgress] = useState(() => getProgress());
  const [timeLeft, setTimeLeft] = useState(30);
  const timerActiveRef = useRef(true);
  const questionStartRef = useRef<number>(Date.now());

  const q = quiz.questions[quiz.current];
  const progressPct = ((quiz.current + (quiz.answered ? 1 : 0)) / quiz.questions.length) * 100;
  const flagged = q ? isFlagged(progress, q.id) : false;

  const isStandardMode = mode === "standard";
  const questionTimeLimit = isStandardMode ? 20 : 30;

  // Per-question countdown timer — auto-submits wrong on expiry
  useEffect(() => {
    timerActiveRef.current = true;
    setTimeLeft(questionTimeLimit);
    questionStartRef.current = Date.now();
    const interval = setInterval(() => {
      if (!timerActiveRef.current) { clearInterval(interval); return; }
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(interval);
          timerActiveRef.current = false;
          setQuiz(p => {
            if (p.answered) return p;
            const spent = Math.round((Date.now() - questionStartRef.current) / 1000);
            const newProg = recordAnswer(p.questions[p.current].chapter, p.questions[p.current].id, false, spent);
            setProgress(newProg);
            return { ...p, answered: true, selected: -1, wrongIds: [...p.wrongIds, p.questions[p.current].id] };
          });
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [quiz.current]);

  const handleSelect = useCallback((idx: number) => {
    if (quiz.answered || !q) return;
    timerActiveRef.current = false;
    const isCorrect = idx === q.correct;
    const spent = Math.round((Date.now() - questionStartRef.current) / 1000);
    const newProg = recordAnswer(q.chapter, q.id, isCorrect, spent);
    recordAttemptHistory(q.id, q.chapter, isCorrect);
    setProgress(newProg);
    setQuiz((prev) => ({
      ...prev, selected: idx, answered: true,
      score: isCorrect ? prev.score + 1 : prev.score,
      wrongIds: isCorrect ? prev.wrongIds : [...prev.wrongIds, q.id],
    }));
  }, [quiz.answered, q]);

  const handleNext = useCallback(() => {
    const nextIdx = quiz.current + 1;
    if (nextIdx >= quiz.questions.length) {
      recordQuizComplete();
      onFinish(quiz.score, quiz.questions.length);
      return;
    }
    setQuiz((prev) => ({ ...prev, current: nextIdx, selected: null, answered: false }));
  }, [quiz, onFinish]);

  if (!q) return null;

  const optionClass = (idx: number) => {
    if (!quiz.answered) return "answer-option";
    if (idx === q.correct) return "answer-option correct-reveal";
    if (idx === quiz.selected && idx !== q.correct) return "answer-option selected-wrong";
    return "answer-option";
  };

  const handleFlag = () => {
    if (!q) return;
    const newProg = toggleFlagQuestion(q.id, q.chapter);
    setProgress(newProg);
  };

  const handleColorTag = (slot: 0 | 1 | 2) => {
    if (!q) return;
    const current = getQuestionTag(progress, q.id);
    const newProg = setQuestionTag(q.id, current === slot ? null : slot);
    setProgress(newProg);
  };

  const handleRaiseHand = () => {
    if (!q) return;
    raiseHand(q.id, q.chapter, q.question);
    alert('✋ ابهام شما ثبت شد. تیم پشتیبانی بررسی خواهد کرد.');
  };

  const tagConfigs = getTagConfigs();
  const currentTag = getQuestionTag(progress, q?.id ?? -1);
  const hardIds = getHardQuestionIds();
  const isHard = q ? hardIds.includes(q.id) : false;

  const timerColor = timeLeft > 15 ? "var(--success)" : timeLeft > 7 ? "var(--warning)" : "var(--error)";
  const timerPct = (timeLeft / questionTimeLimit) * 100;

  return (
    <div className="page-wrap-slim">
      {/* Top bar */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 12 }}>
        <button id="btn-quiz-back" className="btn-secondary"
          style={{ padding: "8px 16px", fontSize: 13 }} onClick={onBack}>
          ← خروج
        </button>
        <div style={{ textAlign: "center" }}>
          <div style={{ fontSize: 12, color: "var(--text-muted)", fontWeight: 600 }}>فصل {chapterNum}</div>
          <div style={{ fontSize: 13, fontWeight: 600, color: "var(--text-secondary)" }}>
            {quiz.current + 1} از {quiz.questions.length}
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
          <div style={{ fontSize: 16, fontWeight: 800, color: "var(--accent-primary)" }}>✓ {quiz.score}</div>
          {/* Flag button */}
          <button id={`btn-flag-${q.id}`} onClick={handleFlag}
            style={{ background: "none", border: "none", cursor: "pointer", padding: 4,
              color: flagged ? "#f97316" : "var(--text-muted)", transition: "color 0.2s" }}
            title={flagged ? "حذف علامت" : "علامت‌گذاری"}
          >
            <Flag size={18} fill={flagged ? "#f97316" : "none"} />
          </button>
          {/* Color tag buttons */}
          {tagConfigs.map((cfg, slot) => (
            <button key={slot}
              onClick={() => handleColorTag(slot as 0 | 1 | 2)}
              title={cfg.label}
              style={{
                width: 18, height: 18, borderRadius: "50%", border: "2px solid",
                borderColor: currentTag === slot ? cfg.color : "rgba(255,255,255,0.2)",
                background: currentTag === slot ? cfg.color : "transparent",
                cursor: "pointer", flexShrink: 0,
                transition: "all 0.15s",
              }}
            />
          ))}
        </div>
      </div>

      {/* Timer bar */}
      {!quiz.answered && (
        <div style={{ marginBottom: 8 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 4, marginBottom: 4,
            color: timerColor, fontSize: 12, fontWeight: 700 }}>
            <Clock size={13} /> {timeLeft}s
          </div>
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: `${timerPct}%`,
              background: timerColor, transition: "width 1s linear, background 0.3s" }} />
          </div>
        </div>
      )}

      {/* Quiz progress bar */}
      <div className="progress-bar" style={{ marginBottom: 20 }}>
        <div className="progress-fill" style={{ width: `${progressPct}%` }} />
      </div>

      {/* Chapter chip + page ref + badges */}
      <div style={{ marginBottom: 14, display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
          <span className="category-chip">{ch?.icon} {ch?.title}</span>
          {q.pageRef && (
            <span style={{ fontSize: 11, color: "var(--text-muted)", background: "rgba(255,255,255,0.05)",
              padding: "3px 9px", borderRadius: 10, border: "1px solid rgba(255,255,255,0.08)" }}>
              ص {q.pageRef}
            </span>
          )}
          {isHard && (
            <span style={{ fontSize: 10, fontWeight: 700, color: "#ef4444",
              background: "rgba(239,68,68,0.1)", border: "1px solid rgba(239,68,68,0.25)",
              padding: "2px 8px", borderRadius: 8 }}>
              🔥 سخت
            </span>
          )}
          {/* Attempt history badge */}
          {(progress.attemptHistory?.[q.id]?.wrongCount ?? 0) > 0 && (
            <span style={{ fontSize: 10, color: "#f59e0b",
              background: "rgba(245,158,11,0.1)", border: "1px solid rgba(245,158,11,0.2)",
              padding: "2px 8px", borderRadius: 8 }}>
              ❌×{progress.attemptHistory![q.id].wrongCount}
            </span>
          )}
        </div>
        {/* Raised hand button */}
        <button onClick={handleRaiseHand}
          style={{ fontSize: 10, color: "rgba(167,139,250,0.8)",
            background: "rgba(167,139,250,0.08)", border: "1px solid rgba(167,139,250,0.2)",
            borderRadius: 8, padding: "4px 10px", cursor: "pointer", display: "flex", alignItems: "center", gap: 4 }}>
          ✋ ابهام دارم
        </button>
      </div>

      {/* Question */}
      <div key={quiz.current} className="animate-scale-in"
        style={{ fontSize: 17, fontWeight: 600, lineHeight: 1.65, marginBottom: 28 }}>
        {q.question}
      </div>

      {/* Options */}
      <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 24 }}>
        {q.options.map((opt, idx) => (
          <button key={idx} id={`quiz-opt-${idx}`}
            className={optionClass(idx)} disabled={quiz.answered}
            onClick={() => handleSelect(idx)}>
            <span style={{ width: 30, height: 30, borderRadius: 8, flexShrink: 0,
              background: !quiz.answered ? "rgba(255,255,255,0.06)"
                : idx === q.correct ? "var(--success)"
                : idx === quiz.selected ? "var(--error)"
                : "rgba(255,255,255,0.06)",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: 13, fontWeight: 700, color: "white", transition: "background 0.3s" }}>
              {quiz.answered
                ? idx === q.correct ? <CheckCircle2 size={14} />
                  : idx === quiz.selected ? <XCircle size={14} />
                  : String.fromCharCode(65 + idx)
                : String.fromCharCode(65 + idx)}
            </span>
            {opt}
          </button>
        ))}
      </div>

      {/* Time expired notice */}
      {quiz.answered && quiz.selected === -1 && (
        <div className="animate-fade-in-up" style={{ background: "rgba(239,68,68,0.08)",
          border: "1px solid rgba(239,68,68,0.25)", borderRadius: 14, padding: "12px 16px",
          marginBottom: 14, display: "flex", alignItems: "center", gap: 8, direction: "rtl" }}>
          <Clock size={16} color="var(--error)" />
          <span style={{ fontWeight: 700, color: "var(--error)", fontSize: 14 }}>وقت تمام شد! ⏰</span>
        </div>
      )}

      {/* Explanation */}
      {quiz.answered && (
        <div className="animate-fade-in-up" style={{
          background: quiz.selected === q.correct ? "rgba(16,185,129,0.08)" : "rgba(239,68,68,0.08)",
          border: `1px solid ${quiz.selected === q.correct ? "rgba(16,185,129,0.25)" : "rgba(239,68,68,0.25)"}`,
          borderRadius: 16, padding: "16px 20px", marginBottom: 16,
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
            {quiz.selected === q.correct
              ? <CheckCircle2 size={18} color="var(--success)" />
              : <AlertCircle size={18} color="var(--error)" />}
            <span style={{ fontWeight: 700,
              color: quiz.selected === q.correct ? "var(--success)" : "var(--error)" }}>
              {quiz.selected === q.correct ? "✅ پاسخ صحیح!" : "❌ پاسخ اشتباه"}
            </span>
          </div>
          <p style={{ fontSize: 14, color: "var(--text-secondary)", lineHeight: 1.7,
            direction: "rtl", textAlign: "right" }}>
            {q.explanation}
          </p>
        </div>
      )}

      {/* Vocabulary panel */}
      {quiz.answered && q.vocab && q.vocab.length > 0 && (
        <div className="animate-fade-in-up" style={{
          background: "rgba(99,102,241,0.06)",
          border: "1px solid rgba(99,102,241,0.2)",
          borderRadius: 14, padding: "14px 16px", marginBottom: 16,
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 10 }}>
            <Languages size={15} color="#a78bfa" />
            <span style={{ fontSize: 12, fontWeight: 700, color: "#a78bfa", letterSpacing: "0.06em" }}>
              لغات کلیدی این سوال
            </span>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8, direction: "rtl" }}>
            {q.vocab.map((v, i) => (
              <div key={i} style={{
                display: "flex", alignItems: "center", gap: 6,
                background: "rgba(99,102,241,0.1)", borderRadius: 10,
                padding: "5px 10px", border: "1px solid rgba(99,102,241,0.15)",
              }}>
                <span style={{ fontSize: 12, fontWeight: 700, color: "#818cf8", fontStyle: "italic" }}>
                  {v.italian}
                </span>
                <span style={{ fontSize: 11, color: "#666" }}>←</span>
                <span style={{ fontSize: 12, color: "var(--text-secondary)" }}>
                  {v.persian}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Next */}
      {quiz.answered && (
        <button id="btn-quiz-next" className="btn-primary animate-fade-in-up"
          style={{ width: "100%" }} onClick={handleNext}>
          {quiz.current + 1 >= quiz.questions.length ? "مشاهده نتایج 🏆" : "سوال بعدی ←"}
        </button>
      )}
    </div>
  );
}

// ─── Results Page ─────────────────────────────────────────────────────────────
function ResultsPage({ score, total, chapterNum, onRestart, onHome, onStudy }: {
  score: number; total: number; chapterNum: number;
  onRestart: () => void; onHome: () => void; onStudy: () => void;
}) {
  const pct = Math.round((score / total) * 100);
  const passed = pct >= 70;
  const deg = (pct / 100) * 360;
  const ch = chapters.find((c) => c.number === chapterNum);
  const hasContent = !!contentRegistry[chapterNum];

  return (
    <div className="page-wrap-slim" style={{ minHeight: "100vh", display: "flex", flexDirection: "column",
      alignItems: "center", justifyContent: "center" }}>
      <div className="animate-scale-in" style={{ textAlign: "center", width: "100%" }}>
        <div style={{ fontSize: 64, marginBottom: 16, filter: passed ? "drop-shadow(0 0 20px gold)" : "none" }}>
          {passed ? "🏆" : "📚"}
        </div>
        <div style={{ fontSize: 11, fontWeight: 700, color: "var(--accent-primary)",
          letterSpacing: "0.1em", marginBottom: 8 }}>
          فصل {chapterNum} – {ch?.title}
        </div>
        <h1 style={{ fontSize: 26, fontWeight: 800, marginBottom: 8, direction: "rtl" }}>
          {passed ? "آفرین! عالی بود! 🎉" : "ادامه بده! تمرین بیشتر! 💪"}
        </h1>
        <p style={{ color: "var(--text-secondary)", marginBottom: 36, direction: "rtl" }}>
          {passed ? "از حد نصاب ۷۰٪ گذشتی!" : "هنوز به ۷۰٪ مورد نیاز نرسیدی."}
        </p>

        {/* Score ring */}
        <div style={{ display: "flex", justifyContent: "center", marginBottom: 36 }}>
          <div className="score-ring" style={{ ["--score-deg" as string]: `${deg}deg` }}>
            <div className="score-inner">
              <div style={{ fontSize: 32, fontWeight: 900,
                color: passed ? "var(--success)" : "var(--error)" }}>
                {pct}%
              </div>
              <div style={{ fontSize: 12, color: "var(--text-muted)" }}>{score}/{total}</div>
            </div>
          </div>
        </div>

        {/* Detail */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 28 }}>
          <div className="stat-badge">
            <CheckCircle2 size={20} color="var(--success)" />
            <span style={{ fontSize: 24, fontWeight: 800 }}>{score}</span>
            <span style={{ fontSize: 12, color: "var(--text-muted)" }}>صحیح</span>
          </div>
          <div className="stat-badge">
            <XCircle size={20} color="var(--error)" />
            <span style={{ fontSize: 24, fontWeight: 800 }}>{total - score}</span>
            <span style={{ fontSize: 12, color: "var(--text-muted)" }}>اشتباه</span>
          </div>
        </div>

        <div style={{ borderRadius: 16, padding: "14px 20px", marginBottom: 28,
          background: passed ? "rgba(16,185,129,0.1)" : "rgba(239,68,68,0.1)",
          border: `1px solid ${passed ? "rgba(16,185,129,0.3)" : "rgba(239,68,68,0.3)"}`,
          fontSize: 14, fontWeight: 600,
          color: passed ? "var(--success)" : "var(--error)",
          direction: "rtl" }}>
          {passed ? "✓ حد نصاب ۷۰٪ را گذراندی!" : `✗ برای قبولی ${Math.ceil(total * 0.7) - score} پاسخ صحیح دیگر نیاز داری`}
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <button id="btn-results-restart" className="btn-primary" onClick={onRestart}>
            <RotateCcw size={16} style={{ display: "inline", marginRight: 8 }} />
            تکرار این فصل
          </button>
          {!passed && hasContent && (
            <button id="btn-results-study" className="btn-secondary" onClick={onStudy}
              style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}>
              <BookOpen size={16} /> مطالعه دوباره مطالب
            </button>
          )}
          <button id="btn-results-home" className="btn-secondary" onClick={onHome}>
            ← بازگشت به خانه
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── Stats Page ───────────────────────────────────────────────────────────────
function StatsPage({ progress, onReset, onReview }: { progress: UserProgress; onReset: () => void; onReview: () => void }) {
  const accuracy = getAccuracy(progress);
  const availableChapters = chapters.filter(c => c.available);

  return (
    <div className="page-wrap">
      <h1 style={{ fontSize: 26, fontWeight: 800, marginBottom: 6, direction: "rtl" }} className="animate-fade-in-up">
        آمار و پیشرفت
      </h1>
      <p style={{ color: "var(--text-secondary)", fontSize: 14, marginBottom: 28, direction: "rtl" }} className="animate-fade-in-up">
        پیشرفت تو فصل به فصل
      </p>

      <div className="animate-fade-in-up" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 28 }}>
        {[
          { icon: <Trophy size={22} color="#f97316" />, val: progress.completedQuizzes, label: "آزمون تموم‌شده" },
          { icon: <Target size={22} color="#9333ea" />, val: `${accuracy}%`, label: "دقت کلی" },
          { icon: <Zap size={22} color="#22d3a5" />, val: progress.totalCorrect, label: "پاسخ صحیح" },
          { icon: <Flame size={22} color="#f97316" />, val: progress.streak, label: "روز متوالی" },
        ].map((s, i) => (
          <div key={i} className="stat-badge">
            {s.icon}
            <span style={{ fontSize: 26, fontWeight: 800 }}>{s.val}</span>
            <span style={{ fontSize: 12, color: "var(--text-muted)", textAlign: "center" }}>{s.label}</span>
          </div>
        ))}
      </div>

      <h3 style={{ fontSize: 13, fontWeight: 600, color: "var(--text-muted)",
        marginBottom: 14, letterSpacing: "0.08em", direction: "rtl" }}>
        فصل‌های موجود
      </h3>

      <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 32 }}>
        {availableChapters.map((ch) => {
          const stats = progress.chapterStats[String(ch.number)] ?? { answered: 0, correct: 0 };
          const acc = stats.answered > 0 ? Math.round((stats.correct / stats.answered) * 100) : 0;
          const total = questions.filter(q => q.chapter === ch.number).length;

          return (
            <div key={ch.number} className="glass-card" style={{ padding: "16px 20px" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 10 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <span style={{ fontSize: 22 }}>{ch.icon}</span>
                  <div>
                    <div style={{ fontSize: 13, fontWeight: 700, direction: "rtl" }}>
                      فصل {ch.number} – {ch.title}
                    </div>
                    <div style={{ fontSize: 12, color: "var(--text-muted)", direction: "rtl" }}>
                      {stats.answered} از {total} پاسخ داده شده
                    </div>
                  </div>
                </div>
                <span style={{ fontSize: 18, fontWeight: 800,
                  color: stats.answered === 0 ? "var(--text-muted)"
                    : acc >= 70 ? "var(--success)"
                    : acc >= 40 ? "var(--warning)"
                    : "var(--error)" }}>
                  {stats.answered === 0 ? "–" : `${acc}%`}
                </span>
              </div>
              <div className="progress-bar">
                <div className="progress-fill" style={{
                  width: `${acc}%`,
                  background: acc >= 70 ? "linear-gradient(90deg, #10b981, #059669)"
                    : acc >= 40 ? "linear-gradient(90deg, #f59e0b, #d97706)"
                    : "linear-gradient(90deg, #ef4444, #dc2626)",
                }} />
              </div>
            </div>
          );
        })}
      </div>

      <button id="btn-review-mode" onClick={onReview} style={{
        width: "100%", padding: "14px", borderRadius: 14, marginBottom: 12,
        border: "1px solid rgba(249,115,22,0.3)", background: "rgba(249,115,22,0.06)",
        color: "#f97316", fontSize: 14, fontWeight: 600, cursor: "pointer",
        display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
      }}>
        <Flag size={16} /> مرور تست‌های غلط و علامت‌گذاری شده
      </button>

      <button id="btn-reset-progress" onClick={onReset} style={{
        width: "100%", padding: "14px", borderRadius: 14,
        border: "1px solid rgba(239,68,68,0.3)", background: "rgba(239,68,68,0.06)",
        color: "#ef4444", fontSize: 14, fontWeight: 600, cursor: "pointer",
      }}>
        🗑️ پاک کردن همه پیشرفت‌ها
      </button>
    </div>
  );
}

// ─── Review Page (مرور تست‌های غلط) ──────────────────────────────────────────
function ReviewPage({ progress, onBack, onStartWrong, onStartFlagged }: {
  progress: UserProgress;
  onBack: () => void;
  onStartWrong: () => void;
  onStartFlagged: () => void;
}) {
  const wrongIds = getWrongQuestionIds(progress);
  const flaggedIds = getFlaggedQuestionIds(progress);
  const wrongQs = questions.filter(q => wrongIds.includes(q.id));
  const flaggedQs = questions.filter(q => flaggedIds.includes(q.id));

  return (
    <div className="page-wrap">
      <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
        <button className="btn-secondary" style={{ padding: "8px 16px", fontSize: 13 }} onClick={onBack}>← بازگشت</button>
        <h1 style={{ fontSize: 22, fontWeight: 800, direction: "rtl" }}>مرور تست‌ها</h1>
      </div>

      {/* Wrong answers card */}
      <div className="glass-card animate-fade-in-up" style={{ padding: "20px", marginBottom: 16 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
          <div style={{ width: 44, height: 44, borderRadius: 12, background: "rgba(239,68,68,0.15)",
            display: "flex", alignItems: "center", justifyContent: "center" }}>
            <XCircle size={22} color="var(--error)" />
          </div>
          <div>
            <div style={{ fontSize: 16, fontWeight: 700, direction: "rtl" }}>تست‌های غلط</div>
            <div style={{ fontSize: 12, color: "var(--text-muted)" }}>{wrongQs.length} سوال</div>
          </div>
        </div>
        {wrongQs.length === 0 ? (
          <p style={{ fontSize: 13, color: "var(--text-muted)", direction: "rtl" }}>هنوز هیچ پاسخ غلطی ثبت نشده ✅</p>
        ) : (
          <>
            <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 14, maxHeight: 180, overflowY: "auto" }}>
              {wrongQs.slice(0, 5).map(q => (
                <div key={q.id} style={{ fontSize: 12, color: "var(--text-secondary)", direction: "rtl",
                  background: "rgba(239,68,68,0.05)", borderRadius: 8, padding: "8px 12px",
                  borderRight: "3px solid var(--error)" }}>
                  فصل {q.chapter} — {q.question.slice(0, 60)}...
                </div>
              ))}
              {wrongQs.length > 5 && (
                <div style={{ fontSize: 11, color: "var(--text-muted)", textAlign: "center" }}>و {wrongQs.length - 5} سوال دیگر...</div>
              )}
            </div>
            <button id="btn-start-wrong-quiz" className="btn-primary" style={{ width: "100%" }} onClick={onStartWrong}>
              🎯 آزمون از تست‌های غلط ({wrongQs.length} سوال)
            </button>
          </>
        )}
      </div>

      {/* Flagged questions card */}
      <div className="glass-card animate-fade-in-up" style={{ padding: "20px", animationDelay: "0.05s" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
          <div style={{ width: 44, height: 44, borderRadius: 12, background: "rgba(249,115,22,0.15)",
            display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Flag size={22} color="#f97316" />
          </div>
          <div>
            <div style={{ fontSize: 16, fontWeight: 700, direction: "rtl" }}>علامت‌گذاری شده (سخت)</div>
            <div style={{ fontSize: 12, color: "var(--text-muted)" }}>{flaggedQs.length} سوال</div>
          </div>
        </div>
        {flaggedQs.length === 0 ? (
          <p style={{ fontSize: 13, color: "var(--text-muted)", direction: "rtl" }}>هنوز هیچ سوالی علامت‌گذاری نشده 🚩</p>
        ) : (
          <>
            <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 14, maxHeight: 180, overflowY: "auto" }}>
              {flaggedQs.slice(0, 5).map(q => (
                <div key={q.id} style={{ fontSize: 12, color: "var(--text-secondary)", direction: "rtl",
                  background: "rgba(249,115,22,0.05)", borderRadius: 8, padding: "8px 12px",
                  borderRight: "3px solid #f97316" }}>
                  فصل {q.chapter} — {q.question.slice(0, 60)}...
                </div>
              ))}
              {flaggedQs.length > 5 && (
                <div style={{ fontSize: 11, color: "var(--text-muted)", textAlign: "center" }}>و {flaggedQs.length - 5} سوال دیگر...</div>
              )}
            </div>
            <button id="btn-start-flagged-quiz" className="btn-primary" style={{ width: "100%" }} onClick={onStartFlagged}>
              🚩 آزمون از سوالات سخت ({flaggedQs.length} سوال)
            </button>
          </>
        )}
      </div>
    </div>
  );
}

// ─── Landing Page — Section Selector ─────────────────────────────────────────
function LandingPage({ onSelectPatente, onSelectItaliano }: {
  onSelectPatente: () => void;
  onSelectItaliano: () => void;
}) {
  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "24px 16px" }}>
      {/* Hero */}
      <div style={{ textAlign: "center", marginBottom: 40 }}>
        <div style={{ fontSize: 52, marginBottom: 12 }}>🇮🇹</div>
        <h1 style={{ fontSize: 26, fontWeight: 900, color: "var(--text-primary)", margin: 0, lineHeight: 1.3 }}>
          Italian Learning Hub
        </h1>
        <p style={{ color: "var(--text-muted)", fontSize: 14, marginTop: 8 }}>
          پلتفرم آموزشی برای ساکنان ایتالیا
        </p>
      </div>

      {/* Two Section Cards */}
      <div style={{ width: "100%", maxWidth: 540, display: "flex", flexDirection: "column", gap: 16 }}>

        {/* Patente Card */}
        <button onClick={onSelectPatente} style={{
          background: "linear-gradient(135deg, rgba(147,51,234,0.2), rgba(249,115,22,0.12))",
          border: "1.5px solid rgba(147,51,234,0.35)",
          borderRadius: 22, padding: "24px 22px", cursor: "pointer", textAlign: "right",
          width: "100%", transition: "all 0.3s", direction: "rtl",
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 14 }}>
            <div style={{
              width: 60, height: 60, borderRadius: 16, flexShrink: 0,
              background: "linear-gradient(135deg, rgba(147,51,234,0.25), rgba(249,115,22,0.15))",
              border: "2px solid rgba(147,51,234,0.4)",
              display: "flex", alignItems: "center", justifyContent: "center", fontSize: 28,
            }}>🚗</div>
            <div>
              <div style={{ fontSize: 20, fontWeight: 900, color: "var(--text-primary)" }}>Patente Italiana</div>
              <div style={{ fontSize: 13, color: "rgba(147,51,234,0.8)", fontWeight: 600 }}>گواهینامه رانندگی</div>
            </div>
          </div>
          <p style={{ fontSize: 13, color: "var(--text-secondary)", lineHeight: 1.7, margin: "0 0 16px" }}>
            ۲۵ فصل آیین‌نامه، سوالات آزمون تمرینی، مطالعه با ترجمه فارسی، آمار پیشرفت و بیشتر...
          </p>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" as const }}>
            {["📚 ۲۵ فصل", "✍️ آزمون تمرینی", "📊 آمار", "🏆 امتیاز"].map(b => (
              <span key={b} style={{
                fontSize: 11, padding: "3px 10px", borderRadius: 20,
                background: "rgba(147,51,234,0.15)", color: "#c084fc",
                border: "1px solid rgba(147,51,234,0.2)",
              }}>{b}</span>
            ))}
          </div>
          <div style={{ marginTop: 16, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <span style={{ fontSize: 12, color: "var(--text-muted)" }}></span>
            <div style={{
              background: "linear-gradient(135deg, #9333ea, #f97316)",
              borderRadius: 12, padding: "9px 20px", color: "white", fontSize: 13, fontWeight: 700,
            }}>ورود به بخش ← </div>
          </div>
        </button>

        {/* Italiano Section Card */}
        <button onClick={onSelectItaliano} style={{
          background: "linear-gradient(135deg, rgba(14,165,233,0.18), rgba(16,185,129,0.1))",
          border: "1.5px solid rgba(14,165,233,0.3)",
          borderRadius: 22, padding: "24px 22px", cursor: "pointer", textAlign: "right",
          width: "100%", transition: "all 0.3s", direction: "rtl",
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 14 }}>
            <div style={{
              width: 60, height: 60, borderRadius: 16, flexShrink: 0,
              background: "linear-gradient(135deg, rgba(14,165,233,0.25), rgba(16,185,129,0.15))",
              border: "2px solid rgba(14,165,233,0.4)",
              display: "flex", alignItems: "center", justifyContent: "center", fontSize: 28,
            }}>💬</div>
            <div>
              <div style={{ fontSize: 20, fontWeight: 900, color: "var(--text-primary)" }}>Italiano per Argomenti</div>
              <div style={{ fontSize: 13, color: "rgba(14,165,233,0.9)", fontWeight: 600 }}>آموزش موضوعی زبان</div>
            </div>
          </div>
          <p style={{ fontSize: 13, color: "var(--text-secondary)", lineHeight: 1.7, margin: "0 0 16px" }}>
            یادگیری ایتالیایی از طریق موضوعات روزانه: پزشک، بانک، خرید، شهرداری، مدرسه و بیشتر...
          </p>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" as const }}>
            {["🏥 Dal Medico", "🛒 Supermercato", "🏦 Banca", "🏛️ Comune"].map(b => (
              <span key={b} style={{
                fontSize: 11, padding: "3px 10px", borderRadius: 20,
                background: "rgba(14,165,233,0.15)", color: "#0ea5e9",
                border: "1px solid rgba(14,165,233,0.2)",
              }}>{b}</span>
            ))}
          </div>
          <div style={{ marginTop: 16, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <span style={{ fontSize: 12, color: "var(--text-muted)" }}></span>
            <div style={{
              background: "linear-gradient(135deg, #0ea5e9, #10b981)",
              borderRadius: 12, padding: "9px 20px", color: "white", fontSize: 13, fontWeight: 700,
            }}>ورود به بخش ← </div>
          </div>
        </button>
      </div>

      <p style={{ fontSize: 11, color: "var(--text-muted)", marginTop: 32, textAlign: "center" }}>
        هر بار می‌توانید بخش دیگر را انتخاب کنید
      </p>
    </div>
  );
}

// ─── Main App ─────────────────────────────────────────────────────────────────
export default function App() {
  const [page, setPage] = useState<Page>("home");
  const [appSection, setAppSection] = useState<"landing" | "patente" | "italiano">(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("app_section");
      if (saved === "patente" || saved === "italiano") return saved;
    }
    return "landing";
  });
  const [activeChapter, setActiveChapter] = useState<number>(20);
  const [quizKey, setQuizKey] = useState(0);
  const [quizMode, setQuizMode] = useState<QuizMode>("chapter");
  const [lastResult, setLastResult] = useState<{ score: number; total: number } | null>(null);
  const [progress, setProgress] = useState<UserProgress>(() => getProgress());
  const [showRating, setShowRating] = useState(false);
  const [ratingChapter, setRatingChapter] = useState(0);
  const [dailyToast, setDailyToast] = useState<{ message: string } | null>(null);
  const [showOnboarding, setShowOnboarding] = useState(false);

  // Apply user settings on start + check onboarding + claim daily login bonus
  useEffect(() => {
    applySettings(getUserSettings());
    // Show onboarding if first time
    const onb = getOnboardingData();
    if (!onb || !onb.accepted) {
      setShowOnboarding(true);
    } else {
      // Only show daily bonus if onboarding already done
      const bonus = claimDailyLogin();
      if (bonus.granted) {
        setDailyToast({ message: bonus.message + ` (+${bonus.xpEarned} XP)` });
        setTimeout(() => setDailyToast(null), 5000);
      }
    }
  }, []);

  const refreshProgress = () => setProgress(getProgress());
  useEffect(() => { refreshProgress(); }, [page]);

  // Exam clearance check whenever progress updates
  const clearance = checkExamClearance(progress.totalCorrect, progress.totalAnswered, progress.completedQuizzes);

  const handleSelectChapter = (ch: number) => {
    setActiveChapter(ch); setQuizMode("chapter"); setQuizKey((k) => k + 1); setPage("quiz");
  };
  const handleStudyChapter = (ch: number) => {
    setActiveChapter(ch); setPage("study");
  };
  const handleQuizFinish = (score: number, total: number) => {
    setLastResult({ score, total });
    refreshProgress();
    // Award XP for quiz performance
    const xpResult = awardQuizXP(score, total);
    if (xpResult.xpEarned > 0) {
      setDailyToast({ message: `🎯 +${xpResult.xpEarned} XP${xpResult.milestone ? ` · ${xpResult.milestone}` : ""}` });
      setTimeout(() => setDailyToast(null), 3000);
    }
    // Show rating prompt for chapter quizzes if user has it enabled
    if (quizMode === "chapter" && getUserSettings().showChapterRating) {
      setRatingChapter(activeChapter);
      setShowRating(true);
    }
    setPage("results");
  };
  const handleReset = () => {
    if (confirm("مطمئنی؟ همه پیشرفت‌هات پاک می‌شه!")) {
      resetProgress(); refreshProgress();
    }
  };
  const handleStartWrongQuiz = () => {
    const wrongIds = getWrongQuestionIds(getProgress());
    if (wrongIds.length === 0) return;
    setQuizMode("wrong"); setQuizKey((k) => k + 1); setPage("quiz");
  };
  const handleStartFlaggedQuiz = () => {
    const flaggedIds = getFlaggedQuestionIds(getProgress());
    if (flaggedIds.length === 0) return;
    setQuizMode("flagged"); setQuizKey((k) => k + 1); setPage("quiz");
  };

  return (
    <>
      <div className="mesh-bg" />

      {/* ── Landing: Section selector ── */}
      {appSection === "landing" && !showOnboarding && (
        <LandingPage
          onSelectPatente={() => { setAppSection("patente"); localStorage.setItem("app_section", "patente"); }}
          onSelectItaliano={() => { setAppSection("italiano"); localStorage.setItem("app_section", "italiano"); }}
        />
      )}

      {/* ── Italiano Section (fully independent) ── */}
      {appSection === "italiano" && !showOnboarding && (
        <ItalianoSection onBack={() => { setAppSection("landing"); localStorage.setItem("app_section", "landing"); }} />
      )}

      {/* ── Patente Section ── */}
      {appSection === "patente" && (
      <>


      {page === "home" && (
        <HomePage
          progress={progress}
          onSelectChapter={handleSelectChapter}
          onStudyChapter={handleStudyChapter}
          onNavigate={(p) => setPage(p as Page)}
        />
      )}
      {page === "chapters" && (
        <ChaptersPage progress={progress}
          onSelectChapter={handleSelectChapter}
          onStudyChapter={handleStudyChapter}
          onBrowse={() => setPage("browse")}
          onStandardQuiz={() => { setQuizMode("standard"); setQuizKey(k => k + 1); setPage("quiz"); }}
          onMixedQuiz={() => { setQuizMode("mixed"); setQuizKey(k => k + 1); setPage("quiz"); }}
          onPresetQuiz={(mode) => {
            // Compute extra IDs for preset modes
            const hardIds = getHardQuestionIds();
            const wrongIds = getWrongQuestionIds(progress);
            let extraIds: number[] = [];
            if (mode === "hard") extraIds = hardIds;
            else if (mode === "wrong") extraIds = wrongIds;
            else if (mode === "flagged") extraIds = getFlaggedQuestionIds(progress);
            else if (mode === "tagged0") extraIds = getTaggedQuestionIds(progress, 0);
            else if (mode === "tagged1") extraIds = getTaggedQuestionIds(progress, 1);
            else if (mode === "tagged2") extraIds = getTaggedQuestionIds(progress, 2);
            else if (mode === "hardWrong") {
              const hardSet = new Set(hardIds);
              extraIds = wrongIds.filter(id => hardSet.has(id));
            }
            if (extraIds.length === 0) return;
            setQuizMode(mode as QuizMode);
            setQuizKey(k => k + 1);
            // store extraIds temporarily — pass via state
            (window as Window & { __quizExtraIds?: number[] }).__quizExtraIds = extraIds;
            setPage("quiz");
          }}
        />
      )}
      {page === "browse" && (
        <BrowsePage onBack={() => setPage("chapters")} />
      )}
      {page === "study" && (
        <StudyPage chapterNum={activeChapter}
          onBack={() => setPage("chapters")}
          onGoToQuiz={() => handleSelectChapter(activeChapter)} />
      )}
      {page === "review" && (
        <ReviewPage progress={progress}
          onBack={() => setPage("stats")}
          onStartWrong={handleStartWrongQuiz}
          onStartFlagged={handleStartFlaggedQuiz} />
      )}
      {page === "quiz" && (
        <QuizPage key={quizKey} chapterNum={activeChapter}
          mode={quizMode}
          extraIds={
            quizMode === "wrong" ? getWrongQuestionIds(progress) :
            quizMode === "flagged" ? getFlaggedQuestionIds(progress) :
            ["hard","tagged0","tagged1","tagged2","hardWrong"].includes(quizMode)
              ? ((window as Window & { __quizExtraIds?: number[] }).__quizExtraIds ?? [])
              : []
          }
          onFinish={handleQuizFinish}
          onBack={() => setPage(["chapter","standard","mixed"].includes(quizMode) ? "chapters" : "review")} />
      )}
      {page === "results" && lastResult && (
        <ResultsPage score={lastResult.score} total={lastResult.total} chapterNum={activeChapter}
          onRestart={() => { setQuizKey((k) => k + 1); setPage("quiz"); }}
          onHome={() => setPage("home")}
          onStudy={() => handleStudyChapter(activeChapter)} />
      )}
      {page === "stats" && (
        <StatsPage progress={progress} onReset={handleReset} onReview={() => setPage("review")} />
      )}
      {page === "charts" && (
        <ProgressChartsPage progress={progress} onBack={() => setPage("home")} />
      )}
      {page === "settings" && (
        <SettingsPage onBack={() => setPage("home")} />
      )}
      {page === "faq" && (
        <FAQPage onBack={() => setPage("home")} />
      )}
      {page === "support" && (
        <SupportHubPage onBack={() => setPage("home")} onNav={p => setPage(p as Page)} />
      )}
      {page === "gamification" && (
        <GamificationPage progress={progress} onBack={() => setPage("home")} />
      )}

      {/* ── Rating Modal ── */}
      {showRating && (
        <RatingModal
          type="chapter"
          chapterNum={ratingChapter}
          chapterTitle={chapters.find(c => c.number === ratingChapter)?.title}
          onClose={() => setShowRating(false)}
        />
      )}

      {/* ── Exam Clearance Toast ── */}
      {clearance.cleared && page === "home" && (
        <div style={{
          position: "fixed", top: 70, left: "50%", transform: "translateX(-50%)",
          zIndex: 8000, background: "rgba(13,10,20,0.95)", backdropFilter: "blur(16px)",
          border: "1px solid rgba(34,211,165,0.4)", borderRadius: 14,
          padding: "12px 20px", maxWidth: 340, width: "90%",
          display: "flex", alignItems: "center", gap: 10,
        }}>
          <span style={{ fontSize: 24 }}>🎉</span>
          <div style={{ direction: "rtl", flex: 1 }}>
            <div style={{ fontSize: 12, fontWeight: 700, color: "#22d3a5" }}>Exam Clearance!</div>
            <div style={{ fontSize: 11, color: "var(--text-muted)", marginTop: 2 }}>
              دقت {clearance.score}٪ — آماده آزمون واقعی هستی
            </div>
          </div>
        </div>
      )}

      {/* ── Daily Login / XP Toast ── */}
      {dailyToast && (
        <div style={{
          position: "fixed", bottom: 90, left: "50%", transform: "translateX(-50%)",
          zIndex: 9500, background: "rgba(13,10,20,0.97)", backdropFilter: "blur(16px)",
          border: "1px solid rgba(147,51,234,0.4)", borderRadius: 16,
          padding: "14px 20px", maxWidth: 360, width: "92%",
          display: "flex", alignItems: "flex-start", gap: 10,
          boxShadow: "0 8px 32px rgba(0,0,0,0.5)",
          animation: "fadeInUp 0.4s ease",
        }}>
          <span style={{ fontSize: 26, flexShrink: 0 }}>🌟</span>
          <div style={{ direction: "rtl", flex: 1 }}>
            <div style={{ fontSize: 12, lineHeight: 1.7, color: "var(--text-secondary)" }}>
              {dailyToast.message}
            </div>
          </div>
          <button onClick={() => setDailyToast(null)}
            style={{ background: "none", border: "none", color: "var(--text-muted)", cursor: "pointer", padding: 4, flexShrink: 0 }}>
            ✕
          </button>
        </div>
      )}

      {/* ── Dictionary Page ── */}
      {page === "dictionary" && (
        <DictionaryPage onBack={() => setPage("support")} />
      )}

      <NavBar page={page} onNav={setPage} />
      </> /* end patente inner */
      )} {/* end appSection patente */}


      {/* ── Onboarding Flow (First Launch) ── */}
      {showOnboarding && (
        <OnboardingFlow onComplete={() => {
          setShowOnboarding(false);
          setAppSection("landing");
          const bonus = claimDailyLogin();
          if (bonus.granted) {
            setDailyToast({ message: bonus.message + ` (+${bonus.xpEarned} XP)` });
            setTimeout(() => setDailyToast(null), 5000);
          }
        }} />
      )}
    </>
  );
}
