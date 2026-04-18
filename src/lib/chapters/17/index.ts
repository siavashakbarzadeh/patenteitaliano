// ─────────────────────────────────────────────────────────────────────────────
//  CAPITOLO 17 – Ingombro Carreggiata · Segnale di Veicolo Fermo ·
//               Circolazione in Autostrada · Trasporto Persone e Cose · Traino
// ─────────────────────────────────────────────────────────────────────────────

import type { Question } from "@/lib/types";

export const chapter17Questions: Question[] = [

  // ── 17.1 Ingombro della Carreggiata ──────────────────────────────────────

  {
    id: 1701,
    chapter: 17,
    question: "In caso di ingombro della carreggiata per avaria del veicolo, qual è il primo obbligo del conducente?",
    options: [
      "Rendere assolutamente libero il traffico, spostando o spingendo il veicolo fuori dalla carreggiata o sul margine destro",
      "Fermarsi e aspettare i soccorsi",
      "Accendere le luci di emergenza e restare nel veicolo",
      "Chiamare la polizia prima di fare qualsiasi cosa"
    ],
    correct: 0,
    explanation: "In caso di ingombro della carreggiata per avaria del veicolo, per caduta accidentale del carico o per altra causa, il conducente deve rendere assolutamente libero il traffico della carreggiata, provvedendo a rimuovere o spostare tempestivamente l'ingombro e/o a spingere il veicolo fuori dalla carreggiata, o se ciò non è possibile, collocandolo sul margine destro."
  },

  {
    id: 1702,
    chapter: 17,
    question: "Nel caso di caduta o spargimento di sostanze pericolose sulla carreggiata, i conducenti/passeggeri devono:",
    options: [
      "Presegnalare l'ostacolo con il triangolo, fare segnali manuali di avviso e rimuovere le sostanze o ripristinare l'aderenza",
      "Solo chiamare i soccorsi senza toccare nulla",
      "Fermarsi in prima posizione e restare nel veicolo",
      "Solo accendere le 4 frecce"
    ],
    correct: 0,
    explanation: "In caso di caduta/spargimento di sostanze pericolose, di ingombro non removibile o di veicoli danneggiati, i conducenti/passeggeri devono: 1) presegnalare l'ostacolo con il triangolo; 2) effettuare segnali manuali di avviso; 3) rimuovere le sostanze o spargere sabbia/terra/segatura per ripristinare l'aderenza; 4) avvisare l'ente proprietario della strada o la polizia."
  },

  {
    id: 1703,
    chapter: 17,
    question: "Quando la zona pericolosa è poco visibile (es. in curva), il conducente o un suo incaricato deve:",
    options: [
      "Effettuare segnali manuali di avviso per impedire il transito dei veicoli sopraggiungenti",
      "Solo usare il clacson",
      "Aspettare che altri automobilisti avvisino",
      "Non è necessario fare nulla di speciale"
    ],
    correct: 0,
    explanation: "Se la zona risulta poco visibile (per esempio in curva), occorre effettuare segnali manuali di avviso, eseguiti dal conducente o da un suo incaricato, per impedire il transito dei veicoli sopraggiungenti sulla zona pericolosa."
  },

  // ── 17.2 Segnale di Veicolo Fermo (Triangolo) ────────────────────────────

  {
    id: 1704,
    chapter: 17,
    question: "Il segnale mobile di pericolo (triangolo) riproduce in piccolo il segnale:",
    options: [
      "ALTRI PERICOLI, ed è munito di apposita struttura che lo mantiene in posizione verticale",
      "STOP",
      "DARE PRECEDENZA",
      "LIMITE DI VELOCITÀ"
    ],
    correct: 0,
    explanation: "La segnalazione di veicolo fermo consiste nel segnale mobile di pericolo (triangolo) che, di norma, riproduce in piccolo il segnale ALTRI PERICOLI ed è munito di apposita struttura (sostegno) che lo mantiene in posizione verticale o quasi."
  },

  {
    id: 1705,
    chapter: 17,
    question: "A quale distanza minima dal veicolo fermo deve essere posizionato il triangolo sulle strade normali?",
    options: [
      "Ad almeno 50 metri",
      "Ad almeno 10 metri",
      "Ad almeno 100 metri",
      "Ad almeno 20 metri"
    ],
    correct: 0,
    explanation: "Il segnale mobile di pericolo deve essere posto dietro al veicolo fermo ad almeno 50 metri. Su autostrade e strade extraurbane principali, ad almeno 100 metri."
  },

  {
    id: 1706,
    chapter: 17,
    question: "A quale distanza minima deve essere posizionato il triangolo in autostrada o su strade extraurbane principali?",
    options: [
      "Ad almeno 100 metri dal veicolo fermo",
      "Ad almeno 50 metri",
      "Ad almeno 30 metri",
      "Ad almeno 200 metri"
    ],
    correct: 0,
    explanation: "Su autostrade e strade extraurbane principali, il triangolo deve essere posto ad almeno 100 metri dal veicolo fermo o dal carico caduto."
  },

  {
    id: 1707,
    chapter: 17,
    question: "A quale distanza deve essere visibile il triangolo dai veicoli sopraggiungenti?",
    options: [
      "Ad almeno 100 metri",
      "Ad almeno 50 metri",
      "Ad almeno 200 metri",
      "Solo nelle ore notturne"
    ],
    correct: 0,
    explanation: "Il triangolo deve essere pienamente visibile dai veicoli sopraggiungenti ad una distanza di almeno 100 metri."
  },

  {
    id: 1708,
    chapter: 17,
    question: "In caso di intersezione (incrocio) a distanza inferiore a 50 metri dal veicolo fermo, dove va posto il triangolo?",
    options: [
      "Dietro al veicolo nella posizione più idonea a essere avvistato",
      "Sull'incrocio stesso",
      "A 100 metri prima dell'incrocio",
      "Non è necessario in questo caso"
    ],
    correct: 0,
    explanation: "Nel caso di intersezione (incrocio) a distanza inferiore a 50 metri, il segnale mobile triangolare di pericolo deve essere posto dietro al veicolo nella posizione più idonea a essere avvistato."
  },

  {
    id: 1709,
    chapter: 17,
    question: "Dove deve essere posizionato il triangolo rispetto alla carreggiata?",
    options: [
      "Sulla corsia occupata dal veicolo fermo, ad almeno 1 metro dal bordo esterno della carreggiata",
      "Sul bordo del ciglio della strada",
      "In mezzo alla corsia opposta",
      "A lato della carreggiata, sempre sul marciapiede"
    ],
    correct: 0,
    explanation: "Il segnale mobile triangolare di pericolo deve essere posto sulla corsia occupata dal veicolo fermo o dal carico caduto, ad almeno un metro dal bordo esterno della carreggiata."
  },

  {
    id: 1710,
    chapter: 17,
    question: "Il triangolo di emergenza deve resistere alla caduta causata da:",
    options: [
      "Il vento o lo spostamento d'aria dei veicoli in transito",
      "La pioggia",
      "Il ghiaccio sulla strada",
      "I pedoni che passano vicino"
    ],
    correct: 0,
    explanation: "Il triangolo deve essere appoggiato stabilmente, in modo da non cadere per il vento o per lo spostamento d'aria dei veicoli in transito."
  },

  {
    id: 1711,
    chapter: 17,
    question: "Quando è obbligatorio usare il triangolo di emergenza di giorno?",
    options: [
      "Quando il veicolo fermo non può essere visto nettamente ad almeno 100 metri da coloro che sopraggiungono",
      "Solo se il veicolo è completamente bloccato",
      "Solo se ci sono passeggeri a bordo",
      "Non è mai obbligatorio di giorno"
    ],
    correct: 0,
    explanation: "Di giorno: in ogni caso in cui il veicolo fermo non possa essere visto nettamente ad almeno 100 metri di distanza da coloro che sopraggiungono (curva, dosso, ecc.)."
  },

  {
    id: 1712,
    chapter: 17,
    question: "Quando è obbligatorio usare il triangolo di emergenza sia di giorno che di notte in autostrada?",
    options: [
      "Quando il veicolo non può essere spostato sulla corsia di emergenza o piazzola di sosta",
      "Solo quando ci sono altri veicoli bloccati",
      "Solo di notte sulle autostrade",
      "Solo quando manca corrente elettrica"
    ],
    correct: 0,
    explanation: "Di giorno e di notte: in autostrada o su strade extraurbane principali, quando il veicolo non possa essere spostato sulla corsia di emergenza o sulla piazzola di sosta."
  },

  {
    id: 1713,
    chapter: 17,
    question: "Di notte, il triangolo è obbligatorio quando i veicoli non sono visibili a sufficiente distanza. Quali altre condizioni lo rendono obbligatorio di notte?",
    options: [
      "Quando mancano o sono insufficienti le luci posteriori di posizione o di emergenza, o in ogni caso di caduta del carico",
      "Solo nelle gallerie",
      "Solo in autostrada",
      "Solo se nevica"
    ],
    correct: 0,
    explanation: "Di notte: quando i veicoli non siano visibili a sufficiente distanza da coloro che sopraggiungono da dietro, quando manchino o siano insufficienti le luci posteriori di posizione o di emergenza o in ogni caso di caduta del carico."
  },

  // ── Giubbotto ad Alta Visibilità ─────────────────────────────────────────

  {
    id: 1714,
    chapter: 17,
    question: "Il giubbotto ad alta visibilità deve essere indossato dal conducente durante le operazioni di presegnalazione fuori dai centri abitati?",
    options: [
      "Sì, il conducente deve rendersi visibile mediante giubbotto o bretelle retroriflettenti di tipo approvato",
      "No, è facoltativo",
      "Solo se è di colore giallo obbligatoriamente",
      "Solo di notte"
    ],
    correct: 0,
    explanation: "Durante le operazioni di presegnalazione con il segnale mobile di pericolo, il conducente deve rendersi visibile agli altri utenti della strada mediante giubbotto o bretelle retroriflettenti ad alta visibilità di tipo approvato (non obbligatoriamente di colore giallo)."
  },

  {
    id: 1715,
    chapter: 17,
    question: "Il giubbotto retroriflettente deve essere indossato anche quando il conducente si trovi su:",
    options: [
      "Corsia di emergenza o piazzola di sosta",
      "Solo sulla corsia normale",
      "Solo nei centri abitati",
      "Solo nelle gallerie"
    ],
    correct: 0,
    explanation: "Il giubbotto deve essere indossato dal conducente anche quando si trovi su corsia di emergenza o piazzola di sosta. L'obbligo del giubbotto ad alta visibilità non si estende al conducente fermo sulla carreggiata in un centro abitato."
  },

  {
    id: 1716,
    chapter: 17,
    question: "L'obbligo del giubbotto ad alta visibilità si estende al conducente fermo sulla carreggiata in un centro abitato?",
    options: [
      "No, l'obbligo non si estende al conducente fermo in un centro abitato",
      "Sì, sempre e ovunque",
      "Solo di notte nei centri abitati",
      "Solo se c'è nebbia nei centri abitati"
    ],
    correct: 0,
    explanation: "L'obbligo dell'uso del giubbotto ad alta visibilità non si estende al conducente fermo sulla carreggiata in un centro abitato."
  },

  // ── 17.3 Circolazione in Autostrada ──────────────────────────────────────

  {
    id: 1717,
    chapter: 17,
    question: "Come si riconoscono i segnali autostradali rispetto alle strade extraurbane principali?",
    options: [
      "Le autostrade hanno segnali con fondo verde, le strade extraurbane principali con fondo blu",
      "Le autostrade hanno segnali con fondo blu, le strade extraurbane con fondo verde",
      "Entrambe hanno segnali con fondo giallo",
      "Non c'è differenza nel colore dei segnali"
    ],
    correct: 0,
    explanation: "Sulle autostrade i segnali hanno fondo verde, sulle strade extraurbane principali fondo blu."
  },

  {
    id: 1718,
    chapter: 17,
    question: "Quali veicoli NON possono circolare sulle autostrade e sulle strade extraurbane principali?",
    options: [
      "Velocipedi, ciclomotori, motocicli di cilindrata inferiore a 120 cc, macchine agricole, veicoli con velocità massima inferiore al limite minimo",
      "Solo le macchine agricole",
      "Solo i ciclomotori",
      "Tutti i veicoli con motore sotto i 600 cc"
    ],
    correct: 0,
    explanation: "Sulle autostrade e sulle strade extraurbane principali è vietata la circolazione di: velocipedi, ciclomotori, motocicli di cilindrata inferiore a 120 cc, altri motoveicoli con velocità fino a 40 km/h, veicoli non muniti di pneumatici, macchine agricole, veicoli con velocità massima consentita inferiore al minimo stabilito."
  },

  {
    id: 1719,
    chapter: 17,
    question: "In autostrada, la corsia di sinistra (più vicina allo spartitraffico) è riservata a:",
    options: [
      "Solo sorpasso",
      "Marcia normale",
      "Veicoli pesanti",
      "Veicoli di emergenza"
    ],
    correct: 0,
    explanation: "In autostrada la carreggiata è divisa in corsie: la corsia di destra è per la marcia normale, la corsia di sinistra è riservata al solo sorpasso. I veicoli devono circolare nella corsia di destra e usare quella di sinistra solo per sorpassare."
  },

  {
    id: 1720,
    chapter: 17,
    question: "La corsia di emergenza in autostrada (sosta di emergenza) può essere usata:",
    options: [
      "Solo in caso di guasto o emergenza, non per la circolazione normale",
      "Dai veicoli lenti per non ostacolare il traffico",
      "Dai motocicli per sorpassare in colonna",
      "In qualsiasi momento se il traffico è congestionato"
    ],
    correct: 0,
    explanation: "La corsia di emergenza (sosta di emergenza) è riservata esclusivamente ai veicoli in avaria o emergenza. Circolarvi al di fuori dei casi previsti comporta la sospensione della patente."
  },

  {
    id: 1721,
    chapter: 17,
    question: "In autostrada e sulle strade extraurbane principali, è vietato:",
    options: [
      "Invertire il senso di marcia, circolare in retromarcia e usare il clacson salvo necessità assoluta",
      "Solo invertire il senso di marcia",
      "Solo circolare in retromarcia",
      "Solo usare il clacson"
    ],
    correct: 0,
    explanation: "Sulle autostrade (e strade extraurbane principali) nonché è vietato: usare dispositivi acustici (clacson) salvo casi di assoluta necessità immediata, circolare in retromarcia (salvo casi di forza maggiore), invertire il senso di marcia (es. usare gli svincoli per tornare indietro)."
  },

  {
    id: 1722,
    chapter: 17,
    question: "Come si accede ad un'autostrada?",
    options: [
      "Attraverso la corsia di accelerazione, immettendosi progressivamente nel traffico senza otturarla",
      "Fermandosi sulla corsia principale e aspettando uno spazio",
      "Direttamente dalla corsia di marcia normale",
      "Dalla corsia di sorpasso"
    ],
    correct: 0,
    explanation: "Si accede all'autostrada attraverso la rampa di accesso e la corsia di accelerazione, dove il veicolo acquista velocità per immettersi progressivamente nel traffico già in scorrimento sulla corsia principale."
  },

  {
    id: 1723,
    chapter: 17,
    question: "Come si esce da un'autostrada?",
    options: [
      "Attraverso la corsia di decelerazione, portandosi a destra in anticipo e riducendo la velocità",
      "Frenando bruscamente sulla corsia di marcia principale",
      "Dalla corsia di sorpasso",
      "Si può uscire in qualsiasi punto della carreggiata"
    ],
    correct: 0,
    explanation: "Per uscire dall'autostrada si usa la corsia di decelerazione: ci si porta a destra in anticipo e si rallenta progressivamente prima di uscire dallo svincolo."
  },

  {
    id: 1724,
    chapter: 17,
    question: "Cosa deve fare il conducente quando incontra il segnale del triangolo di pericolo móbile?",
    options: [
      "Moderare la velocità e proseguire con prudenza, togliendo il segnale al momento della cessazione della sosta o dell'ingombro",
      "Fermarsi immediatamente",
      "Accelerare per superare rapidamente la zona",
      "Chiamare la polizia senza toccare il triangolo"
    ],
    correct: 0,
    explanation: "Quando si incontra il segnale triangolare di pericolo, si deve moderare la velocità e proseguire con prudenza. L'utente deve aver cura di togliere il segnale al momento della cessazione della sosta o dell'ingombro."
  },

  // ── Triangolo — posizionamento sulla carreggiata ──────────────────────────

  {
    id: 1725,
    chapter: 17,
    question: "È necessario posizionare il triangolo anche in mezzo alla carreggiata?",
    options: [
      "Sì, se necessario va posto anche in mezzo alla carreggiata",
      "No, va sempre sul bordo della strada",
      "Solo in galleria",
      "Solo di notte"
    ],
    correct: 0,
    explanation: "Il triangolo deve essere posto sulla corsia occupata dal veicolo fermo, e se necessario anche in mezzo alla carreggiata."
  },

  {
    id: 1726,
    chapter: 17,
    question: "Fare parte dell'equipaggiamento obbligatorio degli autoveicoli, il giubbotto deve essere di tipo:",
    options: [
      "Omologato (tipo approvato), non obbligatoriamente di colore giallo",
      "Obbligatoriamente giallo fluorescente",
      "Di qualsiasi tipo purché visibile",
      "Solo di colore arancione"
    ],
    correct: 0,
    explanation: "Il giubbotto fa parte dell'equipaggiamento obbligatorio degli autoveicoli e deve essere di tipo omologato (tipo approvato). Non è obbligatoriamente di colore giallo."
  },

  {
    id: 1727,
    chapter: 17,
    question: "Quale segnale deve essere posto in mezzo alla carreggiata se necessario per la presegnalazione?",
    options: [
      "Il segnale mobile di pericolo (triangolo)",
      "Coni arancioni",
      "Solo la segnalazione luminosa di emergenza (hazard)",
      "Un cartello stradale fisso"
    ],
    correct: 0,
    explanation: "Il triangolo (segnale mobile di pericolo) deve essere posto sulla corsia occupata dal veicolo fermo o dal carico caduto; tale posizionamento è necessario anche in mezzo alla carreggiata."
  },

  {
    id: 1728,
    chapter: 17,
    question: "In autostrada, chi nota del materiale caduto sulla carreggiata (es. carico del camion) come deve comportarsi?",
    options: [
      "Riduce la velocità, accende le 4 frecce (hazard), evita il materiale pericoloso e avvisa la polizia/gestore autostradale",
      "Si ferma sul posto e aspetta la polizia",
      "Raccoglie il materiale dalla corsia",
      "Inverte il senso di marcia per evitare il pericolo"
    ],
    correct: 0,
    explanation: "In caso di pericolo (materiale caduto, ecc.), il conducente deve: ridurre la velocità, accendere le luci di emergenza (hazard), evitare l'ostacolo in sicurezza e avvisare immediatamente le autorità competenti (polizia, gestore autostradale). Non deve mai invertire il senso di marcia in autostrada."
  },

  {
    id: 1729,
    chapter: 17,
    question: "Il triangolo deve essere appoggiato stabilmente per non cadere a causa di:",
    options: [
      "Il vento o lo spostamento d'aria dei veicoli in transito",
      "Le vibrazioni dei veicoli sul fondo stradale",
      "La pioggia che scorre sulla strada",
      "Il peso dei veicoli che passano sopra"
    ],
    correct: 0,
    explanation: "Il triangolo deve essere appoggiato stabilmente, in modo da non cadere per il vento o per lo spostamento d'aria dei veicoli in transito."
  },

  {
    id: 1730,
    chapter: 17,
    question: "Cosa si intende per 'corsia di accelerazione' in autostrada?",
    options: [
      "La corsia che consente ai veicoli di acquisire velocità per immettersi nel flusso autostradale",
      "La corsia per i veicoli veloci",
      "La corsia di sorpasso riservata",
      "La corsia di emergenza"
    ],
    correct: 0,
    explanation: "La corsia di accelerazione è quella che consente al veicolo di acquisire velocità per immettersi progressivamente nel traffico della carreggiata principale dell'autostrada."
  },


  // ── Sosta e Fermata in Autostrada / Corsia di Emergenza ───────────────────

  {
    id: 1731,
    chapter: 17,
    question: "Lungo le autostrade e le strade extraurbane principali, quando è consentita la sosta?",
    options: [
      "Solo nelle apposite aree di servizio o di parcheggio, non è ammessa lungo la carreggiata",
      "In qualsiasi punto della corsia di emergenza",
      "Solo di notte sul margine destro",
      "Sempre, purché si tengano accese le luci di posizione"
    ],
    correct: 0,
    explanation: "Lungo le autostrade e le strade extraurbane principali sono vietate la fermata o la sosta salvo negli appositi spazi esistenti (aree di servizio o di parcheggio), salvo in caso di inattività del veicolo dovuta a inattività del veicolo o a malessere del conducente o dei passeggeri."
  },

  {
    id: 1732,
    chapter: 17,
    question: "In autostrada, il veicolo in avaria deve essere portato il prima possibile:",
    options: [
      "Sulla corsia di emergenza o, mancando questa, sulla prima piazzola nel senso di marcia",
      "Al centro della carreggiata con le 4 frecce accese",
      "Sul margine sinistro della carreggiata",
      "Fermato immediatamente nella corsia dove si trova"
    ],
    correct: 0,
    explanation: "In caso di avaria, il veicolo deve essere portato nel più breve tempo possibile sulla corsia di emergenza o, mancando questa, sulla prima piazzola nel senso di marcia, evitando comunque l'ingombro delle corsie di scorrimento."
  },

  {
    id: 1733,
    chapter: 17,
    question: "La sosta di emergenza in autostrada non deve protrarsi oltre le:",
    options: [
      "3 ore, decorso il termine il veicolo deve essere rimosso",
      "1 ora",
      "24 ore",
      "Non c'è limite di tempo"
    ],
    correct: 0,
    explanation: "La sosta di emergenza non deve essere mantenuta per il tempo strettamente necessario a risolvere l'emergenza stessa e non può protrarsi oltre le 3 ore. Decorso il termine il veicolo deve essere rimosso."
  },

  {
    id: 1734,
    chapter: 17,
    question: "Il conducente che sosta sulla corsia di emergenza in autostrada deve lasciare il veicolo per più di:",
    options: [
      "Il conducente non deve lasciare in sosta il veicolo per più di 24 ore, salvo eccezioni (alberghi, ecc.)",
      "12 ore",
      "3 ore",
      "Può lasciarlo per tutto il tempo che vuole"
    ],
    correct: 0,
    explanation: "Lungo le autostrade e le strade extraurbane principali, la sosta è consentita solo nelle apposite aree di servizio o di parcheggio; in tali aree, il conducente non deve lasciare in sosta il veicolo per più di 24 ore, ad eccezione che nei parcheggi riservati agli alberghi esistenti in ambito autostradale."
  },

  {
    id: 1735,
    chapter: 17,
    question: "In caso di ingorgo in autostrada, quando si può transitare sulla corsia di emergenza?",
    options: [
      "Solo per uscire dall'autostrada a partire dal cartello di preavviso di uscita a 500 metri dallo svincolo",
      "In qualsiasi momento durante l'ingorgo",
      "Solo se autorizzati dalla polizia stradale",
      "Mai, la corsia di emergenza non si può mai usare"
    ],
    correct: 0,
    explanation: "In caso di ingorgo è consentito transitare sulla corsia per la sosta di emergenza solo per uscire dall'autostrada e a partire dal cartello di preavviso di uscita (posto a cinquecento metri dallo svincolo)."
  },

  {
    id: 1736,
    chapter: 17,
    question: "Dove viene collocato il triangolo in autostrada quando il veicolo è fermo su tratti privi di corsia di emergenza?",
    options: [
      "Posteriormente al veicolo a distanza di almeno 100 metri, anche di giorno e in rettilineo",
      "Davanti al veicolo a 50 metri",
      "Sul bordo destro della strada",
      "Non è necessario il triangolo su tratti privi di corsia di emergenza"
    ],
    correct: 0,
    explanation: "Su tratti privi di spazi (corsia di emergenza) il segnale mobile di pericolo deve essere collocato, posteriormente al veicolo a distanza di almeno 100 metri, anche di giorno e in rettilineo. Lo stesso obbligo è previsto per il conducente che sosta sulla banchina di emergenza."
  },

  {
    id: 1737,
    chapter: 17,
    question: "Sulle autostrade a 3 o più corsie, ai conducenti di veicoli di lunghezza totale superiore a 7 metri è vietato:",
    options: [
      "Impegnare altre corsie all'infuori delle due più vicine al bordo destro della carreggiata",
      "Circolare nella corsia di destra",
      "Sorpassare altri veicoli",
      "Usare le corsie di accelerazione"
    ],
    correct: 0,
    explanation: "Nelle autostrade con carreggiate a tre o più corsie, è vietato ai conducenti di veicoli adibiti al trasporto merci la cui massa a pieno carico supera le 5 t, ed ai conducenti di veicoli o complessi veicolari di lunghezza totale superiore ai 7 metri di impegnare altre corsie all'infuori delle due più vicine al bordo destro della carreggiata."
  },

  {
    id: 1738,
    chapter: 17,
    question: "Sulle autostrade a pedaggio (Telepass), alla velocità massima di 30 km/h il conducente può:",
    options: [
      "Sfruttare i varchi Telepass senza fermarsi, mantenendo la fila prescelta",
      "Superare i 30 km/h per attraversare più velocemente i varchi",
      "Cambiare corsia all'ultimo momento per scegliere il varco",
      "Fermarsi e fare marcia indietro se ha sbagliato varco"
    ],
    correct: 0,
    explanation: "Sulle autostrade a pagamento, i conducenti devono arrestarsi alle porte delle stazioni per le operazioni di pedaggio. Non devono fermarsi, ma solo moderare la velocità (30 km/h) qualora il veicolo sia dotato di apposito recchio idoneo a sfruttare i varchi Telepass."
  },

  // ── 17.4 Trasporto di Persone e Animali ──────────────────────────────────

  {
    id: 1739,
    chapter: 17,
    question: "Il numero massimo di persone trasportabili su un'autovettura (compresi il conducente) è:",
    options: [
      "Indicato sulla carta di circolazione — sull'autovettura può raggiungere il massimo di 9 compreso il conducente",
      "5 persone in ogni caso",
      "7 persone compresi neonati",
      "Illimitato se il veicolo è grande"
    ],
    correct: 0,
    explanation: "Il numero delle persone trasportabili è indicato sulla carta di circolazione. Sulle autovetture può raggiungere il massimo di 9 compreso il conducente."
  },

  {
    id: 1740,
    chapter: 17,
    question: "È consentito il trasporto di un animale domestico su un autoveicolo?",
    options: [
      "Sì, purché non costituisca impedimento o pericolo per la guida e sia custodito in apposita gabbia o vano posteriore diviso da rete",
      "No, è sempre vietato trasportare animali domestici",
      "Solo se l'animale pesa meno di 5 kg",
      "Solo in auto con almeno 5 posti"
    ],
    correct: 0,
    explanation: "Sugli autoveicoli è consentito il trasporto di un animale domestico, purché non costituisca impedimento o pericolo per la guida. È consentito il trasporto di più animali, anche in numero superiore a uno, purché custoditi in apposita gabbia o nel vano posteriore, appositamente diviso da rete."
  },

  {
    id: 1741,
    chapter: 17,
    question: "Su un ciclomotore è possibile trasportare un passeggero solo se:",
    options: [
      "Il conducente ha almeno 16 anni e il posto è previsto sulla carta di circolazione",
      "Il conducente ha almeno 18 anni",
      "Il passeggero ha almeno 14 anni",
      "Il ciclomotore è dotato di sellino doppio indipendentemente dall'età del conducente"
    ],
    correct: 0,
    explanation: "Su ciclomotori è possibile trasportare un passeggero solo se il conducente ha almeno 16 anni e il posto per il passeggero stesso è previsto sulla carta di circolazione."
  },

  {
    id: 1742,
    chapter: 17,
    question: "Sui motocicli e ciclomotori a 2 ruote, il trasporto di bambini minori di 5 anni è:",
    options: [
      "Vietato",
      "Consentito se il bambino indossa il casco",
      "Consentito solo con apposito seggiolino",
      "Consentito fino a 3 anni"
    ],
    correct: 0,
    explanation: "Sui motocicli e ciclomotori a 2 ruote è vietato il trasporto di bambini minori di anni 5, mentre è consentito il trasporto di animali se custoditi in apposita gabbia (purché non sporgente di oltre 50 cm)."
  },

  // ── Sistemazione del Carico ───────────────────────────────────────────────

  {
    id: 1743,
    chapter: 17,
    question: "Il carico sul veicolo deve essere sistemato in modo da:",
    options: [
      "Non diminuire la visibilità, non impedire la libertà di movimenti, non provocare rumori, non mascherare luci e targhe, non compromettere la stabilità",
      "Solo non mascherare le luci posteriori",
      "Solo essere sotto il piano del tetto del veicolo",
      "Non superare il peso massimo del veicolo"
    ],
    correct: 0,
    explanation: "Il carico deve essere sistemato sul veicolo in modo da: non diminuire la visibilità del conducente; non impedire la libertà di movimenti; evitare caduta o dispersione; evitare rumori molesti; non mascherare luci, dispositivi di illuminazione, targa; non compromettere la stabilità del veicolo."
  },

  {
    id: 1744,
    chapter: 17,
    question: "Di quanto può sporgere longitudinalmente il carico dalla parte posteriore del veicolo?",
    options: [
      "Non più di 3/10 (30%) della lunghezza del veicolo",
      "Non più di 1/2 della lunghezza del veicolo",
      "Non più di 1 metro",
      "Può sporgere illimitatamente se segnalato"
    ],
    correct: 0,
    explanation: "Il carico può sporgere longitudinalmente dalla parte posteriore del veicolo (ma non longitudinalmente dalla parte anteriore) solo se è costituito da carico indivisibile e comunque per non più dei tre decimi (3/10, ossia il 30%) della lunghezza del veicolo."
  },

  {
    id: 1745,
    chapter: 17,
    question: "Quanto può sporgere lateralmente il carico rispetto alle luci di posizione del veicolo?",
    options: [
      "Non più di 30 centimetri per non più di centimetri 30 rispetto alle luci di posizione anteriori e posteriori",
      "Non più di 1 metro",
      "Può sporgere illimitatamente a destra",
      "Non può sporgere lateralmente in nessun caso"
    ],
    correct: 0,
    explanation: "Purché si resti entro i limiti massimi di sagoma, sugli autoveicoli possono essere trasportate cose che sporgono lateralmente dalla sagoma del veicolo per non più di centimetri 30 rispetto alle luci di posizione anteriori e posteriori."
  },

  {
    id: 1746,
    chapter: 17,
    question: "Come deve essere segnalato il carico che sporge posteriormente di più di 3/10 della lunghezza del veicolo?",
    options: [
      "Con uno o due pannelli quadrangolari retroriflettenti a strisce diagonali bianche e rosse (pannello 302) di almeno 50x50 cm",
      "Con un panno rosso appeso al carico",
      "Con sole luci rosse posteriori",
      "Il carico non può sporgere oltre 3/10 in nessun caso"
    ],
    correct: 0,
    explanation: "La sporgenza longitudinale del carico, fino ai 3/10 della lunghezza del veicolo, deve essere segnalata mediante uno o due pannelli quadrangolari retroriflettenti a strisce diagonali bianche e rosse (pannello 302, almeno 50x50 cm)."
  },

  // ── 17.5 Pannelli sui Veicoli ─────────────────────────────────────────────

  {
    id: 1747,
    chapter: 17,
    question: "Il pannello retroriflettente per carichi sporgenti (302) deve essere:",
    options: [
      "A strisce diagonali alternate bianche e rosse, retroriflettente, costantemente perpendicolare all'asse del veicolo e sempre visibile",
      "Di colore rosso fisso senza retroriflessione",
      "Triangolare come il segnale di pericolo",
      "Di qualsiasi colore purché fluorescente"
    ],
    correct: 0,
    explanation: "Il pannello a strisce diagonali alternate bianche e rosse deve essere retroriflettente, viene applicato all'estremità di ogni carico indivisibile che sporge. Deve risultare costantemente perpendicolare all'asse del veicolo per essere sempre visibile."
  },

  {
    id: 1748,
    chapter: 17,
    question: "Gli autocarri con massa massima a pieno carico superiore a 3,5 tonnellate devono essere segnalati posteriormente con:",
    options: [
      "Pannelli retroriflettenti a strisce diagonali gialle e rosse (Figg. 304 e C)",
      "Solo luci rosse posteriori",
      "Il pannello 302 bianco e rosso",
      "Solo catadiottri rossi"
    ],
    correct: 0,
    explanation: "Gli autocarri con massa massima a pieno carico superiore a 3,5 tonnellate devono essere segnalati posteriormente con pannelli retroriflettenti a strisce oblique gialle e rosse (Figg. 304 e C), che ne facilitano l'individuazione dal retro."
  },

  {
    id: 1749,
    chapter: 17,
    question: "I rimorchi e semirimorchi per trasporto di cose con massa massima a pieno carico superiore a 3,5 t devono essere segnalati con:",
    options: [
      "Pannelli retroriflettenti giallo con bordo rosso (Figg. 305 e D)",
      "Pannelli a strisce bianche e rosse",
      "Solo catadiottri gialli",
      "Nessuna segnalazione speciale"
    ],
    correct: 0,
    explanation: "I rimorchi e i semirimorchi per trasporto di cose con massa massima a pieno carico superiore a 3,5 tonnellate devono essere segnalati posteriormente con pannelli retroriflettenti in figura che individuano quindi un autocarro o un autoarticolato (pannello giallo con bordo rosso - Figg. 305 e D)."
  },

  {
    id: 1750,
    chapter: 17,
    question: "I veicoli per trasporto di merci pericolose devono essere muniti di:",
    options: [
      "Due pannelli arancioni retroriflettenti fissi davanti e dietro, integrati con due numeri: tipo di pericolo e materia trasportata",
      "Solo un segnale lampeggiante arancione",
      "Pannelli bianchi con scritta PERICOLO",
      "Lo stesso pannello 302 per i carichi sporgenti"
    ],
    correct: 0,
    explanation: "I veicoli adibiti al trasporto di merci pericolose devono essere muniti di due pannelli arancioni retroriflettenti fissi davanti e dietro al veicolo. I pannelli sono di norma integrati con due numeri specifici: il tipo di pericolo e la materia trasportata (es. 33/1203 = benzina)."
  },

  // ── 17.6 Traino dei Veicoli ───────────────────────────────────────────────

  {
    id: 1751,
    chapter: 17,
    question: "Nessun veicolo può trainare o essere trainato da più di un veicolo (salvo trasporti eccezionali). Ai conducenti di motocicli è:",
    options: [
      "Vietato trainare e farsi trainare da altri veicoli",
      "Consentito trainare altri motocicli in avaria",
      "Consentito essere trainati da autovetture",
      "Consentito trainare rimorchi leggeri"
    ],
    correct: 0,
    explanation: "Nessun veicolo può trainare o essere trainato da più di un veicolo (salvo il caso di trasporti eccezionali autorizzati). Ai conducenti di motocicli è vietato trainare e farsi trainare da altri veicoli."
  },

  {
    id: 1752,
    chapter: 17,
    question: "Il traino in emergenza di un veicolo in avaria deve avvenire attraverso:",
    options: [
      "Un solido collegamento (fune, catena, cavo, barra rigida) purché costantemente segnalato (A) per rendere i veicoli chiaramente avvistabili",
      "Solo con una fune di traino",
      "Solo con una barra rigida omologata",
      "Un semplice contatto tra i veicoli senza accessori"
    ],
    correct: 0,
    explanation: "Il traino in emergenza di un veicolo in avaria (da parte di un altro veicolo) deve avvenire attraverso un solido collegamento (come fune, catena, cavo, barra rigida) purché costantemente segnalato (A) per rendere i veicoli chiaramente avvistabili agli altri utenti della strada."
  },

  {
    id: 1753,
    chapter: 17,
    question: "Durante le operazioni di traino di un veicolo in avaria, il veicolo trainato deve utilizzare:",
    options: [
      "L'eventuale dispositivo di lampeggio simultaneo degli indicatori di direzione (hazard/4 frecce)",
      "Solo i proiettori abbaglianti",
      "Il clacson continuamente",
      "Le luci di retromarcia"
    ],
    correct: 0,
    explanation: "Durante le operazioni di traino di un veicolo in avaria, il veicolo trainato deve utilizzare l'eventuale dispositivo di lampeggio simultaneo degli indicatori di direzione (segnalazione luminosa di pericolo - 1) o, in mancanza, esporre il pannello per carichi sporgenti (2) o il triangolo mobile di pericolo (3)."
  },

  {
    id: 1754,
    chapter: 17,
    question: "Il traino di un rimorchio avviene attraverso organi di traino del tipo a sfera e calotta. La calotta viene vincolata alla sfera con:",
    options: [
      "Un dispositivo di contrasto con maniglia di bloccaggio e un dispositivo di sicurezza che attiva automaticamente il freno di stazionamento in caso di sganciamento accidentale",
      "Solo un bullone di sicurezza",
      "Solo una catena di emergenza",
      "Un gancio manuale senza dispositivo di sicurezza"
    ],
    correct: 0,
    explanation: "La calotta viene vincolata alla sfera con un dispositivo di contrasto, con maniglia di bloccaggio, e con un dispositivo di sicurezza che, in caso di sganciamento accidentale, attiva automaticamente il freno di stazionamento."
  },

  {
    id: 1755,
    chapter: 17,
    question: "I rimorchi trainati da autoveicoli sono dotati di freno di servizio ad inerzia. Nel tipo meccanico, quando il rimorchio si avvicina alla motrice durante la frenata:",
    options: [
      "L'avvicinamento del rimorchio alla motrice, tramite una leva, mette in azione gli elementi frenanti",
      "Il freno si attiva tramite la pressione idraulica",
      "Il conducente deve frenare manualmente il rimorchio",
      "Il rimorchio frena automaticamente senza meccanismo"
    ],
    correct: 0,
    explanation: "Il freno meccanico ad inerzia funziona così: l'avvicinamento del rimorchio alla motrice (causato dalla forza d'inerzia legata al rallentamento della motrice), tramite una leva collegata ad apposita tirante metallica, mette in azione gli elementi frenanti. Un ammortizzatore modera l'azione frenante."
  },

  {
    id: 1756,
    chapter: 17,
    question: "Quando si guida con il rimorchio agganciato, il consumo di carburante:",
    options: [
      "Aumenta sensibilmente perché il motore è richiesto a maggiore potenza",
      "Diminuisce perché il rimorchio aiuta la propulsione",
      "Rimane invariato",
      "Dipende solo dalla velocità, non dal rimorchio"
    ],
    correct: 0,
    explanation: "Con il rimorchio agganciato, si ha un sensibile aumento del consumo di carburante, poiché il motore è richiesto a maggiore potenza (ripresa) per l'aumento del carico del veicolo."
  },

  {
    id: 1757,
    chapter: 17,
    question: "Il limite massimo di velocità per gli autotreni (motrice + rimorchio) in autostrada è:",
    options: [
      "80 km/h",
      "130 km/h",
      "110 km/h",
      "100 km/h"
    ],
    correct: 0,
    explanation: "Il limite massimo di velocità per gli autotreni (motrice + rimorchio) è di 80 km/h sulle autostrade e 70 km/h sulle strade extraurbane principali. Sul retro del rimorchio (di qualunque massa esso sia), gli appositi contrassegni indicano tali velocità."
  },

  {
    id: 1758,
    chapter: 17,
    question: "Gli eventuali specchietti esterni montati sulla motrice per la visibilità del rimorchio non devono sporgere oltre:",
    options: [
      "20 centimetri dalla sagoma del veicolo (motrice o rimorchio), con riferimento al punto di maggiore larghezza",
      "30 centimetri dalla sagoma",
      "50 centimetri dalla sagoma",
      "Non c'è limite per gli specchietti aggiuntivi"
    ],
    correct: 0,
    explanation: "Gli eventuali specchietti esterni montati sulla motrice non devono sporgere oltre 20 centimetri dalla sagoma del veicolo (motrice o rimorchio), con riferimento al punto di maggiore larghezza."
  },

  {
    id: 1759,
    chapter: 17,
    question: "Il rapporto di traino (1 per rimorchi con freno, 0,5 per rimorchi senza freno) si riferisce a:",
    options: [
      "Il rapporto tra la massa del rimorchio e quella del veicolo trainante, che non deve essere superato",
      "La velocità massima di traino",
      "Il numero di rimorchi che si possono agganciare",
      "La lunghezza massima del collegamento tra motrice e rimorchio"
    ],
    correct: 0,
    explanation: "Il rapporto di traino, entro i limiti di quello tecnicamente ammesso per il veicolo, non deve superare: il valore di 1 nel caso di rimorchi muniti di freno di servizio e di massa fino a 3,5 tonnellate; il valore di 0,5 nel caso di rimorchi sprovvisti di qualsiasi dispositivo di frenatura."
  },

  {
    id: 1760,
    chapter: 17,
    question: "I rimorchi devono essere assicurati con la stessa polizza della motrice quando circolano agganciati. Quando sono staccati:",
    options: [
      "Devono avere una specifica copertura assicurativa detta 'assicurazione rischio statico' e devono essere muniti del relativo contrassegno",
      "Non hanno bisogno di assicurazione",
      "Possono essere coperti dalla polizza di qualsiasi altro veicolo",
      "Devono essere coperti da una polizza internazionale"
    ],
    correct: 0,
    explanation: "Tutti i rimorchi (anche quelli leggeri), durante la circolazione, devono essere assicurati con la stessa polizza R.C.A. della motrice. Quando sono staccati, deve essere una specifica copertura assicurativa detta 'assicurazione rischio statico' e devono essere muniti del relativo contrassegno."
  },

];
