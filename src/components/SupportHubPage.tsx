"use client";

import { useState } from "react";
import { submitSupportRequest } from "@/lib/gamification";

// ─── Support Hub Page ─────────────────────────────────────────────────────────
// Combines: درخواست کلاس تست، دوره حضوری، همکاری، پیشنهادات، اشتراک‌گذاری لینک

type SupportTab = "contact" | "class_test" | "online_course" | "collaboration" | "suggestion" | "share" | "exam_tips";

export default function SupportHubPage({ onBack, onNav }: { onBack: () => void; onNav?: (page: string) => void }) {
  const [activeTab, setActiveTab] = useState<SupportTab>("contact");

  const tabs: { id: SupportTab; label: string; icon: string }[] = [
    { id: "contact",      label: "تماس",        icon: "📞" },
    { id: "suggestion",   label: "پیشنهاد",     icon: "💡" },
    { id: "class_test",   label: "کلاس تست",   icon: "🏫" },
    { id: "online_course",label: "دوره آنلاین", icon: "💻" },
    { id: "collaboration",label: "همکاری",      icon: "🤝" },
    { id: "exam_tips",    label: "نکات آزمون",  icon: "📋" },
    { id: "share",        label: "اشتراک",      icon: "🔗" },
  ];

  return (
    <div style={{ padding: "20px 20px 100px", maxWidth: 600, margin: "0 auto" }}>
      {/* Header */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 20 }}>
        <button className="btn-secondary" style={{ padding: "8px 16px", fontSize: 13 }} onClick={onBack}>
          ← بازگشت
        </button>
        <div style={{ textAlign: "center" }}>
          <div style={{ fontSize: 11, fontWeight: 700, color: "var(--accent-primary)", letterSpacing: "0.08em" }}>
            🛎️ پشتیبانی
          </div>
          <div style={{ fontSize: 11, color: "var(--text-muted)" }}>Support Hub</div>
        </div>
        {onNav ? (
          <button onClick={() => onNav("dictionary")}
            style={{ padding: "7px 12px", borderRadius: 10, fontSize: 11, cursor: "pointer",
              background: "rgba(96,165,250,0.15)", color: "#60a5fa", border: "1px solid rgba(96,165,250,0.3)", fontWeight: 700 }}>
            📖 دیکشنری
          </button>
        ) : <div style={{ width: 70 }} />}
      </div>

      {/* Tabs */}
      <div style={{ display: "flex", gap: 6, overflowX: "auto", paddingBottom: 4, marginBottom: 20 }}>
        {tabs.map(t => (
          <button key={t.id} onClick={() => setActiveTab(t.id)}
            style={{
              flexShrink: 0, padding: "8px 12px", borderRadius: 12, cursor: "pointer", fontSize: 11,
              background: activeTab === t.id ? "rgba(147,51,234,0.2)" : "rgba(255,255,255,0.04)",
              color: activeTab === t.id ? "var(--accent-primary)" : "var(--text-muted)",
              border: `1px solid ${activeTab === t.id ? "rgba(147,51,234,0.4)" : "rgba(255,255,255,0.06)"}`,
              fontWeight: activeTab === t.id ? 700 : 400,
              display: "flex", flexDirection: "column", alignItems: "center", gap: 2,
            }}>
            <span style={{ fontSize: 16 }}>{t.icon}</span>
            <span>{t.label}</span>
          </button>
        ))}
      </div>

      {/* Content */}
      {activeTab === "contact"       && <ContactTab />}
      {activeTab === "suggestion"    && <SuggestionTab />}
      {activeTab === "class_test"    && <RequestTab type="class_test" title="درخواست کلاس تست" desc="علاقه‌مندی خود را برای شرکت در کلاس‌های تست زنی گروهی اعلام کنید. به محض تشکیل گروه با شما تماس می‌گیریم." />}
      {activeTab === "online_course" && <RequestTab type="online_course" title="درخواست دوره آنلاین" desc="در صورت تمایل به شرکت در دوره آنلاین آموزش گواهینامه ایتالیایی، اطلاعات خود را ثبت کنید." />}
      {activeTab === "collaboration" && <RequestTab type="collaboration" title="درخواست همکاری" desc="می‌خواهی در تسهیل یادگیری سایر دانش‌آموزان همکاری کنی؟ اطلاعات خود را ثبت کن." />}
      {activeTab === "exam_tips"     && <ExamTipsTab />}
      {activeTab === "share"         && <ShareTab />}
    </div>
  );
}

// ── Contact Tab ───────────────────────────────────────────────────────────────
function ContactTab() {
  const contacts = [
    { icon: "📱", label: "واتساپ / تلگرام", value: "+39 XXX XXX XXXX", href: "https://t.me/perlapatente" },
    { icon: "📧", label: "ایمیل", value: "support@perlapatente.com", href: "mailto:support@perlapatente.com" },
    { icon: "📸", label: "اینستاگرام", value: "@perlapatente", href: "https://instagram.com/perlapatente" },
    { icon: "💬", label: "ارسال پیام درون‌سیستمی", value: "✋ ابهام دارم در صفحه آزمون", href: null },
  ];

  return (
    <div>
      <InfoBox>
        پس از دریافت سیگنال «ابهام دارم» شما، تیم پشتیبانی از طریق یکی از مسیرهای زیر با شما تماس خواهد گرفت.
      </InfoBox>
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        {contacts.map((c, i) => (
          <div key={i} style={{
            background: "rgba(255,255,255,0.03)", border: "1px solid rgba(147,51,234,0.15)",
            borderRadius: 14, padding: "14px 18px",
            display: "flex", alignItems: "center", gap: 14,
          }}>
            <span style={{ fontSize: 24 }}>{c.icon}</span>
            <div style={{ flex: 1, direction: "rtl" }}>
              <div style={{ fontSize: 11, color: "var(--text-muted)", marginBottom: 2 }}>{c.label}</div>
              <div style={{ fontSize: 13, fontWeight: 600, color: "var(--text-primary)" }}>{c.value}</div>
            </div>
            {c.href && (
              <a href={c.href} target="_blank" rel="noopener"
                style={{ padding: "7px 14px", borderRadius: 10, background: "rgba(147,51,234,0.15)",
                  color: "var(--accent-primary)", fontSize: 12, fontWeight: 700, textDecoration: "none" }}>
                باز کن
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Generic Request Tab ───────────────────────────────────────────────────────
function RequestTab({ type, title, desc }: {
  type: "class_test" | "online_course" | "collaboration";
  title: string; desc: string;
}) {
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const inputStyle = {
    width: "100%", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(147,51,234,0.2)",
    borderRadius: 10, padding: "10px 14px", color: "var(--text-primary)", fontSize: 13,
    outline: "none", direction: "rtl" as const, fontFamily: "inherit", marginBottom: 10,
  };

  const handleSubmit = () => {
    if (!form.name) return;
    submitSupportRequest({ type, ...form });
    setSubmitted(true);
  };

  if (submitted) return (
    <div style={{ textAlign: "center", padding: "40px 20px" }}>
      <div style={{ fontSize: 48 }}>✅</div>
      <div style={{ fontSize: 15, fontWeight: 700, color: "#22d3a5", marginTop: 12 }}>درخواست ثبت شد!</div>
      <div style={{ fontSize: 12, color: "var(--text-muted)", marginTop: 8 }}>به زودی با شما تماس می‌گیریم.</div>
    </div>
  );

  return (
    <div>
      <InfoBox>{desc}</InfoBox>
      <input style={inputStyle} placeholder="نام شما*" value={form.name}
        onChange={e => setForm(p => ({ ...p, name: e.target.value }))} />
      <input style={inputStyle} placeholder="شماره تماس (اختیاری)" value={form.phone}
        onChange={e => setForm(p => ({ ...p, phone: e.target.value }))} />
      <input style={inputStyle} placeholder="ایمیل (اختیاری)" value={form.email}
        onChange={e => setForm(p => ({ ...p, email: e.target.value }))} />
      <textarea style={{ ...inputStyle, resize: "none" }} placeholder="پیام یا توضیحات (اختیاری)" rows={3}
        value={form.message} onChange={e => setForm(p => ({ ...p, message: e.target.value }))} />
      <button onClick={handleSubmit} disabled={!form.name}
        style={{
          width: "100%", padding: "12px 0", borderRadius: 12, fontWeight: 700, fontSize: 14,
          background: form.name ? "linear-gradient(135deg,#9333ea,#f97316)" : "rgba(255,255,255,0.06)",
          color: form.name ? "white" : "var(--text-muted)", border: "none", cursor: form.name ? "pointer" : "not-allowed",
        }}>
        ثبت درخواست «{title}»
      </button>
    </div>
  );
}

// ── Suggestion Tab ─────────────────────────────────────────────────────────────
function SuggestionTab() {
  const [text, setText] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (!text.trim()) return;
    submitSupportRequest({ type: "suggestion", message: text });
    setSubmitted(true);
  };

  if (submitted) return (
    <div style={{ textAlign: "center", padding: "40px 20px" }}>
      <div style={{ fontSize: 48 }}>💡</div>
      <div style={{ fontSize: 15, fontWeight: 700, color: "#22d3a5", marginTop: 12 }}>ممنون از پیشنهادت!</div>
      <div style={{ fontSize: 12, color: "var(--text-muted)", marginTop: 8 }}>نظر شما بررسی می‌شود.</div>
    </div>
  );

  return (
    <div>
      <InfoBox>پیشنهادات، انتقادات یا مطالب آموزشی که می‌خواهی اضافه شود را اینجا بنویس.</InfoBox>
      <textarea
        value={text} onChange={e => setText(e.target.value)}
        placeholder="پیشنهاد یا انتقاد خود را اینجا بنویس..."
        rows={6}
        style={{
          width: "100%", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(147,51,234,0.2)",
          borderRadius: 12, padding: "12px 16px", color: "var(--text-primary)", fontSize: 13,
          outline: "none", resize: "none", direction: "rtl", fontFamily: "inherit", marginBottom: 12,
        }}
      />
      <button onClick={handleSubmit} disabled={!text.trim()}
        style={{
          width: "100%", padding: "12px 0", borderRadius: 12, fontWeight: 700, fontSize: 14,
          background: text.trim() ? "linear-gradient(135deg,#9333ea,#f97316)" : "rgba(255,255,255,0.06)",
          color: text.trim() ? "white" : "var(--text-muted)", border: "none", cursor: text.trim() ? "pointer" : "not-allowed",
        }}>
        ارسال پیشنهاد 💡
      </button>
    </div>
  );
}

// ── Exam Tips Tab ─────────────────────────────────────────────────────────────
function ExamTipsTab() {
  const [section, setSection] = useState<"written" | "registration" | "practical">("written");

  const sections = [
    { id: "written" as const, label: "آزمون کتبی", icon: "📝" },
    { id: "registration" as const, label: "ثبت نام", icon: "📋" },
    { id: "practical" as const, label: "بخش عملی", icon: "🚗" },
  ];

  return (
    <div>
      <div style={{ display: "flex", gap: 8, marginBottom: 18 }}>
        {sections.map(s => (
          <button key={s.id} onClick={() => setSection(s.id)}
            style={{
              flex: 1, padding: "10px 8px", borderRadius: 12, fontSize: 12, cursor: "pointer",
              background: section === s.id ? "rgba(147,51,234,0.15)" : "rgba(255,255,255,0.04)",
              color: section === s.id ? "var(--accent-primary)" : "var(--text-muted)",
              border: `1px solid ${section === s.id ? "rgba(147,51,234,0.4)" : "rgba(255,255,255,0.06)"}`,
              fontWeight: section === s.id ? 700 : 400,
            }}>
            {s.icon} {s.label}
          </button>
        ))}
      </div>

      {section === "written" && (
        <TipList title="توصیه‌های آزمون کتبی" tips={[
          { icon: "⏱️", title: "مدیریت زمان", text: "آزمون ۳۰ سوال در ۳۰ دقیقه دارد. هر سوال ۱ دقیقه. سوالات مشکل را علامت بزن و آخر برگرد." },
          { icon: "😌", title: "آرامش ذهنی", text: "قبل از آزمون خواب کافی، صبحانه کامل و تنفس عمیق. اضطراب عملکرد را کاهش می‌دهد." },
          { icon: "🎯", title: "شبیه‌سازی", text: "با آزمون‌های استاندارد ۳۰ سوالی در اپ تمرین کن. شبیه‌سازی ذهنی محیط آزمون مهم است." },
          { icon: "📱", title: "روز آزمون", text: "گوشی را خاموش یا بی‌صدا کن. حواس پرتی را به حداقل برسان. روی سوال تمرکز کن." },
          { icon: "❌", title: "اشتباهات رایج", text: "جواب اول اغلب درست است مگر خطای آشکار ببینی. از تغییر مکرر جواب بپرهیز." },
          { icon: "🔄", title: "مرور دوباره", text: "اگر وقت ماند، سوالاتی که شک داری را مرور کن، ولی وسواس نداشته باش." },
        ]} />
      )}

      {section === "registration" && (
        <TipList title="مراحل ثبت نام در آزمون" tips={[
          { icon: "📄", title: "مدارک لازم", text: "پاسپورت یا permesso di soggiorno معتبر، codice fiscale، عکس ۳×۴، و گواهی معاینه پزشکی (visita medica)." },
          { icon: "🏥", title: "معاینه پزشکی", text: "ابتدا نوبت visita medica بگیر. پزشک مجاز (medico autorizzato) گواهی صلاحیت رانندگی صادر می‌کند." },
          { icon: "🏫", title: "انتخاب autoscuola", text: "یک آموزشگاه رانندگی (autoscuola) پیدا کن. آن‌ها پروسه ثبت نام با Motorizzazione را انجام می‌دهند." },
          { icon: "💶", title: "هزینه‌ها", text: "هزینه آزمون نظری + تئوری را بپرس. معمولاً بین ۳۰۰ تا ۵۰۰ یورو برای کل دوره است." },
          { icon: "📅", title: "زمان انتظار", text: "از زمان ثبت نام تا آزمون معمولاً ۱-۳ ماه طول می‌کشد. زودتر اقدام کن." },
          { icon: "✅", title: "نمره قبولی", text: "از ۳۰ سوال باید حداکثر ۴ خطا داشته باشی. نمره قبولی ۲۶ از ۳۰ است." },
        ]} />
      )}

      {section === "practical" && (
        <TipList title="بخش عملی گواهینامه" tips={[
          { icon: "👨‍🏫", title: "انتخاب مربی", text: "مربی خوب نصف راه است! از همکلاسی‌ها یا آموزشگاه مربی صبور و با تجربه بخواه." },
          { icon: "🔄", title: "تعداد جلسات", text: "حداقل ۶ ساعت تمرین عملی توسط مربی الزامی است. هرچه بیشتر بهتر — تا راحت نشدی تمرین کن." },
          { icon: "🛣️", title: "مسیرهای آزمون", text: "از مربی بخواه مسیرهای معمول آزمون در شهرت را نشانت بدهد و روی آن‌ها تمرین کن." },
          { icon: "🚦", title: "نکات عملی", text: "حرکت در محور، پارک موازی و عمودی، تقاطع‌ها، و حرکت در شب و باران را تمرین کن." },
          { icon: "😤", title: "روز آزمون عملی", text: "ماشین را قبلاً بررسی کن. ممیز (esaminatore) را ناراحت نکن — آرام و با اطمینان رانندگی کن." },
          { icon: "🎬", title: "منابع ویدیویی", text: "ویدیوهای رانندگی در ایتالیا (parallelo، a tre punti، incrocio) را در یوتیوب تماشا کن." },
        ]} />
      )}
    </div>
  );
}

// ── Share Tab ─────────────────────────────────────────────────────────────────
function ShareTab() {
  const [copied, setCopied] = useState(false);
  const shareUrl = typeof window !== "undefined" ? window.location.origin : "https://perlapatente.com";
  const shareText = `🇮🇹 می‌خوای گواهینامه ایتالیایی بگیری؟ با PerlaPatente آموزش ببین!\n${shareUrl}`;

  const copyLink = () => {
    navigator.clipboard.writeText(shareUrl).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const shareOptions = [
    { icon: "📱", label: "واتساپ", href: `https://wa.me/?text=${encodeURIComponent(shareText)}` },
    { icon: "✈️", label: "تلگرام", href: `https://t.me/share/url?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent("🇮🇹 آموزش گواهینامه ایتالیایی")}` },
    { icon: "📸", label: "اینستاگرام", href: `https://www.instagram.com/` },
    { icon: "🐦", label: "توییتر/X", href: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}` },
    { icon: "📧", label: "ایمیل", href: `mailto:?subject=آموزش گواهینامه ایتالیایی&body=${encodeURIComponent(shareText)}` },
  ];

  return (
    <div>
      <InfoBox>
        با فرستادن لینک به دوستانی که می‌خواهند گواهینامه ایتالیایی بگیرند، به آن‌ها کمک کن و امتیاز XP بگیر!
      </InfoBox>

      {/* Link copy */}
      <div style={{
        background: "rgba(255,255,255,0.04)", border: "1px solid rgba(147,51,234,0.2)",
        borderRadius: 12, padding: "12px 16px", marginBottom: 16,
        display: "flex", alignItems: "center", gap: 10,
      }}>
        <code style={{ flex: 1, fontSize: 12, color: "var(--text-secondary)", direction: "ltr", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
          {shareUrl}
        </code>
        <button onClick={copyLink} style={{
          padding: "7px 14px", borderRadius: 10, fontSize: 12, fontWeight: 700, border: "none",
          background: copied ? "rgba(34,211,165,0.2)" : "rgba(147,51,234,0.2)",
          color: copied ? "#22d3a5" : "var(--accent-primary)", cursor: "pointer", flexShrink: 0,
        }}>
          {copied ? "✓ کپی شد" : "کپی لینک"}
        </button>
      </div>

      {/* Share buttons */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 8 }}>
        {shareOptions.map((s, i) => (
          <a key={i} href={s.href} target="_blank" rel="noopener"
            style={{
              display: "flex", flexDirection: "column", alignItems: "center", gap: 4,
              padding: "14px 8px", borderRadius: 14, textDecoration: "none",
              background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)",
              transition: "all 0.15s",
            }}>
            <span style={{ fontSize: 24 }}>{s.icon}</span>
            <span style={{ fontSize: 11, color: "var(--text-secondary)" }}>{s.label}</span>
          </a>
        ))}
      </div>

      <div style={{ marginTop: 16, padding: "12px 16px", borderRadius: 10,
        background: "rgba(249,115,22,0.06)", border: "1px solid rgba(249,115,22,0.2)",
        fontSize: 12, color: "var(--text-muted)", direction: "rtl" }}>
        🎖️ به ازای هر نفری که از طریق لینک شما ثبت‌نام کند، امتیاز XP خاصی دریافت می‌کنید.
      </div>
    </div>
  );
}

// ── Helpers ───────────────────────────────────────────────────────────────────
function InfoBox({ children }: { children: React.ReactNode }) {
  return (
    <div style={{
      padding: "12px 16px", borderRadius: 12, marginBottom: 16,
      background: "rgba(167,139,250,0.06)", border: "1px solid rgba(167,139,250,0.2)",
      fontSize: 12, color: "var(--text-secondary)", direction: "rtl", lineHeight: 1.7,
    }}>
      {children}
    </div>
  );
}

function TipList({ title, tips }: { title: string; tips: { icon: string; title: string; text: string }[] }) {
  return (
    <div>
      <h3 style={{ fontSize: 13, fontWeight: 700, color: "var(--text-primary)", marginBottom: 14, direction: "rtl" }}>{title}</h3>
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        {tips.map((t, i) => (
          <div key={i} style={{
            background: "rgba(255,255,255,0.03)", border: "1px solid rgba(147,51,234,0.12)",
            borderRadius: 12, padding: "12px 16px", display: "flex", gap: 12, direction: "rtl",
          }}>
            <span style={{ fontSize: 22, flexShrink: 0 }}>{t.icon}</span>
            <div>
              <div style={{ fontSize: 12, fontWeight: 700, color: "var(--text-primary)", marginBottom: 4 }}>{t.title}</div>
              <div style={{ fontSize: 12, color: "var(--text-secondary)", lineHeight: 1.7 }}>{t.text}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
