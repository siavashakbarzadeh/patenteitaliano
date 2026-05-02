import type { ChapterContent } from "@/lib/chapters/20/content";

export const chapter6Content: ChapterContent = {
  chapter: 6,
  titleIt: "Posizione sulla Strada – Senso di Marcia – Manovre",
  titleFa: "موقعیت روی جاده – جهت حرکت – مانورها",
  pageRange: "ص ۸۱–۱۰۰",
  summary: "این فصل قوانین موقعیت‌گیری صحیح روی جاده را توضیح می‌دهد: حرکت در سمت راست، تغییر خط، دور زدن (inversione di marcia)، دنده عقب، و قوانین گردش به راست و چپ.",
  sections: [
    {
      id: "6-0-testo-italiano",
      titleIt: "Testo Originale – Capitolo 6",
      titleFa: "📖 متن اصلی ایتالیایی فصل ۶",
      body: [
        "**Posizione sulla carreggiata (Art. 143)**\n\nI veicoli devono circolare sulla parte destra della carreggiata e in prossimità del margine destro, anche quando la strada è libera. Si può occupare la parte sinistra solo per sorpassare o svoltare a sinistra.",

        "**Manovre (Art. 154)**\n\nPrima di qualsiasi manovra il conducente deve:\n1. Accertarsi di poterla eseguire senza pericolo.\n2. Segnalare l'intenzione con gli indicatori di direzione in anticipo.\n3. Assicurarsi di non ostacolare o pericolare gli altri utenti.\n\n**Inversione di marcia (U-turn)**: è vietata dove può essere pericolosa (autostrade, gallerie, incroci, curve, dossi, scarsa visibilità).\n\n**Retromarcia (marcia indietro)**: solo per brevi tratti e non su strade con velocità elevata. Vietata in autostrada.",

        "**Svolta a destra e a sinistra**\n\n• **Svolta a destra**: avvicinarsi al margine destro, segnalare, svoltare restando il più possibile vicino al lato destro.\n• **Svolta a sinistra**: spostarsi sul lato sinistro della corsia (o sulla corsia di svolta sinistra), segnalare, e dare la precedenza ai veicoli provenienti in senso contrario.",
      ],
      highlights: [
        "Sempre a destra della carreggiata.",
        "Inversione vietata su autostrade, gallerie, curve, incroci.",
        "Retromarcia vietata in autostrada.",
        "Prima di ogni manovra: segnalare con le frecce.",
        "Svolta a sinistra: dare precedenza ai veicoli in senso contrario.",
      ],
      notes: [
        "★ همیشه سمت راست جاده.",
        "★ دور زدن (U-turn): ممنوع در اتوبان، تونل، پیچ، تقاطع.",
        "★ دنده عقب: ممنوع در اتوبان.",
        "★ گردش چپ: تقدم به وسایل مقابل.",
      ],
    },
    {
      id: "6-0-traduzione-persiana",
      titleIt: "Traduzione Persiana – Capitolo 6",
      titleFa: "🇮🇷 ترجمه فارسی فصل ۶",
      body: [
        "**موقعیت روی جاده (ماده ۱۴۳)**\n\nوسایل نقلیه باید در سمت راست جاده و نزدیک به لبه راست حرکت کنند، حتی وقتی جاده خالی است. سمت چپ فقط برای سبقت یا گردش چپ استفاده می‌شود.",

        "**مانورها (ماده ۱۵۴)**\n\nقبل از هر مانور راننده باید:\n۱. مطمئن شود که می‌تواند بدون خطر آن را انجام دهد.\n۲. قصد خود را با فرچه از قبل اعلام کند.\n۳. مطمئن شود که مانع یا خطری برای دیگران ایجاد نمی‌کند.\n\nدور زدن (U-turn): ممنوع در جاهای خطرناک (اتوبان، تونل، تقاطع، پیچ، کم‌دیدی).\nدنده عقب: فقط برای مسافت‌های کوتاه. ممنوع در اتوبان.",
      ],
    },
    {
      id: "6-1-riassunto",
      titleIt: "Riassunto — Capitolo 6",
      titleFa: "خلاصه — فصل ۶",
      body: [
        "**قوانین کلیدی موقعیت‌گیری:**\n\n| قانون | جزئیات |\n|-------|--------|\n| موقعیت | همیشه سمت راست |\n| قبل از مانور | فرچه + بررسی |\n| دور زدن ممنوع | اتوبان، تونل، پیچ، تقاطع |\n| دنده عقب ممنوع | اتوبان |\n| گردش چپ | تقدم به مقابل |",
      ],
      keyVerbs: [
        { italian: "tenersi a destra della carreggiata", persian: "در سمت راست جاده نگه داشتن", example: "I veicoli devono tenersi a destra della carreggiata. → وسایل باید در سمت راست جاده نگه دارند." },
      ],
    },

    {
      id: "6-eng",
      titleIt: "English Equivalents - Capitolo 6",
      titleFa: "معادل های انگلیسی - فصل 6",
      body: ["موقعیت گیری و مانور:"],
      englishEquivalents: [
        { italian: "manovra",       english: "maneuver",          note: "مانور - همریشه" },
        { italian: "inversione",    english: "inversion / U-turn", note: "دور زدن - همریشه" },
        { italian: "retromarcia",   english: "reverse",           note: "retro = عقب + marcia = حرکت" },
        { italian: "svolta",        english: "switch / turn",     note: "گردش، پیچ" },
        { italian: "margine",       english: "margin / edge",     note: "لبه - همریشه" },
        { italian: "senso",         english: "sense / direction", note: "جهت" },
      ],
    },

  ],
};