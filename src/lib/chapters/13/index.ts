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

];
