"use client";

import { useState, useMemo } from "react";
import { italianoTopics, type ItalianoTopic } from "@/lib/italiano";

// ─── Progress storage ─────────────────────────────────────────────────────────
const PROGRESS_KEY = "italiano_progress_v1";

type TopicProgress = {
  topicId: string;
  vocabLearned: number;
  phrasesLearned: number;
  dialogueRead: boolean;
  favorited: boolean;
  lastStudied?: string;
};

function getProgress(): Record<string, TopicProgress> {
  if (typeof window === "undefined") return {};
  try { return JSON.parse(localStorage.getItem(PROGRESS_KEY) || "{}"); }
  catch { return {}; }
}

function saveProgress(p: Record<string, TopicProgress>) {
  if (typeof window !== "undefined")
    localStorage.setItem(PROGRESS_KEY, JSON.stringify(p));
}

// ─── View types ───────────────────────────────────────────────────────────────
type View = "home" | "topic";
type TabId = "vocab" | "phrases" | "dialogue" | "grammar" | "reading";

// ═════════════════════════════════════════════════════════════════════════════
//  Main Component
// ═════════════════════════════════════════════════════════════════════════════
export default function ItalianoSection({ onBack }: { onBack: () => void }) {
  const [view, setView] = useState<View>("home");
  const [activeTopic, setActiveTopic] = useState<ItalianoTopic | null>(null);
  const [activeTab, setActiveTab] = useState<TabId>("vocab");
  const [search, setSearch] = useState("");
  const [progress, setProgress] = useState<Record<string, TopicProgress>>(getProgress);
  const [flippedCards, setFlippedCards] = useState<Set<number>>(new Set());

  const toggleFavorite = (topicId: string) => {
    const p = { ...progress };
    if (!p[topicId]) p[topicId] = { topicId, vocabLearned: 0, phrasesLearned: 0, dialogueRead: false, favorited: false };
    p[topicId].favorited = !p[topicId].favorited;
    setProgress(p);
    saveProgress(p);
  };

  const markDialogueRead = (topicId: string) => {
    const p = { ...progress };
    if (!p[topicId]) p[topicId] = { topicId, vocabLearned: 0, phrasesLearned: 0, dialogueRead: false, favorited: false };
    p[topicId].dialogueRead = true;
    p[topicId].lastStudied = new Date().toISOString();
    setProgress(p);
    saveProgress(p);
  };

  const openTopic = (topic: ItalianoTopic) => {
    setActiveTopic(topic);
    setActiveTab("vocab");
    setFlippedCards(new Set());
    setView("topic");
  };

  const filteredTopics = useMemo(() =>
    italianoTopics.filter(t =>
      t.title.toLowerCase().includes(search.toLowerCase()) ||
      t.titleFa.includes(search) ||
      t.descriptionFa.includes(search)
    ), [search]);

  const totalVocab = italianoTopics.reduce((s, t) => s + t.vocabulary.length, 0);
  const learnedTopics = Object.values(progress).filter(p => p.dialogueRead).length;

  // ── Topic Detail View ──────────────────────────────────────────────────────
  if (view === "topic" && activeTopic) {
    const tp = progress[activeTopic.id];
    const isFav = tp?.favorited ?? false;

    return (
      <div style={{ minHeight: "100vh", background: "var(--bg-primary)" }}>
        {/* Hero banner */}
        <div style={{
          background: activeTopic.colorBg,
          borderBottom: `1px solid ${activeTopic.color}40`,
          padding: "20px 16px 16px",
        }}>
          <div className="page-wrap-slim" style={{ padding: "0" }}>
            {/* Back + fav */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16 }}>
              <button onClick={() => setView("home")} style={{
                background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.15)",
                borderRadius: 12, padding: "8px 16px", color: "var(--text-primary)", fontSize: 13,
                cursor: "pointer", display: "flex", alignItems: "center", gap: 6,
              }}>← بازگشت</button>
              <button onClick={() => toggleFavorite(activeTopic.id)} style={{
                background: isFav ? "rgba(251,191,36,0.15)" : "rgba(255,255,255,0.08)",
                border: `1px solid ${isFav ? "rgba(251,191,36,0.4)" : "rgba(255,255,255,0.12)"}`,
                borderRadius: 12, padding: "8px 14px", fontSize: 18, cursor: "pointer",
              }}>{isFav ? "⭐" : "☆"}</button>
            </div>
            {/* Title */}
            <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 8 }}>
              <div style={{ fontSize: 48 }}>{activeTopic.icon}</div>
              <div>
                <h1 style={{ fontSize: 26, fontWeight: 900, color: "var(--text-primary)", margin: 0 }}>{activeTopic.title}</h1>
                <div style={{ color: "var(--text-secondary)", fontSize: 14, marginTop: 2 }}>{activeTopic.titleFa}</div>
                <span style={{
                  display: "inline-block", marginTop: 6, padding: "3px 10px", borderRadius: 20,
                  background: `${activeTopic.color}25`, color: activeTopic.color,
                  fontSize: 11, fontWeight: 700, border: `1px solid ${activeTopic.color}40`,
                }}>{activeTopic.levelFa}</span>
              </div>
            </div>
            {/* Stats row */}
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              {[
                { label: "واژه", value: activeTopic.vocabulary.length, icon: "📚" },
                { label: "عبارت", value: activeTopic.phrases.length, icon: "💬" },
                { label: "دیالوگ", value: activeTopic.dialogue.length, icon: "🎭" },
              ].map(s => (
                <div key={s.label} style={{
                  background: "rgba(255,255,255,0.07)", borderRadius: 10, padding: "6px 12px",
                  fontSize: 12, color: "var(--text-secondary)", display: "flex", gap: 5,
                }}>
                  {s.icon} <strong style={{ color: activeTopic.color }}>{s.value}</strong> {s.label}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tab bar */}
        <div style={{
          display: "flex", gap: 0, borderBottom: "1px solid rgba(255,255,255,0.07)",
          background: "var(--bg-secondary)", overflowX: "auto",
          WebkitOverflowScrolling: "touch" as const,
        }}>
          {([
            { id: "vocab" as const, label: "واژگان", icon: "📚" },
            { id: "phrases" as const, label: "عبارات", icon: "💬" },
            { id: "dialogue" as const, label: "دیالوگ", icon: "🎭" },
            ...(activeTopic.grammarNotes ? [{ id: "grammar" as const, label: "گرامر", icon: "📖" }] : []),
            ...(activeTopic.reading ? [{ id: "reading" as const, label: "متن", icon: "📰" }] : []),
          ]).map(tab => (
            <button key={tab.id} onClick={() => setActiveTab(tab.id)} style={{
              flex: "none", padding: "13px 20px", background: "none", border: "none",
              borderBottom: activeTab === tab.id ? `2px solid ${activeTopic.color}` : "2px solid transparent",
              color: activeTab === tab.id ? activeTopic.color : "var(--text-muted)",
              fontSize: 13, fontWeight: 600, cursor: "pointer", whiteSpace: "nowrap" as const,
              display: "flex", alignItems: "center", gap: 5, transition: "all 0.2s",
            }}>
              {tab.icon} {tab.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="page-wrap" style={{ paddingTop: 20 }}>

          {/* ── Vocab Tab ── */}
          {activeTab === "vocab" && (
            <div>
              <div style={{ direction: "rtl", marginBottom: 16, color: "var(--text-muted)", fontSize: 13 }}>
                روی کارت کلیک کنید تا ترجمه نمایش داده شود 👆
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {activeTopic.vocabulary.map((v, i) => {
                  const flipped = flippedCards.has(i);
                  return (
                    <div key={i}
                      onClick={() => {
                        const n = new Set(flippedCards);
                        flipped ? n.delete(i) : n.add(i);
                        setFlippedCards(n);
                      }}
                      style={{
                        background: flipped
                          ? `linear-gradient(135deg, ${activeTopic.color}18, ${activeTopic.color}08)`
                          : "var(--bg-card)",
                        border: `1px solid ${flipped ? activeTopic.color + "50" : "rgba(255,255,255,0.06)"}`,
                        borderRadius: 16, padding: "16px 18px", cursor: "pointer",
                        transition: "all 0.2s", direction: "rtl",
                      }}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                        <div>
                          <div style={{ fontSize: 16, fontWeight: 700, color: "var(--text-primary)", marginBottom: 2, direction: "ltr", textAlign: "left" }}>
                            🇮🇹 {v.italian}
                          </div>
                          {v.phonetic && (
                            <div style={{ fontSize: 11, color: "var(--text-muted)", direction: "ltr", textAlign: "left", fontStyle: "italic" }}>
                              /{v.phonetic}/
                            </div>
                          )}
                        </div>
                        <span style={{ fontSize: 16, color: flipped ? activeTopic.color : "transparent" }}>✓</span>
                      </div>
                      {flipped && (
                        <div style={{ marginTop: 12, paddingTop: 12, borderTop: `1px solid ${activeTopic.color}25` }}>
                          <div style={{ fontSize: 15, fontWeight: 700, color: activeTopic.color, marginBottom: 8 }}>
                            🇮🇷 {v.persian}
                          </div>
                          {v.example && (
                            <div style={{ fontSize: 12, color: "var(--text-secondary)", direction: "ltr", textAlign: "left" }}>
                              <em>«{v.example}»</em>
                              <div style={{ direction: "rtl", textAlign: "right", color: "var(--text-muted)", marginTop: 4 }}>
                                {v.examplePersian}
                              </div>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* ── Phrases Tab ── */}
          {activeTab === "phrases" && (
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {activeTopic.phrases.map((p, i) => (
                <div key={i} className="glass-card" style={{ padding: "16px 18px", direction: "rtl" }}>
                  {p.context && (
                    <div style={{ fontSize: 10, color: activeTopic.color, fontWeight: 700, marginBottom: 8,
                      background: `${activeTopic.color}15`, display: "inline-block",
                      padding: "2px 8px", borderRadius: 8 }}>
                      {p.context}
                    </div>
                  )}
                  <div style={{ fontSize: 15, fontWeight: 700, color: "var(--text-primary)", direction: "ltr", textAlign: "left", marginBottom: 6 }}>
                    🇮🇹 {p.italian}
                  </div>
                  <div style={{ fontSize: 14, color: "var(--text-secondary)" }}>
                    🇮🇷 {p.persian}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* ── Dialogue Tab ── */}
          {activeTab === "dialogue" && (
            <div>
              {activeTopic.culturalTip && (
                <div style={{
                  background: `${activeTopic.color}12`, border: `1px solid ${activeTopic.color}30`,
                  borderRadius: 14, padding: "14px 16px", marginBottom: 20, direction: "rtl",
                }}>
                  <div style={{ fontSize: 11, fontWeight: 700, color: activeTopic.color, marginBottom: 6 }}>💡 نکته فرهنگی</div>
                  <div style={{ fontSize: 13, color: "var(--text-secondary)", lineHeight: 1.8 }}>{activeTopic.culturalTip}</div>
                </div>
              )}
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {activeTopic.dialogue.map((line, i) => {
                  const isA = line.speaker === "A";
                  return (
                    <div key={i} style={{
                      display: "flex", flexDirection: isA ? "row" : "row-reverse", gap: 10, alignItems: "flex-start",
                    }}>
                      {/* Avatar */}
                      <div style={{
                        width: 36, height: 36, borderRadius: "50%", flexShrink: 0,
                        background: isA ? `${activeTopic.color}25` : "rgba(249,115,22,0.2)",
                        border: `2px solid ${isA ? activeTopic.color : "#f97316"}50`,
                        display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16,
                      }}>
                        {isA ? "👤" : "👨‍⚕️"}
                      </div>
                      {/* Bubble */}
                      <div style={{
                        maxWidth: "78%", background: isA ? `${activeTopic.color}15` : "rgba(249,115,22,0.1)",
                        border: `1px solid ${isA ? activeTopic.color : "#f97316"}30`,
                        borderRadius: isA ? "4px 16px 16px 16px" : "16px 4px 16px 16px",
                        padding: "10px 14px",
                      }}>
                        {line.role && (
                          <div style={{ fontSize: 10, fontWeight: 700, color: isA ? activeTopic.color : "#f97316", marginBottom: 5 }}>
                            {line.role}
                          </div>
                        )}
                        <div style={{ fontSize: 13, color: "var(--text-primary)", direction: "ltr", marginBottom: 5 }}>
                          {line.italian}
                        </div>
                        <div style={{ fontSize: 12, color: "var(--text-muted)", direction: "rtl", textAlign: "right" }}>
                          {line.persian}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              {/* Mark as read */}
              {!tp?.dialogueRead && (
                <button onClick={() => markDialogueRead(activeTopic.id)}
                  style={{
                    width: "100%", marginTop: 20, padding: "14px", borderRadius: 14,
                    background: `linear-gradient(135deg, ${activeTopic.color}, #10b981)`,
                    color: "white", border: "none", fontSize: 15, fontWeight: 700, cursor: "pointer",
                  }}>
                  ✓ دیالوگ را مطالعه کردم
                </button>
              )}
              {tp?.dialogueRead && (
                <div style={{
                  textAlign: "center", marginTop: 16, padding: "12px",
                  background: "rgba(34,197,94,0.1)", border: "1px solid rgba(34,197,94,0.3)",
                  borderRadius: 12, color: "#22c55e", fontSize: 13, fontWeight: 700,
                }}>
                  ✅ این دیالوگ را قبلاً مطالعه کرده‌اید
                </div>
              )}
            </div>
          )}

          {/* ── Grammar Tab ── */}
          {activeTab === "grammar" && activeTopic.grammarNotes && (
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {activeTopic.grammarNotes.map((note, i) => (
                <div key={i} className="glass-card" style={{ padding: "18px 20px", direction: "rtl" }}>
                  <div style={{ fontSize: 14, fontWeight: 800, color: activeTopic.color, marginBottom: 10 }}>
                    📖 {note.title}
                  </div>
                  <div style={{ fontSize: 13, color: "var(--text-secondary)", lineHeight: 2, whiteSpace: "pre-line" }}>
                    {note.body}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* ── Reading Tab ── */}
          {activeTab === "reading" && activeTopic.reading && (
            <ReadingView reading={activeTopic.reading} color={activeTopic.color} />
          )}

          <div style={{ height: 40 }} />
        </div>
      </div>
    );
  }

  // ── Home View ─────────────────────────────────────────────────────────────
  return (
    <div style={{ minHeight: "100vh", background: "var(--bg-primary)" }}>
      {/* Header */}
      <div style={{
        background: "linear-gradient(135deg, rgba(14,165,233,0.18), rgba(16,185,129,0.1))",
        borderBottom: "1px solid rgba(14,165,233,0.2)",
        padding: "20px 16px 16px",
      }}>
        <div className="page-wrap-slim" style={{ padding: 0 }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16 }}>
            <button onClick={onBack} style={{
              background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)",
              borderRadius: 12, padding: "8px 14px", color: "var(--text-secondary)", fontSize: 13, cursor: "pointer",
            }}>⬅ خانه</button>
            <div style={{ fontSize: 11, color: "#0ea5e9", fontWeight: 700 }}>ITALIANO PER ARGOMENTI</div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 10 }}>
            <div style={{ fontSize: 36 }}>🇮🇹</div>
            <div>
              <h1 style={{ fontSize: 22, fontWeight: 900, color: "var(--text-primary)", margin: 0 }}>
                Italiano per Argomenti
              </h1>
              <div style={{ color: "var(--text-muted)", fontSize: 13, marginTop: 2 }}>
                آموزش ایتالیایی به روش موضوعی
              </div>
            </div>
          </div>
          {/* Progress bar */}
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" as const }}>
            {[
              { label: "موضوع فعال", value: italianoTopics.length, color: "#0ea5e9" },
              { label: "مطالعه شده", value: learnedTopics, color: "#10b981" },
              { label: "کل واژه", value: totalVocab, color: "#f59e0b" },
            ].map(s => (
              <div key={s.label} style={{
                background: "rgba(255,255,255,0.06)", borderRadius: 10, padding: "6px 14px",
                fontSize: 12, color: "var(--text-secondary)",
              }}>
                <strong style={{ color: s.color, fontSize: 15 }}>{s.value}</strong> {s.label}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="page-wrap">
        {/* Search */}
        <input
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder="🔍 جستجو در موضوعات..."
          style={{
            width: "100%", background: "rgba(255,255,255,0.05)",
            border: "1px solid rgba(14,165,233,0.2)", borderRadius: 12,
            padding: "12px 16px", color: "var(--text-primary)", fontSize: 14,
            outline: "none", marginBottom: 20, boxSizing: "border-box" as const, direction: "rtl",
          }}
        />

        {/* Favorites first */}
        {Object.values(progress).some(p => p.favorited) && (
          <div style={{ marginBottom: 24 }}>
            <div style={{ fontSize: 12, fontWeight: 700, color: "#f59e0b", marginBottom: 10, direction: "rtl" }}>
              ⭐ علاقه‌مندی‌ها
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {italianoTopics
                .filter(t => progress[t.id]?.favorited)
                .map(topic => <TopicCard key={topic.id} topic={topic} progress={progress[topic.id]} onOpen={openTopic} onFav={toggleFavorite} />)
              }
            </div>
          </div>
        )}

        {/* All topics */}
        <div style={{ marginBottom: 12, direction: "rtl" }}>
          <div style={{ fontSize: 12, fontWeight: 700, color: "var(--text-muted)", marginBottom: 10 }}>
            همه موضوعات ({filteredTopics.length})
          </div>
          {filteredTopics.length === 0 && (
            <div style={{ textAlign: "center", padding: 40, color: "var(--text-muted)" }}>
              موضوعی یافت نشد
            </div>
          )}
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {filteredTopics.map(topic => (
              <TopicCard key={topic.id} topic={topic} progress={progress[topic.id]} onOpen={openTopic} onFav={toggleFavorite} />
            ))}
          </div>
        </div>
        <div style={{ height: 40 }} />
      </div>
    </div>
  );
}

// ─── Topic Card component ─────────────────────────────────────────────────────
function TopicCard({
  topic, progress, onOpen, onFav,
}: {
  topic: ItalianoTopic;
  progress?: TopicProgress;
  onOpen: (t: ItalianoTopic) => void;
  onFav: (id: string) => void;
}) {
  const isReady = topic.vocabulary.length > 0;
  const isStudied = progress?.dialogueRead ?? false;

  return (
    <div style={{
      background: isReady ? topic.colorBg : "rgba(255,255,255,0.02)",
      border: `1px solid ${isReady ? topic.color + "40" : "rgba(255,255,255,0.06)"}`,
      borderRadius: 18, padding: "16px 18px",
      opacity: isReady ? 1 : 0.55,
      cursor: isReady ? "pointer" : "default",
      transition: "all 0.2s",
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: 12, direction: "rtl" }}>
        {/* Icon */}
        <div style={{
          width: 52, height: 52, borderRadius: 14, flexShrink: 0,
          background: `${topic.color}20`, border: `2px solid ${topic.color}40`,
          display: "flex", alignItems: "center", justifyContent: "center", fontSize: 26,
        }}>
          {topic.icon}
        </div>
        {/* Info */}
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 3 }}>
            <div style={{ fontSize: 16, fontWeight: 800, color: "var(--text-primary)" }}>{topic.title}</div>
            {isStudied && <span style={{ fontSize: 13 }}>✅</span>}
          </div>
          <div style={{ fontSize: 13, color: "var(--text-secondary)", marginBottom: 5 }}>{topic.titleFa}</div>
          <div style={{ display: "flex", gap: 6, flexWrap: "wrap" as const }}>
            <span style={{
              fontSize: 10, padding: "2px 8px", borderRadius: 8,
              background: `${topic.color}20`, color: topic.color, fontWeight: 700,
              border: `1px solid ${topic.color}30`,
            }}>{topic.levelFa}</span>
            {isReady && (
              <span style={{ fontSize: 10, color: "var(--text-muted)" }}>
                {topic.vocabulary.length} واژه · {topic.phrases.length} عبارت
              </span>
            )}
            {!isReady && (
              <span style={{ fontSize: 10, color: "var(--text-muted)" }}>به زودی...</span>
            )}
          </div>
        </div>
        {/* Actions */}
        <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          <button
            onClick={e => { e.stopPropagation(); onFav(topic.id); }}
            style={{
              background: "none", border: "none", fontSize: 18, cursor: "pointer",
              padding: 4, opacity: progress?.favorited ? 1 : 0.4,
            }}
          >
            {progress?.favorited ? "⭐" : "☆"}
          </button>
          {isReady && (
            <button
              onClick={() => onOpen(topic)}
              style={{
                background: topic.color, border: "none", borderRadius: 10,
                padding: "7px 14px", color: "white", fontSize: 12, fontWeight: 700,
                cursor: "pointer", whiteSpace: "nowrap" as const,
              }}
            >
              مطالعه
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

// --- Reading View component ---------------------------------------------------
import type { Reading } from "@/lib/italiano";

function ReadingView({ reading, color }: { reading: Reading; color: string }) {
  const [showFa, setShowFa] = useState(false);

  function highlightText(text: string, keywords: string[] | undefined): React.ReactNode {
    if (!keywords || keywords.length === 0) return text;
    const escaped = keywords.map(k => k.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));
    const pattern = new RegExp(`(${escaped.join("|")})`, "gi");
    const parts = text.split(pattern);
    return parts.map((part, i) =>
      keywords.some(k => k.toLowerCase() === part.toLowerCase())
        ? <mark key={i} style={{ background: `${color}30`, color: color, borderRadius: 3, padding: "0 2px", fontWeight: 700 }}>{part}</mark>
        : <span key={i}>{part}</span>
    );
  }

  return (
    <div>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 20 }}>
        <div style={{ direction: "rtl" }}>
          <div style={{ fontSize: 18, fontWeight: 900, color: "var(--text-primary)" }}>{reading.title}</div>
          {reading.titleFa && (
            <div style={{ fontSize: 13, color: "var(--text-muted)" }}>{reading.titleFa}</div>
          )}
        </div>
        <button
          onClick={() => setShowFa(p => !p)}
          style={{
            padding: "7px 14px", borderRadius: 10, fontSize: 12, fontWeight: 700, flexShrink: 0,
            background: showFa ? `${color}20` : "rgba(255,255,255,0.06)",
            border: `1px solid ${showFa ? color + "40" : "rgba(255,255,255,0.1)"}`,
            color: showFa ? color : "var(--text-secondary)",
            cursor: "pointer", transition: "all 0.2s",
          }}
        >
          {showFa ? "???? ??? ????" : "???? ?????"}
        </button>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        {reading.sections.map((sec, i) => (
          <div key={i} className="glass-card" style={{ padding: "18px 20px" }}>
            <div style={{ marginBottom: 14 }}>
              <h3 style={{ fontSize: 15, fontWeight: 800, color: color, margin: 0, marginBottom: 2, direction: "ltr" }}>
                {sec.heading}
              </h3>
              {sec.headingFa && (
                <div style={{ fontSize: 12, color: "var(--text-muted)", direction: "rtl" }}>{sec.headingFa}</div>
              )}
            </div>
            <div style={{
              fontSize: 13, lineHeight: 1.9, color: "var(--text-secondary)",
              direction: showFa ? "rtl" : "ltr", textAlign: showFa ? "right" : "left",
              whiteSpace: "pre-wrap",
            }}>
              {showFa ? (sec.bodyFa ?? sec.body) : highlightText(sec.body, sec.keywords)}
            </div>
            {sec.callout && (
              <div style={{
                marginTop: 16, padding: "14px 16px", borderRadius: 12,
                background: `${color}10`, border: `1px solid ${color}25`, direction: "rtl",
              }}>
                <div style={{ fontSize: 12, fontWeight: 800, color: color, marginBottom: 10 }}>
                  {sec.callout.title}
                </div>
                <ul style={{ margin: 0, paddingRight: 18, display: "flex", flexDirection: "column", gap: 6 }}>
                  {sec.callout.items.map((item, j) => (
                    <li key={j} style={{ fontSize: 12, color: "var(--text-secondary)", lineHeight: 1.7 }}>{item}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
