// ─────────────────────────────────────────────────────────────────────────────
//  CAPITOLO 13 – محتوای آموزشی (ترجمه فارسی)
//  منبع: صفحات ۱۵۰–۱۵۴ کتاب پاتنته B
// ─────────────────────────────────────────────────────────────────────────────

import type { ChapterContent } from "@/lib/chapters/20/content";

export const chapter13Content: ChapterContent = {
  chapter: 13,
  titleIt: "Norme sulla Circolazione dei Veicoli",
  titleFa: "قوانین تردد وسایل نقلیه در جاده",
  pageRange: "ص ۱۵۰–۱۵۴",
  sections: [

    // ─── رفتار صحیح در جاده ────────────────────────────────────────────────
    {
      id: "13-1-comportamenti",
      titleIt: "13.1 – Comportamenti per il Corretto Uso della Strada",
      titleFa: "۱۳.۱ – رفتارهای صحیح در جاده",
      body: [
        "**رفتارهای اجباری طبق قانون (Art. 140-146 C.d.S.):**\n\n• 🚗 **سرعت مناسب** — وسایل باید با سرعتی متناسب با شرایط جاده و ترافیک حرکت کنند\n• 🚶 **تقدم عابران** — باید به عابران در خط‌کشی تقدم داد\n• 🟡 **چراغ زرد ثابت** — اگر نمی‌توانید قبل از خط توقف بایستید، باید سریع تقاطع را ترک کنید\n• 💡 **چراغ‌ها در شب** — در مناطق مسکونی شبانه باید از چراغ‌های کوتاه (anabbaglianti) استفاده کرد\n• 🔲 **آینه قبل از فرچه** — قبل از علامت تغییر خط، ابتدا آینه‌ها را چک کنید",
      ],
      keyVerbs: [
        { italian: "procedere a velocità adeguata", persian: "با سرعت مناسب حرکت کردن", example: "I veicoli devono procedere a velocità adeguata alle condizioni della strada. → وسایل باید با سرعتی مناسب با شرایط جاده حرکت کنند." },
        { italian: "sgombrare l'incrocio", persian: "ترک کردن تقاطع", example: "Si deve affrettarsi a sgombrare l'incrocio al semaforo giallo. → هنگام چراغ زرد باید سریعاً تقاطع را ترک کرد." },
      ],
    },

    // ─── ترافیک سنگین ──────────────────────────────────────────────────────
    {
      id: "13-2-traffico-intenso",
      titleIt: "Comportamenti in Caso di Traffico Intenso",
      titleFa: "رفتار در ترافیک سنگین",
      body: [
        "**در ترافیک سنگین چه کاری باید کرد:**\n\n| باید | نباید |\n|------|-------|\n| ✅ سرعت را با جریان ترافیک هماهنگ کرد | ❌ بوق زدن برای تند کردن دیگران |\n| ✅ فاصله ایمنی از وسیله جلویی را حفظ کرد | ❌ تغییر مکرر خط برای پیدا کردن خط سریع‌تر |\n| ✅ در خط خود ثابت ماند | ❌ اشغال کردن خط اتوبوس/تراموا ولو خالی باشد |\n\n⚠️ **مهم:** اشغال خط‌های ویژه سرویس عمومی (حتی زمانی که خالی هستند) ممنوع است.",
      ],
      keyVerbs: [
        { italian: "mantenere la distanza di sicurezza", persian: "حفظ فاصله ایمنی", example: "In traffico intenso si deve mantenere sempre la distanza di sicurezza. → در ترافیک سنگین باید همیشه فاصله ایمنی را حفظ کرد." },
        { italian: "evitare di cambiare corsia ripetutamente", persian: "از تغییر مکرر خط پرهیز کردن", example: "Bisogna evitare di cambiare ripetutamente corsia per trovare quella più libera. → باید از تغییر مکرر خط برای پیدا کردن خط آزادتر پرهیز کرد." },
      ],
    },

    // ─── موقعیت وسیله روی جاده ─────────────────────────────────────────────
    {
      id: "13-3-posizione",
      titleIt: "13.2 – Posizione dei Veicoli sulla Carreggiata (Art. 143)",
      titleFa: "۱۳.۲ – موقعیت وسایل روی جاده (ماده ۱۴۳)",
      body: [
        "**قانون اساسی:** وسایل موتوری باید **در قسمت راست جاده** حرکت کنند، حتی وقتی جاده خالی است.\n\n**زمان‌هایی که باید کاملاً به راست بچسبید:**\n\n| حالت | توضیح |\n|------|-------|\n| 🚘🚘 **مقابل آمدن وسیله** | هنگام عبور از کنار وسیله مقابل |\n| ↩️ **پیچ** (curva) | در داخل هر نوع پیچ |\n| ⛰️ **شیب بالا** (salita) | در مسیر رو به بالا |\n| 🏔️ **برجستگی** (dosso) | نزدیک برجستگی |\n| 🚗💨 **سبقت خوردن** | وقتی کسی از شما سبقت می‌گیرد |",
        "**انواع جاده و قوانین خط:**\n\n| نوع جاده | قانون |\n|----------|-------|\n| **۲ خط دوطرفه** | خط راست — فقط برای سبقت به چپ |\n| **۳ خط دوطرفه** | خط وسط فقط برای سبقت |\n| **۲+ خط در هر جهت** | آزادترین خط به سمت راست |\n| **۲ سطح جداگانه** | همیشه سطح راست |\n| **۳ سطح جداگانه** | سطح راست یا وسط |",
      ],
      keyVerbs: [
        { italian: "circolare sulla parte destra", persian: "در قسمت راست جاده حرکت کردن", example: "I veicoli a motore devono circolare sulla parte destra della carreggiata. → وسایل موتوری باید در قسمت راست جاده حرکت کنند." },
        { italian: "percorrere la corsia libera più a destra", persian: "آزادترین خط سمت راست را انتخاب کردن", example: "Si deve percorrere la corsia libera più a destra. → باید آزادترین خط سمت راست را انتخاب کرد." },
      ],
    },

    // ─── چراغ‌های خیره‌کننده ───────────────────────────────────────────────
    {
      id: "13-4-abbaglianti",
      titleIt: "Incrocio con Veicolo con Luci Abbaglianti",
      titleFa: "مواجهه با چراغ‌های خیره‌کننده شب",
      body: [
        "😵 **هنگام خیره شدن از چراغ خودروی رو‌به‌رو در شب:**\n\n| ✅ چه کاری باید کرد | ❌ چه نباید کرد |\n|---------------------|----------------|\n| نگاه را از منبع نور منحرف کرد | با دست جلوی چشم را گرفتن! |\n| سرعت را کاهش داد | چراغ‌های خود را هم روشن کردن |\n| چراغ‌های کوتاه استفاده کرد | مانور ناگهانی یا تغییر خط |\n| در صورت لزوم توقف کرد | |\n\n⚠️ **نکته حیاتی:** هرگز دست‌هایتان را جلوی چشم نگیرید — کنترل فرمان را از دست می‌دهید!",
      ],
      keyVerbs: [
        { italian: "distogliere lo sguardo dal fascio luminoso", persian: "نگاه را از منبع نور منحرف کردن", example: "Bisogna distogliere lo sguardo dal fascio luminoso per non essere abbagliati. → باید نگاه را از منبع نور منحرف کرد تا خیره نشوید." },
        { italian: "rallentare adeguatamente", persian: "به طور مناسب کاهش سرعت دادن", example: "Si deve rallentare adeguatamente tenendo conto della ridotta visibilità. → باید با توجه به دید ناکافی، سرعت را به طور مناسب کاهش داد." },
      ],
    },

    // ─── عبور از خیابان با ریل تراموا ─────────────────────────────────────
    {
      id: "13-5-tram",
      titleIt: "Circolazione su Strade con Binari del Tram a Raso",
      titleFa: "خیابان‌های دارای ریل تراموا",
      body: [
        "🚃 **قوانین عبور از خیابان‌های با ریل تراموا:**\n\n• وسایل می‌توانند از روی ریل‌ها عبور کنند، مشروط بر اینکه **تراموا را کند یا متوقف نکنند**\n• روی ریل‌های تراموا **توقف و پارک ممنوع** است\n\n**هنگام وجود جزیره ایمنی (Isola Salvagente):**\nوسایل می‌توانند از **راست یا چپ** جزیره عبور کنند، مشروط بر:\n1. در محدوده نیمه‌جاده خودشان بمانند\n2. مسافران تراموا را مزاحم نکنند",
      ],
      keyVerbs: [
        { italian: "non ostacolare la marcia del tram", persian: "مزاحم حرکت تراموا نشدن", example: "I veicoli possono transitare sui binari purché non ostacolino la marcia del tram. → وسایل می‌توانند از روی ریل عبور کنند مشروط بر اینکه مزاحم تراموا نشوند." },
      ],
    },

  ],
};
