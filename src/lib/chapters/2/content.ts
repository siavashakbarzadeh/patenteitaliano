// ─────────────────────────────────────────────────────────────────────────────
//  CAPITOLO 2 – محتوای آموزشی
//  منبع: صفحات ۱۹–۳۸ کتاب پاتنته B
// ─────────────────────────────────────────────────────────────────────────────

import type { ChapterContent } from "@/lib/chapters/20/content";

export const chapter2Content: ChapterContent = {
  chapter: 2,
  titleIt: "La Segnaletica Stradale – Segnali Verticali",
  titleFa: "علائم راهنمایی – تابلوهای عمودی",
  pageRange: "ص ۱۹–۳۸",
  summary: "این فصل انواع تابلوهای عمودی راهنمایی را پوشش می‌دهد: تابلوهای خطر (مثلث قرمز)، تابلوهای ممنوعیت (دایره قرمز)، تابلوهای اجباری (دایره آبی)، تابلوهای اطلاعاتی (مستطیل)، و تابلوهای موقت (کارگاهی). همچنین اولویت تابلوها نسبت به خطوط روی جاده توضیح داده می‌شود.",
  sections: [

    // ─── متن اصلی ایتالیایی
    {
      id: "2-0-testo-italiano",
      titleIt: "Testo Originale – Capitolo 2",
      titleFa: "📖 متن اصلی ایتالیایی فصل ۲",
      body: [
        "**Classificazione dei segnali verticali**\n\nI segnali verticali si dividono in:\n• **Segnali di pericolo** (triangolo con bordo rosso): avvertono di un pericolo.\n• **Segnali di prescrizione**: impongono obblighi o divieti:\n  - **Segnali di divieto** (cerchio con bordo rosso): vietano comportamenti.\n  - **Segnali di obbligo** (cerchio blu): impongono comportamenti.\n• **Segnali di indicazione** (rettangolo): forniscono informazioni.\n• **Segnali complementari** (pannelli): integrano altri segnali.",

        "**Gerarchia dei segnali**\n\nLa priorità è:\n1. Agente del traffico (poliziotto/vigile)\n2. Segnali luminosi (semafori)\n3. Segnali verticali\n4. Segnaletica orizzontale (strisce)\n\nI segnali temporanei (cantieri) prevalgono su quelli fissi.",

        "**Colori e forme**\n\n| Forma/Colore | Tipo | Esempio |\n|---|---|---|\n| Triangolo rosso | Pericolo | Curva pericolosa |\n| Cerchio rosso | Divieto | Divieto di accesso |\n| Cerchio blu | Obbligo | Direzione obbligatoria |\n| Rettangolo blu | Indicazione | Direzione per città |\n| Rettangolo verde | Indicazione autostradale | Direzione autostrada |\n| Ottagono rosso | STOP | Stop |",
      ],
      keyVerbs: [
        { italian: "rispettare i segnali", persian: "رعایت کردن علائم", example: "I conducenti devono rispettare tutti i segnali stradali. → رانندگان باید همه علائم راهنمایی را رعایت کنند." },
        { italian: "segnale di pericolo / divieto / obbligo", persian: "تابلوی خطر / ممنوعیت / اجباری", example: "Il triangolo rosso è un segnale di pericolo. → مثلث قرمز تابلوی خطر است." },
      ],
      highlights: [
        "Triangolo rosso = pericolo.",
        "Cerchio rosso = divieto.",
        "Cerchio blu = obbligo.",
        "Agente di traffico > semaforo > segnale verticale > segnaletica orizzontale.",
        "Segnali temporanei prevalgono su quelli fissi.",
      ],
      notes: [
        "★ مثلث قرمز = خطر.",
        "★ دایره قرمز = ممنوعیت.",
        "★ دایره آبی = اجباری.",
        "★ مأمور > سمافور > تابلو > خط روی جاده.",
        "★ تابلوهای موقت (کارگاهی) بر تابلوهای ثابت اولویت دارند.",
      ],
    },

    // ─── ترجمه فارسی
    {
      id: "2-0-traduzione-persiana",
      titleIt: "Traduzione Persiana – Capitolo 2",
      titleFa: "🇮🇷 ترجمه فارسی متن اصلی فصل ۲",
      body: [
        "**طبقه‌بندی تابلوهای عمودی**\n\nتابلوهای عمودی به این دسته‌ها تقسیم می‌شوند:\n• **تابلوهای خطر** (مثلث با لبه قرمز): از خطر آگاه می‌کنند.\n• **تابلوهای دستوری**: اجبار یا ممنوعیت ایجاد می‌کنند:\n  - **ممنوعیت** (دایره با لبه قرمز): رفتارها را ممنوع می‌کنند.\n  - **اجباری** (دایره آبی): رفتارها را اجباری می‌کنند.\n• **تابلوهای اطلاعاتی** (مستطیل): اطلاعات می‌دهند.\n• **تابلوهای تکمیلی** (پانل‌ها): سایر تابلوها را تکمیل می‌کنند.",

        "**اولویت علائم**\n\nاولویت از بالا به پایین:\n۱. مأمور ترافیک (پلیس)\n۲. علائم نوری (سمافور)\n۳. تابلوهای عمودی\n۴. نشانه‌گذاری افقی (خطوط)\n\nتابلوهای موقت (کارگاهی) بر تابلوهای ثابت اولویت دارند.",
      ],
    },

    // ─── انواع تابلو
    {
      id: "2-1-tipi-segnali",
      titleIt: "Tipi di Segnali Verticali",
      titleFa: "انواع تابلوهای عمودی",
      body: [
        "**۱. تابلوهای خطر (Segnali di Pericolo):**\n🔺 شکل: مثلث با لبه قرمز\n📍 هدف: هشدار از خطر پیش رو\n📏 فاصله: معمولاً ۱۵۰ متر قبل از خطر (خارج شهر)\n\n**نمونه‌ها:** Curva pericolosa (پیچ خطرناک) — Bambini (کودکان) — Incrocio (تقاطع) — Dosso (برجستگی)",

        "**۲. تابلوهای ممنوعیت (Divieto):**\n🔴 شکل: دایره با لبه قرمز\n📍 هدف: ممنوع کردن رفتار\n\n**نمونه‌ها:** Divieto di accesso (ورود ممنوع) — Senso vietato (یک‌طرفه مخالف) — Divieto di sorpasso (سبقت ممنوع) — Limite di velocità (حداکثر سرعت)",

        "**۳. تابلوهای اجباری (Obbligo):**\n🔵 شکل: دایره آبی\n📍 هدف: اجباری کردن رفتار\n\n**نمونه‌ها:** Direzione obbligatoria (جهت اجباری) — Rotatoria obbligatoria (دوار اجباری) — Corsia obbligatoria per biciclette (مسیر اجباری دوچرخه)",

        "**۴. تابلوهای اطلاعاتی (Indicazione):**\n🔷 شکل: مستطیل\n📍 هدف: ارائه اطلاعات\n\n**رنگ‌ها:** آبی = جاده شهری/ملی — سبز = اتوبان — قهوه = مناطق توریستی",
      ],
      keyVerbs: [
        { italian: "segnale di pericolo / divieto / obbligo", persian: "تابلوی خطر / ممنوعیت / اجباری", example: "Il triangolo segnala un pericolo. → مثلث از خطر آگاه می‌کند." },
      ],
    },

    // ─── خلاصه
    {
      id: "2-2-riassunto",
      titleIt: "Riassunto — Punti Chiave del Capitolo 2",
      titleFa: "خلاصه — نکات کلیدی فصل ۲",
      body: [
        "**جدول سریع:**\n\n| شکل | رنگ | نوع | مثال |\n|-----|-----|-----|------|\n| مثلث | قرمز | خطر | پیچ خطرناک |\n| دایره | قرمز | ممنوعیت | سبقت ممنوع |\n| دایره | آبی | اجباری | جهت اجباری |\n| مستطیل | آبی | اطلاعات | نام شهر |\n| مستطیل | سبز | اتوبان | خروجی اتوبان |\n| هشت‌ضلعی | قرمز | STOP | توقف کامل |\n\n**اولویت (از بالا به پایین):**\n۱. مأمور ترافیک ۲. سمافور ۳. تابلو ۴. خط روی جاده",
      ],
      keyVerbs: [
        { italian: "osservare la gerarchia dei segnali", persian: "رعایت اولویت علائم", example: "L'agente ha la precedenza assoluta su tutti i segnali. → مأمور اولویت مطلق بر همه علائم دارد." },
      ],
    },

  ],
};
