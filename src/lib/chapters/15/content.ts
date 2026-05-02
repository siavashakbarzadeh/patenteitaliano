// ─────────────────────────────────────────────────────────────────────────────
//  CAPITOLO 15 – محتوای آموزشی (ترجمه فارسی)
//  منبع: صفحات ۱۷۵–۱۸۳ کتاب پاتنته B
// ─────────────────────────────────────────────────────────────────────────────

import type { ChapterContent } from "@/lib/chapters/20/content";

export const chapter15Content: ChapterContent = {
  chapter: 15,
  titleIt: "Norme Relative al Sorpasso",
  titleFa: "قوانین سبقت‌گیری",
  pageRange: "ص ۱۷۵–۱۸۳",
  summary: "سبقت (Sorpasso) یکی از خطرناک‌ترین مانورهای رانندگی است. این فصل شرایط لازم برای سبقت قانونی، موارد مجاز سبقت از راست، تمام ممنوعیت‌های سبقت (پیچ، تقاطع، گذرگاه ریلی و...)، تکالیف وسیله سبقت‌خورده و خطرات اصلی این مانور را پوشش می‌دهد.",
  sections: [

    // ─── متن اصلی ایتالیایی ───────────────────────────────────────────────────
    {
      id: "15-0-testo-italiano",
      titleIt: "Testo Originale – Capitolo 15",
      titleFa: "📖 متن اصلی ایتالیایی فصل ۱۵",
      body: [
        "**15.1 – Il sorpasso (Art. 148 C.d.S.)**\n\nIl sorpasso consiste nel portarsi all'altezza di un veicolo, di un animale o di una persona in movimento, per poi superarlo. Il sorpasso si effettua normalmente a sinistra. Prima di sorpassare il conducente deve assicurarsi:\n• che nessun segnale lo vieti;\n• di avere visibilità e spazio sufficienti;\n• che il conducente del veicolo che precede non abbia segnalato l'intenzione di sorpassare;\n• che nessun veicolo che segue stia già effettuando il sorpasso;\n• che la carreggiata opposta sia libera per una distanza sufficiente.\n\nDurante il sorpasso il conducente deve azionare gli indicatori di direzione (freccia sinistra) — obbligatoriamente. Può anche usare il clacson o i lampeggi dei fari dove consentito.",

        "**15.2 – Sorpasso a destra**\n\nIl sorpasso a destra è consentito solo nei seguenti casi:\n• il conducente del veicolo che precede ha segnalato la propria intenzione di svoltare a sinistra e ha già iniziato la manovra;\n• su strade a senso unico il conducente che precede ha segnalato l'intenzione di svoltare a sinistra;\n• sorpasso di tram in movimento, solo se vi è spazio sufficiente a destra;\n• sorpasso di tram fermo alla fermata con isola salvagente (solo a destra dell'isola).",

        "**15.3 – Divieto di sorpasso**\n\nÈ vietato effettuare il sorpasso:\n• in curva e in prossimità di dossi su strade a doppio senso (anche per sorpassare trattori o animali);\n• in corrispondenza o in prossimità di incroci, salvo eccezioni;\n• in prossimità di passaggi a livello senza barriere o con soli segnali luminosi;\n• quando il veicolo precedente è già stato sorpassato da un altro veicolo;\n• quando ci si trovi in presenza di tram fermi privi di salvagente (lato sinistro);\n• quando il veicolo che precede abbia rallentato o si sia fermato per consentire ai pedoni di attraversare;\n• dove è presente la striscia di separazione continua o il segnale di divieto.",

        "**15.4 – Obbligo del veicolo sorpassato**\n\nIl conducente del veicolo che viene sorpassato deve:\n• non accelerare durante il sorpasso;\n• agevolare, per quanto possibile, la manovra di sorpasso;\n• tenersi verso il margine destro della carreggiata.",
      ],
      keyVerbs: [
        { italian: "effettuare il sorpasso a sinistra", persian: "از سمت چپ سبقت گرفتن", example: "Il sorpasso si effettua normalmente a sinistra. → سبقت معمولاً از سمت چپ انجام می‌شود." },
        { italian: "azionare gli indicatori di direzione", persian: "روشن کردن چراغ راهنما", example: "Prima del sorpasso bisogna azionare gli indicatori. → قبل از سبقت باید فرچه را روشن کرد." },
        { italian: "agevolare la manovra di sorpasso", persian: "تسهیل مانور سبقت", example: "Il veicolo sorpassato deve agevolare la manovra. → وسیله سبقت‌خورده باید مانور را تسهیل کند." },
        { italian: "non accelerare durante il sorpasso", persian: "هنگام سبقت خوردن شتاب نگرفتن", example: "Chi viene sorpassato non deve accelerare. → هر که سبقت می‌خورد نباید شتاب بگیرد." },
      ],
      highlights: [
        "Il sorpasso si effettua normalmente a sinistra.",
        "Prima del sorpasso: freccia sinistra OBBLIGATORIA.",
        "In curva su strade a doppio senso: sorpasso SEMPRE vietato.",
        "Il veicolo sorpassato non deve accelerare.",
        "Sorpasso a destra: solo in 4 casi specifici.",
      ],
      notes: [
        "★ فرچه چپ قبل از سبقت = اجباری (نه اختیاری!)",
        "★ سبقت در پیچ روی جاده دوطرفه = همیشه ممنوع، حتی از تراکتور!",
        "★ وسیله سبقت‌خورده نباید شتاب بگیرد.",
        "★ سبقت از راست: فقط ۴ حالت استثنایی.",
      ],
    },

    // ─── ترجمه فارسی متن اصلی ─────────────────────────────────────────────────
    {
      id: "15-0-traduzione-persiana",
      titleIt: "Traduzione Persiana del Testo Originale",
      titleFa: "🇮🇷 ترجمه فارسی متن اصلی فصل ۱۵",
      body: [
        "**۱۵.۱ – سبقت (ماده ۱۴۸ قانون راهنمایی)**\n\nسبقت عبارت است از رسیدن به ارتفاع یک وسیله، حیوان یا شخص در حال حرکت و سپس عبور از آن. سبقت معمولاً از سمت چپ انجام می‌شود. قبل از سبقت راننده باید مطمئن شود:\n• هیچ علامتی سبقت را ممنوع نکرده؛\n• دید و فضای کافی دارد؛\n• راننده جلویی قصد سبقت را اعلام نکرده؛\n• هیچ وسیله‌ای پشت سر در حال سبقت نیست؛\n• جاده مقابل برای فاصله کافی آزاد است.\n\nدر طول سبقت راننده باید فرچه چپ را روشن کند — اجباری. همچنین می‌توان از بوق یا چشمک چراغ استفاده کرد.",

        "**۱۵.۲ – سبقت از راست**\n\nسبقت از راست فقط در موارد زیر مجاز است:\n• راننده جلویی قصد پیچیدن به چپ را اعلام کرده و مانور را شروع کرده;\n• در خیابان یک‌طرفه راننده جلویی فرچه چپ داده و شروع کرده;\n• سبقت از تراموای در حرکت اگر فضای کافی در سمت راست باشد;\n• سبقت از تراموای ایستاده در ایستگاه با جزیره سالواجنته (فقط از سمت راست جزیره).",

        "**۱۵.۳ – ممنوعیت سبقت**\n\nسبقت ممنوع است:\n• در پیچ و نزدیکی برجستگی روی جاده‌های دوطرفه (حتی برای سبقت از تراکتور یا حیوان);\n• در تقاطع یا نزدیک آن، مگر استثناها;\n• نزدیکی گذرگاه ریلی بدون بند یا با فقط چراغ;\n• وقتی وسیله جلویی قبلاً توسط وسیله دیگری در حال سبقت خوردن است;\n• کنار تراموای ایستاده بدون جزیره (از چپ);\n• وقتی وسیله جلویی برای عابران ترمز کرده;\n• جایی که خط سفید ممتد یا تابلوی ممنوعیت وجود دارد.",

        "**۱۵.۴ – تکلیف وسیله سبقت‌خورده**\n\nراننده وسیله‌ای که سبقت می‌خورد باید:\n• در طول سبقت شتاب نگیرد;\n• تا حد ممکن مانور سبقت را تسهیل کند;\n• به سمت لبه راست جاده برود.",
      ],
    },

    // ─── تعریف و ۴ مرحله سبقت ──────────────────────────────────────────────
    {
      id: "15-1-definizione",
      titleIt: "15.1 – Il Sorpasso — Definizione e Fasi",
      titleFa: "۱۵.۱ – سبقت — تعریف و ۴ مرحله",
      body: [
        "**تعریف سبقت (Sorpasso):**\nسبقت مانوری است که از طریق آن یک وسیله از وسیله دیگری، یک حیوان یا عابری که در حرکت یا ایستاده است عبور می‌کند. سبقت **معمولاً از سمت چپ** انجام می‌شود.",
        "**۴ مرحله سبقت:**\n1️⃣ **ارزیابی شرایط** (valutazione delle condizioni) — دید، جاده، ترافیک\n2️⃣ **آماده‌سازی** (preparazione della manovra)\n3️⃣ **اجرای سبقت** (esecuzione del sorpasso)\n4️⃣ **بازگشت به خط** (rientro dal sorpasso)",
        "**قبل از سبقت، راننده باید مطمئن شود:**\n• هیچ تابلویی سبقت را ممنوع نکرده باشد\n• دید و شرایط جاده کافی هستند\n• عرض جاده برای مانور کافی است\n• راننده جلویی در همان خط قصد سبقت ندارد\n• هیچ وسیله‌ای پشتی سبقت را شروع نکرده باشد\n• جاده برای مسافت کافی آزاد باشد",
        "**هنگام سبقت:**\n• 🔶 فرچه چپ روشن کنید — **اجباری**\n• 🔊 می‌توان بوق زد (جایی که مجاز باشد)\n• 💡 می‌توان چراغ چشمک بزنید (lampeggio)\n\n**بازگشت به خط:**\n• در کوتاه‌ترین زمان ممکن به سمت راست بازگردید\n• بدون مانور ناگهانی\n• وقتی وسیله سبقت‌خورده را از آینه داخلی می‌بینید می‌توانید برگردید",
      ],
      keyVerbs: [
        { italian: "sorpassare normalmente a sinistra", persian: "معمولاً از سمت چپ سبقت گرفتن", example: "Il sorpasso si effettua normalmente a sinistra. → سبقت معمولاً از سمت چپ انجام می‌شود." },
        { italian: "azionare l'indicatore di direzione", persian: "روشن کردن چراغ راهنما", example: "Deve azionare l'indicatore di direzione prima di sorpassare. → قبل از سبقت باید چراغ راهنما را روشن کنید." },
        { italian: "agevolare la manovra", persian: "تسهیل مانور سبقت", example: "Il veicolo sorpassato deve agevolare la manovra. → وسیله‌ای که سبقت می‌خورد باید مانور را تسهیل کند." },
      ],
    },

    // ─── سبقت از سمت راست ──────────────────────────────────────────────────
    {
      id: "15-2-destra",
      titleIt: "Il Sorpasso a Destra",
      titleFa: "سبقت از راست — موارد مجاز استثنایی",
      body: [
        "سبقت از راست در شرایط **خاص و محدود** مجاز است:\n\n| حالت | توضیح |\n|------|-------|\n| **A** | راننده جلویی قصد دارد **به چپ بپیچد** و مانور را شروع کرده |\n| **B** | در **خیابان یک‌طرفه**، راننده جلویی فرچه چپ داده و شروع کرده |\n| **C** | سبقت از **تراموای در حرکت** (اگر عرض جاده سمت راست کافی باشد) |\n| **D** | تراموای ایستاده + **salvagente** (جزیره عابر) وجود داشته باشد |",
      ],
      keyVerbs: [
        { italian: "il sorpasso a destra è consentito solo in casi specifici", persian: "سبقت از راست فقط در موارد خاص مجاز است", example: "Il sorpasso a destra è consentito solo in casi specifici. → سبقت از راست فقط در موارد خاص مجاز است." },
      ],
    },

    // ─── موارد ممنوع سبقت ──────────────────────────────────────────────────
    {
      id: "15-3-divieti",
      titleIt: "Divieto di Sorpasso",
      titleFa: "ممنوعیت‌های سبقت",
      body: [
        "🚫 **سبقت ممنوع است در این موارد:**\n\n| مکان/شرایط | توضیح |\n|------------|-------|\n| **پیچ و برجستگی** (curve e dossi) | روی جاده‌های دو خطه دوطرفه — حتی برای تراکتور یا حیوان |\n| **تقاطع غیرچراغ‌دار** | مگر استثناها (دوچرخه، راننده چپ‌گرد، سمافوردار) |\n| **گذرگاه ریلی** (passaggi a livello) | بدون باریره یا با فقط چراغ |\n| **وسیله دیگری در حال سبقت** | اگر لازم باشد باند مقابل اشغال شود |\n| **دید ناکافی** | هر زمان که دید کافی نیست |\n| **تراموای ایستاده بدون جزیره** | از سمت چپ |\n| **وسیله ترمز کرده برای عابران** | حتی خارج از خط‌کشی |\n| **خط ممتد سفید** | یا تابلوی ممنوعیت سبقت |\n| **وسیله پشتی شروع کرده** | اگر راننده پشت سر فرچه سبقت داده |",
        "⚠️ **استثناهای سبقت در تقاطع مجاز است اگر:**\n1. وسیله جلویی دوچرخه باشد و باند مقابل اشغال نشود\n2. تقاطع با سمافور یا مامور کنترل شود\n3. راننده جلویی فرچه چپ داده (→ سبقت از راست)",
      ],
      keyVerbs: [
        { italian: "è vietato il sorpasso", persian: "سبقت ممنوع است", example: "In prossimità delle curve è vietato il sorpasso. → در نزدیکی پیچ‌ها سبقت ممنوع است." },
        { italian: "invadere la semicarreggiata opposta", persian: "تجاوز به نیمه جاده مقابل", example: "È vietato sorpassare se si invade la semicarreggiata opposta. → سبقت ممنوع است اگر باید نیمه جاده مقابل را اشغال کنید." },
      ],
    },

    // ─── خطرات سبقت ────────────────────────────────────────────────────────
    {
      id: "15-4-pericolo",
      titleIt: "Pericolosità del Sorpasso",
      titleFa: "خطرات سبقت‌گیری",
      body: [
        "**سبقت یکی از خطرناک‌ترین مانورهاست** — خطرات اصلی:\n\n• **تصادف جانبی** هنگام کنار هم قرار گرفتن (urto laterale)\n• **تصادف روبرویی** با وسیله از جهت مخالف (urto frontale)\n• **تصادف هنگام بازگشت** با وسیله سبقت‌خورده\n• **تصادف با وسیله اشتباهی** که هم قصد سبقت دارد\n\n⚡ **عوامل افزایش فضای لازم برای سبقت:**\n• وسیله جلویی شتاب می‌گیرد\n• اختلاف سرعت دو وسیله کم است\n• باید از ستون چند وسیله سبقت گرفت\n• وسیله‌ها بلند هستند",
      ],
      keyVerbs: [
        { italian: "valutare attentamente prima dell'esecuzione", persian: "قبل از اجرا به دقت ارزیابی کردن", example: "Il sorpasso deve essere attentamente valutato. → سبقت باید به دقت ارزیابی شود." },
      ],
    },

    // ─── خلاصه و نکات کلیدی ──────────────────────────────────────────────────
    {
      id: "15-5-riassunto",
      titleIt: "Riassunto — Punti Chiave del Capitolo 15",
      titleFa: "خلاصه — نکات کلیدی فصل ۱۵",
      body: [
        "**نمودار ذهنی فصل ۱۵:**\n\n```\nسبقت\n├── معمولاً از چپ\n├── فرچه چپ = اجباری\n├── سبقت از راست → فقط ۴ حالت\n├── ممنوع در:\n│   ├── پیچ/برجستگی (جاده دوطرفه) ← مطلق!\n│   ├── تقاطع (مگر استثنا)\n│   ├── گذرگاه ریلی\n│   ├── خط ممتد\n│   └── وسیله ترمز کرده برای عابر\n└── وسیله سبقت‌خورده: نباید شتاب بگیرد\n```\n\n**جدول مقایسه سریع:**\n\n| موضوع | قانون |\n|-------|-------|\n| جهت عادی سبقت | از چپ |\n| فرچه قبل از سبقت | اجباری |\n| سبقت در پیچ (دوطرفه) | همیشه ممنوع |\n| سبقت در تقاطع | ممنوع (با استثنا) |\n| وسیله سبقت‌خورده | نباید شتاب بگیرد |\n| سبقت از تراموا در حرکت | از راست (اگر فضا باشد) |",
      ],
      keyVerbs: [
        { italian: "rispettare le norme sul sorpasso", persian: "رعایت قوانین سبقت", example: "Tutti i conducenti devono rispettare le norme sul sorpasso. → همه رانندگان باید قوانین سبقت را رعایت کنند." },
      ],
    },

  ],
};
