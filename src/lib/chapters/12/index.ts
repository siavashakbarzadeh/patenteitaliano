// ─────────────────────────────────────────────────────────────────────────────
//  CAPITOLO 12 – Distanza di Sicurezza  (Art. 149 C.d.S.)
//  Fonti: pp. 145–149 del libro di testo Patente B
// ─────────────────────────────────────────────────────────────────────────────

import type { Question } from "@/lib/types";

export const chapter12Questions: Question[] = [

  // ── 12.1 Spazio di Arresto ────────────────────────────────────────────────

  {
    id: 1201,
    chapter: 12,
    question: "Lo spazio (distanza) totale di arresto di un veicolo è la somma di:",
    options: [
      "Lo spazio percorso durante il tempo di reazione e lo spazio di frenatura (dall'inizio della frenata all'arresto del veicolo)",
      "Solo lo spazio di frenatura",
      "Solo lo spazio percorso durante il tempo di reazione",
      "Lo spazio percorso in un secondo e la lunghezza del veicolo"
    ],
    correct: 0,
    explanation: "Lo spazio totale di arresto è la somma di due tratti: 1) lo spazio percorso durante il tempo di reazione (dal momento in cui si percepisce il pericolo all'inizio della frenata); 2) lo spazio di frenatura (dall'inizio della frenata all'arresto completo del veicolo)."
  },

  {
    id: 1202,
    chapter: 12,
    question: "Il tempo di reazione medio di un conducente in buone condizioni è di circa:",
    options: [
      "1 secondo",
      "3 secondi",
      "0,1 secondi",
      "5 secondi"
    ],
    correct: 0,
    explanation: "Il tempo di reazione medio di un conducente in buone condizioni psicofisiche è di circa 1 secondo. Durante questo secondo, il veicolo continua a percorrere strada prima che il conducente abbia iniziato a frenare."
  },

  {
    id: 1203,
    chapter: 12,
    question: "A 100 km/h, lo spazio percorso durante il tempo di reazione (circa 1 secondo) è di circa:",
    options: [
      "28 metri",
      "10 metri",
      "50 metri",
      "15 metri"
    ],
    correct: 0,
    explanation: "A 100 km/h, lo spazio percorso durante il tempo di reazione di circa 1 secondo è di circa 28 metri. Formula approssimativa: (velocità/10) × 3 = (100/10) × 3 = 10 × 3 = 30, ridotto di poco ≈ 28 metri."
  },

  {
    id: 1204,
    chapter: 12,
    question: "A 50 km/h, lo spazio percorso durante il tempo di reazione è di circa:",
    options: [
      "14 metri",
      "25 metri",
      "5 metri",
      "50 metri"
    ],
    correct: 0,
    explanation: "A 50 km/h, lo spazio percorso durante il tempo di reazione è di circa 14 metri. Formula: (50/10) × 3 = 5 × 3 = 15, ridotto di poco ≈ 14 metri."
  },

  {
    id: 1205,
    chapter: 12,
    question: "A 130 km/h, lo spazio percorso durante il tempo di reazione è di circa:",
    options: [
      "36 metri",
      "20 metri",
      "60 metri",
      "13 metri"
    ],
    correct: 0,
    explanation: "A 130 km/h, lo spazio percorso durante il tempo di reazione è di circa 36 metri. Formula: (130/10) × 3 = 13 × 3 = 39, ridotto di poco ≈ 36 metri."
  },

  {
    id: 1206,
    chapter: 12,
    question: "Lo spazio percorso durante il tempo di reazione dipende principalmente da:",
    options: [
      "La velocità del veicolo e le condizioni psicofisiche del conducente (prontezza di riflessi)",
      "Solo dalla velocità del veicolo",
      "Solo dalle condizioni della strada",
      "Dal tipo di pneumatici montati sul veicolo"
    ],
    correct: 0,
    explanation: "Lo spazio percorso durante il tempo di reazione dipende dalla velocità del veicolo e dalle condizioni psicofisiche del conducente (prontezza di riflessi). Non dipende invece dalle caratteristiche meccaniche del veicolo come freni o pneumatici."
  },

  // ── Spazio di Frenatura ───────────────────────────────────────────────────

  {
    id: 1207,
    chapter: 12,
    question: "Lo spazio di frenatura minimo si verifica nelle:",
    options: [
      "Migliori condizioni di aderenza tra pneumatici e strada (strada asciutta, pneumatici nuovi)",
      "Condizioni di strada bagnata con pneumatici usurati",
      "Condizioni di ghiaccio con pneumatici nuovi",
      "Condizioni di fango con pneumatici nuovi"
    ],
    correct: 0,
    explanation: "Lo spazio di frenatura minimo si verifica nelle migliori condizioni di aderenza tra pneumatici e strada, ovvero su strada asciutta con pneumatici in buone condizioni. Qualsiasi riduzione dell'aderenza (bagnato, ghiaccio, usura dei pneumatici) aumenta lo spazio di frenatura."
  },

  {
    id: 1208,
    chapter: 12,
    question: "Se si raddoppia la velocità, lo spazio di frenatura diventa:",
    options: [
      "4 volte maggiore (quadruplo)",
      "2 volte maggiore (doppio)",
      "6 volte maggiore",
      "Rimane uguale se si frena progressivamente"
    ],
    correct: 0,
    explanation: "Lo spazio di frenatura dipende dal quadrato della velocità. Se la velocità raddoppia, lo spazio di frenatura diventa 4 volte maggiore (2² = 4). Se la velocità triplica, diventa 9 volte (3² = 9); se quadruplica, 16 volte (4² = 16)."
  },

  {
    id: 1209,
    chapter: 12,
    question: "Se la velocità triplica, lo spazio di frenatura diventa:",
    options: [
      "9 volte maggiore",
      "3 volte maggiore",
      "6 volte maggiore",
      "12 volte maggiore"
    ],
    correct: 0,
    explanation: "Lo spazio di frenatura è proporzionale al quadrato della velocità. Se la velocità triplica (×3), lo spazio di frenatura diventa 3² = 9 volte maggiore."
  },

  {
    id: 1210,
    chapter: 12,
    question: "Il bloccaggio delle ruote durante la frenata (senza ABS):",
    options: [
      "Allunga in ogni caso lo spazio di frenatura — bisogna frenare gradualmente per evitarlo",
      "Riduce lo spazio di frenatura perché le ruote si fermano subito",
      "Non ha effetto sullo spazio di frenatura",
      "È sempre preferibile per fermare il veicolo più rapidamente"
    ],
    correct: 0,
    explanation: "Il bloccaggio delle ruote allunga in ogni caso lo spazio di frenatura rispetto a una frenata con ruote rotolanti. Bisogna frenare gradualmente per evitare il bloccaggio. I sistemi ABS evitano automaticamente il bloccaggio e consentono anche di mantenere la direzionalità del veicolo."
  },

  {
    id: 1211,
    chapter: 12,
    question: "L'aderenza tra pneumatici e asfalto è massima su:",
    options: [
      "Strada asciutta con pneumatici nuovi o quasi nuovi",
      "Strada bagnata con pneumatici nuovi",
      "Strada asciutta con pneumatici usurati",
      "Ghiaccio con pneumatici invernali"
    ],
    correct: 0,
    explanation: "L'aderenza tra pneumatici e asfalto è massima su strada asciutta con pneumatici nuovi o quasi nuovi. L'aderenza si riduce su strada bagnata, e diventa molto ridotta su strade sdrucciolevoli a causa di ghiaccio, neve, fango, sabbia o ghiaietto."
  },

  {
    id: 1212,
    chapter: 12,
    question: "La pendenza della strada influisce sullo spazio di frenatura perché:",
    options: [
      "In discesa la frenatura è più difficile (forza di gravità aiuta il moto verso il basso), in salita è più facile (la gravità aiuta la frenata)",
      "In salita la frenatura è più difficile, in discesa più facile",
      "La pendenza non influisce sullo spazio di frenatura",
      "Influisce solo per i veicoli pesanti"
    ],
    correct: 0,
    explanation: "La pendenza della strada influisce sullo spazio di frenatura: in discesa, la forza di gravità si oppone alla frenata, rendendo la frenatura più difficile e aumentando lo spazio; in salita, la gravità aiuta la frenata, diminuendo lo spazio di frenatura."
  },

  {
    id: 1213,
    chapter: 12,
    question: "Lo spazio di frenatura di un veicolo viene influenzato dalla prontezza di riflessi del conducente?",
    options: [
      "No — la prontezza di riflessi influisce sullo spazio di reazione, non su quello di frenatura; lo spazio di frenatura dipende da velocità, aderenza e caratteristiche del veicolo",
      "Sì, sempre — chi ha riflessi pronti frena meglio",
      "Sì, ma solo in caso di frenata brusca",
      "Sì, perché chi ha riflessi pronti frena più forte"
    ],
    correct: 0,
    explanation: "Lo spazio di frenatura NON viene influenzato dalla prontezza di riflessi del conducente. La prontezza di riflessi influisce solo sullo spazio percorso durante il tempo di reazione. Lo spazio di frenatura dipende invece dalla velocità, dall'aderenza pneumatico-strada e dalle caratteristiche meccaniche dei freni."
  },

  // ── Spazio Totale di Arresto ──────────────────────────────────────────────

  {
    id: 1214,
    chapter: 12,
    question: "Lo spazio totale di arresto di un veicolo AUMENTA se:",
    options: [
      "Aumenta la velocità, la strada è innevata o coperta di fango, o i pneumatici sono usurati",
      "I pneumatici sono nuovi",
      "La strada è in salita",
      "Il conducente ha riflessi pronti"
    ],
    correct: 0,
    explanation: "Lo spazio totale di arresto aumenta se: aumenta la velocità; la strada è innevata o coperta di fango; i pneumatici sono usurati. Diminuisce se migliora la prontezza di riflessi del conducente (riduce solo la parte di reazione)."
  },

  {
    id: 1215,
    chapter: 12,
    question: "Per non costituire pericolo per gli altri utenti della strada, la distanza di visibilità deve essere:",
    options: [
      "Sempre superiore allo spazio totale di arresto",
      "Uguale allo spazio di frenatura",
      "Almeno 50 metri in qualsiasi condizione",
      "Almeno pari alla lunghezza del veicolo moltiplicata per la velocità"
    ],
    correct: 0,
    explanation: "Per non costituire pericolo per gli altri utenti della strada, la distanza di visibilità deve essere sempre superiore allo spazio totale di arresto. Se non si vede abbastanza lontano da riuscire ad arrestarsi, si deve ridurre la velocità."
  },

  // ── 12.2 Distanza di Sicurezza ────────────────────────────────────────────

  {
    id: 1216,
    chapter: 12,
    question: "La distanza di sicurezza tra veicoli (Art. 149 C.d.S.) deve essere tale da:",
    options: [
      "Riuscire a fermare il veicolo in caso di pericolo, evitando collisioni (tamponamenti) con il veicolo che precede",
      "Essere di almeno 10 metri in qualsiasi condizione",
      "Permettere a un terzo veicolo di inserirsi comodamente",
      "Essere uguale alla lunghezza del proprio veicolo"
    ],
    correct: 0,
    explanation: "La distanza di sicurezza deve essere tale da riuscire a fermare il veicolo in caso di pericolo, evitando collisioni (tamponamenti) con il veicolo che precede. Il suo valore minimo deve essere almeno uguale alla distanza percorsa durante il tempo di reazione."
  },

  {
    id: 1217,
    chapter: 12,
    question: "La distanza minima di sicurezza da mantenere a 30 km/h è di circa:",
    options: [
      "9 metri",
      "30 metri",
      "3 metri",
      "50 metri"
    ],
    correct: 0,
    explanation: "La distanza minima di sicurezza a 30 km/h è di circa 9 metri, corrispondente approssimativamente allo spazio percorso durante il tempo di reazione di 1 secondo a quella velocità."
  },

  {
    id: 1218,
    chapter: 12,
    question: "La distanza minima di sicurezza da mantenere a 150 km/h è di circa:",
    options: [
      "42 metri",
      "100 metri",
      "15 metri",
      "150 metri"
    ],
    correct: 0,
    explanation: "La distanza minima di sicurezza a 150 km/h è di circa 42 metri, corrispondente allo spazio percorso durante il tempo di reazione (circa 1 secondo) a tale velocità. Nella pratica la distanza reale dovrebbe essere maggiore per includere anche lo spazio di frenatura."
  },

  {
    id: 1219,
    chapter: 12,
    question: "La distanza di sicurezza deve essere aumentata quando:",
    options: [
      "Il veicolo che precede trasporta un carico sporgente poco stabile, si marcia in colonna con scarsa visibilità, o non si può escludere che un veicolo si arresti all'improvviso",
      "Si viaggia su autostrada asciutta",
      "Si ha l'ABS installato sul proprio veicolo",
      "Il veicolo davanti è più piccolo del proprio"
    ],
    correct: 0,
    explanation: "La distanza di sicurezza va aumentata quando: il veicolo che precede trasporta un carico sporgente poco stabile; si marcia in colonna con scarsa visibilità; non si può escludere che un veicolo davanti si arresti improvvisamente. Questo per evitare tamponamenti a catena."
  },

  {
    id: 1220,
    chapter: 12,
    question: "La distanza di sicurezza tra veicoli dipende da (fattori che la influenzano):",
    options: [
      "Velocità del veicolo, condizioni del traffico e del fondo stradale, stato di efficienza dei freni, aderenza dei pneumatici, entità del carico, prontezza di riflessi del conducente, condizioni atmosferiche",
      "Solo dalla velocità del veicolo",
      "Solo dalle condizioni atmosferiche",
      "Solo dallo stato dei freni"
    ],
    correct: 0,
    explanation: "La distanza di sicurezza è commisurata a molti fattori: la velocità; le condizioni del traffico e del fondo stradale; il tipo e stato di efficienza del veicolo (soprattutto i freni); l'aderenza dei pneumatici; l'entità del carico; la prontezza di riflessi del conducente; le condizioni planoaltimetriche; le condizioni atmosferiche."
  },

  {
    id: 1221,
    chapter: 12,
    question: "Il tipo di alimentazione del motore (benzina, gasolio, GPL) influenza la distanza di sicurezza?",
    options: [
      "No — il tipo di alimentazione non influisce sulla distanza di sicurezza",
      "Sì — i motori diesel hanno frenata motore più efficace",
      "Sì — i motori a GPL aumentano la distanza di sicurezza",
      "Sì — i motori benzina consentono una distanza minore"
    ],
    correct: 0,
    explanation: "Il tipo di alimentazione del motore (benzina, gasolio, GPL) NON influenza la distanza di sicurezza. Non influiscono nemmeno: la potenza o cilindrata del motore; la presenza del servosterzo; il numero di marce del cambio; la lunghezza o larghezza dei veicoli; l'ampiezza della carreggiata."
  },

  {
    id: 1222,
    chapter: 12,
    question: "La presenza del servosterzo (power steering) influenza la distanza di sicurezza?",
    options: [
      "No — il servosterzo non influisce sulla distanza di sicurezza",
      "Sì — il servosterzo migliora la frenata",
      "Sì — il servosterzo riduce la distanza di sicurezza",
      "Sì — ma solo in curva"
    ],
    correct: 0,
    explanation: "La presenza del servosterzo NON influisce sulla distanza di sicurezza. Non influiscono nemmeno: tipo di alimentazione, potenza, cilindrata, numero di marce, lunghezza/larghezza dei veicoli, ampiezza della carreggiata."
  },

  {
    id: 1223,
    chapter: 12,
    question: "La distanza di sicurezza è influenzata dal numero di marce del cambio (quante marce ha il veicolo)?",
    options: [
      "No — il numero di marce non ha alcuna influenza sulla distanza di sicurezza",
      "Sì — più marce significano frenata più efficiente",
      "Sì — i veicoli con più marce hanno distanze inferiori",
      "Sì, ma solo in discesa"
    ],
    correct: 0,
    explanation: "Il numero di marce del cambio non influisce sulla distanza di sicurezza. La distanza di sicurezza non è influenzata nemmeno dal tipo di alimentazione, dalla potenza del motore, dalla cilindrata, dalla presenza del servosterzo o dalle dimensioni dei veicoli."
  },

  {
    id: 1224,
    chapter: 12,
    question: "La distrazione del conducente (ad esempio l'uso del cellulare) influenza la distanza di sicurezza necessaria?",
    options: [
      "Sì — la distrazione aumenta il tempo di reazione e quindi richiede una maggiore distanza di sicurezza; anche una distrazione di pochi secondi può causare incidenti",
      "No — la distanza di sicurezza è indipendente dallo stato del conducente",
      "Solo se si usa il cellulare senza vivavoce",
      "Solo in autostrada"
    ],
    correct: 0,
    explanation: "La distrazione del conducente (es. uso del cellulare, ricerca di comandi radio, ecc.) aumenta il tempo di reazione e quindi aumenta lo spazio percorso prima di iniziare la frenata. Anche una distrazione di pochi secondi può essere causa di incidenti, rendendo necessaria una maggiore distanza di sicurezza."
  },

  // ── Distanze Speciali ─────────────────────────────────────────────────────

  {
    id: 1225,
    chapter: 12,
    question: "Quando sono in azione macchine sgombraneve o spanditrici di sale (ghiaietto), la distanza di sicurezza rispetto a tali macchine deve essere di almeno:",
    options: [
      "20 metri",
      "5 metri",
      "50 metri",
      "100 metri"
    ],
    correct: 0,
    explanation: "Quando sono in azione macchine sgombraneve o spanditrici di sale (ghiaietto), i veicoli che le seguono devono procedere con la massima cautela e mantenere una distanza di sicurezza di almeno 20 metri rispetto a tali macchine."
  },

  {
    id: 1226,
    chapter: 12,
    question: "Fuori dei centri abitati, su strade a una corsia per senso di marcia, la distanza di sicurezza tra veicoli merci pesanti (oltre 3,5 t) con divieto di sorpasso deve essere di almeno:",
    options: [
      "100 metri",
      "20 metri",
      "50 metri",
      "200 metri"
    ],
    correct: 0,
    explanation: "Fuori dei centri abitati, su strade a una corsia per senso di marcia, la distanza di sicurezza fra veicoli merci di oltre 3,5 t a cui sia stato imposto il divieto di sorpasso è pari ad almeno 100 metri."
  },

  {
    id: 1227,
    chapter: 12,
    question: "La distanza di sicurezza è influenzata dalla marcia innestata (quale marcia si usa)?",
    options: [
      "No — la marcia innestata non influisce sulla distanza di sicurezza",
      "Sì — in una marcia bassa la distanza è minore",
      "Sì — in marcia alta la distanza è maggiore",
      "Sì — solo sulle autostrade"
    ],
    correct: 0,
    explanation: "La marcia innestata NON influisce sulla distanza di sicurezza. La distanza di sicurezza dipende dalla velocità del veicolo (non dalla marcia usata), dalle condizioni di guida e dalle caratteristiche del conducente."
  },

  // ── Aderenza e Condizioni Speciali ───────────────────────────────────────

  {
    id: 1228,
    chapter: 12,
    question: "L'aderenza tra pneumatici e strada è notevolmente ridotta su:",
    options: [
      "Strade sdrucciolevoli a causa di ghiaccio, neve, fango, sabbia o ghiaietto, specialmente con pneumatici lisci",
      "Strade asciutte con pneumatici nuovi",
      "Strade bagnate con pneumatici invernali",
      "Strade in salita con fondo asciutto"
    ],
    correct: 0,
    explanation: "L'aderenza è notevolmente ridotta su strade sdrucciolevoli a causa di ghiaccio, neve, fango, sabbia o ghiaietto, specialmente quando si usano pneumatici lisci. In queste condizioni, lo spazio di frenatura aumenta drammaticamente."
  },

  {
    id: 1229,
    chapter: 12,
    question: "Per mantenere lo spazio di frenatura minimo, il conducente deve:",
    options: [
      "Evitare di sovraccaricare il veicolo oltre il limite di massa consentita e curare la manutenzione dei pneumatici (compreso lo spessore del battistrada)",
      "Solo usare sempre l'ABS",
      "Frenare sempre il più rapidamente possibile",
      "Usare solo il freno motore"
    ],
    correct: 0,
    explanation: "Per mantenere lo spazio di frenatura minimo, il conducente deve: evitare di sovraccaricare il veicolo oltre il limite di massa consentita; curare la manutenzione dei pneumatici, verificando lo spessore degli intagli del battistrada. Deve poi frenare gradualmente senza bloccare le ruote."
  },

  {
    id: 1230,
    chapter: 12,
    question: "A parità di aderenza tra pneumatici e strada, lo spazio di frenatura aumenta se la strada è in discesa e diminuisce se è in salita. Questo perché:",
    options: [
      "In discesa la forza di gravità si oppone alla frenata (aiuta il moto verso il basso), mentre in salita la gravità aiuta la frenata (si oppone al moto in avanti)",
      "In discesa i freni si surriscaldano",
      "In salita i pneumatici aderiscono meglio",
      "La pendenza non ha effetto — è solo un fattore psicologico"
    ],
    correct: 0,
    explanation: "In discesa, la forza di gravità si oppone alla frenata perché tende a mantenere il veicolo in movimento verso il basso, aumentando lo spazio necessario per fermarsi. In salita invece la gravità aiuta la frenata opponendosi al moto del veicolo, riducendo lo spazio di frenatura."
  },

];
