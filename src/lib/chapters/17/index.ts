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

];
