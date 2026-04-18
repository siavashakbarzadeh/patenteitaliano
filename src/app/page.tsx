"use client";

import { useState, useEffect, useCallback } from "react";
import { questions, chapters, type Question, type Chapter } from "@/lib/questions";
import {
  getProgress,
  recordAnswer,
  recordQuizComplete,
  getAccuracy,
  resetProgress,
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
  AlertCircle,
  Lock,
} from "lucide-react";

// ─── Types ────────────────────────────────────────────────────────
type Page = "home" | "chapters" | "quiz" | "results" | "stats";

interface QuizState {
  questions: Question[];
  current: number;
  selected: number | null;
  answered: boolean;
  score: number;
  wrongIds: number[];
}

// ─── Helpers ──────────────────────────────────────────────────────
function shuffle<T>(arr: T[]): T[] {
  return [...arr].sort(() => Math.random() - 0.5);
}

function buildQuiz(chapterNum: number): Question[] {
  const pool = questions.filter((q) => q.chapter === chapterNum);
  return shuffle(pool);
}

// ─── Components ───────────────────────────────────────────────────

function ItalianFlag() {
  return (
    <span className="it-flag">
      <span style={{ background: "#009246" }} />
      <span style={{ background: "#ffffff" }} />
      <span style={{ background: "#ce2b37" }} />
    </span>
  );
}

function NavBar({ page, onNav }: { page: Page; onNav: (p: Page) => void }) {
  if (page === "quiz" || page === "results") return null;
  const items: { id: Page; label: string; icon: React.ReactNode }[] = [
    { id: "home",     label: "Home",       icon: <Home size={20} /> },
    { id: "chapters", label: "Capitoli",   icon: <BookOpen size={20} /> },
    { id: "stats",    label: "Statistiche",icon: <BarChart2 size={20} /> },
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

// ─── Home Page ────────────────────────────────────────────────────
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
        <h1 style={{ fontSize: 34, fontWeight: 900, lineHeight: 1.15, marginBottom: 10 }}>
          Studia il{" "}
          <span style={{
            background: "linear-gradient(135deg, #6366f1, #a78bfa)",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
          }}>
            Codice della Strada
          </span>
        </h1>
        <p style={{ color: "var(--text-secondary)", fontSize: 15, lineHeight: 1.6 }}>
          Il libro è diviso in <strong style={{ color: "var(--text-primary)" }}>25 capitoli</strong>.
          Carica le immagini di ogni capitolo e costruiamo insieme il tuo quiz personalizzato.
        </p>
      </div>

      {/* Stats row */}
      <div className="animate-fade-in-up" style={{
        display: "grid", gridTemplateColumns: "1fr 1fr 1fr",
        gap: 12, marginBottom: 32, animationDelay: "0.1s",
      }}>
        {[
          { icon: <Target size={20} color="#6366f1" />, val: `${accuracy}%`, label: "Precisione" },
          { icon: <Zap size={20} color="#f59e0b" />, val: progress.totalAnswered, label: "Risposte" },
          { icon: <Flame size={20} color={progress.streak > 0 ? "#ef4444" : "#475569"} />,
            val: progress.streak, label: "Streak 🔥" },
        ].map((s, i) => (
          <div key={i} className="stat-badge">
            {s.icon}
            <span style={{ fontSize: 22, fontWeight: 800 }}>{s.val}</span>
            <span style={{ fontSize: 11, color: "var(--text-muted)" }}>{s.label}</span>
          </div>
        ))}
      </div>

      {/* Progress overview */}
      <div
        className="animate-fade-in-up glass-card animate-pulse-glow"
        style={{ padding: "24px", marginBottom: 24, animationDelay: "0.15s" }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 16 }}>
          <div>
            <h2 style={{ fontSize: 17, fontWeight: 700, marginBottom: 4 }}>Progresso del Libro</h2>
            <p style={{ fontSize: 13, color: "var(--text-secondary)" }}>
              {availableCount} di 25 capitoli disponibili
            </p>
          </div>
          <span style={{
            fontSize: 13, fontWeight: 700, color: "var(--accent-primary)",
            background: "rgba(99,102,241,0.12)", padding: "4px 12px",
            borderRadius: 20, border: "1px solid rgba(99,102,241,0.2)"
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
              <div
                key={ch.number}
                title={`Cap. ${ch.number}: ${ch.title}`}
                style={{
                  width: 28, height: 28, borderRadius: 8,
                  background: !ch.available
                    ? "rgba(255,255,255,0.04)"
                    : done
                    ? "linear-gradient(135deg, #6366f1, #8b5cf6)"
                    : "rgba(99,102,241,0.2)",
                  border: ch.available
                    ? "1px solid rgba(99,102,241,0.4)"
                    : "1px solid rgba(255,255,255,0.06)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 10, fontWeight: 700,
                  color: ch.available ? "white" : "var(--text-muted)",
                  cursor: ch.available ? "pointer" : "default",
                  transition: "all 0.2s",
                }}
              >
                {ch.number}
              </div>
            );
          })}
        </div>

        <button
          id="btn-go-chapters"
          className="btn-primary"
          style={{ width: "100%" }}
          onClick={() => onNavigate("chapters")}
        >
          Vai ai Capitoli →
        </button>
      </div>

      {/* Available chapter quick card */}
      {chapters.filter(c => c.available).map((ch) => {
        const stats = progress.chapterStats[String(ch.number)];
        const acc = stats && stats.answered > 0
          ? Math.round((stats.correct / stats.answered) * 100) : null;
        const total = questions.filter(q => q.chapter === ch.number).length;
        return (
          <div
            key={ch.number}
            className="animate-fade-in-up glass-card"
            style={{ padding: "20px", animationDelay: "0.2s" }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 14 }}>
              <div style={{
                width: 50, height: 50, borderRadius: 14, flexShrink: 0,
                background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 22,
              }}>
                {ch.icon}
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 11, color: "var(--accent-primary)", fontWeight: 700, marginBottom: 2 }}>
                  CAPITOLO {ch.number}
                </div>
                <div style={{ fontSize: 16, fontWeight: 700 }}>{ch.title}</div>
                <div style={{ fontSize: 12, color: "var(--text-muted)" }}>{ch.subtitle}</div>
              </div>
              {acc !== null && (
                <span style={{
                  fontSize: 18, fontWeight: 800,
                  color: acc >= 70 ? "var(--success)" : acc >= 40 ? "var(--warning)" : "var(--error)",
                }}>
                  {acc}%
                </span>
              )}
            </div>
            <div style={{ fontSize: 12, color: "var(--text-muted)", marginBottom: 12 }}>
              {total} domande disponibili
            </div>
            <button
              id={`btn-start-ch${ch.number}`}
              className="btn-primary"
              style={{ width: "100%" }}
              onClick={() => onNavigate("quiz" as Page)}
            >
              Inizia Quiz Capitolo {ch.number} →
            </button>
          </div>
        );
      })}
    </div>
  );
}

// ─── Chapters List Page ───────────────────────────────────────────
function ChaptersPage({
  progress,
  onSelectChapter,
}: {
  progress: UserProgress;
  onSelectChapter: (ch: number) => void;
}) {
  return (
    <div style={{ padding: "24px 20px 100px", maxWidth: 600, margin: "0 auto" }}>
      <div className="animate-fade-in-up" style={{ marginBottom: 24 }}>
        <h1 style={{ fontSize: 26, fontWeight: 800, marginBottom: 6 }}>25 Capitoli</h1>
        <p style={{ color: "var(--text-secondary)", fontSize: 14 }}>
          Seleziona un capitolo per fare il quiz. I capitoli bloccati si sbloccano
          man mano che carichi le pagine del libro.
        </p>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        {chapters.map((ch, i) => {
          const stats = progress.chapterStats[String(ch.number)];
          const acc = stats && stats.answered > 0
            ? Math.round((stats.correct / stats.answered) * 100) : null;
          const total = questions.filter(q => q.chapter === ch.number).length;

          return (
            <button
              key={ch.number}
              id={`ch-item-${ch.number}`}
              className="glass-card"
              disabled={!ch.available}
              style={{
                display: "flex", alignItems: "center", gap: 14, padding: "16px 18px",
                cursor: ch.available ? "pointer" : "not-allowed",
                opacity: ch.available ? 1 : 0.5,
                width: "100%", textAlign: "left",
                border: "1px solid var(--border-subtle)",
                animationDelay: `${i * 0.03}s`,
              }}
              onClick={() => ch.available && onSelectChapter(ch.number)}
            >
              {/* Number badge */}
              <div style={{
                width: 40, height: 40, borderRadius: 12, flexShrink: 0,
                background: ch.available
                  ? "linear-gradient(135deg, #6366f1, #8b5cf6)"
                  : "rgba(255,255,255,0.06)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 14, fontWeight: 700, color: "white",
              }}>
                {ch.available ? ch.icon : <Lock size={14} color="var(--text-muted)" />}
              </div>

              {/* Info */}
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{
                  fontSize: 11, fontWeight: 600,
                  color: ch.available ? "var(--accent-primary)" : "var(--text-muted)",
                  marginBottom: 2,
                }}>
                  CAP. {String(ch.number).padStart(2, "0")}
                </div>
                <div style={{ fontSize: 14, fontWeight: 600, white: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                  {ch.title}
                </div>
                <div style={{ fontSize: 11, color: "var(--text-muted)" }}>
                  {ch.available ? `${total} domande` : "Carica le immagini per sbloccare"}
                </div>
              </div>

              {/* Right side */}
              {ch.available && (
                <div style={{ display: "flex", alignItems: "center", gap: 8, flexShrink: 0 }}>
                  {acc !== null && (
                    <span style={{
                      fontSize: 14, fontWeight: 800,
                      color: acc >= 70 ? "var(--success)" : acc >= 40 ? "var(--warning)" : "var(--error)",
                    }}>
                      {acc}%
                    </span>
                  )}
                  <ChevronRight size={16} color="var(--text-muted)" />
                </div>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}

// ─── Quiz Page ────────────────────────────────────────────────────
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
          ← Esci
        </button>
        <div style={{ textAlign: "center" }}>
          <div style={{ fontSize: 12, color: "var(--text-muted)", fontWeight: 600 }}>
            CAP. {chapterNum}
          </div>
          <div style={{ fontSize: 13, fontWeight: 600, color: "var(--text-secondary)" }}>
            {quiz.current + 1} / {quiz.questions.length}
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
        <span className="category-chip">
          {ch?.icon} {ch?.title}
        </span>
      </div>

      {/* Question */}
      <div key={quiz.current} className="animate-scale-in" style={{
        fontSize: 17, fontWeight: 600, lineHeight: 1.65, marginBottom: 28,
      }}>
        {q.question}
      </div>

      {/* Options */}
      <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 24 }}>
        {q.options.map((opt, idx) => (
          <button
            key={idx} id={`quiz-opt-${idx}`}
            className={optionClass(idx)} disabled={quiz.answered}
            onClick={() => handleSelect(idx)}
          >
            <span style={{
              width: 30, height: 30, borderRadius: 8, flexShrink: 0,
              background: !quiz.answered
                ? "rgba(255,255,255,0.06)"
                : idx === q.correct ? "var(--success)"
                : idx === quiz.selected ? "var(--error)"
                : "rgba(255,255,255,0.06)",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: 13, fontWeight: 700, color: "white", transition: "background 0.3s",
            }}>
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
            <span style={{
              fontWeight: 700,
              color: quiz.selected === q.correct ? "var(--success)" : "var(--error)",
            }}>
              {quiz.selected === q.correct ? "Risposta Corretta!" : "Risposta Sbagliata"}
            </span>
          </div>
          <p style={{ fontSize: 14, color: "var(--text-secondary)", lineHeight: 1.65 }}>
            {q.explanation}
          </p>
        </div>
      )}

      {/* Next */}
      {quiz.answered && (
        <button id="btn-quiz-next" className="btn-primary animate-fade-in-up"
          style={{ width: "100%" }} onClick={handleNext}>
          {quiz.current + 1 >= quiz.questions.length ? "Vedi Risultati" : "Prossima Domanda"} →
        </button>
      )}
    </div>
  );
}

// ─── Results Page ────────────────────────────────────────────────
function ResultsPage({ score, total, chapterNum, onRestart, onHome }: {
  score: number; total: number; chapterNum: number;
  onRestart: () => void; onHome: () => void;
}) {
  const pct = Math.round((score / total) * 100);
  const passed = pct >= 70;
  const deg = (pct / 100) * 360;
  const ch = chapters.find((c) => c.number === chapterNum);

  return (
    <div style={{
      minHeight: "100vh", display: "flex", flexDirection: "column",
      alignItems: "center", justifyContent: "center",
      padding: "40px 24px", maxWidth: 480, margin: "0 auto",
    }}>
      <div className="animate-scale-in" style={{ textAlign: "center", width: "100%" }}>
        <div style={{ fontSize: 64, marginBottom: 16, filter: passed ? "drop-shadow(0 0 20px gold)" : "none" }}>
          {passed ? "🏆" : "📚"}
        </div>
        <div style={{
          fontSize: 11, fontWeight: 700, color: "var(--accent-primary)",
          letterSpacing: "0.1em", marginBottom: 8,
        }}>
          CAPITOLO {chapterNum} – {ch?.title}
        </div>
        <h1 style={{ fontSize: 26, fontWeight: 800, marginBottom: 8 }}>
          {passed ? "Ottimo lavoro! 🎉" : "Continua a studiare! 💪"}
        </h1>
        <p style={{ color: "var(--text-secondary)", marginBottom: 36 }}>
          {passed ? "Hai superato la soglia del 70%!" : "Non hai ancora raggiunto il 70% necessario."}
        </p>

        {/* Score ring */}
        <div style={{ display: "flex", justifyContent: "center", marginBottom: 36 }}>
          <div className="score-ring" style={{ ["--score-deg" as string]: `${deg}deg` }}>
            <div className="score-inner">
              <div style={{
                fontSize: 32, fontWeight: 900,
                color: passed ? "var(--success)" : "var(--error)",
              }}>
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
            <span style={{ fontSize: 12, color: "var(--text-muted)" }}>Corrette</span>
          </div>
          <div className="stat-badge">
            <XCircle size={20} color="var(--error)" />
            <span style={{ fontSize: 24, fontWeight: 800 }}>{total - score}</span>
            <span style={{ fontSize: 12, color: "var(--text-muted)" }}>Sbagliate</span>
          </div>
        </div>

        <div style={{
          borderRadius: 16, padding: "14px 20px", marginBottom: 28,
          background: passed ? "rgba(16,185,129,0.1)" : "rgba(239,68,68,0.1)",
          border: `1px solid ${passed ? "rgba(16,185,129,0.3)" : "rgba(239,68,68,0.3)"}`,
          fontSize: 14, fontWeight: 600,
          color: passed ? "var(--success)" : "var(--error)",
        }}>
          {passed
            ? "✓ Soglia del 70% superata!"
            : `✗ Mancano ${Math.ceil(total * 0.7) - score} risposte corrette`}
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <button id="btn-results-restart" className="btn-primary" onClick={onRestart}>
            <RotateCcw size={16} style={{ display: "inline", marginRight: 8 }} />
            Riprova il Capitolo
          </button>
          <button id="btn-results-home" className="btn-secondary" onClick={onHome}>
            ← Torna alla Home
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── Stats Page ───────────────────────────────────────────────────
function StatsPage({ progress, onReset }: { progress: UserProgress; onReset: () => void }) {
  const accuracy = getAccuracy(progress);
  const availableChapters = chapters.filter(c => c.available);

  return (
    <div style={{ padding: "24px 20px 100px", maxWidth: 600, margin: "0 auto" }}>
      <h1 style={{ fontSize: 26, fontWeight: 800, marginBottom: 6 }} className="animate-fade-in-up">
        Statistiche
      </h1>
      <p style={{ color: "var(--text-secondary)", fontSize: 14, marginBottom: 28 }} className="animate-fade-in-up">
        I tuoi progressi capitolo per capitolo
      </p>

      <div className="animate-fade-in-up" style={{
        display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 28,
      }}>
        {[
          { icon: <Trophy size={22} color="#f59e0b" />, val: progress.completedQuizzes, label: "Quiz Completati" },
          { icon: <Target size={22} color="#6366f1" />, val: `${accuracy}%`, label: "Precisione Globale" },
          { icon: <Zap size={22} color="#10b981" />, val: progress.totalCorrect, label: "Risposte Corrette" },
          { icon: <Flame size={22} color="#ef4444" />, val: progress.streak, label: "Giorni Consecutivi" },
        ].map((s, i) => (
          <div key={i} className="stat-badge">
            {s.icon}
            <span style={{ fontSize: 26, fontWeight: 800 }}>{s.val}</span>
            <span style={{ fontSize: 12, color: "var(--text-muted)", textAlign: "center" }}>{s.label}</span>
          </div>
        ))}
      </div>

      <h3 style={{
        fontSize: 13, fontWeight: 600, color: "var(--text-muted)",
        marginBottom: 14, letterSpacing: "0.08em", textTransform: "uppercase",
      }}>
        Capitoli Disponibili
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
                    <div style={{ fontSize: 13, fontWeight: 700 }}>Cap. {ch.number} – {ch.title}</div>
                    <div style={{ fontSize: 12, color: "var(--text-muted)" }}>
                      {stats.answered} / {total} risposte date
                    </div>
                  </div>
                </div>
                <span style={{
                  fontSize: 18, fontWeight: 800,
                  color: stats.answered === 0 ? "var(--text-muted)"
                    : acc >= 70 ? "var(--success)"
                    : acc >= 40 ? "var(--warning)"
                    : "var(--error)",
                }}>
                  {stats.answered === 0 ? "–" : `${acc}%`}
                </span>
              </div>
              <div className="progress-bar">
                <div className="progress-fill" style={{
                  width: `${acc}%`,
                  background: acc >= 70
                    ? "linear-gradient(90deg, #10b981, #059669)"
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
        🗑️ Reimposta Progressi
      </button>
    </div>
  );
}

// ─── Main App ────────────────────────────────────────────────────
export default function App() {
  const [page, setPage] = useState<Page>("home");
  const [activeChapter, setActiveChapter] = useState<number>(20);
  const [quizKey, setQuizKey] = useState(0);
  const [lastResult, setLastResult] = useState<{ score: number; total: number } | null>(null);
  const [progress, setProgress] = useState<UserProgress>(() => getProgress());

  const refreshProgress = () => setProgress(getProgress());

  useEffect(() => { refreshProgress(); }, [page]);

  const handleSelectChapter = (ch: number) => {
    setActiveChapter(ch);
    setQuizKey((k) => k + 1);
    setPage("quiz");
  };

  // Home page "Inizia" button shortcut → chapter 20
  const handleHomeStart = () => handleSelectChapter(20);

  const handleQuizFinish = (score: number, total: number) => {
    setLastResult({ score, total });
    refreshProgress();
    setPage("results");
  };

  const handleReset = () => {
    if (confirm("Sei sicuro di voler cancellare tutti i progressi?")) {
      resetProgress();
      refreshProgress();
    }
  };

  return (
    <>
      <div className="mesh-bg" />

      {page === "home" && (
        <HomePage
          progress={progress}
          onNavigate={(p) => {
            if (p === "quiz") { handleHomeStart(); } else { setPage(p); }
          }}
        />
      )}
      {page === "chapters" && (
        <ChaptersPage progress={progress} onSelectChapter={handleSelectChapter} />
      )}
      {page === "quiz" && (
        <QuizPage
          key={quizKey}
          chapterNum={activeChapter}
          onFinish={handleQuizFinish}
          onBack={() => setPage("chapters")}
        />
      )}
      {page === "results" && lastResult && (
        <ResultsPage
          score={lastResult.score}
          total={lastResult.total}
          chapterNum={activeChapter}
          onRestart={() => { setQuizKey((k) => k + 1); setPage("quiz"); }}
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
