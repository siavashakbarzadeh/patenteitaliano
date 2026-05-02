// ─────────────────────────────────────────────────────────────────────────────
//  CAPITOLO 1 – محتوای آموزشی (ترجمه فارسی)
//  منبع: صفحات ۱–۱۸ کتاب پاتنته B
// ─────────────────────────────────────────────────────────────────────────────

import type { ChapterContent } from "@/lib/chapters/20/content";

export const chapter1Content: ChapterContent = {
  chapter: 1,
  titleIt: "La Strada e i suoi Componenti",
  titleFa: "جاده و اجزای آن",
  pageRange: "ص ۱–۱۸",
  summary: "این فصل اجزای اصلی جاده را معرفی می‌کند: انواع جاده (شهری، برون‌شهری، اتوبان)، اجزای جاده (carreggiata، corsia، marciapiede)، انواع نشانه‌گذاری‌های افقی (خطوط سفید ممتد و منقطع) و عمودی (تابلوها)، و تعاریف کلیدی مانند intersezione، rotatoria و precedenza.",
  sections: [

    // ─── متن اصلی ایتالیایی
    {
      id: "1-0-testo-italiano",
      titleIt: "Testo Originale – Capitolo 1",
      titleFa: "📖 متن اصلی ایتالیایی فصل ۱",
      body: [
        "**Classificazione delle strade (Art. 2 C.d.S.)**\n\nLe strade si classificano in:\n• **Autostrade**: strade extraurbane a carreggiate separate, senza incroci a raso, con accessi limitati, destinate esclusivamente ai veicoli a motore.\n• **Strade extraurbane principali**: a carreggiate separate, con incroci a livelli sfalsati.\n• **Strade extraurbane secondarie**: a carreggiate non separate, a una o più corsie per senso di marcia.\n• **Strade urbane di scorrimento**: a carreggiate separate.\n• **Strade urbane di quartiere**: a carreggiate non separate.\n• **Strade locali**: extraurbane o urbane.",

        "**Elementi della strada**\n\n• **Carreggiata**: parte della strada destinata alla circolazione dei veicoli.\n• **Corsia**: parte longitudinale della carreggiata, delimitata da segnaletica orizzontale.\n• **Banchina**: striscia laterale della carreggiata.\n• **Marciapiede**: spazio rialzato per i pedoni.\n• **Spartitraffico**: elemento fisico che separa carreggiate opposte.\n• **Intersezione (incrocio)**: zona di confluenza di più strade.\n• **Rotatoria**: intersezione con senso di marcia rotatorio.",

        "**Segnaletica orizzontale (strisce)**\n\n• **Striscia continua**: non si può oltrepassare.\n• **Striscia discontinua**: si può oltrepassare con prudenza.\n• **Striscia mista** (continua + discontinua): chi è dal lato continuo non può sorpassare; chi è dal lato discontinuo può.\n• **Strisce pedonali**: zebre — i pedoni hanno la precedenza.\n• **Frecce direzionali**: indicano la direzione obbligatoria.",
      ],
      keyVerbs: [
        { italian: "classificare le strade", persian: "جاده‌ها را طبقه‌بندی کردن", example: "Le strade si classificano in autostrade, extraurbane e urbane. → جاده‌ها به اتوبان، برون‌شهری و شهری طبقه‌بندی می‌شوند." },
        { italian: "oltrepassare la striscia", persian: "از خط عبور کردن", example: "La striscia continua non si può oltrepassare. → نمی‌توان از خط ممتد عبور کرد." },
      ],
      highlights: [
        "Striscia continua: NON si può sorpassare.",
        "Striscia discontinua: si può sorpassare con prudenza.",
        "Strisce pedonali: i pedoni hanno la precedenza.",
        "Rotatoria: senso di marcia antiorario.",
        "Autostrada: solo veicoli a motore, accessi limitati.",
      ],
      notes: [
        "★ خط ممتد = ممنوع عبور.",
        "★ خط منقطع = مجاز با احتیاط.",
        "★ خط مختلط = از سمت ممتد ممنوع، از سمت منقطع مجاز.",
        "★ روتاریا = جهت ضد ساعتگرد.",
      ],
    },

    // ─── ترجمه فارسی
    {
      id: "1-0-traduzione-persiana",
      titleIt: "Traduzione Persiana – Capitolo 1",
      titleFa: "🇮🇷 ترجمه فارسی متن اصلی فصل ۱",
      body: [
        "**طبقه‌بندی جاده‌ها (ماده ۲ قانون)**\n\nجاده‌ها به این دسته‌ها تقسیم می‌شوند:\n• **اتوبان**: جاده برون‌شهری با خطوط جداگانه، بدون تقاطع هم‌سطح، دسترسی محدود، فقط برای وسایل موتوری.\n• **جاده برون‌شهری اصلی**: خطوط جداگانه، تقاطع‌های غیرهم‌سطح.\n• **جاده برون‌شهری ثانوی**: خطوط غیرجداگانه، یک یا چند خط در هر جهت.\n• **جاده شهری سریع**: خطوط جداگانه.\n• **جاده محله‌ای**: خطوط غیرجداگانه.\n• **جاده محلی**: برون‌شهری یا شهری.",

        "**اجزای جاده**\n\n• **Carreggiata**: بخشی از جاده که برای تردد وسایل اختصاص دارد.\n• **Corsia**: بخش طولی carreggiata که با نشانه‌گذاری افقی مشخص می‌شود.\n• **Banchina**: نوار جانبی carreggiata.\n• **Marciapiede**: فضای بالا‌تر برای عابران پیاده.\n• **Spartitraffico**: عنصر فیزیکی که خطوط مخالف را جدا می‌کند.\n• **Intersezione (incrocio)**: محل تلاقی چند جاده.\n• **Rotatoria**: تقاطع با جهت حرکت دورانی.",

        "**نشانه‌گذاری افقی (خطوط)**\n\n• **خط ممتد**: نمی‌توان از آن عبور کرد.\n• **خط منقطع**: می‌توان با احتیاط از آن عبور کرد.\n• **خط مختلط** (ممتد + منقطع): کسی که طرف ممتد است نمی‌تواند سبقت بگیرد؛ کسی که طرف منقطع است می‌تواند.\n• **خط‌کشی عابر پیاده**: عابران اولویت دارند.\n• **پیکان‌های جهت‌دار**: جهت اجباری را نشان می‌دهند.",
      ],
    },

    // ─── اجزای اصلی
    {
      id: "1-1-componenti",
      titleIt: "1.1 – Componenti della Strada",
      titleFa: "۱.۱ – اجزای اصلی جاده",
      body: [
        "**جاده (Strada)** از اجزای مختلفی تشکیل شده است:\n\n| اصطلاح | معنی فارسی |\n|--------|----------|\n| Carreggiata | بخش اصلی جاده برای وسایل نقلیه |\n| Corsia | یک خط از carreggiata |\n| Marciapiede | پیاده‌رو |\n| Banchina | نوار جانبی |\n| Spartitraffico | جداکننده مرکزی |\n| Intersezione | تقاطع |\n| Rotatoria | دوار / میدان |",

        "**انواع جاده از نظر مکان:**\n• **Strade urbane** — جاده‌های داخل شهر (centri abitati)\n• **Strade extraurbane** — جاده‌های خارج شهر\n• **Autostrade** — بزرگراه‌ها",
      ],
      keyVerbs: [
        { italian: "percorrere la carreggiata", persian: "از carreggiata عبور کردن", example: "I veicoli percorrono la carreggiata. → وسایل از carreggiata عبور می‌کنند." },
      ],
    },

    // ─── نشانه‌گذاری افقی
    {
      id: "1-2-segnaletica-orizzontale",
      titleIt: "1.2 – Segnaletica Orizzontale (Strisce)",
      titleFa: "۱.۲ – نشانه‌گذاری افقی (خطوط روی جاده)",
      body: [
        "| خط | نوع | قانون |\n|-----|-----|------|\n| **Striscia continua** | ممتد سفید | ممنوع عبور |\n| **Striscia discontinua** | منقطع سفید | مجاز با احتیاط |\n| **Striscia mista** | ممتد+منقطع | از ممتد: ممنوع / از منقطع: مجاز |\n| **Strisce pedonali** | زبرا | عابران اولویت دارند |\n| **Frecce** | پیکان | جهت اجباری |",
      ],
      keyVerbs: [
        { italian: "striscia continua / discontinua", persian: "خط ممتد / منقطع", example: "La striscia continua non si oltrepassa. → از خط ممتد نمی‌توان عبور کرد." },
      ],
    },

    // ─── خلاصه
    {
      id: "1-3-riassunto",
      titleIt: "Riassunto — Punti Chiave del Capitolo 1",
      titleFa: "خلاصه — نکات کلیدی فصل ۱",
      body: [
        "**نمودار طبقه‌بندی جاده‌ها:**\n\n```\nجاده‌ها\n├── برون‌شهری\n│   ├── اتوبان (سبز) → فقط موتوری، دسترسی محدود\n│   ├── اصلی (آبی) → خطوط جداگانه\n│   └── ثانوی → خطوط غیرجداگانه\n└── شهری (centro abitato)\n    ├── سریع → خطوط جداگانه\n    ├── محله‌ای → خطوط غیرجداگانه\n    └── محلی\n```\n\n**قوانین کلیدی خطوط:**\n| خط | قانون |\n|-----|------|\n| ممتد | ممنوع عبور |\n| منقطع | مجاز با احتیاط |\n| مختلط (طرف ممتد) | ممنوع |\n| مختلط (طرف منقطع) | مجاز |",
      ],
      keyVerbs: [
        { italian: "rispettare la segnaletica orizzontale", persian: "رعایت نشانه‌گذاری افقی", example: "Tutti devono rispettare la segnaletica orizzontale. → همه باید نشانه‌گذاری افقی را رعایت کنند." },
      ],
    },

  ],
};
