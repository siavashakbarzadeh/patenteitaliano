"use client";
import AdminCrud from "@/components/AdminCrud";

export function ContactsTab() {
  return <AdminCrud config={{ title: "تماس‌ها", icon: "📞", module: "contacts",
    fields: [
      { key: "name", label: "نام", required: true }, { key: "email", label: "ایمیل" }, { key: "phone", label: "تلفن" },
      { key: "subject", label: "موضوع" }, { key: "message", label: "پیام", type: "textarea" },
      { key: "status", label: "وضعیت", type: "select", options: [{ value: "new", label: "جدید" }, { value: "replied", label: "پاسخ داده" }, { value: "closed", label: "بسته" }], defaultValue: "new" },
    ],
    columns: [{ key: "name", label: "نام" }, { key: "email", label: "ایمیل" }, { key: "subject", label: "موضوع" }],
    statusField: "status", statusColors: { new: "#ef4444", replied: "#22d3a5", closed: "#888" },
  }} />;
}

export function GiftsTab() {
  return <AdminCrud config={{ title: "هدایا", icon: "🎁", module: "gifts",
    fields: [
      { key: "sender", label: "فرستنده", required: true }, { key: "recipient", label: "گیرنده", required: true },
      { key: "recipientEmail", label: "ایمیل گیرنده" }, { key: "itemTitle", label: "عنوان آیتم" },
      { key: "itemType", label: "نوع", type: "select", options: [{ value: "course", label: "دوره" }, { value: "bundle", label: "باندل" }, { value: "product", label: "محصول" }], defaultValue: "course" },
      { key: "message", label: "پیام", type: "textarea" },
      { key: "status", label: "وضعیت", type: "select", options: [{ value: "pending", label: "در انتظار" }, { value: "delivered", label: "ارسال شده" }, { value: "claimed", label: "دریافت شده" }], defaultValue: "pending" },
    ],
    columns: [{ key: "sender", label: "فرستنده" }, { key: "recipient", label: "گیرنده" }, { key: "itemTitle", label: "آیتم" }],
    statusField: "status", statusColors: { pending: "#f59e0b", delivered: "#6366f1", claimed: "#22d3a5" },
  }} />;
}

export function CurrenciesTab() {
  return <AdminCrud config={{ title: "ارزها", icon: "💱", module: "currencies",
    fields: [
      { key: "code", label: "کد", required: true, placeholder: "EUR" }, { key: "name", label: "نام", required: true },
      { key: "symbol", label: "نماد", placeholder: "€" }, { key: "exchangeRate", label: "نرخ تبدیل", type: "number", defaultValue: 1 },
      { key: "status", label: "وضعیت", type: "select", options: [{ value: "active", label: "فعال" }, { value: "inactive", label: "غیرفعال" }], defaultValue: "active" },
    ],
    columns: [{ key: "code", label: "کد" }, { key: "name", label: "نام" }, { key: "symbol", label: "نماد" }, { key: "exchangeRate", label: "نرخ" }],
    statusField: "status", statusColors: { active: "#22d3a5", inactive: "#888" },
  }} />;
}

export function UpcomingTab() {
  return <AdminCrud config={{ title: "دوره‌های آینده", icon: "🔜", module: "upcoming",
    fields: [
      { key: "title", label: "عنوان", required: true }, { key: "category", label: "دسته" }, { key: "instructor", label: "مدرس" },
      { key: "releaseDate", label: "تاریخ انتشار", type: "date" },
      { key: "status", label: "وضعیت", type: "select", options: [{ value: "upcoming", label: "آینده" }, { value: "released", label: "منتشر شده" }], defaultValue: "upcoming" },
      { key: "description", label: "توضیح", type: "textarea" },
    ],
    columns: [{ key: "title", label: "عنوان" }, { key: "category", label: "دسته" }, { key: "releaseDate", label: "تاریخ" }],
    statusField: "status", statusColors: { upcoming: "#f59e0b", released: "#22d3a5" },
  }} />;
}

export function InstructorRequestsTab() {
  return <AdminCrud config={{ title: "درخواست مدرسی", icon: "🎓", module: "instructorReqs",
    fields: [
      { key: "username", label: "نام کاربری", required: true }, { key: "displayName", label: "نام نمایشی" },
      { key: "specialty", label: "تخصص" }, { key: "experience", label: "سابقه", type: "textarea" },
      { key: "status", label: "وضعیت", type: "select", options: [{ value: "pending", label: "در انتظار" }, { value: "approved", label: "تأیید" }, { value: "rejected", label: "رد" }], defaultValue: "pending" },
    ],
    columns: [{ key: "displayName", label: "نام" }, { key: "specialty", label: "تخصص" }],
    statusField: "status", statusColors: { pending: "#f59e0b", approved: "#22d3a5", rejected: "#ef4444" },
  }} />;
}

export function PromotionsTab() {
  return <AdminCrud config={{ title: "تبلیغات", icon: "📣", module: "promotions",
    fields: [
      { key: "title", label: "عنوان", required: true },
      { key: "type", label: "نوع", type: "select", options: [{ value: "banner", label: "بنر" }, { value: "popup", label: "پاپ‌آپ" }, { value: "special_offer", label: "پیشنهاد ویژه" }], defaultValue: "banner" },
      { key: "targetUrl", label: "لینک مقصد" }, { key: "position", label: "موقعیت" },
      { key: "startDate", label: "شروع", type: "date" }, { key: "endDate", label: "پایان", type: "date" },
      { key: "status", label: "وضعیت", type: "select", options: [{ value: "active", label: "فعال" }, { value: "inactive", label: "غیرفعال" }], defaultValue: "active" },
    ],
    columns: [{ key: "title", label: "عنوان" }, { key: "type", label: "نوع" }, { key: "startDate", label: "شروع" }, { key: "endDate", label: "پایان" }],
    statusField: "status", statusColors: { active: "#22d3a5", inactive: "#888" },
  }} />;
}

export function PaymentChannelsTab() {
  return <AdminCrud config={{ title: "درگاه پرداخت", icon: "🏦", module: "payChannels",
    fields: [
      { key: "name", label: "نام", required: true },
      { key: "type", label: "نوع", type: "select", options: [{ value: "stripe", label: "Stripe" }, { value: "paypal", label: "PayPal" }, { value: "bank", label: "بانکی" }, { value: "crypto", label: "رمزارز" }, { value: "manual", label: "دستی" }], defaultValue: "stripe" },
      { key: "status", label: "وضعیت", type: "select", options: [{ value: "active", label: "فعال" }, { value: "inactive", label: "غیرفعال" }], defaultValue: "active" },
      { key: "isDefault", label: "پیش‌فرض", type: "checkbox", placeholder: "درگاه پیش‌فرض" },
    ],
    columns: [{ key: "name", label: "نام" }, { key: "type", label: "نوع" }],
    statusField: "status", statusColors: { active: "#22d3a5", inactive: "#888" },
  }} />;
}

export function CashbackTab() {
  return <AdminCrud config={{ title: "کش‌بک", icon: "💸", module: "cashback",
    fields: [
      { key: "title", label: "عنوان", required: true }, { key: "percent", label: "درصد", type: "number", defaultValue: 5 },
      { key: "minPurchase", label: "حداقل خرید (€)", type: "number", defaultValue: 0 }, { key: "maxCashback", label: "حداکثر (€)", type: "number", defaultValue: 50 },
      { key: "targetType", label: "هدف", type: "select", options: [{ value: "all", label: "همه" }, { value: "course", label: "دوره" }, { value: "bundle", label: "باندل" }, { value: "product", label: "محصول" }], defaultValue: "all" },
      { key: "startDate", label: "شروع", type: "date" }, { key: "endDate", label: "پایان", type: "date" },
      { key: "status", label: "وضعیت", type: "select", options: [{ value: "active", label: "فعال" }, { value: "inactive", label: "غیرفعال" }], defaultValue: "active" },
    ],
    columns: [{ key: "title", label: "عنوان" }, { key: "percent", label: "درصد", render: (c: any) => `${c.percent}%` }, { key: "targetType", label: "هدف" }],
    statusField: "status", statusColors: { active: "#22d3a5", inactive: "#888" },
  }} />;
}
