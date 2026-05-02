import type { ChapterContent } from "@/lib/chapters/20/content";

export const chapter11Content: ChapterContent = {
  chapter: 11,
  titleIt: "Il Veicolo – Manutenzione – Pneumatici – Freni – Sterzo",
  titleFa: "وسیله نقلیه – نگهداری – لاستیک – ترمز – فرمان",
  pageRange: "ص ۱۶۳–۱۷۸",
  summary: "این فصل اجزای اصلی وسیله نقلیه و نگهداری آن‌ها را بررسی می‌کند: لاستیک‌ها (عمق آج، فشار باد)، سیستم ترمز (ABS، EBD)، فرمان، و سایر اجزای مهم. همچنین تأثیر نگهداری بد بر ایمنی توضیح داده می‌شود.",
  sections: [
    {
      id: "11-0-testo-italiano",
      titleIt: "Testo Originale – Capitolo 11",
      titleFa: "📖 متن اصلی ایتالیایی فصل ۱۱",
      body: [
        "**Pneumatici (Art. 78 C.d.S.)**\n\nI pneumatici devono:\n• Avere un battistrada (profilo) con profondità minima di **1,6 mm** (rilevabile con appositi indicatori sul battistrada).\n• Avere la pressione corretta (gonfiaggio adeguato).\n• Essere adatti alle condizioni d'uso (es. pneumatici invernali in certi periodi).\n\nEffetti della pressione:\n• **Gonfiaggio eccessivo**: riduce la superficie di contatto → frenata più lunga, rischio di scoppio.\n• **Gonfiaggio insufficiente**: maggiore consumo di carburante, surriscaldamento, rischio di cedimento.\n\nÈ vietato mescolare pneumatici di tipo diverso (es. un invernale e tre estivi).",

        "**Sistema frenante**\n\n• **Freno a pedale (freno di servizio)**: frena tutti e 4 i ruote. È il freno principale.\n• **Freno a mano (freno di stazionamento)**: mantiene il veicolo fermo. Non usare in movimento salvo emergenza.\n• **ABS (Anti-lock Braking System)**: impedisce il blocco delle ruote durante la frenata di emergenza → mantiene il controllo del sterzo.\n• **EBD (Electronic Brake Distribution)**: distribuisce la forza frenante in modo ottimale tra le ruote.\n\nIn caso di guasto dei freni: scalare le marce, usare il freno a mano con delicatezza.",

        "**Sterzo e altre componenti**\n\n• Lo sterzo deve essere leggero e preciso. Difetti allo sterzo possono causare perdita di controllo.\n• I dispositivi di sicurezza attiva (ABS, ESP, ASR) aiutano il conducente ma non sostituiscono la guida prudente.\n• ESP (Electronic Stability Program): corregge il sovrasterzo e il sottosterzo.",
      ],
      highlights: [
        "Profondità minima battistrada: 1,6 mm.",
        "Gonfiaggio eccessivo → scoppio.",
        "Gonfiaggio insufficiente → surriscaldamento.",
        "ABS: impedisce blocco ruote in frenata.",
        "Freno a mano in movimento: solo in emergenza.",
      ],
      notes: [
        "★ حداقل عمق آج: ۱.۶ میلیمتر.",
        "★ باد زیاد = خطر انفجار لاستیک.",
        "★ باد کم = داغ شدن و مصرف بیشتر.",
        "★ ABS = جلوگیری از قفل شدن چرخ.",
        "★ ترمز دستی در حرکت = فقط اورژانس.",
      ],
    },
    {
      id: "11-0-traduzione-persiana",
      titleIt: "Traduzione Persiana – Capitolo 11",
      titleFa: "🇮🇷 ترجمه فارسی فصل ۱۱",
      body: [
        "**لاستیک‌ها (ماده ۷۸)**\n\nلاستیک‌ها باید:\n• عمق آج حداقل ۱.۶ میلیمتر داشته باشند.\n• فشار باد صحیح داشته باشند.\n• مناسب شرایط استفاده باشند (لاستیک زمستانی در دوره‌های خاص).\n\nتأثیر فشار باد:\n• **باد زیاد**: کاهش سطح تماس → ترمز طولانی‌تر، خطر انفجار.\n• **باد کم**: مصرف بیشتر، داغ شدن، خطر خرابی.\n\nمخلوط کردن لاستیک‌های متفاوت (مثلاً یک زمستانی و سه تابستانی) ممنوع است.",

        "**سیستم ترمز**\n\n• **ترمز پا (سرویس)**: همه ۴ چرخ را می‌بندد.\n• **ترمز دستی (پارک)**: وسیله را ثابت نگه می‌دارد. در حرکت فقط اورژانس.\n• **ABS**: جلوگیری از قفل شدن چرخ در ترمز اضطراری → کنترل فرمان حفظ می‌شود.\n• **EBD**: توزیع بهینه نیروی ترمز بین چرخ‌ها.\n• **ESP**: اصلاح خروج از مسیر (OverSteer/UnderSteer).",
      ],
    },
    {
      id: "11-1-riassunto",
      titleIt: "Riassunto — Capitolo 11",
      titleFa: "خلاصه — فصل ۱۱",
      body: [
        "**جدول سریع اجزای مهم:**\n\n| سیستم | کارکرد |\n|-------|--------|\n| ABS | ضد قفل چرخ در ترمز |\n| EBD | توزیع نیروی ترمز |\n| ESP | پایداری الکترونیکی |\n| ASR | ضد لغزش در شتاب |\n\n**لاستیک:**\n- حداقل آج: **۱.۶ mm**\n- باد زیاد: خطر انفجار\n- باد کم: داغ شدن\n- مخلوط کردن نوع‌های مختلف: ممنوع",
      ],
      keyVerbs: [
        { italian: "verificare la pressione dei pneumatici", persian: "فشار باد لاستیک را بررسی کردن", example: "Bisogna verificare regolarmente la pressione dei pneumatici. → باید به‌طور منظم فشار باد لاستیک‌ها را بررسی کرد." },
      ],
    },

    {
      id: "11-eng",
      titleIt: "English Equivalents - Capitolo 11",
      titleFa: "معادل های انگلیسی - فصل 11",
      body: ["سیستم های خودرو:"],
      englishEquivalents: [
        { italian: "pneumatico",    english: "pneumatic tyre",  note: "لاستیک - pneuma = هوا" },
        { italian: "battistrada",   english: "tread",           note: "آج لاستیک" },
        { italian: "ABS",           english: "Anti-lock Braking",note: "ضد قفل ترمز - دقیقاً همان" },
        { italian: "ESP",           english: "Stability Program",note: "دقیقاً همان" },
        { italian: "sterzo",        english: "steering",        note: "فرمان" },
      ],
    },

  ],
};