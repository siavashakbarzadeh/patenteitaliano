"use client";
import { useState, useEffect } from "react";
import AdminCrud from "@/components/AdminCrud";
import { getSettings, saveSettings } from "@/lib/supabaseAdmin";

export function AiTemplatesTab() {
  return <AdminCrud config={{ title: "قالب‌های AI", icon: "🤖", module: "aiTemplates",
    fields: [
      { key: "title", label: "عنوان", required: true }, { key: "category", label: "دسته" },
      { key: "prompt", label: "پرامپت", type: "textarea", required: true },
      { key: "status", label: "وضعیت", type: "select", options: [{ value: "active", label: "فعال" }, { value: "inactive", label: "غیرفعال" }], defaultValue: "active" },
    ],
    columns: [{ key: "title", label: "عنوان" }, { key: "category", label: "دسته" }, { key: "usageCount", label: "استفاده" }],
    statusField: "status", statusColors: { active: "#22d3a5", inactive: "#888" },
  }} />;
}

export function RegionsTab() {
  return <AdminCrud config={{ title: "مناطق", icon: "🌍", module: "regions",
    fields: [
      { key: "name", label: "نام", required: true },
      { key: "type", label: "نوع", type: "select", options: [{ value: "country", label: "کشور" }, { value: "province", label: "استان" }, { value: "city", label: "شهر" }], defaultValue: "country" },
      { key: "code", label: "کد" },
      { key: "status", label: "وضعیت", type: "select", options: [{ value: "active", label: "فعال" }, { value: "inactive", label: "غیرفعال" }], defaultValue: "active" },
    ],
    columns: [{ key: "name", label: "نام" }, { key: "type", label: "نوع" }, { key: "code", label: "کد" }],
    statusField: "status", statusColors: { active: "#22d3a5", inactive: "#888" },
  }} />;
}

export function FloatingBarsTab() {
  return <AdminCrud config={{ title: "نوار شناور", icon: "📌", module: "floatingBars",
    fields: [
      { key: "title", label: "عنوان", required: true }, { key: "content", label: "محتوا", type: "textarea" },
      { key: "position", label: "موقعیت", type: "select", options: [{ value: "top", label: "بالا" }, { value: "bottom", label: "پایین" }], defaultValue: "top" },
      { key: "btnText", label: "متن دکمه" }, { key: "btnUrl", label: "لینک دکمه" },
      { key: "bgColor", label: "رنگ پس‌زمینه", type: "color", defaultValue: "#9333ea" },
      { key: "textColor", label: "رنگ متن", type: "color", defaultValue: "#ffffff" },
      { key: "startDate", label: "شروع", type: "date" }, { key: "endDate", label: "پایان", type: "date" },
      { key: "status", label: "وضعیت", type: "select", options: [{ value: "active", label: "فعال" }, { value: "inactive", label: "غیرفعال" }], defaultValue: "active" },
    ],
    columns: [{ key: "title", label: "عنوان" }, { key: "position", label: "موقعیت" }],
    statusField: "status", statusColors: { active: "#22d3a5", inactive: "#888" },
  }} />;
}

export function CommentsTab() {
  return <AdminCrud config={{ title: "نظرات", icon: "💬", module: "comments",
    fields: [
      { key: "author", label: "نویسنده", required: true }, { key: "webinarTitle", label: "دوره" },
      { key: "content", label: "متن", type: "textarea", required: true },
      { key: "status", label: "وضعیت", type: "select", options: [{ value: "approved", label: "تأیید" }, { value: "pending", label: "در انتظار" }, { value: "rejected", label: "رد" }], defaultValue: "pending" },
    ],
    columns: [{ key: "author", label: "نویسنده" }, { key: "webinarTitle", label: "دوره" }, { key: "content", label: "متن" }],
    statusField: "status", statusColors: { approved: "#22d3a5", pending: "#f59e0b", rejected: "#ef4444" },
  }} />;
}

export function ReviewsTab() {
  return <AdminCrud config={{ title: "بررسی‌ها", icon: "⭐", module: "reviews",
    fields: [
      { key: "author", label: "نویسنده", required: true }, { key: "webinarTitle", label: "دوره" },
      { key: "rating", label: "امتیاز (1-5)", type: "number", defaultValue: 5 },
      { key: "content", label: "متن", type: "textarea" },
      { key: "status", label: "وضعیت", type: "select", options: [{ value: "published", label: "منتشر" }, { value: "pending", label: "در انتظار" }, { value: "hidden", label: "مخفی" }], defaultValue: "pending" },
    ],
    columns: [{ key: "author", label: "نویسنده" }, { key: "webinarTitle", label: "دوره" }, { key: "rating", label: "امتیاز" }],
    statusField: "status", statusColors: { published: "#22d3a5", pending: "#f59e0b", hidden: "#888" },
  }} />;
}

export function DocumentsTab() {
  return <AdminCrud config={{ title: "مدارک", icon: "📑", module: "documents",
    fields: [
      { key: "username", label: "کاربر", required: true }, { key: "documentType", label: "نوع مدرک" },
      { key: "note", label: "یادداشت", type: "textarea" },
      { key: "status", label: "وضعیت", type: "select", options: [{ value: "pending", label: "در انتظار" }, { value: "approved", label: "تأیید" }, { value: "rejected", label: "رد" }], defaultValue: "pending" },
    ],
    columns: [{ key: "username", label: "کاربر" }, { key: "documentType", label: "نوع" }],
    statusField: "status", statusColors: { pending: "#f59e0b", approved: "#22d3a5", rejected: "#ef4444" },
  }} />;
}

export function DeleteRequestsTab() {
  return <AdminCrud config={{ title: "درخواست حذف حساب", icon: "🗑️", module: "deleteReqs",
    fields: [
      { key: "username", label: "کاربر", required: true }, { key: "reason", label: "دلیل", type: "textarea" },
      { key: "status", label: "وضعیت", type: "select", options: [{ value: "pending", label: "در انتظار" }, { value: "approved", label: "تأیید" }, { value: "rejected", label: "رد" }], defaultValue: "pending" },
    ],
    columns: [{ key: "username", label: "کاربر" }, { key: "reason", label: "دلیل" }],
    statusField: "status", statusColors: { pending: "#f59e0b", approved: "#22d3a5", rejected: "#ef4444" },
  }} />;
}

export function NotifTemplatesTab() {
  return <AdminCrud config={{ title: "قالب اعلان", icon: "📋", module: "notifTemplates",
    fields: [
      { key: "title", label: "عنوان", required: true },
      { key: "type", label: "نوع", type: "select", options: [{ value: "email", label: "ایمیل" }, { value: "sms", label: "پیامک" }, { value: "push", label: "پوش" }], defaultValue: "email" },
      { key: "subject", label: "موضوع" }, { key: "body", label: "متن", type: "textarea", required: true },
      { key: "status", label: "وضعیت", type: "select", options: [{ value: "active", label: "فعال" }, { value: "inactive", label: "غیرفعال" }], defaultValue: "active" },
    ],
    columns: [{ key: "title", label: "عنوان" }, { key: "type", label: "نوع" }, { key: "subject", label: "موضوع" }],
    statusField: "status", statusColors: { active: "#22d3a5", inactive: "#888" },
  }} />;
}

// ─── System Settings Tab (special - not CRUD) ─────────────────────────────────
export function SystemSettingsTab() {
  const [settings, setSettings] = useState<Record<string, any>>({});
  const [loaded, setLoaded] = useState(false);
  const iS = { width: "100%", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(147,51,234,0.2)", borderRadius: 8, padding: "8px 12px", color: "white", fontSize: 13, outline: "none" as const };

  useEffect(() => { getSettings().then(s => { setSettings(s); setLoaded(true); }); }, []);

  const upd = (key: string, val: any) => setSettings(s => ({ ...s, [key]: val }));
  const updSocial = (key: string, val: string) => setSettings(s => ({ ...s, socialLinks: { ...(s.socialLinks || {}), [key]: val } }));
  const handleSave = async () => { await saveSettings(settings); alert("تنظیمات ذخیره شد ✅"); };

  if (!loaded) return <p style={{ color: "#888" }}>در حال بارگذاری...</p>;

  return (
    <div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 24 }}>
        {[
          { k: "siteName", l: "نام سایت" }, { k: "siteUrl", l: "آدرس سایت" },
          { k: "timezone", l: "منطقه زمانی" }, { k: "language", l: "زبان" }, { k: "currency", l: "ارز پیش‌فرض" },
          { k: "maxLoginAttempts", l: "حداکثر تلاش ورود", t: "number" },
          { k: "seoTitle", l: "عنوان SEO" }, { k: "seoDescription", l: "توضیح SEO" },
          { k: "seoKeywords", l: "کلمات کلیدی SEO" }, { k: "googleAnalytics", l: "Google Analytics ID" },
          { k: "smtpHost", l: "SMTP Host" }, { k: "smtpPort", l: "SMTP Port" }, { k: "smtpUser", l: "SMTP User" },
        ].map(f => (
          <div key={f.k}>
            <label style={{ fontSize: 11, color: "#888", display: "block", marginBottom: 4 }}>{f.l}</label>
            <input type={f.t || "text"} style={iS} value={String(settings[f.k] ?? "")}
              onChange={e => upd(f.k, f.t === "number" ? Number(e.target.value) : e.target.value)} />
          </div>
        ))}
      </div>
      <div style={{ display: "flex", gap: 16, marginBottom: 24, flexWrap: "wrap" }}>
        {[{ k: "registrationEnabled", l: "ثبت‌نام فعال" }, { k: "emailVerification", l: "تأیید ایمیل" }, { k: "maintenanceMode", l: "حالت تعمیرات" }].map(f => (
          <label key={f.k} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, cursor: "pointer" }}>
            <input type="checkbox" checked={!!settings[f.k]} onChange={e => upd(f.k, e.target.checked)} />
            {f.l}
          </label>
        ))}
      </div>
      <h3 style={{ fontSize: 14, fontWeight: 700, color: "#9333ea", marginBottom: 12 }}>🔗 شبکه‌های اجتماعی</h3>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 24 }}>
        {["facebook","twitter","instagram","telegram","linkedin"].map(k => (
          <div key={k}>
            <label style={{ fontSize: 11, color: "#888", display: "block", marginBottom: 4 }}>{k}</label>
            <input style={iS} value={settings.socialLinks?.[k] ?? ""} onChange={e => updSocial(k, e.target.value)} />
          </div>
        ))}
      </div>
      <h3 style={{ fontSize: 14, fontWeight: 700, color: "#9333ea", marginBottom: 12 }}>💻 کد سفارشی</h3>
      <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 24 }}>
        {[{ k: "customHeaderCode", l: "Header Code" }, { k: "customFooterCode", l: "Footer Code" }].map(f => (
          <div key={f.k}>
            <label style={{ fontSize: 11, color: "#888", display: "block", marginBottom: 4 }}>{f.l}</label>
            <textarea style={{ ...iS, minHeight: 60, resize: "vertical", fontFamily: "monospace" }} value={settings[f.k] ?? ""} onChange={e => upd(f.k, e.target.value)} />
          </div>
        ))}
      </div>
      <button onClick={handleSave} style={{ padding: "10px 28px", borderRadius: 12, background: "linear-gradient(135deg,#9333ea,#f97316)", border: "none", color: "white", fontWeight: 700, fontSize: 14, cursor: "pointer" }}>
        ذخیره تنظیمات سیستم
      </button>
    </div>
  );
}
