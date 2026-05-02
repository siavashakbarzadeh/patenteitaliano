// ─────────────────────────────────────────────────────────────────────────────
//  CAPITOLO 16 – محتوای آموزشی (ترجمه فارسی)
//  منبع: صفحات ۱۸۴–۱۹۳ کتاب پاتنته B
// ─────────────────────────────────────────────────────────────────────────────

import type { ChapterContent } from "@/lib/chapters/20/content";

export const chapter16Content: ChapterContent = {
  chapter: 16,
  titleIt: "Fermata – Sosta – Arresto e Partenza",
  titleFa: "توقف کوتاه – پارک – ایست و حرکت",
  pageRange: "ص ۱۸۴–۱۹۳",
  summary: "این فصل قوانین توقف و پارک خودرو را توضیح می‌دهد: تفاوت Arresto، Fermata و Sosta، احتیاط‌های قبل از حرکت، موقعیت صحیح توقف، ممنوعیت‌های توقف در پیچ/خط‌کشی/تقاطع/پیاده‌رو، و قوانین باز کردن در خودرو.",
  sections: [

    // ─── متن اصلی ایتالیایی ───────────────────────────────────────────────────
    {
      id: "16-0-testo-italiano",
      titleIt: "Testo Originale – Capitolo 16",
      titleFa: "📖 متن اصلی ایتالیایی فصل ۱۶",
      body: [
        "**Art. 157 – Fermata e sosta**\n\nFermata: breve interruzione della marcia con conducente a bordo pronto a ripartire — non deve arrecare intralcio alla circolazione.\nSosta: interruzione prolungata — il conducente può allontanarsi dal veicolo.\nArresto: interruzione involontaria o forzata (semaforo rosso, traffico).\n\nIl veicolo deve essere collocato il più vicino possibile al margine destro della carreggiata, parallelamente ad esso. Nelle strade a senso unico è consentita anche a sinistra. Se non esiste marciapiede, lasciare almeno 1 metro per i pedoni.",
        "**Art. 158 – Divieti di fermata e sosta**\n\nÈ vietato fermarsi o sostare:\n• in corrispondenza o in prossimità di curve, dossi o strettoie;\n• in prossimità di incroci (meno di 5 m);\n• sulle strisce pedonali e nelle aree destinate ai pedoni;\n• in corrispondenza di segnali stradali o semaforici;\n• sulle corsie riservate ai veicoli di servizio pubblico;\n• sui binari tranviari o in modo da ostacolarne il transito;\n• nelle gallerie e nei sottovia;\n• sulle corsie di accelerazione e decelerazione;\n• sui marciapiedi (salvo autorizzazioni).",
        "**Apertura delle portiere**: Prima di aprire una portiera, il conducente deve assicurarsi, anche tramite lo specchietto retrovisore, che non sopraggiungano veicoli o altri utenti. È vietato aprire le portiere in modo da arrecare intralcio o pericolo agli altri utenti.",
      ],
      keyVerbs: [
        { italian: "la fermata non deve arrecare intralcio", persian: "توقف نباید مانع جریان ترافیک شود", example: "La fermata non deve arrecare intralcio alla circolazione. → توقف نباید مانع جریان ترافیک شود." },
        { italian: "parallelamente al margine destro", persian: "موازی با لبه راست", example: "Il veicolo deve essere collocato parallelamente al margine destro. → وسیله باید موازی با لبه راست قرار گیرد." },
      ],
      highlights: [
        "Fermata: conducente a bordo pronto a ripartire.",
        "Sosta: conducente può allontanarsi.",
        "Arresto: involontario (semaforo rosso).",
        "In assenza di marciapiede: lasciare almeno 1 metro per i pedoni.",
        "Vietato fermarsi a meno di 5 m dagli incroci.",
      ],
      notes: [
        "★ Arresto = اجباری (چراغ قرمز). Fermata = ارادی کوتاه. Sosta = ارادی بلند.",
        "★ فاصله از تقاطع: حداقل ۵ متر.",
        "★ بدون پیاده‌رو: حداقل ۱ متر برای عابر.",
        "★ باز کردن در: همیشه از آینه بررسی کنید.",
      ],
    },

    // ─── ترجمه فارسی ──────────────────────────────────────────────────────────
    {
      id: "16-0-traduzione-persiana",
      titleIt: "Traduzione Persiana – Capitolo 16",
      titleFa: "🇮🇷 ترجمه فارسی متن اصلی فصل ۱۶",
      body: [
        "**ماده ۱۵۷ – توقف و پارک**\n\nFermata: توقف کوتاه با راننده حاضر برای حرکت — نباید مانع جریان ترافیک شود.\nSosta: توقف طولانی — راننده می‌تواند از وسیله دور شود.\nArresto: توقف اجباری (چراغ قرمز، ترافیک).\n\nوسیله باید تا حد ممکن نزدیک به لبه راست جاده و موازی با آن قرار گیرد. در خیابان‌های یک‌طرفه از سمت چپ هم مجاز است. اگر پیاده‌رو نیست، باید حداقل ۱ متر برای عابران باقی بگذارید.",
        "**ماده ۱۵۸ – ممنوعیت‌های توقف و پارک**\n\nتوقف و پارک ممنوع است:\n• در پیچ، برجستگی یا تنگنا؛\n• نزدیک تقاطع (کمتر از ۵ متر)؛\n• روی خط‌کشی عابر و مناطق عابران؛\n• مقابل علائم و چراغ راهنمایی؛\n• روی خطوط اختصاصی سرویس عمومی؛\n• روی ریل تراموا یا مانع آن؛\n• در تونل‌ها و زیرگذرها؛\n• روی خطوط شتاب و کاهش سرعت؛\n• روی پیاده‌رو (مگر با مجوز).",
        "**باز کردن در**: قبل از باز کردن در، راننده باید از آینه مطمئن شود هیچ وسیله یا کاربری نمی‌آید. باز کردن در به‌گونه‌ای که مانع یا خطر برای دیگران باشد ممنوع است.",
      ],
    },

    // ─── 16.1 Cautele alla Partenza ──────────────────────────────────────────
    {
      id: "16-1-partenza",
      titleIt: "16.1 – Cautele alla Partenza del Veicolo",
      titleFa: "۱۶.۱ – احتیاط‌های قبل از حرکت",
      body: [
        "قبل از شروع رانندگی، راننده باید موارد زیر را بررسی کند:\n\n1. **داشتن گواهینامه مناسب** (categoria di patente idonea) برای وسیله‌ای که می‌رانَد\n2. **کارکرد کامل وسیله** (perfetta efficienza del mezzo) — بررسی فرمان، ترمز، چراغ‌ها\n3. **همراه داشتن اسناد لازم** برای رانندگی:\n   - **Carta di circolazione** — کارت خودرو\n   - **Certificato di assicurazione** — بیمه‌نامه\n   - **Patente di guida in corso di validità** — گواهینامه معتبر",
        "**اطمینان درباره اشیاء حمل شده:**\n• اشیاء نباید بیفتند یا پراکنده شوند (caduta o dispersione)\n• دیدگاه جلو، عقب و کناری راننده را محدود نکنند\n• مسافران را در معرض خطر قرار ندهند (به‌ویژه به خاطر بار نادرست قرار گرفته)",
        "**درباره مسافران:**\n• همه مسافران باید کمربند ایمنی را بسته باشند (به ویژه اطفال)\n• پشتی صندلی (poggiatesta) باید درست تنظیم شده باشد\n• آینه‌های جانبی و داخلی را تنظیم کنید (specchi retrovisori)\n\n🏍️ **روی موتورسیکلت:** راننده باید جایگاه درستی داشته باشد و کلاه ایمنی اجباری است (casco obbligatorio).",
      ],
      keyVerbs: [
        { italian: "verificare la perfetta efficienza", persian: "کارکرد کامل را بررسی کردن", example: "Verificare la perfetta efficienza del mezzo prima di partire. → کارکرد کامل وسیله را قبل از حرکت بررسی کنید." },
        { italian: "avere con sé i documenti", persian: "اسناد را همراه داشتن", example: "Il conducente deve avere con sé i documenti necessari. → راننده باید اسناد لازم را همراه داشته باشد." },
        { italian: "indossare il casco", persian: "کلاه ایمنی پوشیدن", example: "Su un motociclo è obbligatorio indossare il casco. → روی موتورسیکلت پوشیدن کلاه ایمنی اجباری است." },
      ],
    },

    // ─── 16.2 Definizioni: Arresto, Fermata, Sosta ───────────────────────────
    {
      id: "16-2-definizioni",
      titleIt: "16.2 – Arresto, Fermata e Sosta — تعاریف",
      titleFa: "۱۶.۲ – تعاریف: ایست، توقف کوتاه و پارک",
      body: [
        "| اصطلاح ایتالیایی | معادل فارسی | تعریف |\n|---|---|---|\n| **Arresto** | ایست اجباری | توقف ناگهانی به دلیل شرایط ترافیک — مثل چراغ قرمز. اختیاری نیست. |\n| **Fermata** | توقف کوتاه | توقف کوتاه‌مدت ارادی — برای سوار/پیاده کردن مسافر یا ضرورت کوتاه. راننده باید حاضر باشد. |\n| **Sosta** | پارک کردن | توقف بلند‌مدت ارادی — راننده می‌تواند وسیله را ترک کند. |\n| **Sosta di emergenza** | پارک اضطراری | توقف اجباری به دلیل خرابی یا حال بد راننده/مسافر. |",
        "**ویژگی‌های Fermata (توقف کوتاه):**\n• کاملاً کوتاه‌مدت (brevissima durata)\n• راننده باید حاضر و آماده حرکت باشد\n• نباید مانع جریان ترافیک شود (non deve arrecare intralcio)\n\n**ویژگی‌های Sosta (پارک):**\n• مدت نامحدود\n• راننده می‌تواند وسیله را ترک کند\n• باید در مکان‌های مجاز انجام شود",
      ],
      keyVerbs: [
        { italian: "arrecare intralcio alla circolazione", persian: "مانع جریان ترافیک شدن", example: "La fermata non deve arrecare intralcio alla circolazione. → توقف کوتاه نباید مانع جریان ترافیک شود." },
        { italian: "allontanarsi dal veicolo", persian: "از وسیله دور شدن", example: "Nella sosta il conducente può allontanarsi dal veicolo. → در پارک کردن، راننده می‌تواند از وسیله دور شود." },
      ],
    },

    // ─── Posizione di Fermata e Sosta ─────────────────────────────────────────
    {
      id: "16-3-posizione",
      titleIt: "Posizione corretta di Fermata e Sosta",
      titleFa: "موقعیت صحیح توقف و پارک",
      body: [
        "📍 **موقعیت صحیح:**\n• تا حد ممکن نزدیک به **حاشیه سمت راست** جاده (margine destro della carreggiata)\n• **موازی** با حاشیه جاده (parallelamente ad esso)\n• استثنا: در خیابان‌های یک‌طرفه می‌توان سمت چپ هم پارک کرد (سمت داشتن تابلو)\n\n📏 **فضا برای عابر پیاده:**\n• اگر پیاده‌رو وجود ندارد، باید حداقل **۱ متر** فضا برای عابر پیاده باقی بگذارید\n\n🏙️ **شهر vs خارج شهر:**\n• داخل شهر: در خطوط مشخص شده (stalli) پارک کنید\n• خارج شهر: خارج از جاده یا در جایگاه‌های مشخص",
        "🚪 **باز کردن در خودرو (Apertura delle portiere):**\n• کاملاً ممنوع است درِ خودرو را باز کنید اگر به دیگران آسیب برسد\n• قبل از باز کردن در: از آینه (specchietto retrovisore) بررسی کنید\n• بررسی کنید که هیچ خودرو یا موتوری از پشت نمی‌آید\n• در خیابان باریک: هم به سمت پیاده‌رو هم به خودروها توجه کنید\n• در خیابان یک‌طرفه: سمت چپ هم چک کنید",
      ],
      keyVerbs: [
        { italian: "il più vicino possibile al margine destro", persian: "تا حد ممکن نزدیک به حاشیه سمت راست", example: "Il veicolo deve essere collocato il più vicino possibile al margine destro. → وسیله باید تا حد ممکن نزدیک به حاشیه سمت راست قرار گیرد." },
        { italian: "controllare tramite lo specchietto", persian: "از طریق آینه بررسی کردن", example: "Prima di aprire, si deve controllare tramite lo specchietto. → قبل از باز کردن، باید از طریق آینه بررسی کرد." },
        { italian: "non inferiore a un metro", persian: "حداقل یک متر", example: "Lo spazio per i pedoni non deve essere inferiore a un metro. → فضا برای عابران نباید کمتر از یک متر باشد." },
      ],
    },

    // ─── Divieti di Fermata e Sosta ───────────────────────────────────────────
    {
      id: "16-4-divieti",
      titleIt: "Divieti di Fermata e/o di Sosta",
      titleFa: "ممنوعیت‌های توقف و پارک",
      body: [
        "🚫 **همیشه توقف و پارک ممنوع است در:**\n\n| مکان | دلیل |\n|------|------|\n| **Curve e dossi** (پیچ‌ها و برجستگی‌ها) | دید کافی ندارد |\n| **Strade urbane di scorrimento** (خیابان‌های سریع شهری) | خطر تصادف |\n| **Passaggi pedonali** (خط‌کشی عابر پیاده) | مانع عبور عابران |\n| **Passaggi a livello** (گذرگاه‌های ریلی) | خطر قطار |\n| **Segnali stradali/semaforici** (نزدیک علائم/چراغ) | پوشاندن علائم |\n| **Sottovia e fornici/portici** (زیرگذر و طاقی) | مانع عبور |\n| **Marciapiedo** (پیاده‌رو) | مانع عابران |\n| **Piste ciclabili** (مسیر دوچرخه) | خطر برای دوچرخه‌سواران |\n| **Linee tranviarie** (نزدیک ریل تراموا) | مانع ترامواها |\n| **Corsie di accelerazione/decelerazione** | خطر برای وسایل در حال ورود/خروج |\n| **Passaggi pedonali e attraversamenti** | ایمنی عابران |",
        "⚠️ **نکته مهم:** در نزدیکی یک تابلوی ترافیکی پارک کردن ممنوع است لاقل به خاطر پنهان کردن آن از دید رانندگان دیگر — حتی اگر مکان دیگری مشخص نشده باشد.",
      ],
      keyVerbs: [
        { italian: "sono vietate la fermata e la sosta", persian: "توقف و پارک ممنوع هستند", example: "Nelle curve sono vietate la fermata e la sosta. → در پیچ‌ها توقف و پارک ممنوع هستند." },
        { italian: "in corrispondenza di", persian: "در محل / مقابل", example: "È vietato sostare in corrispondenza dei passaggi pedonali. → پارک کردن مقابل خط‌کشی عابران ممنوع است." },
        { italian: "occultarli alla vista", persian: "آن‌ها را از دید پنهان کردن", example: "Vietato sostare sui segnali in modo da occultarli alla vista. → پارک کردن جلوی علائم به گونه‌ای که از دید پنهان شوند ممنوع است." },
      ],
    },

    // ─── خلاصه و نکات کلیدی ──────────────────────────────────────────────────
    {
      id: "16-5-riassunto",
      titleIt: "Riassunto — Punti Chiave del Capitolo 16",
      titleFa: "خلاصه — نکات کلیدی فصل ۱۶",
      body: [
        "**جدول تفاوت‌های اصلی:**\n\n| اصطلاح | راننده | مدت | اجباری؟ |\n|--------|--------|------|---------|\n| Arresto | در وسیله | کوتاه | بله (خارجی) |\n| Fermata | در وسیله | کوتاه | خیر |\n| Sosta | می‌تواند برود | طولانی | خیر |\n\n**نکات مهم آزمون:**\n• بدون پیاده‌رو = حداقل **۱ متر** برای عابر\n• فاصله از تقاطع = حداقل **۵ متر**\n• مثلث اضطراری = حداقل **۵۰ متر** (جاده عادی) / **۱۰۰ متر** (اتوبان)\n• باز کردن در = همیشه از **آینه** بررسی کنید",
      ],
      keyVerbs: [
        { italian: "rispettare le norme sulla sosta", persian: "رعایت قوانین پارک", example: "Tutti i conducenti devono rispettare le norme sulla sosta. → همه رانندگان باید قوانین پارک را رعایت کنند." },
      ],
    },

  ],
};
