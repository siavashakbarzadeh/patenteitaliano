// ─────────────────────────────────────────────────────────────────────────────
//  CAPITOLO 12 – محتوای آموزشی (ترجمه فارسی)
//  منبع: صفحات ۱۴۵–۱۴۹ کتاب پاتنته B
// ─────────────────────────────────────────────────────────────────────────────

import type { ChapterContent } from "@/lib/chapters/20/content";

export const chapter12Content: ChapterContent = {
  chapter: 12,
  titleIt: "Distanza di Sicurezza",
  titleFa: "فاصله ایمنی",
  pageRange: "ص ۱۴۵–۱۴۹",
  summary: "فاصله توقف یک وسیله برابر مجموع دو بخش است: فضای واکنش (spazio di reazione) که به سرعت و وضعیت راننده بستگی دارد، و فضای ترمز (spazio di frenatura) که به توان دوم سرعت بستگی دارد. فاصله ایمنی بین وسایل باید حداقل برابر مسافت واکنش در ۱ ثانیه باشد تا از تصادف جلوگیری شود.",
  sections: [

    // ─── متن اصلی ایتالیایی ───────────────────────────────────────────────────
    {
      id: "12-0-testo-italiano",
      titleIt: "Testo Originale – Capitolo 12",
      titleFa: "📖 متن اصلی ایتالیایی فصل ۱۲",
      body: [
        "**12.1 – Spazio (distanza) di arresto**\n\nIl conducente deve essere in grado di fermare il veicolo **entro i limiti del suo campo visivo** e in ogni caso prima di qualsiasi ostacolo prevedibile. La distanza (o spazio) di arresto è il **percorso compiuto dal veicolo da quando il conducente percepisce il pericolo a quando il veicolo si ferma**.",

        "Lo spazio di arresto è la somma di due distanze:\n• **Spazio di reazione:** il percorso compiuto durante il *tempo di reazione*, ovvero dall'istante in cui il conducente percepisce il pericolo all'istante in cui inizia a frenare.\n• **Spazio di frenatura:** il percorso compiuto dal momento in cui si inizia a frenare fino all'arresto del veicolo.\n\nIl tempo di reazione medio è di circa **1 secondo**; in questo lasso di tempo il veicolo percorre uno spazio che dipende dalla sua velocità:\n- a 30 km/h → ≈ 9 m\n- a 50 km/h → ≈ 14 m\n- a 100 km/h → ≈ 28 m\n- a 130 km/h → ≈ 36 m\n- a 150 km/h → ≈ 42 m",

        "Lo spazio di reazione aumenta se il conducente è **distratto**, se ha consumato alcol o droghe, se è affaticato o se usa il cellulare. Lo spazio di frenatura dipende invece dalla **velocità** (in modo quadratico: raddoppiando la velocità lo spazio di frenatura quadruplica), dall'**aderenza** tra pneumatici e strada, dalla **pendenza** della strada e dall'**efficienza dei freni**.\n\nIl **bloccaggio delle ruote** durante la frenata allunga lo spazio di frenatura. Il sistema **ABS** evita il bloccaggio delle ruote e consente di mantenere il controllo direzionale del veicolo.",

        "**12.2 – Distanza di sicurezza (Art. 149 C.d.S.)**\n\nDurante la marcia, il conducente deve mantenere una **distanza di sicurezza** tale da evitare collisioni con il veicolo che precede in caso di frenata improvvisa, tenendo conto della velocità e delle condizioni della strada.\n\nLa distanza di sicurezza dipende da:\n- velocità del veicolo\n- condizioni del traffico e del fondo stradale\n- stato di efficienza dei freni e dei pneumatici\n- entità del carico trasportato\n- prontezza di riflessi del conducente\n- condizioni atmosferiche\n\n**Non** dipende da: tipo di alimentazione, potenza o cilindrata del motore, presenza del servosterzo, numero di marce, dimensioni del veicolo, ampiezza della carreggiata.",

        "**Distanze speciali:**\n- Fuori dei centri abitati, su strade a unica corsia per senso di marcia, la distanza di sicurezza tra veicoli merci con massa superiore a **3,5 t** (a cui sia imposto il divieto di sorpasso) deve essere di almeno **100 m**.\n- I veicoli che seguono una **macchina sgombraneve** o una **spanditrice di sale** in azione devono mantenere una distanza di sicurezza di almeno **20 m**.",
      ],
      keyVerbs: [
        { italian: "entro i limiti del campo visivo", persian: "در محدوده دید", example: "Il conducente deve fermarsi entro i limiti del suo campo visivo. → راننده باید در محدوده دید خود بایستد." },
        { italian: "percepire il pericolo", persian: "درک خطر کردن", example: "Dal momento in cui percepisce il pericolo. → از لحظه‌ای که خطر را درک می‌کند." },
        { italian: "il bloccaggio delle ruote", persian: "قفل شدن چرخ‌ها", example: "Il bloccaggio delle ruote allunga lo spazio di frenatura. → قفل شدن چرخ‌ها فضای ترمز را طولانی‌تر می‌کند." },
        { italian: "mantenere una distanza di sicurezza", persian: "فاصله ایمنی را حفظ کردن", example: "Il conducente deve mantenere una distanza di sicurezza. → راننده باید فاصله ایمنی را حفظ کند." },
        { italian: "in caso di frenata improvvisa", persian: "در صورت ترمز ناگهانی", example: "Per evitare collisioni in caso di frenata improvvisa. → برای اجتناب از تصادف در صورت ترمز ناگهانی." },
      ],
      englishEquivalents: [
        { italian: "reazione", english: "reaction", note: "همان ریشه در فارسی: واکنش" },
        { italian: "frenatura", english: "braking", note: "فرنو = ترمز" },
        { italian: "aderenza", english: "adherence / grip", note: "چسبندگی لاستیک به جاده" },
        { italian: "pendenza", english: "gradient / slope", note: "شیب جاده" },
        { italian: "distanza", english: "distance", note: "فاصله" },
        { italian: "percorso", english: "path / distance covered", note: "مسیر پیموده شده" },
        { italian: "conducente", english: "conductor / driver", note: "همان ریشه در انگلیسی" },
        { italian: "improvviso", english: "improvised / sudden", note: "ناگهانی" },
      ],
      highlights: [
        "La distanza (o spazio) di arresto è il percorso compiuto dal veicolo da quando il conducente percepisce il pericolo a quando il veicolo si ferma.",
        "Il tempo di reazione medio è di circa 1 secondo.",
        "Raddoppiando la velocità lo spazio di frenatura quadruplica.",
        "Il bloccaggio delle ruote durante la frenata allunga lo spazio di frenatura.",
        "La distanza di sicurezza tra veicoli merci con massa superiore a 3,5 t deve essere di almeno 100 m.",
        "I veicoli che seguono una macchina sgombraneve devono mantenere una distanza di almeno 20 m.",
      ],
      notes: [
        "★ فضای واکنش به سرعت + وضع راننده بستگی دارد. فضای ترمز به سرعت + چسبندگی.",
        "★ دو برابر سرعت = چهار برابر فضای ترمز (توان دوم!)",
        "★ نوع سوخت، تعداد دنده‌ها، قدرت موتور = هیچ تأثیری بر فاصله ایمنی ندارند!",
        "★ ABS جلوی قفل شدن چرخ‌ها را میگیرد و کنترل فرمان را حفظ میکند.",
        "★ دید همیشه باید بیشتر از فاصله کل توقف باشد.",
      ],
    },

    // ─── ترجمه فارسی متن اصلی ─────────────────────────────────────────────────
    {
      id: "12-0-traduzione-persiana",
      titleIt: "Traduzione Persiana del Testo Originale",
      titleFa: "🇮🇷 ترجمه فارسی متن اصلی فصل ۱۲",
      body: [
        "**۱۲.۱ – فاصله (مسافت) توقف**\n\nراننده باید بتواند وسیله نقلیه را **در محدوده میدان دید خود** و در هر صورت پیش از هر مانع قابل پیش‌بینی متوقف کند. فاصله (یا مسافت) توقف عبارت است از **مسیری که وسیله نقلیه از لحظه‌ای که راننده خطر را درک می‌کند تا لحظه‌ای که وسیله می‌ایستد** طی می‌کند.",

        "فاصله توقف مجموع دو مسافت است:\n• **فاصله واکنش:** مسیری که در طول *زمان واکنش* طی می‌شود، یعنی از لحظه‌ای که راننده خطر را درک می‌کند تا لحظه‌ای که شروع به ترمز می‌کند.\n• **فاصله ترمز:** مسیری که از لحظه شروع ترمز تا توقف کامل وسیله طی می‌شود.\n\nزمان واکنش متوسط تقریباً **۱ ثانیه** است؛ در این فاصله زمانی وسیله مسافتی را طی می‌کند که به سرعت آن بستگی دارد:\n- در ۳۰ کیلومتر/ساعت → ≈ ۹ متر\n- در ۵۰ کیلومتر/ساعت → ≈ ۱۴ متر\n- در ۱۰۰ کیلومتر/ساعت → ≈ ۲۸ متر\n- در ۱۳۰ کیلومتر/ساعت → ≈ ۳۶ متر\n- در ۱۵۰ کیلومتر/ساعت → ≈ ۴۲ متر",

        "فاصله واکنش افزایش می‌یابد اگر راننده **حواس‌پرت** باشد، الکل یا مواد مخدر مصرف کرده باشد، خسته باشد یا از تلفن همراه استفاده کند. فاصله ترمز به **سرعت** بستگی دارد (به صورت توان دومی: با دو برابر شدن سرعت، فاصله ترمز چهار برابر می‌شود)، به **چسبندگی** بین لاستیک‌ها و جاده، به **شیب** جاده و به **کارایی ترمزها**.\n\n**قفل شدن چرخ‌ها** در حین ترمز، فاصله ترمز را طولانی‌تر می‌کند. سیستم **ABS** از قفل شدن چرخ‌ها جلوگیری کرده و حفظ کنترل جهت‌یابی وسیله را ممکن می‌سازد.",

        "**۱۲.۲ – فاصله ایمنی (ماده ۱۴۹ قانون راهنمایی رانندگی)**\n\nراننده در حین حرکت باید **فاصله ایمنی** را به گونه‌ای حفظ کند که از برخورد با وسیله جلویی در صورت ترمز ناگهانی جلوگیری شود.\n\nفاصله ایمنی به موارد زیر بستگی دارد:\n- سرعت وسیله\n- شرایط ترافیک و سطح جاده\n- وضعیت کارایی ترمزها و لاستیک‌ها\n- میزان بار حمل‌شده\n- سرعت واکنش راننده\n- شرایط جوی\n\n**بستگی ندارد به:** نوع سوخت، قدرت یا حجم موتور، وجود فرمان هیدرولیک، تعداد دنده‌ها، ابعاد وسیله، عرض باند.",

        "**فاصله‌های ویژه:**\n- خارج از مناطق مسکونی، در جاده‌های تک‌خطه، فاصله ایمنی بین وسایل باربر با وزن بیش از **۳.۵ تن** (که ممنوعیت سبقت دارند) باید حداقل **۱۰۰ متر** باشد.\n- وسایلی که پشت **ماشین برف‌روب** یا **نمک‌پاش** در حال کار حرکت می‌کنند باید فاصله ایمنی حداقل **۲۰ متر** را حفظ کنند.",
      ],
    },

    // ─── فاصله توقف ──────────────────────────────────────────────────────────
    {
      id: "12-1-spazio-arresto",
      titleIt: "12.1 – Spazio (Distanza) di Arresto di un Veicolo",
      titleFa: "۱۲.۱ – فاصله (فضای) توقف یک وسیله نقلیه",
      body: [
        "**فاصله کل توقف = دو بخش جمع می‌شوند:**\n\n```\n[PERCEZIONE PERICOLO] ──→ [INIZIO FRENATA] ──→ [ARRESTO]\n         ↑                        ↑\n  Spazio di REAZIONE        Spazio di FRENATURA\n  (زمان واکنش راننده)       (اثر ترمز تا توقف)\n```\n\n| بخش | تعریف | بستگی به |\n|-----|-------|----------|\n| **Spazio di Reazione** | از درک خطر تا شروع ترمز | سرعت + وضع روانی-جسمانی راننده |\n| **Spazio di Frenatura** | از شروع ترمز تا توقف کامل | سرعت + چسبندگی لاستیک به آسفالت |",
        "**زمان واکنش (Tempo di Reazione):**\n• میانگین: **≈ ۱ ثانیه** در شرایط خوب\n• فرمول تقریبی مسافت واکنش: **(سرعت ÷ ۱۰) × ۳** (مقدار را کمی کاهش دهید)\n\n| سرعت | مسافت واکنش |\n|------|-------------|\n| 30 km/h | ≈ 9 متر |\n| 50 km/h | ≈ 14 متر |\n| 100 km/h | ≈ 28 متر |\n| 130 km/h | ≈ 36 متر |\n| 150 km/h | ≈ 42 متر |\n\n⚠️ توجه: **حواس‌پرتی** (گوشی، رادیو) زمان واکنش را به‌شدت افزایش می‌دهد — حتی چند ثانیه می‌تواند منجر به تصادف شود!",
      ],
      keyVerbs: [
        { italian: "percepire il pericolo", persian: "درک کردن خطر", example: "Il conducente deve percepire il pericolo il prima possibile. → راننده باید تا آنجا که ممکن است سریع خطر را درک کند." },
        { italian: "iniziare la frenata", persian: "شروع به ترمز کردن", example: "Dopo il tempo di reazione si inizia la frenata. → بعد از زمان واکنش، فرایند ترمز شروع می‌شود." },
      ],
    },

    // ─── فضای ترمز ───────────────────────────────────────────────────────────
    {
      id: "12-2-frenatura",
      titleIt: "Spazio di Frenatura e Aderenza",
      titleFa: "فضای ترمز و چسبندگی",
      body: [
        "**فضای ترمز و سرعت — رابطه توان دوم:**\n\n| اگر سرعت... | فضای ترمز... |\n|------------|-------------|\n| دو برابر شود (×2) | **۴ برابر** می‌شود (2²=4) |\n| سه برابر شود (×3) | **۹ برابر** می‌شود (3²=9) |\n| چهار برابر شود (×4) | **۱۶ برابر** می‌شود (4²=16) |\n\n⚡ این مهم‌ترین رابطه در فصل ۱۲ است!",
        "**چسبندگی (Aderenza) — عوامل کاهش/افزایش:**\n\n| وضعیت | چسبندگی |\n|--------|----------|\n| آسفالت خشک + لاستیک نو | بیشترین |\n| آسفالت مرطوب | کمتر |\n| آسفالت خشک + لاستیک کهنه | کمتر |\n| گِل، ماسه، شن | خیلی کمتر |\n| یخ/برف + لاستیک معمولی | خطرناک |\n\n**شیب جاده:**\n• سرازیری (discesa): ترمز کردن سخت‌تر → فضای ترمز بیشتر\n• سربالایی (salita): ترمز کردن آسان‌تر → فضای ترمز کمتر",
        "**دقت در ترمز کردن:**\n• ترمز را به تدریج بفشارید (دهنبندی) — قفل شدن چرخ‌ها فضای توقف را بیشتر می‌کند!\n• ABS (Anti-lock Braking System) به طور خودکار از قفل شدن چرخ‌ها جلوگیری می‌کند\n• برای حداقل فضای ترمز: \n  - وسیله را بیش از حد بار نکنید\n  - عمق آج لاستیک را حفظ کنید",
      ],
      keyVerbs: [
        { italian: "evitare il bloccaggio delle ruote", persian: "از قفل شدن چرخ‌ها پرهیز کردن", example: "Bisogna frenare gradualmente per evitare il bloccaggio delle ruote. → باید به تدریج ترمز گرفت تا از قفل شدن چرخ‌ها جلوگیری شود." },
        { italian: "dipendere dal quadrato della velocità", persian: "به توان دوم سرعت بستگی داشتن", example: "Lo spazio di frenatura dipende dal quadrato della velocità. → فضای ترمز به توان دوم سرعت بستگی دارد." },
      ],
    },

    // ─── فاصله ایمنی بین وسایل ───────────────────────────────────────────────
    {
      id: "12-3-distanza-sicurezza",
      titleIt: "12.2 – Distanza di Sicurezza fra i Veicoli (Art. 149)",
      titleFa: "۱۲.۲ – فاصله ایمنی بین وسایل نقلیه (ماده ۱۴۹)",
      body: [
        "**تعریف:** فاصله ایمنی = حداقل فاصله‌ای که باید از وسیله جلویی نگه دارید تا در صورت خطر بتوانید به موقع بایستید و از تصادف (tamponamento) جلوگیری کنید.\n\n**حداقل فاصله ایمنی ≈ مسافت واکنش (≈ ۱ ثانیه حرکت):**\n\n| سرعت | حداقل فاصله ایمنی |\n|------|--------------------|\n| 30 km/h | ≈ 9 متر |\n| 50 km/h | ≈ 14 متر |\n| 100 km/h | ≈ 28 متر |\n| 130 km/h | ≈ 36 متر |\n| 150 km/h | ≈ 42 متر |",
        "**عواملی که فاصله ایمنی را تحت تأثیر قرار می‌دهند:**\n\n✅ **تأثیر دارند:**\n• سرعت وسیله\n• وضعیت جاده (ترافیک، سطح جاده)\n• نوع و وضعیت ترمزها\n• چسبندگی لاستیک‌ها\n• میزان بار\n• سرعت واکنش راننده\n• شرایط آب‌وهوایی\n\n❌ **تأثیر ندارند:**\n• نوع سوخت (بنزین/گازوئیل/گاز)\n• قدرت موتور / حجم موتور\n• وجود سروستار (فرمان هیدرولیک)\n• تعداد دنده‌های گیربکس\n• طول/عرض وسیله‌های درگیر\n• عرض باند / تعداد خط‌ها",
        "**افزایش فاصله ایمنی — شرایط خاص:**\n\n| وضعیت | فاصله ایمنی |\n|--------|-------------|\n| وسیله جلو بار برجسته / ناپایدار دارد | افزایش |\n| کاروان با دید کم | افزایش |\n| وسیله جلو ممکن است ناگهان بایستد | افزایش |\n\n**مقررات خاص:**\n• پشت ماشین‌های برف‌روب/نمک‌پاش: حداقل **۲۰ متر**\n• بین کامیون‌های +۳.۵ تن (با ممنوعیت سبقت، خارج از شهر، یک خط): حداقل **۱۰۰ متر**",
      ],
      keyVerbs: [
        { italian: "mantenere la distanza di sicurezza", persian: "حفظ کردن فاصله ایمنی", example: "Tutti i veicoli devono mantenere una distanza di sicurezza dal veicolo che precede. → همه وسایل باید فاصله ایمنی از وسیله جلویی را حفظ کنند." },
        { italian: "evitare tamponamenti", persian: "اجتناب از تصادف پشتی", example: "La distanza di sicurezza serve per evitare tamponamenti. → فاصله ایمنی برای جلوگیری از تصادف پشتی است." },
      ],
    },

    // ─── خلاصه و نکات کلیدی ──────────────────────────────────────────────────
    {
      id: "12-4-riassunto",
      titleIt: "Riassunto — Punti Chiave del Capitolo 12",
      titleFa: "خلاصه — نکات کلیدی فصل ۱۲",
      body: [
        "**نمودار ذهنی فصل ۱۲:**\n\n```\nفاصله کل توقف\n├── فضای واکنش  ←  سرعت + وضع راننده\n│      ≈ (v÷10)×3 متر\n└── فضای ترمز  ←  سرعت² + چسبندگی + شیب\n       دو برابر سرعت = چهار برابر فضا\n```\n\n**مهم‌ترین قوانین برای آزمون:**\n1. فضای واکنش ≈ (v/10)×3 متر\n2. فضای ترمز بستگی به **توان دوم** سرعت دارد\n3. قفل شدن چرخ = فضای بیشتر ← ترمز تدریجی!\n4. فاصله ایمنی حداقل = مسافت ۱ ثانیه حرکت\n5. پشت برف‌روب = حداقل ۲۰ متر\n6. کامیون‌های +۳.۵ تن (با ممنوعیت سبقت) = حداقل ۱۰۰ متر\n7. **دید ≥ فاصله کل توقف** (قانون اساسی!)",
      ],
      keyVerbs: [
        { italian: "la distanza di visibilità deve essere superiore allo spazio totale di arresto", persian: "فاصله دید باید بیشتر از فاصله کل توقف باشد", example: "Per sicurezza, la distanza di visibilità deve sempre essere superiore allo spazio totale di arresto. → برای ایمنی، فاصله دید باید همیشه بیشتر از فاصله کل توقف باشد." },
      ],
    },

  ],
};
