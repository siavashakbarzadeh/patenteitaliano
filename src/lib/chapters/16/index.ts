// ─────────────────────────────────────────────────────────────────────────────
//  CAPITOLO 16 – Fermata · Sosta · Arresto e Partenza
//  Fonti: pp. 184–193 del libro di testo Patente B
// ─────────────────────────────────────────────────────────────────────────────

import type { Question } from "@/lib/types";

export const chapter16Questions: Question[] = [

  // ── 16.1 Cautele alla Partenza ────────────────────────────────────────────

  {
    id: 1601,
    chapter: 16,
    question: "Prima di iniziare a guidare un veicolo a motore, il conducente è opportuno che verifichi:",
    options: [
      "Di possedere la categoria di patente idonea, la perfetta efficienza del mezzo e tutti i documenti necessari",
      "Solo il livello del carburante",
      "Solo di avere la patente in tasca",
      "Solo che il veicolo sia parcheggiato correttamente"
    ],
    correct: 0,
    explanation: "Prima di partire, il conducente è opportuno che: sia certo di possedere la categoria di patente idonea; verifichi la perfetta efficienza del mezzo; abbia con sé tutti i documenti necessari (carta di circolazione, certificato di assicurazione, patente in corso di validità)."
  },

  {
    id: 1602,
    chapter: 16,
    question: "Quali documenti deve avere con sé il conducente di un autoveicolo?",
    options: [
      "Carta di circolazione, certificato di assicurazione e patente in corso di validità",
      "Solo la patente di guida",
      "Solo la carta di circolazione",
      "Solo la carta d'identità"
    ],
    correct: 0,
    explanation: "Il conducente deve avere con sé: la carta di circolazione del veicolo, il certificato di assicurazione, la patente di guida in corso di validità. Questi documenti devono essere esibiti a richiesta degli agenti."
  },

  {
    id: 1603,
    chapter: 16,
    question: "Prima di partire, riguardo agli oggetti trasportati, il conducente deve assicurarsi che:",
    options: [
      "Non cadano o si disperdano e non compromettano la visibilità anteriore, posteriore e laterale",
      "Siano solo sul sedile posteriore",
      "Non superino il peso massimo",
      "Siano assicurati solo con cinture"
    ],
    correct: 0,
    explanation: "Gli oggetti trasportati devono essere sistemati in modo da evitarne la caduta o dispersione e che non compromettano la visibilità anteriore, posteriore e laterale, per la presenza di passeggeri o per il carico mal posizionato."
  },

  {
    id: 1604,
    chapter: 16,
    question: "Prima di partire con un autoveicolo, il conducente deve verificare che i passeggeri abbiano:",
    options: [
      "Regolarmente agganciato le cinture di sicurezza (soprattutto per i minori)",
      "Solo i documenti di identità",
      "Solo le porte chiuse",
      "Il casco indossato"
    ],
    correct: 0,
    explanation: "Prima della partenza, il conducente deve verificare che i passeggeri abbiano regolarmente agganciato le cinture di sicurezza (soprattutto se si tratta di minori). Deve inoltre verificare che il poggiatesta sia ben regolato e sistemare gli specchi retrovisori."
  },

  {
    id: 1605,
    chapter: 16,
    question: "Su un motociclo, prima di partire, è obbligatorio:",
    options: [
      "Regolare la propria statura (posizione corretta) e indossare il casco",
      "Solo verificare il carburante",
      "Solo allacciare le cinture",
      "Controllare le luci"
    ],
    correct: 0,
    explanation: "Su un motociclo, prima di partire, è opportuno regolare la propria statura (posizione corretta sul veicolo) ed è obbligatorio indossare il casco."
  },

  // ── 16.2 Arresto, Fermata e Sosta — Definizioni ───────────────────────────

  {
    id: 1606,
    chapter: 16,
    question: "Cosa si intende per 'arresto' nel Codice della Strada?",
    options: [
      "L'interruzione della marcia del veicolo dovuta ad esigenze della circolazione (es. semaforo rosso)",
      "Il parcheggio prolungato in un'area di sosta",
      "La fermata volontaria per fare scendere passeggeri",
      "L'interruzione della marcia per un guasto meccanico"
    ],
    correct: 0,
    explanation: "L'arresto è l'interruzione della marcia del veicolo dovuta ad esigenze della circolazione (ad esempio: semaforo rosso, precedenza, ingorgo). Non dipende dalla volontà del conducente ma dalla situazione della circolazione."
  },

  {
    id: 1607,
    chapter: 16,
    question: "Cosa si intende per 'fermata' nel Codice della Strada?",
    options: [
      "L'interruzione temporanea e volontaria della marcia del veicolo, di brevissima durata, per esigenze di traffico o per far salire/scendere passeggeri, senza mai arrecare intralcio alla circolazione",
      "L'interruzione della marcia per guasto",
      "Il parcheggio per tempo indeterminato",
      "L'interruzione obbligatoria ai semafori"
    ],
    correct: 0,
    explanation: "La fermata è l'interruzione temporanea e volontaria della marcia del veicolo di brevissima durata, per consentire la salita o la discesa dei passeggeri (o per altre esigenze del traffico), purché non arrechi intralcio alla circolazione. Il conducente rimane presente e pronto a ripartire."
  },

  {
    id: 1608,
    chapter: 16,
    question: "Cosa distingue la 'sosta' dalla 'fermata'?",
    options: [
      "La sosta è la sospensione della marcia del conducente per un tempo non definito, con possibilità di allontanarsi dal veicolo",
      "La sosta è solo per i mezzi pesanti",
      "La fermata dura più della sosta",
      "Non c'è differenza, sono sinonimi"
    ],
    correct: 0,
    explanation: "La sosta è la sospensione della marcia del conducente per un tempo non definito (non indefinito), con possibilità di allontanarsi dal veicolo. Si differenzia dalla fermata perché il conducente può lasciare il veicolo."
  },

  {
    id: 1609,
    chapter: 16,
    question: "Cosa si intende per 'sosta di emergenza'?",
    options: [
      "L'interruzione della marcia per avaria o per malessere fisico del conducente o di un passeggero",
      "La sosta in un'area di servizio autostradale",
      "La sosta autorizzata dalla polizia",
      "La fermata temporanea per fare benzina"
    ],
    correct: 0,
    explanation: "La sosta di emergenza (D) è l'interruzione della marcia per avaria o per malessere fisico del conducente o di un passeggero. È consentita anche dove normalmente sarebbe vietata."
  },

  {
    id: 1610,
    chapter: 16,
    question: "Durante la fermata, il conducente deve essere:",
    options: [
      "Presente e pronto a riprendere la marcia per non creare pericolo agli altri utenti",
      "Libero di allontanarsi per breve tempo",
      "In grado di abbandonare il veicolo indefinitamente",
      "Solo con il motore spento"
    ],
    correct: 0,
    explanation: "Durante la fermata il conducente deve essere presente e pronto a riprendere la marcia, adottando le cautele atte ad evitare incidenti. Non deve creare pericolo o intralcio agli altri utenti della strada."
  },

  // ── Posizione di Fermata e Sosta ─────────────────────────────────────────

  {
    id: 1611,
    chapter: 16,
    question: "In caso di fermata o sosta, il veicolo deve essere collocato:",
    options: [
      "Il più vicino possibile al margine destro della carreggiata, parallelamente ad esso",
      "Al centro della carreggiata",
      "Sul lato sinistro della strada",
      "In qualsiasi posizione purché con le 4 frecce"
    ],
    correct: 0,
    explanation: "In caso di fermata o di sosta il veicolo deve essere collocato il più vicino possibile al margine destro della carreggiata, parallelamente ad esso (salvo diversa segnalazione)."
  },

  {
    id: 1612,
    chapter: 16,
    question: "Qualora non esista un marciapiede, lo spazio libero per il transito dei pedoni deve essere:",
    options: [
      "Non inferiore a un metro",
      "Non inferiore a 50 cm",
      "Non inferiore a 2 metri",
      "Non è necessario lasciare spazio"
    ],
    correct: 0,
    explanation: "Qualora non esista marciapiede, deve essere lasciato uno spazio sufficiente per il transito dei pedoni, non inferiore a un metro."
  },

  {
    id: 1613,
    chapter: 16,
    question: "Fuori dei centri abitati, dove deve sostare il veicolo?",
    options: [
      "Sul margine destro della carreggiata o negli appositi spazi, in fermata o sosta deve essere collocato il più vicino possibile al margine destro",
      "Al centro della carreggiata con le 4 frecce",
      "In qualsiasi punto della carreggiata",
      "Sul lato sinistro"
    ],
    correct: 0,
    explanation: "Fuori dei centri abitati (e sulle strade urbane di scorrimento), i veicoli devono parcheggiare il più vicino possibile al margine destro e negli appositi spazi assistenti (o su corsie riservate al parcheggio). Non si deve sostare sulla carreggiata."
  },

  {
    id: 1614,
    chapter: 16,
    question: "Nelle strade urbane a senso unico, il veicolo in sosta può essere collocato anche:",
    options: [
      "Sul margine sinistro della carreggiata (salvo diversa segnalazione)",
      "Solo sul margine destro",
      "Solo in doppia fila",
      "Solo negli spazi marcati P"
    ],
    correct: 0,
    explanation: "Nelle strade urbane a senso unico la sosta è consentita purché rimanga uno spazio sufficiente alla circolazione; il veicolo può essere collocato lungo il margine sinistro della carreggiata (salvo diversa segnalazione)."
  },

  {
    id: 1615,
    chapter: 16,
    question: "In zona con segnaletica orizzontale (stalli delimitati), il veicolo deve essere parcheggiato:",
    options: [
      "Entro gli spazi contrassegnati, senza invadere gli spazi degli altri veicoli",
      "Anche occupando più di uno stallo se il veicolo è grande",
      "Lasciando il motore acceso",
      "Solo se ci sono posti liberi nel parcheggio"
    ],
    correct: 0,
    explanation: "Dove esistono appositi spazi delimitati dalla segnaletica orizzontale (stalli), il conducente deve parcheggiare entro uno di tali spazi, senza invadere gli spazi contigui degli altri veicoli."
  },

  // ── Apertura delle Portiere ───────────────────────────────────────────────

  {
    id: 1616,
    chapter: 16,
    question: "È vietato aprire le portiere di un veicolo se ciò costituisce pericolo o intralcio. Prima di aprire lo sportello, il conducente deve:",
    options: [
      "Verificare tramite lo specchietto retrovisore che non sopraggiungano altri veicoli",
      "Aprire direttamente senza controllare",
      "Solo guardare nel lato sinistro",
      "Solo usare le frecce di pericolo"
    ],
    correct: 0,
    explanation: "È vietato aprire le portiere se ciò può costituire pericolo o intralcio per gli altri utenti della strada. Prima di aprire lo sportello (M), si deve controllare tramite lo specchietto retrovisore che non sopraggiungano veicoli che non si siano assicurati, e dall'altro lato verso il marciapiede."
  },

  {
    id: 1617,
    chapter: 16,
    question: "Aprire lo sportello di un veicolo in sosta in una strada urbana stretta richiede attenzione:",
    options: [
      "Anche al passeggero che scende, bisogna fare attenzione ai veicoli che provengono di fronte",
      "Solo alle biciclette in senso opposto",
      "Solo ai veicoli da destra",
      "Non è necessario controllare in strada stretta"
    ],
    correct: 0,
    explanation: "In una strada urbana stretta, si deve fare particolare attenzione, sia al lato verso il marciapiede che ai veicoli che sopraggiungono. Anche al passeggero che scende: bisogna prestare attenzione ai pedoni che sopraggiungono (o ai veicoli se si è parcheggiati sul lato sinistro di una strada a senso unico), prima di aprire la portiera del lato del passeggero."
  },

  {
    id: 1618,
    chapter: 16,
    question: "È mai vietato lasciare aperte le porte del veicolo in transito?",
    options: [
      "Sì, è sempre vietato (altresì vietato se non sopraggiungono veicoli da dietro)",
      "No, è consentito se si procede lentamente",
      "Solo se si è in autostrada",
      "Solo di notte"
    ],
    correct: 0,
    explanation: "È vietato aprire le porte del veicolo (o mantenerle aperte) se ciò non sia assicurato che non costituisca pericolo o intralcio per gli altri utenti della strada. Il veicolo in transito con le porte aperte è sempre pericoloso."
  },

  // ── Divieti di Fermata e/o di Sosta ──────────────────────────────────────

  {
    id: 1619,
    chapter: 16,
    question: "Sono vietate la fermata e la sosta in curva?",
    options: [
      "Sì, nelle curve, sui dossi e in loro prossimità, anche su strade urbane",
      "No, sono vietate solo in autostrada",
      "Solo di notte",
      "Solo per i veicoli pesanti"
    ],
    correct: 0,
    explanation: "Sono vietate la fermata e la sosta nelle curve, sui dossi e in loro prossimità, anche in prossimità, anche su strade urbane di scorrimento."
  },

  {
    id: 1620,
    chapter: 16,
    question: "La sosta è vietata in prossimità e in corrispondenza dei passaggi pedonali?",
    options: [
      "Sì, è vietata la fermata e la sosta in corrispondenza e in prossimità dei passaggi pedonali",
      "No, si può sostare purché si lasci 1 metro di spazio",
      "Solo se ci sono pedoni",
      "Solo nella zona davanti al passaggio"
    ],
    correct: 0,
    explanation: "Sono vietate la fermata e la sosta: in corrispondenza e in prossimità dei passaggi pedonali; in prossimità dei passaggi a livello."
  },

  {
    id: 1621,
    chapter: 16,
    question: "In prossimità dei segnali stradali o semaforici, la sosta è vietata perché:",
    options: [
      "Potrebbe nasconderli e occultarli alla vista degli altri conducenti",
      "Potrebbe danneggiare il segnale",
      "Non c'è spazio sufficiente",
      "È vietata solo di notte"
    ],
    correct: 0,
    explanation: "È vietata la fermata o la sosta in prossimità e in corrispondenza dei segnali stradali o semaforici in modo da occultarli (nasconderli) alla vista."
  },

  {
    id: 1622,
    chapter: 16,
    question: "Sotto i sottopassaggi (sottovia) e sotto i fornici/portici la sosta è:",
    options: [
      "Vietata, salvo diversa segnalazione",
      "Consentita per breve tempo",
      "Consentita solo di notte",
      "Consentita purché si tengano le 4 frecce"
    ],
    correct: 0,
    explanation: "Sono vietate la fermata e la sosta: nei sottopassaggi (salvo diversa segnalazione); sotto i fornici e i portici e sui marciapiedi (salvo diversa segnalazione)."
  },

  {
    id: 1623,
    chapter: 16,
    question: "Sulle piste ciclabili e al loro sbocco, la fermata e la sosta sono:",
    options: [
      "Vietate",
      "Consentite se non ci sono ciclisti",
      "Consentite per meno di 5 minuti",
      "Solo vietate per i veicoli pesanti"
    ],
    correct: 0,
    explanation: "Sono vietate la fermata e la sosta: sulle piste ciclabili e al loro sbocco (uscita sulla strada). Sostare su una pista ciclabile crea pericolo per i ciclisti."
  },

  {
    id: 1624,
    chapter: 16,
    question: "In prossimità delle linee tranviarie o ferroviarie, la sosta è vietata:",
    options: [
      "Quando si è così vicini da ostruire il transito del veicolo su rotaia (tram)",
      "Solo se passa il tram",
      "Solo di notte",
      "Non è mai vietata vicino ai tram"
    ],
    correct: 0,
    explanation: "È vietata la fermata o la sosta in prossimità di linee tranviarie o ferroviarie, anche se vicini ad essi da intralciare la marcia del veicolo su rotaia (tram)."
  },

  {
    id: 1625,
    chapter: 16,
    question: "Sulle corsie di accelerazione e decelerazione la fermata e la sosta sono:",
    options: [
      "Vietate",
      "Consentite solo per emergenza",
      "Consentite per meno di 3 minuti",
      "Consentite se non ci sono altri veicoli"
    ],
    correct: 0,
    explanation: "Sono vietate la fermata e la sosta sulle corsie di accelerazione e decelerazione (le corsie usate per entrare e uscire dalle strade principali)."
  },

  {
    id: 1626,
    chapter: 16,
    question: "In presenza dell'apposito segnale, la sosta è:",
    options: [
      "Regolata dal segnale stesso — il conducente deve rispettare le indicazioni del segnale",
      "Sempre permessa per 30 minuti",
      "Sempre vietata in ogni caso",
      "Permessa solo ai residenti"
    ],
    correct: 0,
    explanation: "In presenza dell'apposito segnale stradale (es. segnale di divieto di sosta, di zona disco, parchimetro, ecc.), la sosta è regolata dalle indicazioni dello specifico segnale che il conducente deve rispettare."
  },

  {
    id: 1627,
    chapter: 16,
    question: "Talvolta la fermata e la sosta è ammessa in aree ove è invece vietata la sosta protratta, a condizione che:",
    options: [
      "Il conducente di allontani e il motore abbia la possibilità di funzionare (non è ammesso l'accesso neanche per aria condizionata)",
      "Il veicolo sia in doppia fila",
      "Si usi il disco orario come indicato",
      "Si tengano accese le 4 frecce"
    ],
    correct: 0,
    explanation: "Talvolta la fermata e la sosta è ammessa in zone dove altrimenti è vietata, a condizione che il conducente sia presente e pronto a riprendere la marcia. La sosta protratta (abbandonare il veicolo per tempo non definito) è invece vietata in quelle aree."
  },

  {
    id: 1628,
    chapter: 16,
    question: "La sosta nelle zone con segnalazione orizzontale (stalli): i veicoli devono parcheggiare:",
    options: [
      "Entro uno degli appositi spazi delimitati, senza invadere gli spazi degli altri veicoli vicini",
      "In qualsiasi posizione purchè non ostruiscano i marciapiedi",
      "Diagonalmente per occupare meno spazio",
      "Solo in doppia fila se gli stalli sono occupati"
    ],
    correct: 0,
    explanation: "Dove esistono stalli (spazi delimitati dalla segnaletica orizzontale), il conducente deve parcheggiare entro uno di tali spazi (stalli), senza invadere gli spazi degli altri veicoli vicini."
  },

  {
    id: 1629,
    chapter: 16,
    question: "Uno specchietto retrovisore esterno, se non adeguatamente regolato, causa:",
    options: [
      "Un punto cieco (zona non visibile) che può portare a incidenti durante le manovre",
      "Solo un difetto estetico",
      "Aumento dei consumi",
      "Nessun problema se si controlla solo lo specchietto interno"
    ],
    correct: 0,
    explanation: "Prima di partire, è fondamentale regolare gli specchi retrovisori (interni ed esterni) per avere la massima visibilità e ridurre i punti ciechi. Uno specchietto mal posizionato può portare ad incidenti durante le manovre di cambio corsia o parcheggio."
  },

  {
    id: 1630,
    chapter: 16,
    question: "Quale dei seguenti NON è un documento obbligatorio da avere con sé alla guida?",
    options: [
      "Il certificato di proprietà del veicolo",
      "La patente di guida in corso di validità",
      "La carta di circolazione",
      "Il certificato di assicurazione R.C.A."
    ],
    correct: 0,
    explanation: "I documenti obbligatori da avere con sé alla guida sono: patente di guida valida, carta di circolazione e certificato di assicurazione R.C.A. Il certificato di proprietà non è obbligatorio portarlo con sé durante la guida (anche se utile)."
  },


  // ── Immobilità del Veicolo in Sosta (p.187) ──────────────────────────────

  {
    id: 1631,
    chapter: 16,
    question: "Per garantire l'immobilità del veicolo in sosta, il conducente deve:",
    options: [
      "Spegnere il motore, inserire il freno di stazionamento (freno a mano) e mettere la marcia inserita (o la posizione P)",
      "Solo spegnere il motore",
      "Solo mettere le 4 frecce",
      "Solo chiudere le portiere"
    ],
    correct: 0,
    explanation: "Per garantire l'immobilità del veicolo in sosta, il conducente deve: spegnere il motore, azionare il freno di stazionamento (freno a mano) e inserire una marcia (o la posizione P per i veicoli con cambio automatico), indipendentemente dal grado di pendenza della strada."
  },

  {
    id: 1632,
    chapter: 16,
    question: "Nelle zone a tempo limitato regolate dal disco orario, i conducenti devono:",
    options: [
      "Segnalare l'orario di arrivo sul disco orario in modo visibile (J), aggiornarlo se la sosta ha avuto inizio prima che scada",
      "Solo esporre il parchimetro",
      "Non sono obbligati ad esporre nulla",
      "Solo rispettare il limite di velocità della zona"
    ],
    correct: 0,
    explanation: "Nelle zone a tempo limitato regolamentate dal disco orario (J), i conducenti devono esporre il disco orario segnalando l'orario di arrivo in modo visibile, aggiornandolo senza che il veicolo venga spostato. Le persone di servizio di tempo stabilite per la sosta possono essere non obbligate a rispettarla."
  },

  {
    id: 1633,
    chapter: 16,
    question: "Il parchimetro (K) deve essere utilizzato in modo che:",
    options: [
      "Il dispositivo di controllo sia ben visibile (anche se la sosta è di breve durata, cioè semplice fermata), esponendolo nell'apposito tagliando",
      "Solo quando si supera l'orario a pagamento",
      "Solo nelle ore serali",
      "Non è necessario se si rimane meno di 10 minuti"
    ],
    correct: 0,
    explanation: "Quando richiesto, bisogna utilizzare il parchimetro (dispositivo di controllo della sosta). Il tagliando deve essere esposto in modo ben visibile (K) nel veicolo, anche in caso di semplice fermata, e deve indicare il tempo di sosta già pagato."
  },

  // ── Divieti aggiuntivi — p.190 ────────────────────────────────────────────

  {
    id: 1634,
    chapter: 16,
    question: "In prossimità delle intersezioni su strade extraurbane, a quanti metri minimo è vietata la sosta?",
    options: [
      "A meno di 5 metri dall'intersezione (nei centri abitati il limite può essere diverso)",
      "A meno di 10 metri",
      "A meno di 2 metri",
      "Non esiste un limite specifico sulle strade extraurbane"
    ],
    correct: 0,
    explanation: "In corrispondenza e in prossimità delle intersezioni su strade extraurbane è vietata la sosta a meno di 5 metri dall'intersezione stessa."
  },

  {
    id: 1635,
    chapter: 16,
    question: "Sulle isole di traffico (quelle aree di sicurezza al centro della carreggiata) la fermata e la sosta sono:",
    options: [
      "Vietate",
      "Consentite per breve tempo",
      "Consentite solo per i motocicli",
      "Consentite se non ostacola il traffico"
    ],
    correct: 0,
    explanation: "Sono vietate la fermata e la sosta sulle isole di traffico (isolotti o spartitraffico al centro della carreggiata)."
  },

  {
    id: 1636,
    chapter: 16,
    question: "In corrispondenza dei segnali orizzontali di preselezione e lungo le corsie di canalizzazione, è vietata:",
    options: [
      "La sosta (ma non la fermata)",
      "Solo la fermata",
      "Sia la fermata che la sosta",
      "Nessun divieto in queste zone"
    ],
    correct: 0,
    explanation: "In corrispondenza dei segnali orizzontali di preselezione e lungo le corsie di canalizzazione è vietata la sosta (ma non la fermata). I conducenti possono fermarsi brevemente ma non parcheggiare in tali zone."
  },

  {
    id: 1637,
    chapter: 16,
    question: "Allo sbocco dei passi carrabili (uscite private), la sosta è:",
    options: [
      "Vietata, per non bloccare l'accesso ai veicoli che devono entrare o uscire",
      "Consentita se si lascia 1 metro",
      "Consentita solo di notte",
      "Consentita purché si rimanga vicino al veicolo"
    ],
    correct: 0,
    explanation: "Sono vietate la fermata e la sosta allo sbocco dei passi carrabili (uscite e ingressi delle proprietà private), per non ostacolare i veicoli che devono accedere o uscire."
  },

  {
    id: 1638,
    chapter: 16,
    question: "Negli spazi riservati alla fermata o allo stazionamento di autobus, filobus e tram, la sosta è:",
    options: [
      "Vietata; la sosta è vietata anche a meno di 15 metri (prima e dopo) dal segnale di fermata degli autobus",
      "Consentita se non ci sono autobus",
      "Consentita solo brevemente",
      "Vietata solo nelle ore di punta"
    ],
    correct: 0,
    explanation: "Sono vietate la fermata e la sosta negli spazi riservati alla fermata e allo stazionamento di autobus, filobus e veicoli circolanti su rotaia (tram), nonché sulle carreggiate o corsie riservate ai mezzi pubblici. La sosta è vietata anche a meno di 15 metri (prima e dopo) dal segnale di fermata degli autobus."
  },

  // ── Divieti aggiuntivi — p.191 ────────────────────────────────────────────

  {
    id: 1639,
    chapter: 16,
    question: "Negli spazi riservati alla sosta delle persone invalide (disabili), la sosta è:",
    options: [
      "Vietata ai veicoli non autorizzati; è consentita solo ai veicoli al servizio di persone invalide",
      "Consentita a tutti se lo spazio per invalidi è libero da più di 30 minuti",
      "Consentita solo di notte",
      "Consentita per meno di 5 minuti"
    ],
    correct: 0,
    explanation: "Negli spazi riservati alla sosta dei veicoli per persone invalide (contrassegnati dall'apposita segnaletica) è vietata la sosta ai veicoli non autorizzati. La sosta in questi spazi da parte di veicoli non autorizzati comporta anche la perdita di punti dalla patente."
  },

  {
    id: 1640,
    chapter: 16,
    question: "In corrispondenza e in prossimità dei distributori di carburante (benzina), la sosta è:",
    options: [
      "Vietata (fino a 5 posti e in loro prossimità, prima e dopo)",
      "Consentita per fare benzina",
      "Consentita per meno di 3 minuti",
      "Non esiste un divieto specifico"
    ],
    correct: 0,
    explanation: "Sono vietate la fermata e la sosta in corrispondenza e in prossimità dei distributori di carburante (fino a 5 metri e in loro prossimità, prima e dopo), per consentire l'accesso ai distributori stessi."
  },

  {
    id: 1641,
    chapter: 16,
    question: "Nelle aree destinate al mercato e allo scarico/carico di merci, la sosta è:",
    options: [
      "Vietata, limitatamente alle ore stabilite dalla segnaletica",
      "Sempre vietata in ogni ora",
      "Consentita per meno di 15 minuti",
      "Solo i commercianti possono sostare"
    ],
    correct: 0,
    explanation: "Sono vietate la fermata e la sosta nelle aree destinate al mercato e al veicolo carico e scarico di cose, limitatamente alle ore stabilite dalla segnaletica apposita."
  },

  {
    id: 1642,
    chapter: 16,
    question: "Negli spazi destinati ai servizi di emergenza o igiene pubblica (es. ambulanze, nettezza urbana), la sosta è:",
    options: [
      "Vietata, indicati dall'apposita segnaletica",
      "Consentita fuori orario di servizio",
      "Consentita per breve tempo",
      "Solo vietata per i veicoli pesanti"
    ],
    correct: 0,
    explanation: "Sono vietate la fermata e la sosta negli spazi destinati ai servizi di emergenza o di igiene pubblica, indicati dall'apposita segnaletica stradale."
  },

  // ── Divieti aggiuntivi — p.192 ────────────────────────────────────────────

  {
    id: 1643,
    chapter: 16,
    question: "Sulle banchine (il tratto di strada oltre la corsia ma prima del fosso), la fermata e la sosta sono:",
    options: [
      "Vietate, salvo diversa segnalazione",
      "Sempre consentite",
      "Consentite solo di notte",
      "Vietate solo sulle autostrade"
    ],
    correct: 0,
    explanation: "Sono vietate la fermata e la sosta sulle banchine (salvo diversa segnalazione). Le banchine sono riservate principalmente ai pedoni e non al parcheggio dei veicoli."
  },

  {
    id: 1644,
    chapter: 16,
    question: "Nelle zone a traffico limitato (ZTL), la sosta è:",
    options: [
      "Vietata ai veicoli non autorizzati",
      "Consentita a tutti per un massimo di 1 ora",
      "Consentita a tutti fuori dall'orario di attivazione della ZTL",
      "Vietata solo ai camion"
    ],
    correct: 0,
    explanation: "Nelle zone a traffico limitato (ZTL) la sosta è vietata ai veicoli non autorizzati. Solo i veicoli con apposita autorizzazione possono accedere e sostare in tali zone."
  },

  {
    id: 1645,
    chapter: 16,
    question: "I rimorchi staccati dalla motrice nei centri abitati:",
    options: [
      "Non devono essere lasciati in sosta, salvo diversa segnalazione",
      "Possono essere parcheggiati ovunque",
      "Possono sostare nelle aree di sosta normale",
      "Possono restare senza limite di tempo nei centri abitati"
    ],
    correct: 0,
    explanation: "Nei centri abitati, ai rimorchi staccati dalla motrice è vietata la sosta, salvo diversa segnalazione. I rimorchi devono essere segnalati e non possono essere lasciati incustoditi per tempo indeterminato nei centri urbani."
  },

  {
    id: 1646,
    chapter: 16,
    question: "Davanti ai cassonetti dei rifiuti urbani o contenitori analoghi, la sosta è:",
    options: [
      "Vietata, per non ostacolare la raccolta dei rifiuti",
      "Consentita se non ci sono camion della nettezza",
      "Consentita per meno di 30 minuti",
      "Solo vietata nelle ore di raccolta"
    ],
    correct: 0,
    explanation: "Sono vietate la fermata e la sosta davanti ai cassonetti dei rifiuti urbani o contenitori analoghi, per non ostacolare le operazioni di raccolta dei rifiuti da parte dei veicoli preposti."
  },

  {
    id: 1647,
    chapter: 16,
    question: "La sosta in doppia fila (seconda fila) nei centri abitati è:",
    options: [
      "Vietata dalle ore 8 alle ore 20 (o negli orari e giorni indicati dai segnali specifici B e C)",
      "Sempre consentita se si rimane vicino al veicolo",
      "Consentita di notte in tutti i centri abitati",
      "Permessa solo per meno di 5 minuti"
    ],
    correct: 0,
    explanation: "La sosta in doppia (seconda) fila è vietata nei centri abitati dalle ore 8 alle ore 20 (o nelle ore e nei giorni di validità indicati dai segnali specifici – B e C). Lungo le strade extraurbane è vietata per tutte le 24 ore."
  },

  {
    id: 1648,
    chapter: 16,
    question: "La rimozione forzata del veicolo avviene quando:",
    options: [
      "La sosta sia lasciata in violazione di tale divieto, per consentire la pulizia delle strade o la sicurezza della circolazione",
      "Solo in caso di veicolo abbandonato da più di 7 giorni",
      "Solo se il conducente non è reperibile",
      "Solo su richiesta esplicita di altri automobilisti"
    ],
    correct: 0,
    explanation: "La rimozione forzata del veicolo avviene per ordine degli organi di polizia quando: il veicolo sia lasciato in sosta in violazione di un segnale di divieto; per consentire la pulizia delle strade; per la rimozione del veicolo in doppia fila; o su corsie riservate ai disabili."
  },

  {
    id: 1649,
    chapter: 16,
    question: "Sulle carreggiate delle strade a precedenza, la sosta è:",
    options: [
      "Vietata",
      "Consentita con disco orario",
      "Consentita solo di domenica",
      "Consentita purché si mettano le 4 frecce"
    ],
    correct: 0,
    explanation: "Sulle carreggiate delle strade a precedenza (indicate dall'apposito segnale stradale) è vietata la sosta. Questa regola si applica per garantire la fluidità del traffico sulla via avente la precedenza."
  },

  {
    id: 1650,
    chapter: 16,
    question: "Nelle aree pedonali urbane o nelle isole pedonali, la sosta è:",
    options: [
      "Vietata ai veicoli a motore (salvo autorizzazioni speciali)",
      "Consentita solo di notte",
      "Consentita solo per i residenti",
      "Consentita purché si rimanga meno di 30 minuti"
    ],
    correct: 0,
    explanation: "Nelle aree pedonali urbane e nelle isole pedonali la sosta dei veicoli a motore è vietata, salvo specifiche autorizzazioni. Queste zone sono riservate ai pedoni per garantirne la sicurezza e la libertà di movimento."
  },

];
