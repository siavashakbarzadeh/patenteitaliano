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

    // ── Parole utili per chiedere aiuto ──
    { italian: "lo sciroppo", persian: "شربت دارو", phonetic: "sciroppo", example: "Prendo lo sciroppo per la tosse.", examplePersian: "شربت سرفه می‌خورم." },
    { italian: "la pastiglia / la compressa", persian: "قرص دارو", phonetic: "pastiglia", example: "Prendo una pastiglia tre volte al giorno.", examplePersian: "روزی سه قرص می‌خورم." },
    { italian: "il termometro", persian: "دماسنج", phonetic: "termometro", example: "Mi misura con il termometro.", examplePersian: "با دماسنج اندازه می‌گیرد." },
    { italian: "il cerotto", persian: "چسب زخم", phonetic: "cerotto", example: "Metto un cerotto sul taglio.", examplePersian: "روی بریدگی چسب زخم می‌زنم." },
    { italian: "la diagnosi", persian: "تشخیص", phonetic: "diagnosi", example: "La diagnosi è influenza.", examplePersian: "تشخیص آنفولانزا است." },
    { italian: "la prognosi", persian: "پیش آگهی", phonetic: "prognosi", example: "La prognosi è buona.", examplePersian: "پیش آگهی خوب است." },
    { italian: "la posologia", persian: "دوزبندی دارو", phonetic: "posologia", example: "Segui la posologia indicata.", examplePersian: "دوزبندی توضیح داده شده را رعایت کن." },
    { italian: "il consenso informato", persian: "رضایت آگاهانه", phonetic: "consenso", example: "Devo firmare il consenso informato.", examplePersian: "باید رضایتنامه امضا کنم." },
    // Verbi importanti
    { italian: "guarire", persian: "بهبود یافتن", phonetic: "guarire", example: "Spero di guarire presto.", examplePersian: "امیدوارم زود بهبود بیابم." },
    { italian: "riposare", persian: "استراحت کردن", phonetic: "riposare", example: "Devo riposare a letto.", examplePersian: "باید در تخت استراحت کنم." },
    { italian: "prenotare", persian: "نوبت گرفتن", phonetic: "prenotare", example: "Devo prenotare una visita.", examplePersian: "باید ویزیت رزرو کنم." },
    { italian: "visitare", persian: "معاینه کردن", phonetic: "visitare", example: "Il medico mi visita.", examplePersian: "دکتر معاینه‌ام می‌کند." },
    { italian: "curare", persian: "درمان کردن", phonetic: "curare", example: "Il dottore mi cura bene.", examplePersian: "دکتر خوب درمانم می‌کند." },
    // Aggettivi per descrivere il dolore
    { italian: "acuto", persian: "تیز (درد ناگهانی)", phonetic: "acuto", example: "Ho un dolore acuto al petto.", examplePersian: "درد تیزی در سینه دارم." },
    { italian: "cronico", persian: "مزمن (درد دورانی)", phonetic: "cronico", example: "Ho un dolore cronico alla schiena.", examplePersian: "کمردرد مزمن دارم." },
    { italian: "sordo", persian: "کند (درد دایمی)", phonetic: "sordo", example: "Un dolore sordo alla spalla.", examplePersian: "درد کند در شانه." },
    { italian: "pulsante", persian: "ضرباندار (درد)", phonetic: "pulsante", example: "Ho un dolore pulsante alla testa.", examplePersian: "سردرد ضرباندار دارم." },
    { italian: "bruciante", persian: "سوزانده (درد)", phonetic: "bruciante", example: "Sento un bruciore bruciante.", examplePersian: "حس سوزش دارم." },
    { italian: "intermittente", persian: "تناوبی (درد)", phonetic: "intermittente", example: "Il dolore è intermittente.", examplePersian: "درد تناوبی است." },
    { italian: "irradiato", persian: "انتشاری (درد)", phonetic: "irradiato", example: "Dolore irradiato dalla schiena alla gamba.", examplePersian: "دردی که از کمر به پا می‌رسد." },

    // ── Problemi comuni ──
    { italian: "lo starnuto / starnutire", persian: "عطسه / عطسه کردن", phonetic: "starnuto", example: "Ho gli starnuti continui.", examplePersian: "عطسه‌های مداوم دارم." },
    { italian: "il brivido", persian: "لرز", phonetic: "brivido", example: "Ho la febbre e i brividi.", examplePersian: "تب و لرز دارم." },
    { italian: "il giramento di testa / le vertigini", persian: "سرگیجه", phonetic: "vertigini", example: "Ho le vertigini.", examplePersian: "سرم گیج می‌رود." },
    { italian: "la stanchezza / l'astenia", persian: "خستگی", phonetic: "stanchezza", example: "Sento molta stanchezza.", examplePersian: "خیلی خسته‌ام." },
    { italian: "l'insonnia", persian: "بی‌خوابی", phonetic: "insonnia", example: "Soffro di insonnia.", examplePersian: "از بی‌خوابی رنج می‌برم." },
    { italian: "la raucedine", persian: "گرفتگی صدا", phonetic: "raucedine", example: "Ho la raucedine.", examplePersian: "صدایم گرفته." },
    { italian: "il respiro affannoso", persian: "تنگی نفس", phonetic: "respiro affannoso", example: "Ho il respiro affannoso.", examplePersian: "نفسم تنگ است." },
    { italian: "la rinorrea", persian: "آبریزش بینی", phonetic: "rinorrea", example: "Ho il naso che cola (rinorrea).", examplePersian: "بینی‌ام آب می‌چکد." },
    // Problemi digestivi
    { italian: "il gonfiore addominale", persian: "نفخ شکم", phonetic: "gonfiore", example: "Ho il gonfiore addominale.", examplePersian: "نفخ شکم دارم." },
    { italian: "la stitichezza", persian: "یبوست", phonetic: "stitichezza", example: "Soffro di stitichezza.", examplePersian: "یبوست دارم." },
    { italian: "i crampi addominali", persian: "دل‌پیچه", phonetic: "crampi", example: "Ho crampi addominali forti.", examplePersian: "دل‌پیچه شدید دارم." },
    // Infortuni
    { italian: "l'ustione", persian: "سوختگی", phonetic: "ustione", example: "Ho un'ustione sulla mano.", examplePersian: "سوختگی روی دستم دارم." },
    { italian: "la storta / la distorsione", persian: "پیچ خوردگی", phonetic: "storta", example: "Mi sono fatto una storta alla caviglia.", examplePersian: "مچ پایم پیچ خورد." },
    { italian: "il taglio", persian: "بریدگی", phonetic: "taglio", example: "Ho un taglio profondo.", examplePersian: "بریدگی عمیقی دارم." },
    { italian: "la caduta", persian: "افتادن", phonetic: "caduta", example: "Ho fatto una brutta caduta.", examplePersian: "بد افتادم." },
    { italian: "la puntura d'insetto", persian: "نیش حشره", phonetic: "puntura", example: "Ho una puntura di zanzara.", examplePersian: "نیش پشه دارم." },
    // Pelle
    { italian: "il prurito", persian: "خارش", phonetic: "prurito", example: "Ho prurito su tutta la pelle.", examplePersian: "پوستم می‌خارد." },
    { italian: "il rossore / l'eritema", persian: "قرمزی پوست", phonetic: "rossore", example: "Ho un rossore sul braccio.", examplePersian: "روی بازویم قرمزی دارم." },
    { italian: "il livido / l'ematoma", persian: "کبودی / کوفتگی", phonetic: "livido", example: "Ho un livido sulla coscia.", examplePersian: "روی رانم کبودی دارم." },
    { italian: "il brufolo / il pomfo", persian: "جوش / کهیر", phonetic: "brufolo", example: "Ho dei brufoli sul viso.", examplePersian: "روی صورتم جوش دارم." },
    // Sintomi muscolari
    { italian: "il crampo", persian: "گرفتگی عضله", phonetic: "crampo", example: "Ho un crampo alla gamba.", examplePersian: "عضله پایم گرفت." },
    { italian: "lo strappo muscolare", persian: "پارگی عضله", phonetic: "strappo", example: "Ho uno strappo muscolare.", examplePersian: "پارگی عضله دارم." },
    { italian: "il formicolio", persian: "سوزن‌سوزن شدن", phonetic: "formicolio", example: "Ho formicolio al braccio.", examplePersian: "بازویم سوزن‌سوزن می‌شود." },
    { italian: "l'intorpidimento", persian: "بی‌حسی", phonetic: "intorpidimento", example: "Sento intorpidimento alla mano.", examplePersian: "دستم بی‌حس می‌شود." },
    // Termini diagnostici
    { italian: "l'edema", persian: "ورم / تجمع مایع", phonetic: "edema", example: "Ho edema alle caviglie.", examplePersian: "مچ پایم ورم کرده." },
    { italian: "l'astenia", persian: "ضعف شدید", phonetic: "astenia", example: "Soffro di astenia cronica.", examplePersian: "از ضعف مزمن رنج می‌برم." },
    { italian: "la parestesia", persian: "احساس غیرعادی پوست", phonetic: "parestesia", example: "Sento una parestesia al piede.", examplePersian: "در پایم احساس غیرعادی دارم." },
    { italian: "l'acufene", persian: "وزوز گوش", phonetic: "acufene", example: "Ho un acufene costante.", examplePersian: "وزوز گوش مداوم دارم." },
    { italian: "la cefalea / l'emicrania", persian: "سردرد / میگرن", phonetic: "cefalea", example: "Soffro di emicrania.", examplePersian: "از میگرن رنج می‌برم." },

    // ── Gli Specialisti ──
    { italian: "l'oculista", persian: "چشم‌پزشک", phonetic: "oculista", example: "Vado dall'oculista per la vista.", examplePersian: "برای بینایی پیش چشم‌پزشک می‌روم." },
    { italian: "il dentista", persian: "دندانپزشک", phonetic: "dentista", example: "Ho un appuntamento dal dentista.", examplePersian: "وقت دندانپزشکی دارم." },
    { italian: "il pediatra", persian: "متخصص کودکان", phonetic: "pediatra", example: "Il pediatra visita i bambini.", examplePersian: "متخصص کودکان بچه‌ها را معاینه می‌کند." },
    { italian: "il cardiologo", persian: "متخصص قلب", phonetic: "cardiologo", example: "Ho fatto l'ECG dal cardiologo.", examplePersian: "نوار قلب پیش قلب‌پزشک گرفتم." },
    { italian: "il ginecologo", persian: "متخصص زنان", phonetic: "ginecologo", example: "Devo andare dal ginecologo.", examplePersian: "باید پیش متخصص زنان بروم." },
    { italian: "il dermatologo", persian: "پوست‌پزشک", phonetic: "dermatologo", example: "Il dermatologo cura le malattie della pelle.", examplePersian: "پوست‌پزشک بیماری‌های پوستی را درمان می‌کند." },
    { italian: "l'otorinolaringoiatra (otorino)", persian: "گوش و حلق و بینی", phonetic: "otorino", example: "Sono dall'otorino per l'orecchio.", examplePersian: "پیش متخصص گوش و حلق و بینی هستم." },
    { italian: "il chirurgo", persian: "جراح", phonetic: "chirurgo", example: "Il chirurgo mi ha operato.", examplePersian: "جراح عملم کرد." },
    { italian: "l'ortopedico", persian: "ارتوپد", phonetic: "ortopedico", example: "L'ortopedico si occupa delle ossa.", examplePersian: "ارتوپد با استخوان‌ها سر و کار دارد." },
    { italian: "lo psichiatra / lo psicologo", persian: "روان‌پزشک / روان‌شناس", phonetic: "psichiatra", example: "Lo psichiatra cura le malattie mentali.", examplePersian: "روان‌پزشک بیماری‌های روانی را درمان می‌کند." },
    { italian: "il medico di medicina generale (MMG)", persian: "پزشک خانواده (اصطلاح رسمی)", phonetic: "MMG", example: "Il mio MMG è il dottor Rossi.", examplePersian: "پزشک خانواده‌ام دکتر روسی است." },
    // Strumenti e oggetti medici
    { italian: "la siringa", persian: "سرنگ/آمپول", phonetic: "siringa", example: "L'infermiera usa la siringa.", examplePersian: "پرستار از سرنگ استفاده می‌کند." },
    { italian: "lo stetoscopio", persian: "گوشی پزشکی", phonetic: "stetoscopio", example: "Il medico usa lo stetoscopio.", examplePersian: "دکتر از گوشی پزشکی استفاده می‌کند." },
    { italian: "la fasciatura / la benda", persian: "باند / پانسمان", phonetic: "fasciatura", example: "Mi hanno messo una fasciatura.", examplePersian: "برایم باند گذاشتند." },
    { italian: "l'ingessatura", persian: "گچ (اندام شکسته)", phonetic: "ingessatura", example: "Ho il braccio in ingessatura.", examplePersian: "بازویم گچ گرفته." },
    { italian: "le stampelle", persian: "عصا (زیر بغل)", phonetic: "stampelle", example: "Cammino con le stampelle.", examplePersian: "با عصا راه می‌روم." },
    { italian: "la sedia a rotelle", persian: "ویلچر", phonetic: "sedia a rotelle", example: "Usa la sedia a rotelle.", examplePersian: "از ویلچر استفاده می‌کند." },
    { italian: "la flebo / la fleboclisi", persian: "سرم / دریپ", phonetic: "flebo", example: "Mi hanno messo la flebo.", examplePersian: "برایم سرم وصل کردند." },
    { italian: "il bisturi", persian: "اسکالپل (تیغ جراحی)", phonetic: "bisturi", example: "Il chirurgo usa il bisturi.", examplePersian: "جراح از اسکالپل استفاده می‌کند." },
    { italian: "la lettiga", persian: "برانکارد", phonetic: "lettiga", example: "Il paziente è sulla lettiga.", examplePersian: "بیمار روی برانکارد است." },
    { italian: "lo sfigmomanometro", persian: "دستگاه فشارسنج", phonetic: "sfigmomanometro", example: "Misura la pressione con lo sfigmomanometro.", examplePersian: "فشار را با فشارسنج اندازه می‌گیرد." },
    { italian: "il cotone idrofilo", persian: "پنبه هیدروفیل", phonetic: "cotone", example: "Usa il cotone idrofilo per pulire.", examplePersian: "از پنبه برای تمیز کردن استفاده می‌کند." },
    { italian: "il laccio emostatico", persian: "تورنیکه", phonetic: "laccio", example: "Il laccio emostatico ferma il sangue.", examplePersian: "تورنیکه خونریزی را متوقف می‌کند." },
    // Esami
    { italian: "l'emocromo", persian: "آزمایش خون کامل", phonetic: "emocromo", example: "Il medico ha chiesto l'emocromo.", examplePersian: "دکتر آزمایش خون کامل خواسته." },
    { italian: "la glicemia", persian: "قند خون", phonetic: "glicemia", example: "Controllo la glicemia ogni mese.", examplePersian: "هر ماه قند خونم را کنترل می‌کنم." },
    { italian: "l'ecografia", persian: "اکوگرافی / سونوگرافی", phonetic: "ecografia", example: "Ho fatto un'ecografia addominale.", examplePersian: "سونوگرافی شکمی انجام دادم." },
    { italian: "la radiografia (RX)", persian: "عکس اشعه ایکس", phonetic: "radiografia", example: "Devo fare una radiografia al torace.", examplePersian: "باید عکس ریه بگیرم." },
    { italian: "l'elettrocardiogramma (ECG)", persian: "نوار قلب", phonetic: "ECG", example: "Il cardiologo ha fatto l'ECG.", examplePersian: "قلب‌پزشک نوار قلب گرفت." },
    { italian: "la TAC / la risonanza magnetica (RM)", persian: "سی‌تی‌اسکن / ام‌آر‌آی", phonetic: "TAC / RM", example: "Ho fatto la TAC al cervello.", examplePersian: "سی‌تی‌اسکن مغز انجام دادم." },
    { italian: "l'impegnativa", persian: "برگه ارجاع آزمایش", phonetic: "impegnativa", example: "Ho l'impegnativa per l'ecografia.", examplePersian: "برگه ارجاع برای سونوگرافی دارم." },
    { italian: "la tessera sanitaria", persian: "کارت بهداشت", phonetic: "tessera sanitaria", example: "Porta sempre la tessera sanitaria.", examplePersian: "همیشه کارت بهداشتت را همراه داشته باش." },
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
    // ── Prenotare ──
    { italian: "Buongiorno, vorrei fissare un appuntamento con il dottore.", persian: "صبح بخیر، می‌خواهم با دکتر وقت بگیرم.", context: "رایج‌ترین جمله برای گرفتن وقت" },
    { italian: "Avrei bisogno di una visita urgente.", persian: "نیاز به ویزیت فوری دارم.", context: "اضطراری" },
    { italian: "Qual è il primo posto disponibile?", persian: "اولین وقت خالی چه زمانی است؟", context: "پرسیدن وقت خالی" },
    { italian: "Dovrei prenotare una visita di controllo.", persian: "باید ویزیت کنترلی رزرو کنم.", context: "ویزیت دوره‌ای" },
    { italian: "Potrebbe darmi un appuntamento per domani mattina?", persian: "می‌توانید فردا صبح وقت بدهید؟", context: "درخواست مشخص" },
    // ── Descrivere sintomi ──
    { italian: "Non mi sento bene da un paio di giorni.", persian: "چند روزی است حالم خوب نیست.", context: "شروع توضیح" },
    { italian: "Ho un po' di febbre, stamattina era a 38.", persian: "کمی تب دارم، صبح ۳۸ بود.", context: "بیان تب با عدد" },
    { italian: "Sento un formicolio alle braccia/gambe.", persian: "بازوها/پاهایم سوزن‌سوزن می‌شود.", context: "علائم عصبی" },
    { italian: "Ho una sensazione di oppressione al petto.", persian: "احساس سنگینی روی سینه دارم.", context: "علائم قلبی/تنفسی" },
    { italian: "Ho avuto degli attacchi di vertigini stamattina.", persian: "امروز صبح چند بار سرم گیج رفت.", context: "علائم عصبی" },
    { italian: "Ho il naso completamente chiuso e non sento i sapori.", persian: "بینی‌ام کاملاً بسته است و طعم نمی‌فهمم.", context: "علائم سرماخوردگی" },
    { italian: "Sono a pezzi.", persian: "حالم خیلی بد است / کاملاً له شده‌ام.", context: "عامیانه برای احساس خیلی بد" },
    { italian: "Mi sento giù di corda.", persian: "بی‌حال و بی‌انرژی‌ام.", context: "خستگی + ضعف روحی" },
    { italian: "Ho un calo di zuccheri.", persian: "قندم پایین افتاده.", context: "احساس ضعف ناگهانی" },
    { italian: "Ho preso una storta alla caviglia.", persian: "مچ پایم پیچ خورد.", context: "آسیب معمول" },
    // ── Durante visita ──
    { italian: "Da quanto tempo ha questi sintomi?", persian: "از کی این علائم را دارید؟", context: "سوال دکتر" },
    { italian: "Il dolore va e viene, non è costante.", persian: "درد می‌آید و می‌رود، مداوم نیست.", context: "توصیف درد متناوب" },
    { italian: "Ho già avuto questo problema in passato.", persian: "قبلاً هم این مشکل را داشته‌ام.", context: "سابقه پزشکی" },
    { italian: "Sto prendendo questo medicinale...", persian: "دارم این دارو را می‌خورم...", context: "اطلاع از دارو مصرفی" },
    // ── Chiedere diagnosi ──
    { italian: "È qualcosa di grave?", persian: "چیز جدی است؟", context: "سوال از شدت بیماری" },
    { italian: "Devo fare degli esami del sangue?", persian: "باید آزمایش خون بدهم؟", context: "سوال از آزمایشات" },
    { italian: "Ogni quanto devo prendere questa medicina?", persian: "هر چند وقت باید این دارو را بخورم؟", context: "سوال از دوز" },
    { italian: "Ci sono effetti collaterali?", persian: "عوارض جانبی دارد؟", context: "سوال از عوارض دارو" },
    { italian: "Quando dovrei tornare per un controllo?", persian: "چه وقت باید برای کنترل بیایم؟", context: "سوال از ویزیت بعدی" },
    { italian: "Potrebbe spiegarmi questo termine medico con parole più semplici?", persian: "می‌توانید این اصطلاح پزشکی را ساده‌تر توضیح دهید؟", context: "درخواست توضیح ساده" },
    { italian: "Può ripetere più lentamente, per favore?", persian: "لطفاً آهسته‌تر تکرار کنید؟", context: "درخواست تکرار آهسته" },
    // ── Emergenza ──
    { italian: "C'è un'emergenza in via [Nome via]!", persian: "اینجا اورژانس داریم، خیابان ...!", context: "تماس اورژانس ۱۱۲/۱۱۸" },
    { italian: "Ho bisogno di un'ambulanza, subito!", persian: "فوری آمبولانس نیاز دارم!", context: "اورژانس فوری" },
    { italian: "C'è una persona a terra che non risponde.", persian: "یک نفر روی زمین است و پاسخ نمی‌دهد.", context: "بیهوشی" },
    { italian: "Ho perso molto sangue dal braccio/dalla gamba.", persian: "از بازو/پایم خون زیادی از دست داده‌ام.", context: "خونریزی" },
    { italian: "Sono svenuto/a per qualche minuto.", persian: "چند دقیقه بیهوش شدم.", context: "غش کردن" },
    { italian: "Il mio gruppo sanguigno è...", persian: "گروه خونی من ... است.", context: "اطلاعات حیاتی اورژانس" },
    // ── In farmacia ──
    { italian: "Ho una ricetta del mio medico.", persian: "نسخه دکترم را دارم.", context: "داروخانه" },
    { italian: "Esiste una versione generica di questo farmaco?", persian: "آیا نسخه ژنریک این دارو وجود دارد؟", context: "دارو ارزان‌تر" },
    { italian: "Questo farmaco richiede la conservazione in frigorifero?", persian: "این دارو باید در یخچال نگهداری شود؟", context: "نگهداری دارو" },
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

      {
        heading: "Azioni del corpo",
        headingFa: "افعال حرکتی بدن",
        body:
          "Verbi di movimenti generali:\n" +
          "• Piegare le ginocchia / le braccia.\n" +
          "• Ruotare il collo / le caviglie.\n" +
          "• Incrociare le braccia / le gambe.\n" +
          "• Sollevare le sopracciglia (per mostrare sorpresa).\n" +
          "• Scuotere la testa (per dire no) o fare un cenno (per dire sì).\n\n" +
          "Verbi che descrivono come posizioniamo il corpo:\n" +
          "• Piegarsi / Chinarsi: Curvare il busto in avanti (es. per raccogliere qualcosa).\n" +
          "• Sdraiarsi: Mettersi in posizione orizzontale (es. a letto).\n" +
          "• Inginocchiarsi: Appoggiare le ginocchia a terra.\n" +
          "• Inarcare (la schiena): Curvare la schiena all'indietro.\n" +
          "• Raddrizzarsi: Tornare in posizione eretta.\n\n" +
          "Verbi legati al movimento e allo sport (Gambe e Piedi):\n" +
          "• Camminare / Correre: I verbi base.\n" +
          "• Saltellare: Fare piccoli salti (spesso su una gamba sola).\n" +
          "• Inciampare: Battere il piede contro un ostacolo e rischiare di cadere.\n" +
          "• Scivolare: Perdere l'equilibrio su una superficie liscia o bagnata.\n" +
          "• Calciare: Dare un colpo con il piede (es. a un pallone).\n" +
          "• Pedalare: Muovere le gambe sulla bicicletta.\n\n" +
          "Verbi per indicare manipolazione e contatto (Braccia e Mani):\n" +
          "• Afferrare: Prendere qualcosa con forza o decisione.\n" +
          "• Accarezzare: Muovere la mano con dolcezza su una superficie o qualcuno.\n" +
          "• Grattare: Usare le unghie sulla pelle.\n" +
          "• Pizzicare: Stringere un po' di pelle tra pollice e indice.\n" +
          "• Indicare: Usare il dito indice per mostrare qualcosa.\n" +
          "• Applaudire: Battere le mani.\n" +
          "• Gesticolare: Muovere molto le braccia mentre si parla.",
        bodyFa:
          "افعال حرکتی عمومی:\n" +
          "• خم کردن زانو / بازو\n" +
          "• چرخاندن گردن / مچ پا\n" +
          "• ضربدری کردن بازوها / پاها\n" +
          "• بالا بردن ابروها (برای نشان دادن تعجب)\n\n" +
          "افعال وضعیتی:\n" +
          "• خم شدن به جلو — Piegarsi\n" +
          "• دراز کشیدن — Sdraiarsi\n" +
          "• زانو زدن — Inginocchiarsi\n" +
          "• صاف ایستادن — Raddrizzarsi\n\n" +
          "افعال حرکتی پاها: راه رفتن، دویدن، لی‌لی کردن، لغزیدن، لگد زدن، پدال کردن\n\n" +
          "افعال دستی: چنگ زدن، نوازش کردن، خاراندن، نیشگون گرفتن، اشاره کردن، دست زدن، ژست کردن",
        keywords: ["piegare", "ruotare", "sdraiarsi", "inginocchiarsi", "camminare", "correre", "afferrare", "gesticolare"],
      },
      {
        heading: "Descrizione dei Sintomi e Lessico Medico",
        headingFa: "توصیف علائم و واژگان پزشکی",
        body:
          "Descrizione dei Sintomi:\n" +
          "• Sintomi stabili/diversi: Specificare se il problema è nuovo o se c'è stato un cambiamento.\n" +
          "• Dolore/Fastidio: Localizzazione precisa, intensità e tipo di dolore.\n" +
          "• Dolore: Acuto (improvviso e forte), Cronico (che dura da tempo), Sordo (costante ma lieve), Intermittente (che va e viene).\n" +
          "• Sintomi comuni: Febbre, brividi, nausea, vertigini (giramenti di testa), stanchezza (astenia), inappetenza.\n" +
          "• Effetti collaterali: Menzionare reazioni inattese a farmaci.\n" +
          "• Stato di salute: Descrivere il proprio benessere fisico e mentale.\n\n" +
          "Lessico di base per il paziente:\n" +
          "• Visitare: L'atto compiuto dal medico per esaminare il paziente alla ricerca di una malattia.\n" +
          "• Curare: Sottoporre il paziente a una specifica terapia medica.\n" +
          "• Guarire: Far scomparire una malattia e tornare in salute.\n" +
          "• Diagnosi: Identificazione della natura di una malattia attraverso i sintomi.\n" +
          "• Prognosi: Giudizio sulla probabile evoluzione e sull'esito finale della malattia.\n\n" +
          "Prescrizioni e Trattamenti:\n" +
          "• Ricetta bianca: La ricetta personale del medico per farmaci a totale carico del paziente.\n" +
          "• Trattamento medico: La prestazione professionale finalizzata a migliorare le condizioni di salute.\n" +
          "• Consenso informato: Il documento con cui il paziente accetta consapevolmente un trattamento dopo averne capito rischi e benefici.\n" +
          "• Posologia: Indica le dosi e i tempi di assunzione di un farmaco.",
        bodyFa:
          "توصیف علائم:\n" +
          "• مشخص کنید آیا مشکل جدید است یا سابقه دارد\n" +
          "• محل دقیق، شدت و نوع درد را بیان کنید\n" +
          "• انواع درد: تیز (ناگهانی)، مزمن (طولانی)، کند (ملایم)، متناوب\n" +
          "• علائم معمول: تب، لرز، حالت تهوع، سرگیجه، خستگی، بی‌اشتهایی\n\n" +
          "واژگان پایه بیمار:\n" +
          "• Visitare: معاینه کردن توسط دکتر\n" +
          "• Curare: درمان کردن\n" +
          "• Guarire: بهبود یافتن\n" +
          "• Diagnosi: تشخیص بیماری\n" +
          "• Prognosi: پیش‌آگهی بیماری\n\n" +
          "تجویز و درمان:\n" +
          "• Ricetta bianca: نسخه شخصی دکتر\n" +
          "• Consenso informato: رضایتنامه آگاهانه\n" +
          "• Posologia: دوزبندی و زمان‌بندی مصرف دارو",
        keywords: ["sintomi", "dolore", "diagnosi", "prognosi", "ricetta", "consenso informato", "posologia", "guarire", "curare"],
      },
      {
        heading: "Aggettivi per il dolore e Termini dei Referti",
        headingFa: "صفات برای درد و اصطلاحات رفرت",
        body:
          "Aggettivi per descrivere il dolore:\n" +
          "Il medico potrebbe chiederti: \"Che tipo di dolore sente?\". Puoi rispondere usando questi aggettivi:\n" +
          "• Acuto: Forte e improvviso.\n" +
          "• Sordo: Un dolore costante ma non molto forte.\n" +
          "• Pungente / Trafittivo: Come se sentissi delle punture di spilli.\n" +
          "• Pulsante: Un dolore che segue il battito del cuore (tipico del mal di denti o emicrania).\n" +
          "• Bruciante: Una sensazione di bruciore intenso.\n" +
          "• Irradiato: Quando il dolore parte da un punto e si sposta (es. dalla schiena alla gamba).\n\n" +
          "Parti del corpo comuni (per comunicare col medico):\n" +
          "• Testa: Occhi, orecchie, naso, gola, bocca (gengive, denti, lingua).\n" +
          "• Busto e Tronco: Collo, spalle, petto (o seno), schiena (zona lombare, nuca), addome (pancia), stomaco.\n" +
          "• Arti Superiori: Braccio, gomito, polso, mano, dita.\n" +
          "• Arti Inferiori: Gamba, anca, coscia, ginocchio, caviglia, piede.\n\n" +
          "Descrizioni nei Referti:\n" +
          "• Alvo: Si riferisce alle funzioni intestinali.\n" +
          "• Alvo regolare: Funzionamento normale.\n" +
          "• Alvo stitico: Presenza di stitichezza.\n" +
          "• Anamnesi: L'intervista iniziale dove il medico raccoglie la storia clinica del paziente e della sua famiglia.\n" +
          "• Quesito diagnostico: La domanda o il dubbio per cui è stato richiesto un esame.\n" +
          "• Assenza di focalità: Significa che non ci sono lesioni o problemi localizzati in un punto specifico (comune nei referti neurologici).\n" +
          "• Reperti: Ciò che il medico ha effettivamente visto o trovato durante l'esame.",
        bodyFa:
          "صفات توصیف درد:\n" +
          "• Acuto: تیز و ناگهانی\n" +
          "• Sordo: مداوم اما نه خیلی شدید\n" +
          "• Pungente / Trafittivo: مثل سوزن فرو رفتن\n" +
          "• Pulsante: همراه با ضربان قلب (مثل دندان‌درد یا میگرن)\n" +
          "• Bruciante: احساس سوزش شدید\n" +
          "• Irradiato: دردی که از یک جا به جای دیگر می‌رود\n\n" +
          "اصطلاحات رفرت:\n" +
          "• Anamnesi: تاریخچه پزشکی\n" +
          "• Alvo regolare / stitico: عملکرد طبیعی / یبوست\n" +
          "• Quesito diagnostico: سوال تشخیصی برای آزمایش\n" +
          "• Assenza di focalità: فقدان ضایعه موضعی\n" +
          "• Reperti: یافته‌های پزشک در معاینه",
        keywords: ["acuto", "sordo", "pulsante", "bruciante", "irradiato", "anamnesi", "alvo", "reperti", "diagnosi", "quesito"],
        callout: {
          title: "💊 Parole utili per chiedere aiuto:",
          items: [
            "La medicina / Il farmaco: quello che prendi per stare meglio (es. lo sciroppo, la pastiglia).",
            "La ricetta: il foglio del medico per comprare le medicine.",
            "L'appuntamento: l'orario in cui vai dal dottore.",
            "Il termometro: lo strumento per misurare la febbre.",
            "Il cerotto: quello che metti sopra un piccolo taglio.",
          ],
        },
      },
      {
        heading: "Conversazioni Corti — Dal Medico",
        headingFa: "مکالمات کوتاه — پیش دکتر",
        body:
          "Per un'influenza (Dottore di base):\n" +
          "Dottore: Buongiorno, cosa succede?\n" +
          "Paziente: Non mi sento bene da due giorni. Ho la febbre a 38.5 e molta tosse.\n" +
          "Dottore: Ha anche mal di gola? Paziente: Sì, e mi sento molto spossato.\n" +
          "Dottore: La visito. Respiri profondamente... È un'influenza. Le scrivo una ricetta per uno sciroppo e del paracetamolo.\n\n" +
          "Per un dolore articolare (Ortopedico):\n" +
          "Paziente: Ho un forte dolore al ginocchio destro.\n" +
          "Dottore: Quando è iniziato? Ha subito un trauma?\n" +
          "Paziente: È iniziato ieri dopo una corsa. È molto gonfio e sento una rigidità quando provo a piegarlo.\n" +
          "Dottore: Sente dolore se premo qui? Paziente: Sì, sento una fitta molto forte.\n" +
          "Dottore: Per sicurezza facciamo una radiografia. Per ora metta del ghiaccio.\n\n" +
          "Per un problema agli occhi (Oculista):\n" +
          "Paziente: Ho gli occhi molto arrossati e sento un forte prurito.\n" +
          "Dottore: Ha anche problemi di vista o vede sfocato?\n" +
          "Paziente: No, ma ho una forte lacrimazione e mi dà fastidio la luce.\n" +
          "Dottore: Sembra una congiuntivite allergica. Le prescrivo un collirio da mettere tre volte al giorno.\n\n" +
          "In Farmacia:\n" +
          "Farmacista: Buongiorno, desidera?\n" +
          "Paziente: Salve, ho questa ricetta del mio medico.\n" +
          "Farmacista: Ecco qui. Sono due confezioni di antibiotico.\n" +
          "Paziente: Esiste il farmaco generico? Farmacista: Certamente, il principio attivo è lo stesso.\n" +
          "Paziente: Come devo prenderlo? Farmacista: Una compressa ogni 12 ore, preferibilmente a stomaco pieno.",
        bodyFa:
          "مکالمه اول — آنفولانزا:\n" +
          "• دکتر: خوش آمدید، چه مشکلی دارید؟\n" +
          "• بیمار: دو روزه حالم خوب نیست. تب ۳۸.۵ و سرفه شدید دارم.\n" +
          "• دکتر: آنفولانزاست. برایتان شربت و پاراستامول می‌نویسم.\n\n" +
          "مکالمه دوم — درد مفصلی:\n" +
          "• بیمار: زانوی راستم درد شدیدی دارد.\n" +
          "• دکتر: کِی شروع شد؟ آسیب دیدید؟\n" +
          "• دکتر: رادیوگرافی می‌گیریم. فعلاً یخ بگذارید.\n\n" +
          "داروخانه:\n" +
          "• بیمار: نسخه دکترم را دارم.\n" +
          "• داروساز: آیا نسخه ژنریک می‌خواهید؟ همان ماده مؤثره دارد.",
        keywords: ["influenza", "ortopedico", "oculista", "farmacia", "congiuntivite", "antibiotico", "sciroppo", "collirio"],
      },
      {
        heading: "Racconti Brevi — Storie Vere",
        headingFa: "داستان‌های کوتاه — تجربیات واقعی",
        body:
          "Il mio piede dolorante:\n" +
          "Ieri vado al parco per correre. Corro per venti minuti, ma improvvisamente cado a terra. Mi fa molto male il piede destro. Provo a camminare, ma non sto in piedi.\n" +
          "Vado subito dal medico. In ambulatorio, l'infermiera mi chiede: «Cosa è successo?».\n" +
          "Il medico arriva e guarda il mio piede. È un po' rosso e gonfio. Il medico tocca il piede e io grido: «Ah! Mi fa male qui!».\n" +
          "Il dottore dice: «Non è rotto, ma devi riposare». Mi scrive una ricetta per una crema e mi dice di mettere il ghiaccio.\n\n" +
          "Parole utili: Cado/Sono caduto = cadere | Gonfio = quando una parte del corpo diventa più grande | Ghiaccio = si mette sulle ferite per sentire meno dolore.\n\n" +
          "Paolo ha l'influenza:\n" +
          "Oggi Paolo non va al lavoro. Ha un forte mal di testa e sente freddo, anche se ha due coperte. La febbre è a 38.5. Gli fanno male le braccia, le gambe e la schiena.\n" +
          "Paolo chiama il suo medico: «Pronto, dottore? Ho la febbre alta e mi fa male tutto il corpo.»\n" +
          "Il dottore spiega: «Paolo, tu hai l'influenza. Devi stare a riposo per cinque giorni.»\n" +
          "Consigli del dottore: Prendi la tachipirina. Bevi molto: acqua, spremuta d'arancia e brodo caldo. Resta a letto al caldo.\n\n" +
          "Il prelievo del sangue:\n" +
          "Oggi vado in ospedale per fare un prelievo del sangue. Ieri sera ho cenato presto perché devo essere a digiuno.\n" +
          "L'infermiere mi fa sedere su una sedia comoda. Mi chiede di tirare su la manica. Poi pulisce la pelle con un po' di disinfettante.\n" +
          "Usa un ago piccolo — sento solo un piccolo pizzico. La procedura dura solo un minuto.\n" +
          "Alla fine, l'infermiere mette un pezzo di cotone e un cerotto sul mio braccio. I risultati saranno pronti tra tre giorni.",
        bodyFa:
          "داستان اول — پای دردناک:\n" +
          "• در پارک دویدم، افتادم. پایم درد گرفت.\n" +
          "• پیش دکتر رفتم. دکتر گفت نشکسته اما باید استراحت کنم.\n" +
          "• کرم نوشت و گفت یخ بگذار.\n\n" +
          "داستان دوم — پائولو آنفولانزا دارد:\n" +
          "• تب ۳۸.۵، سردرد، درد بدن.\n" +
          "• دکتر گفت ۵ روز استراحت کن، تاکی‌پیرین بخور، آب زیاد بنوش.\n\n" +
          "داستان سوم — آزمایش خون:\n" +
          "• باید ناشتا بود | پرستار ورید را پیدا کرد\n" +
          "• فقط یک نیش کوچک | نتیجه ۳ روز دیگر آماده می‌شود",
        keywords: ["piede", "influenza", "prelievo", "sangue", "riposo", "febbre", "ago", "infermiere", "digiuno"],
      },
      {
        heading: "Punti Culturali — Abitudini Italiane dal Medico",
        headingFa: "نکات فرهنگی — عادات ایتالیایی پیش دکتر",
        body:
          "Le abitudini e i tratti culturali principali:\n\n" +
          "Il Medico di Base come punto di riferimento: Per gli italiani il 'medico di famiglia' è quasi un confessore. Si tende ad avere un rapporto di lunghissima durata; lui conosce la storia di tutta la famiglia.\n\n" +
          "La cultura della 'chiacchierata': Non si va dritti al punto. È normale iniziare con un saluto cordiale e due parole sulla situazione generale prima di descrivere i sintomi.\n\n" +
          "Il 'pezzo di carta': Nonostante la ricetta elettronica, molti pazienti (soprattutto i più anziani) tengono molto al promemoria cartaceo e alle indicazioni scritte a mano dal dottore.\n\n" +
          "Fidacia nel parere, meno nella puntualità: C'è un grande rispetto per l'autorità del medico, ma le sale d'attesa sono spesso luoghi di socializzazione involontaria.\n\n" +
          "Il 'colpo d'aria': Molti italiani attribuiscono piccoli malesseri (dolori cervicali o raffreddori) al 'colpo d'aria' o alla 'cervicale', concetti culturali molto forti in Italia.\n\n" +
          "Modi di dire e proverbi legati alla salute:\n" +
          "• 'Una mela al giorno toglie il medico di torno': Il più classico dei proverbi sulla prevenzione alimentare.\n" +
          "• 'Prevenire è meglio che curare': Lo slogan per eccellenza della medicina preventiva.\n" +
          "• 'Essere sano come un pesce': Essere in perfetta salute.\n" +
          "• 'Campa cavallo che l'erba cresce': Usato ironicamente per le lunghe liste d'attesa nella sanità pubblica.\n" +
          "• 'La salute non è tutto, ma senza salute tutto è niente.' (Schopenhauer)\n\n" +
          "Piccola curiosità: I 'pazienti' diventano 'assistiti'\n" +
          "Burocraticamente verrai spesso chiamato 'persona assistita' o 'assistito', per sottolineare il diritto alla cura garantito dallo Stato.\n\n" +
          "Numeri utili in emergenza:\n" +
          "• 118 = Ambulanza (Emergenza grave)\n" +
          "• 112 = Numero unico emergenze\n" +
          "• Guardia Medica = Urgenza non grave di notte o nel weekend\n" +
          "• Medico di Base (MMG) = Controllo o ricetta",
        bodyFa:
          "نکات فرهنگی مهم:\n" +
          "• پزشک خانواده در ایتالیا مثل یک مشاور قدیمی است — رابطه طولانی‌مدت دارند\n" +
          "• قبل از توضیح علائم معمولاً احوال‌پرسی می‌کنند\n" +
          "• 'colpo d\'aria' = سرمای ناگهانی — مفهوم فرهنگی رایج\n" +
          "• ضرب‌المثل‌ها: یک سیب در روز دکتر را فراری می‌دهد | پیشگیری بهتر از درمان است\n\n" +
          "اعداد اورژانسی:\n" +
          "• ۱۱۸ = آمبولانس | ۱۱۲ = اورژانس عمومی\n" +
          "• Guardia Medica = شب و آخر هفته (غیراورژانسی)",
        keywords: ["medico di base", "colpo d'aria", "cervicale", "guardia medica", "118", "112", "assistito", "proverbi", "salute"],
      },
      {
        heading: "Espressioni Colloquiali — Come parlano gli italiani di salute",
        headingFa: "عبارات محاوره‌ای — چطور ایتالیایی‌ها از سلامتی صحبت می‌کنند",
        body:
          "1. Come ti senti?\n" +
          "'Cova qualcosa': sta arrivando l'influenza.\n" +
          "'Sentirsi uno straccio': sentirsi molto male/stanchi.\n" +
          "'Cerchio alla testa': mal di testa forte.\n" +
          "'Pressione sotto i piedi': sentirsi molto deboli.\n\n" +
          "2. Dal Medico\n" +
          "'Farsi dare un'occhiata': andare a farsi visitare.\n" +
          "'Fare un salto dal dottore': andare dal medico velocemente.\n" +
          "'Dica 33': frase del medico per controllare i polmoni.\n" +
          "'Fare l'impegnativa': il foglio del medico per visite speciali.\n\n" +
          "3. Cosa fare\n" +
          "'Stare a riposo': stare a letto per guarire.\n" +
          "'Mettere il ghiaccio': per botte o storte.\n" +
          "'Disinfettare': pulire un taglio.\n" +
          "'Mettere un cerotto': coprire una ferita.\n\n" +
          "4. Per i piccoli traumi\n" +
          "'Prendere una botta': farsi male dopo un urto.\n" +
          "'Avere un bernoccolo': il rigonfiamento sulla testa dopo un colpo.\n" +
          "'Prendere una storta': girarsi la caviglia.\n" +
          "'Mettere la pomata': spalmare la crema sul dolore.\n\n" +
          "5. Frasi del medico\n" +
          "'Faccia un bel respiro': quando il medico ascolta i polmoni.\n" +
          "'Tiri fuori la lingua': per guardare la gola.\n" +
          "'Si sdrai qui': per farsi visitare sul lettino.\n\n" +
          "6. Raccontare dopo la visita\n" +
          "'Mi ha rivoltato come un calzino': visita molto approfondita.\n" +
          "'Mi ha dato una sfilza di esami': ha prescritto tantissime analisi.\n" +
          "'Mi ha messo in mutua / mi ha dato i giorni': ha dato il certificato per stare a casa dal lavoro.",
        bodyFa:
          "عبارات محاوره‌ای رایج:\n" +
          "• Cova qualcosa = داره مریض می‌شه\n" +
          "• Sentirsi uno straccio = حالم خرابه\n" +
          "• Cerchio alla testa = سردرد شدید\n" +
          "• Farsi dare un'occhiata = رفتن پیش دکتر\n" +
          "• Dica 33 = جمله کلاسیک دکتر برای معاینه ریه\n" +
          "• Prendere una storta = مچ پا پیچ خورد\n" +
          "• Mi ha messo in mutua = گواهی مریضی داد",
        keywords: ["straccio", "cerchio", "cova", "storta", "impegnativa", "mutua", "bernoccolo", "pomata"],
      },
      {
        heading: "Come Scrivere al Medico (WhatsApp / Email)",
        headingFa: "چطور به دکتر پیام بدهیم",
        body:
          "Se devi scrivere un messaggio (WhatsApp/SMS) al tuo medico di base, segui questo schema:\n\n" +
          "Opzione A — Richiesta di Rinnovo Ricetta:\n" +
          "'Gentile Dott./Dott.ssa [Cognome], sono [Tuo Nome e Cognome]. Le scrivo per chiederle cortesemente il rinnovo della ricetta per il farmaco [Nome del farmaco]. Può inviarmela via email o tramite codice NRE via SMS? La ringrazio, cordiali saluti.'\n\n" +
          "Opzione B — Descrizione di un sintomo:\n" +
          "'Buongiorno Dottore, sono [Tuo Nome]. Da circa [Numero] giorni soffro di una forte rinorrea accompagnata da [es. mal di gola/febbre]. Vorrei sapere se posso assumere qualcosa o se è necessaria una visita in studio. Resto in attesa di un suo riscontro. Grazie.'\n\n" +
          "Opzione C — Richiesta di appuntamento per controllo:\n" +
          "'Gentile Dottore, vorrei fissare un appuntamento il prima possibile. Avrei bisogno di parlarle di un disturbo a [indicare la parte del corpo] che persiste da qualche giorno. Quando posso venire in ambulatorio? Buona giornata.'\n\n" +
          "Consigli per l'invio:\n" +
          "• Orari: Invia il messaggio preferibilmente negli orari di apertura dello studio.\n" +
          "• Dati: Includi sempre il tuo Codice Fiscale se è la prima volta che scrivi.\n" +
          "• Usa sempre il 'Lei': Il rapporto medico-paziente in Italia è formale.",
        bodyFa:
          "قالب‌های پیام به دکتر:\n\n" +
          "الف — تمدید نسخه:\n" +
          "جناب دکتر، [نام]، تقاضای تمدید نسخه [نام دارو] را دارم. ممنونم.\n\n" +
          "ب — توصیف علائم:\n" +
          "سلام دکتر، چند روزه [علائم] دارم. آیا می‌توانم دارو بخورم یا ویزیت لازم است؟\n\n" +
          "ج — درخواست وقت:\n" +
          "دکتر عزیز، می‌خواهم وقت بگیرم. مشکلی در [قسمت بدن] دارم که چند روزه ادامه دارد.\n\n" +
          "نکته مهم: همیشه از 'Lei' (ضمیر احترامی) استفاده کنید.",
        keywords: ["messaggio", "WhatsApp", "ricetta", "rinnovo", "codice fiscale", "appuntamento", "Lei", "cortesia"],
      },
      {
        heading: "Risorse — Ascoltare e Guardare",
        headingFa: "منابع — گوش دادن و تماشا کردن",
        body:
          "Video consigliati su YouTube:\n\n" +
          "1. 'Dal dottore in italiano: sintomi e parti del corpo | Learn Italian'\n" +
          "   Canale: ItalianQui Valeria | Link: https://youtu.be/jzPexjaQhv0\n\n" +
          "2. 'Andare dal medico | Italiano in pratica'\n" +
          "   Canale: ALMA Edizioni | Link: https://youtu.be/1DKFNvzkyco\n\n" +
          "3. '50 Frasi Utili Chiamare il DOTTORE / Prenotare una Visita / Italiano B1'\n" +
          "   Canale: Colibrì Corsi di lingua italiana | Link: https://youtu.be/czF4e6k3JNc\n\n" +
          "4. 'Impara l'italiano: Prendere un Appuntamento dal Dottore | Frasi utili e Dialoghi'\n" +
          "   Canale: WowPodcast Italian | YouTube\n\n" +
          "5. '94. LA SALUTE 1 PARTE — Italiano per stranieri. Grammatica.'\n" +
          "   Link: https://youtu.be/EF9SlGOJro?\n\n" +
          "Podcast consigliato:\n" +
          "   'Frasi utili per andare dal medico | Useful Phrases to go to the doctor'\n" +
          "   Italian Everyday Podcast\n" +
          "   https://podcasts.apple.com/tn/podcast/frasi-utili-per-andare-dal-medico\n\n" +
          "Gioco interattivo:\n" +
          "   'Ruota della fortuna — Disturbi e consigli'\n" +
          "   https://wordwall.net/it/resource/18116026\n" +
          "   Gira la ruota per praticare i sintomi e i consigli medici in modo ludico!",
        bodyFa:
          "ویدیوهای پیشنهادی یوتیوب:\n" +
          "۱. علائم و اعضای بدن — ItalianQui Valeria\n" +
          "۲. رفتن پیش دکتر — ALMA Edizioni\n" +
          "۳. ۵۰ جمله مفید برای تماس با دکتر — سطح B1\n" +
          "۴. گرفتن وقت از دکتر — WowPodcast Italian\n\n" +
          "پادکست:\n" +
          "Italian Everyday — جملات مفید برای رفتن پیش دکتر\n\n" +
          "بازی آنلاین:\n" +
          "wordwall.net — چرخ شانس برای تمرین علائم و توصیه‌های پزشکی",
        keywords: ["YouTube", "podcast", "wordwall", "video", "risorse", "ascolto", "pratica"],
      },
      {
        heading: "Sintomi Respiratori e Influenzali (???? ??)",
        headingFa: "????? ????? ? ??????????",
        body: "Raffreddore e Influenza (Sintomi Respiratori)\nIl naso chiuso: Congestione nasale.\nIl naso che cola � Rinorrea: quando esce muco continuamente.\nLo starnuto (Verbo: starnutire).\nLa tosse secca: Senza muco, irritante.\nLa tosse grassa: Con catarro.\nIl mal di gola: Dolore quando deglutisci.\nLa raucedine: Quando perdi la voce o la voce e sporca.\nIl respiro affannoso: Quando fai fatica a respirare bene.",
        bodyFa: "سرماخوردگی و آنفولانزا:\nبینی گرفته — احتقان بینی\nآبریزش بینی — وقتی مخاط مدام خارج می‌شود\nعطسه (فعل: starnutire)\nسرفه خشک — بدون مخاط، تحریک‌کننده\nسرفه مرطوب — با خلط\nگلودرد — موقع بلعیدن\nخش‌داری صدا — وقتی صدا گرفته می‌شود\nتنگی نفس — وقتی نفس کشیدن سخت می‌شود",
        keywords: ["naso chiuso","rinorrea","starnuto","tosse secca","tosse grassa","mal di gola","raucedine","respiro affannoso"],
      },
      {
        heading: "Problemi Digestivi e Cutanei (???? ??)",
        headingFa: "?????? ?????? ? ?????",
        body: "Problemi Digestivi:\nLa nausea: Senso di vomito.\nIl vomito (Verbo: rimettere o vomitare).\nIl bruciore di stomaco: Sensazione di fuoco dietro lo sterno (reflusso).\nIl gonfiore addominale: Pancia gonfia d aria.\nLa stitichezza: Difficolta ad andare in bagno.\nLa diarrea: Scariche frequenti e liquide.\nI crampi addominali: Dolori forti e improvvisi alla pancia.\nLa pesantezza di stomaco: Quando senti di non aver digerito.\n\nProblemi Cutanei (Pelle):\nIl prurito: Voglia di grattarsi.\nL eruzione cutanea: Macchie rosse o puntini sulla pelle.\nIl pomfo: Rigonfiamento tipico delle punture d insetto o allergie.\nLa secchezza: Pelle molto secca che si screpola.",
        bodyFa: "مشکلات گوارشی:\nحالت تهوع\nاستفراغ\nسوزش معده — احساس سوختن پشت جناغ (ریفلاکس)\nنفخ شکم — شکم باد کرده\nیبوست — مشکل در دستشویی رفتن\nاسهال — مدفوع مکرر و آبکی\nکرامپ شکمی — دردهای شدید و ناگهانی\nسنگینی معده — احساس سوء هاضمه\n\nمشکلات پوستی:\nخارش\nکهیر — لکه‌های قرمز یا برجستگی روی پوست\nپمفو — برجستگی ناشی از نیش حشره یا آلرژی\nخشکی پوست",
        keywords: ["nausea","vomito","bruciore di stomaco","gonfiore","stitichezza","diarrea","crampi","prurito","eruzione cutanea"],
      },
      {
        heading: "Sintomi Articolari, Neurologici e Generali (???? ??)",
        headingFa: "????? ?????? ???? ? ?????",
        body: "Sintomi Articolari (Giunture):\nIl dolore articolare: Dolore generico alle giunture.\nL infiammazione: Quando la zona e rossa, calda e gonfia.\nIl gonfiore: Quando l articolazione appare piu grande del normale (edema).\nLa rigidita: Quando fai fatica a muovere l arto, specialmente al mattino appena sveglio.\nLo scricchiolio: Quel rumore di clic o crack quando muovi un articolazione.\nLa limitazione funzionale: Quando non riesci a fare movimenti completi.\n\nSintomi Neurologici e Generali:\nIl mal di testa / La cefalea: Dolore alla testa.\nL emicrania: Mal di testa molto forte, spesso solo su un lato.\nLe vertigini / I giramenti di testa: Quando senti che tutto ruota.\nLa spossatezza / Il senso di sfinimento: Quando sei senza forze.\nI brividi: Tremori dovuti a febbre o freddo.\nL insonnia: Impossibilita di dormire.",
        bodyFa: "علائم مفصلی:\nدرد مفصل\nالتهاب — قرمزی، گرمی و تورم\nتورم — بزرگ‌تر شدن مفصل (ادم)\nسفتی — مشکل در حرکت، به‌خصوص صبح‌ها\nصدای تق‌تق مفصل\nمحدودیت حرکتی\n\nعلائم عصبی و عمومی:\nسردرد / میگرن\nمیگرن — سردرد شدید، اغلب یک طرفه\nسرگیجه — احساس چرخش\nخستگی مفرط\nلرز — به خاطر تب یا سرما\nبی‌خوابی",
        keywords: ["dolore articolare","infiammazione","gonfiore","rigidita","cefalea","emicrania","vertigini","spossatezza","insonnia","brividi"],
      },
      {
        heading: "Sintomi Muscolari, Ossei e degli Occhi (???? ??)",
        headingFa: "????? ??????? ???????? ? ????",
        body: "Sintomi Muscolari e Ossei:\nIl crampo: Contrazione muscolare improvvisa e dolorosa.\nLo strappo muscolare: Lesione del muscolo (molto dolorosa).\nLa contrattura: Muscolo che rimane rigido e teso.\nIl formicolio: Sensazione di aghi o formiche sulla pelle (spesso legato ai nervi).\nL intorpidimento: Quando non senti bene la parte del corpo (come se fosse addormentata).\n\nSintomi degli Occhi (Vista):\nL arrossamento: Quando gli occhi sono rossi.\nIl prurito: Quando hai voglia di grattarti gli occhi (comune nelle allergie).\nLa lacrimazione: Quando gli occhi lacrimano molto.\nLa vista appannata / sfocata: Quando non vedi i contorni nitidi.\nLa sensibilita alla luce (fotofobia): Quando la luce ti da fastidio o dolore.\nLa secrezione: Quando c e del pus o del liquido giallo negli occhi.\nLa sensazione di un corpo estraneo: Quando ti sembra di avere della sabbia o un ciglio nell occhio.\nLe mosche volanti: Quando vedi delle macchioline nere che si muovono.",
        bodyFa: "علائم عضلانی و استخوانی:\nگرفتگی عضله — انقباض ناگهانی و دردناک\nپارگی عضله — آسیب جدی عضله\nکشیدگی عضله — عضله سفت و کشیده\nمور مور شدن — احساس سوزن یا مورچه روی پوست\nبی‌حسی — وقتی عضو بدن احساس کمتری دارد\n\nعلائم چشمی:\nقرمزی چشم\nخارش چشم — رایج در آلرژی\nاشک‌ریزی\nتاری دید\nحساسیت به نور (فتوفوبیا)\nترشح چشم — چرک یا مایع زرد\nاحساس جسم خارجی — مثل شن یا مژه در چشم\nموش‌های پرنده — لکه‌های سیاه متحرک در دید",
        keywords: ["crampo","strappo muscolare","contrattura","formicolio","intorpidimento","arrossamento","lacrimazione","vista appannata","fotofobia","mosche volanti"],
      },
      {
        heading: "Sintomi delle Orecchie e Tipi di Dolore (???? ??)",
        headingFa: "????? ??? ? ????? ???",
        body: "Sintomi delle Orecchie (Udito):\nIl mal d orecchio (otalgia): Dolore interno all orecchio.\nL acufene / Il fischio: Quando senti un fischio o un ronzio costante.\nL orecchio tappato: Sensazione di pressione, come quando si cambia altitudine.\nIl calo dell udito: Quando senti meno del solito.\nLa fuoriuscita di liquido: Quando esce del siero o del pus (otorrea).\nLe vertigini: Spesso i problemi alle orecchie causano perdita di equilibrio.\n\nSintomi e Dolore (Terminologia):\nAlgia: Termine tecnico per indicare il dolore. Spesso usato come suffisso.\nMialgia: Dolore muscolare.\nGastralgia: Mal di stomaco.\nDolore urente: Un dolore che brucia.\nDolore trafittivo: Un dolore acuto e improvviso, come una puntura.\nParestesia: Sensazione di formicolio o intorpidimento.\n\nNota: Ho un dolore a... / Mi fa male...: Le forme piu comuni usate dal paziente per descrivere un fastidio.",
        bodyFa: "علائم گوش:\nگوش‌درد (اوتالژی)\nوزوز گوش — صدای سوت یا هم مداوم\nگوش گرفته — احساس فشار\nکاهش شنوایی\nترشح گوش (اوتوره)\nسرگیجه — اغلب به مشکل گوش مربوط است\n\nانواع درد:\nآلژی: اصطلاح فنی برای درد (پسوند)\nمیالژی: درد عضلانی\nگاسترالژی: دل‌درد\nدرد سوزشی\nدرد تیر کشنده — تند و ناگهانی\nپارستزی — احساس مورمور یا بی‌حسی\n\nجملات رایج بیمار: Mi fa male... / Ho un dolore a...",
        keywords: ["otalgia","acufene","orecchio tappato","calo udito","algia","mialgia","dolore urente","dolore trafittivo","parestesia"],
      },
      {
        heading: "Luoghi, Figure Professionali e Documenti (???? ??)",
        headingFa: "???????? ??????? ????? ? ?????",
        body: "Luoghi e Figure Professionali:\nAmbulatorio / Studio Medico: Il luogo dove il medico riceve i pazienti.\nMedico di Medicina Generale (MMG): Il termine tecnico per il medico di base.\nSpecialista: Un medico esperto in un ramo specifico (es. cardiologo, dermatologo).\nPronto Soccorso: Per emergenze gravi e immediate.\nGuardia Medica: Servizio per urgenze notturne o festive quando il medico di base e chiuso.\n\nDocumenti e Cure:\nTessera Sanitaria: Fondamentale per identificarsi e per la farmacia.\nRicetta (o Prescrizione): Il documento che serve per acquistare i farmaci.\nImpegnativa: Il modulo per prenotare esami o visite specialistiche.\nMedicinale / Farmaco: La cura prescritta.\nAnalisi del sangue / delle urine: Esami diagnostici comuni.\n\nPrescrizioni e Trattamenti:\nRicetta bianca: La ricetta personale del medico per farmaci o prestazioni a totale carico del paziente.\nTrattamento medico: La prestazione professionale finalizzata a migliorare le condizioni di salute del paziente.\nConsenso informato: Il documento con cui il paziente accetta consapevolmente un trattamento dopo averne capito rischi e benefici.\nPosologia: Indica le dosi e i tempi di assunzione di un farmaco.",
        bodyFa: "مکان‌ها و کارکنان:\nمطب — جایی که دکتر بیماران را می‌پذیرد\nMMG — اصطلاح رسمی پزشک عمومی\nمتخصص — دکتر متخصص در یک رشته\nاورژانس — برای فوریت‌های پزشکی جدی\nگارد پزشکی — خدمات شبانه‌روزی وقتی مطب بسته است\n\nمدارک و درمان:\nکارت بهداشتی — برای شناسایی و داروخانه ضروری است\nنسخه — برای خرید دارو\nایمپنیاتیوا — فرم ارجاع به متخصص\nدارو\nآزمایش خون / ادرار\n\nاصطلاحات تخصصی:\nنسخه سفید — برای داروهایی که بیمار کامل هزینه می‌کند\nدرمان پزشکی\nرضایت آگاهانه — توافق بیمار بعد از آگاهی از خطرات\nپوزولوژی — دستور مصرف دارو",
        keywords: ["ambulatorio","MMG","specialista","pronto soccorso","guardia medica","tessera sanitaria","ricetta","impegnativa","posologia","consenso informato"],
      },
      {
        heading: "Durante la Visita e Formule di Cortesia (???? ??)",
        headingFa: "??? ????? ? ????? ????",
        body: "Durante la visita (Azioni):\nIl medico potrebbe darti delle istruzioni, ecco cosa potresti sentire o dover dire:\n- Mi fa male qui quando preme? (Risposta: Si, sento una fitta / No, solo un po di fastidio)\n- Le serve che mi tolga la maglietta?\n- Devo fare degli esami del sangue o un ecografia?\n- Puo scrivermi il certificato medico per il lavoro/scuola?\n- Posso avere un certificato medico per il lavoro?\n\nFormule di cortesia:\n- Buongiorno Dottore / Dottoressa: Saluto formale d obbligo.\n- La ringrazio per la disponibilita: Per ringraziare a fine visita.\n\nTermini di Diagnostica:\nAstenia: Senso di estrema stanchezza o debolezza fisica.\nEdema: Gonfiore causato da accumulo di liquidi.\nIper- / Ipo-: Prefissi che indicano rispettivamente eccessivo/alto e insufficiente/basso (es. ipertensione, ipoglicemia).\n\nNota pratica: Per una comunicazione efficace, e consigliabile essere brevi e diretti, descrivendo il problema principale, la durata dei sintomi e se sono stati gia presi farmaci.",
        bodyFa: "حین ویزیت:\n- اینجا وقتی فشار می‌دهید درد دارم؟ (جواب: بله، یک درد تیز / نه، فقط کمی ناراحتی)\n- لازم است پیراهنم را در بیاورم؟\n- باید آزمایش خون یا اکو بگیرم؟\n- می‌توانید گواهی پزشکی برای کار/مدرسه بنویسید؟\n\nجملات رسمی:\n- سلام آقای/خانم دکتر\n- از حضورتان ممنونم\n\nاصطلاحات تشخیصی:\nآستنی — خستگی شدید یا ضعف فیزیکی\nادم — تورم ناشی از تجمع مایعات\nایپر-/ایپو- — پیشوند به معنای بیش از حد / کمتر از حد (مثال: فشار خون بالا، قند پایین)\n\nنکته: کوتاه و مستقیم بگویید: مشکل اصلی، مدت علائم، و اینکه آیا دارو خورده‌اید.",
        keywords: ["visita","certificato medico","formule di cortesia","Dottore","Dottoressa","astenia","edema","ipertensione","ipoglicemia"],
      },
      {
        heading: "Specializzazioni Mediche in Italia (???? ??)",
        headingFa: "???????? ????? ?? ???????",
        body: "Le specializzazioni mediche in Italia sono suddivise in tre aree principali: medica, chirurgica e dei servizi clinici. In totale esistono 51 scuole di specializzazione ufficiali.\n\nArea Medica (Diagnosi e cura non chirurgica delle patologie):\n- Medicina Interna: Diagnosi e cura di patologie multisistematiche.\n- Cardiologia: Cuore e vasi sanguigni.\n- Dermatologia e Venereologia: Pelle e malattie a trasmissione sessuale.\n- Neurologia: Sistema nervoso centrale e periferico.\n- Pediatria: Salute dei neonati, bambini e adolescenti.\n- Endocrinologia: Ghiandole e metabolismo.\n- Gastroenterologia: Stomaco, intestino e fegato.\n\nArea Chirurgica (Interventi manuali e strumentali):\n- Chirurgia Generale: Interventi sugli organi addominali e altre aree comuni.\n- Chirurgia Plastica, Ricostruttiva ed Estetica: Riparazione o alterazione del corpo.\n- Ortopedia e Traumatologia: Apparato muscolo-scheletrico.\n- Ginecologia e Ostetricia: Salute femminile, gravidanza e parto.\n- Oftalmologia (Oculistica): Malattie degli occhi.\n\nArea dei Servizi Clinici (Supporto diagnostico o di gestione dell emergenza):\n- Anestesia, Rianimazione, Terapia Intensiva e del Dolore: Gestione del paziente critico e del dolore.\n- Radiodiagnostica: Imaging medico (TAC, Risonanze, Ecografie).\n- Medicina d Emergenza-Urgenza: Gestione dei pazienti in Pronto Soccorso.\n- Medicina Legale: Aspetti medici legati alla giurisprudenza.\n- Igiene e Medicina Preventiva: Salute pubblica e prevenzione.",
        bodyFa: "تخصص‌های پزشکی ایتالیا در سه حوزه:\n\nحوزه پزشکی (تشخیص و درمان غیر جراحی):\n- طب داخلی\n- قلب و عروق\n- پوست و بیماری‌های مقاربتی\n- نورولوژی (اعصاب)\n- اطفال\n- غدد و متابولیسم\n- گوارش (معده، روده، کبد)\n\nحوزه جراحی:\n- جراحی عمومی\n- جراحی پلاستیک\n- ارتوپدی و تروما\n- زنان و زایمان\n- چشم‌پزشکی\n\nحوزه خدمات بالینی:\n- بیهوشی و مراقبت‌های ویژه\n- رادیولوژی تشخیصی\n- طب اورژانس\n- پزشکی قانونی\n- بهداشت عمومی و پیشگیری",
        keywords: ["specializzazione","cardiologia","dermatologia","neurologia","pediatria","gastroenterologia","chirurgia","ortopedia","ginecologia","radiodiagnostica"],
      },
      {
        heading: "Le Analisi Mediche (???? ??)",
        headingFa: "?????????? ?????",
        body: "Esami del Sangue (Check-up di base):\n- Emocromo: Analisi completa dei globuli rossi, bianchi e piastrine.\n- Glicemia: Misurazione del livello di zuccheri nel sangue.\n- Profilo Lipidico: Include Colesterolo totale, HDL, LDL e Trigliceridi.\n- Creatinina: Valutazione della funzionalita renale.\n- Transaminasi (ALT/GPT, AST/GOT): Indicatori della salute del fegato.\n- Elettroforesi proteica: Analisi delle proteine nel sangue.\n\nAltri Esami di Laboratorio:\n- Esame delle Urine: Include l esame chimico-fisico e l urinocoltura per la ricerca di batteri.\n- Esame delle Feci: Coprocoltura e test per il sangue occulto (screening del tumore al colon).\n- Tamponi: Faringeo, vaginale o rettale per rilevare infezioni.\n- Pap Test / HPV Test: Screening per il tumore della cervice uterina.\n\nEsami Strumentali (Diagnostica per Immagini):\n- Ecografia: Utilizza ultrasuoni (es. addominale, tiroidea, cardiaca).\n- Radiografia (RX): Utilizza raggi X, comune per ossa e torace.\n- Elettrocardiogramma (ECG): Registra l attivita elettrica del cuore.\n- TAC e Risonanza Magnetica (RM): Tecniche avanzate per immagini dettagliate degli organi interni.\n\nAnalisi Specifiche:\n- Breath Test: Test del respiro per intolleranza al lattosio o infezione da Helicobacter pylori.\n- Spermiogramma: Analisi del liquido seminale per la fertilita maschile.\n- Dosaggi Ormonali: Analisi di ormoni come il TSH (tiroide) o il testosterone.",
        bodyFa: "آزمایش‌های خون (چک‌آپ پایه):\n- هموگرام — بررسی کامل گلبول‌های قرمز، سفید و پلاکت\n- قند خون (گلیسمی)\n- پروفایل چربی — کلسترول، HDL، LDL، تری‌گلیسرید\n- کراتینین — ارزیابی کلیه\n- ترانسامینازها — سلامت کبد\n- الکتروفورز پروتئین‌های خون\n\nسایر آزمایش‌های آزمایشگاهی:\n- آزمایش ادرار — فیزیکوشیمیایی و کشت ادرار\n- آزمایش مدفوع — کشت و خون مخفی (غربالگری سرطان روده)\n- سواب — گلو، واژن یا راست‌روده\n- پاپ‌اسمیر / HPV — غربالگری سرطان دهانه رحم\n\nتصویربرداری پزشکی:\n- اکوگرافی — سونوگرافی\n- رادیوگرافی — اشعه ایکس\n- الکتروکاردیوگرام (ECG) — ثبت فعالیت الکتریکی قلب\n- CT اسکن و MRI — تصویربرداری پیشرفته\n\nآزمایش‌های خاص:\n- تست تنفسی — عدم تحمل لاکتوز یا هلیکوباکتر\n- اسپرموگرام — باروری مردانه\n- آزمایش هورمون‌ها — TSH، تستوسترون",
        keywords: ["emocromo","glicemia","profilo lipidico","creatinina","transaminasi","ecografia","radiografia","ECG","TAC","risonanza magnetica","breath test","spermiogramma"],
      },
      {
        heading: "Vocabolario Dal Dottore e Specialita Mediche (???? ??)",
        headingFa: "?????? ??? ???? ? ???????? ?????",
        body: "Dal Dottore � Oggetti e Figure:\n- la siringa: Utilizzata per iniezioni.\n- l ambulanza: Veicolo di soccorso d emergenza.\n- i cerotti: Piccole bende adesive per ferite.\n- il termometro: Misura la febbre.\n- l infermiera / l infermiere: Chi assiste il medico.\n- la cassetta pronto soccorso: Kit d emergenza.\n- il flebo: Soluzione endovenosa (flebo / fleboclisi).\n- le pinzette: Strumento per rimuovere corpi estranei.\n- lo stetoscopio: Per ascoltare il cuore e i polmoni.\n- le pinze chirurgiche: Strumento usato in chirurgia.\n- il bisturi: Lama chirurgica affilata.\n- la radiografia: Immagine a raggi X.\n- la fasciatura: Benda avvolta attorno a una ferita o arto.\n- le pastiglie / le pillole: Farmaci solidi orali.\n- il dottore: Il medico che cura i pazienti.\n- i pazienti: Le persone che ricevono cure.\n\nSpecialita Mediche:\n- Otorinolaringoiatria: Orecchio, naso e gola (ORL).\n- Odontoiatria / Odontologia: Cura dei denti.\n- Geriatria: Cura degli anziani.\n- Ginecologia e Ostetricia: Salute femminile.\n- Radiologia: Imaging medico.\n- Pediatria: Cure per bambini.\n- Ortopedia: Apparato muscolo-scheletrico.\n- Oculistica / Oftalmologia: Malattie degli occhi.\n- Chirurgia: Interventi operatori.\n- Medicina Generale: Il medico di base.",
        bodyFa: "وسایل مطب دکتر:\n- سرنگ\n- آمبولانس\n- چسب زخم\n- دماسنج\n- پرستار\n- جعبه کمک‌های اولیه\n- سرم وریدی\n- پنس\n- گوشی پزشکی\n- قیچی جراحی\n- اسکالپل (تیغ جراحی)\n- رادیوگرافی\n- باندپیچی\n- قرص / کپسول\n- دکتر\n- بیماران\n\nتخصص‌های پزشکی:\n- گوش و حلق و بینی (ORL)\n- دندانپزشکی\n- سالمندان (ژریاتری)\n- زنان و زایمان\n- رادیولوژی\n- اطفال\n- ارتوپدی\n- چشم‌پزشکی\n- جراحی\n- طب عمومی",
        keywords: ["siringa","ambulanza","cerotto","termometro","infermiera","stetoscopio","bisturi","radiografia","fasciatura","otorinolaringoiatria","odontoiatria","geriatria"],
      },
      {
        heading: "Essere Malato/a e Oggetti in Ospedale (???? ??)",
        headingFa: "????? ???? ? ????? ?????????",
        body: "Essere Malato/a � Espressioni:\n- Stare bene: Sentirsi in buona salute.\n- Stare male: Non sentirsi bene.\n- Avere il raffreddore: Avere la malattia del raffreddore.\n- Avere la tosse: Tossire in modo continuato.\n- Avere la febbre: Avere la temperatura corporea alta.\n- Avere l influenza: Avere l influenza stagionale.\n- Avere mal di gola: Avere dolore alla gola.\n- Avere mal di testa: Avere un dolore alla testa.\n- Avere mal di denti: Avere dolore ai denti.\n- Ferirsi / Farsi male: Subire una lesione fisica.\n- Avere la nausea: Sentire il bisogno di vomitare.\n- Essere allergico/a a: Avere una reazione allergica a qualcosa.\n\nOggetti in Ospedale (Nomi di cose in ospedale):\n- l ambulanza: Veicolo di emergenza.\n- il pronto soccorso: Reparto di emergenza dell ospedale.\n- la lettiga: Barella su ruote per trasportare pazienti.\n- l ospedale: La struttura sanitaria principale.\n- il medico: Il dottore.\n- l infermiera / l infermiere: Personale di assistenza.\n- il chirurgo: Il medico che esegue operazioni.\n- i guanti sterili: Protezione durante le operazioni.\n- l ingessatura: Gesso per immobilizzare un arto fratturato.\n- le stampelle: Per camminare con una gamba ferita.\n- le protesi: Arti artificiali.\n- la sedia a rotelle: Per chi non puo camminare.\n- il girello: Supporto per camminare.\n- la farmacia: Dove si acquistano i farmaci.\n- la farmacista: Chi lavora in farmacia.\n- i farmaci: I medicinali.\n- le pillole: Compresse orali.\n- le capsule: Farmaci in capsula.\n- le supposte: Farmaci rettali.\n- lo sciroppo: Farmaco liquido.\n- la crema: Farmaco topico per la pelle.\n- le inalazioni: Farmaci per l apparato respiratorio.\n- lo stetoscopio: Per ascoltare cuore e polmoni.\n- lo sfigmomanometro: Per misurare la pressione sanguigna.\n- il termometro: Per misurare la febbre.\n- il laccio emostatico: Per fermare le emorragie.\n- il cotone idrofilo: Per pulire le ferite.\n- la siringa: Per iniezioni.\n- la benda: Per fasciare le ferite.\n- i cerotti: Piccole bende adesive.",
        bodyFa: "عبارات بیمار بودن:\n- حالم خوبه\n- حالم خوب نیست\n- سرماخوردگی دارم\n- سرفه دارم\n- تب دارم\n- آنفولانزا دارم\n- گلودرد دارم\n- سردرد دارم\n- دندان‌درد دارم\n- زخمی شدم\n- حالت تهوع دارم\n- به ... آلرژی دارم\n\nوسایل بیمارستان:\n- آمبولانس\n- اورژانس\n- برانکارد\n- بیمارستان\n- دکتر\n- پرستار\n- جراح\n- دستکش استریل\n- گچ (برای شکستگی)\n- عصا زیربغل\n- پروتز\n- ویلچر\n- واکر\n- داروخانه\n- داروساز\n- داروها\n- قرص‌ها\n- کپسول‌ها\n- شیاف\n- شربت\n- کرم\n- اسپری تنفسی\n- گوشی پزشکی\n- فشارسنج\n- دماسنج\n- تورنیکه\n- پنبه طبی\n- سرنگ\n- باند\n- چسب زخم",
        keywords: ["stare male","avere la febbre","avere mal di gola","allergico","ambulanza","lettiga","ingessatura","stampelle","sedia a rotelle","sfigmomanometro","cotone idrofilo","supposte"],
      },
      {
        heading: "Tipi di Medici e Nomi in Ospedale (???? ??)",
        headingFa: "????? ?????? ? ???????? ??????????",
        body: "Tipi di Medici (Tipi di Medici):\n- il medico generico: Il medico di base, primo punto di contatto.\n- l oculista: Specialista degli occhi e della vista.\n- il dentista: Specialista dei denti.\n- il pediatra: Medico specializzato nella cura dei bambini.\n- il cardiologo: Specialista del cuore.\n- il ginecologo: Specialista della salute femminile.\n- l andrologo: Specialista della salute maschile.\n- il dermatologo: Specialista delle malattie della pelle.\n- l otorinolaringoiatra: Specialista di orecchio, naso e gola (ORL).\n- il veterinario: Medico degli animali.\n\nNomi di cose in ospedale:\n- il dottore: Il medico responsabile della cura.\n- l infermiere / l infermiera: Personale di assistenza.\n- l ambulanza: Veicolo di soccorso.\n- il lettino: Il letto d esame o la barella.\n- la siringa: Strumento per iniezioni.\n- la sedia a rotelle: Per pazienti che non possono camminare.\n- la radiografia: Immagine diagnostica a raggi X.\n- la medicina / il farmaco: La sostanza curativa.\n- il bisturi: Strumento chirurgico tagliente.\n- l ingessatura / il cerotto: Medicazioni per ferite e fratture.",
        bodyFa: "انواع پزشکان:\n- پزشک عمومی — اولین نقطه تماس\n- چشم‌پزشک\n- دندانپزشک\n- متخصص اطفال\n- قلب‌پزشک (کاردیولوگ)\n- متخصص زنان\n- متخصص اندرولوژی (سلامت مردان)\n- متخصص پوست\n- گوش و حلق و بینی (اوتورینولارینگویاترا)\n- دامپزشک\n\nاصطلاحات بیمارستانی:\n- دکتر\n- پرستار\n- آمبولانس\n- تخت معاینه / برانکارد\n- سرنگ\n- ویلچر\n- رادیوگرافی\n- دارو\n- اسکالپل (تیغ جراحی)\n- گچ / چسب زخم",
        keywords: ["medico generico","oculista","dentista","pediatra","cardiologo","ginecologo","dermatologo","otorinolaringoiatra","veterinario","lettino","bisturi"],
      },
    ],
  },
};



