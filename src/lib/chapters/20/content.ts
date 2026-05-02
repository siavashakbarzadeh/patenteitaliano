// ─────────────────────────────────────────────────────────────────────────────
//  CAPITOLO 20 – محتوای آموزشی (ترجمه فارسی)
//  منبع: صفحات ۲۳۴–۲۴۷ کتاب پاتنته B
// ─────────────────────────────────────────────────────────────────────────────

export type KeyVerb = {
  italian: string;      // فعل یا اصطلاح ایتالیایی
  persian: string;      // معنی فارسی
  example: string;      // مثال از متن کتاب
};

export type EnglishEquivalent = {
  italian: string;      // واژه ایتالیایی
  english: string;      // معادل انگلیسی (برای حفظ بهتر)
  note?: string;        // توضیح اختیاری
};

export type ContentSection = {
  id: string;
  titleIt: string;      // عنوان ایتالیایی
  titleFa: string;      // عنوان فارسی
  body: string[];       // پاراگراف‌های محتوا
  keyVerbs?: KeyVerb[];
  englishEquivalents?: EnglishEquivalent[];   // معادل‌های انگلیسی
  highlights?: string[];                       // جمله‌های مرجع تست (هایلایت)
  notes?: string[];                            // نکات ستاره‌دار مهم
  images?: { src: string; caption?: string }[]; // عکس‌های تکمیلی
};

export type ChapterContent = {
  chapter: number;
  titleIt: string;
  titleFa: string;
  pageRange: string;
  summary?: string;     // خلاصه فصل (یک پاراگراف کوتاه)
  sections: ContentSection[];
};

export const chapter20Content: ChapterContent = {
  chapter: 20,
  titleIt: "Patenti di Guida – Sistema Sanzionatorio – Documenti di Circolazione – Obblighi verso Funzionari e Agenti – Uso di Lenti e di Altri Apparecchi",
  titleFa: "گواهینامه‌های رانندگی – سیستم جریمه – مدارک گردش – تعهدات در برابر مأموران – استفاده از عینک و وسایل دیگر",
  pageRange: "ص ۲۳۴–۲۴۷",
  sections: [

    // ─── 20.1 ─────────────────────────────────────────────────────────────────
    {
      id: "20-1-categorie",
      titleIt: "20.1 – Categorie di Patente",
      titleFa: "۲۰.۱ – دسته‌بندی گواهینامه‌ها",
      body: [
        "رانندگی با خودروها، موتورسیکلت‌ها یا موتورسیکلت‌های کوچک روی جاده‌های عمومی بدون داشتن گواهینامه رانندگی مناسب صادرشده پس از قبولی در آزمون خاص، ممنوع است (è vietato).",
        "دسته‌های گواهینامه برای رانندگی با خودروهای «سبک»، موتورسیکلت‌ها و موتورسیکلت‌های کوچک عبارتند از:",
        "🛵 AM — موتورسیکلت‌های کوچک ۲ و ۳ چرخ تا ۴۵ کیلومتر/ساعت، حجم موتور تا ۵۰ سی‌سی (موتور بنزینی) یا توان ≤ ۴ کیلووات (موتور الکتریکی). همچنین سه‌چرخه‌های سبک تا ۴۲۵ کیلوگرم وزن خالص. حداقل سن: ۱۴ سال.",
        "🏍️ A1 — موتورسیکلت‌های سبک با یا بدون کناره، حجم تا ۱۲۵ سی‌سی، توان تا ۱۱ کیلووات، نسبت توان/وزن تا ۰.۱ کیلووات/کیلوگرم. سه‌چرخه با توان تا ۱۵ کیلووات. ماشین‌های کشاورزی تا ۴۰ کیلومتر/ساعت. حداقل سن: ۱۶ سال. گواهینامه A1 همچنین اجازه رانندگی با وسایل نقلیه‌ای که با گواهینامه AM قابل رانندگی هستند را می‌دهد.",
        "🏍️ A2 — موتورسیکلت‌ها با حداکثر توان ۳۵ کیلووات، نسبت توان/وزن تا ۰.۲ کیلووات/کیلوگرم (مشروط به اینکه مدل مشابه با بیش از دو برابر توان وجود نداشته باشد). سه‌چرخه تا ۱۵ کیلووات. حداقل سن: ۱۸ سال.",
        "🏍️ A — موتورسیکلت‌های هر قدرت و حجمی. سه‌چرخه هر قدرتی (اگر توان بیش از ۱۵ کیلووات باشد، راننده باید حداقل ۲۱ سال داشته باشد). دریافت با دسترسی تدریجی (accesso graduale): از ۲۰ سالگی اگر حداقل ۲ سال دارنده A2 باشد. دریافت با دسترسی مستقیم (accesso diretto): از ۲۴ سالگی بدون نیاز به A2.",
        "🚗 B1 — سه‌چرخه‌های موتوری تا ۴۵۰ کیلوگرم (۶۰۰ کیلوگرم برای حمل بار)، توان حداکثر ۱۵ کیلووات. حداقل سن: ۱۶ سال.",
        "🚗 B — خودروها برای حمل حداکثر ۸ سرنشین (علاوه بر راننده)، وزن حداکثر ۳.۵ تن. همچنین در ایتالیا شامل: موتورسیکلت‌های سبک تا ۱۲۵ سی‌سی (۱۱ کیلووات)، سه‌چرخه با توان بیش از ۱۵ کیلووات (اگر راننده بیش از ۲۱ سال دارد). حداقل سن: ۱۸ سال.",
        "🚗 B+E — گواهینامه B به‌اضافه یدک با وزن بیش از ۷۵۰ کیلوگرم و تا ۳.۵ تن. حداقل سن: ۱۸ سال.",
      ],
      keyVerbs: [
        { italian: "è vietato", persian: "ممنوع است", example: "È vietato condurre senza patente. → رانندگی بدون گواهینامه ممنوع است." },
        { italian: "possono essere limitate", persian: "می‌توانند محدود شوند", example: "Le patenti speciali possono essere limitate. → گواهینامه‌های ویژه می‌توانند محدود شوند." },
        { italian: "abilita anche alla guida", persian: "همچنین اجازه رانندگی می‌دهد", example: "La patente A1 abilita anche alla guida dei veicoli AM. → گواهینامه A1 همچنین اجازه رانندگی با وسایل AM را می‌دهد." },
      ],
    },

    {
      id: "20-1-limitazioni",
      titleIt: "Limitazioni alla Guida – Neopatentati",
      titleFa: "محدودیت‌های رانندگی برای تازه‌گواهینامه‌ها",
      body: [
        "رانندگان در طول ۳ سال اول از دریافت گواهینامه (از تاریخ قبولی در آزمون) دارای محدودیت‌های زیر هستند:",
        "📌 محدودیت سرعت — دارندگان گواهینامه A2، A، B1، B نمی‌توانند (non possono) از این سرعت‌ها بگذرند:\n• ۱۰۰ کیلومتر/ساعت در بزرگراه (به جای ۱۳۰ عادی)\n• ۹۰ کیلومتر/ساعت در جاده‌های برون‌شهری اصلی (به جای ۱۱۰ عادی)",
        "📌 محدودیت قدرت — دارندگان گواهینامه B نمی‌توانند (non possono) خودرویی با نسبت توان/وزن بیشتر از ۷۵ کیلووات/تن رانندگی کنند. برای خودروهای M1 (اتومبیل‌های سواری): حداکثر ۱۰۵ کیلووات توان (شامل خودروهای برقی و پلاگین).",
        "⚠️ این محدودیت قدرت اعمال نمی‌شود:\n• برای وسایل نقلیه در خدمت افراد دارای معلولیت\n• وقتی در کنار راننده، فرد آموزش‌دهنده‌ای با سن حداکثر ۶۵ سال نشسته که دارنده گواهینامه بالاتر یا گواهینامه B با حداقل ۱۰ سال سابقه باشد",
        "این محدودیت‌ها مربوط به کسانی است که گواهینامه‌شان را پس از ۱۴/۱۲/۲۰۲۴ دریافت کرده‌اند.",
      ],
      keyVerbs: [
        { italian: "non possono superare", persian: "نمی‌توانند از ... بگذرند", example: "I neopatentati non possono superare 100 km/h. → تازه‌گواهینامه‌ها نمی‌توانند از ۱۰۰ کیلومتر بگذرند." },
        { italian: "non si applicano", persian: "اعمال نمی‌شوند", example: "Le limitazioni non si applicano ai disabili. → محدودیت‌ها برای معلولان اعمال نمی‌شوند." },
        { italian: "decorrono", persian: "شروع می‌شوند / از ... حساب می‌شوند", example: "Le limitazioni decorrono dalla data dell'esame. → محدودیت‌ها از تاریخ آزمون شروع می‌شوند." },
      ],
    },

    {
      id: "20-1-durata",
      titleIt: "Durata e Conferma della Validità della Patente",
      titleFa: "مدت اعتبار و تأیید گواهینامه",
      body: [
        "گواهینامه‌های رانندگی همزمان با قبولی در آزمون صادر می‌شوند و برای مدت‌های زیر معتبرند:",
        "📅 ۱۰ سال — گواهینامه‌های AM، A1، A2، A، B1، B، BE صادرشده یا تأییدشده برای کسانی که از ۵۰ سالگی نگذشته‌اند.",
        "📅 ۵ سال — برای کسانی که از ۵۰ سالگی گذشته‌اند. همچنین برای گواهینامه‌های ویژه (BS - B اسپشیال) برای کسانی که از ۷۰ سالگی نگذشته‌اند.",
        "📅 ۳ سال — برای کسانی که از ۷۰ سالگی گذشته‌اند.",
        "📅 ۲ سال — برای کسانی که از ۸۰ سالگی گذشته‌اند.",
        "📌 تاریخ انقضای گواهینامه با تاریخ تولد دارنده هماهنگ است (coincide con la data di nascita del titolare).",
        "✅ گواهینامه تأیید می‌شود (viene confermata) اگر دارنده هنوز واجد شرایط جسمی و روانی باشد، پس از معاینه پزشکی موفق توسط پزشک مجاز. اگر کسی دارنده چند گواهینامه باشد (مثلاً A و B)، برای تمدید هر دو یک معاینه کافی است. از روز بعد از انقضا، اگر گواهینامه تمدید نشود، رانندگی با هیچ وسیله نقلیه‌ای ممکن نیست.",
      ],
      keyVerbs: [
        { italian: "non ha superato", persian: "نگذشته است / تجاوز نکرده است", example: "Chi non ha superato il 50° anno → کسی که از ۵۰ سالگی نگذشته است." },
        { italian: "ha superato", persian: "گذشته است / تجاوز کرده است", example: "Chi ha superato il 70° anno → کسی که از ۷۰ سالگی گذشته است." },
        { italian: "coincide", persian: "مطابقت دارد / یکی است", example: "La scadenza coincide con la data di nascita. → انقضا با تاریخ تولد مطابقت دارد." },
        { italian: "viene confermata", persian: "تأیید می‌شود", example: "La patente viene confermata dopo la visita medica. → گواهینامه پس از معاینه پزشکی تأیید می‌شود." },
        { italian: "è sufficiente", persian: "کافی است", example: "Una sola visita è sufficiente. → یک معاینه کافی است." },
      ],
    },

    // ─── 20.2 ─────────────────────────────────────────────────────────────────
    {
      id: "20-2-punti",
      titleIt: "20.2 – Patente a Punti",
      titleFa: "۲۰.۲ – گواهینامه امتیازی",
      body: [
        "«گواهینامه امتیازی» (patente a punti) یک سیستم «نظارت بر تخلفات و آموزش رانندگان» است که به سیستم سنتی توقف/بازبینی/تعلیق/لغو گواهینامه اضافه می‌شود (si aggiunge).",
        "🔢 به هر راننده در ابتدا ۲۰ امتیاز داده می‌شود (vengono attribuiti 20 punti).",
        "📉 این امتیاز کاهش می‌یابد (diminuisce) هنگام ارتکاب تخلفات خاص طبق جدول مشخص (پیوست ۱ کتاب).",
        "⚠️ وقتی راننده امتیازش را تمام کرد (ha esaurito i punti)، باید تحت بازبینی گواهینامه قرار گیرد (ripetizione degli esami teorico e pratico — تکرار آزمون نظری و عملی).",
        "📈 شرکت در دوره‌های آموزشی در آموزشگاه‌های مجاز، امکان بازیابی ۶ امتیاز را می‌دهد (permette il recupero di 6 punti)، حداکثر تا ۲۰ امتیاز (مشروط به قبولی در آزمون پایانی طبق قانونی که باید اجرایی شود).",
        "🔝 حداکثر امتیاز قابل داشتن ۳۰ امتیاز است. کسی که ۲۰ یا بیشتر امتیاز دارد و ۲ سال تخلف نکند، ۲ امتیاز اضافه دریافت می‌کند (۱ امتیاز اضافه برای تازه‌گواهینامه‌ها).",
        "⚠️ تخلفات ارتکابی در ۳ سال اول از صدور اولین گواهینامه، با دو برابر امتیاز جریمه می‌شوند (sanzionate con il doppio dei punti previsti).",
        "📌 اگر همزمان چند تخلف تشخیص داده شود با کسر امتیاز، حداکثر ۱۵ امتیاز در یک‌بار کسر می‌شود (possono essere decurtati un massimo di 15).",
        "✅ اگر راننده ۲ سال بدون تخلف (با کسر امتیاز) باشد، به‌طور خودکار به ۲۰ امتیاز برمی‌گردد (rientra in possesso di tutti i punti).",
      ],
      keyVerbs: [
        { italian: "si aggiunge", persian: "اضافه می‌شود", example: "La patente a punti si aggiunge al sistema sanzionatorio. → گواهینامه امتیازی به سیستم جریمه اضافه می‌شود." },
        { italian: "vengono attribuiti", persian: "داده می‌شوند / اعطا می‌شوند", example: "20 punti vengono attribuiti a ogni conducente. → ۲۰ امتیاز به هر راننده داده می‌شود." },
        { italian: "diminuisce", persian: "کاهش می‌یابد", example: "Il punteggio diminuisce con le infrazioni. → امتیاز با تخلفات کاهش می‌یابد." },
        { italian: "ha esaurito i punti", persian: "امتیازش را تمام کرده است", example: "Quando il conducente ha esaurito i punti... → وقتی راننده امتیازش را تمام کرده..." },
        { italian: "permette il recupero", persian: "امکان بازیابی می‌دهد", example: "I corsi permettono il recupero di 6 punti. → دوره‌ها امکان بازیابی ۶ امتیاز را می‌دهند." },
        { italian: "sanzionate con il doppio", persian: "با دو برابر جریمه می‌شوند", example: "Le violazioni dei neopatentati sono sanzionate con il doppio. → تخلفات تازه‌گواهینامه‌ها با دو برابر جریمه می‌شوند." },
        { italian: "possono essere decurtati", persian: "می‌توانند کسر شوند", example: "Un massimo di 15 punti possono essere decurtati. → حداکثر ۱۵ امتیاز می‌توانند کسر شوند." },
        { italian: "rientra in possesso", persian: "دوباره صاحب می‌شود", example: "Il conducente rientra in possesso di tutti i punti. → راننده دوباره صاحب همه امتیازها می‌شود." },
      ],
    },

    {
      id: "20-2-punti-esempi",
      titleIt: "Esempi di Infrazioni con Perdita di Punti",
      titleFa: "نمونه تخلفاتی که باعث کسر امتیاز می‌شوند",
      body: [
        "طبق کتاب، برخی از تخلفات مهمی که باعث کسر امتیاز از گواهینامه می‌شوند:",
        "🚗 تجاوز از حد سرعت بیش از ۱۰ کیلومتر/ساعت در حین رانندگی",
        "🚗 عدم رعایت برخی قوانین مانور سبقت",
        "📱 استفاده از تلفن همراه بدون هندزفری یا بلندگو در حین رانندگی",
        "⛑️ رانندگی بدون کلاه ایمنی (موتورسیکلت) یا با کلاه ایمنی بسته‌نشده",
        "📏 عدم رعایت فاصله ایمنی که منجر به تصادف شود",
        "💡 عدم استفاده یا استفاده نادرست از چراغ‌ها در حین رانندگی",
        "👥 رانندگی با بار یا تعداد سرنشینان بیش از حد مجاز",
        "👓 عدم استفاده از عینک در حین رانندگی (اگر تجویز شده باشد)",
        "🛣️ رانندگی در خط اضطراری بزرگراه خارج از موارد مجاز",
        "💊 رانندگی زیر تأثیر مواد مخدر",
        "⚠️ مثال از کتاب (گروه سوالات ۱۲۰۲۵): عبور از خط عابر پیاده بدون دادن اولویت به عابران، باعث کسر امتیاز می‌شود.",
        "⚠️ مثال از کتاب (گروه سوالات ۲۳۰۳۷): عدم رعایت قوانین ورود به جریان ترافیک، باعث کسر امتیاز می‌شود.",
        "⚠️ مثال از کتاب (گروه سوالات ۲۶۰۲۱): توقف در فضاهای اختصاصی ایستگاه اتوبوس/تراموا و وسایل نقلیه ریلی، باعث کسر امتیاز می‌شود.",
      ],
      keyVerbs: [
        { italian: "comporta la perdita di punti", persian: "باعث کسر امتیاز می‌شود", example: "Usare il cellulare comporta la perdita di punti. → استفاده از موبایل باعث کسر امتیاز می‌شود." },
        { italian: "non rispettare", persian: "عدم رعایت / رعایت نکردن", example: "Non rispettare i limiti comporta... → عدم رعایت محدودیت‌ها باعث..." },
      ],
    },

    {
      id: "20-2-sanzioni",
      titleIt: "Tipologia delle Sanzioni – Ritiro, Sospensione, Revoca, Revisione",
      titleFa: "انواع جریمه‌ها – توقف، تعلیق، لغو، بازبینی گواهینامه",
      body: [
        "علاوه بر جریمه مالی و کسر امتیاز، جریمه‌های دیگری نیز وجود دارند:",
        "🔴 توقف گواهینامه (Ritiro della patente): مأمور پلیس می‌تواند در برخی موارد خاص فوراً گواهینامه را توقف کند. این گواهینامه نزد مأمور باقی می‌ماند تا مراحل رسیدگی انجام شود.",
        "🟡 تعلیق گواهینامه (Sospensione della patente): گواهینامه برای مدت معین (یا نامعین) از اعتبار می‌افتد. راننده در این مدت حق رانندگی ندارد. موارد تعلیق:\n• تجاوز از بیش از ۴۰ کیلومتر/ساعت از حد مجاز\n• رانندگی در خط اضطراری بزرگراه (خارج از موارد مجاز)\n• رانندگی زیر تأثیر الکل یا مواد مخدر\n• امتناع از آزمایش الکل\n• رانندگی بدون گواهینامه یا با گواهینامه معلق\n• رانندگی با وسیله نقلیه توقیف‌شده\n• رانندگی بدون بیمه اجباری\n• عبور از چراغ قرمز\n• تازه‌گواهینامه‌ها که محدودیت‌های سرعت را رعایت نمی‌کنند",
        "🔴 لغو گواهینامه (Revoca della patente): از دست دادن دائمی گواهینامه. توسط اداره موتوریزاسیون (UMC)، قوه قضاییه یا استاندار (نه پلیس) صادر می‌شود — هنگامی که راننده به‌طور دائمی واجد شرایط جسمی یا روانی لازم نباشد. موارد لغو:\n• رانندگی علی‌رغم تعلیق گواهینامه\n• رانندگی جهت معکوس در بزرگراه یا رانندگی در خلاف جهت\n• تبدیل گواهینامه کشور خارجی (برای جلوگیری از داشتن ۲ گواهینامه همزمان)",
        "🔵 بازبینی گواهینامه (Revisione della patente): یک «اقدام فنی» است که توسط UMC یا استاندار صادر می‌شود. راننده باید معاینه پزشکی و/یا آزمون صلاحیت فنی بدهد. موارد:\n• رانندگی در حالت مستی از الکل یا مواد مخدر\n• تصادف با ایجاد آسیب جدی به افراد\n• صفر شدن امتیاز گواهینامه\n⚠️ اگر راننده آزمون بازبینی را نگذراند (non supera l'esame)، گواهینامه‌اش فوری لغو می‌شود (subisce l'immediata revoca).",
      ],
      keyVerbs: [
        { italian: "perde permanentemente", persian: "به‌طور دائم از دست می‌دهد", example: "Il titolare perde permanentemente i requisiti. → دارنده به‌طور دائم شرایط را از دست می‌دهد." },
        { italian: "è disposta", persian: "صادر/تعیین می‌شود", example: "La revoca è disposta dall'UMC. → لغو توسط UMC صادر می‌شود." },
        { italian: "subisce l'immediata revoca", persian: "فوراً لغو می‌شود", example: "Chi non supera l'esame subisce l'immediata revoca. → کسی که آزمون را نگذراند فوراً لغو می‌شود." },
        { italian: "non supera", persian: "قبول نمی‌شود / نمی‌گذرد", example: "Il conducente che non supera l'esame... → راننده‌ای که آزمون را نمی‌گذرد..." },
        { italian: "provvede in modo immediato", persian: "فوراً اقدام می‌کند", example: "L'agente provvede in modo immediato. → مأمور فوراً اقدام می‌کند." },
      ],
    },

    // ─── 20.3 ─────────────────────────────────────────────────────────────────
    {
      id: "20-3-circolazione",
      titleIt: "20.3 – Carta di Circolazione / Documento Unico (DU) e Certificato di Proprietà",
      titleFa: "۲۰.۳ – برگ ثبت / مدرک یکتا (DU) و گواهی مالکیت",
      body: [
        "خودروها، موتورسیکلت‌ها و یدک‌ها برای تردد باید دارای برگ ثبت / مدرک یکتا (carta di circolazione / Documento Unico — DU) باشند و در اداره حمل‌ونقل (Dipartimento dei Trasporti — D.T.) ثبت شده باشند (immatricolati).",
        "📋 مرجع ثبت (D.T.) برگ ثبت را به نام کسی صادر می‌کند که خودش را مالک اعلام کند (si dichiara proprietario).",
        "📍 هر تغییر آدرس دارنده روی برگ ثبت یادداشت می‌شود (viene annotato).",
        "🚫 ممنوع است (è vietato) رانندگی با خودروی ثبت‌نشده روی جاده‌های عمومی. اما لازم نیست برگ ثبت به نام راننده باشد — می‌توان خودروی دیگران را رانندگی کرد.",
        "📄 اطلاعات روی برگ ثبت: داده‌های ثبت (پلاک و مشخصات وسیله)، داده‌های شناسایی (کارخانه، شماره شاسی، ابعاد)، تعداد سرنشینان، نوع استفاده، وزن و ظرفیت یدک، نوع موتور و سوخت.",
        "🏛️ برای خودروهای ثبت‌شده در PRA (دفتر عمومی خودروها)، علاوه بر برگ ثبت، گواهی مالکیت (certificato di proprietà) نیز صادر می‌شود — اما لازم نیست همراه داشته باشید.",
      ],
      keyVerbs: [
        { italian: "immatricolati", persian: "ثبت‌شده (پلاک‌گذاری‌شده)", example: "I veicoli devono essere immatricolati. → وسایل نقلیه باید ثبت شده باشند." },
        { italian: "si dichiara proprietario", persian: "خودش را مالک اعلام می‌کند", example: "A chi si dichiara proprietario del veicolo. → به کسی که خودش را مالک وسیله اعلام می‌کند." },
        { italian: "viene annotato", persian: "یادداشت می‌شود", example: "Ogni cambiamento di residenza viene annotato. → هر تغییر آدرس یادداشت می‌شود." },
      ],
    },

    // ─── 20.4 ─────────────────────────────────────────────────────────────────
    {
      id: "20-4-targhe",
      titleIt: "20.4 – Targhe di Immatricolazione",
      titleFa: "۲۰.۴ – پلاک‌های شناسایی",
      body: [
        "خودروها باید هم جلو (anteriormente) و هم عقب (posteriormente) پلاک شناسایی داشته باشند. موتورسیکلت‌ها، موتورسیکلت‌های کوچک و یدک‌ها فقط پلاک عقب دارند.",
        "📌 پلاک‌ها باید:\n• محکم نصب شوند (apposte saldamente)\n• در موقعیت صحیح باشند (non possono essere piegate — نباید خم شوند)\n• همیشه خوانا باشند (sempre ben leggibili)\n• دستکاری یا جعل نشوند (non devono essere manomesse o contraffatte)\n• اگر ناخوانا شوند، باید دوباره ثبت شوند (reimmatricolazione)",
        "🟡 یدک‌بارها (carrelli appendice): وقتی به کشنده وصل می‌شوند (agganciati ad una motrice)، باید پلاک تکرارکننده داشته باشند — پلاک زرد با حرف R قرمز.",
        "🅿️ پلاک آزمایشی (targa prova): برای خودروهایی که برای آزمون فنی، آماده‌سازی فروش یا نمایش روی جاده تردد می‌کنند. رنگ: سفید با حروف/اعداد آبی.",
        "🅿️ پلاک P: خودروهای آموزش رانندگی باید پلاک «P» (principiante = مبتدی) مشکی روی سفید، هم جلو و هم عقب داشته باشند.",
        "🟡 نشان GA: خودروهای رانندگی همراه (guida accompagnata) باید نشان «GA» روی زمینه زرد داشته باشند. فقط دانش‌آموز راننده و «همراه تعیین‌شده» مجاز به نشستن در خودرو هستند.",
        "🔓 در صورت گم‌شدن یا دزدیده شدن (smarrimento, sottrazione) یا از بین رفتن (distruzione) پلاک، دارنده باید ظرف ۴۸ ساعت به پلیس اعلام کند (fare denuncia). پلیس رسیدی صادر می‌کند که امکان تردد موقت را می‌دهد. پس از ۱۵ روز باید پلاک دوباره ثبت شود (reimmatricolare).",
      ],
      keyVerbs: [
        { italian: "apposte saldamente", persian: "محکم نصب‌شده", example: "Le targhe devono essere apposte saldamente. → پلاک‌ها باید محکم نصب شوند." },
        { italian: "ben leggibili", persian: "به‌خوبی خوانا", example: "I dati devono essere sempre ben leggibili. → داده‌ها باید همیشه به‌خوبی خوانا باشند." },
        { italian: "non devono essere manomesse", persian: "نباید دستکاری شوند", example: "Le targhe non devono essere manomesse o contraffatte. → پلاک‌ها نباید دستکاری یا جعل شوند." },
        { italian: "agganciati", persian: "وصل‌شده / متصل‌شده", example: "I carrelli agganciati ad una motrice... → یدک‌بارهای متصل به کشنده..." },
        { italian: "fare denuncia", persian: "اعلام جرم کردن / گزارش دادن", example: "Deve fare denuncia entro 48 ore. → باید ظرف ۴۸ ساعت گزارش دهد." },
      ],
    },

    // ─── 20.5 ─────────────────────────────────────────────────────────────────
    {
      id: "20-5-documenti",
      titleIt: "20.5 – Documenti di Circolazione e di Guida: Obblighi verso Funzionari e Agenti",
      titleFa: "۲۰.۵ – مدارک گردش و رانندگی: تکالیف در برابر مأموران",
      body: [
        "هرکسی که خودرو یا موتورسیکلت می‌راند، باید مدارک زیر را همراه داشته باشد (deve avere con sé) و به درخواست مأموران ارائه دهد (deve esibire):",
        "1️⃣ برگ ثبت مربوط به وسیله نقلیه‌ای که می‌راند (carta di circolazione relativa al veicolo che conduce)",
        "2️⃣ گواهینامه رانندگی معتبر (patente di guida valida) — یا «فرگ رزا» برگه موقت (foglio rosa)",
        "3️⃣ گواهی بیمه مسئولیت مدنی (certificato di assicurazione per la responsabilità civile) — می‌تواند به صورت دیجیتال هم باشد",
        "4️⃣ گواهی صلاحیت حرفه‌ای یا CQC (در صورت لزوم، برای رانندگان حرفه‌ای)",
        "5️⃣ مجوز یا پروانه (در صورت لزوم)",
        "📌 مأموران پلیس (agenti) حق دارند این مدارک را بخواهند. راننده باید همکاری کند (deve collaborare). عدم نشان دادن مدارک، جریمه دارد.",
      ],
      keyVerbs: [
        { italian: "deve avere con sé", persian: "باید همراه داشته باشد", example: "Chi guida deve avere con sé i documenti. → کسی که رانندگی می‌کند باید مدارک را همراه داشته باشد." },
        { italian: "deve esibire", persian: "باید ارائه دهد / نشان دهد", example: "Il conducente deve esibire la patente. → راننده باید گواهینامه را نشان دهد." },
        { italian: "a richiesta degli agenti", persian: "به درخواست مأموران", example: "...ed esibire, a richiesta degli agenti. → ...و ارائه دهد، به درخواست مأموران." },
        { italian: "relativa al veicolo che conduce", persian: "مربوط به وسیله‌ای که می‌راند", example: "Carta di circolazione relativa al veicolo che conduce. → برگ ثبت مربوط به وسیله‌ای که می‌راند." },
      ],
    },

    // ─── 20.6 ─────────────────────────────────────────────────────────────────
    {
      id: "20-6-lenti",
      titleIt: "20.6 – Uso di Lenti e di Altri Apparecchi durante la Guida",
      titleFa: "۲۰.۶ – استفاده از عینک و وسایل دیگر در حین رانندگی",
      body: [
        "🚫 ممنوع است (è vietato) برای راننده در حین حرکت:\n• استفاده از تلفن همراه با دست (apparecchi radiotelefonici)\n• استفاده از هدفون صوتی (cuffie sonore)",
        "✅ مجاز است (è consentito):\n• استفاده از بلندگو یا هندزفری که نیازی به دست ندارد\n• استفاده از گوشی (auricolare) که برای کارکردش نیاز به دست نیست\n• ارسال SMS یا برنامه‌ریزی وقتی خودرو در حال حرکت نیست",
        "🗺️ سیستم‌های ناوبری (GPS): استفاده از آن‌ها در حین حرکت ممنوع نیست اما نباید حین حرکت برنامه‌ریزی شوند (non devono essere programmati mentre il veicolo è in movimento).",
        "👓 کد ۰۱ روی گواهینامه = اجبار به استفاده از عینک یا لنز تماسی در تمام ساعات رانندگی (obbligo di lenti). رانندگی بدون عینک (با این کد): جریمه مالی + احتمال تعلیق گواهینامه.",
        "📋 این ماده از کدکستا (Art. 173 C.d.S. e art. 322 Reg.) استخراج شده است.",
      ],
      keyVerbs: [
        { italian: "è vietato", persian: "ممنوع است", example: "È vietato usare il cellulare durante la guida. → استفاده از موبایل حین رانندگی ممنوع است." },
        { italian: "è consentito", persian: "مجاز است / اجازه داده می‌شود", example: "È consentito l'uso del vivavoce. → استفاده از بلندگو مجاز است." },
        { italian: "non devono essere programmati", persian: "نباید برنامه‌ریزی شوند", example: "I GPS non devono essere programmati in movimento. → GPS‌ها نباید حین حرکت برنامه‌ریزی شوند." },
        { italian: "obbligo di lenti", persian: "اجبار به استفاده از عینک", example: "Il codice 01 = obbligo di lenti. → کد ۰۱ = اجبار به استفاده از عینک." },
        { italian: "comporta sanzione", persian: "جریمه دارد / منجر به جریمه می‌شود", example: "Guidare senza occhiali comporta sanzione. → رانندگی بدون عینک جریمه دارد." },
      ],
    },

  ],
};
