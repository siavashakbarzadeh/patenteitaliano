"use client";

import { useState, useEffect, useCallback } from "react";
import { questions, categories, type Question } from "@/lib/questions";
import {
  getProgress,
  recordAnswer,
  recordQuizComplete,
  getAccuracy,
  type UserProgress,
} from "@/lib/store";
import {
  CheckCircle2,
  XCircle,
  ChevronRight,
  RotateCcw,
  Trophy,
  Flame,
  Target,
  BookOpen,
  BarChart2,
  Home,
  Zap,
  Bookmark,
  AlertCircle,
} from "lucide-react";

// ─── Types ────────────────────────────────────────────────────────────────────

type Page = "home" | "quiz" | "results" | "stats";
type QuizMode = "all" | string; // category id

interface QuizState {
  questions: Question[];
  current: number;
  selected: number | null;
  answered: boolean;
  score: number;
  wrongIds: number[];
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

function shuffle<T>(arr: T[]): T[] {
  return [...arr].sort(() => Math.random() - 0.5);
}

function buildQuiz(mode: QuizMode, count = 20): Question[] {
  const pool =
    mode === "all"
      ? questions
      : questions.filter((q) => q.category === mode);
  return shuffle(pool).slice(0, Math.min(count, pool.length));
}

function getCategoryMeta(id: string) {
  return categories.find((c) => c.id === id) ?? categories[0];
}

// ─── Sub-components ───────────────────────────────────────────────────────────

function ItalianFlag() {
  return (
    <span className="it-flag">
      <span style={{ background: "#009246" }} />
      <span style={{ background: "#ffffff" }} />
      <span style={{ background: "#ce2b37" }} />
    </span>
  );
}

function NavBar({
  page,
  onNav,
}: {
  page: Page;
  onNav: (p: Page) => void;
}) {
  const items: { id: Page; label: string; icon: React.ReactNode }[] = [
    { id: "home", label: "Home", icon: <Home size={20} /> },
    { id: "quiz", label: "Quiz", icon: <BookOpen size={20} /> },
    { id: "stats", label: "Statistiche", icon: <BarChart2 size={20} /> },
  ];

  if (page === "results") return null;

  return (
    <nav
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        background: "rgba(10,10,15,0.95)",
        borderTop: "1px solid rgba(255,255,255,0.06)",
        backdropFilter: "blur(20px)",
        display: "flex",
        justifyContent: "center",
        gap: 8,
        padding: "8px 20px 20px",
        zIndex: 100,
      }}
    >
      {items.map((item) => (
        <button
          key={item.id}
          id={`nav-${item.id}`}
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

// ─── Home Page ────────────────────────────────────────────────────────────────

function HomePage({
  progress,
  onStartQuiz,
  onNavigate,
}: {
  progress: UserProgress;
  onStartQuiz: (mode: QuizMode) => void;
  onNavigate: (p: Page) => void;
}) {
  const accuracy = getAccuracy(progress);

  return (
    <div style={{ padding: "24px 20px 100px", maxWidth: 600, margin: "0 auto" }}>
      {/* Header */}
      <div className="animate-fade-in-up" style={{ marginBottom: 32 }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            marginBottom: 8,
          }}
        >
          <ItalianFlag />
          <span
            style={{ fontSize: 13, color: "var(--text-muted)", fontWeight: 500 }}
          >
            PATENTE B • ITALIA
          </span>
        </div>
        <h1
          style={{
            fontSize: 32,
            fontWeight: 800,
            lineHeight: 1.2,
            marginBottom: 8,
          }}
        >
          Ciao, pronto per{" "}
          <span
            style={{
              background: "linear-gradient(135deg, #6366f1, #a78bfa)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            studiare?
          </span>
        </h1>
        <p style={{ color: "var(--text-secondary)", fontSize: 15 }}>
          Preparati all'esame con quiz interattivi sul Codice della Strada italiano.
        </p>
      </div>

      {/* Stats Row */}
      <div
        className="animate-fade-in-up"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: 12,
          marginBottom: 28,
          animationDelay: "0.1s",
        }}
      >
        {[
          {
            icon: <Target size={20} color="#6366f1" />,
            val: `${accuracy}%`,
            label: "Precisione",
          },
          {
            icon: <Zap size={20} color="#f59e0b" />,
            val: progress.totalAnswered,
            label: "Risposte",
          },
          {
            icon: (
              <Flame
                size={20}
                color={progress.streak > 0 ? "#ef4444" : "#475569"}
              />
            ),
            val: progress.streak,
            label: "Streak 🔥",
          },
        ].map((s, i) => (
          <div key={i} className="stat-badge">
            {s.icon}
            <span style={{ fontSize: 22, fontWeight: 800 }}>{s.val}</span>
            <span style={{ fontSize: 11, color: "var(--text-muted)" }}>
              {s.label}
            </span>
          </div>
        ))}
      </div>

      {/* Quick Start */}
      <div
        className="animate-fade-in-up glass-card animate-pulse-glow"
        style={{
          padding: "28px 24px",
          marginBottom: 28,
          animationDelay: "0.2s",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            marginBottom: 20,
          }}
        >
          <div
            style={{
              width: 52,
              height: 52,
              borderRadius: 16,
              background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <Zap size={24} color="white" />
          </div>
          <div>
            <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 4 }}>
              Quiz Completo
            </h2>
            <p style={{ fontSize: 13, color: "var(--text-secondary)" }}>
              20 domande casuali da tutte le categorie
            </p>
          </div>
        </div>
        <button
          id="btn-start-all"
          className="btn-primary"
          style={{ width: "100%" }}
          onClick={() => onStartQuiz("all")}
        >
          Inizia Quiz →
        </button>
      </div>

      {/* Categories */}
      <div className="animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
        <h3
          style={{
            fontSize: 14,
            fontWeight: 600,
            color: "var(--text-muted)",
            marginBottom: 14,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
          }}
        >
          Per Categoria
        </h3>
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {categories.map((cat, i) => {
            const stats = progress.categoryStats[cat.id];
            const acc =
              stats && stats.answered > 0
                ? Math.round((stats.correct / stats.answered) * 100)
                : null;
            const total = questions.filter((q) => q.category === cat.id).length;

            return (
              <button
                key={cat.id}
                id={`btn-cat-${cat.id}`}
                className="glass-card"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 16,
                  padding: "16px 20px",
                  cursor: "pointer",
                  border: "1px solid var(--border-subtle)",
                  width: "100%",
                  textAlign: "left",
                  animationDelay: `${0.1 * i}s`,
                }}
                onClick={() => onStartQuiz(cat.id)}
              >
                <span style={{ fontSize: 24 }}>{cat.icon}</span>
                <div style={{ flex: 1 }}>
                  <div
                    style={{
                      fontSize: 14,
                      fontWeight: 600,
                      marginBottom: 3,
                    }}
                  >
                    {cat.label}
                  </div>
                  <div style={{ fontSize: 12, color: "var(--text-muted)" }}>
                    {total} domande
                  </div>
                </div>
                {acc !== null && (
                  <span
                    style={{
                      fontSize: 13,
                      fontWeight: 700,
                      color:
                        acc >= 70
                          ? "var(--success)"
                          : acc >= 40
                          ? "var(--warning)"
                          : "var(--error)",
                      minWidth: 38,
                      textAlign: "right",
                    }}
                  >
                    {acc}%
                  </span>
                )}
                <ChevronRight size={16} color="var(--text-muted)" />
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// ─── Quiz Page ────────────────────────────────────────────────────────────────

function QuizPage({
  mode,
  onFinish,
  onBack,
}: {
  mode: QuizMode;
  onFinish: (score: number, total: number, wrongIds: number[]) => void;
  onBack: () => void;
}) {
  const [quiz, setQuiz] = useState<QuizState>(() => ({
    questions: buildQuiz(mode),
    current: 0,
    selected: null,
    answered: false,
    score: 0,
    wrongIds: [],
  }));

  const q = quiz.questions[quiz.current];
  const cat = getCategoryMeta(q.category);
  const progress = ((quiz.current + (quiz.answered ? 1 : 0)) / quiz.questions.length) * 100;

  const handleSelect = useCallback(
    (idx: number) => {
      if (quiz.answered) return;
      const isCorrect = idx === q.correct;
      recordAnswer(q.category, isCorrect);

      setQuiz((prev) => ({
        ...prev,
        selected: idx,
        answered: true,
        score: isCorrect ? prev.score + 1 : prev.score,
        wrongIds: isCorrect ? prev.wrongIds : [...prev.wrongIds, q.id],
      }));
    },
    [quiz.answered, q]
  );

  const handleNext = useCallback(() => {
    const nextIdx = quiz.current + 1;
    if (nextIdx >= quiz.questions.length) {
      recordQuizComplete();
      onFinish(quiz.score + (quiz.selected === q.correct ? 0 : 0), quiz.questions.length, quiz.wrongIds);
      // Re-calculate score from state
      return;
    }
    setQuiz((prev) => ({
      ...prev,
      current: nextIdx,
      selected: null,
      answered: false,
    }));
  }, [quiz, q, onFinish]);

  // Fix score bug: handle in onFinish call
  const handleNextFixed = useCallback(() => {
    const nextIdx = quiz.current + 1;
    const finalScore = quiz.score + (quiz.selected === q.correct ? 1 : (quiz.selected !== null && !quiz.answered ? 0 : 0));
    
    if (nextIdx >= quiz.questions.length) {
      recordQuizComplete();
      const realScore = quiz.answered && quiz.selected === q.correct ? quiz.score : quiz.score;
      onFinish(quiz.score, quiz.questions.length, quiz.wrongIds);
      return;
    }
    setQuiz((prev) => ({
      ...prev,
      current: nextIdx,
      selected: null,
      answered: false,
    }));
  }, [quiz, q, onFinish]);

  const optionClass = (idx: number) => {
    if (!quiz.answered) return "answer-option";
    if (idx === q.correct) return "answer-option correct-reveal";
    if (idx === quiz.selected && idx !== q.correct) return "answer-option selected-wrong";
    return "answer-option";
  };

  return (
    <div style={{ padding: "20px 20px 40px", maxWidth: 600, margin: "0 auto" }}>
      {/* Top bar */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: 20,
        }}
      >
        <button
          id="btn-quiz-back"
          className="btn-secondary"
          style={{ padding: "8px 16px", fontSize: 13 }}
          onClick={onBack}
        >
          ← Esci
        </button>
        <span style={{ fontSize: 13, color: "var(--text-muted)", fontWeight: 500 }}>
          {quiz.current + 1} / {quiz.questions.length}
        </span>
        <div
          style={{
            fontSize: 13,
            fontWeight: 700,
            color: "var(--accent-primary)",
          }}
        >
          ✓ {quiz.score}
        </div>
      </div>

      {/* Progress */}
      <div className="progress-bar" style={{ marginBottom: 28 }}>
        <div className="progress-fill" style={{ width: `${progress}%` }} />
      </div>

      {/* Category chip */}
      <div style={{ marginBottom: 16 }}>
        <span className="category-chip">
          {cat.icon} {cat.label}
        </span>
      </div>

      {/* Question */}
      <div
        key={quiz.current}
        className="animate-scale-in"
        style={{
          fontSize: 17,
          fontWeight: 600,
          lineHeight: 1.6,
          marginBottom: 28,
          color: "var(--text-primary)",
        }}
      >
        {q.question}
      </div>

      {/* Options */}
      <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 24 }}>
        {q.options.map((opt, idx) => (
          <button
            key={idx}
            id={`quiz-opt-${idx}`}
            className={optionClass(idx)}
            disabled={quiz.answered}
            onClick={() => handleSelect(idx)}
          >
            <span
              style={{
                width: 28,
                height: 28,
                borderRadius: 8,
                background:
                  !quiz.answered
                    ? "rgba(255,255,255,0.06)"
                    : idx === q.correct
                    ? "var(--success)"
                    : idx === quiz.selected
                    ? "var(--error)"
                    : "rgba(255,255,255,0.06)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 13,
                fontWeight: 700,
                flexShrink: 0,
                color: "white",
                transition: "background 0.3s",
              }}
            >
              {quiz.answered ? (
                idx === q.correct ? (
                  <CheckCircle2 size={14} />
                ) : idx === quiz.selected ? (
                  <XCircle size={14} />
                ) : (
                  String.fromCharCode(65 + idx)
                )
              ) : (
                String.fromCharCode(65 + idx)
              )}
            </span>
            {opt}
          </button>
        ))}
      </div>

      {/* Explanation */}
      {quiz.answered && (
        <div
          className="animate-fade-in-up"
          style={{
            background:
              quiz.selected === q.correct
                ? "rgba(16, 185, 129, 0.08)"
                : "rgba(239, 68, 68, 0.08)",
            border: `1px solid ${
              quiz.selected === q.correct
                ? "rgba(16, 185, 129, 0.25)"
                : "rgba(239, 68, 68, 0.25)"
            }`,
            borderRadius: 16,
            padding: "16px 20px",
            marginBottom: 24,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              marginBottom: 8,
            }}
          >
            {quiz.selected === q.correct ? (
              <CheckCircle2 size={18} color="var(--success)" />
            ) : (
              <AlertCircle size={18} color="var(--error)" />
            )}
            <span
              style={{
                fontWeight: 700,
                color:
                  quiz.selected === q.correct
                    ? "var(--success)"
                    : "var(--error)",
              }}
            >
              {quiz.selected === q.correct ? "Risposta Corretta!" : "Risposta Sbagliata"}
            </span>
          </div>
          <p style={{ fontSize: 14, color: "var(--text-secondary)", lineHeight: 1.6 }}>
            {q.explanation}
          </p>
        </div>
      )}

      {/* Next button */}
      {quiz.answered && (
        <button
          id="btn-quiz-next"
          className="btn-primary animate-fade-in-up"
          style={{ width: "100%" }}
          onClick={handleNextFixed}
        >
          {quiz.current + 1 >= quiz.questions.length
            ? "Vedi Risultati"
            : "Prossima Domanda"}{" "}
          →
        </button>
      )}
    </div>
  );
}

// ─── Results Page ────────────────────────────────────────────────────────────

function ResultsPage({
  score,
  total,
  onRestart,
  onHome,
}: {
  score: number;
  total: number;
  onRestart: () => void;
  onHome: () => void;
}) {
  const pct = Math.round((score / total) * 100);
  const passed = pct >= 70;
  const deg = (pct / 100) * 360;

  const messages = passed
    ? ["Ottimo lavoro! 🎉", "Sei sulla strada giusta!", "Fantastico! Continua così!"]
    : ["Non mollare! 💪", "Riprova, ce la fai!", "Studiare paga, riprova!"];
  const msg = messages[Math.floor(Math.random() * messages.length)];

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px 24px",
        maxWidth: 480,
        margin: "0 auto",
      }}
    >
      <div className="animate-scale-in" style={{ textAlign: "center", width: "100%" }}>
        {/* Trophy/Sad icon */}
        <div
          style={{
            fontSize: 64,
            marginBottom: 24,
            filter: passed ? "drop-shadow(0 0 20px gold)" : "none",
          }}
        >
          {passed ? "🏆" : "📚"}
        </div>

        <h1
          style={{
            fontSize: 28,
            fontWeight: 800,
            marginBottom: 8,
          }}
        >
          {msg}
        </h1>

        <p style={{ color: "var(--text-secondary)", marginBottom: 40 }}>
          {passed ? "Hai superato il quiz!" : "Non hai raggiunto il 70% richiesto."}
        </p>

        {/* Score ring */}
        <div
          style={{ display: "flex", justifyContent: "center", marginBottom: 40 }}
        >
          <div
            className="score-ring"
            style={{ ["--score-deg" as string]: `${deg}deg` }}
          >
            <div className="score-inner">
              <div
                style={{
                  fontSize: 32,
                  fontWeight: 900,
                  color: passed ? "var(--success)" : "var(--error)",
                }}
              >
                {pct}%
              </div>
              <div style={{ fontSize: 12, color: "var(--text-muted)" }}>
                {score}/{total}
              </div>
            </div>
          </div>
        </div>

        {/* Details */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 12,
            marginBottom: 36,
          }}
        >
          <div className="stat-badge">
            <CheckCircle2 size={20} color="var(--success)" />
            <span style={{ fontSize: 24, fontWeight: 800 }}>{score}</span>
            <span style={{ fontSize: 12, color: "var(--text-muted)" }}>
              Corrette
            </span>
          </div>
          <div className="stat-badge">
            <XCircle size={20} color="var(--error)" />
            <span style={{ fontSize: 24, fontWeight: 800 }}>{total - score}</span>
            <span style={{ fontSize: 12, color: "var(--text-muted)" }}>
              Sbagliate
            </span>
          </div>
        </div>

        {/* Pass/Fail bar */}
        <div
          style={{
            background:
              passed
                ? "rgba(16,185,129,0.1)"
                : "rgba(239,68,68,0.1)",
            border: `1px solid ${passed ? "rgba(16,185,129,0.3)" : "rgba(239,68,68,0.3)"}`,
            borderRadius: 16,
            padding: "14px 20px",
            marginBottom: 32,
            fontSize: 14,
            fontWeight: 600,
            color: passed ? "var(--success)" : "var(--error)",
          }}
        >
          {passed
            ? "✓ Hai superato la soglia del 70%!"
            : `✗ Servono almeno ${Math.ceil(total * 0.7)} risposte corrette (${Math.ceil(total * 0.7) - score} in più)`}
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <button
            id="btn-results-restart"
            className="btn-primary"
            onClick={onRestart}
          >
            <RotateCcw size={16} style={{ display: "inline", marginRight: 8 }} />
            Riprova Quiz
          </button>
          <button
            id="btn-results-home"
            className="btn-secondary"
            onClick={onHome}
          >
            ← Torna alla Home
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── Stats Page ───────────────────────────────────────────────────────────────

function StatsPage({
  progress,
  onReset,
}: {
  progress: UserProgress;
  onReset: () => void;
}) {
  const accuracy = getAccuracy(progress);

  return (
    <div style={{ padding: "24px 20px 100px", maxWidth: 600, margin: "0 auto" }}>
      <h1
        style={{
          fontSize: 26,
          fontWeight: 800,
          marginBottom: 6,
        }}
        className="animate-fade-in-up"
      >
        Le tue Statistiche
      </h1>
      <p
        style={{ color: "var(--text-secondary)", fontSize: 14, marginBottom: 28 }}
        className="animate-fade-in-up"
      >
        Monitora i tuoi progressi categoria per categoria
      </p>

      {/* Global stats */}
      <div
        className="animate-fade-in-up"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 12,
          marginBottom: 28,
        }}
      >
        {[
          {
            icon: <Trophy size={22} color="#f59e0b" />,
            val: progress.completedQuizzes,
            label: "Quiz Completati",
          },
          {
            icon: <Target size={22} color="#6366f1" />,
            val: `${accuracy}%`,
            label: "Precisione Globale",
          },
          {
            icon: <Zap size={22} color="#10b981" />,
            val: progress.totalCorrect,
            label: "Risposte Corrette",
          },
          {
            icon: <Flame size={22} color="#ef4444" />,
            val: progress.streak,
            label: "Giorni Consecutivi",
          },
        ].map((s, i) => (
          <div key={i} className="stat-badge">
            {s.icon}
            <span style={{ fontSize: 26, fontWeight: 800 }}>{s.val}</span>
            <span
              style={{
                fontSize: 12,
                color: "var(--text-muted)",
                textAlign: "center",
              }}
            >
              {s.label}
            </span>
          </div>
        ))}
      </div>

      {/* Category breakdown */}
      <h3
        style={{
          fontSize: 13,
          fontWeight: 600,
          color: "var(--text-muted)",
          marginBottom: 14,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
        }}
      >
        Per Categoria
      </h3>

      <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 32 }}>
        {categories.map((cat) => {
          const stats = progress.categoryStats[cat.id] ?? {
            answered: 0,
            correct: 0,
          };
          const acc =
            stats.answered > 0
              ? Math.round((stats.correct / stats.answered) * 100)
              : 0;
          const total = questions.filter((q) => q.category === cat.id).length;

          return (
            <div
              key={cat.id}
              className="glass-card"
              style={{ padding: "16px 20px" }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: 10,
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <span style={{ fontSize: 22 }}>{cat.icon}</span>
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 600 }}>
                      {cat.label}
                    </div>
                    <div style={{ fontSize: 12, color: "var(--text-muted)" }}>
                      {stats.answered} / {total} risposte date
                    </div>
                  </div>
                </div>
                <span
                  style={{
                    fontSize: 18,
                    fontWeight: 800,
                    color:
                      stats.answered === 0
                        ? "var(--text-muted)"
                        : acc >= 70
                        ? "var(--success)"
                        : acc >= 40
                        ? "var(--warning)"
                        : "var(--error)",
                  }}
                >
                  {stats.answered === 0 ? "–" : `${acc}%`}
                </span>
              </div>
              <div className="progress-bar">
                <div
                  className="progress-fill"
                  style={{
                    width: `${acc}%`,
                    background:
                      acc >= 70
                        ? "linear-gradient(90deg, #10b981, #059669)"
                        : acc >= 40
                        ? "linear-gradient(90deg, #f59e0b, #d97706)"
                        : "linear-gradient(90deg, #ef4444, #dc2626)",
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>

      {/* Reset */}
      <button
        id="btn-reset-progress"
        onClick={onReset}
        style={{
          width: "100%",
          padding: "14px",
          borderRadius: 14,
          border: "1px solid rgba(239,68,68,0.3)",
          background: "rgba(239,68,68,0.06)",
          color: "#ef4444",
          fontSize: 14,
          fontWeight: 600,
          cursor: "pointer",
          transition: "all 0.2s",
        }}
      >
        🗑️ Reimposta Progressi
      </button>
    </div>
  );
}

// ─── Main App ─────────────────────────────────────────────────────────────────

export default function App() {
  const [page, setPage] = useState<Page>("home");
  const [quizMode, setQuizMode] = useState<QuizMode>("all");
  const [quizKey, setQuizKey] = useState(0);
  const [lastResult, setLastResult] = useState<{
    score: number;
    total: number;
    wrongIds: number[];
  } | null>(null);
  const [progress, setProgress] = useState<UserProgress>(() => getProgress());

  useEffect(() => {
    setProgress(getProgress());
  }, [page]);

  const handleStartQuiz = (mode: QuizMode) => {
    setQuizMode(mode);
    setQuizKey((k) => k + 1);
    setPage("quiz");
  };

  const handleQuizFinish = (score: number, total: number, wrongIds: number[]) => {
    setLastResult({ score, total, wrongIds });
    setProgress(getProgress());
    setPage("results");
  };

  const handleReset = () => {
    if (confirm("Sei sicuro di voler cancellare tutti i progressi?")) {
      const { resetProgress } = require("@/lib/store");
      resetProgress();
      setProgress(getProgress());
    }
  };

  return (
    <>
      <div className="mesh-bg" />

      {page === "home" && (
        <HomePage
          progress={progress}
          onStartQuiz={handleStartQuiz}
          onNavigate={setPage}
        />
      )}

      {page === "quiz" && (
        <QuizPage
          key={quizKey}
          mode={quizMode}
          onFinish={handleQuizFinish}
          onBack={() => setPage("home")}
        />
      )}

      {page === "results" && lastResult && (
        <ResultsPage
          score={lastResult.score}
          total={lastResult.total}
          onRestart={() => handleStartQuiz(quizMode)}
          onHome={() => setPage("home")}
        />
      )}

      {page === "stats" && (
        <StatsPage progress={progress} onReset={handleReset} />
      )}

      <NavBar page={page} onNav={setPage} />
    </>
  );
}
