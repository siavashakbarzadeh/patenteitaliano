import type { ChapterContent } from "@/lib/chapters/20/content";

export const chapter3Content: ChapterContent = {
  chapter: 3,
  titleIt: "Segnaletica Luminosa – Semafori",
  titleFa: "علائم نوری – چراغ راهنمایی",
  pageRange: "ص ۳۹–۵۲",
  summary: "این فصل انواع سمافورها و معنای رنگ‌های آن‌ها را توضیح می‌دهد: سمافور معمولی (قرمز/زرد/سبز)، سمافور جهت‌دار، سمافور برای عابران پیاده، سمافور برای دوچرخه، و سمافور برای وسایل حمل عمومی. همچنین رفتار صحیح در هر حالت توضیح داده می‌شود.",
  sections: [

    {
      id: "3-0-testo-italiano",
      titleIt: "Testo Originale – Capitolo 3",
      titleFa: "📖 متن اصلی ایتالیایی فصل ۳",
      body: [
        "**Semafori per veicoli (Art. 41 C.d.S.)**\n\n• **Rosso**: STOP — è vietato procedere oltre la linea di arresto.\n• **Giallo (arancione)**: avviso di imminente passaggio al rosso. Se il veicolo non riesce a fermarsi in sicurezza, può procedere con cautela.\n• **Verde**: si può procedere, rispettando le altre norme di comportamento.\n• **Verde + freccia verde**: si può procedere solo nella direzione indicata dalla freccia.\n• **Rosso lampeggiante**: si deve rallentare e procedere con cautela (come a un incrocio con STOP).\n• **Giallo lampeggiante**: si deve rallentare e procedere con prudenza.",

        "**Semafori per pedoni**\n\n• **Rosso**: i pedoni non devono attraversare.\n• **Verde**: i pedoni possono attraversare.\n• **Verde lampeggiante**: il pedone che non ha iniziato l'attraversamento non deve attraversare; chi ha già iniziato deve affrettarsi.\n\n**Semafori direzionali**: ogni freccia ha colori propri e si riferisce solo alla direzione indicata.",
      ],
      highlights: [
        "Rosso = STOP assoluto.",
        "Giallo = preparati a fermarti (non accelerare!).",
        "Verde = puoi procedere con prudenza.",
        "Rosso lampeggiante = rallentare, comportati come allo STOP.",
        "Giallo lampeggiante = procedere con prudenza.",
      ],
      notes: [
        "★ قرمز = توقف کامل.",
        "★ زرد = آماده توقف (شتاب نگیر!).",
        "★ سبز = می‌توانی حرکت کنی با احتیاط.",
        "★ قرمز چشمک‌زن = مثل STOP رفتار کن.",
        "★ زرد چشمک‌زن = با احتیاط ادامه بده.",
      ],
    },

    {
      id: "3-0-traduzione-persiana",
      titleIt: "Traduzione Persiana – Capitolo 3",
      titleFa: "🇮🇷 ترجمه فارسی فصل ۳",
      body: [
        "**سمافور برای وسایل نقلیه (ماده ۴۱)**\n\n• **قرمز**: توقف — عبور از خط توقف ممنوع است.\n• **زرد (نارنجی)**: هشدار تغییر به قرمز. اگر وسیله نمی‌تواند ایمن توقف کند، می‌تواند با احتیاط ادامه دهد.\n• **سبز**: می‌توان حرکت کرد با رعایت سایر قوانین.\n• **سبز + پیکان سبز**: فقط در جهت پیکان می‌توان حرکت کرد.\n• **قرمز چشمک‌زن**: کند شو و با احتیاط ادامه بده (مثل تقاطع با STOP).\n• **زرد چشمک‌زن**: کند شو و با احتیاط ادامه بده.",

        "**سمافور عابران پیاده**\n\n• **قرمز**: عبور ممنوع.\n• **سبز**: می‌توانند عبور کنند.\n• **سبز چشمک‌زن**: کسی که شروع نکرده نباید شروع کند؛ کسی که شروع کرده باید سریع‌تر برود.",
      ],
    },

    {
      id: "3-1-riassunto",
      titleIt: "Riassunto — Punti Chiave Capitolo 3",
      titleFa: "خلاصه — فصل ۳",
      body: [
        "**جدول رنگ‌های سمافور:**\n\n| رنگ | معنا | اقدام |\n|-----|------|-------|\n| قرمز ثابت | توقف | توقف کامل |\n| زرد ثابت | هشدار | آماده توقف |\n| سبز ثابت | حرکت | حرکت با احتیاط |\n| قرمز چشمک‌زن | خطر | کند شو = مثل STOP |\n| زرد چشمک‌زن | احتیاط | کند شو، با احتیاط |\n\n**سمافور عابر پیاده:**\n| قرمز | توقف | سبز | عبور | سبز چشمک | عجله کن |",
      ],
      keyVerbs: [
        { italian: "fermarsi al semaforo rosso", persian: "پشت سمافور قرمز توقف کردن", example: "Al semaforo rosso si deve fermarsi completamente. → پشت سمافور قرمز باید کاملاً توقف کرد." },
      ],
    },
  ],
};
