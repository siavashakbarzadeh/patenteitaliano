// ─────────────────────────────────────────────────────────────────────────────
//  CAPITOLO 14 – Ordine di Precedenza nelle Intersezioni (Art. 145 C.d.S.)
//  Fonti: pp. 170–174 del libro di testo Patente B
// ─────────────────────────────────────────────────────────────────────────────

import type { Question } from "@/lib/types";

export const chapter14Questions: Question[] = [

  // ── Regola Generale della Precedenza ─────────────────────────────────────

  {
    id: 1401,
    chapter: 14,
    question: "Nelle intersezioni (incroci) non regolate da segnali, qual è la regola fondamentale?",
    options: [
      "Si deve dare la precedenza ai veicoli che provengono da destra (regola della destra libera)",
      "Passa prima chi arriva per primo all'incrocio",
      "Passa prima il veicolo più grande",
      "Passa prima il veicolo che va più veloce"
    ],
    correct: 0,
    explanation: "Nelle intersezioni non regolate da segnali di precedenza, si applica la regola della 'destra libera': il conducente deve dare la precedenza ai veicoli che provengono da destra. È la regola base quando non ci sono ulteriori indicazioni."
  },

  {
    id: 1402,
    chapter: 14,
    question: "Quando i segnali di precedenza (STOP o triangolo Dare Precedenza) sono presenti, essi:",
    options: [
      "Hanno la priorità sulla regola della destra — il conducente che li incontra deve cedere il passo a TUTTI i veicoli che circolano sulla strada con diritto di precedenza",
      "Sono solo indicativi, vale sempre la destra libera",
      "Valgono solo di notte",
      "Valgono solo per i veicoli pesanti"
    ],
    correct: 0,
    explanation: "I segnali di precedenza (STOP e triangolo di Dare Precedenza) hanno la priorità sulla regola della destra libera. Il conducente che incontra tali segnali deve cedere il passo a tutti i veicoli circolanti sulla strada con la quale si incrocia."
  },

  {
    id: 1403,
    chapter: 14,
    question: "Il conducente che deve rispettare il segnale di STOP (Stop e Precedenza) è obbligato a:",
    options: [
      "Fermarsi completamente prima della linea di arresto e dare la precedenza a tutti i veicoli che circolano sulla strada con diritto di precedenza",
      "Solo rallentare senza fermarsi se non ci sono veicoli",
      "Fermarsi solo se arrivano veicoli da destra",
      "Proseguire se nessun veicolo è visibile"
    ],
    correct: 0,
    explanation: "Il segnale di STOP obbliga il conducente a fermarsi completamente prima della linea di arresto (o della striscia trasversale). Anche se non ci sono veicoli visibili, l'arresto è sempre obbligatorio — poi si può procedere quando la strada è libera."
  },

  {
    id: 1404,
    chapter: 14,
    question: "Il segnale di 'Dare Precedenza' (triangolo rosso con vertice in basso) obbliga a:",
    options: [
      "Cedere il passo a tutti i veicoli che circolano sulla strada con diritto di precedenza, senza necessariamente fermarsi (ma eventualmente fermandosi se necessario)",
      "Fermarsi sempre come il segnale di STOP",
      "Solo rallentare senza cedere il passo",
      "Dare la precedenza solo ai veicoli provenienti da destra"
    ],
    correct: 0,
    explanation: "Il segnale 'Dare Precedenza' obbliga a cedere il passo a tutti i veicoli che circolano sulla strada con diritto di precedenza. Non è obbligatorio fermarsi (a differenza dello STOP), ma lo si deve fare se necessario per cedere la precedenza."
  },

  // ── Precedenza del Tram ───────────────────────────────────────────────────

  {
    id: 1405,
    chapter: 14,
    question: "Nelle intersezioni, il tram ha la precedenza rispetto agli altri veicoli?",
    options: [
      "Sì, il tram ha sempre la precedenza sugli altri veicoli nelle intersezioni (salvo segnalazione contraria), poiché segue un percorso fisso su rotaie",
      "No, il tram deve rispettare la regola della destra come tutti",
      "Solo se è un tram moderno con segnaletica",
      "Solo se il tram è più grande dei veicoli presenti"
    ],
    correct: 0,
    explanation: "Il tram ha sempre la precedenza sugli altri veicoli nelle intersezioni (salvo diversa segnalazione). Dato che il tram segue una traiettoria fissa su rotaie e non può deviare, gli altri conducenti devono cedergli il passo."
  },

  {
    id: 1406,
    chapter: 14,
    question: "In un'intersezione, l'ordine di priorità è:",
    options: [
      "Prima i segnali di precedenza (STOP/Dare Precedenza), poi il tram, poi la regola della destra libera",
      "Prima la destra libera, poi il tram, poi i segnali",
      "Prima il tram, poi i segnali, poi la destra libera",
      "Tutti hanno uguale priorità, passa chi arriva prima"
    ],
    correct: 0,
    explanation: "L'ordine corretto di priorità nelle intersezioni è: 1) i segnali di precedenza (STOP, Dare Precedenza) — sempre obbligatori; 2) il tram ha la precedenza sui veicoli normali; 3) la regola della destra libera si applica quando non ci sono segnali né tram."
  },

  // ── Svolta a Sinistra all'Incrocio ─────────────────────────────────────────

  {
    id: 1407,
    chapter: 14,
    question: "Quando si svolta a sinistra in un'intersezione, il conducente deve dare la precedenza a:",
    options: [
      "I veicoli che provengono dal senso opposto (in quanto si deve tagliare la traiettoria dei veicoli in senso contrario)",
      "Solo ai pedoni sulle strisce",
      "Solo ai veicoli che vengono da destra",
      "Nessuno, chi svolta ha la precedenza"
    ],
    correct: 0,
    explanation: "Quando si svolta a sinistra in un'intersezione, il conducente deve dare la precedenza ai veicoli che provengono dal senso opposto, poiché si deve tagliare la loro traiettoria. Questa regola si applica anche quando si ha la precedenza generica sull'incrocio."
  },

  {
    id: 1408,
    chapter: 14,
    question: "Per effettuare la svolta a sinistra in un'incrocio, il conducente deve portarsi:",
    options: [
      "Al centro dell'incrocio prima di completare la svolta, dando la precedenza ai veicoli in senso opposto",
      "Il più possibile a destra prima di svoltare",
      "Immediatamente a sinistra senza attendere al centro",
      "Deve fermarsi completamente e poi svoltare"
    ],
    correct: 0,
    explanation: "Per svoltare a sinistra, il conducente deve portarsi al centro dell'incrocio (inizio della manovra), poi attendere che sia libero il lato dei veicoli in senso contrario prima di completare la svolta. Questo è il comportamento corretto come descritto nel codice."
  },

  {
    id: 1409,
    chapter: 14,
    question: "Due veicoli si incrociano, entrambi svoltano a sinistra. Come si comportano?",
    options: [
      "Entrambi si portano al centro dell'incrocio passando l'uno davanti all'altro (quasi contemporaneamente, tenendosi il centro dell'incrocio tra loro)",
      "Passa prima chi è arrivato prima",
      "Passa prima il veicolo da destra",
      "Entrambi si fermano e aspettano"
    ],
    correct: 0,
    explanation: "Quando due veicoli si affrontano e devono entrambi svoltare a sinistra, possono passare contemporaneamente: entrambi si portano al centro dell'incrocio e possono concludere la svolta passando uno davanti all'altro (il centro dell'incrocio rimane tra i due veicoli)."
  },

  // ── Come determinare l'Ordine di Transito ─────────────────────────────────

  {
    id: 1410,
    chapter: 14,
    question: "In un'intersezione senza segnali, due veicoli si incontrano: uno viene da destra, l'altro da sinistra. Chi ha la precedenza?",
    options: [
      "Il veicolo che viene da destra — la regola della destra libera assegna la precedenza a chi proviene da destra rispetto all'altro",
      "Il veicolo che viene da sinistra",
      "Entrambi hanno uguale diritto di passare",
      "Il veicolo che va diritto ha sempre la precedenza"
    ],
    correct: 0,
    explanation: "La regola della destra libera: all'incrocio senza segnali, il veicolo che viene dalla destra ha la precedenza. Il veicolo che lo vede provenire da destra deve cedergli il passo."
  },

  {
    id: 1411,
    chapter: 14,
    question: "Il veicolo che deve dare la precedenza all'incrocio deve:",
    options: [
      "Fermarsi o rallentare quanto necessario per lasciar passare il veicolo con la precedenza, senza occupare il centro dell'incrocio bloccandolo",
      "Solo rallentare, senza fermarsi",
      "Fermarsi solo se il veicolo privilegiato è molto vicino",
      "Suonare il clacson e procedere lentamente"
    ],
    correct: 0,
    explanation: "Il conducente che deve cedere la precedenza deve fermarsi o rallentare quanto necessario per lasciar passare il veicolo avente diritto di precedenza, senza occupare il centro dell'incrocio in modo da bloccarlo."
  },

  {
    id: 1412,
    chapter: 14,
    question: "Se all'incrocio arrivano 3 veicoli e ognuno deve dare la precedenza a quello da destra, come si risolve?",
    options: [
      "Si valuta la 'destra libera' per ciascuno: se nessuno ha la destra libera (situazione di stallo), si procede con accordo tra i conducenti — nella pratica uno cede per sbloccare la situazione",
      "Passa il veicolo più grande",
      "Passano contemporaneamente tutti e tre",
      "Passa chi arriva prima"
    ],
    correct: 0,
    explanation: "In situazioni di stallo dove nessun veicolo ha la destra libera (es. 3 o 4 veicoli a un incrocio ciascuno con un veicolo alla propria destra), la situazione richiede che uno dei conducenti ceda volontariamente per sbloccarla. Nella pratica un conducente fa cenno e cede la priordia."
  },

  {
    id: 1413,
    chapter: 14,
    question: "Un conducente che deve svoltare a sinistra all'incrocio, ma ha la precedenza generale (destra libera), deve comunque:",
    options: [
      "Dare la precedenza ai veicoli che provengono in senso opposto che vanno dritto o a destra",
      "Passare senza preoccuparsi dei veicoli in senso opposto",
      "Suonare il clacson per avvertire",
      "Ha la priorità assoluta su tutti i veicoli"
    ],
    correct: 0,
    explanation: "Chi svolta a sinistra — anche se ha la precedenza generale sull'incrocio — deve sempre dare la precedenza ai veicoli che provengono in senso opposto e che vanno dritto o a destra."
  },

  // ── Incrocio con Semaforo ─────────────────────────────────────────────────

  {
    id: 1414,
    chapter: 14,
    question: "Se l'intersezione è regolata da semafori, le norme di precedenza si applicano:",
    options: [
      "I semafori hanno la priorità assoluta — Si seguono le indicazioni del semaforo: verde = via libera, giallo = attenzione/rallentare, rosso = fermata obbligatoria",
      "Vale sempre anche la regola della destra libera insieme al semaforo",
      "I semafori sono solo indicativi se c'è poco traffico",
      "Il tram ha la priorità anche sul verde al semaforo"
    ],
    correct: 0,
    explanation: "Quando l'intersezione è regolata da semafori, si seguono le indicazioni del semaforo: con il verde si può procedere (rispettando comunque le altre regole come la svolta a sinistra); con il rosso ci si ferma. Il semaforo sostituisce le regole di precedenza manuali."
  },

  {
    id: 1415,
    chapter: 14,
    question: "Un veicolo che arriva a un incrocio regolato da agenti del traffico (vigile) deve:",
    options: [
      "Seguire i segnali manuali del vigile, che hanno la priorità sui semafori e sui segnali stradali",
      "Ignorare il vigile e seguire il semaforo",
      "Seguire la regola della destra libera",
      "Rallentare e guardare cosa fanno gli altri veicoli"
    ],
    correct: 0,
    explanation: "I segnali manuali degli agenti del traffico (vigili) hanno la priorità assoluta su tutti gli altri segnali (semafori, segnali stradali, ecc.). Il conducente deve seguire le direttive del vigile."
  },

  // ── Regola specifica della posizione ─────────────────────────────────────

  {
    id: 1416,
    chapter: 14,
    question: "In un'intersezione, il veicolo T (tram) che percorre la sua corsia regolare si incontra con il veicolo R (automobile). Chi ha la precedenza?",
    options: [
      "Il tram (T) ha sempre la precedenza sul veicolo R (automobile), salvo diversa segnalazione",
      "L'automobile, se viene da destra rispetto al tram",
      "Chi transita più velocemente",
      "Dipende dal colore del semaforo"
    ],
    correct: 0,
    explanation: "Il tram ha sempre la precedenza rispetto agli altri veicoli nell'incrocio, salvo diversa segnalazione. L'automobile deve attendere il passaggio del tram, anche se la regola della destra libera avvantaggerebbe l'automobile."
  },

  {
    id: 1417,
    chapter: 14,
    question: "L'ordine di transito in un'intersezione si determina in questo ordine: prima si considera:",
    options: [
      "1. Segnali di fermata/precedenza (STOP e Dare Precedenza); 2. Il tram; 3. La regola della destra libera; 4. Chi stava per svoltare a sinistra cede a chi va dritto o a destra in senso opposto",
      "Prima la velocità dei veicoli, poi i segnali",
      "Prima la grandezza dei veicoli, poi i segnali",
      "Prima chi è arrivato prima all'incrocio"
    ],
    correct: 0,
    explanation: "L'ordine corretto per determinare il transito all'incrocio è: 1. rispetto dei segnali di obbligo (STOP = fermata obbligatoria, Dare Precedenza = cedere); 2. il tram ha la precedenza; 3. regola della destra libera; 4. chi svolta a sinistra cede a chi viene in senso contrario."
  },

  {
    id: 1418,
    chapter: 14,
    question: "All'incrocio, se il veicolo N deve dare la precedenza al veicolo A (da destra), ma ha la precedenza sul veicolo R (N è a destra di R), il veicolo N:",
    options: [
      "Deve attendere A prima di passare, poi R deve attendere N — l'ordine è: A, N, R (o eventualmente N e R contemporaneamente dopo A)",
      "Può passare subito senza attendere A",
      "Deve aspettare anche R",
      "Passa per ultimo tra tutti"
    ],
    correct: 0,
    explanation: "Se N deve dare la precedenza ad A ma ha la precedenza su R, l'ordine logico è: prima A (che ha la destra rispetto a N), poi N (che ha la destra rispetto a R). R aspetta che N passi. Ne risulta: A → N → R."
  },

  // ── Occupare il Centro dell'Incrocio ──────────────────────────────────────

  {
    id: 1419,
    chapter: 14,
    question: "Quando si svolta a sinistra, il conducente si porta al centro dell'incrocio e deve attendere:",
    options: [
      "Che la strada in senso contrario sia libera per completare la svolta — può passare contemporaneamente ai veicoli che svoltano a sinistra dal lato opposto",
      "Che tutti i veicoli dell'incrocio siano passati",
      "Solo 5 secondi, poi può procedere",
      "Non deve attendere, si svolta sempre immediatamente"
    ],
    correct: 0,
    explanation: "Portandosi al centro dell'incrocio per svoltare a sinistra, il conducente attende che la strada in senso contrario sia libera. Può però passare contemporaneamente ai veicoli che svoltano a sinistra dalla direzione opposta (ognuno tiene il centro a sinistra)."
  },

  {
    id: 1420,
    chapter: 14,
    question: "Se all'incrocio il veicolo B si è portato al centro per svoltare a sinistra e il veicolo N si è spostato, poi il veicolo R deve passare dopo B. Cosa accade?",
    options: [
      "B si ferma al centro dell'incrocio e può concludere solo dopo che N si è spostato — poi D e N passano contemporaneamente, e R passa dopo B",
      "R passa sempre per primo in quanto va dritto",
      "B non può mai portarsi al centro senza aver già la strada libera",
      "N ha sempre la precedenza su B in qualsiasi caso"
    ],
    correct: 0,
    explanation: "Nel caso di incrocio 638 (esempio del libro): B si ferma al centro, può concludere solo dopo che N si è spostato; D e N passano contemporaneamente; R passa dopo che i veicoli davanti hanno completato il transito. L'ordine si determina applicando sistematicamente le regole di precedenza."
  },

  {
    id: 1421,
    chapter: 14,
    question: "La 'destra libera' si verifica quando:",
    options: [
      "Nessun veicolo proviene dalla destra del conducente, permettendogli di procedere senza dover cedere la precedenza",
      "La strada a destra è fisica libera da ostacoli",
      "Il veicolo si trova nel lato destro della carreggiata",
      "La freccia destra è inserita"
    ],
    correct: 0,
    explanation: "Il concetto di 'destra libera': un conducente ha la destra libera quando nessun veicolo proviene dalla sua destra. In tal caso, ha la precedenza rispetto ai veicoli che provengono dalla sua sinistra e può procedere."
  },

  // ── Velocità e Posizione agli Incroci ─────────────────────────────────────

  {
    id: 1422,
    chapter: 14,
    question: "Avvicinandosi a un'intersezione, il conducente deve:",
    options: [
      "Moderare la velocità e prestare attenzione alla posizione degli altri veicoli per valutare correttamente la precedenza",
      "Accelerare per attraversare più rapidamente",
      "Mantenere la velocità costante",
      "Suonare il clacson per avvertire gli altri"
    ],
    correct: 0,
    explanation: "Avvicinandosi a un'intersezione, il conducente deve moderare la velocità e prestare massima attenzione alla situazione dell'incrocio (posizione e direzione degli altri veicoli) per poter applicare correttamente le norme di precedenza e agire in sicurezza."
  },

  {
    id: 1423,
    chapter: 14,
    question: "In un incrocio non segnalato, chi arriva da una strada larga deve dare la precedenza a chi arriva da una strada più stretta?",
    options: [
      "No — la larghezza della strada non determina la precedenza; vale la regola della destra libera indipendentemente dalla larghezza delle strade",
      "Sì, chi viene da strada larga ha sempre la precedenza",
      "La strada più stretta ha sempre la precedenza",
      "Dipende dal tipo di veicolo"
    ],
    correct: 0,
    explanation: "La larghezza della strada non determina la precedenza all'incrocio (a meno che ci siano appositi segnali). La regola della destra libera si applica indipendentemente dalla larghezza della strada."
  },

  {
    id: 1424,
    chapter: 14,
    question: "La velocità con cui si affronta l'incrocio è importante perché:",
    options: [
      "A velocità elevata si impiega meno tempo a valutare le situazioni e si riduce la capacità di fermarsi se necessario — occorre tenere la massima velocità compatibile con la situazione",
      "A velocità alta si ha più tempo per osservare",
      "La velocità non influisce sulla sicurezza all'incrocio",
      "Chi va più veloce ha sempre la precedenza agli incroci"
    ],
    correct: 0,
    explanation: "La velocità rispettata all'area di incrocio è fondamentale: a velocità elevate si riduce il tempo per valutare la situazione e la distanza di arresto aumenta. Occorre tenere la velocità compatibile con la visibilità e la situazione dell'incrocio."
  },

  {
    id: 1425,
    chapter: 14,
    question: "Due veicoli si trovano ad un incrocio: A viene da nord (dritto), R viene da ovest (deve svoltare a sinistra). Entrambi non hanno segnali. Chi passa prima?",
    options: [
      "A, perché R svolta a sinistra e deve cedere ai veicoli in senso contrario che vanno dritto",
      "R, perché è arrivato prima",
      "A, perché viene da destra rispetto a R",
      "R, perché svolta e occupa meno spazio"
    ],
    correct: 0,
    explanation: "R deve svoltare a sinistra e quindi deve cedere la precedenza ad A che viene in senso contrario e procede dritto. Questa regola ('chi svolta a sinistra cede a chi viene in senso contrario') si applica indipendentemente dalla regola della destra libera."
  },

  {
    id: 1426,
    chapter: 14,
    question: "Se all'incrocio il veicolo A deve dare la precedenza al tram T, e il veicolo D deve dare la precedenza ad A, in quale ordine transitano?",
    options: [
      "Prima T (tram), poi A, poi D",
      "Prima A, poi D, poi T",
      "Prima D, poi A, poi T",
      "Tutti e tre contemporaneamente"
    ],
    correct: 0,
    explanation: "Il tram T ha sempre la precedenza sugli autoveicoli normali. Quindi: 1° T (tram); 2° A (che deve cedere al tram ma ha precedenza su D); 3° D (che deve cedere ad A). L'ordine è: T → A → D."
  },

  {
    id: 1427,
    chapter: 14,
    question: "Il conducente che si avvicina a un'intersezione, tenendo presente che 'sulla carta' a volte è difficile determinare la precedenza, deve:",
    options: [
      "Tenere presente la velocità reale dei veicoli, la posizione rispettata all'area di incrocio e l'occupazione (dinamica) del centro, rispettando gli altri utenti",
      "Scegliere sempre di passare per primo",
      "Fermarsi sempre indipendentemente dalla situazione",
      "Accelerare per risolvere velocemente la situazione"
    ],
    correct: 0,
    explanation: "Il libro avverte che le soluzioni sulla carta degli incroci sono spesso indicative: nella realtà bisogna tenere conto delle situazioni dinamiche reali (velocità, posizione occupata, ecc). La posizione rispettata all'area di incrocio, la velocità reale dei veicoli e la dinamica della situazione influenzano chi passa prima."
  },

  {
    id: 1428,
    chapter: 14,
    question: "All'incrocio 642 del libro (tram presente), il veicolo D deve cedere la precedenza a:",
    options: [
      "Al tram (che ha sempre la precedenza) e al veicolo A (che si porta al centro dell'incrocio prima che D possa procedere)",
      "Solo al veicolo M",
      "Solo al tram, non ad A",
      "Non cede a nessuno, ha la destra libera"
    ],
    correct: 0,
    explanation: "Nell'incrocio 642: il veicolo A si porta al centro dell'incrocio e deve dare la precedenza al tram T e al veicolo M; il veicolo D deve attendere il transito del tram e che A si porti al centro; il veicolo M deve attendere il transito del veicolo D."
  },

  {
    id: 1429,
    chapter: 14,
    question: "Il conducente dell'automobile che si trova alla propria destra ha già un veicolo in arrivo che non ha segnali di stop. Cosa deve fare?",
    options: [
      "Cedergli la precedenza perché quel veicolo gli viene da destra (regola della destra libera)",
      "Continuare perché è arrivato prima",
      "Suonare il clacson e procedere",
      "Accelerare per non creare attesa"
    ],
    correct: 0,
    explanation: "Se un veicolo arriva dalla propria destra in un incrocio privo di segnali, si deve cedergli la precedenza (regola della destra libera). Non importa chi è arrivato prima all'incrocio."
  },

  {
    id: 1430,
    chapter: 14,
    question: "Le norme di precedenza agli incroci si applicano anche alle intersezioni di strade private con strade pubbliche?",
    options: [
      "Sì, anche chi emerge da una strada privata (passo carraio, parcheggio, cortile) deve dare la precedenza a tutti i veicoli sulla strada pubblica",
      "No, sulle strade private valgono regole diverse",
      "Solo se c'è il segnale di STOP",
      "Solo se la strada privata è più stretta"
    ],
    correct: 0,
    explanation: "Chi emerge da una strada privata (passo carraio, parcheggio, cortile, ecc.) o da terreni non ad uso pubblico deve dare la precedenza a tutti i veicoli circolanti sulla strada pubblica, nonché ai pedoni."
  },

  // ── Scenari Avanzati Tram e Precedenza ───────────────────────────────────

  {
    id: 1431,
    chapter: 14,
    question: "All'incrocio si avvicina un tram da sinistra e un veicolo da destra (senza segnali). Chi ha la precedenza?",
    options: [
      "Il tram, perché il tram ha sempre la precedenza sugli altri veicoli agli incroci",
      "Il veicolo da destra, perché si applica la regola della destra",
      "Passano contemporaneamente",
      "Chi arriva prima all'incrocio"
    ],
    correct: 0,
    explanation: "Il tram ha SEMPRE la precedenza sugli altri veicoli agli incroci, anche se questi provengono da destra. La regola della destra non si applica quando è presente un tram.",
    tags: ["tram", "precedenza"],
    pageRef: 171,
    vocab: [
      { italian: "il tram ha sempre la precedenza", persian: "تراموا همیشه اولویت دارد" },
    ],
  },

  {
    id: 1432,
    chapter: 14,
    question: "Due veicoli si avvicinano allo stesso incrocio: il veicolo A vuole svoltare a sinistra, il veicolo B viene in senso contrario e va dritto. Chi cede?",
    options: [
      "Il veicolo A deve cedere al veicolo B, perché chi svolta a sinistra deve sempre cedere ai veicoli in senso contrario",
      "Il veicolo B deve cedere al veicolo A",
      "Passano contemporaneamente",
      "Dipende da quale ha la regola della destra"
    ],
    correct: 0,
    explanation: "Chi svolta a sinistra deve sempre cedere la precedenza ai veicoli provenienti in senso contrario che procedono dritto o svoltano a destra. Questa regola si applica indipendentemente dalla regola della destra.",
    tags: ["svolta-sinistra", "precedenza"],
    pageRef: 172,
    vocab: [
      { italian: "svoltare a sinistra", persian: "چرخش به چپ" },
      { italian: "veicolo in senso contrario", persian: "وسیله مقابل" },
    ],
  },

  {
    id: 1433,
    chapter: 14,
    question: "Due veicoli provenienti da direzioni opposte intendono entrambi svoltare a sinistra all'incrocio. Cosa devono fare?",
    options: [
      "Possono passare contemporaneamente, ciascuno passando al di là del centro dell'incrocio",
      "Devono attendere che uno abbia completato la svolta prima che l'altro inizi",
      "Quello che ha la precedenza (regola della destra) deve aspettare",
      "È sempre vietato svoltare entrambi a sinistra contemporaneamente"
    ],
    correct: 0,
    explanation: "Due veicoli provenienti da direzioni opposte che intendono entrambi svoltare a sinistra possono farlo contemporaneamente. Ciascuno deve passare al di là del centro dell'incrocio, tenendosi alla propria destra.",
    tags: ["svolta-sinistra", "precedenza"],
    pageRef: 172,
    vocab: [
      { italian: "passare al di là del centro", persian: "عبور از کنار مرکز" },
      { italian: "contemporaneamente", persian: "همزمان" },
    ],
  },

  {
    id: 1434,
    chapter: 14,
    question: "Al segnale di STOP il conducente deve fermarsi. Questo obbligo vale anche se:",
    options: [
      "La strada sembra completamente libera e non si vede nessun veicolo",
      "Solo se ci sono veicoli in arrivo",
      "Solo se è di notte",
      "Solo se c'è traffico intenso"
    ],
    correct: 0,
    explanation: "Al segnale di STOP il conducente deve fermarsi SEMPRE, anche se la strada sembra completamente libera. La fermata completa è obbligatoria indipendentemente dalle condizioni del traffico.",
    tags: ["stop", "segnali"],
    pageRef: 170,
    vocab: [
      { italian: "fermarsi completamente", persian: "توقف کامل" },
      { italian: "indipendentemente dal traffico", persian: "بدون توجه به ترافیک" },
    ],
  },

  {
    id: 1435,
    chapter: 14,
    question: "Con il segnale 'Dare Precedenza', il conducente deve fermarsi completamente prima di entrare nell'incrocio?",
    options: [
      "Non è obbligatorio fermarsi se non è necessario, ma se serve per cedere il passo, ci si deve fermare",
      "Sì, sempre come al STOP",
      "No, non deve mai fermarsi con quel segnale",
      "Solo se il veicolo con precedenza è a meno di 50 metri"
    ],
    correct: 0,
    explanation: "Con il segnale 'Dare Precedenza', fermarsi non è obbligatorio se non è necessario. Ma se ci sono veicoli ai quali si deve cedere il passo, ci si deve fermare quanto occorre per farlo. La differenza con STOP è che STOP impone la fermata in ogni caso.",
    tags: ["dare-precedenza", "segnali"],
    pageRef: 170,
    vocab: [
      { italian: "cedere il passo", persian: "راه دادن / تقدم دادن" },
      { italian: "se necessario", persian: "در صورت لزوم" },
    ],
  },

  {
    id: 1436,
    chapter: 14,
    question: "Un veicolo percorre una strada con il segnale 'Strada con Precedenza' (rombo giallo). Questo significa che:",
    options: [
      "Ha diritto di precedenza su tutti i veicoli provenienti dalle strade laterali",
      "Deve cedere la precedenza a tutti",
      "Ha la precedenza solo sui veicoli più piccoli",
      "Deve procedere più lentamente del solito"
    ],
    correct: 0,
    explanation: "Il segnale 'Strada con Precedenza' (rombo giallo) indica che il conducente percorre la strada con diritto di precedenza e ha quindi priorità su tutti i veicoli che si immettono dalle strade laterali.",
    tags: ["strada-precedenza", "segnali"],
    pageRef: 170,
    vocab: [
      { italian: "strada con precedenza", persian: "جاده اولویت‌دار" },
      { italian: "strade laterali", persian: "جاده‌های جانبی" },
    ],
  },

  {
    id: 1437,
    chapter: 14,
    question: "In un incrocio senza segnali, tre veicoli si avvicinano: A da nord, B da est, C da sud. A vuole andare dritto, B vuole andare dritto, C vuole andare dritto. Chi ha la precedenza?",
    options: [
      "B ha la precedenza su A (B viene da destra di A); C ha la precedenza su B (C viene da destra di B); A ha la precedenza su C (A viene da destra di C) — situazione di stallo che richiede accordo",
      "Chi arriva prima ha la precedenza",
      "A ha sempre la precedenza perché viene da nord",
      "Tutti e tre passano contemporaneamente"
    ],
    correct: 0,
    explanation: "In un incrocio a tre vie senza segnali con tutti e tre che vogliono andare dritto, si crea una situazione circolare dove B ha precedenza su A (viene da destra di A), C ha precedenza su B, A ha precedenza su C. Si crea uno stallo — nella pratica uno dei conducenti cede volontariamente.",
    tags: ["incrocio", "precedenza", "stallo"],
    pageRef: 173,
    vocab: [
      { italian: "situazione di stallo", persian: "وضعیت بن‌بست" },
      { italian: "cedere volontariamente", persian: "داوطلبانه تقدم دادن" },
    ],
  },

  {
    id: 1438,
    chapter: 14,
    question: "Il segnale 'Fine della Precedenza' significa che:",
    options: [
      "La strada su cui si percorre non ha più il diritto di precedenza e si ritorna alle normali regole di precedenza",
      "Si deve fermarsi",
      "La strada principale finisce",
      "Si entra in una zona a traffico limitato"
    ],
    correct: 0,
    explanation: "Il segnale 'Fine della Precedenza' indica che termina il tratto di strada con precedenza. Da quel punto il conducente non ha più il diritto di precedenza e si applicano di nuovo le normali regole (regola della destra, ecc.).",
    tags: ["fine-precedenza", "segnali"],
    pageRef: 170,
    vocab: [
      { italian: "fine della precedenza", persian: "پایان اولویت" },
      { italian: "ritorno alle normali regole", persian: "بازگشت به قوانین عادی" },
    ],
  },

  {
    id: 1439,
    chapter: 14,
    question: "Un veicolo A deve svoltare a sinistra e un veicolo B arriva dall'incrocio a destra (B ha la destra libera). Chi cede a chi?",
    options: [
      "A deve cedere a B sia per la regola della destra (B viene da destra di A) che perché A svolta a sinistra",
      "B deve cedere ad A perché A sta svoltando",
      "Passano contemporaneamente",
      "Dipende dalla velocità di ciascuno"
    ],
    correct: 0,
    explanation: "In questo scenario A deve cedere a B per due ragioni: (1) la regola della destra — B proviene da destra di A; (2) chi svolta a sinistra cede ai veicoli in senso opposto. Entrambe le regole portano alla stessa conclusione: B passa prima.",
    tags: ["svolta-sinistra", "precedenza", "destra"],
    pageRef: 172,
    vocab: [
      { italian: "due ragioni per cedere", persian: "دو دلیل برای تقدم دادن" },
    ],
  },

  {
    id: 1440,
    chapter: 14,
    question: "Quale affermazione sulla precedenza del tram è corretta?",
    options: [
      "Il tram ha sempre la precedenza agli incroci sugli altri veicoli, a prescindere dalla direzione da cui proviene, a meno che non sia regolato da semaforo",
      "Il tram ha la precedenza solo se viene da destra",
      "Il tram ha la precedenza solo in centro città",
      "Il tram e il veicolo hanno la stessa precedenza — vale la regola della destra"
    ],
    correct: 0,
    explanation: "Il tram ha SEMPRE la precedenza agli incroci sugli altri veicoli, indipendentemente dalla direzione da cui proviene (anche da sinistra), a meno che non sia il semaforo a regolare diversamente.",
    tags: ["tram", "precedenza"],
    pageRef: 171,
    vocab: [
      { italian: "a prescindere dalla direzione", persian: "صرف نظر از جهت" },
      { italian: "regolato da semaforo", persian: "کنترل شده توسط سمافور" },
    ],
  },

];
