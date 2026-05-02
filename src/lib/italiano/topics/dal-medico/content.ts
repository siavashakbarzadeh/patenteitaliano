// ─── Dal Medico — Content ────────────────────────────────────────────────────
// Vocabulario, frasi, dialogo e note grammaticali per l'argomento "Dal Medico"
import type { ItalianoTopic } from "@/lib/italiano";

export const dalMedicoContent: ItalianoTopic = {
  id: "dal-medico",
  title: "Dal Medico",
  titleFa: "پیش دکتر",
  icon: "🏥",
  color: "#0ea5e9",
  colorBg: "linear-gradient(135deg, rgba(14,165,233,0.25), rgba(16,185,129,0.12))",
  level: "beginner",
  levelFa: "مبتدی",
  description: "Medical vocabulary, symptoms, and doctor visits",
  descriptionFa: "واژگان پزشکی، علائم بیماری و ویزیت دکتر",
  culturalTip:
    "در ایتالیا برای ویزیت پزشک عمومی (Medico di Base) باید تلفنی وقت بگیرید. " +
    "پزشک عمومی (MMG) رایگان است اما متخصص نیاز به ارجاع (impegnativa) دارد.",

  vocabulary: [
    { italian: "il dottore / la dottoressa", persian: "دکتر (مرد/زن)", phonetic: "dottore / dottoressa", example: "Il dottore mi visita.", examplePersian: "دکتر معاینه‌ام می‌کند." },
    { italian: "il paziente / la paziente", persian: "بیمار (مرد/زن)", phonetic: "paziente", example: "Il paziente aspetta in sala d'attesa.", examplePersian: "بیمار در اتاق انتظار صبر می‌کند." },
    { italian: "la ricetta", persian: "نسخه پزشکی", phonetic: "ricetta", example: "Ho bisogno di una ricetta.", examplePersian: "به نسخه نیاز دارم." },
    { italian: "il farmaco / la medicina", persian: "دارو", phonetic: "farmaco / medicina", example: "Prendo questa medicina tre volte al giorno.", examplePersian: "این دارو را روزی سه بار می‌گیرم." },
    { italian: "il dolore", persian: "درد", phonetic: "dolore", example: "Ho un forte dolore alla schiena.", examplePersian: "درد شدیدی در پشتم دارم." },
    { italian: "la febbre", persian: "تب", phonetic: "febbre", example: "Ho la febbre a 38.", examplePersian: "تبم ۳۸ درجه است." },
    { italian: "la tosse", persian: "سرفه", phonetic: "tosse", example: "Ho la tosse da tre giorni.", examplePersian: "سه روز است سرفه دارم." },
    { italian: "il raffreddore", persian: "سرماخوردگی", phonetic: "raffreddore", example: "Ho preso un raffreddore.", examplePersian: "سرما خوردم." },
    { italian: "l'influenza", persian: "آنفولانزا", phonetic: "influenza", example: "Quest'anno ho fatto il vaccino per l'influenza.", examplePersian: "امسال واکسن آنفولانزا زدم." },
    { italian: "l'allergia", persian: "آلرژی", phonetic: "allergia", example: "Sono allergico alla penicillina.", examplePersian: "به پنی‌سیلین آلرژی دارم." },
    { italian: "la pressione", persian: "فشارخون", phonetic: "pressione", example: "Mi misura la pressione, per favore?", examplePersian: "لطفاً فشارخونم را اندازه بگیرید؟" },
    { italian: "l'appuntamento", persian: "وقت/نوبت", phonetic: "appuntamento", example: "Vorrei prendere un appuntamento.", examplePersian: "می‌خواهم وقت بگیرم." },
    { italian: "l'ambulatorio", persian: "مطب/کلینیک", phonetic: "ambulatorio", example: "L'ambulatorio è aperto il mattino.", examplePersian: "مطب صبح‌ها باز است." },
    { italian: "la farmacia", persian: "داروخانه", phonetic: "farmacia", example: "Dov'è la farmacia più vicina?", examplePersian: "نزدیک‌ترین داروخانه کجاست؟" },
    { italian: "il pronto soccorso", persian: "اورژانس", phonetic: "pronto soccorso", example: "Dobbiamo andare al pronto soccorso!", examplePersian: "باید به اورژانس برویم!" },
    { italian: "il mal di testa", persian: "سردرد", phonetic: "mal di testa", example: "Ho un forte mal di testa.", examplePersian: "سردرد شدیدی دارم." },
    { italian: "la nausea", persian: "حالت تهوع", phonetic: "nausea", example: "Mi sento male, ho la nausea.", examplePersian: "حالم خوب نیست، حالت تهوع دارم." },
    { italian: "il medico di base", persian: "پزشک عمومی", phonetic: "medico di base", example: "Il mio medico di base si chiama Rossi.", examplePersian: "پزشک عمومی‌ام دکتر روسی نام دارد." },

    // ── Corpo Umano ──
    { italian: "la testa", persian: "سر", phonetic: "testa", example: "Ho mal di testa.", examplePersian: "سردرد دارم." },
    { italian: "il viso / la faccia", persian: "صورت", phonetic: "viso / faccia", example: "Ha un bel viso.", examplePersian: "صورت زیبایی دارد." },
    { italian: "l'occhio — gli occhi", persian: "چشم — چشم‌ها", phonetic: "occhio", example: "Ho gli occhi azzurri.", examplePersian: "چشمانم آبی است." },
    { italian: "il naso", persian: "بینی", phonetic: "naso", example: "Ho il naso chiuso.", examplePersian: "بینی‌ام گرفته." },
    { italian: "la bocca", persian: "دهان", phonetic: "bocca", example: "Apra la bocca, per favore.", examplePersian: "لطفاً دهانتان را باز کنید." },
    { italian: "l'orecchio — le orecchie", persian: "گوش — گوش‌ها", phonetic: "orecchio", example: "Ho mal d'orecchio.", examplePersian: "گوش‌درد دارم." },
    { italian: "il collo", persian: "گردن", phonetic: "collo", example: "Ho mal di gola e dolore al collo.", examplePersian: "گلودرد و گردن‌درد دارم." },
    { italian: "la gola", persian: "گلو", phonetic: "gola", example: "Ho mal di gola.", examplePersian: "گلو درد دارم." },
    { italian: "la spalla", persian: "شانه", phonetic: "spalla", example: "Mi fa male la spalla destra.", examplePersian: "شانه راستم درد می‌کند." },
    { italian: "il braccio — le braccia", persian: "بازو — بازوها", phonetic: "braccio", example: "Mi sono rotto il braccio.", examplePersian: "بازویم را شکستم." },
    { italian: "il gomito", persian: "آرنج", phonetic: "gomito", example: "Ho il gomito gonfio.", examplePersian: "آرنجم متورم است." },
    { italian: "il polso", persian: "مچ دست", phonetic: "polso", example: "Mi misura il polso?", examplePersian: "مچ دستم را اندازه می‌گیرید؟" },
    { italian: "la mano — le mani", persian: "دست — دست‌ها", phonetic: "mano", example: "Mi fanno male le mani.", examplePersian: "دست‌هایم درد می‌کنند." },
    { italian: "il dito — le dita", persian: "انگشت — انگشتان", phonetic: "dito", example: "Mi sono tagliato un dito.", examplePersian: "انگشتم را بریدم." },
    { italian: "il torace / il petto", persian: "قفسه سینه", phonetic: "torace", example: "Ho un dolore al petto.", examplePersian: "درد قفسه سینه دارم." },
    { italian: "la schiena", persian: "کمر/پشت", phonetic: "schiena", example: "Ho mal di schiena.", examplePersian: "کمردرد دارم." },
    { italian: "l'addome / la pancia", persian: "شکم", phonetic: "addome", example: "Ho mal di stomaco.", examplePersian: "معده‌ام درد می‌کند." },
    { italian: "il ginocchio — le ginocchia", persian: "زانو — زانوها", phonetic: "ginocchio", example: "Mi fa male il ginocchio.", examplePersian: "زانویم درد می‌کند." },
    { italian: "la gamba", persian: "پا (ساق)", phonetic: "gamba", example: "Ho la gamba rotta.", examplePersian: "پایم شکسته." },
    { italian: "il piede — i piedi", persian: "پا (کف) — پاها", phonetic: "piede", example: "Mi fanno male i piedi.", examplePersian: "کف پاهایم درد می‌کند." },
    // Organi interni
    { italian: "il cuore", persian: "قلب", phonetic: "cuore", example: "Ho un problema al cuore.", examplePersian: "مشکل قلبی دارم." },
    { italian: "i polmoni", persian: "ریه‌ها", phonetic: "polmoni", example: "Fumare fa male ai polmoni.", examplePersian: "سیگار کشیدن به ریه‌ها آسیب می‌زند." },
    { italian: "lo stomaco", persian: "معده", phonetic: "stomaco", example: "Ho lo stomaco a disagio.", examplePersian: "معده‌ام ناراحت است." },
    { italian: "il fegato", persian: "کبد", phonetic: "fegato", example: "Il fegato filtra il sangue.", examplePersian: "کبد خون را فیلتر می‌کند." },
    { italian: "i reni", persian: "کلیه‌ها", phonetic: "reni", example: "Ho un calcolo ai reni.", examplePersian: "سنگ کلیه دارم." },
    { italian: "l'encefalo / il cervello", persian: "مغز", phonetic: "cervello", example: "Ha avuto un trauma cerebrale.", examplePersian: "ضربه مغزی خورده." },
  ],

  phrases: [
    { italian: "Non mi sento bene.", persian: "حالم خوب نیست.", context: "بیان احساس بد عمومی" },
    { italian: "Ho bisogno di un medico.", persian: "به دکتر نیاز دارم.", context: "درخواست کمک پزشکی" },
    { italian: "Vorrei prendere un appuntamento.", persian: "می‌خواهم وقت بگیرم.", context: "تلفن به مطب" },
    { italian: "Mi fa male qui.", persian: "اینجا دردم می‌آید.", context: "نشان دادن محل درد" },
    { italian: "Ho mal di testa / stomaco / schiena.", persian: "سردرد / دل‌درد / کمردرد دارم.", context: "بیان نوع درد" },
    { italian: "Da quanto tempo ha questo dolore?", persian: "از چه وقت این درد را دارید؟", context: "سوال دکتر" },
    { italian: "Da tre giorni.", persian: "سه روز است.", context: "پاسخ به سوال مدت" },
    { italian: "Sono allergico/a a...", persian: "به ... آلرژی دارم.", context: "اطلاع از آلرژی" },
    { italian: "Prendo questi farmaci.", persian: "این داروها را مصرف می‌کنم.", context: "معرفی داروهای مصرفی" },
    { italian: "Dove devo comprare la medicina?", persian: "دارو را کجا باید بخرم؟", context: "بعد از دریافت نسخه" },
    { italian: "Quante volte al giorno?", persian: "روزی چند بار؟", context: "سوال درباره دوز دارو" },
    { italian: "Prima o dopo i pasti?", persian: "قبل یا بعد از غذا؟", context: "سوال درباره زمان مصرف دارو" },
    { italian: "Ha la tessera sanitaria?", persian: "کارت بهداشت دارید؟", context: "سوال در مطب" },
    { italian: "Devo restare a letto?", persian: "باید استراحت بکنم؟", context: "سوال از دکتر" },
    { italian: "Può scrivere la ricetta?", persian: "می‌توانید نسخه بنویسید؟", context: "درخواست نسخه" },
  ],

  dialogue: [
    { speaker: "A", role: "Paziente",     italian: "Buongiorno, vorrei prendere un appuntamento con il dottor Bianchi.", persian: "صبح بخیر، می‌خواهم با دکتر بیانکی وقت بگیرم." },
    { speaker: "B", role: "Receptionist", italian: "Buongiorno! Per quando lo vuole?", persian: "صبح بخیر! برای چه زمانی می‌خواهید؟" },
    { speaker: "A", role: "Paziente",     italian: "Il prima possibile. Non mi sento bene da ieri.", persian: "هرچه زودتر. از دیروز حالم خوب نیست." },
    { speaker: "B", role: "Receptionist", italian: "Riesce a venire domani mattina alle 10?", persian: "می‌توانید فردا صبح ساعت ۱۰ بیایید؟" },
    { speaker: "A", role: "Paziente",     italian: "Sì, perfetto. Grazie.", persian: "بله، عالی است. ممنون." },
    { speaker: "B", role: "Receptionist", italian: "Ha la tessera sanitaria?", persian: "کارت بهداشت دارید؟" },
    { speaker: "A", role: "Paziente",     italian: "Sì, ce l'ho.", persian: "بله، دارم." },
    { speaker: "B", role: "Receptionist", italian: "Bene. L'aspettiamo domani. Arriva dieci minuti prima, per favore.", persian: "خوب. فردا منتظرتان هستیم. لطفاً ده دقیقه زودتر بیایید." },
    { speaker: "B", role: "Dottore",      italian: "Allora, cosa succede? Come si sente?", persian: "خب، چه مشکلی دارید؟ حالتان چطور است؟" },
    { speaker: "A", role: "Paziente",     italian: "Ho mal di gola e la febbre da due giorni. Ho anche la tosse.", persian: "دو روز است گلودرد و تب دارم. همچنین سرفه هم دارم." },
    { speaker: "B", role: "Dottore",      italian: "Apra la bocca, per favore. Dica «Aaah».", persian: "لطفاً دهانتان را باز کنید. بگویید «آه»." },
    { speaker: "A", role: "Paziente",     italian: "Aaah.", persian: "آه." },
    { speaker: "B", role: "Dottore",      italian: "Ha anche mal di testa o dolori muscolari?", persian: "سردرد یا دردهای عضلانی هم دارید؟" },
    { speaker: "A", role: "Paziente",     italian: "Sì, mi fanno male le ossa.", persian: "بله، استخوان‌هایم درد می‌کنند." },
    { speaker: "B", role: "Dottore",      italian: "Probabilmente è un'influenza. Le scrivo una ricetta.", persian: "احتمالاً آنفولانزاست. برایتان نسخه می‌نویسم." },
    { speaker: "A", role: "Paziente",     italian: "Devo restare a casa?", persian: "باید خانه بمانم؟" },
    { speaker: "B", role: "Dottore",      italian: "Sì, per almeno tre giorni. Riposo, acqua e questi medicinali.", persian: "بله، حداقل سه روز. استراحت، آب زیاد و این داروها." },
  ],

  grammarNotes: [
    {
      title: "Fare Male — بیان درد",
      body:
        "برای بیان درد از «mi fa male + عضو» یا «ho mal di + عضو» استفاده می‌شود:\n" +
        "• Mi fa male la testa. = سرم درد می‌کند.\n" +
        "• Ho mal di testa. = سردرد دارم.\n" +
        "• Mi fanno male le gambe. = پاهایم درد می‌کنند. (جمع = fanno)",
    },
    {
      title: "Essere Allergico/a — آلرژی داشتن",
      body:
        "• Sono allergico a... (مرد)\n" +
        "• Sono allergica a... (زن)\n" +
        "• Sono allergico/a alla penicillina.\n" +
        "• Sono allergico/a agli antibiotici.",
    },
    {
      title: "Da + مدت زمان",
      body:
        "برای بیان مدت زمان ادامه یک حالت:\n" +
        "• Ho la febbre da tre giorni. = سه روز است تب دارم.\n" +
        "• Mi fa male da stamattina. = از صبح امروز دردم می‌آید.",
    },
    {
      title: "Plurali Irregolari — جمع نامنظم اعضای بدن",
      body:
        "برخی اعضای بدن جمع نامنظم دارند:\n" +
        "• il braccio  → le braccia  (بازو) | un braccio, due braccia\n" +
        "• la mano    → le mani     (دست) | una mano, due mani\n" +
        "• il dito    → le dita     (انگشت) | un dito, due dita\n" +
        "• il ginocchio → le ginocchia (زانو)\n" +
        "• l'orecchio  → le orecchie  (گوش)\n" +
        "• il labbro  → le labbra    (لب)",
    },
    {
      title: "Verbi di azione con parti del corpo",
      body:
        "فعل‌های مرتبط با اعضای بدن:\n" +
        "• Vedere → con gli occhi (دیدن با چشم)\n" +
        "• Sentire / Ascoltare → con le orecchie (شنیدن با گوش)\n" +
        "• Mangiare / Parlare → con la bocca (خوردن/صحبت با دهان)\n" +
        "• Toccare / Prendere → con le mani (لمس/گرفتن با دست)\n" +
        "• Camminare / Correre → con le gambe (راه رفتن/دویدن با پا)",
    },
  ],

  reading: {
    title: "Andare dal Medico",
    titleFa: "رفتن پیش دکتر",
    sections: [
      {
        heading: "Il Corpo Umano — Capo",
        headingFa: "بدن انسان — سر و صورت",
        body:
          "La testa è composta da molte parti importanti.\n\n" +
          "Il viso (la faccia): fronte, occhi, sopracciglia, ciglia, palpebre, naso, narici, guance, zigomi, bocca, labbra, denti, mento.\n" +
          "Il collo: la gola (parte interna), la nuca (parte posteriore).\n\n" +
          "Le parti principali della testa:\n" +
          "• La Testa: gli occhi, il naso, la bocca, le orecchie, i capelli.\n" +
          "• Il Collo: la parte che sostiene la testa.\n\n" +
          "Denti e bocca: Labbra · Denti · Palato duro · Palato molle · Lingua · Gengiva · Tonsille · Ugola.\n\n" +
          "Le sopracciglia e le ciglia: Fondamentali per le espressioni e la protezione.\n" +
          "Le palpebre: La pelle che copre l'occhio.\n" +
          "Le tempie: Le zone ai lati della fronte.\n" +
          "Le guance e gli zigomi: La parte carnosa e l'osso sporgente del viso.\n" +
          "La mascella e la mandibola: Le ossa che permettono di masticare.\n" +
          "Le narici: I due fori del naso.",
        bodyFa:
          "سر از بخش‌های زیادی تشکیل شده:\n\n" +
          "صورت: پیشانی، چشم‌ها، ابروها، مژه‌ها، پلک‌ها، بینی، سوراخ‌های بینی، گونه‌ها، گوشه‌های استخوانی صورت، دهان، لب‌ها، دندان‌ها، چانه.\n" +
          "گردن: گلو (قسمت داخلی)، نوک گردن (قسمت پشتی).\n\n" +
          "اعضای اصلی داخل دهان: لب‌ها، دندان‌ها، کام سخت، کام نرم، زبان، لثه، لوزه‌ها، زبان کوچک.",
        keywords: ["fronte", "occhi", "sopracciglio", "naso", "bocca", "orecchio", "collo", "guance", "gola", "denti", "labbra", "lingua"],
      },
      {
        heading: "Il Corpo Umano — Tronco e Arti",
        headingFa: "بدن انسان — تنه و اندام‌ها",
        body:
          "Il Tronco: la schiena, la pancia (addome), il petto.\n\n" +
          "Parti del tronco:\n" +
          "• Il petto / Il torace.\n" +
          "• L'addome / La pancia.\n" +
          "• Il girovita (o vita): Dove si mette la cintura.\n" +
          "• I fianchi.\n\n" +
          "Arti superiori (Le Braccia):\n" +
          "La spalla: Collega il braccio al tronco.\n" +
          "Il gomito: Parte centrale dell'arto superiore.\n" +
          "Il polso: Articolazione tra mano e braccio.\n" +
          "La mano (le mani) · il dito (le dita).\n\n" +
          "Le dita della mano: Pollice, Indice, Medio, Anulare, Mignolo.\n" +
          "Parti della mano: Il palmo, il dorso, le nocche e le unghie.\n\n" +
          "Arti inferiori (Le Gambe):\n" +
          "L'anca: Collega la gamba al bacino.\n" +
          "Il ginocchio: Articolazione dell'arto inferiore.\n" +
          "La caviglia: Collega il piede alla gamba.\n" +
          "Il piede: Il tallone, la pianta del piede, il collo del piede e le dita (l'alluce è il più grande).\n\n" +
          "Anatomia Interna:\n" +
          "Ossa e Scheletro: la colonna vertebrale (composta da vertebre), il cranio, le costole.\n" +
          "Organi: il cervello, il cuore, i polmoni, il fegato, lo stomaco, i reni.\n" +
          "Tessuti: i muscoli, i tendini, i vasi sanguigni (arterie e vene).",
        bodyFa:
          "تنه: کمر/پشت، شکم، قفسه سینه.\n\n" +
          "اندام‌های فوقانی (دست‌ها):\n" +
          "شانه: بازو را به تنه وصل می‌کند.\n" +
          "آرنج: وسط اندام فوقانی.\n" +
          "مچ دست: مفصل بین دست و بازو.\n" +
          "انگشتان: شست، اشاره، میانی، انگشت حلقه، کوچک.\n\n" +
          "اندام‌های تحتانی (پاها):\n" +
          "لگن: پا را به کمر وصل می‌کند.\n" +
          "زانو: مفصل اندام تحتانی.\n" +
          "مچ پا: پا را به ساق وصل می‌کند.\n" +
          "کف پا: پاشنه، کف پا، انگشتان پا (شست بزرگ‌ترین است).\n\n" +
          "اندام‌های داخلی: مغز، قلب، ریه‌ها، کبد، معده، کلیه‌ها، ماهیچه‌ها، رگ‌ها.",
        keywords: ["torace", "addome", "schiena", "braccio", "gomito", "polso", "mano", "dita", "ginocchio", "caviglia", "piede", "colonna vertebrale", "cuore", "polmoni"],
        callout: {
          title: "Plurali irregolari importanti:",
          items: [
            "il braccio → le braccia",
            "la mano → le mani",
            "il dito → le dita",
            "il ginocchio → le ginocchia",
            "l'orecchio → le orecchie",
          ],
        },
      },
      {

        heading: "Visite per un disturbo",
        headingFa: "ویزیت برای بیماری",
        body:
          "Quando si sviluppano sintomi o altri disturbi di natura medica, fra una visita preventiva e l'altra, potrebbe sorgere il dubbio se sottoporsi o meno a una visita. Molti sintomi e disturbi possono essere gestiti a casa.\n" +
          "Ad esempio, la maggior parte dei normali raffreddori non richiede l'attenzione del medico o il trattamento con un antibiotico. Gran parte dei piccoli tagli e delle abrasioni può essere trattata inizialmente con acqua e un detergente delicato e poi applicando una pomata antibiotica e una copertura protettiva.\n" +
          "I soggetti con determinati disturbi dovranno sottoporsi a una visita medica relativamente urgente allo sviluppo di nuovi sintomi. Ad esempio, un individuo affetto da broncopneumopatia cronica (asma o broncopneumopatia cronica ostruttiva) mostra segni di difficoltà respiratoria o un soggetto immunodepresso che sviluppi febbre dovrà rivolgersi immediatamente al medico.\n" +
          "In caso di dubbi sulla necessità di recarsi dal medico o da un altro specialista, chiamare il medico di base per un parere. Per domande non urgenti, alcuni medici sono disposti ad essere contattati via e-mail o attraverso un portale online.",
        bodyFa:
          "وقتی علائم یا ناراحتی‌های پزشکی ایجاد می‌شود، ممکن است شک داشته باشید که آیا باید به دکتر بروید یا نه. بسیاری از مشکلات را می‌توان در خانه درمان کرد.\n" +
          "برای مثال، سرماخوردگی معمولی نیازی به آنتی‌بیوتیک ندارد. زخم‌های کوچک را می‌توان با آب و صابون و پماد آنتی‌بیوتیک درمان کرد.\n" +
          "اما برخی بیماران مانند مبتلایان به آسم یا دیابت باید در صورت بروز علائم جدید فوراً به پزشک مراجعه کنند.\n" +
          "در صورت تردید، با پزشک عمومی‌تان تماس بگیرید.",
        keywords: ["raffreddori", "antibiotico", "visita medica", "urgente", "broncopneumopatia", "difficoltà respiratoria", "febbre", "medico di base"],
        callout: {
          title: "Cosa fare in caso di bisogno:",
          items: [
            "Chiamare il proprio medico di famiglia negli orari lavorativi.",
            "Se il medico non è disponibile, chiamare il 116117 per la Guardia Medica.",
            "In caso di urgenza grave, chiamare il 112 o il 118.",
          ],
        },
      },
      {
        heading: "Visite di routine e scelta del Medico di Base",
        headingFa: "ویزیت‌های دوره‌ای و انتخاب پزشک عمومی",
        body:
          "In linea generale, tutti dovrebbero sottoporsi a visite di routine dal medico di base, dal dentista e dall'oculista nell'ambito di un piano di assistenza preventiva. Le donne dovrebbero sottoporsi a controlli periodici presso il medico di base o il ginecologo per esami ginecologici.\n" +
          "Generalmente, i bambini e gli anziani necessitano di visite preventive più frequenti, ma la frequenza dipende anche dalle condizioni di salute del soggetto.\n\n" +
          "La scelta del medico di base si può fare online tramite il Fascicolo Sanitario Elettronico (FSE), recandosi agli Sportelli Unici (CUP/ASL), o talvolta in farmacia.\n" +
          "Online: Accedere al portale del FSE della propria regione → sezione \"Servizi online\" → \"Scelta/revoca medico\".\n" +
          "Di persona: Recarsi agli Sportelli Unici del Distretto sanitario (AUSL/ASL).\n" +
          "Documenti necessari: tessera sanitaria.",
        bodyFa:
          "همه باید به‌طور منظم نزد پزشک عمومی، دندانپزشک و چشم‌پزشک بروند. زنان باید معاینات زنان را انجام دهند.\n" +
          "کودکان و سالمندان به ویزیت‌های پیشگیرانه بیشتری نیاز دارند.\n\n" +
          "برای انتخاب پزشک عمومی می‌توانید از طریق پورتال FSE منطقه‌تان، یا حضوری در ASL اقدام کنید.\n" +
          "مدرک مورد نیاز: کارت بهداشت (tessera sanitaria)",
        keywords: ["Fascicolo Sanitario Elettronico", "CUP", "ASL", "medico di base", "ginecologo", "tessera sanitaria"],
        callout: {
          title: "Criteri per scegliere il medico:",
          items: [
            "Prossimità: Scegliere un medico con lo studio vicino.",
            "Orari e accessibilità: Verificare gli orari di ricevimento.",
            "Pediatra: Per bambini 0-6 anni è obbligatorio. Dai 6 ai 14 anni si può scegliere tra pediatra e medico di base.",
            "Domicilio: Per chi vive in una regione diversa dalla residenza, è possibile scegliere il medico nel luogo di domicilio (a tempo determinato).",
          ],
        },
      },
      {
        heading: "Come prenotare una visita in Italia",
        headingFa: "نحوه نوبت‌گیری در ایتالیا",
        body:
          "Per fare una visita specialistica in Italia, il sistema usa la ricetta (chiamata anche \"impegnativa\" o \"prescrizione\").\n\n" +
          "Il Medico di Base: È il primo passo obbligatorio. Lui valuta il problema e scrive la ricetta elettronica.\n" +
          "Il CUP (Centro Unico di Prenotazione): Una volta che hai la ricetta, puoi prenotare visite specialistiche (es. dermatologo, cardiologo) o esami del sangue in diversi modi:\n\n" +
          "In Farmacia: È il modo più comune e veloce. Porti la ricetta e il farmacista ti dice dove e quando c'è posto.\n" +
          "Online / App: Molte regioni hanno portali come CUPWeb (Emilia-Romagna) o app come Salute Lazio e ER Salute.\n" +
          "Telefono: Chiamando il numero verde regionale del CUP.\n\n" +
          "Il Fascicolo Sanitario Elettronico (FSE): È il tuo \"cassetto digitale\" dove trovi tutte le ricette, i referti degli esami e le vaccinazioni senza bisogno di carta.",
        bodyFa:
          "برای ویزیت متخصص در ایتالیا، سیستم بر پایه نسخه (ricetta یا impegnativa) کار می‌کند.\n\n" +
          "ابتدا باید نزد پزشک عمومی بروید تا برایتان نسخه الکترونیکی بنویسد.\n" +
          "سپس می‌توانید از طریق داروخانه، اپ‌های منطقه‌ای مثل CUPWeb یا با تلفن نوبت بگیرید.\n\n" +
          "FSE (پرونده بهداشتی الکترونیک) جایی است که تمام نسخه‌ها، نتایج آزمایش‌ها و واکسن‌هایتان ذخیره می‌شود.",
        keywords: ["ricetta", "impegnativa", "CUP", "Fascicolo Sanitario Elettronico", "FSE", "medico di base", "farmacia"],
      },
      {
        heading: "Andare al Pronto Soccorso",
        headingFa: "رفتن به اورژانس",
        body:
          "Il Pronto Soccorso è per le emergenze gravi. Se stai molto male, vai in ospedale o chiama il 112.\n" +
          "Quando arrivi, un infermiere ti fa delle domande. Lui decide chi entra prima. Se hai un problema leggero, devi aspettare molto tempo.\n\n" +
          "Si va al Pronto Soccorso solo quando c'è un'emergenza reale, come un forte dolore al petto o un incidente grave. Se il problema non è urgente, è meglio andare dal proprio medico di base.\n" +
          "All'ingresso, l'infermiere fa il triage: assegna un codice colore in base alla gravità. I casi più gravi entrano subito, mentre i \"codici bianchi\" (problemi piccoli) aspettano molte ore. Il servizio è gratuito per le emergenze, ma a volte si paga un ticket se la visita non è urgente.\n\n" +
          "Parole chiave:\n" +
          "Emergenza: un problema di salute molto grave.\n" +
          "Infermiera/e: la persona che ti accoglie all'inizio.\n" +
          "Aspettare: stare in sala d'attesa prima della visita.\n" +
          "Triage: il sistema per decidere chi è più urgente.\n\n" +
          "Ricorda di portare sempre la tua tessera sanitaria.",
        bodyFa:
          "اورژانس (Pronto Soccorso) فقط برای موارد اضطراری جدی است. اگر حالتان خیلی بد است، به بیمارستان بروید یا ۱۱۲ را بزنید.\n\n" +
          "هنگام ورود، پرستار تریاژ انجام می‌دهد: بر اساس شدت بیماری، یک کد رنگ تعیین می‌کند. موارد جدی‌تر زودتر وارد می‌شوند. مشکلات کوچک (کد سفید) باید ساعت‌ها منتظر بمانند.\n" +
          "خدمات برای موارد اضطراری رایگان است اما برای موارد غیراضطراری ممکن است هزینه (ticket) داشته باشد.\n\n" +
          "همیشه کارت بهداشت (tessera sanitaria) همراه داشته باشید.",
        keywords: ["Pronto Soccorso", "triage", "emergenza", "112", "tessera sanitaria", "ticket"],
        callout: {
          title: "🚨 اعداد اضطراری مهم:",
          items: [
            "112 — اورژانس عمومی (پلیس، آمبولانس، آتش‌نشانی)",
            "118 — آمبولانس",
            "116117 — Guardia Medica (پزشک شب و تعطیلات)",
            "800 274 274 — خط سلامت NurSind (مشاوره رایگان)",
          ],
        },
      },

      // ── NEW SECTIONS FROM SLIDES ──────────────────────────────────────────
      {
        heading: "Quando andare al Pronto Soccorso?",
        headingFa: "چه موقع به اورژانس برویم؟",
        body:
          "Se hai un problema di salute molto grave (un'urgenza), devi chiamare subito il 118 o il numero delle emergenze. " +
          "Loro manderanno un'ambulanza per portarti all'ospedale più vicino.\n" +
          "A volte è difficile capire se un dolore è grave. Però, è importante conoscere i sintomi dei problemi più pericolosi, " +
          "come l'attacco di cuore.\n" +
          "In generale, devi usare il buon senso: se pensi che la tua vita sia in pericolo, vai subito al Pronto Soccorso.\n\n" +
          "Parole chiave spiegate:\n" +
          "Urgenza: Un problema che deve essere curato subito.\n" +
          "Chiamare il 118: Telefonare per chiedere aiuto medico.\n" +
          "Sintomo: Un segnale del corpo (es. il dolore).\n" +
          "Fatale: Qualcosa di molto pericoloso che può portare alla morte.\n" +
          "Buon senso: Capacità di capire cosa è giusto fare in una situazione.",
        bodyFa:
          "اگر مشکل بهداشتی بسیار جدی دارید (اورژانس)، فوراً با ۱۱۸ یا شماره اضطراری تماس بگیرید. آنها آمبولانس می‌فرستند.\n" +
          "گاهی تشخیص این‌که آیا دردی جدی است یا نه سخت است. اما مهم است علائم بیماری‌های خطرناک مثل حمله قلبی را بدانید.\n" +
          "به‌طور کلی از شعور عمومی استفاده کنید: اگر فکر می‌کنید جانتان در خطر است، فوراً به اورژانس بروید.",
        keywords: ["urgenza", "118", "ambulanza", "Pronto Soccorso", "sintomo", "attacco di cuore"],
      },
      {
        heading: "Visite al Pronto Soccorso — Sintomi gravi",
        headingFa: "علائمی که نیاز به اورژانس دارند",
        body:
          "Le vere urgenze vanno affrontate rivolgendosi al 118 o al servizio di emergenza locale che provvederà al trasporto " +
          "in ambulanza fino all'ospedale più vicino.\n" +
          "Tuttavia, decidere l'urgenza di un sintomo è talvolta difficile, perché le variabili sono numerose. " +
          "È utile avere una conoscenza più ampia possibile dei sintomi legati a condizioni potenzialmente fatali.\n\n" +
          "I seguenti esempi richiedono chiaramente una visita al pronto soccorso:\n" +
          "• Segni di un attacco cardiaco come dolore toracico, respiro affannoso\n" +
          "• Segni di un ictus, quali improvvisa debolezza muscolare, paralisi, sensibilità anomala o perdita di sensibilità su un lato del corpo, problemi di vista, improvvise vertigini, perdita di equilibrio\n" +
          "• Difficoltà respiratoria\n" +
          "• Emorragia abbondante\n" +
          "• Ustioni aperte\n" +
          "• Grave lesione\n" +
          "• Reazione allergica grave\n" +
          "• Segni di shock\n" +
          "• Dolore improvviso e grave in qualsiasi parte del corpo\n" +
          "• Vomito di sangue\n" +
          "• Tosse con sangue\n" +
          "• Peggioramento improvviso e grave di seria patologia cronica, come asma o diabete",
        bodyFa:
          "علائم زیر به اورژانس فوری نیاز دارند:\n" +
          "• علائم حمله قلبی: درد قفسه سینه، تنگی نفس\n" +
          "• علائم سکته مغزی: ضعف ناگهانی عضلات، فلج یک طرف بدن، مشکلات بینایی، سرگیجه\n" +
          "• مشکل تنفسی\n" +
          "• خونریزی شدید\n" +
          "• سوختگی باز\n" +
          "• آسیب شدید\n" +
          "• واکنش آلرژیک شدید\n" +
          "• علائم شوک\n" +
          "• درد ناگهانی و شدید در هر قسمت بدن\n" +
          "• استفراغ خونی\n" +
          "• سرفه خونی\n" +
          "• بدتر شدن ناگهانی بیماری مزمن جدی مثل آسم یا دیابت",
        keywords: ["attacco cardiaco", "ictus", "Difficoltà respiratoria", "Emorragia", "shock", "118", "ambulanza"],
      },
      {
        heading: "Come ottenere una visita medica in Italia",
        headingFa: "چطور در ایتالیا ویزیت پزشکی بگیریم",
        body:
          "Quando ci si sente male, le modalità per ottenere una visita medica in Italia dipendono dall'orario, dal giorno e dalla gravità della situazione.\n\n" +
          "Medico di Medicina Generale (Medico di base): È il primo riferimento per malattie non urgenti, dal lunedì al venerdì, durante l'orario di ambulatorio.\n\n" +
          "Guardia Medica (Continuità Assistenziale): Per situazioni non urgenti che si verificano di notte (dopo le 20:00), nei giorni festivi o prefestivi, quando il medico di base non è in servizio.\n" +
          "Numero Unico: Si contatta chiamando il numero 116117.\n\n" +
          "Visita domiciliare: Il medico di base o la guardia medica possono effettuare visite a casa, ma spetta a loro valutarne l'effettiva necessità.\n\n" +
          "Numeri di Emergenza:\n" +
          "112 (Numero Unico di Emergenza): Per situazioni di emergenza sanitaria grave.\n" +
          "118: Per le emergenze sanitarie.\n\n" +
          "Altri servizi:\n" +
          "Guardia Medica Turistica: Attivabile tramite il 116117 per chi si trova fuori dalla propria residenza.\n" +
          "Teleconsulto/Video Consulenza: Alcuni servizi, anche privati, offrono valutazioni online in caso di mancata disponibilità di visite a domicilio.\n\n" +
          "Il Numero Europeo Armonizzato 116117 è il numero telefonico per richiedere assistenza, prestazioni o consigli sanitari non urgenti ed è rivolto a tutti i cittadini, italiani e stranieri.",
        bodyFa:
          "نحوه گرفتن ویزیت پزشکی در ایتالیا به ساعت، روز و شدت بیماری بستگی دارد:\n\n" +
          "پزشک عمومی (Medico di base): اولین مرجع برای بیماری‌های غیراضطراری، دوشنبه تا جمعه در ساعات مطب.\n\n" +
          "Guardia Medica: برای موارد غیراضطراری که شب (بعد از ۲۰:۰۰)، تعطیلات یا روزهای قبل از تعطیلات پیش می‌آید. شماره: ۱۱۶۱۱۷\n\n" +
          "ویزیت در منزل: پزشک عمومی یا Guardia Medica می‌توانند به خانه بیایند، اما خودشان تصمیم می‌گیرند.\n\n" +
          "اعداد اضطراری:\n" +
          "۱۱۲ — اورژانس عمومی\n" +
          "۱۱۸ — اورژانس پزشکی\n" +
          "۱۱۶۱۱۷ — Guardia Medica (برای غیرایتالیایی‌ها نیز کار می‌کند)",
        keywords: ["Medico di base", "Guardia Medica", "116117", "112", "118", "visita domiciliare"],
        callout: {
          title: "ℹ️ شماره اروپایی ۱۱۶۱۱۷",
          items: [
            "برای مشاوره و کمک پزشکی غیراضطراری",
            "برای همه شهروندان، ایتالیایی و خارجی",
            "شب‌ها، تعطیلات و روزهای قبل از تعطیلات فعال است",
          ],
        },
      },
      {
        heading: "Processo per stranieri: Iscriversi al SSN",
        headingFa: "ثبت‌نام بیگانگان در SSN",
        body:
          "Per una persona straniera con permesso di soggiorno, il processo per farsi visitare da un medico in Italia " +
          "consiste principalmente nell'iscrizione al Servizio Sanitario Nazionale (SSN).\n\n" +
          "1. Iscrizione alla ASL\n" +
          "Devi recarti presso gli uffici della ASL (Azienda Sanitaria Locale) del comune dove risiedi o dove hai " +
          "il domicilio indicato nel permesso di soggiorno.\n\n" +
          "Documenti necessari:\n" +
          "• Permesso di soggiorno valido (o la ricevuta che attesta la richiesta di rilascio o rinnovo).\n" +
          "• Codice Fiscale.\n" +
          "• Documento di identità (passaporto).\n" +
          "• Autocertificazione di residenza o domicilio.\n\n" +
          "2. Scelta del Medico di Medicina Generale (Medico di Base)\n" +
          "Al momento dell'iscrizione alla ASL, potrai scegliere il tuo medico di base da un elenco di professionisti " +
          "disponibili nella tua zona. L'iscrizione ha la stessa durata del permesso di soggiorno e deve essere rinnovata " +
          "alla scadenza di quest'ultimo. Riceverai la Tessera Sanitaria, che dovrai portare con te a ogni visita.\n\n" +
          "3. Prenotare la visita\n" +
          "Una volta scelto il medico, puoi contattarlo direttamente per fissare un appuntamento.\n" +
          "Visite generiche: Ti rivolgi al tuo medico di base per controlli, malattie comuni o per farti prescrivere farmaci.\n" +
          "Visite specialistiche: Se hai bisogno di un cardiologo, un ortopedico o altri specialisti, il tuo medico di base " +
          "dovrà farti l'impegnativa (la \"ricetta rossa\" o elettronica), con la quale potrai poi prenotare la visita " +
          "tramite il centro prenotazioni (CUP) della tua città.\n\n" +
          "Nota importante: Se il permesso di soggiorno non è ancora pronto ma hai la ricevuta della posta o della Questura, " +
          "hai comunque diritto all'iscrizione provvisoria al SSN.",
        bodyFa:
          "برای خارجیان دارای اجازه اقامت، فرآیند دریافت خدمات پزشکی در ایتالیا شامل ثبت‌نام در SSN است:\n\n" +
          "۱. ثبت‌نام در ASL\n" +
          "به دفتر ASL شهر محل سکونت یا اقامت خود بروید.\n\n" +
          "مدارک لازم:\n" +
          "• اجازه اقامت معتبر (یا رسید درخواست صدور/تمدید)\n" +
          "• کد مالیاتی (Codice Fiscale)\n" +
          "• گذرنامه\n" +
          "• خودگواهی آدرس سکونت\n\n" +
          "۲. انتخاب پزشک عمومی\n" +
          "هنگام ثبت‌نام یک پزشک از لیست موجود انتخاب کنید. کارت بهداشت (Tessera Sanitaria) دریافت خواهید کرد.\n\n" +
          "۳. نوبت‌گیری\n" +
          "برای ویزیت عمومی مستقیم با پزشک تماس بگیرید.\n" +
          "برای متخصص: نیاز به نسخه ارجاع (impegnativa) از پزشک عمومی دارید، سپس از طریق CUP نوبت بگیرید.",
        keywords: ["SSN", "ASL", "permesso di soggiorno", "Codice Fiscale", "Tessera Sanitaria", "impegnativa", "CUP"],
        callout: {
          title: "مدارک لازم برای ثبت‌نام در ASL:",
          items: [
            "Permesso di soggiorno (یا رسید درخواست آن)",
            "Codice Fiscale",
            "Passaporto",
            "Autocertificazione di residenza",
          ],
        },
      },
      {
        heading: "I tipi di visite mediche in Italia",
        headingFa: "انواع ویزیت پزشکی در ایتالیا",
        body:
          "In Italia, con l'iscrizione al Servizio Sanitario Nazionale (SSN), puoi accedere a diversi livelli di assistenza medica.\n\n" +
          "1. Visita di Medicina Generale (Medico di Base)\n" +
          "È la prima visita che fai quando non ti senti bene. È gratuita.\n" +
          "A cosa serve: Diagnosi di malattie comuni, prescrizione di farmaci, certificati medici e invio a medici specialisti.\n" +
          "Come si fa: Vai direttamente nello studio del medico che hai scelto durante gli orari di ricevimento.\n\n" +
          "2. Visite Specialistiche\n" +
          "Sono visite focalizzate su un organo o un problema specifico.\n" +
          "Esempi: Cardiologo (cuore), Dermatologo (pelle), Oculista (occhi), Ortopedico (ossa), Ginecologo (salute femminile).\n" +
          "Come si fa: Serve l'impegnativa (la ricetta) del tuo medico di base. Con quella, prenoti tramite il CUP e paghi il ticket (una quota fissa), a meno che tu non abbia un'esenzione.\n\n" +
          "3. Visite di Emergenza (Pronto Soccorso)\n" +
          "Si fanno solo per problemi gravi e urgenti che non possono aspettare il medico di base. Dove: In ospedale.\n" +
          "Costo: È gratuita per le emergenze vere (codice rosso o arancione). Se vai per un problema non urgente (codice bianco), potresti dover pagare un ticket.\n\n" +
          "4. Visite di Prevenzione (Screening)\n" +
          "Sono esami periodici per controllare la salute prima che compaiano sintomi.\n" +
          "Esempi: Mammografia, Pap-test, esami del sangue di controllo.\n" +
          "Come si fa: Spesso la ASL invia una lettera a casa per invitarti a farle gratuitamente.\n\n" +
          "5. Visite Private (Libera Professione)\n" +
          "Puoi decidere di andare da un medico senza passare per il SSN.\n" +
          "Vantaggio: I tempi di attesa sono molto brevi.\n" +
          "Costo: Paghi l'intera tariffa della visita (solitamente tra 80€ e 200€). Non serve l'impegnativa del medico di base.\n\n" +
          "6. Guardia Medica (Continuità Assistenziale)\n" +
          "È il servizio che sostituisce il medico di base quando il suo studio è chiuso.\n" +
          "Quando: Di notte (dalle 20:00 alle 8:00) e nei giorni festivi o pre-festivi.\n" +
          "A cosa serve: Per problemi urgenti ma non da ospedale.",
        bodyFa:
          "در ایتالیا با ثبت‌نام در SSN می‌توانید به انواع مختلف ویزیت دسترسی داشته باشید:\n\n" +
          "۱. ویزیت پزشک عمومی — رایگان، برای بیماری‌های معمول\n" +
          "۲. ویزیت متخصص — نیاز به نسخه ارجاع (impegnativa) + پرداخت ticket\n" +
          "۳. اورژانس (Pronto Soccorso) — فقط برای موارد جدی، در بیمارستان\n" +
          "۴. اسکرینینگ پیشگیری — آزمایش‌های دوره‌ای، اغلب رایگان از طریق ASL\n" +
          "۵. ویزیت خصوصی — بدون نوبت طولانی، اما هزینه کامل (۸۰ تا ۲۰۰ یورو)\n" +
          "۶. Guardia Medica — جایگزین پزشک عمومی شب‌ها و تعطیلات",
        keywords: ["Medico di Base", "Specialistica", "impegnativa", "CUP", "ticket", "Pronto Soccorso", "Screening", "Guardia Medica", "SSN", "esenzione"],
        callout: {
          title: "کدهای رنگی اورژانس:",
          items: [
            "🔴 Rosso — بحرانی، فوری، بدون انتظار",
            "🟠 Arancione — اورژانسی، کمی انتظار",
            "🟡 Giallo — نیمه اورژانسی",
            "⬜ Bianco — غیراورژانسی، انتظار طولانی + پرداخت ticket",
          ],
        },
      },
    ],
  },
};


