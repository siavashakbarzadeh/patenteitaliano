"use client";
import AdminCrud from "@/components/AdminCrud";

export function RolesTab() {
  return <AdminCrud config={{
    title: "نقش‌ها", icon: "🔑", module: "roles",
    fields: [
      { key: "name", label: "نام نقش", required: true },
      { key: "description", label: "توضیح", type: "textarea" },
    ],
    columns: [{ key: "name", label: "نقش" }, { key: "description", label: "توضیح" }],
  }} />;
}

export function CategoriesTab() {
  return <AdminCrud config={{
    title: "دسته‌بندی", icon: "📂", module: "categories",
    fields: [
      { key: "title", label: "عنوان", required: true },
      { key: "icon", label: "آیکون", placeholder: "🇮🇹" },
      { key: "slug", label: "اسلاگ" },
      { key: "description", label: "توضیح", type: "textarea" },
      { key: "status", label: "وضعیت", type: "select", options: [{ value: "active", label: "فعال" }, { value: "inactive", label: "غیرفعال" }], defaultValue: "active" },
    ],
    columns: [{ key: "title", label: "عنوان", render: (c: any) => `${c.icon} ${c.title}` }, { key: "slug", label: "اسلاگ" }],
    statusField: "status", statusColors: { active: "#22d3a5", inactive: "#888" },
  }} />;
}

export function WebinarsTab() {
  return <AdminCrud config={{
    title: "وبینارها/دوره‌ها", icon: "🎓", module: "webinars",
    fields: [
      { key: "title", label: "عنوان", required: true },
      { key: "slug", label: "اسلاگ" },
      { key: "type", label: "نوع", type: "select", options: [{ value: "course", label: "دوره" }, { value: "webinar", label: "وبینار" }, { value: "text_lesson", label: "متنی" }], defaultValue: "course" },
      { key: "price", label: "قیمت (€)", type: "number", defaultValue: 0 },
      { key: "teacher", label: "مدرس" },
      { key: "status", label: "وضعیت", type: "select", options: [{ value: "active", label: "فعال" }, { value: "pending", label: "در انتظار" }, { value: "draft", label: "پیش‌نویس" }], defaultValue: "active" },
      { key: "description", label: "توضیح", type: "textarea" },
    ],
    columns: [{ key: "title", label: "عنوان" }, { key: "type", label: "نوع" }, { key: "price", label: "قیمت", render: (w: any) => `€${w.price}` }, { key: "teacher", label: "مدرس" }],
    statusField: "status", statusColors: { active: "#22d3a5", pending: "#f59e0b", draft: "#888" },
  }} />;
}

export function QuizzesTab() {
  return <AdminCrud config={{
    title: "آزمون‌ها", icon: "📝", module: "quizzes",
    fields: [
      { key: "title", label: "عنوان", required: true },
      { key: "totalMark", label: "نمره کل", type: "number", defaultValue: 100 },
      { key: "passMark", label: "نمره قبولی", type: "number", defaultValue: 60 },
      { key: "timeLimit", label: "زمان (دقیقه)", type: "number", defaultValue: 30 },
      { key: "attempts", label: "تعداد تلاش", type: "number", defaultValue: 3 },
      { key: "status", label: "وضعیت", type: "select", options: [{ value: "active", label: "فعال" }, { value: "inactive", label: "غیرفعال" }], defaultValue: "active" },
    ],
    columns: [{ key: "title", label: "عنوان" }, { key: "totalMark", label: "نمره کل" }, { key: "passMark", label: "قبولی" }, { key: "timeLimit", label: "زمان", render: (q: any) => `${q.timeLimit} دقیقه` }],
    statusField: "status", statusColors: { active: "#22d3a5", inactive: "#888" },
  }} />;
}

export function OrdersTab() {
  return <AdminCrud config={{
    title: "سفارش‌ها", icon: "🛒", module: "orders",
    fields: [
      { key: "username", label: "کاربر", required: true },
      { key: "amount", label: "مبلغ (€)", type: "number", defaultValue: 0 },
      { key: "paymentMethod", label: "روش پرداخت" },
      { key: "status", label: "وضعیت", type: "select", options: [{ value: "paid", label: "پرداخت شده" }, { value: "pending", label: "در انتظار" }, { value: "refunded", label: "بازگشت" }, { value: "failed", label: "ناموفق" }], defaultValue: "pending" },
    ],
    columns: [{ key: "username", label: "کاربر" }, { key: "amount", label: "مبلغ", render: (o: any) => `€${o.amount}` }, { key: "paymentMethod", label: "روش" }],
    statusField: "status", statusColors: { paid: "#22d3a5", pending: "#f59e0b", refunded: "#6366f1", failed: "#ef4444" },
  }} />;
}

export function SalesTab() {
  return <AdminCrud config={{
    title: "فروش", icon: "💰", module: "sales",
    fields: [
      { key: "webinarTitle", label: "دوره", required: true },
      { key: "username", label: "خریدار", required: true },
      { key: "amount", label: "مبلغ (€)", type: "number", defaultValue: 0 },
      { key: "commission", label: "کمیسیون (€)", type: "number", defaultValue: 0 },
      { key: "status", label: "وضعیت", type: "select", options: [{ value: "completed", label: "تکمیل" }, { value: "pending", label: "در انتظار" }, { value: "refunded", label: "بازگشت" }], defaultValue: "completed" },
    ],
    columns: [{ key: "webinarTitle", label: "دوره" }, { key: "username", label: "خریدار" }, { key: "amount", label: "مبلغ", render: (s: any) => `€${s.amount}` }],
    statusField: "status", statusColors: { completed: "#22d3a5", pending: "#f59e0b", refunded: "#ef4444" },
  }} />;
}

export function MeetingsTab() {
  return <AdminCrud config={{
    title: "جلسات", icon: "🎥", module: "meetings",
    fields: [
      { key: "title", label: "عنوان", required: true },
      { key: "instructor", label: "مدرس" },
      { key: "date", label: "تاریخ", type: "date", required: true },
      { key: "time", label: "ساعت", type: "time" },
      { key: "duration", label: "مدت (دقیقه)", type: "number", defaultValue: 60 },
      { key: "type", label: "نوع", type: "select", options: [{ value: "zoom", label: "Zoom" }, { value: "bbb", label: "BBB" }, { value: "in_person", label: "حضوری" }], defaultValue: "zoom" },
      { key: "capacity", label: "ظرفیت", type: "number", defaultValue: 30 },
      { key: "price", label: "قیمت (€)", type: "number", defaultValue: 0 },
      { key: "link", label: "لینک" },
      { key: "status", label: "وضعیت", type: "select", options: [{ value: "scheduled", label: "برنامه‌ریزی" }, { value: "completed", label: "انجام شده" }, { value: "cancelled", label: "لغو" }], defaultValue: "scheduled" },
    ],
    columns: [{ key: "title", label: "عنوان" }, { key: "date", label: "تاریخ" }, { key: "instructor", label: "مدرس" }, { key: "type", label: "نوع" }],
    statusField: "status", statusColors: { scheduled: "#6366f1", completed: "#22d3a5", cancelled: "#ef4444" },
  }} />;
}

export function BlogsTab() {
  return <AdminCrud config={{
    title: "بلاگ", icon: "📰", module: "blogs",
    fields: [
      { key: "title", label: "عنوان", required: true },
      { key: "slug", label: "اسلاگ" },
      { key: "author", label: "نویسنده" },
      { key: "category", label: "دسته" },
      { key: "status", label: "وضعیت", type: "select", options: [{ value: "published", label: "منتشر" }, { value: "draft", label: "پیش‌نویس" }, { value: "pending", label: "در انتظار" }], defaultValue: "draft" },
      { key: "content", label: "محتوا", type: "textarea" },
    ],
    columns: [{ key: "title", label: "عنوان" }, { key: "author", label: "نویسنده" }, { key: "category", label: "دسته" }],
    statusField: "status", statusColors: { published: "#22d3a5", draft: "#888", pending: "#f59e0b" },
  }} />;
}
