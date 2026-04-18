// ─────────────────────────────────────────────────────────────────────────────
//  CAPITOLO 19 – Cinture di Sicurezza, Seggiolini per Bambini,
//               Airbag, Casco Protettivo, Abbigliamento di Sicurezza
// ─────────────────────────────────────────────────────────────────────────────

import type { Question } from "@/lib/types";

export const chapter19Questions: Question[] = [

  // ── 19.1 Cinture di Sicurezza ──────────────────────────────────────────────

  {
    id: 1901,
    chapter: 19,
    question: "A cosa serve la cintura di sicurezza in un veicolo?",
    options: [
      "Mantenere il corpo ancorato al sedile, evitare l'urto con le parti interne e lo sbalzamento fuori dal veicolo",
      "Si attiva solo in caso di incidenti gravi",
      "Sostituisce l'airbag in caso di incidente",
      "È obbligatoria solo per i passeggeri anteriori"
    ],
    correct: 0,
    explanation: "Le cinture di sicurezza servono a mantenere il corpo attaccato al sedile, evitando che il conducente e i passeggeri vadano a urtare le parti interne del veicolo o siano sbalzati fuori."
  },

  {
    id: 1902,
    chapter: 19,
    question: "Cosa succede se la cintura di sicurezza non è allacciata in caso di frenata improvvisa?",
    options: [
      "Il passeggero può essere proiettato contro il parabrezza",
      "I freni si attivano più fortemente in modo automatico",
      "L'airbag compensa la mancanza della cintura",
      "Il sedile arretra automaticamente"
    ],
    correct: 0,
    explanation: "Se la cintura non è agganciata, in caso di frenata improvvisa il passeggero può essere proiettato contro il parabrezza."
  },

  {
    id: 1903,
    chapter: 19,
    question: "Da quali componenti sono formate le cinture di sicurezza inerziali moderne?",
    options: [
      "Da parti fisse e mobili che permettono il riavvolgimento automatico",
      "Solo da una cinghia rigida fissa",
      "Da un sistema pneumatico",
      "Da molla e barra metallica"
    ],
    correct: 0,
    explanation: "Le moderne cinture inerziali sono composte da parti fisse e mobili che permettono il riavvolgimento automatico dopo l'uso e il bloccaggio in caso d'urto."
  },

  {
    id: 1904,
    chapter: 19,
    question: "Cos'è la 'cinghia' nella cintura di sicurezza?",
    options: [
      "Un nastro flessibile largo circa 5-6 cm, a resistenza calibrata",
      "La fibbia di chiusura",
      "La guida di regolazione in altezza",
      "Il sistema di pretensionamento"
    ],
    correct: 0,
    explanation: "La cinghia è il nastro flessibile largo circa 5-6 cm che, in caso d'urto, si rompe a una resistenza calibrata per evitare lesioni gravi all'utilizzatore."
  },

  {
    id: 1905,
    chapter: 19,
    question: "Qual è la funzione del 'pretensionatore' nella cintura di sicurezza?",
    options: [
      "Al momento dell'urto, riavvolge la cinghia tenendo l'occupante ben aderente al sedile",
      "Apre la cintura in caso di emergenza",
      "Regola l'altezza della cintura",
      "Disattiva il segnale acustico"
    ],
    correct: 0,
    explanation: "Il pretensionatore, al momento dell'urto, 'riavvolge' la parte di cinghia corrispondente all'indesiderato allungamento, mantenendo l'occupante ben aderente al sedile."
  },

  {
    id: 1906,
    chapter: 19,
    question: "Cosa indica la spia rossa relativa alle cinture di sicurezza sul cruscotto?",
    options: [
      "La cintura di sicurezza non è agganciata",
      "La cintura è danneggiata",
      "È stata disabilitata dal conducente",
      "L'airbag si è attivato"
    ],
    correct: 0,
    explanation: "La spia di colore rosso segnala il mancato agganciamento della cintura di sicurezza. Questo sistema non può essere in nessun modo disabilitato dal conducente."
  },

  {
    id: 1907,
    chapter: 19,
    question: "Il conducente può disabilitare il segnalatore acustico o luminoso della cintura di sicurezza?",
    options: [
      "No, non può in nessun modo disabilitarlo",
      "Sì, tramite un tasto sul cruscotto",
      "Sì, solo in ambito urbano",
      "Sì, se la cintura è di vecchio tipo"
    ],
    correct: 0,
    explanation: "Il segnalatore acustico e la spia della cintura non possono essere in nessun modo disabilitati dal conducente (non può essere in nessun modo disabilitata dal conducente)."
  },

  {
    id: 1908,
    chapter: 19,
    question: "A quale velocità è obbligatorio tenere allacciata la cintura di sicurezza?",
    options: [
      "A qualsiasi velocità, anche bassa",
      "Solo sopra i 50 km/h",
      "Solo in autostrada",
      "Solo fuori dai centri abitati"
    ],
    correct: 0,
    explanation: "Le cinture devono essere allacciate in qualsiasi situazione di marcia e a qualsiasi velocità (anche bassa)."
  },

  {
    id: 1909,
    chapter: 19,
    question: "Chi è obbligato ad allacciare la cintura di sicurezza?",
    options: [
      "Il conducente e tutti i passeggeri, compresi quelli sui sedili posteriori",
      "Solo il conducente e il passeggero anteriore",
      "Solo il conducente",
      "Solo i bambini"
    ],
    correct: 0,
    explanation: "Il conducente e i passeggeri (anche quelli occupanti i sedili posteriori) di autovetture, autocaravan, autocarri ecc. sono obbligati ad allacciare le cinture di sicurezza."
  },

  {
    id: 1910,
    chapter: 19,
    question: "La presenza dell'airbag esonera dall'obbligo di indossare la cintura di sicurezza?",
    options: [
      "No, la presenza dell'airbag non esenta dall'obbligo di indossare le cinture",
      "Sì, se l'airbag anteriore è attivo",
      "Sì, solo sulle auto nuove",
      "Sì, se l'airbag è omologato"
    ],
    correct: 0,
    explanation: "La presenza di airbag sul veicolo non esenta dall'obbligo di indossare le cinture. Al contrario, il loro mancato uso può arrecare seri danni al conducente in caso di apertura del dispositivo."
  },

  {
    id: 1911,
    chapter: 19,
    question: "Chi è esentato dall'obbligo di allacciare la cintura di sicurezza?",
    options: [
      "Gli organi di Polizia e le Forze Armate nell'espletamento di attività istituzionali e nelle situazioni di emergenza",
      "Tutti i conducenti in città",
      "I conducenti over 60",
      "I conducenti con patente vecchia"
    ],
    correct: 0,
    explanation: "Sono esentati: gli organi di Polizia e Forze Armate in attività istituzionali d'emergenza, i conducenti per la raccolta rifiuti, gli istruttori di guida nello svolgimento della professione, le donne in stato di gravidanza con condizioni certificate, persone con particolari malattie certificate dall'A.S.L., appartenenti a servizi di vigilanza privata che effettuano scorte."
  },

  {
    id: 1912,
    chapter: 19,
    question: "È consentito installare sulle cinture qualsiasi dispositivo che serva a non tenerle aderenti al corpo?",
    options: [
      "No, è vietato ed è prevista una sanzione",
      "Sì, se di tipo omologato",
      "Sì, per le persone obese",
      "Sì, solo su veicoli datati"
    ],
    correct: 0,
    explanation: "È vietato installare sulle cinture qualunque dispositivo che serva a non tenerle aderenti al corpo. Sono previste sanzioni per chi altera o ostacola il normale funzionamento della cintura di sicurezza."
  },

  {
    id: 1913,
    chapter: 19,
    question: "Qual è la funzione del poggiatesta del sedile in termini di sicurezza?",
    options: [
      "Protegge la colonna vertebrale in caso di tamponamento (colpo di frusta)",
      "Serve solo per il comfort del passeggero",
      "È importante in caso di urto frontale",
      "Attiva l'airbag laterale"
    ],
    correct: 0,
    explanation: "Il poggiatesta protegge la colonna vertebrale in caso di tamponamento, prevenendo il 'colpo di frusta'. Deve essere regolato correttamente sia in altezza che in inclinazione."
  },

  {
    id: 1914,
    chapter: 19,
    question: "Quale obbligo ha il conducente riguardo all'uso delle cinture da parte dei passeggeri?",
    options: [
      "Deve rammentare ai passeggeri l'obbligo e la necessità di farne uso",
      "Non ha nessuna responsabilità",
      "È responsabile solo dei bambini sotto i 12 anni",
      "È responsabile solo in autostrada"
    ],
    correct: 0,
    explanation: "È opportuno che il conducente rammenti alle persone trasportate l'obbligo e la necessità di farne uso."
  },

  // ── 19 Seggiolini per Bambini ──────────────────────────────────────────────

  {
    id: 1915,
    chapter: 19,
    question: "I bambini di statura inferiore a quanto devono essere trattenuti da un seggiolino omologato?",
    options: [
      "Inferiore a 1,50 m",
      "Inferiore a 1,40 m",
      "Inferiore a 1,60 m",
      "Inferiore a 1,20 m"
    ],
    correct: 0,
    explanation: "I bambini di statura inferiore a 1,50 metri, quando sono trasportati su un'autovettura, devono essere trattenuti da idoneo sistema di ritenuta (seggiolino)."
  },

  {
    id: 1916,
    chapter: 19,
    question: "Su autovetture sprovviste di seggiolini, i bambini di età fino a 3 anni cosa possono fare?",
    options: [
      "Non possono viaggiare",
      "Possono stare sulle ginocchia di un adulto",
      "Possono stare sul sedile posteriore senza cintura",
      "Possono stare sul sedile anteriore"
    ],
    correct: 0,
    explanation: "Su autovetture sprovviste di seggiolini, i bambini di età fino a 3 anni non possono viaggiare."
  },

  {
    id: 1917,
    chapter: 19,
    question: "Un bambino di età superiore a 3 anni, su un'auto senza seggiolino adatto, quando può occupare un sedile anteriore?",
    options: [
      "Solo se la statura supera 1,50 m e indossa la cintura di sicurezza",
      "Quando vuole",
      "Solo se ha più di 10 anni",
      "Mai"
    ],
    correct: 0,
    explanation: "I bambini di età superiore a 3 anni possono occupare un sedile anteriore solo se la loro statura supera 1,50 m e indossano le cinture di sicurezza."
  },

  {
    id: 1918,
    chapter: 19,
    question: "I seggiolini per bambini devono obbligatoriamente:",
    options: [
      "Essere adeguati al peso e all'altezza, omologati e con etichetta di omologazione arancione",
      "Essere solo di tipo europeo",
      "Avere obbligatoriamente un airbag",
      "Essere montati rivolti in avanti"
    ],
    correct: 0,
    explanation: "I seggiolini devono essere adeguati al peso e all'altezza del bambino (adeguati al peso e all'altezza), omologati (omologati) e riportare l'apposita etichetta di omologazione di colore arancione."
  },

  {
    id: 1919,
    chapter: 19,
    question: "Qual è la differenza tra lo standard R129 e il vecchio R44 per i seggiolini?",
    options: [
      "R129 si basa sull'altezza del bambino, R44 sul peso del bambino",
      "R44 è più recente di R129",
      "R129 è solo per auto di lusso",
      "Sono equivalenti"
    ],
    correct: 0,
    explanation: "R129 (nuovo) si basa sull'ALTEZZA del bambino e offre protezione dagli urti laterali. R44 (vecchio) si basava sul PESO (fino a 9 kg su sedile anteriore)."
  },

  {
    id: 1920,
    chapter: 19,
    question: "Dal 1° settembre 2024, i seggiolini con omologazione R44 possono ancora essere venduti?",
    options: [
      "No, non possono più essere venduti dal 1/9/2024",
      "Sì, fino al 1° gennaio 2026",
      "Sì, senza limitazioni",
      "No, dal 1° marzo 2025"
    ],
    correct: 0,
    explanation: "Dal 1/9/2024, i nuovi seggiolini hanno un unico riferimento di omologazione, il Reg. 129/UNECE. I seggiolini omologati con la vecchia normativa R44 NON possono più essere venduti. Chi ne abbia acquistato uno entro il 31 Agosto 2024 può continuare a utilizzarlo."
  },

  {
    id: 1921,
    chapter: 19,
    question: "È consentito utilizzare un seggiolino per bambini rivolto all'indietro sul sedile anteriore protetto da airbag frontale?",
    options: [
      "Solo se l'airbag frontale è stato disattivato con l'apposito comando",
      "Sì, sempre",
      "No, mai",
      "Solo se l'airbag è di vecchio tipo"
    ],
    correct: 0,
    explanation: "È consentito utilizzare un seggiolino rivolto all'indietro sul sedile davanti protetto da airbag frontale, solo se l'airbag stesso è stato disattivato con l'apposito comando."
  },

  {
    id: 1922,
    chapter: 19,
    question: "In quali condizioni i bambini di statura ≤ 1,50 m sono esentati dall'obbligo del seggiolino?",
    options: [
      "A bordo di taxi o NCC, purché non occupino il sedile anteriore e siano accompagnati da almeno un passeggero di 16 anni o più",
      "Mai sono esentati",
      "Su tutti gli autobus in città",
      "Su veicoli immatricolati prima del 2000"
    ],
    correct: 0,
    explanation: "I bambini di statura non superiore a 1,50 m sono esentati dall'utilizzo dei sistemi di ritenuta quando sono a bordo di taxi o di autoveicoli adibiti al noleggio con conducente (NCC), purché non occupino il sedile anteriore ed abbiano un passeggero di almeno 16 anni."
  },

  {
    id: 1923,
    chapter: 19,
    question: "Per quali veicoli è obbligatorio il dispositivo antiabbandono bambini?",
    options: [
      "Veicoli M1, N1, N2, N3 (auto e camion) che trasportano un bambino di età inferiore a 4 anni assicurato al sedile con seggiolino",
      "Solo per i taxi",
      "Solo per le autovetture private",
      "Solo per i minibus"
    ],
    correct: 0,
    explanation: "I conducenti dei veicoli delle categorie M1, N1, N2 e N3 (autovetture e autocarri) immatricolati in Italia, se trasportano un bambino di età inferiore a 4 anni assicurato al sedile con l'idoneo sistema di ritenuta, hanno l'obbligo di attivare apposito dispositivo di allarme per prevenire l'abbandono del bambino."
  },

  // ── 19.2 Airbag ────────────────────────────────────────────────────────────

  {
    id: 1924,
    chapter: 19,
    question: "L'airbag è un dispositivo di:",
    options: [
      "Sicurezza passiva, costituito da un cuscino gonfiabile",
      "Sicurezza attiva sempre in funzione",
      "Sostituzione della cintura di sicurezza",
      "Protezione solo per il conducente"
    ],
    correct: 0,
    explanation: "L'airbag è un dispositivo di sicurezza passiva per il conducente e i passeggeri di un autoveicolo, ed è costituito da un cuscino gonfiabile di nylon ripiegato in un apposito vano."
  },

  {
    id: 1925,
    chapter: 19,
    question: "Se il veicolo è dotato di airbag, si è esentati dall'obbligo di allacciare la cintura?",
    options: [
      "No, la cintura rimane obbligatoria — usare l'airbag senza cintura può essere molto pericoloso",
      "Sì, l'airbag è sufficiente",
      "Sì, solo in città",
      "Sì, se è dotato anche di airbag laterali"
    ],
    correct: 0,
    explanation: "La presenza dell'airbag non esenta dall'uso della cintura. Come già accennato, l'airbag può essere molto pericoloso se, quando entra in funzione, l'occupante non è agganciato al sedile con la cintura di sicurezza."
  },

  {
    id: 1926,
    chapter: 19,
    question: "Il conducente è tenuto a controllare periodicamente le cinture di sicurezza per:",
    options: [
      "Accertarsi della costante efficienza e sostituirle in caso di usura con tipo omologato",
      "Solo al momento della revisione periodica",
      "Solo dopo un incidente",
      "Ogni 5 anni"
    ],
    correct: 0,
    explanation: "Il conducente è tenuto ad assicurarsi della costante efficienza delle cinture e, con la sostituzione con altre di tipo omologato per quel veicolo, se sono state sottoposte a violenta sollecitazione in caso d'urto o se presentano tracce di sensibile logorio."
  },

  {
    id: 1927,
    chapter: 19,
    question: "Le cinture di sicurezza devono essere di:",
    options: [
      "Tipo approvato con i relativi estremi di approvazione sull'apposita etichetta cucita sulla cinghia",
      "Qualsiasi tipo scelto dal conducente",
      "Solo tipo italiano",
      "Tre punti di ancoraggio senza omologazione"
    ],
    correct: 0,
    explanation: "Le cinture devono essere di tipo approvato e recare gli estremi dell'approvazione sull'apposita etichetta cucita sulla cinghia."
  },

  {
    id: 1928,
    chapter: 19,
    question: "Come funziona la fibbia di chiusura della cintura di sicurezza?",
    options: [
      "Si chiude con linguetta metallica e si apre premendo il pulsante di sgancio (di colore rosso)",
      "Si chiude con una vite",
      "Si chiude automaticamente senza alcuna azione",
      "Si chiude con una chiave"
    ],
    correct: 0,
    explanation: "La fibbia di chiusura permette il rapido agganciamento e sganciamento della cintura. L'elemento di collegamento tra fibbia e cintura è una linguetta metallica che si inserisce facilmente nella fibbia. Lo sganciamento avviene premendo il pulsante di sgancio della fibbia (di colore rosso), che deve essere facilmente visibile e accessibile anche per un soccorritore esterno."
  },

  {
    id: 1929,
    chapter: 19,
    question: "Quando si usa un seggiolino rivolto all'indietro sul sedile anteriore, in quale stato deve essere l'airbag frontale?",
    options: [
      "Deve essere disattivato",
      "Può restare attivo",
      "Deve essere in modalità 'bassa potenza'",
      "Lo stato dell'airbag non è rilevante"
    ],
    correct: 0,
    explanation: "È consentito utilizzare un seggiolino rivolto all'indietro sul sedile davanti protetto da airbag frontale, solo se l'airbag stesso è stato disattivato con l'apposito comando."
  },

  {
    id: 1930,
    chapter: 19,
    question: "Un bambino di statura ≤ 1,50 m che sale su un taxi, dove NON deve sedersi?",
    options: [
      "Sul sedile anteriore",
      "Sul sedile posteriore",
      "Non può salire su nessun posto",
      "Solo se ha meno di 3 anni non può salire"
    ],
    correct: 0,
    explanation: "I bambini di statura non superiore a 1,50 m sono esentati dall'utilizzo dei sistemi di ritenuta quando sono a bordo di taxi o NCC a condizione che non occupino il sedile anteriore."
  },

  {
    id: 1931,
    chapter: 19,
    question: "Cosa fa l'arrotolatore nella cintura di sicurezza?",
    options: [
      "Permette di srotolare e riarrotolare automaticamente la cintura adattandola senza fibbie alla taglia del conducente",
      "Blocca la cintura se la velocità supera i 120 km/h",
      "Regola lo spessore della cinghia",
      "Attiva l'airbag"
    ],
    correct: 0,
    explanation: "L'arrotolatore permette di srotolare e riarrotolare automaticamente la cintura, consentendo di adattare, senza necessità di fibbie, la lunghezza della cintura alla taglia del conducente."
  },

  {
    id: 1932,
    chapter: 19,
    question: "Qual è la funzione degli ancoraggi e anelli di fissaggio nella cintura di sicurezza?",
    options: [
      "Permettono il fissaggio della cintura e lo scorrimento della cinghia senza che essa si attorcigli",
      "Collegano la cintura all'airbag",
      "Regolano la lunghezza della cintura",
      "Sono la fibbia di chiusura"
    ],
    correct: 0,
    explanation: "Gli ancoraggi e anelli di fissaggio sono le parti che permettono il fissaggio delle cinture e lo scorrimento della cinghia senza che essa si attorcigli. L'attacco al montante di alcuni veicoli è regolabile in altezza."
  },

  {
    id: 1933,
    chapter: 19,
    question: "Secondo il nuovo standard R129, fino a quanti mesi un bambino può usare il seggiolino sul sedile anteriore (nelle condizioni appropriate)?",
    options: [
      "Fino a 15 mesi (su sedile anteriore con airbag disattivato)",
      "Fino a 6 mesi",
      "Fino a 2 anni",
      "Non è mai consentito sul sedile anteriore"
    ],
    correct: 0,
    explanation: "Secondo R129 (nuove norme), il seggiolino può essere usato sul sedile anteriore fino a 15 mesi, a condizione che l'airbag frontale sia stato disattivato."
  },

  {
    id: 1934,
    chapter: 19,
    question: "Le cinture sottoposte a violenta sollecitazione in caso d'urto devono essere:",
    options: [
      "Sostituite con altre di tipo omologato per quel veicolo",
      "Qualsiasi cintura acquistabile in commercio è idonea",
      "Riparate è sufficiente",
      "Sostituite solo se visibilmente rotte"
    ],
    correct: 0,
    explanation: "Le cinture che sono state sottoposte a violenta sollecitazione in caso d'urto o che presentano tracce di sensibile logorio devono essere sostituite con altre di tipo omologato per quel veicolo."
  },

  {
    id: 1935,
    chapter: 19,
    question: "Chi è responsabile di assicurarsi che i bambini passeggeri siano correttamente trattenuti?",
    options: [
      "Il conducente",
      "Solo i genitori del bambino",
      "Il passeggero adulto accanto al bambino",
      "Il bambino stesso"
    ],
    correct: 0,
    explanation: "Il conducente è responsabile di assicurarsi che tutti i passeggeri, compresi i bambini, siano correttamente allacciati o fissati nell'idoneo sistema di ritenuta."
  },

  // ── 19.3 Casco Protettivo ──────────────────────────────────────────────────

  {
    id: 1936,
    chapter: 19,
    question: "A cosa serve il casco nei veicoli a due ruote?",
    options: [
      "Evitare l'urto diretto della testa contro corpi contundenti e limitare le lesioni al capo in caso di incidente",
      "Impedire di cadere dal veicolo in caso di incidente",
      "Eliminare completamente le lesioni alla colonna cervicale",
      "Assorbire totalmente tutti gli urti violenti"
    ],
    correct: 0,
    explanation: "Il casco ha lo scopo di evitare l'urto diretto della testa contro corpi contundenti, limitando le lesioni al capo in caso di incidente. Esso non è però in grado di assorbire totalmente urti violenti."
  },

  {
    id: 1937,
    chapter: 19,
    question: "Quali sono le parti principali di un casco protettivo?",
    options: [
      "Calotta esterna, calotta interna (polistirolo espanso), rivestimento interno, prese d'aria, cinturino sottogola e visiera",
      "Solo calotta esterna e cinturino sottogola",
      "Calotta esterna, cinturino e cerniera",
      "Solo visiera e rivestimento interno"
    ],
    correct: 0,
    explanation: "Le parti principali sono: una calotta esterna (materiale termoplastico), una calotta interna (polistirolo espanso per assorbire l'energia dell'urto), un rivestimento interno (poliuretano espanso + tessuto traspirante), delle prese d'aria, un cinturino sottogola e una visiera in materiale plastico trasparente."
  },

  {
    id: 1938,
    chapter: 19,
    question: "Chi è obbligato a indossare e tenere regolarmente allacciato il casco (art. 171 C.d.S.)?",
    options: [
      "Il conducente e gli eventuali passeggeri di ciclomotori e moto (anche se maggiorenni), Quad, e i conducenti di monopattini elettrici",
      "Solo il conducente della moto",
      "Solo in autostrada",
      "Solo i minorenni"
    ],
    correct: 0,
    explanation: "La guida dei veicoli a 2 ruote richiede maggiori doti di equilibrio. Per tali ragioni, ai conducenti e agli eventuali passeggeri di ciclomotori e di motocicli (anche se maggiorenni) e di Quad è fatto obbligo di indossare e di tenere regolarmente allacciato un casco di tipo omologato. Devono utilizzarlo anche i conducenti di monopattini elettrici."
  },

  {
    id: 1939,
    chapter: 19,
    question: "Chi è esentato dall'obbligo di indossare il casco?",
    options: [
      "Il conducente e passeggero di ciclomotori/moto a 3-4 ruote con carrozzeria chiusa o con cellula di sicurezza a prova di crash",
      "I conducenti over 65",
      "I conducenti su strade rurali",
      "Nessuno è esentato"
    ],
    correct: 0,
    explanation: "Sono esenti dall'obbligo i conducenti e passeggeri di ciclomotori e motoveicoli a 3 o 4 ruote dotati di carrozzeria chiusa, e di ciclomotori e motocicli a 2 o 3 ruote dotati di cellula di sicurezza a prova di crash e di idonei sistemi di ritenuta."
  },

  {
    id: 1940,
    chapter: 19,
    question: "Quali requisiti deve avere il casco per essere utilizzato legalmente?",
    options: [
      "Tipo omologato, taglia adatta alla persona, integro (non rotto o lesionato) e sempre ben allacciato durante la marcia",
      "Solo di tipo europeo",
      "Qualsiasi casco che copra la testa",
      "Solo casco integrale"
    ],
    correct: 0,
    explanation: "Il casco deve essere di tipo omologato e di taglia adatta alla persona; deve essere sempre utilizzato solo se integro (non rotto o lesionato); deve sempre essere ben allacciato durante la marcia per evitarne lo scalzamento in caso di caduta. Indossarlo in modo errato o senza averlo correttamente allacciato può comportare gravi rischi alla salute."
  },

  {
    id: 1941,
    chapter: 19,
    question: "Dopo quale evento il casco deve essere sostituito immediatamente?",
    options: [
      "Dopo aver subito un forte urto, anche se non mostra deformazioni sulla calotta esterna",
      "Solo quando è visivamente rotto",
      "Ogni 10 anni",
      "Solo dopo un incidente grave"
    ],
    correct: 0,
    explanation: "Il casco deve essere sostituito immediatamente dopo che abbia subito un forte urto, anche se non mostra deformazioni sulla calotta esterna. Subisce anche un processo di invecchiamento dovuto a luce e calore e deve quindi essere periodicamente sostituito."
  },

  {
    id: 1942,
    chapter: 19,
    question: "Perché non si deve usare solventi, benzina o altri agenti chimici aggressivi sulla calotta esterna del casco?",
    options: [
      "Questi prodotti compromettono la robustezza della calotta esterna",
      "Solo per preservare il colore del casco",
      "Per il cattivo odore",
      "Non hanno alcun effetto, è solo una questione di gusto"
    ],
    correct: 0,
    explanation: "La robustezza della calotta esterna del casco può essere compromessa da solventi presenti in vernici o colle, pertanto la pulizia deve essere effettuata con detersivi non corrosivi, senza l'utilizzo di benzina o altri agenti chimici aggressivi."
  },

  {
    id: 1943,
    chapter: 19,
    question: "Si possono applicare adesivi sulla calotta esterna del casco?",
    options: [
      "No, sul casco non possono essere applicati adesivi",
      "Sì, solo sticker piccoli",
      "Sì, se sono sticker omologati",
      "Sì, purché non coprano la visiera"
    ],
    correct: 0,
    explanation: "Sul casco non possono essere applicati adesivi in quanto possono compromettere la resistenza della calotta."
  },

  {
    id: 1944,
    chapter: 19,
    question: "Quando la visiera del casco deve essere sostituita?",
    options: [
      "Se rigata o comunque danneggiata, poiché non può essere riparata",
      "La sostituzione è facoltativa",
      "Solo di notte è necessaria",
      "Solo se completamente opacizzata"
    ],
    correct: 0,
    explanation: "La visiera del casco deve garantire la perfetta visibilità con qualunque condizione di luce o illuminazione; deve quindi essere sostituita se rigata o comunque danneggiata (non può essere riparata per non compromettere la trasparenza)."
  },

  {
    id: 1945,
    chapter: 19,
    question: "Qual è la funzione del sistema di aerazione del casco e perché è importante?",
    options: [
      "Limita il pericolo di appannamento della visiera; occorre fare molta attenzione nel chiudere gli appositi fori, soprattutto d'inverno",
      "Mantiene costante la temperatura interna del casco",
      "È necessario solo in estate",
      "È solo per il comfort, senza rilevanza per la sicurezza"
    ],
    correct: 0,
    explanation: "Il sistema di aerazione del casco consente di limitare il pericolo di appannamento della visiera. Per tale motivo, occorre fare molta attenzione nel chiudere gli appositi fori, soprattutto d'inverno con giornate umide."
  },

  // ── 19.4 Abbigliamento di Sicurezza per Conducenti di Veicoli a 2 Ruote ───

  {
    id: 1946,
    chapter: 19,
    question: "Quali caratteristiche deve avere l'abbigliamento del conducente di un veicolo a 2 ruote?",
    options: [
      "Non limitare i movimenti, proteggere dall'aria/freddo/intemperie, rendere visibile il conducente e proteggere dalle conseguenze delle cadute",
      "Solo essere impermeabile",
      "Qualsiasi abbigliamento va bene",
      "Solo essere di colore chiaro"
    ],
    correct: 0,
    explanation: "L'abbigliamento deve: non limitare i movimenti, proteggere dall'aria, dalle intemperie e dal freddo, rendere ben visibile il conducente sia di giorno che di notte (colori vivaci e inserti retroriflettenti), proteggere il più possibile dalle conseguenze delle cadute."
  },

  {
    id: 1947,
    chapter: 19,
    question: "Di quale materiale devono essere il giaccone e i pantaloni da moto?",
    options: [
      "Tessuto resistente, protettivo contro lo strisciamento sull'asfalto, con inserti protettivi rigidi in corrispondenza delle articolazioni",
      "Solo in pelle",
      "Qualsiasi tessuto comodo",
      "Solo impermeabile"
    ],
    correct: 0,
    explanation: "Il giaccone e i pantaloni devono essere di tessuto resistente che protegga almeno parzialmente dalle conseguenze dello strisciamento sull'asfalto (abrasioni). Devono essere dotati di inserti protettivi in corrispondenza delle articolazioni (gomiti, ginocchia, spalle e caviglie)."
  },

  {
    id: 1948,
    chapter: 19,
    question: "Quale importante caratteristica di sicurezza hanno i guanti da motociclista?",
    options: [
      "Proteggono il dorso della mano dagli impatti con corpi duri e palmo e dorso dagli strisciamenti sull'asfalto",
      "Servono solo per tenere le mani calde",
      "Non sono necessari",
      "Servono solo d'inverno"
    ],
    correct: 0,
    explanation: "I guanti da motociclista sono dotati di speciali sistemi di sfilamento per impedire lo sfilamento in caso di caduta. Proteggono il dorso della mano dagli impatti contro corpi duri e palmo e dorso dagli strisciamenti sull'asfalto. Garantiscono buona sensibilità durante la guida e una presa più sicura sui comandi."
  },

  {
    id: 1949,
    chapter: 19,
    question: "Quali caratteristiche importanti distinguono i stivali da moto omologati dal normale calzature?",
    options: [
      "Progettati per non scalzarsi in caso di caduta, privi di nastri liberi o stringhe che possano impigliarsi nelle pedivelle del motociclo",
      "Solo impermeabili",
      "Solo proteggono dallo scivolamento",
      "La differenza è solo estetica"
    ],
    correct: 0,
    explanation: "Le calzature dovrebbero essere appositi stivali ad uso motociclistico (omologati secondo norme internazionali), progettati per non scalzarsi in caso di caduta, privi di nastri liberi o stringhe per evitare l'aggancio alle pedivelle. Proteggono piedi e caviglie, dall'asfalto in caso di caduta, dal freddo degli urti e dalle scottature contro la marmitta."
  },

  {
    id: 1950,
    chapter: 19,
    question: "Quale rischio specifico riguarda la schiena del motociclista e come si protegge?",
    options: [
      "La colonna vertebrale è vulnerabile nelle cadute; si usa fasce lombari, giacche con rinforzi e inserti paraschiena",
      "La schiena non necessita protezione specifica",
      "È pericolosa solo in autostrada",
      "L'airbag della moto la protegge"
    ],
    correct: 0,
    explanation: "Oltre alla testa, la schiena è l'altra parte del corpo particolarmente delicata. Si possono utilizzare fasce lombari di sostegno, giacche con rinforzi e inserti protettivi paraschiena."
  },

  {
    id: 1951,
    chapter: 19,
    question: "In quale stagione è obbligatorio l'uso dei guanti da motociclista?",
    options: [
      "In tutte le stagioni, sia d'estate che d'inverno",
      "Solo in inverno",
      "Solo con la pioggia",
      "Non è obbligatorio"
    ],
    correct: 0,
    explanation: "Si devono sempre usare i guanti motociclistici di tipo omologato, sia d'estate che d'inverno."
  },

  {
    id: 1952,
    chapter: 19,
    question: "Perché è pericoloso indossare abiti vaporosi (ampi e svolazzanti) alla guida di un motociclo?",
    options: [
      "Possono gonfiarsi con l'aria e impigliarsi in parti del veicolo, limitando i movimenti del conducente",
      "Solo esteticamente inadeguato",
      "Solo pericoloso ad alta velocità",
      "Non è pericoloso"
    ],
    correct: 0,
    explanation: "L'abbigliamento non deve gonfiarsi con l'aria con il rischio di impigliarsi (non indossare indumenti svolazzanti). Gli indumenti ampi sono pericolosi perché possono impigliarsi nelle parti mobili del veicolo."
  },

  {
    id: 1953,
    chapter: 19,
    question: "Perché il conducente di un veicolo a due ruote è più esposto ai rischi rispetto al conducente di un'autovettura?",
    options: [
      "Richiede maggiori doti di equilibrio, è più esposto alle condizioni della strada ed è a maggior rischio di traumi in caso di incidente",
      "Solo per la velocità maggiore",
      "Solo per la mancanza di airbag",
      "Non è più esposto"
    ],
    correct: 0,
    explanation: "La guida dei veicoli a 2 ruote richiede maggiori doti di equilibrio rispetto alla guida di veicoli a motore a 4 ruote (ad esempio su terreni a bassa aderenza, strade sconnesse). Inoltre, i conducenti di veicoli a due ruote sono esposti a maggiori rischi di traumi in caso di incidente."
  },

];
