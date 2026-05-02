// ─────────────────────────────────────────────────────────────────────────────
//  CAPITOLO 17 – محتوای آموزشی (ترجمه فارسی)
//  منبع: صفحات ۱۹۴–۲۱۳ کتاب پاتنته B
// ─────────────────────────────────────────────────────────────────────────────

import type { ChapterContent } from "@/lib/chapters/20/content";

export const chapter17Content: ChapterContent = {
  chapter: 17,
  titleIt: "Ingombro Carreggiata – Segnale di Veicolo Fermo – Circolazione in Autostrada – Trasporto Persone e Cose – Traino dei Veicoli",
  titleFa: "انسداد جاده – سیگنال وسیله متوقف – تردد در اتوبان – حمل مسافر و بار – یدک کشیدن",
  pageRange: "ص ۱۹۴–۲۱۳",
  summary: "این فصل چند موضوع مهم را پوشش می‌دهد: اقدامات لازم هنگام انسداد جاده، نحوه و فاصله گذاشتن مثلث هشدار (۵۰م جاده/۱۰۰م اتوبان)، اجبار به جلیقه بازتاب‌دهنده، ممنوعیت‌های اتوبان (دور زدن/دنده عقب/توقف)، قوانین حمل مسافر و بار، و شرایط یدک کشیدن.",
  sections: [

    // ─── متن اصلی ایتالیایی ───────────────────────────────────────────────────
    {
      id: "17-0-testo-italiano",
      titleIt: "Testo Originale – Capitolo 17",
      titleFa: "📖 متن اصلی ایتالیایی فصل ۱۷",
      body: [
        "**Art. 161 – Ingombro della carreggiata**\nIn caso di ingombro della carreggiata, il conducente deve rimuovere l'ostacolo. Se non è possibile, deve presegnalare con il triangolo, indossare il giubbotto ad alta visibilità e avvisare le autorità.",
        "**Triangolo (segnale mobile di pericolo)**\n• Strade normali: almeno 50 m dal veicolo fermo.\n• Autostrade/extraurbane principali: almeno 100 m.\n• Deve essere visibile da almeno 100 m.\n• Il conducente deve indossare il giubbotto retroriflettente durante la presegnalazione.",
        "**Artt. 175-176 – Autostrade**\nVietati: inversione di marcia, retromarcia, fermata fuori emergenza, uso del clacson, circolazione su corsia emergenza, circolazione di biciclette/ciclomotori/moto <120cc.\nObbligo: percorrere la corsia di destra; usare la corsia di sinistra solo per sorpasso; lasciare la corsia di emergenza libera.",
        "**Traino dei veicoli**\nIl traino di emergenza è consentito con cavo o barra rigida. Velocità massima: 80 km/h. Il veicolo trainato non deve avere persone a bordo salvo il conducente al volante per sterzare. Il cavo deve essere ben visibile (segnalazione obbligatoria).",
      ],
      keyVerbs: [
        { italian: "presegnalare con il triangolo", persian: "با مثلث هشدار دادن", example: "Il conducente deve presegnalare con il triangolo. → راننده باید با مثلث هشدار دهد." },
        { italian: "indossare il giubbotto", persian: "جلیقه پوشیدن", example: "Deve indossare il giubbotto ad alta visibilità. → باید جلیقه دید بالا بپوشد." },
      ],
      highlights: [
        "Triangolo su strada normale: minimo 50 m.",
        "Triangolo in autostrada: minimo 100 m.",
        "In autostrada: vietato invertire il senso di marcia.",
        "Giubbotto: obbligatorio fuori dai centri abitati.",
        "Traino: max 80 km/h, segnalazione cavo obbligatoria.",
      ],
      notes: [
        "★ مثلث جاده عادی = ۵۰ متر. اتوبان = ۱۰۰ متر.",
        "★ در اتوبان دور زدن مطلقاً ممنوع است.",
        "★ جلیقه = اجباری خارج از شهر.",
        "★ سرعت یدک = حداکثر ۸۰ کیلومتر.",
      ],
    },

    // ─── ترجمه فارسی ──────────────────────────────────────────────────────────
    {
      id: "17-0-traduzione-persiana",
      titleIt: "Traduzione Persiana – Capitolo 17",
      titleFa: "🇮🇷 ترجمه فارسی متن اصلی فصل ۱۷",
      body: [
        "**ماده ۱۶۱ – انسداد جاده**\nدر صورت انسداد جاده، راننده باید مانع را برطرف کند. اگر ممکن نیست باید با مثلث هشدار دهد، جلیقه بازتاب‌دهنده بپوشد و مقامات را آگاه کند.",
        "**مثلث (علامت خطر متحرک)**\n• جاده‌های عادی: حداقل ۵۰ متر از وسیله متوقف.\n• اتوبان/جاده برون‌شهری اصلی: حداقل ۱۰۰ متر.\n• باید از ۱۰۰ متری قابل رؤیت باشد.\n• هنگام گذاشتن مثلث باید جلیقه پوشیده شود.",
        "**مواد ۱۷۵-۱۷۶ – اتوبان**\nممنوع: دور زدن، دنده عقب، توقف غیراورژانسی، بوق بدون ضرورت، تردد روی خط اضطراری، تردد دوچرخه/موپد/موتور <۱۲۰cc.\nاجباری: حرکت در خط راست؛ خط چپ فقط برای سبقت؛ خط اضطراری همیشه آزاد.",
        "**یدک کشیدن**\nیدک اضطراری با طناب یا بار صلب مجاز است. حداکثر سرعت: ۸۰ کیلومتر. در وسیله یدک کشیده شده جز راننده پشت فرمان کسی نباشد. طناب باید کاملاً قابل دیدن باشد.",
      ],
    },

    // ─── 17.1 Ingombro della Carreggiata ─────────────────────────────────────
    {
      id: "17-1-ingombro",
      titleIt: "17.1 – Ingombro della Carreggiata [Art. 161 C.d.S. e 956 Reg.]",
      titleFa: "۱۷.۱ – انسداد جاده (ماده ۱۶۱ قانون راهنمایی)",
      body: [
        "در صورت انسداد جاده (ingombro della carreggiata) به دلیل خرابی خودرو، افتادن تصادفی بار، یا هر دلیل دیگری، راننده باید برای از بین بردن هر گونه خطر برای ترافیکی که می‌آید، مسیر را کاملاً آزاد کند (rendere assolutamente libero il traffico della carreggiata) — با جابجا کردن یا هل دادن خودرو خارج از جاده یا به سمت حاشیه راست، یا اگر ممکن نیست، قرار دادن آن روی حاشیه راست.",
        "در موارد زیر، راننده‌ها و/یا مسافران باید اقدامات زیر را انجام دهند:\n• caduta/spargimento di sostanze pericolose — افتادن یا پخش مواد خطرناک\n• ingombro non removibile — انسداد غیر قابل رفع\n• veicoli danneggiati che non è possibile rimuovere — وسایل آسیب‌دیده‌ای که نمی‌توان جابجا کرد\n\n**اقدامات لازم:**\n1. پیش‌علامت‌گذاری موانع با مثلث (presegnalare l'ostacolo con il triangolo)\n2. در صورت کم‌دیدی محل (مثلاً پیچ)، انجام سیگنال‌های دستی هشدار (segnali manuali di avviso) توسط راننده یا نماینده‌اش برای جلوگیری از تردد وسایل در حال آمدن\n3. رفع مواد افتاده یا پاشیدن شن/خاک/خاک اره (sabbia, terra, segatura) برای بازگرداندن اصطکاک (aderenza)\n4. آگاه کردن نهاد مسئول جاده یا پلیس",
      ],
      keyVerbs: [
        { italian: "rendere libero il traffico", persian: "مسیر ترافیک را آزاد کردن", example: "Il conducente deve rendere assolutamente libero il traffico. → راننده باید مسیر ترافیک را کاملاً آزاد کند." },
        { italian: "presegnalare l'ostacolo", persian: "مانع را پیش از وقوع نشان دادن", example: "Devono presegnalare l'ostacolo con il triangolo. → باید مانع را با مثلث علامت‌گذاری کنند." },
        { italian: "impedire il transito", persian: "از تردد جلوگیری کردن", example: "Segnali manuali per impedire il transito dei veicoli. → سیگنال‌های دستی برای جلوگیری از تردد وسایل." },
        { italian: "ripristinare l'aderenza", persian: "اصطکاک را بازگرداندن", example: "Spargere sabbia per ripristinare l'aderenza. → پاشیدن شن برای بازگرداندن اصطکاک." },
      ],
    },

    // ─── 17.2 Segnalazione di Veicolo Fermo (Triangolo) ──────────────────────
    {
      id: "17-2-triangolo",
      titleIt: "17.2 – Segnalazione di Veicolo Fermo (Il Triangolo)",
      titleFa: "۱۷.۲ – سیگنال وسیله متوقف (مثلث)",
      body: [
        "سیگنال وسیله متوقف (segnalazione di veicolo fermo) عبارت است از علامت مثلثی خطر متحرک (segnale mobile di pericolo — triangolo) که معمولاً علامت «سایر خطرات» (ALTRI PERICOLI) را به شکل کوچک بازتولید می‌کند و مجهز به ساختاری است که آن را در حالت عمودی یا شبه عمودی نگه می‌دارد.",
        "📍 **قرارگیری مثلث روی جاده:**\n• باید روی خط اشغال شده توسط وسیله متوقف یا بار افتاده قرار گیرد\n• حداقل ۱ متر از لبه بیرونی جاده (bordo esterno della carreggiata) فاصله داشته باشد\n• باید محکم طوری تکیه داشته باشد که بر اثر باد یا جابجایی هوای وسایل در حال حرکت نیفتد\n• در صورت لزوم، باید در میانه جاده هم قرار گیرد (necessario anche in mezzo alla carreggiata)",
        "📏 **فاصله مثلث از وسیله:**\n• جاده‌های عادی: حداقل ۵۰ متر پشت وسیله متوقف\n• اتوبان‌ها و جاده‌های برون‌شهری اصلی: حداقل ۱۰۰ متر\n• باید از فاصله حداقل ۱۰۰ متری توسط وسایل در حال آمدن به خوبی دیده شود\n• اگر تقاطع (incrocio) در فاصله کمتر از ۵۰ متر باشد، مثلث پشت وسیله در مناسب‌ترین موقعیت برای دیده شدن قرار می‌گیرد",
        "☀️⏰🌙 **چه وقت اجباری است:**\n1. **روز**: در هر موردی که وسیله متوقف از فاصله حداقل ۱۰۰ متری قابل رؤیت نیست (پیچ، برجستگی، و غیره)\n2. **روز و شب**: در اتوبان یا جاده‌های برون‌شهری اصلی وقتی وسیله نمی‌تواند به خط اضطراری (corsia di emergenza) یا سکوی توقف (piazzola di sosta) منتقل شود\n3. **شب**: وقتی وسایل برای کسانی که از پشت می‌آیند به اندازه کافی دیده نمی‌شوند، یا وقتی چراغ‌های عقب کم یا خاموش هستند، یا در هر صورت در صورت افتادن بار",
        "⚠️ وقتی راننده‌ای با مثلث راهنمایی مواجه می‌شود باید: سرعت را کم کرده و با احتیاط ادامه دهد (moderare la velocità e procedere con prudenza). مثلث باید به محض پایان انسداد یا توقف برداشته شود.",
      ],
      keyVerbs: [
        { italian: "deve essere posto", persian: "باید قرار داده شود", example: "Il triangolo deve essere posto ad almeno 50 metri. → مثلث باید حداقل ۵۰ متر فاصله قرار داده شود." },
        { italian: "pienamente visibile", persian: "کاملاً قابل رؤیت", example: "Deve essere pienamente visibile ad almeno 100 metri. → باید از فاصله حداقل ۱۰۰ متری کاملاً قابل رؤیت باشد." },
        { italian: "moderare la velocità", persian: "سرعت را کم کردن", example: "Quando si incontra il triangolo, si deve moderare la velocità. → وقتی به مثلث رسیدیم، باید سرعت را کم کنیم." },
        { italian: "togliere il segnale", persian: "علامت را برداشتن", example: "L'utente deve togliere il segnale alla cessazione dell'ingombro. → کاربر باید علامت را بعد از پایان انسداد بردارد." },
      ],
    },

    // ─── Giubbotto Alta Visibilità ────────────────────────────────────────────
    {
      id: "17-giubbotto",
      titleIt: "Giubbotto ad Alta Visibilità (Gilet Catarifrangente)",
      titleFa: "جلیقه دید بالا (جلیقه بازتاب‌دهنده)",
      body: [
        "در حین عملیات پیش‌علامت‌گذاری با مثلث، راننده باید خود را با جلیقه (giubbotto) یا بندهای بازتابنده (bretelle retroriflettenti) با دیدپذیری بالا و از نوع تأیید شده قابل رؤیت کند — نه الزاماً زرد (non obbligatoriamente di colore giallo).",
        "جلیقه جزء اقسام اجباری تجهیزات خودروها است (fa parte dell'equipaggiamento obbligatorio degli autoveicoli).",
        "📌 **اجبار جلیقه** — خارج از شهر و با دید پایین (in caso di scarsa visibilità fuori dei centri abitati):\n• راننده وسیله متوقف روی جاده باید از جلیقه استفاده کند\n• باید حتی روی خط اضطراری یا سکوی توقف هم پوشیده شود (anche quando si trovi su corsia di emergenza o piazzola di sosta)\n• استثنا: موتورسیکلت‌ها، موتورهای دو چرخ، و دوچرخه‌ها\n\n🚫 **معافیت از جلیقه:**\n• راننده‌ای که روی جاده در یک مرکز شهری متوقف شده از اجبار جلیقه معاف است (l'obbligo non si estende al conducente fermo sulla carreggiata in un centro abitato)",
      ],
      keyVerbs: [
        { italian: "rendersi visibile", persian: "خود را قابل رؤیت کردن", example: "Il conducente deve rendersi visibile mediante giubbotto retroriflettente. → راننده باید خود را با جلیقه بازتاب‌دهنده قابل رؤیت کند." },
        { italian: "deve essere indossato", persian: "باید پوشیده شود", example: "Il giubbotto deve essere indossato anche su corsia di emergenza. → جلیقه باید حتی روی خط اضطراری هم پوشیده شود." },
        { italian: "non si estende", persian: "گسترش نمی‌یابد / شامل نمی‌شود", example: "L'obbligo non si estende al conducente fermo in un centro abitato. → اجبار شامل راننده‌ای که در شهر متوقف شده نمی‌شود." },
      ],
    },

    // ─── 17.3 Autostrada ─────────────────────────────────────────────────────
    {
      id: "17-3-autostrada",
      titleIt: "17.3 – Circolazione Sulle Autostrade e Strade Extraurbane Principali [Artt. 175, 176 C.d.S.]",
      titleFa: "۱۷.۳ – تردد در اتوبان‌ها و جاده‌های برون‌شهری اصلی",
      body: [
        "اتوبان‌ها (autostrade) و جاده‌های برون‌شهری اصلی (strade extraurbane principali) با علائم شروع (A) و پایان (B) مشخص هستند:\n• اتوبان: علائم با پس‌زمینه سبز\n• جاده برون‌شهری اصلی: علائم با پس‌زمینه آبی",
        "🚫 **وسایلی که در اتوبان و جاده برون‌شهری اصلی مجاز به تردد نیستند:**\n• دوچرخه‌ها (velocipedi)\n• موتورهای کوچک (ciclomotori)\n• موتورسیکلت‌های با حجم موتور زیر ۱۲۰ سی‌سی (motocicli di cilindrata inferiore a 120 cc)\n• سایر موتورسیکل‌ها با سرعت تا ۴۰ کیلومتر در ساعت\n• وسایل بدون تایرمستدل\n• ماشین‌آلات کشاورزی\n• وسایل با حداکثر سرعت کمتر از حد مجاز",
        "🛣️ **ساختار اتوبان:**\n\n```\n[خط اضطراری سمت راست]  →  [خط اصلی سمت راست — marcia normale]  →  [خط سبقت سمت چپ — solo sorpasso]  →  [جداکننده]  →  [سمت مقابل]\n```\n\n• corsia di accelerazione (خط شتاب): برای ورود به اتوبان\n• corsia di decelerazione (خط کاهش سرعت): برای خروج از اتوبان\n• sosta di emergenza (توقف اضطراری): فقط در اورژانس",
        "⛔ **ممنوعیت‌های اتوبان:**\n• invertire il senso di marcia — برگشتن از راه آمده (حتی از طریق خروجی‌ها)\n• circolare in retromarcia — رانندگی با دنده عقب (جز در ضرورت)\n• usare il clacson — استفاده از بوق (جز در ضرورت مطلق و فوری)\n• fermarsi o sostare — توقف کوتاه یا طولانی (جز در سکوی اضطراری یا اورژانس پارکینگ)\n• circolazione su corsia di emergenza — تردد روی خط اضطراری (جز در اورژانس)",
      ],
      keyVerbs: [
        { italian: "è vietata la circolazione", persian: "تردد ممنوع است", example: "Sulle autostrade è vietata la circolazione dei velocipedi. → در اتوبان تردد دوچرخه ممنوع است." },
        { italian: "immettersi progressivamente", persian: "به تدریج وارد شدن", example: "Si deve immettersi progressivamente nel traffico dalla corsia di accelerazione. → باید از خط شتاب به تدریج وارد ترافیک شوید." },
        { italian: "invertire il senso di marcia", persian: "جهت حرکت را عوض کردن", example: "In autostrada è vietato invertire il senso di marcia. → در اتوبان عوض کردن جهت حرکت ممنوع است." },
        { italian: "fondo verde / fondo blu", persian: "پس‌زمینه سبز / پس‌زمینه آبی", example: "Le autostrade hanno segnali con fondo verde, le extraurbane principali fondo blu. → اتوبان‌ها علائم با پس‌زمینه سبز دارند، جاده‌های برون‌شهری اصلی آبی." },
      ],
    },

    // ─── خلاصه ────────────────────────────────────────────────────────────────
    {
      id: "17-4-riassunto",
      titleIt: "Riassunto — Punti Chiave del Capitolo 17",
      titleFa: "خلاصه — نکات کلیدی فصل ۱۷",
      body: [
        "**اعداد کلیدی فصل ۱۷:**\n\n| موضوع | عدد |\n|-------|-----|\n| مثلث — جاده عادی | حداقل ۵۰ م |\n| مثلث — اتوبان | حداقل ۱۰۰ م |\n| دید مثلث | از ۱۰۰ م |\n| سرعت یدک | حداکثر ۸۰ کم/س |\n\n**ممنوعیت‌های مطلق اتوبان:**\n- دور زدن (U-turn)\n- دنده عقب\n- توقف خارج از اورژانس\n- تردد روی خط اضطراری\n- دوچرخه/موپد/موتور <۱۲۰cc",
      ],
      keyVerbs: [
        { italian: "rispettare le norme autostradali", persian: "قوانین اتوبان را رعایت کردن", example: "In autostrada bisogna rispettare rigorosamente le norme. → در اتوبان باید قوانین را دقیقاً رعایت کرد." },
      ],
    },

  ],
};
