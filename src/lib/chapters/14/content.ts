// ─────────────────────────────────────────────────────────────────────────────
//  CAPITOLO 14 – محتوای آموزشی (ترجمه فارسی)
//  منبع: صفحات ۱۷۰–۱۷۴ کتاب پاتنته B
// ─────────────────────────────────────────────────────────────────────────────

import type { ChapterContent } from "@/lib/chapters/20/content";

export const chapter14Content: ChapterContent = {
  chapter: 14,
  titleIt: "Ordine di Precedenza nelle Intersezioni",
  titleFa: "اولویت عبور در تقاطع‌ها",
  pageRange: "ص ۱۷۰–۱۷۴",
  summary: "این فصل قوانین اولویت عبور در تقاطع‌ها را توضیح می‌دهد: قانون راست (Destra Libera)، علائم STOP و Dare Precedenza، اولویت همیشگی تراموا، تکلیف هنگام چرخش به چپ، و روش حل تمرین‌های ترتیب عبور. درک این فصل برای آزمون نظری بسیار حیاتی است.",
  sections: [

    // ─── متن اصلی ایتالیایی ───────────────────────────────────────────────────
    {
      id: "14-0-testo-italiano",
      titleIt: "Testo Originale – Capitolo 14",
      titleFa: "📖 متن اصلی ایتالیایی فصل ۱۴",
      body: [
        "**14.1 – Regola generale della precedenza (Art. 145 C.d.S.)**\n\nNei casi in cui non sia diversamente stabilito dalla segnaletica stradale, il conducente deve dare la precedenza ai veicoli provenienti da destra. Questa regola si applica quando due veicoli si avvicinano allo stesso incrocio contemporaneamente e le loro traiettorie si incrociano o potrebbero incrociarsi.",

        "**14.2 – Segnali di precedenza**\n\n• **STOP**: obbligo di fermarsi completamente prima di immettersi nella strada con precedenza; il conducente deve cedere il passo a tutti i veicoli e ai pedoni.\n• **Dare Precedenza** (triangolo rosso): obbligo di cedere il passo a tutti i veicoli e pedoni sulla strada con precedenza; non è obbligatorio fermarsi se non è necessario.\n• **Strada con precedenza** (rombo giallo): segnala che si percorre la strada con diritto di precedenza.\n• **Fine della precedenza**: indica la fine della strada con diritto di precedenza.",

        "**14.3 – Precedenza del tram**\n\nIl tram ha sempre la precedenza sugli altri veicoli, anche se questi ultimi provengono da destra. Questa regola si applica a tutti gli incroci non regolati da semafori, a meno che la segnaletica non disponga diversamente. Il motivo è che il tram si muove su rotaie e non può deviare.",

        "**14.4 – Svolta a sinistra all'incrocio**\n\nChi svolta a sinistra deve cedere la precedenza ai veicoli che vengono in senso contrario e procedono diritto o svoltano a destra. Questa regola si applica indipendentemente da chi ha la precedenza secondo la regola della destra. Due veicoli che svoltano entrambi a sinistra (provenienti da sensi opposti) possono passare contemporaneamente, ciascuno passando al di là del centro dell'incrocio.",

        "**14.5 – Determinazione dell'ordine di transito**\n\nPer determinare l'ordine in cui i veicoli devono attraversare l'incrocio:\n1. Verificare se ci sono segnali (STOP o Dare Precedenza): il veicolo con tali segnali deve aspettare.\n2. Verificare se è presente un tram: il tram ha sempre la precedenza.\n3. Applicare la regola della destra.\n4. Chi svolta a sinistra cede ai veicoli che procedono dritti o svoltano a destra dalla direzione opposta.",
      ],
      keyVerbs: [
        { italian: "dare la precedenza ai veicoli da destra", persian: "تقدم دادن به وسایل از راست", example: "Il conducente deve dare la precedenza ai veicoli provenienti da destra. → راننده باید به وسایل از راست تقدم دهد." },
        { italian: "fermarsi allo STOP", persian: "توقف کامل در STOP", example: "Al segnale STOP è obbligatorio fermarsi completamente. → در علامت STOP توقف کامل اجباری است." },
        { italian: "cedere il passo al tram", persian: "تقدم دادن به تراموا", example: "Il tram ha sempre la precedenza, bisogna cedergli il passo. → تراموا همیشه اولویت دارد، باید به آن راه داد." },
        { italian: "svoltare a sinistra cedendo ai contrari", persian: "چرخش به چپ با تقدم به مقابلی‌ها", example: "Chi svolta a sinistra deve cedere ai veicoli contrari. → هر که به چپ می‌چرخد باید به وسایل مقابل تقدم دهد." },
      ],
      highlights: [
        "Nei casi senza segnaletica: precedenza al veicolo proveniente da destra.",
        "Il tram ha SEMPRE la precedenza sugli altri veicoli all'incrocio.",
        "STOP: fermata completa obbligatoria + precedenza a tutti.",
        "Dare Precedenza: cedere il passo ma non è obbligatorio fermarsi se non necessario.",
        "Chi svolta a sinistra cede ai veicoli in senso contrario.",
      ],
      notes: [
        "★ ترتیب اولویت: STOP/Dare Precedenza → تراموا → قانون راست → چرخش به چپ",
        "★ تراموا حتی از چپ هم اولویت دارد!",
        "★ STOP = توقف کامل حتی اگر جاده خالی باشد.",
        "★ چرخش به چپ = تقدم به مقابلی‌ها حتی اگر قانون راست داشته باشید.",
      ],
    },

    // ─── ترجمه فارسی متن اصلی ─────────────────────────────────────────────────
    {
      id: "14-0-traduzione-persiana",
      titleIt: "Traduzione Persiana del Testo Originale",
      titleFa: "🇮🇷 ترجمه فارسی متن اصلی فصل ۱۴",
      body: [
        "**۱۴.۱ – قانون کلی تقدم (ماده ۱۴۵ قانون راهنمایی)**\n\nدر مواردی که با علائم رانندگی تعیین نشده باشد، راننده باید به وسایل از سمت راست تقدم دهد. این قانون زمانی اجرا می‌شود که دو وسیله همزمان به یک تقاطع نزدیک می‌شوند و مسیرهایشان تلاقی دارد یا ممکن است داشته باشد.",

        "**۱۴.۲ – علائم تقدم**\n\n• **STOP**: اجبار به توقف کامل قبل از ورود به جاده اصلی؛ راننده باید به همه وسایل و عابران تقدم دهد.\n• **Dare Precedenza** (مثلث قرمز): اجبار به دادن تقدم به همه وسایل و عابران جاده اصلی؛ اگر ضرورتی نباشد توقف کامل اجباری نیست.\n• **جاده اولویت‌دار** (لوزی زرد): نشان می‌دهد شما روی جاده‌ای هستید که حق تقدم دارد.\n• **پایان اولویت**: پایان جاده اولویت‌دار را نشان می‌دهد.",

        "**۱۴.۳ – اولویت تراموا**\n\nتراموا همیشه بر سایر وسایل نقلیه اولویت دارد، حتی اگر آن وسایل از سمت راست بیایند. این قانون در تمام تقاطع‌هایی اجرا می‌شود که توسط سمافور کنترل نمی‌شوند، مگر علائم دیگری باشد. دلیل این است که تراموا روی ریل حرکت می‌کند و نمی‌تواند منحرف شود.",

        "**۱۴.۴ – چرخش به چپ در تقاطع**\n\nهر که به چپ می‌چرخد باید به وسایلی که از جهت مخالف می‌آیند و مستقیم می‌روند یا به راست می‌چرخند تقدم دهد. این قانون بدون توجه به اینکه طبق قانون راست چه کسی اولویت دارد اجرا می‌شود. دو وسیله که هر دو از جهات مخالف به چپ می‌چرخند می‌توانند همزمان عبور کنند، هر کدام از کنار مرکز تقاطع رد می‌شوند.",

        "**۱۴.۵ – تعیین ترتیب عبور**\n\nبرای تعیین ترتیب عبور وسایل:\n۱. بررسی علائم (STOP یا Dare Precedenza): وسیله‌ای که چنین علامتی دارد باید صبر کند.\n۲. بررسی وجود تراموا: تراموا همیشه اولویت دارد.\n۳. اجرای قانون راست.\n۴. هر که به چپ می‌چرخد به وسایل مقابل مستقیم یا راست‌گرد تقدم می‌دهد.",
      ],
    },

    // ─── قانون اساسی اولویت ────────────────────────────────────────────────
    {
      id: "14-1-regola-destra",
      titleIt: "14.1 – La Regola della Destra Libera",
      titleFa: "۱۴.۱ – قانون تقدم از سمت راست",
      body: [
        "**قانون اساسی در تقاطع بدون علامت:**\nدر تقاطعی که هیچ علامت اولویتی وجود ندارد، راننده ملزم است به **وسیله‌ای که از سمت راست می‌آید** تقدم بدهد.\n\n> ⬛ مفهوم **Destra Libera** (راست آزاد): وقتی هیچ وسیله‌ای از راست شما نمی‌آید، شما اولویت دارید.",
        "**ترتیب اولویت در تقاطع (از بالا به پایین):**\n\n| اولویت | شرایط |\n|--------|------|\n| 1️⃣ | **علائم STOP و Dare Precedenza** — همیشه اجباری |\n| 2️⃣ | **تراموا (tram)** — همیشه بر وسایل عادی تقدم دارد |\n| 3️⃣ | **قانون راست (destra libera)** — وقتی علامت یا تراموا نیست |\n| 4️⃣ | **چرخش به چپ** — هر که به چپ می‌چرخد باید به مقابلی‌ها تقدم دهد |",
      ],
      keyVerbs: [
        { italian: "dare la precedenza al veicolo da destra", persian: "تقدم دادن به وسیله از سمت راست", example: "Si deve dare la precedenza al veicolo che proviene da destra. → باید به وسیله‌ای که از سمت راست می‌آید تقدم داد." },
        { italian: "la destra è libera", persian: "راست آزاد است", example: "Se la destra è libera, il conducente può procedere. → اگر راست آزاد باشد، راننده می‌تواند ادامه دهد." },
      ],
    },

    // ─── علائم اولویت ──────────────────────────────────────────────────────
    {
      id: "14-2-segnali",
      titleIt: "Segnali di Precedenza",
      titleFa: "علائم اولویت",
      body: [
        "| علامت | نام ایتالیایی | معنی |\n|-------|--------------|------|\n| 🔴✋ | **STOP** (Stop e Precedenza) | توقف کامل اجباری — سپس تقدم به همه |\n| 🔺 | **Dare Precedenza** (مثلث قرمز) | تقدم به همه (توقف اجباری نیست) |\n| 🟡⬦ | **Precedenza** (لوزی زرد) | شما روی جاده اولویت‌دار هستید |\n| 🏁 | **Fine Precedenza** | پایان جاده اولویت‌دار |",
        "**تفاوت STOP و Dare Precedenza:**\n\n• **STOP** — توقف کامل اجباری، حتی اگر جاده خالی باشد. بعد از توقف، کامل مطمئن شو و بعد حرکت کن.\n• **Dare Precedenza** (مثلث) — لازم نیست کامل توقف کنی، اما اگر لازم بود توقف کن. باید تقدم بدهی.\n\n⚠️ **نکته مهم:** هر دو علامت قانون راست را نقض می‌کنند — باید به **همه** وسایل روی جاده اصلی تقدم داد.",
      ],
      keyVerbs: [
        { italian: "fermarsi completamente allo STOP", persian: "کامل توقف کردن در STOP", example: "Al segnale di STOP è obbligatorio fermarsi completamente. → در علامت STOP توقف کامل اجباری است." },
        { italian: "cedere il passo", persian: "تقدم دادن / راه دادن", example: "Con il segnale 'Dare Precedenza' si deve cedere il passo. → با علامت Dare Precedenza باید راه داد." },
      ],
    },

    // ─── تراموا ─────────────────────────────────────────────────────────────
    {
      id: "14-3-tram",
      titleIt: "Precedenza del Tram",
      titleFa: "اولویت تراموا",
      body: [
        "🚃 **تراموا همیشه اولویت دارد!**\n\nتراموا در تقاطع‌ها بر همه وسایل نقلیه عادی تقدم دارد (مگر سمافور مخالف باشد).\n\n**دلیل:** تراموا روی ریل حرکت می‌کند و نمی‌تواند منحرف شود — پس دیگران باید به آن راه بدهند.\n\n**مثال:** اگر شما قانون راست داشته باشید اما تراموا از چپ بیاید، **تراموا اولویت دارد** نه شما.",
      ],
      keyVerbs: [
        { italian: "il tram ha sempre la precedenza", persian: "تراموا همیشه اولویت دارد", example: "Il tram ha sempre la precedenza sugli altri veicoli agli incroci. → تراموا در تقاطع‌ها همیشه بر سایر وسایل اولویت دارد." },
      ],
    },

    // ─── چرخش به چپ ────────────────────────────────────────────────────────
    {
      id: "14-4-svolta-sinistra",
      titleIt: "Svolta a Sinistra all'Incrocio",
      titleFa: "چرخش به چپ در تقاطع",
      body: [
        "↰ **قوانین چرخش به چپ:**\n\nهر که به چپ می‌چرخد باید به **وسایل مقابل** (که مستقیم یا به راست می‌روند) تقدم بدهد — حتی اگر قانون راست داشته باشد!\n\n**مراحل چرخش به چپ:**\n1. چراغ راهنمای چپ را روشن کنید\n2. به **مرکز تقاطع** بروید\n3. منتظر مطمئن شدن از ایمنی باشید\n4. چرخش را کامل کنید",
        "**دو وسیله هر دو به چپ می‌چرخند (از روبرو):**\nاگر هر دو وسیله از جهات مخالف قصد چرخش به چپ دارند، می‌توانند **همزمان** عبور کنند — هر کدام مرکز تقاطع را بین خود نگه می‌دارند و از کنار هم رد می‌شوند.",
        "**تعیین ترتیب عبور — مثال عملی:**\n\nفرض کنید سه وسیله A، N، R در تقاطع:\n- N باید به A تقدم دهد (A از راست N می‌آید)\n- N اولویت بر R دارد (R از چپ N می‌آید)\n\n→ ترتیب: **A → N → R**\n\n💡 همیشه اول مشخص کنید کدام وسیله سمت راست کدام قرار دارد، سپس ترتیب را تعیین کنید.",
      ],
      keyVerbs: [
        { italian: "portarsi al centro dell'incrocio", persian: "به مرکز تقاطع رفتن", example: "Per svoltare a sinistra bisogna portarsi al centro dell'incrocio. → برای چرخش به چپ باید به مرکز تقاطع رفت." },
        { italian: "cedere ai veicoli in senso opposto", persian: "تقدم دادن به وسایل مقابل", example: "Chi svolta a sinistra deve cedere ai veicoli che vengono in senso opposto. → هر که به چپ می‌چرخد باید به وسایل مقابل تقدم دهد." },
      ],
    },

    // ─── مشق‌های تقاطع ─────────────────────────────────────────────────────
    {
      id: "14-5-esercizi",
      titleIt: "Come Risolvere gli Esercizi degli Incroci",
      titleFa: "روش حل تمرین‌های تقاطع",
      body: [
        "📝 **روش گام‌به‌گام حل تمرین تقاطع:**\n\n1. **اول:** آیا هر وسیله علامت STOP یا Dare Precedenza دارد؟ → آن‌ها آخر می‌گذرند\n2. **دوم:** آیا تراموا هست؟ → تراموا اول می‌گذرد\n3. **سوم:** قانون راست را اجرا کن — هر وسیله که از سمت راست دیگری می‌آید، زودتر می‌گذرد\n4. **چهارم:** آیا وسیله‌ای به چپ می‌چرخد؟ → باید به مقابلی‌ها تقدم دهد\n5. **در صورت تساوی:** یک نفر داوطلبانه عقب می‌نشیند",
        "⚠️ **نکات مهم آزمون:**\n• سرعت وسایل در آزمون روی کاغذ مهم نیست — فقط قوانین را اجرا کنید\n• در واقعیت، سرعت و موقعیت پویا (dinamica) هم مهم‌اند\n• وقتی می‌گویند «دسترسی از جاده اصلی» — آن وسیله همیشه اولویت دارد\n• خروج از پارکینگ یا پاس کاررابیله = تقدم به همه وسایل روی جاده عمومی",
      ],
      keyVerbs: [
        { italian: "determinare l'ordine di transito", persian: "تعیین ترتیب عبور", example: "Bisogna determinare l'ordine di transito applicando le regole di precedenza. → باید ترتیب عبور را با اجرای قوانین اولویت تعیین کرد." },
      ],
    },

    // ─── خلاصه و نکات کلیدی ──────────────────────────────────────────────────
    {
      id: "14-6-riassunto",
      titleIt: "Riassunto — Punti Chiave del Capitolo 14",
      titleFa: "خلاصه — نکات کلیدی فصل ۱۴",
      body: [
        "**نمودار ذهنی فصل ۱۴:**\n\n```\nتقاطع — ترتیب اولویت\n├── 1. STOP / Dare Precedenza → آن وسیله آخر\n├── 2. تراموا → همیشه اول (حتی از چپ)\n├── 3. قانون راست → وسیله از راست اول\n└── 4. چرخش به چپ → مقابلی‌ها اول\n```\n\n**جدول سریع تفاوت‌های مهم:**\n\n| موضوع | STOP | Dare Precedenza |\n|-------|------|-----------------|\n| توقف کامل | ✅ اجباری | ❌ اجباری نیست |\n| تقدم به همه | ✅ | ✅ |\n| نقض قانون راست | ✅ | ✅ |\n\n**نکات طلایی آزمون:**\n- اگر تراموا باشد → **تراموا اول** (حتی اگر از چپ بیاید)\n- اگر STOP داری → **توقف کامل** حتی جاده خالی\n- اگر به چپ می‌چرخی → **وسایل مقابل اول** (حتی اگر قانون راست داری)\n- دو تا به چپ از روبرو → **همزمان** می‌توانند بگذرند",
      ],
      keyVerbs: [
        { italian: "rispettare la precedenza all'incrocio", persian: "رعایت تقدم در تقاطع", example: "Bisogna sempre rispettare la precedenza all'incrocio. → همیشه باید تقدم در تقاطع را رعایت کرد." },
      ],
    },

  ],
};
