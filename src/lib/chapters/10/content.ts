import type { ChapterContent } from "@/lib/chapters/20/content";

export const chapter10Content: ChapterContent = {
  chapter: 10,
  titleIt: "Incidenti Stradali – Primo Soccorso – Responsabilità",
  titleFa: "تصادفات جاده‌ای – کمک‌های اولیه – مسئولیت",
  pageRange: "ص ۱۴۹–۱۶۲",
  summary: "این فصل اقدامات لازم در صورت وقوع تصادف را پوشش می‌دهد: تعهدات قانونی راننده (توقف، کمک، اطلاع‌رسانی)، نحوه تماس با اورژانس (112/118)، اصول اولیه کمک‌های اولیه، و مسئولیت مدنی/کیفری.",
  sections: [
    {
      id: "10-0-testo-italiano",
      titleIt: "Testo Originale – Capitolo 10",
      titleFa: "📖 متن اصلی ایتالیایی فصل ۱۰",
      body: [
        "**Obblighi in caso di incidente (Art. 189 C.d.S.)**\n\nChiunque sia coinvolto in un incidente deve:\n1. **Fermarsi** immediatamente.\n2. **Prestare soccorso** alle persone ferite — è un obbligo di legge (omissione di soccorso è reato).\n3. **Segnalare** l'incidente alle autorità (Polizia, Carabinieri, 112) se ci sono feriti o danni significativi.\n4. **Non spostare i veicoli** dall'incidente (se non necessario per la sicurezza) fino all'arrivo delle autorità — per consentire i rilievi.\n5. **Segnalare** l'incidente con il triangolo e/o mettendosi in sicurezza.",

        "**Numeri di emergenza**\n\n• **112**: numero unico di emergenza europeo.\n• **118**: emergenza sanitaria (ambulanze).\n• **115**: Vigili del Fuoco.\n• **113**: Polizia di Stato.\n• **112**: Carabinieri (anche 112).",

        "**Primo soccorso — principi base**\n\n• Non spostare i feriti (rischio di lesioni spinali) — salvo pericolo imminente.\n• Mantenere il ferito sveglio e parlare con lui.\n• Controllare la respirazione.\n• Se il ferito non respira e si è formati: RCP (rianimazione cardio-polmonare).\n• Fermare le emorragie con pressione diretta.\n• Proteggere il ferito dal freddo.",
      ],
      highlights: [
        "Fermarsi è OBBLIGATORIO in caso di incidente.",
        "Omissione di soccorso è un REATO.",
        "112 = emergenza europea.",
        "118 = ambulanza.",
        "Non spostare i feriti (rischio spinale).",
      ],
      notes: [
        "★ توقف = اجباری.",
        "★ ترک صحنه = جرم کیفری.",
        "★ ۱۱۲ = اورژانس ایتالیا/اروپا.",
        "★ ۱۱۸ = آمبولانس.",
        "★ مجروحان را جابجا نکنید (خطر ستون فقرات).",
      ],
    },
    {
      id: "10-0-traduzione-persiana",
      titleIt: "Traduzione Persiana – Capitolo 10",
      titleFa: "🇮🇷 ترجمه فارسی فصل ۱۰",
      body: [
        "**تعهدات در صورت تصادف (ماده ۱۸۹)**\n\nهر کسی که در تصادف دخیل باشد باید:\n۱. فوری توقف کند.\n۲. به مجروحان کمک کند — این تکلیف قانونی است (ترک صحنه جرم است).\n۳. در صورت وجود مجروح یا آسیب جدی، به مقامات اطلاع دهد (۱۱۲).\n۴. وسایل را جابجا نکند (مگر برای ایمنی) تا مقامات برسند.\n۵. با مثلث و جلیقه خطر را علامت‌گذاری کند.",

        "**اعداد اورژانس**\n\n• ۱۱۲: اورژانس واحد اروپا (پلیس، آمبولانس، آتش‌نشانی)\n• ۱۱۸: اورژانس پزشکی (آمبولانس)\n• ۱۱۵: آتش‌نشانی\n• ۱۱۳: پلیس دولتی\n\n**اصول اولیه:**\n• جابجا نکنید مجروح را (خطر ستون فقرات)\n• خونریزی را با فشار مستقیم متوقف کنید\n• تنفس را کنترل کنید\n• مجروح را گرم نگه دارید",
      ],
    },
    {
      id: "10-1-riassunto",
      titleIt: "Riassunto — Capitolo 10",
      titleFa: "خلاصه — فصل ۱۰",
      body: [
        "**اعداد اورژانس:**\n\n| عدد | سرویس |\n|-----|-------|\n| ۱۱۲ | اورژانس عمومی اروپا |\n| ۱۱۸ | آمبولانس |\n| ۱۱۵ | آتش‌نشانی |\n| ۱۱۳ | پلیس دولتی |\n\n**ترتیب اقدامات:**\n۱. توقف فوری\n۲. کمک به مجروحان\n۳. تماس با ۱۱۲\n۴. علامت‌گذاری با مثلث\n۵. جابجا نکردن وسایل (مگر خطر)",
      ],
      keyVerbs: [
        { italian: "fermarsi e prestare soccorso", persian: "توقف و کمک‌رسانی", example: "In caso di incidente è obbligatorio fermarsi e prestare soccorso. → در صورت تصادف توقف و کمک‌رسانی اجباری است." },
      ],
    },

    {
      id: "10-eng",
      titleIt: "English Equivalents - Capitolo 10",
      titleFa: "معادل های انگلیسی - فصل 10",
      body: ["تصادف و کمک های اولیه:"],
      englishEquivalents: [
        { italian: "incidente",     english: "incident / accident", note: "تصادف - همریشه" },
        { italian: "emergenza",     english: "emergency",           note: "اضطراری - همریشه" },
        { italian: "ambulanza",     english: "ambulance",           note: "دقیقاً همان" },
        { italian: "emorragia",     english: "hemorrhage",          note: "خونریزی - همریشه" },
        { italian: "omissione",     english: "omission",            note: "ترک - همریشه" },
        { italian: "constatazione", english: "assessment",          note: "ارزیابی - همریشه" },
      ],
    },

  ],
};