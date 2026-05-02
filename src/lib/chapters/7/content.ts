import type { ChapterContent } from "@/lib/chapters/20/content";

export const chapter7Content: ChapterContent = {
  chapter: 7,
  titleIt: "Uso delle Corsie – Incroci – Rotatorie",
  titleFa: "استفاده از خطوط – تقاطع‌ها – دوارها",
  pageRange: "ص ۱۰۱–۱۱۸",
  summary: "این فصل نحوه استفاده از خطوط جاده، قوانین تقاطع‌ها (شامل تقدم راست)، و قوانین دوار (روتاریا) را توضیح می‌دهد. تمرکز اصلی روی قانون تقدم در تقاطع‌های بدون علائم (قاعده سمت راست) است.",
  sections: [
    {
      id: "7-0-testo-italiano",
      titleIt: "Testo Originale – Capitolo 7",
      titleFa: "📖 متن اصلی ایتالیایی فصل ۷",
      body: [
        "**Uso delle corsie (Art. 143)**\n\n• Nelle strade con più corsie: circolazione sulla corsia di destra. Le corsie di sinistra si usano solo per sorpasso e poi si rientra a destra.\n• **Corsie specializzate**: corsie riservate (bus, taxi, bici), corsie di accelerazione, corsie di decelerazione.\n• **Corsia di emergenza**: solo in caso di emergenza.",

        "**Precedenza agli incroci (Art. 145)**\n\nAll'incrocio senza segnali di precedenza:\n• **Regola della destra**: dare la precedenza a chi proviene da destra.\n• **Eccezioni**: chi viene da una strada principale ha precedenza su chi viene da una secondaria; i segnali (STOP, Dare Precedenza) modificano le regole.\n• Il tram ha sempre la precedenza sui veicoli a motore, eccetto in presenza di segnali che regolano diversamente.",

        "**Rotatorie (rotonde)**\n\n• All'ingresso di una rotatoria, si deve dare la precedenza ai veicoli già in circolazione nella rotatoria.\n• Si procede in senso antiorario.\n• Uscire dalla corsia esterna con la freccia destra.",
      ],
      highlights: [
        "All'incrocio senza segnali: precedenza a chi viene da destra.",
        "Strada principale > strada secondaria.",
        "Tram: ha sempre la precedenza.",
        "Rotatoria: precedenza a chi è già dentro.",
        "Nella rotatoria: senso antiorario.",
      ],
      notes: [
        "★ سمت راست = تقدم (بدون علائم).",
        "★ جاده اصلی > جاده فرعی.",
        "★ تراموا = همیشه تقدم.",
        "★ روتاریا: تقدم به داخل.",
        "★ روتاریا: جهت ضد ساعتگرد.",
      ],
    },
    {
      id: "7-0-traduzione-persiana",
      titleIt: "Traduzione Persiana – Capitolo 7",
      titleFa: "🇮🇷 ترجمه فارسی فصل ۷",
      body: [
        "**استفاده از خطوط (ماده ۱۴۳)**\n\n• در جاده‌های چند خطه: در خط راست حرکت کنید. خطوط چپ فقط برای سبقت است — بعد برگردید راست.\n• خطوط ویژه: برای اتوبوس، تاکسی، دوچرخه.",

        "**تقدم در تقاطع (ماده ۱۴۵)**\n\nدر تقاطع بدون علائم:\n• **قاعده سمت راست**: تقدم به کسی که از راست می‌آید.\n• استثناها: جاده اصلی بر فرعی تقدم دارد؛ علائم (STOP، Dare Precedenza) قوانین را عوض می‌کنند.\n• تراموا همیشه بر وسایل موتوری تقدم دارد.",

        "**روتاریا (دوار)**\n\n• ورود: تقدم به وسایلی که داخل دوار هستند.\n• جهت: ضد ساعتگرد.\n• خروج: با فرچه راست از خط خارجی.",
      ],
    },
    {
      id: "7-1-riassunto",
      titleIt: "Riassunto — Capitolo 7",
      titleFa: "خلاصه — فصل ۷",
      body: [
        "**ترتیب تقدم در تقاطع:**\n\n۱. مأمور ترافیک\n۲. سمافور\n۳. STOP (همه تقدم)\n۴. Dare Precedenza (همه تقدم)\n۵. جاده اصلی بر فرعی\n۶. قاعده سمت راست\n\n**تراموا = همیشه تقدم (بر وسایل موتوری)**",
      ],
      keyVerbs: [
        { italian: "dare la precedenza a destra", persian: "تقدم به سمت راست", example: "All'incrocio senza segnali, si dà la precedenza a chi viene da destra. → در تقاطع بدون علائم، به کسی که از راست می‌آید تقدم داده می‌شود." },
      ],
    },
  ],
};
