// ─────────────────────────────────────────────────────────────────────────────
//  CAPITOLO 13 – Norme sulla Circolazione dei Veicoli  (Art. 143 C.d.S.)
//  Fonti: pp. 150–154 del libro di testo Patente B
// ─────────────────────────────────────────────────────────────────────────────

import type { Question } from "@/lib/types";

export const chapter13Questions: Question[] = [

  // ── 13.1 Comportamenti per il Corretto Uso della Strada ──────────────────

  {
    id: 1301,
    chapter: 13,
    question: "Per un corretto uso della strada, il Codice della Strada richiede che i veicoli procedano a:",
    options: [
      "Una velocità adeguata alle condizioni della strada e del traffico",
      "La velocità massima consentita in ogni caso",
      "La velocità minima per non ostacolare il traffico",
      "Una velocità fissa stabilita dal Codice indipendentemente dalle condizioni"
    ],
    correct: 0,
    explanation: "Per un corretto uso della strada, i veicoli devono procedere ad una velocità adeguata alle condizioni della strada e del traffico — tenendo conto di visibilità, stato del manto stradale, traffico presente e condizioni atmosferiche."
  },

  {
    id: 1302,
    chapter: 13,
    question: "Quando sul semaforo compare la luce gialla fissa e il conducente non è in grado di fermarsi prima della linea di arresto, deve:",
    options: [
      "Affrettarsi a sgombrare l'incrocio (accelerare leggermente per attraversarlo prima del rosso)",
      "Fermarsi comunque anche oltre la linea di arresto",
      "Proseguire normalmente senza cambiare velocità",
      "Invertire la marcia"
    ],
    correct: 0,
    explanation: "Quando compare la luce gialla fissa e il conducente non è in grado di fermarsi in sicurezza prima della linea di arresto, deve affrettarsi a sgombrare l'incrocio. Fermarsi bruscamente quando non si riesce, sarebbe più pericoloso."
  },

  {
    id: 1303,
    chapter: 13,
    question: "Nei centri abitati nelle ore notturne, i conducenti devono usare:",
    options: [
      "I proiettori anabbaglianti (luci di prossimità)",
      "I proiettori abbaglianti",
      "Solo le luci di posizione",
      "Nessuna luce, se la strada è ben illuminata"
    ],
    correct: 0,
    explanation: "Nei centri abitati nelle ore notturne si devono usare i proiettori anabbaglianti (fari anabbaglianti). L'uso dei proiettori abbaglianti nei centri abitati è vietato perché potrebbe abbagliare altri utenti della strada, inclusi i pedoni."
  },

  {
    id: 1304,
    chapter: 13,
    question: "Prima di azionare l'indicatore di direzione per cambiare corsia, il conducente deve:",
    options: [
      "Guardare negli specchi retrovisori per verificare che non ci siano veicoli nel settore in cui si vuole spostarsi",
      "Solo azionare la freccia senza controllare",
      "Accelerare e poi guardare",
      "Suonare il clacson per avvertire"
    ],
    correct: 0,
    explanation: "Prima di azionare l'indicatore di direzione per cambiare corsia, il conducente deve guardarsi negli specchi retrovisori (e eventualmente controllare il punto cieco) per verificare che la manovra possa essere eseguita in sicurezza."
  },

  {
    id: 1305,
    chapter: 13,
    question: "In caso di traffico intenso, il conducente deve regolare la velocità in modo da:",
    options: [
      "Uniformarsi il più possibile a quella della corrente di traffico che scorre lungo la propria corsia",
      "Procedere sempre alla velocità massima consentita",
      "Procedere sempre alla velocità minima",
      "Accelerare e frenare continuamente per mantenere le distanze"
    ],
    correct: 0,
    explanation: "In caso di traffico intenso, il conducente deve regolare la velocità in modo da uniformarsi il più possibile a quella della corrente di traffico che scorre lungo la corsia occupata, mantenendo sempre la prescrittà distanza di sicurezza."
  },

  {
    id: 1306,
    chapter: 13,
    question: "In caso di traffico intenso, è vietato suonare il clacson per:",
    options: [
      "Invitare i veicoli che precedono ad accelerare l'andatura",
      "Segnalare la propria presenza in curva fuori dai centri abitati",
      "Avvertire di un pericolo imminente",
      "In caso di scarsa visibilità durante la notte"
    ],
    correct: 0,
    explanation: "In caso di traffico intenso, il conducente deve evitare di suonare il clacson per invitare i veicoli che lo precedono ad accelerare. Questo comportamento è fonte di stress e potrebbe portare a manovre pericolose."
  },

  {
    id: 1307,
    chapter: 13,
    question: "In caso di traffico intenso, è vietato cambiare ripetutamente corsia di marcia:",
    options: [
      "Al solo fine di impegnare sempre quella più libera (il 'saltare' da una corsia all'altra per guadagnare posizione)",
      "Salvo per il sorpasso regolare",
      "È sempre vietato cambiare corsia in qualsiasi condizione",
      "Solo in autostrada"
    ],
    correct: 0,
    explanation: "In caso di traffico intenso è vietato cambiare ripetutamente corsia con il solo fine di impegnare sempre quella più libera (comportamento noto come 'saltare file'). Questo crea pericolo e non è di aiuto al deflusso del traffico."
  },

  {
    id: 1308,
    chapter: 13,
    question: "In caso di traffico intenso, le corsie riservate ai veicoli in servizio pubblico (autobus, tram, ecc.) possono essere occupate?",
    options: [
      "No, è vietato occuparle anche se libere",
      "Sì, se sono temporaneamente libere",
      "Sì, se si tratta di un'emergenza",
      "Sì, solo per il tempo strettamente necessario al sorpasso"
    ],
    correct: 0,
    explanation: "In caso di traffico intenso (e in generale), è vietato occupare le corsie riservate alla marcia dei veicoli in servizio pubblico (autobus, tram, ecc.), anche se momentaneamente libere."
  },

  // ── Veicoli ad Elevate Prestazioni ───────────────────────────────────────

  {
    id: 1309,
    chapter: 13,
    question: "Chi guida un veicolo ad elevate prestazioni (auto sportiva, auto di grossa cilindrata) deve comunque:",
    options: [
      "Rispettare i limiti di velocità previsti e non superarli, indipendentemente dalle prestazioni del veicolo",
      "Può superare i limiti perché il veicolo è più sicuro",
      "Può procedere più velocemente solo in autostrada",
      "Può superare i limiti solo su strade deserte"
    ],
    correct: 0,
    explanation: "Chi guida un veicolo ad elevate prestazioni non deve, comunque, superare i limiti di velocità previsti. La guida di veicoli ad elevate prestazioni comporta rischi maggiori verso gli altri utenti — non minori."
  },

  // ── 13.2 Posizione dei Veicoli sulla Carreggiata ─────────────────────────

  {
    id: 1310,
    chapter: 13,
    question: "In base all'Art. 143 C.d.S., i veicoli a motore devono di norma circolare:",
    options: [
      "Sulla parte destra della carreggiata e in prossimità del margine destro, anche se la strada è libera",
      "Al centro della carreggiata per una migliore visibilità",
      "Sul lato sinistro quando la strada è libera",
      "Liberamente su qualsiasi parte della carreggiata"
    ],
    correct: 0,
    explanation: "I veicoli a motore devono di norma circolare sulla parte destra della carreggiata e in prossimità del margine destro, anche se la strada è libera (Art. 143 C.d.S.). Questo vale anche per i veicoli senza motore e gli animali."
  },

  {
    id: 1311,
    chapter: 13,
    question: "Su strade a due corsie a doppio senso di circolazione (una carreggiata), i veicoli devono tenersi il più vicino possibile al margine destro quando:",
    options: [
      "Incrociano altri veicoli, percorrono una curva, transitano su un dosso, sono sorpassati",
      "Solo quando superano i 80 km/h",
      "Solo di notte",
      "Solo quando piove"
    ],
    correct: 0,
    explanation: "Su strade a due corsie a doppio senso, i veicoli devono tenersi il più vicino possibile al margine destro nei seguenti casi: quando incrociano altri veicoli; quando percorrono una curva; quando percorrono il tratto in salita o in prossimità di dossi; quando sono sorpassati."
  },

  {
    id: 1312,
    chapter: 13,
    question: "Su strade o carreggiate a due corsie e a doppio senso di marcia, i veicoli a motore devono circolare:",
    options: [
      "Nella corsia di destra, potendo impegnare quella di sinistra solo per il sorpasso",
      "In qualsiasi corsia liberamente",
      "Sempre nella corsia di sinistra",
      "Alternando le corsie ogni 500 metri"
    ],
    correct: 0,
    explanation: "Su strade o carreggiate a due corsie e a doppio senso di marcia, i veicoli a motore devono circolare nella corsia di destra, ma possono impegnare quella di sinistra solo per il sorpasso."
  },

  {
    id: 1313,
    chapter: 13,
    question: "Su strade a tre corsie e a doppio senso di marcia (senza spartitraffico), la corsia centrale si deve impegnare:",
    options: [
      "Solo per il sorpasso",
      "Liberamente se è libera",
      "Per procedere in entrambe le direzioni regolarmente",
      "Solo per i veicoli di grandi dimensioni"
    ],
    correct: 0,
    explanation: "Su strade a tre corsie a doppio senso di marcia, si deve impegnare la corsia centrale solo per il sorpasso. La corsia centrale non è una corsia di marcia normale ma è riservata esclusivamente all'esecuzione dei sorpassi."
  },

  {
    id: 1314,
    chapter: 13,
    question: "Quando una carreggiata è a due o più corsie per ogni senso di marcia (es. autostrada), quale corsia si deve percorrere?",
    options: [
      "La corsia libera più a destra — le corsie di sinistra della propria semicarreggiata sono riservate al sorpasso",
      "La corsia di sinistra per avere più spazio",
      "Qualsiasi corsia libera senza preferenza",
      "La corsia centrale per evitare i veicoli laterali"
    ],
    correct: 0,
    explanation: "Quando una carreggiata è a due o più corsie per ogni senso di marcia, si deve percorrere la corsia libera più a destra. Le corsie di sinistra della propria semicarreggiata sono riservate al sorpasso, non alla circolazione normale."
  },

  {
    id: 1315,
    chapter: 13,
    question: "Quando una strada è divisa in due carreggiate separate (con spartitraffico fisico o segnaletica), i veicoli devono:",
    options: [
      "Di norma circolare sulla carreggiata di destra rispetto al senso di marcia",
      "Circolare sulla carreggiata di sinistra",
      "Scegliere liberamente la carreggiata",
      "Usare sempre quella più libera"
    ],
    correct: 0,
    explanation: "Quando una strada è divisa in due carreggiate separate (con spartitraffico o segnaletica apposita), i veicoli devono di norma circolare sulla carreggiata di destra rispetto al senso di marcia."
  },

  {
    id: 1316,
    chapter: 13,
    question: "Su una strada divisa in tre carreggiate separate, dove la carreggiata centrale è a doppio senso e le due laterali sono a senso unico, i veicoli devono:",
    options: [
      "Di norma circolare sulla carreggiata di destra o su quella centrale (salvo diversa segnalazione)",
      "Circolare solo sulla carreggiata centrale",
      "Circolare solo sulla carreggiata di sinistra",
      "Usare qualsiasi delle tre carreggiate"
    ],
    correct: 0,
    explanation: "Su una strada a tre carreggiate separate (la centrale a doppio senso, le laterali a senso unico), i veicoli devono di norma circolare sulla carreggiata di destra o su quella centrale, salvo diversa segnalazione."
  },

  // ── Luci Abbaglianti ──────────────────────────────────────────────────────

  {
    id: 1317,
    chapter: 13,
    question: "Di notte, su strada extraurbana, se si incontra un veicolo con i fari abbaglianti accesi, cosa si deve fare?",
    options: [
      "Distogliere lo sguardo dal fascio luminoso, rallentare adeguatamente, non accendere i propri abbaglianti ed evitare brusche manovre",
      "Accendere anche i propri fari abbaglianti per 'rispondere'",
      "Fermarsi immediatamente sul ciglio della strada",
      "Accelerare per uscire velocemente dalla zona di abbagliamento"
    ],
    correct: 0,
    explanation: "Se di notte si incontra un veicolo con i fari abbaglianti accesi, occorre: distogliere lo sguardo dal fascio luminoso (senza coprirsi gli occhi con le mani); rallentare adeguatamente tenendo conto della ridotta visibilità; non accendere i propri abbaglianti; evitare brusche manovre e cambi di corsia."
  },

  {
    id: 1318,
    chapter: 13,
    question: "Quando si viene abbagliati di notte da un veicolo proveniente in senso contrario, è corretto coprirsi gli occhi con le mani?",
    options: [
      "No, non bisogna coprirsi gli occhi con le mani — si deve distogliere solo lo sguardo dal fascio luminoso",
      "Sì, è il modo migliore per proteggersi dall'abbagliamento",
      "Sì, solo per un secondo",
      "Sì, se si è fermi"
    ],
    correct: 0,
    explanation: "Quando si viene abbagliati, NON bisogna coprirsi gli occhi con le mani (perché si perde il controllo del veicolo). Si deve invece distogliere lo sguardo dal fascio luminoso, guardando verso il margine destro della strada, e rallentare."
  },

  {
    id: 1319,
    chapter: 13,
    question: "Di fronte ad un veicolo con fari abbaglianti accesi, il conducente risponde accendendo anche i propri abbaglianti. Questo comportamento è:",
    options: [
      "Sbagliato e pericoloso — non si devono accendere i propri abbaglianti ma usare gli anabbaglianti",
      "Corretto, è un segnale di avvertimento",
      "Corretto, per vedere meglio",
      "Corretto solo se si è in autostrada"
    ],
    correct: 0,
    explanation: "Non si devono accendere i propri abbaglianti in risposta ad un veicolo che abbaglia. Bisogna invece usare le luci anabbaglianti. Accendere gli abbaglianti in risposta causerebbe l'abbagliamento dell'altro conducente, creando un pericolo ancora maggiore."
  },

  // ── Circolazione su Strade con Binari del Tram ───────────────────────────

  {
    id: 1320,
    chapter: 13,
    question: "Sulle strade con binari tranviari a raso, i veicoli possono transitare purché:",
    options: [
      "Non ostacolino o rallentino la marcia del tram (salvo diversa segnalazione)",
      "Solo se hanno il permesso speciale",
      "Sempre liberamente senza restrizioni",
      "Solo se c'è spazio sufficiente e non ci sono pedoni"
    ],
    correct: 0,
    explanation: "Nelle strade con binari tranviari a raso, i veicoli possono transitare (salvo diversa segnalazione) purché non ostacolino o rallentino la marcia del tram. Sui binari stessi sono vietate la fermata e la sosta."
  },

  {
    id: 1321,
    chapter: 13,
    question: "Sui binari del tram a raso, la fermata e la sosta sono:",
    options: [
      "Vietate",
      "Consentite se il tram non è in vista",
      "Consentite per meno di 5 minuti",
      "Consentite purché si lasci spazio sufficiente al tram"
    ],
    correct: 0,
    explanation: "Sui binari tranviari a raso sono vietate la fermata e la sosta. I veicoli possono transitarvi ma non possono fermarsi o sostare sui binari del tram."
  },

  {
    id: 1322,
    chapter: 13,
    question: "Se la fermata del tram è dotata di apposita isola salvagente, i veicoli possono transitare:",
    options: [
      "Indifferentemente a destra o a sinistra del salvagente, purché rimangano entro la propria semicarreggiata e non intralcino i viaggiatori",
      "Solo a destra del salvagente",
      "Solo a sinistra del salvagente",
      "Non possono transitare in nessun caso"
    ],
    correct: 0,
    explanation: "Se la fermata del tram è dotata di isola salvagente, i veicoli possono transitare indifferentemente a destra o a sinistra del salvagente stesso, purché rimangano entro la semicarreggiata relativa al loro senso di circolazione e non intralcino il movimento dei viaggiatori."
  },

  {
    id: 1323,
    chapter: 13,
    question: "Quando all'incrocio si viene da una strada secondaria, il conducente deve:",
    options: [
      "Dare la precedenza a tutti i veicoli che provengono da destra (salvo diversa segnalazione) ed evitare di costituire pericolo per gli altri utenti",
      "Procedere normalmente senza preoccuparsi degli altri",
      "Ha la precedenza su tutti i veicoli",
      "Può procedere solo se la strada principale è libera"
    ],
    correct: 0,
    explanation: "Nei crocevia (incroci), il conducente deve dare la precedenza a tutti i veicoli che provengono da destra (salvo diversa segnalazione), deve evitare di costituire pericolo per gli altri utenti della strada e deve tenersi il più vicino possibile al margine destro."
  },

  // ── Circolazione per File Parallele ──────────────────────────────────────

  {
    id: 1324,
    chapter: 13,
    question: "Nella circolazione per file parallele (colonne in traffico intenso), chi è escluso dalla possibilità di non mantenersi in fila?",
    options: [
      "I veicoli non a motore (biciclette) e i ciclomotori — ai veicoli a motore normali è invece consentito",
      "I veicoli a motore di grossa cilindrata",
      "I veicoli commerciali e i furgoni",
      "Tutti i veicoli devono mantenere la fila senza eccezioni"
    ],
    correct: 0,
    explanation: "Nella circolazione per file parallele è consentito ai conducenti dei veicoli (esclusi quelli non a motore come le biciclette e i ciclomotori) di non mantenersi precisamente in fila. I veicoli non a motore e i ciclomotori devono invece mantenersi in fila."
  },

  {
    id: 1325,
    chapter: 13,
    question: "La guida di veicoli ad elevate prestazioni comporta rischi maggiori perché:",
    options: [
      "Aumenta il raggio di potenziale 'offesa' verso gli altri utenti e il conducente potrebbe non avere le capacità tecniche o psicofisiche adeguate per gestire tali prestazioni",
      "I veicoli sportivi consumano più carburante",
      "I veicoli sportivi hanno freni meno efficaci",
      "I veicoli ad elevate prestazioni attraggono più attenzione"
    ],
    correct: 0,
    explanation: "La guida di veicoli ad elevate prestazioni comporta rischi maggiori perché aumenta il raggio di potenziale 'offesa' verso gli altri utenti. Inoltre, il conducente potrebbe non avere sufficienti capacità tecniche e/o psicofisiche adeguate alla guida di veicoli così potenti."
  },

  {
    id: 1326,
    chapter: 13,
    question: "I veicoli senza motore (biciclette) e gli animali devono essere tenuti:",
    options: [
      "Il più possibile vicino al margine destro della carreggiata",
      "Al centro della carreggiata per essere più visibili",
      "Sul lato sinistro per avere maggiore sicurezza",
      "Possono circolare liberamente su qualsiasi parte"
    ],
    correct: 0,
    explanation: "I veicoli senza motore e gli animali devono essere tenuti il più possibile vicino al margine destro della carreggiata. Questa regola garantisce la sicurezza degli utenti più vulnerabili e permette ai veicoli a motore di sorpassarli in sicurezza."
  },

  {
    id: 1327,
    chapter: 13,
    question: "In caso di traffico intenso, il conducente deve mantenere:",
    options: [
      "Sempre la prescrittà distanza di sicurezza dal veicolo che lo precede, non avvicinandosi per 'spingere' i veicoli davanti",
      "Una distanza minima di 50 metri in qualsiasi condizione",
      "Una distanza variabile in base alla propria velocità senza limiti",
      "La distanza di sicurezza vale solo in autostrada"
    ],
    correct: 0,
    explanation: "In caso di traffico intenso, il conducente deve mantenere sempre la prescrittà distanza di sicurezza dal veicolo che lo precede. Anche nel traffico congestionato, ridurre la distanza di sicurezza per 'spingere' il veicolo davanti è pericoloso e vietato."
  },

  {
    id: 1328,
    chapter: 13,
    question: "Quale corsia si deve percorrere nelle autostrade a tre corsie per senso di marcia?",
    options: [
      "Quella libera più a destra — la corsia di mezzo e quella di sinistra sono riservate al sorpasso",
      "Quella centrale per stare lontano dai margini",
      "Quella di sinistra per procedere più velocemente",
      "Qualsiasi delle tre corrisponde a velocità diversa"
    ],
    correct: 0,
    explanation: "Anche nelle autostrade a tre corsie per senso di marcia, si deve percorrere la corsia libera più a destra. Le corsie di mezzo e di sinistra sono riservate al sorpasso. Procedere stabilmente nella corsia di sinistra o di mezzo è vietato (salvo in caso di traffico congestionato)."
  },

  {
    id: 1329,
    chapter: 13,
    question: "Sulle strade a senso unico, rispetto alla posizione in carreggiata, i veicoli:",
    options: [
      "Devono comunque tenersi il più vicino possibile al margine destro di norma, pur potendo usare le altre corsie disponibili",
      "Possono circolare in qualsiasi posizione liberamente",
      "Devono sempre stare al centro",
      "Devono stare al margine sinistro"
    ],
    correct: 0,
    explanation: "Anche sulle strade a senso unico, di norma i veicoli devono tenersi il più possibile vicino al margine destro della carreggiata, salvo diversa segnalazione (es. più corsie disponibili, in cui si usa quella più a destra libera)."
  },

  {
    id: 1330,
    chapter: 13,
    question: "Il conducente che percorre una curva su una strada a due corsie a doppio senso deve:",
    options: [
      "Tenersi il più vicino possibile al margine destro, riducendo la velocità adeguatamente",
      "Spostarsi verso il centro della carreggiata per migliorare la visibilità",
      "Mantenere la velocità costante per non perdere stabilità",
      "Posizionarsi a sinistra della propria corsia per vedere meglio la curva"
    ],
    correct: 0,
    explanation: "Quando si percorre una curva su una strada a due corsie a doppio senso, il conducente deve mantenersi il più vicino possibile al margine destro della carreggiata, riducendo appropriatamente la velocità. Spostarsi verso il centro sarebbe pericoloso per i veicoli in senso contrario."
  },


  // ── 13.3 Cambiamento di Direzione di Marcia ──────────────────────────────

  {
    id: 1331,
    chapter: 13,
    question: "Prima di effettuare una manovra di cambiamento di direzione (svolta, cambio corsia, retromarcia), il conducente deve PRIMA:",
    options: [
      "Assicurarsi di poter effettuare la manovra senza creare pericolo o intralcio, e presegnalare per tempo azionando gli indicatori di direzione",
      "Suonare il clacson e procedere",
      "Guardare solo nello specchio retrovisore interno",
      "Fermarsi completamente prima di ogni manovra"
    ],
    correct: 0,
    explanation: "Prima di effettuare qualsiasi manovra di cambiamento di direzione, il conducente deve: assicurarsi di poter effettuare la manovra senza creare pericolo o intralcio; presegnalare in anticipo azionando gli indicatori di direzione, che devono restare in funzione per tutta la durata della manovra."
  },

  {
    id: 1332,
    chapter: 13,
    question: "Per cambiare corsia, la striscia che divide le corsie deve essere:",
    options: [
      "Tratteggiata (discontinua) — e la corsia che si vuole occupare deve essere libera davanti e dietro per un tratto sufficiente",
      "Continua (striscia piena) — in qualsiasi caso",
      "Di qualsiasi tipo, basta segnalare con la freccia",
      "Non conta il tipo di striscia, solo la visibilità"
    ],
    correct: 0,
    explanation: "Per cambiare corsia, la striscia che divide le corsie deve essere tratteggiata (discontinua). Oltre a ciò, la corsia che si vuole occupare deve essere libera davanti e dietro per un tratto sufficiente."
  },

  {
    id: 1333,
    chapter: 13,
    question: "Quando si immette nel flusso della circolazione, il conducente deve dare la precedenza:",
    options: [
      "A tutti gli altri utenti della strada e ai veicoli in transito (anche alle biciclette), accertarsi che la strada sia libera e guardare negli specchi retrovisori",
      "Solo ai veicoli che vengono da destra",
      "Solo ai veicoli più grandi",
      "Non è necessario dare la precedenza se la strada sembra libera"
    ],
    correct: 0,
    explanation: "Quando ci si immette nel flusso della circolazione, si deve dare la precedenza a tutti gli altri utenti della strada e ai veicoli in transito (incluse le biciclette), accertarsi che la strada sia libera, guardare negli specchi retrovisori. Il mancato rispetto comporta anche la perdita di 2 punti dalla patente."
  },

  {
    id: 1334,
    chapter: 13,
    question: "Nei bracci di entrata degli incroci (corsie di preselezione), il conducente deve:",
    options: [
      "Disporsi tempestivamente sulla corsia destinata alle manovre che intende effettuare, mantenendo la direzione scelta — vietate modifiche improvvise di direzione (zig-zag) all'interno dell'intersezione",
      "Posizionarsi sempre al centro delle corsie",
      "Scegliere la corsia all'ultimo momento per maggiore flessibilità",
      "Può cambiare la direzione di marcia liberamente anche dentro l'incrocio"
    ],
    correct: 0,
    explanation: "Nei bracci di entrata degli incroci, il conducente deve disporsi tempestivamente sulle corsie destinate alle manovre che intende effettuare. Una volta effettuata la scelta, è vietato fare modifiche improvvise di direzione all'interno dell'intersezione (zig-zag)."
  },

  // ── Svolta (Turning) ────────────────────────────────────────────────────

  {
    id: 1335,
    chapter: 13,
    question: "Per effettuare la svolta a destra, il conducente deve:",
    options: [
      "Tenersi il più vicino possibile al margine destro, segnalare in anticipo, moderare la velocità, lasciare il centro dell'incrocio alla propria sinistra e dare la precedenza ai pedoni sulle strisce",
      "Spostarsi al centro della carreggiata prima di svoltare a destra",
      "Svoltare rapidamente senza ridurre la velocità",
      "Dare la precedenza solo ai veicoli da sinistra"
    ],
    correct: 0,
    explanation: "Per la svolta a destra occorre: tenersi il più vicino possibile al margine destro; segnalare in anticipo con l'indicatore di direzione; moderare la velocità man mano che ci si avvicina al punto di svolta; lasciare alla propria sinistra il centro dell'incrocio; dare la precedenza ai pedoni che attraversano."
  },

  {
    id: 1336,
    chapter: 13,
    question: "Per effettuare la svolta a sinistra su una strada a doppio senso di circolazione, il conducente deve avvicinarsi:",
    options: [
      "All'asse (centro) della carreggiata, senza però spostarsi a sinistra della linea continua di mezzeria, poi effettuare la svolta in prossimità del centro dell'incrocio alla propria sinistra, evitando di imboccare contromano",
      "Al margine destro della carreggiata prima di svoltare a sinistra",
      "Al centro della carreggiata solo dopo aver già svoltato",
      "Può svoltare a sinistra senza avvicinarsi all'asse"
    ],
    correct: 0,
    explanation: "Per la svolta a sinistra su strada a doppio senso, ci si deve avvicinare all'asse della carreggiata (senza però attraversare la striscia continua di mezzeria), effettuare la svolta in prossimità del centro dell'incrocio, evitare di imboccare contromano e rispettare la precedenza ai veicoli da destra."
  },

  // ── Inversione di Marcia ──────────────────────────────────────────────────

  {
    id: 1337,
    chapter: 13,
    question: "L'inversione di marcia (U-turn) su una strada a doppio senso è vietata: in vicinanza di curve, dossi e incroci, nelle gallerie, in caso di scarsa visibilità e:",
    options: [
      "Dove la linea di mezzeria è una striscia continua (non tratteggiata)",
      "Solo in autostrada",
      "Solo nelle strade urbane con semafori",
      "Dove c'è traffico intenso ma la strada è dritta"
    ],
    correct: 0,
    explanation: "L'inversione di marcia è vietata: in vicinanza di curve, dossi e incroci; nelle gallerie; in tutti i casi di scarsa visibilità; dove la linea di mezzeria sia una striscia continua. Ove possibile, l'inversione va effettuata con una sola manovra."
  },

  {
    id: 1338,
    chapter: 13,
    question: "Chi intende effettuare un'inversione di marcia su una strada a doppio senso deve:",
    options: [
      "Non creare pericolo o intralcio, usare gli indicatori di direzione per tutta la durata della manovra, e rinunciare se il traffico è intenso o vi sia scarsa visibilità",
      "Procedere senza segnalare se la strada sembra libera",
      "Fermarsi al centro della carreggiata e aspettare che la strada sia libera",
      "Effettuarla solo di notte quando c'è meno traffico"
    ],
    correct: 0,
    explanation: "Chi intende effettuare un'inversione di marcia su strada a doppio senso non deve creare pericolo o intralcio; deve azionare l'indicatore di direzione per tutta la durata della manovra; deve rinunciare alla manovra qualora il traffico sia intenso e continuo o vi sia scarsa visibilità."
  },

  // ── 13.4 Convogli Militari ───────────────────────────────────────────────

  {
    id: 1339,
    chapter: 13,
    question: "È vietato interrompere convogli militari, cortei, processioni, colonne di scolari. Se ci si trova davanti a uno di essi, occorre:",
    options: [
      "Fermarsi sulla destra e attendere che la carreggiata sia libera, evitando di suonare o lampeggiare con i fari",
      "Procedere lentamente attraverso il corteo",
      "Suonare il clacson per farsi largo",
      "Fare inversione di marcia per evitare il corteo"
    ],
    correct: 0,
    explanation: "È vietato interrompere convogli militari, cortei, processioni e colonne di scolari. Se ci si trova davanti a tale situazione, occorre fermarsi sulla destra e attendere che la carreggiata si liberi. È vietato suonare o lampeggiare con i fari. Prima di passare, occorre accertarsi che il corteo sia transitato completamente."
  },

  // ── 13.5 Comportamento agli Incroci ─────────────────────────────────────

  {
    id: 1340,
    chapter: 13,
    question: "In prossimità degli incroci, quali comportamenti sono vietati?",
    options: [
      "Procedere a zig-zag, cambiare improvvisamente la direzione di marcia, effettuare l'inversione di marcia, sostare o fermarsi, sorpassare (se si deve occupare la corsia opposta)",
      "Solo il sorpasso è vietato",
      "Solo la sosta è vietata",
      "Solo l'inversione di marcia è vietata"
    ],
    correct: 0,
    explanation: "In corrispondenza degli incroci non è consentito: procedere a zig-zag; cambiare improvvisamente la direzione di marcia; effettuare l'inversione di marcia; sostare o fermarsi; sorpassare (anche una bicicletta) se si deve occupare la corsia opposta di marcia."
  },

  {
    id: 1341,
    chapter: 13,
    question: "All'avvicinarsi di un incrocio, il conducente deve impegnarlo solo se:",
    options: [
      "Ha la possibilità di proseguire e liberare completamente l'incrocio — non deve bloccare il centro dell'incrocio ostacolando gli sbocchi delle strade laterali",
      "La strada è libera almeno per 50 metri",
      "Il semaforo è verde da almeno 3 secondi",
      "Non ci sono pedoni nelle vicinanze"
    ],
    correct: 0,
    explanation: "Il conducente deve impegnare l'incrocio solo se ha la possibilità di proseguire e di liberarlo completamente. Non deve bloccare il centro dell'incrocio ostacolando gli sbocchi delle strade laterali in caso di arresto di lunghe file di veicoli."
  },

  // ── Rotatorie ────────────────────────────────────────────────────────────

  {
    id: 1342,
    chapter: 13,
    question: "In un incrocio con circolazione rotatoria (rotonda) segnalato con 'DARE PRECEDENZA', chi ha la precedenza?",
    options: [
      "I veicoli già circolanti nell'anello (i veicoli in entrata devono cedere la precedenza a quelli già presenti nella rotonda)",
      "I veicoli in entrata, perché vengono da destra",
      "Chi entra per primo nella rotonda ha la precedenza",
      "Non ci sono regole di precedenza specifiche nelle rotonde"
    ],
    correct: 0,
    explanation: "Nelle rotonde segnalate con 'DARE PRECEDENZA', i veicoli in entrata devono cedere la precedenza a quelli già circolanti nell'anello. È cambiamento rispetto alla vecchia regola della destra — oggi la maggioranza delle rotonde italiane ha questo segnale."
  },

  {
    id: 1343,
    chapter: 13,
    question: "Prima di immettersi in una rotonda, il conducente deve:",
    options: [
      "Moderare la velocità e usare la massima prudenza, controllando nel contempo il comportamento degli altri utenti",
      "Accelerare per aggiungersi rapidamente al flusso rotatorio",
      "Fermarsi sempre prima di entrare anche se non c'è il segnale di STOP",
      "Suonare il clacson per avvertire i veicoli già nella rotonda"
    ],
    correct: 0,
    explanation: "Prima di immettersi in una rotonda, è opportuno moderare la velocità e usare la massima prudenza, controllando nel contempo il comportamento degli altri utenti. All'interno dell'anello si applicano le stesse regole delle strade a due corsie."
  },

  {
    id: 1344,
    chapter: 13,
    question: "In una rotonda a due corsie, i veicoli circolanti all'interno dell'anello che non intendono occupare la corsia interna:",
    options: [
      "Non devono entrare nella corsia interna; devono sorpassare a sinistra; non devono fare retromarcia nella rotonda",
      "Possono usare liberamente qualsiasi corsia",
      "Devono sempre usare la corsia interna",
      "Devono fermarsi alla corsia interna e aspettare"
    ],
    correct: 0,
    explanation: "In una rotonda a due corsie: i veicoli circolanti all'interno dell'anello devono sorpassare a sinistra; quelli che non intendono occupare la corsia interna non devono entrarvi; i veicoli circolanti nell'anello non devono effettuare manovre di retromarcia."
  },

  // ── 13.6 Norme sulla Precedenza (Art. 145, 154, 177 C.d.S.) ─────────────

  {
    id: 1345,
    chapter: 13,
    question: "Quando due veicoli stanno per impegnare lo stesso incrocio (anche se le traiettorie non si incrociano), si ha l'obbligo di dare la precedenza a destra. Questa regola vale ANCHE nei seguenti casi:",
    options: [
      "Negli incroci privi di segnaletica e in presenza del segnale 'INTERSEZIONE CON PRECEDENZA A DESTRA'",
      "Solo quando c'è il segnale specifico",
      "Solo sulle autostrade",
      "Solo di notte"
    ],
    correct: 0,
    explanation: "L'obbligo di dare la precedenza a destra (e a sinistra) vale: negli incroci privi di segnaletica stradale; in presenza del segnale 'INTERSEZIONE CON PRECEDENZA A DESTRA'; in presenza del segnale 'DARE PRECEDENZA'; quando ci si immette nel flusso della circolazione; quando si effettua l'inversione di marcia; quando si effettua la retromarcia."
  },

  {
    id: 1346,
    chapter: 13,
    question: "Si ha l'obbligo di dare la PRECEDENZA SIA A DESTRA CHE A SINISTRA in presenza del segnale 'DARE PRECEDENZA' e inoltre:",
    options: [
      "Quando ci si immette nel flusso della circolazione, quando si effettua l'inversione di marcia, e quando si effettua la retromarcia",
      "Solo quando la strada è bagnata",
      "Solo in autostrada",
      "Solo di notte o in caso di nebbia"
    ],
    correct: 0,
    explanation: "Si ha l'obbligo di dare la precedenza sia a destra che a sinistra: in presenza del segnale 'DARE PRECEDENZA'; quando ci si immette nel flusso della circolazione; quando si effettua l'inversione di marcia; quando si effettua la retromarcia."
  },

  {
    id: 1347,
    chapter: 13,
    question: "Uscendo da un'autorimessa, un passo carraio o luoghi non soggetti a pubblico passaggio, il conducente deve:",
    options: [
      "Fermarsi e dare la precedenza a tutti; fare attenzione ai pedoni sul marciapiede; procedere lentamente, specialmente in retromarcia",
      "Procedere normalmente se non ci sono ostacoli visibili",
      "Suonare il clacson e uscire rapidamente",
      "Ha la precedenza su chi è sulla strada"
    ],
    correct: 0,
    explanation: "Uscendo da un'autorimessa, passo carraio o luoghi non soggetti a pubblico passaggio, bisogna usare prudenza (suonando il clacson se necessario), dare la precedenza agli eventuali pedoni che circolano sul marciapiede, procedere lentamente, specialmente se l'uscita è effettuata in retromarcia."
  },

  // ── 13.7 Comportamento verso i Pedoni ────────────────────────────────────

  {
    id: 1348,
    chapter: 13,
    question: "Quando il traffico non è regolato da semafori o agenti, ai pedoni sugli attraversamenti pedonali il conducente deve:",
    options: [
      "Dare sempre la precedenza, fermandosi se necessario — è un obbligo assoluto",
      "Dare la precedenza solo se i pedoni sono già a metà strada",
      "Suonare il clacson per avvertire il pedone e proseguire",
      "Rallentare ma non è necessario fermarsi"
    ],
    correct: 0,
    explanation: "Quando il traffico non è regolato da agenti o semafori, i conducenti devono dare la precedenza, fermandosi, ai pedoni che transitano sugli attraversamenti pedonali (strisce). È un obbligo assoluto (Art. 191 C.d.S.)."
  },

  {
    id: 1349,
    chapter: 13,
    question: "Un pedone attraversa la strada fuori dalle strisce pedonali. Il conducente deve:",
    options: [
      "Ridurre la velocità e, se necessario, fermarsi per non investirlo — può usare brevemente il clacson in caso di pericolo imminente",
      "Proseguire normalmente, il pedone fuori dalle strisce non ha la precedenza",
      "Accelerare per passare prima del pedone",
      "Solo suonare il clacson senza rallentare"
    ],
    correct: 0,
    explanation: "Fuori dalle strisce di attraversamento, il conducente non è acceduto a dare la precedenza, ma deve comunque ridurre la velocità e, occorrendo, fermarsi per non investire il pedone. Può usare brevemente il clacson in caso di pericolo immediato."
  },

  {
    id: 1350,
    chapter: 13,
    question: "Il conducente deve fermarsi obbligatoriamente quando una persona con ridotte capacità motorie (sedia a rotelle, bastone bianco, ecc.) attraversa la carreggiata o si accinge ad attraversarla?",
    options: [
      "Sì, i conducenti devono fermarsi quando una persona con ridotte capacità motorie o con bastone bianco (o bianco-rosso) attraversa o si accinge ad attraversare",
      "No, vale la stessa regola degli altri pedoni",
      "Solo se la persona è già a metà strada",
      "Solo se è presente un agente del traffico"
    ],
    correct: 0,
    explanation: "I conducenti devono fermarsi quando una persona con ridotte capacità motorie su carrozzella, munita di bastone bianco o bastone bianco-rosso (sordocieca), o comunque riconoscibile, attraversa la carreggiata o si accinge ad attraversarla (Art. 191 C.d.S.)."
  },

  // ── 13.9 Polizia, Ambulanze ───────────────────────────────────────────────

  {
    id: 1351,
    chapter: 13,
    question: "Quando un veicolo di polizia/ambulanza/pompieri usa CONTEMPORANEAMENTE sirena (dispositivo acustico) e lampeggiante blu, gli altri conducenti devono:",
    options: [
      "Lasciare libero il passo appena udita la sirena e, se necessario, fermarsi — è vietato seguire da vicino tali veicoli per trarne vantaggio nel traffico",
      "Procedere normalmente rispettando solo i semafori",
      "Fermarsi solo se il veicolo di emergenza chiede esplicitamente di fermarsi",
      "Non hanno obblighi specifici"
    ],
    correct: 0,
    explanation: "Chiunque si trovi sulla strada percorsa da veicoli di polizia/ambulanza/pompieri che usano CONTEMPORANEAMENTE sirena e lampeggiante blu ha l'obbligo di lasciare libero il passo e, se necessario, fermarsi. È vietato seguirli da vicino per trarne vantaggio nel traffico."
  },

  {
    id: 1352,
    chapter: 13,
    question: "Un veicolo della polizia con sirena in funzione vi sorpassa e sul tetto ha il display con la scritta luminosa 'ACCOSTARE'. Il conducente deve:",
    options: [
      "Fermarsi sul margine destro della carreggiata (accostarsi)",
      "Accelerare per non essere sorpassato",
      "Ignorare la scritta se non si ritiene di aver commesso infrazioni",
      "Fermarsi solo se si è in autostrada"
    ],
    correct: 0,
    explanation: "Se un veicolo della polizia con sirena in funzione vi sorpassa e sul tetto ha la scritta luminosa 'ACCOSTARE', si ha l'obbligo di accostarsi e fermarsi sul margine destro della carreggiata."
  },

  {
    id: 1353,
    chapter: 13,
    question: "Un veicolo della polizia con sirena in funzione vi sorpassa e sul tetto ha il display 'ALT POLIZIA'. Il conducente deve:",
    options: [
      "Fermarsi obbligatoriamente — questo segnale è indirizzato specificamente al veicolo che viene sorpassato",
      "Accostarsi ma non fermarsi",
      "Accelerare per mantenere la distanza",
      "Proseguire normalmente"
    ],
    correct: 0,
    explanation: "La scritta luminosa 'ALT POLIZIA' su un veicolo della polizia che vi sorpassa con sirena in funzione indica che l'ingiunzione di fermata è rivolta specificamente al conducente sorpassato — obbligo assoluto di fermarsi."
  },

  {
    id: 1354,
    chapter: 13,
    question: "Un veicolo della polizia sul tetto ha il display con la scritta luminosa 'INCIDENTE'. Il conducente deve:",
    options: [
      "Diminuire la velocità",
      "Fermarsi immediatamente",
      "Procedere normalmente",
      "Seguire il veicolo della polizia"
    ],
    correct: 0,
    explanation: "Quando un veicolo della polizia ha sul tetto il display con la scritta luminosa 'INCIDENTE', i conducenti che lo incontrano devono diminuire la velocità (per prepararsi a incontare la scena di un incidente e raggiungere i soccorsi)."
  },

  // ── 13.10 Specchi Retrovisori ─────────────────────────────────────────────

  {
    id: 1355,
    chapter: 13,
    question: "Su un'autovettura moderna, quanti specchi retrovisori sono presenti e di che tipo?",
    options: [
      "Tre: uno centrale interno e due laterali esterni (uno a destra e uno a sinistra)",
      "Due: uno centrale e uno laterale sinistro",
      "Quattro: due anteriori e due posteriori",
      "Solo uno centrale — gli altri sono facoltativi"
    ],
    correct: 0,
    explanation: "Le autovetture moderne hanno di norma tre specchi retrovisori: uno centrale interno (all'interno dell'abitacolo) e due laterali esterni (uno a destra e uno a sinistra). Tutti devono essere sempre puliti ed efficienti."
  },

  {
    id: 1356,
    chapter: 13,
    question: "La regolazione degli specchi retrovisori deve essere effettuata:",
    options: [
      "Dopo aver regolato il sedile, quando il veicolo non è ancora in marcia",
      "Mentre si guida, al momento del bisogno",
      "Solo prima di un lungo viaggio",
      "Una volta al mese durante il controllo del veicolo"
    ],
    correct: 0,
    explanation: "La regolazione degli specchi retrovisori deve essere svolta dopo che è stata regolata la posizione del sedile e quando il veicolo non è ancora in marcia. Non si deve mai regolare gli specchi mentre si guida."
  },

  {
    id: 1357,
    chapter: 13,
    question: "Lo specchio retrovisore centrale ha una posizione 'antiriflesso'. A cosa serve?",
    options: [
      "Per ridurre nelle ore notturne il fastidio agli occhi causato dai proiettori dei veicoli che seguono",
      "Per migliorare la visione frontale di giorno",
      "Per eliminare gli angoli ciechi laterali",
      "Per vedere meglio di lato nelle curve"
    ],
    correct: 0,
    explanation: "Lo specchio retrovisore centrale ha anche una posizione antiriflesso da utilizzare nelle ore notturne. Serve a ridurre il fastidio agli occhi causato dall'abbagliamento dei proiettori dei veicoli che seguono. Si aziona tramite apposito comando."
  },

  {
    id: 1358,
    chapter: 13,
    question: "Gli specchi retrovisori devono essere utilizzati per un controllo posteriore della strada prima di:",
    options: [
      "Iniziare una manovra di parcheggio in retromarcia, durante tutte le manovre di retromarcia, prima di sorpassare e durante tutta la manovra, prima di cambiare corsia e prima di immettersi nel flusso della circolazione",
      "Solo prima di sorpassare",
      "Solo quando si fa retromarcia",
      "Solo prima di cambiare corsia in autostrada"
    ],
    correct: 0,
    explanation: "Gli specchi retrovisori devono essere usati per il controllo posteriore: prima di manovre di parcheggio in retromarcia; durante tutte le manovre di retromarcia; prima di sorpassare e continuando durante tutta la manovra; prima di cambiare corsia; prima di immettersi nel flusso della circolazione."
  },

  {
    id: 1359,
    chapter: 13,
    question: "Gli angoli ciechi (zone non visibili dagli specchi) dipendono da:",
    options: [
      "La struttura del veicolo (dimensione e posizione dei montanti del tetto) e dalla dimensione e posizionamento degli specchi stessi",
      "Solo dalla velocità del veicolo",
      "Solo dalla luminosità dell'ambiente",
      "Solo dal tipo di strada"
    ],
    correct: 0,
    explanation: "Gli angoli ciechi dipendono dalla struttura del veicolo (dimensione e posizione dei montanti del tetto, altezza del veicolo) e dalla dimensione e posizionamento degli specchi. Per questo motivo il controllo visivo laterale diretto deve integrare il controllo tramite specchi."
  },

  {
    id: 1360,
    chapter: 13,
    question: "Sulle motociclette e sui ciclomotori, gli specchi retrovisori posti sui lati del manubrio devono essere regolati:",
    options: [
      "Con maggiore frequenza rispetto alle autovetture (a causa delle vibrazioni), mantenendoli sempre puliti ed efficienti",
      "Solo una volta all'anno durante la revisione",
      "Non hanno bisogno di regolazione specifica",
      "Solo se si supera i 100 km/h"
    ],
    correct: 0,
    explanation: "Anche sui motocicli e ciclomotori, il conducente deve provvedere all'esatta regolazione della posizione degli specchi, che per effetto delle vibrazioni può rendersi necessaria con maggiore frequenza rispetto alle autovetture. Vanno sempre mantenuti puliti ed efficienti."
  },

];
