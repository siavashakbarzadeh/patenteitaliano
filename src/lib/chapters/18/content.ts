// ─────────────────────────────────────────────────────────────────────────────
//  CAPITOLO 18 – محتوای آموزشی (ترجمه فارسی)
//  منبع: صفحات ۲۱۴–۲۲۴ کتاب پاتنته B
// ─────────────────────────────────────────────────────────────────────────────

import type { ChapterContent } from "@/lib/chapters/20/content";

export const chapter18Content: ChapterContent = {
  chapter: 18,
  titleIt: "Uso delle Luci – Uso dei Dispositivi Acustici – Spie e Simboli",
  titleFa: "استفاده از چراغ‌ها – استفاده از دستگاه‌های صوتی – چراغ‌های هشدار و نمادها",
  pageRange: "ص ۲۱۴–۲۲۴",
  sections: [

    // ─── 18.1 مقدمه ──────────────────────────────────────────────────────────
    {
      id: "18-intro",
      titleIt: "18.1 – Impianto di Segnalazione Visiva e di Illuminazione",
      titleFa: "۱۸.۱ – سیستم سیگنال‌دهی بصری و روشنایی",
      body: [
        "حدود ۸۰٪ اطلاعات لازم برای رانندگی ایمن از طریق بینایی دریافت می‌شوند. به همین دلیل سیستم سیگنال‌دهی بصری و روشنایی خودرو یکی از سیستم‌های اصلی ایمنی فعال است (uno dei sistemi primari di sicurezza attiva).",
        "طبق قانون، سیگنال‌های مشخصی وجود دارند که از این اجزا تشکیل شده‌اند:\n• luci (چراغ‌ها) — proiettori (چراغ‌های جلو) — striatadiottri (بازتاب‌دهنده‌های رفلکتوری) — e pannelli dei veicoli (پانل‌های وسایل نقلیه) [فصل ۱۷.۵]: برای دیدن و نشان دادن وسیله، انجام مانورهای خاص، و دستگاه‌های چشمک‌زن لازم در موقعیت‌های ترافیکی خاص;\n• segnali manuali (سیگنال‌های دستی): توسط رانندگان دوچرخه و برخی موتورسیکلت‌ها.",
        "در شکل‌های ۱ و ۲ کتاب، نمایی از چراغ‌ها و بازتاب‌دهنده‌های اصلی خودرو نشان داده شده:\n\n🔦 جلو: proiettori fendinebbia (چراغ مه‌شکن جلو) — proiettori anabbaglianti (چراغ‌های کم‌نور پایین) — proiettori abbaglianti e luci di posizione (چراغ‌های پر و چراغ‌های جانبی) — indicatori di direzione (راهنما)\n\n🔦 عقب: luce di arresto (چراغ ترمز — قرمز) — indicatore di direzione (راهنما) — luce per nebbia (مه‌شکن عقب — قرمز شدید) — proiettore di retromarcia (چراغ دنده عقب — سفید) — catadiottro (بازتاب‌دهنده) — luce della targa (چراغ پلاک)",
      ],
      keyVerbs: [
        { italian: "sono percepite", persian: "دریافت می‌شوند", example: "Le informazioni necessarie sono percepite attraverso la vista. → اطلاعات لازم از طریق بینایی دریافت می‌شوند." },
        { italian: "uno dei sistemi primari", persian: "یکی از سیستم‌های اصلی", example: "L'impianto luminoso è uno dei sistemi primari di sicurezza attiva. → سیستم روشنایی یکی از سیستم‌های اصلی ایمنی فعال است." },
      ],
    },

    // ─── وسایل اضطراری ───────────────────────────────────────────────────────
    {
      id: "18-veicoli-speciali",
      titleIt: "Veicoli di Emergenza e con Luci Speciali",
      titleFa: "وسایل اضطراری و وسایل با چراغ‌های ویژه",
      body: [
        "🚔 وسایل پلیس (A) و آتش‌نشانی — vigili del fuoco (B) و آمبولانس‌ها (C) دارای یک یا چند چراغ چشمک‌زن آبی روی سقف هستند.",
        "🚕 تاکسی‌ها (D) باید مجهز به تابلوی نورانی با نوشته «TAXI» باشند، با نور سفید در جلو و قرمز در عقب.",
        "🟡 دستگاه چراغ چشمک‌زن زرد یا نارنجی اجباری است برای:\n• وسایل جمع‌آوری و حمل زباله شهری (E)\n• ماشین‌آلات کشاورزی استثنایی، وسایل و حمل‌ونقل استثنایی (F)\n• ماشین‌آلات راه‌سازی\n• وسایل کمک به جاده و وسایل امداد و نجات\n• وسایل خدمات اسکورت فنی\n• برف‌روبها و ماشین‌آلات کارگری دیگر",
      ],
      keyVerbs: [
        { italian: "dotati di", persian: "مجهز به / دارای", example: "Le ambulanze sono dotate di luci lampeggianti blu. → آمبولانس‌ها مجهز به چراغ‌های چشمک‌زن آبی هستند." },
        { italian: "devono essere dotate", persian: "باید مجهز باشند", example: "Le autovetture TAXI devono essere dotate di segnalazione 'TAXI'. → خودروهای تاکسی باید مجهز به تابلوی TAXI باشند." },
        { italian: "è obbligatorio", persian: "اجباری است", example: "Il dispositivo a luce lampeggiante gialla è obbligatorio per i veicoli raccolta rifiuti. → دستگاه چراغ زرد برای وسایل زباله‌کش اجباری است." },
      ],
    },

    // ─── مشخصات و کاربرد چراغ‌ها ─────────────────────────────────────────────
    {
      id: "18-luci-posizione",
      titleIt: "Luci di Posizione (Anteriori, Posteriori e Laterali) [Art. 151/152/153 C.d.S.]",
      titleFa: "چراغ‌های جانبی (جلو، عقب و کنار) — ماده ۱۵۱/۱۵۲/۱۵۳ قانون راهنمایی",
      body: [
        "چراغ‌های جانبی (luci di posizione) جلو سفید و عقب قرمز هستند و برای نشان دادن حضور وسیله نقلیه (دیده‌شدن از جلو، عقب و کنار) به کار می‌روند.",
        "⚠️ باید همیشه روشن باشند وقتی مقررات آن را می‌طلبد و همیشه باید همراه چراغ‌های اصلی روشن شوند (vanno sempre integrate con i proiettori — جایگزین آن‌ها نمی‌شوند).",
      ],
      keyVerbs: [
        { italian: "sono bianche / sono rosse", persian: "سفید هستند / قرمز هستند", example: "Le luci di posizione sono bianche anteriormente e rosse posteriormente. → چراغ‌های جانبی جلو سفید و عقب قرمز هستند." },
        { italian: "servono a segnalare", persian: "برای نشان دادن هستند", example: "Servono a segnalare la presenza del veicolo. → برای نشان دادن حضور وسیله هستند." },
        { italian: "vanno integrate", persian: "باید همراه باشند / باید ادغام شوند", example: "Vanno sempre integrate con i proiettori. → باید همیشه همراه چراغ‌های اصلی روشن شوند." },
      ],
    },

    {
      id: "18-anabbaglianti",
      titleIt: "Proiettori a Luce Anabbagliante",
      titleFa: "چراغ‌های کم‌فاصله (پایین/دیپ)",
      body: [
        "چراغ‌های کم‌فاصله (proiettori a luce anabbagliante) برای روشن کردن جاده جلو تا فاصله مشخصی بدون کوری رانندگان مقابل طراحی شده‌اند (سنبه‌ای نمی‌شوند)، زیرا پرتو نوری آن‌ها عمدتاً رو به پایین است و مستقیماً به چشم رانندگان روبرو نمی‌تابد.",
        "پروژکتورهای کم‌فاصله نامتقارن (proiettori anabbaglianti asimmetrici) عمدتاً لبه راست جاده (margine destro della carreggiata) را روشن می‌کنند.",
        "⚠️ تنظیم نادرست زاویه چراغ‌های کم‌فاصله می‌تواند:\n• دید راننده را کاهش دهد\n• سایر کاربران جاده را کور کند (abbagliare gli altri utenti)\n• این ممکن است به دلیل تغییر بار مسافر یا بار باشد که زاویه (assetto) خودرو را تغییر می‌دهد — مثلاً اگر عقب خودرو پایین‌تر برود (retrotreno abbassato)، پرتو نور بالاتر می‌رود",
      ],
      keyVerbs: [
        { italian: "senza abbagliare", persian: "بدون کور کردن", example: "Illuminano la strada senza abbagliare i conducenti incrocianti. → جاده را بدون کور کردن رانندگان روبرو روشن می‌کنند." },
        { italian: "rivolto prevalentemente verso il basso", persian: "عمدتاً رو به پایین", example: "Il fascio luminoso è rivolto prevalentemente verso il basso. → پرتو نور عمدتاً رو به پایین است." },
        { italian: "errata impostazione", persian: "تنظیم نادرست", example: "L'errata impostazione dell'orientamento dei fari può abbagliare gli altri. → تنظیم نادرست زاویه فارنامناسب می‌تواند سایرین را کور کند." },
      ],
    },

    {
      id: "18-abbaglianti",
      titleIt: "Proiettori a Luce Abbagliante (o di Profondità)",
      titleFa: "چراغ‌های پرفاصله (بالا/هایبیم)",
      body: [
        "چراغ‌های پرفاصله (proiettori a luce abbagliante o di profondità) پرتو نوری در عمق دارند و جاده را از فاصله دور روشن می‌کنند. می‌توان از آن‌ها برای سیگنال‌دهی نوری به جای بوق (clacson/lampeggio) هم استفاده کرد.",
        "🚫 خارج از شهر ممنوع است از چراغ‌های پر استفاده شود وقتی قرار است با وسیله‌ای روبرو شوند یا به فاصله کوتاه پشت سر وسیله‌ای هستند — جز استفاده موقت و متناوب (brevemente in modo intermittente).",
        "✅ رانندگان می‌توانند کوتاه و متناوب از چراغ‌های پر استفاده کنند تا:\n• نزدیک شدن به یک تقاطع یا قوس کور را اعلام کنند\n• نیت سبقت گرفتن را اعلام کنند",
      ],
      keyVerbs: [
        { italian: "fascio luminoso in profondità", persian: "پرتو نور عمقی", example: "Hanno un fascio luminoso rivolto prevalentemente in profondità. → پرتوی نوری عمدتاً عمقی دارند." },
        { italian: "è vietato", persian: "ممنوع است", example: "Fuori centri abitati è vietato l'uso degli abbaglianti in presenza di altri veicoli. → خارج از شهر استفاده از پر در حضور وسایل دیگر ممنوع است." },
        { italian: "brevemente in modo intermittente", persian: "به‌طور کوتاه و متناوب", example: "Possono usarli brevemente in modo intermittente. → می‌توانند به‌طور کوتاه و متناوب از آن‌ها استفاده کنند." },
        { italian: "in sostituzione del clacson", persian: "به جای بوق", example: "Si possono usare per segnalazioni luminose in sostituzione del clacson. → می‌توان از آن‌ها برای سیگنال‌های نوری به جای بوق استفاده کرد." },
      ],
    },

    // ─── 18 زمان‌بندی روشنایی ────────────────────────────────────────────────
    {
      id: "18-uso-luci",
      titleIt: "Uso delle Luci – Quando Accenderle",
      titleFa: "استفاده از چراغ‌ها – چه وقت باید روشن کرد",
      body: [
        "📌 **در شهر (nei centri abitati)** — هنگام حرکت وسایل موتوری:\n• از نیم ساعت بعد از غروب آفتاب تا نیم ساعت قبل از طلوع (از غروب تا سحر)\n• در هر صورت در تونل‌ها — حتی اگر روشن باشند (nelle gallerie — anche se illuminate)\n• در هر موردی از کم‌دیدی (neve — برف، pioggia — باران، nebbia — مه)\n\nباید روشن باشند: luci di posizione + proiettori anabbaglianti + luci della targa + (اگر لازم باشد) luci di ingombro",
        "📌 **خارج از شهر (fuori dei centri abitati)** — در بزرگراه‌ها و جاده‌های برون‌شهری:\n• اجباری از نیم ساعت قبل از غروب تا نیم ساعت بعد از طلوع\n• در تونل‌ها حتی اگر روشن باشند\n• در موارد کم‌دیدی\n\nبه‌علاوه: موتورسیکلت‌ها و موتورسیکلت‌های کوچک (از جمله چهارچرخه‌های سبک) باید همیشه از luci di posizione + proiettori anabbaglianti استفاده کنند — هم روز و هم شب.",
        "📌 **در طول روز و با دید خوب**:\n• استفاده از luci di posizione اجباری است\n• در برخی جاده‌ها استفاده از luci di ingombro هم لازم است",
        "🚦 **قانون مهم**: وسایل موتوری (از جمله موتورسیکلت‌های کوچک و چهارچرخه‌های سبک) و موتورسیکلت‌ها باید در طول روز و با دید خوب هم از چراغ‌های کم‌فاصله + جانبی استفاده کنند — **هم روز هم شب**.",
      ],
      keyVerbs: [
        { italian: "da mezz'ora dopo il tramonto", persian: "از نیم ساعت بعد از غروب", example: "Da mezz'ora dopo il tramonto a mezz'ora prima del sorgere del sole. → از نیم ساعت بعد از غروب تا نیم ساعت قبل از طلوع." },
        { italian: "in ogni caso", persian: "در هر صورت / در هر حال", example: "In ogni caso nelle gallerie è obbligatorio usare le luci. → در هر صورت در تونل‌ها استفاده از چراغ ها اجباری است." },
        { italian: "scarsa visibilità", persian: "کم‌دیدی / دید ضعیف", example: "In ogni altro caso di scarsa visibilità (neve, pioggia, nebbia). → در هر مورد کم‌دیدی (برف، باران، مه)." },
        { italian: "obbligatoriamente durante la marcia", persian: "اجباراً در طول حرکت", example: "I motoveicoli devono usarle obbligatoriamente durante la marcia. → موتورسیکلت‌ها باید اجباراً در طول حرکت از آن‌ها استفاده کنند." },
      ],
    },

    // ─── چراغ‌های دیگر ────────────────────────────────────────────────────────
    {
      id: "18-altre-luci",
      titleIt: "Altre Luci: Frecce, Nebbia, Arresto, Retromarcia, Targa",
      titleFa: "چراغ‌های دیگر: راهنما، مه‌شکن، ترمز، دنده عقب، پلاک",
      body: [
        "🟠 **Indicatori di direzione (راهنماها/فلاشرها)**: جلو، عقب و کنار در رنگ زرد-نارنجی. باید از قبل (in anticipo) برای نشان دادن: تغییر مسیر، تغییر خط، دور زدن، سبقت، توقف، دنده عقب، برگشت به مسیر مخالف فعال شوند.",
        "🔴 **Luce di arresto (stop)**: قرمز، به‌طور خودکار وقتی راننده ترمز می‌کند روشن می‌شود.",
        "⚪ **Proiettore di retromarcia (چراغ دنده عقب)**: سفید، در دنده عقب روشن می‌شود و جاده پشت سر را روشن می‌کند.",
        "🔴 **Luci per nebbia (مه‌شکن)**: \n• جلو: فقط در صورت مه، برف یا باران شدید که دید را به‌طور محسوس کاهش می‌دهد مجاز است\n• عقب (retronebbia): قرمز شدید — برای قابل دیدن بودن از پشت در کم‌دیدی",
        "📋 **Luci della targa (چراغ پلاک)**: سفید، از پشت پلاک را روشن می‌کند ـ اجباری هنگام روشن بودن سایر چراغ‌ها.",
        "🔮 **Catadiottro (بازتاب‌دهنده)**: یک دستگاه بازتاب‌دهنده که نور چراغ‌های وسایل دیگر را منعکس می‌کند و وجود وسیله را در تاریکی بدون مصرف برق خود نشان می‌دهد.",
      ],
      keyVerbs: [
        { italian: "devono essere attivati in anticipo", persian: "باید از قبل فعال شوند", example: "Gli indicatori di direzione devono essere attivati in anticipo. → راهنماها باید از قبل فعال شوند." },
        { italian: "si accende automaticamente", persian: "به‌طور خودکار روشن می‌شود", example: "La luce di arresto si accende automaticamente quando si frena. → چراغ ترمز به‌طور خودکار وقتی ترمز می‌زنیم روشن می‌شود." },
        { italian: "sensibilmente la visibilità", persian: "دید را به‌طور محسوس", example: "Nebbia che riduce sensibilmente la visibilità. → مهی که دید را به‌طور محسوس کاهش می‌دهد." },
      ],
    },

  ],
};
