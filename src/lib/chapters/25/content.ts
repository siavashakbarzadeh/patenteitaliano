import type { ChapterContent } from "@/lib/chapters/20/content";

export const chapter25Content: ChapterContent = {
  chapter: 25,
  titleIt: "Ripasso Generale – Preparazione all'Esame",
  titleFa: "مرور کلی – آمادگی برای آزمون",
  pageRange: "ص ۳۰۱–۳۲۰",
  summary: "این فصل آخر یک مرور جامع از مهم‌ترین مطالب آزمون گواهینامه B را ارائه می‌دهد: اعداد کلیدی (سرعت‌ها، فواصل، الکل)، قوانین اولویت، علائم مهم، و نکات رایج آزمون که اغلب اشتباه می‌شوند.",
  sections: [
    {
      id: "25-0-testo-italiano",
      titleIt: "Riepilogo Generale – I Numeri da Ricordare",
      titleFa: "📖 مرور کلی – اعداد مهمی که باید به خاطر بسپارید",
      body: [
        "**VELOCITÀ**\n• Centro abitato: **50 km/h**\n• Extraurbana secondaria: **90 km/h**\n• Extraurbana principale: **110 km/h**\n• Autostrada: **130 km/h**\n• Con pioggia/neve (extraurbana): -20 km/h\n• Con pioggia/neve (autostrada): -30 km/h\n• Neopatentati fuori città: max **90 km/h**\n• Neopatentati autostrada: max **100 km/h**",

        "**DISTANZE**\n• Triangolo su strada normale: min **50 m**\n• Triangolo in autostrada: min **100 m**\n• Distanza laterale da ciclisti: min **1,5 m**\n• Profondità battistrada pneumatici: min **1,6 mm**",

        "**ALCOL**\n• Adulti (patente > 3 anni): max **0,5 g/l**\n• Neopatentati / under 21 / professionisti: **0 g/l**\n• 0,5–0,8 g/l: sanzione amministrativa\n• 0,8–1,5 g/l: sanzione penale\n• > 1,5 g/l: arresto\n\n**PATENTE A PUNTI**\n• Punteggio iniziale: **20 punti**\n• Recupero: **+2 punti/anno** senza infrazioni\n• Punteggio a zero: **revoca** della patente\n• Neopatentati: decurtazione **doppia**",

        "**DISTANZE DI SICUREZZA**\n• Regola base: 1 m per ogni km/h di velocità\n• Raddoppiare con pioggia, nebbia, notte\n• Sul ghiaccio: spazio di frenata 10x più lungo\n\n**REVISIONE VEICOLO**\n• Prima revisione: dopo **4 anni**\n• Successive: ogni **2 anni**\n\n**CINTURE DI SICUREZZA**\n• Seggiolini: bambini con altezza ≤ **150 cm**\n• Standard R129: in base all'altezza (sostituisce R44 dal 2024)\n\n**TRIANGOLO D'EMERGENZA**\n• Giubbotto retroriflettente: obbligatorio fuori dai centri abitati\n\n**CASCO**\n• Obbligatorio: motocicli, ciclomotori, quad elettrici",
      ],
      highlights: [
        "50-90-110-130: i limiti fondamentali.",
        "Alcol: 0,5 g/l (0 per neopatentati/under21/professionisti).",
        "Patente a punti: 20 → recupero +2/anno → 0 = revoca.",
        "Triangolo strada: 50m | autostrada: 100m.",
        "Revisione: 4 anni poi ogni 2 anni.",
      ],
      notes: [
        "★ ۵۰-۹۰-۱۱۰-۱۳۰ = حدود اصلی سرعت.",
        "★ الکل: ۰.۵ (۰ برای نوپاتنت).",
        "★ امتیاز: ۲۰ → +۲/سال → صفر = ابطال.",
        "★ مثلث: ۵۰م جاده / ۱۰۰م اتوبان.",
        "★ revisione: ۴ سال، بعد هر ۲ سال.",
      ],
    },
    {
      id: "25-0-traduzione-persiana",
      titleIt: "Traduzione Persiana – Capitolo 25",
      titleFa: "🇮🇷 ترجمه فارسی مرور کلی",
      body: [
        "**جدول سرعت‌های اساسی:**\n\n| محل | حداکثر | باران/برف | نوپاتنت |\n|-----|--------|-----------|----------|\n| داخل شهر | ۵۰ | ۵۰ | ۵۰ |\n| برون‌شهری ثانوی | ۹۰ | ۷۰ | ۹۰ |\n| برون‌شهری اصلی | ۱۱۰ | ۹۰ | ۹۰ |\n| اتوبان | ۱۳۰ | ۱۰۰ | ۱۰۰ |",

        "**سیستم امتیاز گواهینامه:**\n\n• امتیاز اولیه: ۲۰\n• بازیابی: +۲ در سال بدون تخلف\n• امتیاز صفر: ابطال گواهینامه\n• نوپاتنت: کسر دو برابر\n\n**الکل:**\n\n| سطح | نتیجه |\n|-----|-------|\n| < ۰.۵ g/l | قانونی (تجربه‌داران) |\n| = ۰ g/l | اجباری (نوپاتنت/زیر ۲۱) |\n| ۰.۵-۰.۸ | جریمه اداری |\n| ۰.۸-۱.۵ | جرم کیفری |\n| > ۱.۵ | بازداشت |",
      ],
    },

    // ─── نکات رایج اشتباه در آزمون
    {
      id: "25-1-trappole-esame",
      titleIt: "Trappole Comuni dell'Esame",
      titleFa: "⚠️ نکات رایج که در آزمون اشتباه می‌شوند",
      body: [
        "**۱. اولویت در تقاطع:**\n- بدون علائم → سمت راست تقدم دارد\n- تراموا → همیشه تقدم (حتی بر جاده اصلی)\n- جاده اصلی > جاده فرعی (صرف نظر از جهت)\n\n**۲. سمافور:**\n- زرد = آماده توقف (نه شتاب!)\n- قرمز چشمک‌زن = مثل STOP\n- مأمور > سمافور (همیشه)\n\n**۳. سبقت:**\n- قبل از سبقت: فرچه چپ، آینه، کور گوشه\n- بعد از سبقت: فرچه راست، برگشت به راست\n- ممنوع: پیچ، تقاطع، گذرگاه ریلی، روی خط‌کشی عابر\n\n**۴. دور زدن (U-turn):**\n- ممنوع: اتوبان، تونل، پیچ، تقاطع، کم‌دیدی\n\n**۵. چراغ‌ها:**\n- موتورسیکل = همیشه روشن (روز و شب)\n- تونل = همیشه روشن\n- مه‌شکن عقب = فقط در کم‌دیدی\n\n**۶. فرمان موتور = همیشه حق دارد عبور کند**\n(جز اگر دارد از راه فرعی می‌آید)",
      ],
      keyVerbs: [
        { italian: "superare l'esame di guida", persian: "قبول شدن در آزمون رانندگی", example: "Con studio e pratica si supera l'esame. → با مطالعه و تمرین آزمون را قبول می‌شوی." },
      ],
    },

    // ─── خلاصه نهایی
    {
      id: "25-2-riassunto-finale",
      titleIt: "Riassunto Finale — Tutto il Corso in una Pagina",
      titleFa: "🏁 خلاصه نهایی — کل دوره در یک صفحه",
      body: [
        "**اولویت علائم (از بالا):**\n۱. مأمور ترافیک\n۲. سمافور\n۳. STOP\n۴. Dare Precedenza\n۵. جاده اصلی > فرعی\n۶. قاعده سمت راست\n\n**اعداد طلایی:**\n\n| موضوع | عدد |\n|-------|-----|\n| سرعت شهر | ۵۰ km/h |\n| سرعت اتوبان | ۱۳۰ km/h |\n| الکل عادی | ۰.۵ g/l |\n| الکل نوپاتنت | ۰ g/l |\n| آج لاستیک | ۱.۶ mm |\n| مثلث جاده | ۵۰ m |\n| مثلث اتوبان | ۱۰۰ m |\n| فاصله دوچرخه | ۱.۵ m |\n| revisione اول | ۴ سال |\n| revisione بعدی | هر ۲ سال |\n| امتیاز اولیه | ۲۰ |\n| بازیابی امتیاز | +۲/سال |\n| کودک در صندلی | ≤ ۱۵۰ cm |\n\n**موفق باشی در آزمون! 🎉**\nIn bocca al lupo!",
      ],
    },
  ],
};
