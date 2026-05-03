# 🚀 Backend Setup Guide — Supabase + Vercel

## ساختار فولدر

```
backend/
├── schema.sql          ← جدول‌های دیتابیس (۱۹ جدول)
├── seed.sql            ← داده‌های اولیه (کاربران، دسترسی‌ها)
├── routes.ts           ← قالب API Routes برای Next.js
├── lib/
│   └── supabase.ts     ← کلاینت Supabase
├── api/
│   ├── auth.ts         ← لاگین/لاگاوت/مدیریت کاربران
│   ├── sections.ts     ← دسترسی بخش‌ها + لاگ فعالیت
│   ├── progress.ts     ← پیشرفت، سوالات سخت، تگ‌ها، بازخورد
│   └── lms.ts          ← اطلاعیه، گواهی، پیام، تقویم، ویدیو، اشتراک، تخفیف
└── README.md           ← همین فایل
```

---

## مرحله ۱: ساخت پروژه Supabase

1. به [supabase.com](https://supabase.com) برو و یک پروژه جدید بساز
2. اطلاعات زیر رو یادداشت کن:
   - **Project URL** → `https://xxxxx.supabase.co`
   - **anon/public key** → `eyJ...`
   - **service_role key** → `eyJ...` (Settings → API)

---

## مرحله ۲: ساخت جدول‌ها

1. برو به **SQL Editor** در داشبورد Supabase
2. محتوای `schema.sql` رو paste و اجرا کن
3. سپس `seed.sql` رو اجرا کن

---

## مرحله ۳: نصب پکیج

```bash
npm install @supabase/supabase-js
```

---

## مرحله ۴: Environment Variables

### لوکال (فایل `.env.local`):
```env
NEXT_PUBLIC_SUPABASE_URL=https://xxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJ...
SUPABASE_SERVICE_ROLE_KEY=eyJ...
```

### Vercel (Settings → Environment Variables):
همون ۳ متغیر رو اضافه کن.

---

## مرحله ۵: فعال‌سازی API Routes

فایل `routes.ts` شامل قالب‌های آماده API Route هست. برای هر endpoint:

1. فولدر مربوطه رو در `src/app/api/` بساز
2. کد رو از `routes.ts` کپی و uncomment کن

### مثال:
```
src/app/api/
├── auth/
│   ├── login/route.ts
│   └── logout/route.ts
├── users/route.ts
├── sections/route.ts
├── progress/route.ts
├── announcements/route.ts
├── certificates/route.ts
├── messages/route.ts
├── schedule/route.ts
└── activity/route.ts
```

---

## مرحله ۶: اتصال فرانت به بکند

وقتی API routes آماده شد، فایل‌های `src/lib/` رو آپدیت کن:

```typescript
// قبل (localStorage):
export function getAllUsers() {
  return JSON.parse(localStorage.getItem("users") || "[]");
}

// بعد (API):
export async function getAllUsers() {
  const res = await fetch("/api/users");
  return res.json();
}
```

---

## جدول‌های دیتابیس

| جدول | توضیح |
|---|---|
| `users` | کاربران (admin, student) |
| `section_access` | دسترسی هر کاربر به بخش‌ها |
| `activity_log` | لاگ ورود/خروج |
| `user_progress` | پیشرفت آزمون هر کاربر |
| `announcements` | اطلاعیه‌ها |
| `certificates` | گواهی‌های پایان دوره |
| `messages` | پیام‌های ادمین ↔ دانش‌آموز |
| `schedule_events` | تقویم (کلاس/آزمون/رویداد) |
| `hard_questions` | سوالات علامت‌گذاری شده سخت |
| `tag_configs` | تنظیمات تگ‌های رنگی |
| `feedback` | ارزشیابی دانش‌آموزان |
| `support_requests` | درخواست‌های پشتیبانی |
| `raised_hands` | ابهام سوالات |
| `videos` | ویدیوهای آموزشی |
| `subscriptions` | اشتراک‌های پریمیوم |
| `discount_codes` | کدهای تخفیف |
| `gamification` | امتیاز و سطح‌بندی |
| `student_notes` | یادداشت ادمین درباره دانش‌آموز |
| `lesson_configs` | تنظیمات درس‌ها |

---

## API Endpoints

| Method | Endpoint | عملکرد |
|---|---|---|
| POST | `/api/auth/login` | ورود |
| POST | `/api/auth/logout` | خروج |
| GET/POST/PUT/DELETE | `/api/users` | مدیریت کاربران |
| GET/PUT | `/api/sections` | دسترسی بخش‌ها |
| GET/PUT/DELETE | `/api/progress` | پیشرفت |
| GET/POST/DELETE | `/api/announcements` | اطلاعیه‌ها |
| GET/POST/DELETE | `/api/certificates` | گواهی‌ها |
| GET/POST/PUT/DELETE | `/api/messages` | پیام‌ها |
| GET/POST/DELETE | `/api/schedule` | تقویم |
| GET | `/api/activity` | لاگ فعالیت |
