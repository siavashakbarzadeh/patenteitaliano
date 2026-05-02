"use client";

import { useState } from "react";

// ─── Italian-Persian Mini Dictionary ──────────────────────────────────────────
// Focus: traffic, driving, road signs, exam terminology

type DictEntry = {
  it: string;
  fa: string;
  category: string;
  example?: string;
};

const CATEGORIES = ["همه", "علائم", "قوانین", "اصطلاح آزمون", "اجزای خودرو", "جاده", "رفتار رانندگی"];

const DICT_ENTRIES: DictEntry[] = [
  // علائم
  { it: "segnale di pericolo", fa: "علامت خطر", category: "علائم", example: "Attenzione al segnale di pericolo!" },
  { it: "segnale di divieto", fa: "علامت ممنوعیت", category: "علائم" },
  { it: "segnale di obbligo", fa: "علامت الزام", category: "علائم" },
  { it: "segnale di precedenza", fa: "علامت حق تقدم", category: "علائم" },
  { it: "limite di velocità", fa: "حداکثر سرعت مجاز", category: "علائم", example: "Il limite di velocità è 50 km/h" },
  { it: "stop", fa: "ایست — توقف کامل اجباری", category: "علائم" },
  { it: "dare la precedenza", fa: "حق تقدم دادن", category: "علائم" },
  { it: "divieto di sorpasso", fa: "ممنوعیت سبقت", category: "علائم" },
  { it: "senso unico", fa: "یک‌طرفه", category: "علائم" },
  { it: "senso vietato", fa: "ورود ممنوع", category: "علائم" },
  { it: "zona di sosta", fa: "منطقه توقف", category: "علائم" },
  { it: "zona pedonale", fa: "منطقه پیاده", category: "علائم" },
  // قوانین
  { it: "precedenza", fa: "حق تقدم", category: "قوانین", example: "Chi ha la precedenza?" },
  { it: "distanza di sicurezza", fa: "فاصله ایمنی", category: "قوانین" },
  { it: "cintura di sicurezza", fa: "کمربند ایمنی", category: "قوانین" },
  { it: "casco", fa: "کلاه ایمنی (موتور)", category: "قوانین" },
  { it: "tasso alcolemico", fa: "درصد الکل خون", category: "قوانین" },
  { it: "velocità", fa: "سرعت", category: "قوانین" },
  { it: "sorpasso", fa: "سبقت", category: "قوانین" },
  { it: "inversione di marcia", fa: "دور زدن", category: "قوانین" },
  { it: "parcheggio", fa: "پارک کردن", category: "قوانین" },
  { it: "multa", fa: "جریمه", category: "قوانین" },
  { it: "patente a punti", fa: "گواهینامه امتیازی", category: "قوانین" },
  { it: "decurtazione punti", fa: "کسر امتیاز", category: "قوانین" },
  { it: "revoca della patente", fa: "لغو گواهینامه", category: "قوانین" },
  // اصطلاح آزمون
  { it: "esame teorico", fa: "آزمون تئوری (نظری)", category: "اصطلاح آزمون" },
  { it: "esame pratico", fa: "آزمون عملی", category: "اصطلاح آزمون" },
  { it: "patente B", fa: "گواهینامه نوع B (سواری)", category: "اصطلاح آزمون" },
  { it: "motorizzazione", fa: "اداره راهنمایی و رانندگی ایتالیا", category: "اصطلاح آزمون" },
  { it: "autoscuola", fa: "آموزشگاه رانندگی", category: "اصطلاح آزمون" },
  { it: "istruttore", fa: "مربی رانندگی", category: "اصطلاح آزمون" },
  { it: "esaminatore", fa: "ممیز (ارزیاب آزمون)", category: "اصطلاح آزمون" },
  { it: "visita medica", fa: "معاینه پزشکی", category: "اصطلاح آزمون" },
  { it: "foglio rosa", fa: "گواهی‌نامه موقت تمرین", category: "اصطلاح آزمون" },
  { it: "codice fiscale", fa: "کد مالیاتی شناسایی", category: "اصطلاح آزمون" },
  // اجزای خودرو
  { it: "freno", fa: "ترمز", category: "اجزای خودرو" },
  { it: "acceleratore", fa: "گاز", category: "اجزای خودرو" },
  { it: "frizione", fa: "کلاچ", category: "اجزای خودرو" },
  { it: "sterzo", fa: "فرمان", category: "اجزای خودرو" },
  { it: "freccia", fa: "راهنما (چراغ جهت‌نما)", category: "اجزای خودرو" },
  { it: "fari", fa: "چراغ‌های جلو", category: "اجزای خودرو" },
  { it: "specchietto retrovisore", fa: "آینه عقب", category: "اجزای خودرو" },
  { it: "pneumatici", fa: "تایرها", category: "اجزای خودرو" },
  { it: "marcia", fa: "دنده", category: "اجزای خودرو" },
  { it: "retromarcia", fa: "دنده عقب", category: "اجزای خودرو" },
  // جاده
  { it: "incrocio", fa: "تقاطع / چهارراه", category: "جاده" },
  { it: "rotonda", fa: "میدان", category: "جاده" },
  { it: "autostrada", fa: "بزرگراه / آزادراه", category: "جاده" },
  { it: "strada statale", fa: "جاده دولتی / ملی", category: "جاده" },
  { it: "marciapiede", fa: "پیاده‌رو", category: "جاده" },
  { it: "strisce pedonali", fa: "خط‌کشی عابر پیاده", category: "جاده" },
  { it: "semaforo", fa: "چراغ راهنمایی", category: "جاده" },
  { it: "corsia", fa: "خط رانندگی (لاین)", category: "جاده" },
  { it: "svincolo", fa: "تبادل / خروجی بزرگراه", category: "جاده" },
  { it: "galleria", fa: "تونل", category: "جاده" },
  { it: "dosso", fa: "برآمدگی کاهش سرعت", category: "جاده" },
  { it: "rotatoria", fa: "میدان دوار", category: "جاده" },
  // رفتار رانندگی
  { it: "guida in stato di ebbrezza", fa: "رانندگی در حال مستی", category: "رفتار رانندگی" },
  { it: "tamponamento", fa: "تصادف از پشت", category: "رفتار رانندگی" },
  { it: "manovra", fa: "مانور / حرکت", category: "رفتار رانندگی" },
  { it: "frenata di emergenza", fa: "ترمز اضطراری", category: "رفتار رانندگی" },
  { it: "abbaglianti", fa: "چراغ‌های دور (نور زیاد)", category: "رفتار رانندگی" },
  { it: "anabbaglianti", fa: "چراغ‌های نزدیک (نور کوتاه)", category: "رفتار رانندگی" },
  { it: "lampeggiare", fa: "چشمک زدن با چراغ", category: "رفتار رانندگی" },
];

export default function DictionaryPage({ onBack }: { onBack: () => void }) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("همه");
  const [expandedIdx, setExpandedIdx] = useState<number | null>(null);

  const filtered = DICT_ENTRIES.filter(e => {
    if (category !== "همه" && e.category !== category) return false;
    if (search) {
      const q = search.toLowerCase();
      return e.it.includes(q) || e.fa.includes(q);
    }
    return true;
  });

  return (
    <div style={{ padding: "20px 20px 100px", maxWidth: 600, margin: "0 auto" }}>
      {/* Header */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 20 }}>
        <button className="btn-secondary" style={{ padding: "8px 16px", fontSize: 13 }} onClick={onBack}>← بازگشت</button>
        <div style={{ textAlign: "center" }}>
          <div style={{ fontSize: 11, fontWeight: 700, color: "var(--accent-primary)" }}>📖 دیکشنری</div>
          <div style={{ fontSize: 11, color: "var(--text-muted)" }}>ایتالیایی — فارسی</div>
        </div>
        <div style={{ width: 70 }} />
      </div>

      {/* Search */}
      <input type="text" value={search} onChange={e => setSearch(e.target.value)}
        placeholder="🔍 جستجو به ایتالیایی یا فارسی..."
        style={{
          width: "100%", marginBottom: 12,
          background: "rgba(255,255,255,0.05)", border: "1px solid rgba(147,51,234,0.2)",
          borderRadius: 12, padding: "10px 14px", color: "var(--text-primary)", fontSize: 13,
          outline: "none", direction: "rtl",
        }}
      />

      {/* Category filter */}
      <div style={{ display: "flex", gap: 6, overflowX: "auto", paddingBottom: 4, marginBottom: 16 }}>
        {CATEGORIES.map(cat => (
          <button key={cat} onClick={() => setCategory(cat)}
            style={{
              flexShrink: 0, padding: "6px 12px", borderRadius: 20, fontSize: 11, cursor: "pointer",
              background: category === cat ? "rgba(147,51,234,0.2)" : "rgba(255,255,255,0.04)",
              color: category === cat ? "var(--accent-primary)" : "var(--text-muted)",
              border: `1px solid ${category === cat ? "rgba(147,51,234,0.4)" : "rgba(255,255,255,0.06)"}`,
              fontWeight: category === cat ? 700 : 400,
            }}>
            {cat}
          </button>
        ))}
      </div>

      <div style={{ fontSize: 11, color: "var(--text-muted)", marginBottom: 12, direction: "rtl" }}>
        {filtered.length} واژه
      </div>

      {/* Entries */}
      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
        {filtered.map((entry, i) => {
          const isOpen = expandedIdx === i;
          return (
            <div key={i} className="glass-card" style={{ padding: 0, overflow: "hidden" }}>
              <button onClick={() => setExpandedIdx(isOpen ? null : i)}
                style={{
                  width: "100%", background: "none", border: "none", cursor: "pointer",
                  padding: "12px 16px", display: "flex", alignItems: "center", gap: 12,
                }}>
                <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  {/* Italian */}
                  <div style={{ fontSize: 14, fontWeight: 700, color: "#60a5fa", fontStyle: "italic", direction: "ltr", textAlign: "left" }}>
                    {entry.it}
                  </div>
                  {/* Persian */}
                  <div style={{ fontSize: 13, color: "var(--text-primary)", direction: "rtl", textAlign: "right" }}>
                    {entry.fa}
                  </div>
                </div>
                <span style={{ color: "var(--text-muted)", fontSize: 10, flexShrink: 0 }}>{isOpen ? "▲" : "▼"}</span>
              </button>
              {isOpen && (
                <div style={{ padding: "0 16px 14px", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
                  <span style={{ fontSize: 9, padding: "2px 8px", borderRadius: 6,
                    background: "rgba(147,51,234,0.1)", color: "var(--accent-primary)", display: "inline-block", marginTop: 10, marginBottom: entry.example ? 8 : 0 }}>
                    {entry.category}
                  </span>
                  {entry.example && (
                    <div style={{ fontSize: 12, color: "#22d3a5", fontStyle: "italic", direction: "ltr", lineHeight: 1.7 }}>
                      💬 {entry.example}
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
        {filtered.length === 0 && (
          <div style={{ textAlign: "center", padding: 40, color: "var(--text-muted)" }}>واژه‌ای یافت نشد</div>
        )}
      </div>
    </div>
  );
}
