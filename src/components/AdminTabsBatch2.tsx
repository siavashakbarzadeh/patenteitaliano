"use client";
import AdminCrud from "@/components/AdminCrud";

export function ForumsTab() {
  return <AdminCrud config={{ title: "انجمن", icon: "💬", module: "forums",
    fields: [
      { key: "title", label: "عنوان", required: true },
      { key: "category", label: "دسته" },
      { key: "author", label: "نویسنده" },
      { key: "status", label: "وضعیت", type: "select", options: [{ value: "open", label: "باز" }, { value: "closed", label: "بسته" }, { value: "pinned", label: "سنجاق" }, { value: "solved", label: "حل شده" }], defaultValue: "open" },
    ],
    columns: [{ key: "title", label: "عنوان" }, { key: "category", label: "دسته" }, { key: "author", label: "نویسنده" }],
    statusField: "status", statusColors: { open: "#22d3a5", closed: "#888", pinned: "#f59e0b", solved: "#6366f1" },
  }} />;
}

export function ProductsTab() {
  return <AdminCrud config={{ title: "محصولات", icon: "🛍️", module: "products",
    fields: [
      { key: "title", label: "عنوان", required: true },
      { key: "type", label: "نوع", type: "select", options: [{ value: "digital", label: "دیجیتال" }, { value: "physical", label: "فیزیکی" }], defaultValue: "digital" },
      { key: "price", label: "قیمت (€)", type: "number", defaultValue: 0 },
      { key: "inventory", label: "موجودی", type: "number", defaultValue: 100 },
      { key: "category", label: "دسته" },
      { key: "status", label: "وضعیت", type: "select", options: [{ value: "active", label: "فعال" }, { value: "inactive", label: "غیرفعال" }], defaultValue: "active" },
      { key: "description", label: "توضیح", type: "textarea" },
    ],
    columns: [{ key: "title", label: "عنوان" }, { key: "type", label: "نوع" }, { key: "price", label: "قیمت", render: (p: any) => `€${p.price}` }, { key: "inventory", label: "موجودی" }],
    statusField: "status", statusColors: { active: "#22d3a5", inactive: "#888" },
  }} />;
}

export function BundlesTab() {
  return <AdminCrud config={{ title: "باندل‌ها", icon: "📦", module: "bundles",
    fields: [
      { key: "title", label: "عنوان", required: true },
      { key: "price", label: "قیمت (€)", type: "number", defaultValue: 0 },
      { key: "originalPrice", label: "قیمت اصلی (€)", type: "number", defaultValue: 0 },
      { key: "status", label: "وضعیت", type: "select", options: [{ value: "active", label: "فعال" }, { value: "inactive", label: "غیرفعال" }], defaultValue: "active" },
      { key: "description", label: "توضیح", type: "textarea" },
    ],
    columns: [{ key: "title", label: "عنوان" }, { key: "price", label: "قیمت", render: (b: any) => `€${b.price}` }, { key: "originalPrice", label: "اصلی", render: (b: any) => `€${b.originalPrice}` }],
    statusField: "status", statusColors: { active: "#22d3a5", inactive: "#888" },
  }} />;
}

export function FormsTab() {
  return <AdminCrud config={{ title: "فرم‌ها", icon: "📋", module: "forms",
    fields: [
      { key: "title", label: "عنوان", required: true },
      { key: "fieldsCount", label: "تعداد فیلد", type: "number", defaultValue: 0 },
      { key: "status", label: "وضعیت", type: "select", options: [{ value: "active", label: "فعال" }, { value: "inactive", label: "غیرفعال" }], defaultValue: "active" },
    ],
    columns: [{ key: "title", label: "عنوان" }, { key: "fieldsCount", label: "فیلدها" }, { key: "submissionsCount", label: "ارسال‌ها" }],
    statusField: "status", statusColors: { active: "#22d3a5", inactive: "#888" },
  }} />;
}

export function InstallmentsTab() {
  return <AdminCrud config={{ title: "اقساط", icon: "💳", module: "installments",
    fields: [
      { key: "title", label: "عنوان", required: true },
      { key: "steps", label: "تعداد قسط", type: "number", defaultValue: 3 },
      { key: "upfront", label: "پیش‌پرداخت (%)", type: "number", defaultValue: 30 },
      { key: "status", label: "وضعیت", type: "select", options: [{ value: "active", label: "فعال" }, { value: "inactive", label: "غیرفعال" }], defaultValue: "active" },
    ],
    columns: [{ key: "title", label: "عنوان" }, { key: "steps", label: "اقساط" }, { key: "upfront", label: "پیش‌پرداخت", render: (i: any) => `${i.upfront}%` }],
    statusField: "status", statusColors: { active: "#22d3a5", inactive: "#888" },
  }} />;
}

export function RewardsTab() {
  return <AdminCrud config={{ title: "پاداش‌ها", icon: "🎁", module: "rewards",
    fields: [
      { key: "title", label: "عنوان", required: true },
      { key: "type", label: "نوع", type: "select", options: [{ value: "score", label: "امتیاز" }, { value: "badge", label: "نشان" }, { value: "certificate", label: "گواهی" }], defaultValue: "score" },
      { key: "condition", label: "شرط" },
      { key: "score", label: "امتیاز", type: "number", defaultValue: 10 },
      { key: "status", label: "وضعیت", type: "select", options: [{ value: "active", label: "فعال" }, { value: "inactive", label: "غیرفعال" }], defaultValue: "active" },
    ],
    columns: [{ key: "title", label: "عنوان" }, { key: "type", label: "نوع" }, { key: "score", label: "امتیاز" }, { key: "condition", label: "شرط" }],
    statusField: "status", statusColors: { active: "#22d3a5", inactive: "#888" },
  }} />;
}

export function NewslettersTab() {
  return <AdminCrud config={{ title: "خبرنامه", icon: "📧", module: "newsletters",
    fields: [
      { key: "email", label: "ایمیل", required: true },
      { key: "status", label: "وضعیت", type: "select", options: [{ value: "active", label: "فعال" }, { value: "unsubscribed", label: "لغو" }], defaultValue: "active" },
    ],
    columns: [{ key: "email", label: "ایمیل" }],
    statusField: "status", statusColors: { active: "#22d3a5", unsubscribed: "#888" },
  }} />;
}

export function PagesTab() {
  return <AdminCrud config={{ title: "صفحات CMS", icon: "📄", module: "pages",
    fields: [
      { key: "title", label: "عنوان", required: true },
      { key: "slug", label: "اسلاگ" },
      { key: "seoTitle", label: "عنوان SEO" },
      { key: "seoDescription", label: "توضیح SEO" },
      { key: "status", label: "وضعیت", type: "select", options: [{ value: "published", label: "منتشر" }, { value: "draft", label: "پیش‌نویس" }], defaultValue: "draft" },
      { key: "content", label: "محتوا", type: "textarea" },
    ],
    columns: [{ key: "title", label: "عنوان" }, { key: "slug", label: "اسلاگ" }],
    statusField: "status", statusColors: { published: "#22d3a5", draft: "#888" },
  }} />;
}
