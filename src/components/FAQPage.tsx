"use client";

import { useState } from "react";

// ─── FAQ Page ─────────────────────────────────────────────────────────────────
type FAQItem = { q: string; a: string; tag: string };

const FAQ_ITEMS: FAQItem[] = [
  {
    tag: "شروع",
    q: "چطور مطالعه را شروع کنم؟",
    a: "از صفحه «فصل‌ها» یک فصل را انتخاب کنید. ابتدا روی «📖 مطالعه» بزنید تا متن درسی را بخوانید، سپس «🎯 آزمون» را برای تمرین سوالات امتحان کنید.",
  },
  {
    tag: "آزمون",
    q: "تفاوت «استاندارد ۳۰ت» با «ترکیبی» چیست؟",
    a: "آزمون استاندارد دقیقاً ۳۰ سوال تصادفی از همه فصل‌ها با ۲۰ ثانیه مهلت هر سوال است — مثل آزمون واقعی. آزمون ترکیبی نامحدود است و زمان‌بندی ۳۰ ثانیه‌ای دارد.",
  },
  {
    tag: "آزمون",
    q: "اگر وقت سوال تمام شود چه اتفاقی می‌افتد؟",
    a: "سوال به عنوان اشتباه ثبت می‌شود و به سوال بعدی می‌رود. پس از هر آزمون می‌توانید با حالت «غلط‌های من» روی این سوالات تمرین کنید.",
  },
  {
    tag: "مطالعه",
    q: "چطور سوالات سخت را مرور کنم؟",
    a: "از صفحه فصل‌ها، در قسمت «تست هوشمند» روی کارت «🔥 سوالات سخت» بزنید. همچنین می‌توانید سوالات را با دایره‌های رنگی در حین آزمون تگ‌گذاری کنید.",
  },
  {
    tag: "تگ",
    q: "دایره‌های رنگی کنار امتیاز چیست؟",
    a: "سیستم تگ ۳ رنگ است که شما می‌توانید به هر سوال اختصاص دهید. رنگ‌ها قابل سفارشی‌سازی‌اند (از تنظیمات → ادمین → تگ‌رنگ‌ها). بعداً می‌توانید آزمون را از سوالات تگ‌شده بسازید.",
  },
  {
    tag: "مطالعه",
    q: "«ابهام دارم» چه می‌کند؟",
    a: "سوالی که کاملاً نفهمیدید را با این دکمه به پشتیبانی ارسال می‌کنید. تیم آموزشی آن را بررسی کرده و پاسخ خواهد داد.",
  },
  {
    tag: "پیشرفت",
    q: "آمار و پیشرفتم کجاست؟",
    a: "از نوار پایین روی آیکون 📊 بزنید تا صفحه آمار کامل، نمودار دقت، بهترین و ضعیف‌ترین فصل‌ها و streak روزانه را ببینید.",
  },
  {
    tag: "پیشرفت",
    q: "وقتی آماده آزمون واقعی باشم چطور می‌فهمم؟",
    a: "سیستم «Exam Clearance» به صورت خودکار وقتی دقت شما به ۸۰٪ در بیش از ۵ آزمون رسید، یک اطلاعیه خاص نمایش می‌دهد.",
  },
  {
    tag: "تنظیمات",
    q: "چطور تم یا اندازه فونت را تغییر دهم؟",
    a: "از نوار پایین روی ⚙️ بزنید تا صفحه تنظیمات باز شود. ۴ تم (تاریک، آبی، سِپیا، روشن) و ۴ سایز فونت در دسترس هستند.",
  },
  {
    tag: "تنظیمات",
    q: "آیا پیشرفتم ذخیره می‌شود؟",
    a: "بله، همه داده‌ها در مرورگر شما (localStorage) ذخیره می‌شوند. پاک کردن حافظه مرورگر یا تغییر دستگاه، داده‌ها را حذف می‌کند.",
  },
  {
    tag: "ویدیو",
    q: "ویدیوهای آموزشی کجا هستند؟",
    a: "در هر فصل، بعد از محتوای درسی بخش ویدیو نمایش داده می‌شود. ویدیوهای 🔒 نیاز به اشتراک پریمیوم دارند.",
  },
];

const TAGS = ["همه", "شروع", "آزمون", "مطالعه", "تگ", "پیشرفت", "تنظیمات", "ویدیو"];

export default function FAQPage({ onBack }: { onBack: () => void }) {
  const [activeTag, setActiveTag] = useState("همه");
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const [search, setSearch] = useState("");

  const filtered = FAQ_ITEMS.filter(item => {
    if (activeTag !== "همه" && item.tag !== activeTag) return false;
    if (search && !item.q.includes(search) && !item.a.includes(search)) return false;
    return true;
  });

  return (
    <div className="page-wrap">
      {/* Header */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 20 }}>
        <button className="btn-secondary" style={{ padding: "8px 16px", fontSize: 13 }} onClick={onBack}>
          ← بازگشت
        </button>
        <div style={{ textAlign: "center" }}>
          <div style={{ fontSize: 11, fontWeight: 700, color: "var(--accent-primary)", letterSpacing: "0.08em" }}>❓ سوالات متداول</div>
          <div style={{ fontSize: 11, color: "var(--text-muted)" }}>FAQ</div>
        </div>
        <div style={{ width: 70 }} />
      </div>

      {/* Search */}
      <input
        type="text" value={search} onChange={e => setSearch(e.target.value)}
        placeholder="🔍 جستجو در سوالات..."
        style={{
          width: "100%", marginBottom: 12,
          background: "rgba(255,255,255,0.05)", border: "1px solid rgba(147,51,234,0.2)",
          borderRadius: 12, padding: "10px 14px", color: "var(--text-primary)", fontSize: 13,
          outline: "none", direction: "rtl",
        }}
      />

      {/* Tag filter */}
      <div style={{ display: "flex", gap: 6, overflowX: "auto", paddingBottom: 4, marginBottom: 16 }}>
        {TAGS.map(tag => (
          <button key={tag} onClick={() => setActiveTag(tag)}
            style={{
              flexShrink: 0, padding: "6px 14px", borderRadius: 20, fontSize: 11, cursor: "pointer",
              fontWeight: activeTag === tag ? 700 : 400,
              background: activeTag === tag ? "rgba(147,51,234,0.2)" : "rgba(255,255,255,0.04)",
              color: activeTag === tag ? "var(--accent-primary)" : "var(--text-muted)",
              border: `1px solid ${activeTag === tag ? "rgba(147,51,234,0.4)" : "rgba(255,255,255,0.06)"}`,
            }}>
            {tag}
          </button>
        ))}
      </div>

      {/* FAQ items */}
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        {filtered.map((item, i) => {
          const isOpen = openIdx === i;
          return (
            <div key={i} className="glass-card" style={{ padding: 0, overflow: "hidden" }}>
              <button
                onClick={() => setOpenIdx(isOpen ? null : i)}
                style={{
                  width: "100%", background: "none", border: "none", cursor: "pointer",
                  padding: "14px 18px", display: "flex", alignItems: "center", gap: 10,
                }}>
                <span style={{
                  fontSize: 9, fontWeight: 700, color: "var(--accent-primary)",
                  background: "rgba(147,51,234,0.1)", borderRadius: 6, padding: "2px 6px", flexShrink: 0,
                }}>{item.tag}</span>
                <span style={{ flex: 1, fontSize: 13, color: "var(--text-primary)", direction: "rtl", textAlign: "right", fontWeight: 600 }}>
                  {item.q}
                </span>
                <span style={{ color: "var(--text-muted)", fontSize: 12, flexShrink: 0 }}>{isOpen ? "▲" : "▼"}</span>
              </button>
              {isOpen && (
                <div style={{
                  padding: "0 18px 16px",
                  borderTop: "1px solid rgba(255,255,255,0.05)",
                  fontSize: 13, color: "var(--text-secondary)",
                  direction: "rtl", lineHeight: 1.75, paddingTop: 12,
                }}>
                  {item.a}
                </div>
              )}
            </div>
          );
        })}
        {filtered.length === 0 && (
          <div style={{ textAlign: "center", padding: 40, color: "var(--text-muted)" }}>
            سوالی یافت نشد
          </div>
        )}
      </div>

      {/* Contact */}
      <div style={{
        marginTop: 24, padding: "16px 20px", borderRadius: 16,
        background: "rgba(167,139,250,0.06)", border: "1px solid rgba(167,139,250,0.2)",
        direction: "rtl", textAlign: "right",
      }}>
        <div style={{ fontSize: 13, fontWeight: 700, color: "#a78bfa", marginBottom: 6 }}>
          ✋ سوالت پیدا نشد؟
        </div>
        <div style={{ fontSize: 12, color: "var(--text-muted)" }}>
          در حین آزمون از دکمه «ابهام دارم» استفاده کنید. تیم پشتیبانی آن را بررسی می‌کند.
        </div>
      </div>
    </div>
  );
}
