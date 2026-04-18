"use client";

import { useState, useEffect, useCallback } from "react";
import { questions, chapters, type Question } from "@/lib/questions";
import {
  getProgress,
  recordAnswer,
  recordQuizComplete,
  getAccuracy,
  resetProgress,
  type UserProgress,
} from "@/lib/store";
import { chapter20Content } from "@/lib/chapters/20/content";
import { chapter19Content } from "@/lib/chapters/19/content";
import { chapter18Content } from "@/lib/chapters/18/content";
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
} from "lucide-react";

// ─── Types ────────────────────────────────────────────────────────────────────
type Page = "home" | "chapters" | "quiz" | "results" | "stats" | "study";

interface QuizState {
  questions: Question[];
  current: number;
  selected: number | null;
  answered: boolean;
  score: number;
  wrongIds: number[];
}

const contentRegistry: Record<number, ChapterContent> = {
  18: chapter18Content,
  19: chapter19Content,
  20: chapter20Content,
};

// ─── Helpers ──────────────────────────────────────────────────────────────────
function shuffle<T>(arr: T[]): T[] {
  return [...arr].sort(() => Math.random() - 0.5);
}
function buildQuiz(chapterNum: number): Question[] {
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
  if (page === "quiz" || page === "results" || page === "study") return null;
  const items: { id: Page; label: string; icon: React.ReactNode }[] = [
    { id: "home",     label: "خانه",      icon: <Home size={20} /> },
    { id: "chapters", label: "فصل‌ها",   icon: <BookOpen size={20} /> },
    { id: "stats",    label: "آمار",      icon: <BarChart2 size={20} /> },
  ];
  return (
    <nav style={{
      position: "fixed", bottom: 0, left: 0, right: 0,
      background: "rgba(10,10,15,0.96)",
      borderTop: "1px solid rgba(255,255,255,0.06)",
      backdropFilter: "blur(20px)",
      display: "flex", justifyContent: "center", gap: 8,
      padding: "8px 20px 20px", zIndex: 100,
    }}>
      {items.map((item) => (
        <button
          key={item.id} id={`nav-${item.id}`}
          className={`nav-item ${page === item.id ? "active" : ""}`}
          onClick={() => onNav(item.id)}
        >
          {item.icon}
          {item.label}
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

  if (!content) {
    return (
      <div style={{ padding: "40px 20px", textAlign: "center" }}>
        <p style={{ color: "var(--text-muted)" }}>محتوای آموزشی برای این فصل هنوز اضافه نشده است.</p>
        <button className="btn-secondary" style={{ marginTop: 20 }} onClick={onBack}>← بازگشت</button>
      </div>
    );
  }

  return (
    <div style={{ padding: "20px 20px 40px", maxWidth: 640, margin: "0 auto" }}>
      {/* Top bar */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 24 }}>
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
        padding: "20px 22px", marginBottom: 20,
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
                  <div style={{ padding: "0 20px", display: "flex", flexDirection: "column", gap: 12, marginBottom: 16 }}>
                    {section.body.map((para, pIdx) => (
                      <p key={pIdx} style={{
                        fontSize: 14, lineHeight: 1.8, direction: "rtl", textAlign: "right",
                        color: "var(--text-secondary)",
                        background: para.startsWith("⚠️") || para.startsWith("🚫") ? "rgba(239,68,68,0.06)"
                          : para.startsWith("✅") ? "rgba(16,185,129,0.06)" : "transparent",
                        borderRadius: (para.startsWith("⚠️") || para.startsWith("🚫") || para.startsWith("✅")) ? 10 : 0,
                        padding: (para.startsWith("⚠️") || para.startsWith("🚫") || para.startsWith("✅")) ? "10px 14px" : 0,
                        borderRight: para.startsWith("📌") ? "3px solid var(--accent-primary)" : "none",
                        paddingRight: para.startsWith("📌") ? 12 : undefined,
                        whiteSpace: "pre-line",
                      }}>{para}</p>
                    ))}
                  </div>

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
function HomePage({ progress, onNavigate }: {
  progress: UserProgress;
  onNavigate: (p: Page) => void;
}) {
  const accuracy = getAccuracy(progress);
  const availableCount = chapters.filter((c) => c.available).length;

  return (
    <div style={{ padding: "28px 20px 100px", maxWidth: 600, margin: "0 auto" }}>
      {/* Header */}
      <div className="animate-fade-in-up" style={{ marginBottom: 32 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 10 }}>
          <ItalianFlag />
          <span style={{ fontSize: 12, color: "var(--text-muted)", fontWeight: 600, letterSpacing: "0.1em" }}>
            PATENTE B • CODICE DELLA STRADA
          </span>
        </div>
        <h1 style={{ fontSize: 32, fontWeight: 900, lineHeight: 1.2, marginBottom: 10, direction: "rtl" }}>
          آموزش{" "}
          <span style={{
            background: "linear-gradient(135deg, #6366f1, #a78bfa)",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
          }}>
            گواهینامه ایتالیایی
          </span>
        </h1>

      </div>

      {/* Stats row */}
      <div className="animate-fade-in-up" style={{
        display: "grid", gridTemplateColumns: "1fr 1fr 1fr",
        gap: 12, marginBottom: 32, animationDelay: "0.1s",
      }}>
        {[
          { icon: <Target size={20} color="#9333ea" />, val: `${accuracy}%`, label: "دقت" },
          { icon: <Zap size={20} color="#f97316" />, val: progress.totalAnswered, label: "پاسخ داده" },
          { icon: <Flame size={20} color={progress.streak > 0 ? "#f97316" : "#6b568a"} />,
            val: progress.streak, label: "روز متوالی 🔥" },
        ].map((s, i) => (
          <div key={i} className="stat-badge">
            {s.icon}
            <span style={{ fontSize: 22, fontWeight: 800 }}>{s.val}</span>
            <span style={{ fontSize: 11, color: "var(--text-muted)" }}>{s.label}</span>
          </div>
        ))}
      </div>

      {/* Progress overview */}
      <div className="animate-fade-in-up glass-card animate-pulse-glow"
        style={{ padding: "24px", marginBottom: 24, animationDelay: "0.15s" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 16 }}>
          <div>
            <h2 style={{ fontSize: 17, fontWeight: 700, marginBottom: 4, direction: "rtl" }}>پیشرفت کتاب</h2>
            <p style={{ fontSize: 13, color: "var(--text-secondary)", direction: "rtl" }}>
              {availableCount} از ۲۵ فصل در دسترس
            </p>
          </div>
          <span style={{
            fontSize: 13, fontWeight: 700, color: "#d8aaff",
            background: "rgba(147,51,234,0.15)", padding: "4px 12px",
            borderRadius: 20, border: "1px solid rgba(147,51,234,0.3)"
          }}>
            {Math.round((availableCount / 25) * 100)}%
          </span>
        </div>

        {/* 25 chapter dots */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 16 }}>
          {chapters.map((ch) => {
            const stats = progress.chapterStats[String(ch.number)];
            const done = stats && stats.answered > 0;
            return (
              <div key={ch.number} title={`فصل ${ch.number}: ${ch.title}`} style={{
                width: 28, height: 28, borderRadius: 8,
                background: !ch.available ? "rgba(255,255,255,0.04)"
                  : done ? "linear-gradient(135deg, #9333ea, #f97316)"
                  : "rgba(147,51,234,0.2)",
                border: ch.available ? "1px solid rgba(147,51,234,0.4)" : "1px solid rgba(255,255,255,0.06)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 10, fontWeight: 700,
                color: ch.available ? "white" : "var(--text-muted)",
                transition: "all 0.2s",
              }}>
                {ch.number}
              </div>
            );
          })}
        </div>

        <button id="btn-go-chapters" className="btn-primary" style={{ width: "100%" }}
          onClick={() => onNavigate("chapters")}>
          مشاهده همه فصل‌ها ←
        </button>
      </div>

      {/* Available chapter cards */}
      {chapters.filter(c => c.available).map((ch) => {
        const stats = progress.chapterStats[String(ch.number)];
        const acc = stats && stats.answered > 0
          ? Math.round((stats.correct / stats.answered) * 100) : null;
        const total = questions.filter(q => q.chapter === ch.number).length;
        const hasContent = !!contentRegistry[ch.number];
        return (
          <div key={ch.number} className="animate-fade-in-up glass-card"
            style={{ padding: "20px", marginBottom: 16, animationDelay: "0.2s" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 14 }}>
              <div style={{ width: 50, height: 50, borderRadius: 14, flexShrink: 0,
                background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
                display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22 }}>
                {ch.icon}
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 11, color: "#c084fc", fontWeight: 700, marginBottom: 2 }}>
                  فصل {ch.number}
                </div>
                <div style={{ fontSize: 16, fontWeight: 700 }}>{ch.title}</div>
                <div style={{ fontSize: 12, color: "var(--text-muted)" }}>{total} سوال</div>
              </div>
              {acc !== null && (
                <span style={{ fontSize: 18, fontWeight: 800,
                  color: acc >= 70 ? "var(--success)" : acc >= 40 ? "var(--warning)" : "var(--error)" }}>
                  {acc}%
                </span>
              )}
            </div>
            <div style={{ display: "flex", gap: 10 }}>
              {hasContent && (
                <button id={`btn-study-ch${ch.number}`} className="btn-secondary"
                  style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: 6 }}
                  onClick={() => onNavigate("study")}>
                  <BookOpen size={15} /> مطالعه
                </button>
              )}
              <button id={`btn-start-ch${ch.number}`} className="btn-primary"
                style={{ flex: 1 }}
                onClick={() => onNavigate("quiz")}>
                آزمون ←
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

// ─── Chapters Page ────────────────────────────────────────────────────────────
function ChaptersPage({ progress, onSelectChapter, onStudyChapter }: {
  progress: UserProgress;
  onSelectChapter: (ch: number) => void;
  onStudyChapter: (ch: number) => void;
}) {
  return (
    <div style={{ padding: "24px 20px 100px", maxWidth: 600, margin: "0 auto" }}>
      <div className="animate-fade-in-up" style={{ marginBottom: 24 }}>
        <h1 style={{ fontSize: 26, fontWeight: 800, marginBottom: 6, direction: "rtl" }}>۲۵ فصل آیین‌نامه</h1>
        <p style={{ color: "var(--text-secondary)", fontSize: 14, direction: "rtl", textAlign: "right" }}>
          هر فصل دو بخش دارد:{" "}
          <strong style={{ color: "var(--text-primary)" }}>📖 مطالعه</strong> (ترجمه فارسی) و{" "}
          <strong style={{ color: "var(--text-primary)" }}>🎯 آزمون</strong> (سوالات).
          فصل‌های قفل‌شده با ارسال عکس کتاب باز می‌شوند.
        </p>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        {chapters.map((ch, i) => {
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
function QuizPage({ chapterNum, onFinish, onBack }: {
  chapterNum: number;
  onFinish: (score: number, total: number) => void;
  onBack: () => void;
}) {
  const ch = chapters.find((c) => c.number === chapterNum);
  const [quiz, setQuiz] = useState<QuizState>(() => ({
    questions: buildQuiz(chapterNum),
    current: 0, selected: null, answered: false, score: 0, wrongIds: [],
  }));

  const q = quiz.questions[quiz.current];
  const progressPct = ((quiz.current + (quiz.answered ? 1 : 0)) / quiz.questions.length) * 100;

  const handleSelect = useCallback((idx: number) => {
    if (quiz.answered || !q) return;
    const isCorrect = idx === q.correct;
    recordAnswer(chapterNum, isCorrect);
    setQuiz((prev) => ({
      ...prev, selected: idx, answered: true,
      score: isCorrect ? prev.score + 1 : prev.score,
      wrongIds: isCorrect ? prev.wrongIds : [...prev.wrongIds, q.id],
    }));
  }, [quiz.answered, q, chapterNum]);

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

  return (
    <div style={{ padding: "20px 20px 40px", maxWidth: 600, margin: "0 auto" }}>
      {/* Top bar */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 18 }}>
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
        <div style={{ fontSize: 16, fontWeight: 800, color: "var(--accent-primary)" }}>
          ✓ {quiz.score}
        </div>
      </div>

      {/* Progress bar */}
      <div className="progress-bar" style={{ marginBottom: 28 }}>
        <div className="progress-fill" style={{ width: `${progressPct}%` }} />
      </div>

      {/* Chapter chip */}
      <div style={{ marginBottom: 16 }}>
        <span className="category-chip">{ch?.icon} {ch?.title}</span>
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

      {/* Explanation */}
      {quiz.answered && (
        <div className="animate-fade-in-up" style={{
          background: quiz.selected === q.correct ? "rgba(16,185,129,0.08)" : "rgba(239,68,68,0.08)",
          border: `1px solid ${quiz.selected === q.correct ? "rgba(16,185,129,0.25)" : "rgba(239,68,68,0.25)"}`,
          borderRadius: 16, padding: "16px 20px", marginBottom: 24,
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
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column",
      alignItems: "center", justifyContent: "center",
      padding: "40px 24px", maxWidth: 480, margin: "0 auto" }}>
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
function StatsPage({ progress, onReset }: { progress: UserProgress; onReset: () => void }) {
  const accuracy = getAccuracy(progress);
  const availableChapters = chapters.filter(c => c.available);

  return (
    <div style={{ padding: "24px 20px 100px", maxWidth: 600, margin: "0 auto" }}>
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

// ─── Main App ─────────────────────────────────────────────────────────────────
export default function App() {
  const [page, setPage] = useState<Page>("home");
  const [activeChapter, setActiveChapter] = useState<number>(20);
  const [quizKey, setQuizKey] = useState(0);
  const [lastResult, setLastResult] = useState<{ score: number; total: number } | null>(null);
  const [progress, setProgress] = useState<UserProgress>(() => getProgress());

  const refreshProgress = () => setProgress(getProgress());
  useEffect(() => { refreshProgress(); }, [page]);

  const handleSelectChapter = (ch: number) => {
    setActiveChapter(ch); setQuizKey((k) => k + 1); setPage("quiz");
  };
  const handleStudyChapter = (ch: number) => {
    setActiveChapter(ch); setPage("study");
  };
  const handleQuizFinish = (score: number, total: number) => {
    setLastResult({ score, total }); refreshProgress(); setPage("results");
  };
  const handleReset = () => {
    if (confirm("مطمئنی؟ همه پیشرفت‌هات پاک می‌شه!")) {
      resetProgress(); refreshProgress();
    }
  };

  return (
    <>
      <div className="mesh-bg" />

      {page === "home" && (
        <HomePage progress={progress} onNavigate={(p) => {
          if (p === "quiz") handleSelectChapter(20);
          else if (p === "study") handleStudyChapter(20);
          else setPage(p);
        }} />
      )}
      {page === "chapters" && (
        <ChaptersPage progress={progress}
          onSelectChapter={handleSelectChapter}
          onStudyChapter={handleStudyChapter} />
      )}
      {page === "study" && (
        <StudyPage chapterNum={activeChapter}
          onBack={() => setPage("chapters")}
          onGoToQuiz={() => handleSelectChapter(activeChapter)} />
      )}
      {page === "quiz" && (
        <QuizPage key={quizKey} chapterNum={activeChapter}
          onFinish={handleQuizFinish}
          onBack={() => setPage("chapters")} />
      )}
      {page === "results" && lastResult && (
        <ResultsPage score={lastResult.score} total={lastResult.total} chapterNum={activeChapter}
          onRestart={() => { setQuizKey((k) => k + 1); setPage("quiz"); }}
          onHome={() => setPage("home")}
          onStudy={() => handleStudyChapter(activeChapter)} />
      )}
      {page === "stats" && (
        <StatsPage progress={progress} onReset={handleReset} />
      )}

      <NavBar page={page} onNav={setPage} />
    </>
  );
}
