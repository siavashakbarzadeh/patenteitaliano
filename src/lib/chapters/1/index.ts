// ─────────────────────────────────────────────────────────────────────────────
//  CAPITOLO 1 – سوالات آزمون
// ─────────────────────────────────────────────────────────────────────────────

import type { Question } from "@/lib/types";

export const chapter1Questions: Question[] = [

  {
    id: 101,
    chapter: 1,
    question: "Cosa si intende per 'carreggiata'?",
    options: [
      "La parte della strada destinata alla circolazione dei veicoli",
      "Il marciapiede riservato ai pedoni",
      "La banchina laterale della strada",
      "Lo spartitraffico centrale"
    ],
    correct: 0,
    explanation: "La carreggiata è la parte della strada destinata alla circolazione dei veicoli. È delimitata da bordi e può essere divisa in più corsie.",
    vocab: [{ italian: "carreggiata", persian: "بخش اصلی جاده برای وسایل نقلیه" }],
  },

  {
    id: 102,
    chapter: 1,
    question: "Cosa indica una striscia longitudinale continua (linea bianca continua) in mezzo alla strada?",
    options: [
      "È vietato attraversarla o sorpassarla",
      "È consentito superarla con prudenza",
      "Indica la corsia di emergenza",
      "Indica il limite della zona pedonale"
    ],
    correct: 0,
    explanation: "La striscia continua non si può oltrepassare. Chi è dal lato della striscia continua non può effettuare sorpassi che richiedano di invadere la carreggiata opposta.",
    vocab: [{ italian: "striscia continua", persian: "خط ممتد" }],
  },

  {
    id: 103,
    chapter: 1,
    question: "Cosa indica una striscia longitudinale discontinua (linea tratteggiata)?",
    options: [
      "È consentito attraversarla o superarla con prudenza",
      "È assolutamente vietato attraversarla",
      "Indica il limite di velocità",
      "Indica una zona di parcheggio"
    ],
    correct: 0,
    explanation: "La striscia discontinua può essere attraversata con prudenza quando non vi è pericolo. Si può sorpassare rispettando le altre norme del codice.",
    vocab: [{ italian: "striscia discontinua", persian: "خط منقطع" }],
  },

  {
    id: 104,
    chapter: 1,
    question: "In presenza di una striscia mista (un lato continuo e un lato discontinuo), chi può sorpassare?",
    options: [
      "Solo chi si trova dal lato della striscia discontinua",
      "Solo chi si trova dal lato della striscia continua",
      "Entrambi i conducenti, con prudenza",
      "Nessuno dei due"
    ],
    correct: 0,
    explanation: "Con la striscia mista, chi è dal lato discontinuo può sorpassare (con prudenza e nel rispetto delle norme), mentre chi è dal lato continuo non può farlo.",
    vocab: [{ italian: "striscia mista", persian: "خط مختلط (ممتد + منقطع)" }],
  },

  {
    id: 105,
    chapter: 1,
    question: "Cos'è una 'rotatoria' (o rotonda)?",
    options: [
      "Un'intersezione con senso di marcia rotatorio intorno a un'isola centrale",
      "Una curva a 180 gradi su strada extraurbana",
      "Un tratto di autostrada con corsie di emergenza",
      "Un'area di parcheggio circolare"
    ],
    correct: 0,
    explanation: "La rotatoria è un'intersezione dove il traffico scorre in senso antiorario intorno a un'isola centrale. Chi circola nella rotatoria ha generalmente la precedenza.",
    vocab: [{ italian: "rotatoria", persian: "دوار / میدان" }],
  },

  {
    id: 106,
    chapter: 1,
    question: "Quali veicoli possono circolare in autostrada?",
    options: [
      "Solo veicoli a motore con velocità massima superiore a un certo limite",
      "Tutti i veicoli, incluse biciclette e ciclomotori",
      "Solo automobili e autobus",
      "Tutti i veicoli tranne le motociclette"
    ],
    correct: 0,
    explanation: "In autostrada possono circolare solo veicoli a motore che rispettano i requisiti minimi di velocità. Biciclette, ciclomotori e veicoli con velocità massima troppo bassa non possono accedere.",
    vocab: [{ italian: "autostrada", persian: "اتوبان" }],
  },

  {
    id: 107,
    chapter: 1,
    question: "Cosa sono le 'strisce pedonali' (zebre)?",
    options: [
      "Attraversamenti pedonali dove i pedoni hanno la precedenza",
      "Zone di parcheggio riservate ai disabili",
      "Segnali che indicano una scuola nelle vicinanze",
      "Percorsi ciclabili protetti"
    ],
    correct: 0,
    explanation: "Le strisce pedonali (dette 'zebre') sono attraversamenti segnalati sulla carreggiata dove i pedoni hanno la precedenza. I conducenti devono fermarsi per farli passare.",
    vocab: [{ italian: "strisce pedonali", persian: "خط‌کشی عابر پیاده" }],
  },

  {
    id: 108,
    chapter: 1,
    question: "Cosa si intende per 'centro abitato' ai sensi del Codice della Strada?",
    options: [
      "Un insieme di edifici con accessi diretti sulla strada, delimitato da appositi segnali",
      "Qualsiasi zona con almeno 1000 abitanti",
      "Solo il centro storico di una città",
      "Qualsiasi zona con semafori"
    ],
    correct: 0,
    explanation: "Il centro abitato è un insieme di edifici con accessi sulla strada, delimitato da cartelli di inizio e fine centro abitato. Qui si applicano regole specifiche (es. limite 50 km/h).",
    vocab: [{ italian: "centro abitato", persian: "مرکز مسکونی / داخل شهر" }],
  },

  {
    id: 109,
    chapter: 1,
    question: "Cosa indica una freccia direzionale dipinta sulla carreggiata?",
    options: [
      "La direzione obbligatoria che i veicoli devono seguire in quella corsia",
      "La direzione consigliata ma non obbligatoria",
      "Il senso unico della strada",
      "La presenza di un semaforo"
    ],
    correct: 0,
    explanation: "Le frecce direzionali dipinte sulla carreggiata indicano la direzione obbligatoria per i veicoli che percorrono quella corsia. Non si possono ignorare.",
    vocab: [{ italian: "frecce direzionali", persian: "پیکان‌های جهت‌دار" }],
  },

  {
    id: 110,
    chapter: 1,
    question: "Cosa si intende per 'corsia'?",
    options: [
      "Una suddivisione longitudinale della carreggiata, delimitata da segnaletica orizzontale",
      "L'intera larghezza della strada percorribile dai veicoli",
      "Un percorso pedonale sul lato della strada",
      "La corsia di emergenza sull'autostrada"
    ],
    correct: 0,
    explanation: "La corsia è una suddivisione longitudinale della carreggiata, di larghezza sufficiente per la circolazione di una fila di veicoli, delimitata dalla segnaletica orizzontale.",
    vocab: [{ italian: "corsia", persian: "خط (corsia) از جاده" }],
  },

  {
    id: 111,
    chapter: 1,
    question: "Qual è la differenza tra 'banchina' e 'marciapiede'?",
    options: [
      "La banchina è la striscia laterale della carreggiata; il marciapiede è lo spazio rialzato per i pedoni",
      "Sono la stessa cosa: entrambi riservati ai pedoni",
      "La banchina è per le biciclette; il marciapiede per i pedoni",
      "Non c'è differenza nel Codice della Strada"
    ],
    correct: 0,
    explanation: "La banchina è la striscia ai lati della carreggiata (non rialzata, parte della strada). Il marciapiede è lo spazio rialzato lateralmente, riservato ai pedoni e separato dalla carreggiata.",
    vocab: [{ italian: "banchina / marciapiede", persian: "نوار جانبی / پیاده‌رو" }],
  },

  {
    id: 112,
    chapter: 1,
    question: "Cosa si intende per 'spartitraffico'?",
    options: [
      "Un elemento fisico longitudinale che separa carreggiate con direzioni opposte",
      "Un segnale temporaneo usato nei cantieri",
      "La corsia di emergenza in autostrada",
      "Un dispositivo per rallentare il traffico"
    ],
    correct: 0,
    explanation: "Lo spartitraffico (o divisorio centrale) è un elemento fisico (guardrail, aiuola, ecc.) che separa le corsie con direzioni opposte. Impedisce il sorpasso e l'inversione.",
    vocab: [{ italian: "spartitraffico", persian: "جداکننده مرکزی جاده" }],
  },

];
