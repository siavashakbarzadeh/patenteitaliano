import type { Question } from "@/lib/types";

// ─────────────────────────────────────────────────────────────────────────────
//  CAPITOLO 20 – Patenti di Guida, Sistema Sanzionatorio,
//               Documenti di Circolazione, Obblighi verso Funzionari e Agenti,
//               Uso di Lenti e di Altri Apparecchi
//  Fonte: libro patente B (pagine 234–247, immagini fornite dall'utente)
// ─────────────────────────────────────────────────────────────────────────────

export const chapter20Questions: Question[] = [

  // ── 20.1 Categorie di Patente ──────────────────────────────────────────────

  {
    id: 2001,
    chapter: 20,
    question: "Qual è l'età minima per conseguire la patente di categoria AM?",
    options: ["14 anni", "16 anni", "18 anni", "21 anni"],
    correct: 0,
    explanation:
      "La patente AM (ciclomotori fino a 45 km/h e quadricicli leggeri) si può conseguire a partire dai 14 anni. In molti altri paesi UE non è possibile guidare ciclomotori a 14 anni.",
  },
  {
    id: 2002,
    chapter: 20,
    question: "Qual è l'età minima per conseguire la patente di categoria A1 e B1?",
    options: ["14 anni", "16 anni", "18 anni", "21 anni"],
    correct: 1,
    explanation:
      "Le patenti A1 (motocicli leggeri fino a 125 cm³, max 11 kW) e B1 (quadricicli a motore fino a 15 kW) si conseguono a partire dai 16 anni.",
  },
  {
    id: 2003,
    chapter: 20,
    question: "A quale età si può conseguire la patente di categoria B (autovetture)?",
    options: ["16 anni", "17 anni", "18 anni", "21 anni"],
    correct: 2,
    explanation:
      "La patente B si consegue a partire dai 18 anni. Abilita alla guida di autovetture fino a 3,5 t con al massimo 8 passeggeri oltre al conducente.",
  },
  {
    id: 2004,
    chapter: 20,
    question: "La patente A2 consente la guida di motocicli con potenza massima di:",
    options: ["25 kW", "35 kW", "45 kW", "50 kW"],
    correct: 1,
    explanation:
      "La patente A2 abilita alla guida di motocicli con potenza massima di 35 kW e rapporto potenza/peso non superiore a 0,2 kW/kg, purché non derivati da modelli con più del doppio della potenza.",
  },
  {
    id: 2005,
    chapter: 20,
    question: "La patente di categoria A1 abilita alla guida di motocicli con cilindrata fino a:",
    options: ["50 cm³", "125 cm³", "250 cm³", "500 cm³"],
    correct: 1,
    explanation:
      "La patente A1 abilita alla guida di motocicli (leggeri) con cilindrata fino a 125 cm³, potenza fino a 11 kW e rapporto potenza/peso fino a 0,1 kW/kg.",
  },
  {
    id: 2006,
    chapter: 20,
    question: "Con 'accesso diretto' (senza prima conseguire l'A2), la patente di categoria A si può ottenere a partire da:",
    options: ["18 anni", "20 anni", "21 anni", "24 anni"],
    correct: 3,
    explanation:
      "Chi non è già titolare di patente A2 può conseguire la patente A (motocicli di qualsiasi potenza) con accesso diretto solo dopo aver compiuto 24 anni.",
  },
  {
    id: 2007,
    chapter: 20,
    question: "Con 'accesso graduale' (già titolare di A2 da almeno 2 anni), la patente A si può conseguire a partire da:",
    options: ["18 anni", "20 anni", "21 anni", "24 anni"],
    correct: 1,
    explanation:
      "Chi è già titolare di patente A2 da almeno 2 anni può conseguire la patente A con accesso graduale a soli 20 anni.",
  },
  {
    id: 2008,
    chapter: 20,
    question: "La patente di categoria A abilita anche alla guida dei veicoli conducibili con:",
    options: [
      "Solo patente AM",
      "Patente AM e A1",
      "Patente AM, A1 e A2",
      "Solo patente A2",
    ],
    correct: 2,
    explanation:
      "La patente A include in sé tutte le categorie inferiori: il titolare può guidare i veicoli delle categorie AM, A1 e A2.",
  },
  {
    id: 2009,
    chapter: 20,
    question: "La patente B+E abilita alla guida di autoveicoli (max 3,5 t, max 8 passeggeri) con rimorchio di massa massima:",
    options: [
      "Non superiore a 750 kg",
      "Superiore a 750 kg e non superiore a 3,5 t",
      "Superiore a 3,5 t",
      "Qualsiasi massa",
    ],
    correct: 1,
    explanation:
      "La patente B+E estende la B consentendo di agganciare un rimorchio di massa massima superiore a 750 kg e non superiore a 3,5 t (salvo eccezioni del Codice 96).",
  },
  {
    id: 2010,
    chapter: 20,
    question: "Chi può ottenere la 'patente speciale' (A, B speciali)?",
    options: [
      "Solo i minori di 18 anni",
      "I mutilati e i minorati fisici",
      "Solo i cittadini stranieri",
      "Chi ha superato i 70 anni",
    ],
    correct: 1,
    explanation:
      "I mutilati e i minorati fisici possono ottenere la patente speciale per ciclomotori, motoveicoli ed autoveicoli delle categorie AM, A1, A2, A, B1, B. Tali patenti possono essere limitate a veicoli di particolari tipi e caratteristiche.",
  },

  // ── Limitazioni alla Guida – Neopatentati ─────────────────────────────────

  {
    id: 2011,
    chapter: 20,
    question: "I neopatentati (patente A2, A, B1, B) per i primi 3 anni non possono superare in autostrada:",
    options: ["90 km/h", "100 km/h", "110 km/h", "130 km/h"],
    correct: 1,
    explanation:
      "Per i primi 3 anni dall'ottenimento, le patenti A2, A, B1 e B non possono superare 100 km/h in autostrada (al posto del limite ordinario di 130 km/h).",
  },
  {
    id: 2012,
    chapter: 20,
    question: "I neopatentati sulle strade extraurbane principali nei primi 3 anni non possono superare:",
    options: ["70 km/h", "80 km/h", "90 km/h", "110 km/h"],
    correct: 2,
    explanation:
      "Sulle strade extraurbane principali (superstrade) il limite per i neopatentati nei primi 3 anni è 90 km/h, rispetto al limite ordinario di 110 km/h.",
  },
  {
    id: 2013,
    chapter: 20,
    question: "I neopatentati (patente B) NON possono guidare veicoli con rapporto potenza/tara superiore a:",
    options: ["50 kW/t", "65 kW/t", "75 kW/t", "100 kW/t"],
    correct: 2,
    explanation:
      "Per i primi 3 anni, i titolari di patente B non possono guidare veicoli con rapporto potenza/tara superiore a 75 kW/t.",
  },
  {
    id: 2014,
    chapter: 20,
    question: "Per le autovetture (M1), qual è il limite di potenza massima per i neopatentati B nei primi 3 anni?",
    options: ["75 kW", "90 kW", "105 kW", "120 kW"],
    correct: 2,
    explanation:
      "Per i veicoli M1 (autovetture), si applica in aggiunta il limite di potenza massima di 105 kW, valido anche per i veicoli elettrici o plug-in.",
  },
  {
    id: 2015,
    chapter: 20,
    question: "Le limitazioni di potenza per i neopatentati B NON si applicano quando:",
    options: [
      "Si guida di notte",
      "Si guida con a fianco un istruttore con patente di categoria superiore o patente B da almeno 10 anni (età ≤ 65 anni)",
      "Si guida in autostrada",
      "Il veicolo è elettrico",
    ],
    correct: 1,
    explanation:
      "Le limitazioni di potenza non si applicano ai veicoli al servizio di persone con disabilità, né quando a fianco al conducente siede una persona di età non superiore a 65 anni con patente superiore (o patente B da almeno 10 anni), in funzione di istruttore.",
  },
  {
    id: 2016,
    chapter: 20,
    question: "Da quando decorrono le limitazioni alla guida per i neopatentati (patente conseguita dopo il 14/12/2024)?",
    options: [
      "Dalla data di nascita",
      "Dal giorno del compimento dei 18 anni",
      "Dalla data di superamento dell'esame",
      "Dal primo rinnovo della patente",
    ],
    correct: 2,
    explanation:
      "Le limitazioni decorrono dalla data di superamento dell'esame e riguardano i conducenti che abbiano conseguito la patente dopo il 14/12/2024.",
  },

  // ── Durata e Conferma della Validità ──────────────────────────────────────

  {
    id: 2017,
    chapter: 20,
    question: "Per quanti anni è valida la patente B per chi NON ha superato i 50 anni di età?",
    options: ["5 anni", "8 anni", "10 anni", "15 anni"],
    correct: 2,
    explanation:
      "Le patenti AM, A1, A2, A, B1, B e BE rilasciate o confermate a chi non ha superato il 50° anno di età sono valide per 10 anni.",
  },
  {
    id: 2018,
    chapter: 20,
    question: "Per quanti anni è valida la patente B per chi ha superato i 50 anni di età?",
    options: ["2 anni", "3 anni", "5 anni", "10 anni"],
    correct: 2,
    explanation:
      "Le patenti B rilasciate o confermate a chi ha superato il 50° anno di età sono valide per 5 anni. La stessa durata vale per le patenti speciali per chi non ha superato i 70 anni.",
  },
  {
    id: 2019,
    chapter: 20,
    question: "Per quanti anni è valida la patente B per chi ha superato i 70 anni di età?",
    options: ["2 anni", "3 anni", "5 anni", "10 anni"],
    correct: 1,
    explanation:
      "Per chi ha superato il 70° anno di età la patente B è valida 3 anni. Si riduce ulteriormente a 2 anni per chi ha superato gli 80 anni.",
  },
  {
    id: 2020,
    chapter: 20,
    question: "Per quanti anni è valida la patente B per chi ha superato gli 80 anni di età?",
    options: ["1 anno", "2 anni", "3 anni", "5 anni"],
    correct: 1,
    explanation:
      "Per chi ha superato l'80° anno di età la patente B è valida solo 2 anni, con accertamenti sanitari più frequenti.",
  },
  {
    id: 2021,
    chapter: 20,
    question: "Con quale data coincide la scadenza della patente B?",
    options: [
      "Con la data di rilascio originale",
      "Con il 31 dicembre dell'anno di scadenza",
      "Con la data di nascita del titolare",
      "Con la data del primo rinnovo",
    ],
    correct: 2,
    explanation:
      "La data di scadenza delle patenti AM, A1, A2, A, B1, B e BE coincide (è allineata) con la data di nascita del titolare.",
  },
  {
    id: 2022,
    chapter: 20,
    question: "Se si è titolari di due patenti (es. A e B), per rinnovarle è necessario:",
    options: [
      "Effettuare due visite mediche separate",
      "Effettuare un'unica visita medica che vale per entrambe",
      "Rinnovare prima quella di categoria superiore",
      "Rinnovarle in due anni consecutivi",
    ],
    correct: 1,
    explanation:
      "Se si è titolari di più patenti (ad esempio A e B) è sufficiente un'unica visita medica per rinnovarle entrambe.",
  },
  {
    id: 2023,
    chapter: 20,
    question: "Cosa succede il giorno successivo alla scadenza della patente se non è stata rinnovata?",
    options: [
      "Si ha una proroga automatica di 30 giorni",
      "Non è più possibile condurre alcun veicolo",
      "Si può guidare solo nei centri abitati",
      "La patente rimane valida fino al rinnovo",
    ],
    correct: 1,
    explanation:
      "Dal giorno successivo alla scadenza, se non si conferma la patente, non è più possibile condurre alcun veicolo.",
  },

  // ── 20.2 Patente a Punti ───────────────────────────────────────────────────

  {
    id: 2024,
    chapter: 20,
    question: "Con quanti punti inizia la 'patente a punti' in Italia?",
    options: ["10 punti", "15 punti", "20 punti", "30 punti"],
    correct: 2,
    explanation:
      "A ogni conducente sono inizialmente attribuiti 20 punti sulla patente. Tale punteggio diminuisce quando si commettono particolari infrazioni al Codice della Strada.",
  },
  {
    id: 2025,
    chapter: 20,
    question: "Cosa deve fare il conducente che ha esaurito tutti i punti della patente?",
    options: [
      "Pagare una multa e tornare a guidare",
      "Sottoporsi a revisione della patente (ripetendo esami teorico e pratico)",
      "Aspettare 6 mesi e la patente si rinnova automaticamente",
      "Richiedere una nuova patente senza esami",
    ],
    correct: 1,
    explanation:
      "Quando il conducente ha esaurito i punti, deve sottoporsi a revisione della patente con conseguente ripetizione degli esami teorico e pratico.",
  },
  {
    id: 2026,
    chapter: 20,
    question: "Frequentando appositi corsi presso autoscuole autorizzate, quanti punti si possono recuperare?",
    options: ["3 punti", "4 punti", "6 punti", "10 punti"],
    correct: 2,
    explanation:
      "La frequenza di appositi corsi presso autoscuole (o altri soggetti autorizzati) permette il recupero di 6 punti, arrivando a un massimo di 20 punti.",
  },
  {
    id: 2027,
    chapter: 20,
    question: "Entro quanti anni dal rilascio della PRIMA patente le violazioni vengono sanzionate con il DOPPIO dei punti?",
    options: ["1 anno", "2 anni", "3 anni", "5 anni"],
    correct: 2,
    explanation:
      "Le violazioni commesse entro i primi 3 anni dal rilascio della prima patente sono sanzionate con il doppio dei punti previsti.",
  },
  {
    id: 2028,
    chapter: 20,
    question: "Se vengono accertate contemporaneamente più violazioni con perdita di punti, il massimo detraibile in una sola volta è:",
    options: ["10 punti", "12 punti", "15 punti", "20 punti"],
    correct: 2,
    explanation:
      "Se sono accertate contemporaneamente più violazioni, ne possono essere decurtati un massimo di 15, salvo infrazioni che comportino la sospensione della patente.",
  },
  {
    id: 2029,
    chapter: 20,
    question: "Per quanto tempo non si devono commettere infrazioni (con perdita punti) per recuperare automaticamente tutti i punti?",
    options: ["6 mesi", "1 anno", "2 anni", "3 anni"],
    correct: 2,
    explanation:
      "Se per 2 anni non si commettono infrazioni che prevedano la perdita di punti, il conducente con meno di 20 punti rientra in possesso di tutti i 20 punti.",
  },
  {
    id: 2030,
    chapter: 20,
    question: "La 'patente a punti' si aggiunge al sistema sanzionatorio tradizionale di:",
    options: [
      "Solo multa pecuniaria",
      "Ritiro, revisione, sospensione e revoca della patente",
      "Fermo amministrativo del veicolo",
      "Confisca del veicolo",
    ],
    correct: 1,
    explanation:
      "La patente a punti è un sistema di vigilanza che si aggiunge al sistema sanzionatorio tradizionale di ritiro, revisione, sospensione e revoca della patente.",
  },
  {
    id: 2031,
    chapter: 20,
    question: "Qual è la quota massima di punti raggiungibile con il sistema patente a punti?",
    options: ["20 punti", "25 punti", "30 punti", "40 punti"],
    correct: 2,
    explanation:
      "Chi possiede già 20 o più punti e non commette infrazioni per 2 anni riceve altri 2 punti (1 in più se neopatentato), fino a una quota totale massima di 30 punti.",
  },
  {
    id: 2032,
    chapter: 20,
    question: "Quale delle seguenti infrazioni comporta la perdita di punti sulla patente?",
    options: [
      "Parcheggio scaduto di 5 minuti",
      "Usare il cellulare senza auricolare o vivavoce durante la guida",
      "Non esporre il disco orario",
      "Dimenticare il giubbotto nel baule",
    ],
    correct: 1,
    explanation:
      "Usare il telefono senza auricolare o vivavoce durante la guida comporta la decurtazione di punti. Altre infrazioni con perdita punti: superare il limite di oltre 10 km/h, non rispettare le distanze di sicurezza causando un incidente, guidare sotto effetto di stupefacenti, ecc.",
  },
  {
    id: 2033,
    chapter: 20,
    question: "Circolare senza casco durante la guida di un motoveicolo (quando previsto) comporta:",
    options: [
      "Solo una multa, senza perdita di punti",
      "La perdita di punti sulla patente",
      "Il sequestro immediato del motoveicolo",
      "Nessuna sanzione se si è in centro abitato",
    ],
    correct: 1,
    explanation:
      "Circolare senza casco quando previsto, oppure con casco mal allacciato, comporta la perdita di punti sulla patente oltre alla sanzione pecuniaria.",
  },

  // ── 20.2 Sospensione della Patente ────────────────────────────────────────

  {
    id: 2034,
    chapter: 20,
    question: "Cosa comporta la sospensione della patente quando si supera di oltre 40 km/h il limite di velocità?",
    options: [
      "Solo una multa pecuniaria",
      "L'impossibilità temporanea di guidare per un periodo determinato",
      "La revoca definitiva immediata della patente",
      "Soltanto la decurtazione di punti",
    ],
    correct: 1,
    explanation:
      "La sospensione rende temporaneamente non valida la patente per un periodo determinato stabilito in base alla violazione. Superare di oltre 40 km/h il limite è una delle cause di sospensione.",
  },
  {
    id: 2035,
    chapter: 20,
    question: "La patente può essere sospesa se il conducente circola sulla corsia di emergenza in autostrada:",
    options: [
      "Solo con pioggia",
      "In casi non previsti dal Codice della Strada",
      "Solo di notte",
      "Mai: non è prevista la sospensione per questo",
    ],
    correct: 1,
    explanation:
      "Circolare sulla corsia di emergenza in autostrada al di fuori dei casi previsti dal Codice della Strada è una delle infrazioni che comportano la sospensione della patente.",
  },
  {
    id: 2036,
    chapter: 20,
    question: "La sospensione della patente è prevista quando il conducente:",
    options: [
      "Non paga la multa entro 60 giorni",
      "Guida in stato di ebbrezza alcolica o si rifiuta di sottoporsi agli accertamenti",
      "Supera il limite di velocità di soli 5 km/h",
      "Ha la patente scaduta da meno di 1 mese",
    ],
    correct: 1,
    explanation:
      "Guidare in stato di ebbrezza alcolica o rifiutarsi di sottoporsi agli accertamenti alcolimetrici è una delle cause che comporta la sospensione della patente.",
  },

  // ── 20.2 Revoca della Patente ─────────────────────────────────────────────

  {
    id: 2037,
    chapter: 20,
    question: "Chi dispone la REVOCA della patente di guida?",
    options: [
      "La Polizia Stradale durante un controllo su strada",
      "L'Ufficio Motorizzazione Civile (UMC), l'autorità giudiziaria o il Prefetto",
      "Il medico curante",
      "L'autoscuola di appartenenza",
    ],
    correct: 1,
    explanation:
      "La revoca della patente è disposta dall'Ufficio Motorizzazione Civile (UMC), dall'autorità giudiziaria o dal Prefetto — NON dalla Polizia — quando il titolare perde permanentemente i requisiti fisici o psichici richiesti.",
  },
  {
    id: 2038,
    chapter: 20,
    question: "La revoca della patente è disposta quando:",
    options: [
      "Il conducente supera di 20 km/h il limite in autostrada",
      "Il titolare guida nonostante abbia la patente sospesa",
      "La patente è scaduta da meno di 6 mesi",
      "Il conducente non ha i documenti con sé",
    ],
    correct: 1,
    explanation:
      "La revoca è prevista, tra l'altro, quando il titolare guida nonostante la patente sospesa, o quando in autostrada inverte il senso di marcia o percorre la carreggiata contromano.",
  },
  {
    id: 2039,
    chapter: 20,
    question: "Qual è la differenza principale tra SOSPENSIONE e REVOCA della patente?",
    options: [
      "La sospensione è definitiva, la revoca è temporanea",
      "La sospensione è temporanea, la revoca è definitiva (perdita permanente dei requisiti)",
      "Sono sinonimi",
      "La revoca riguarda solo le patenti A, la sospensione solo la B",
    ],
    correct: 1,
    explanation:
      "La sospensione priva temporaneamente della patente. La revoca invece comporta la perdita permanente della patente stessa, perché il titolare ha perso definitivamente i requisiti.",
  },

  // ── 20.2 Revisione della Patente ──────────────────────────────────────────

  {
    id: 2040,
    chapter: 20,
    question: "Cos'è la 'revisione della patente di guida'?",
    options: [
      "Il normale rinnovo alla scadenza",
      "Un provvedimento tecnico che impone visita medica e/o esame di idoneità quando sorgono dubbi sui requisiti del conducente",
      "La procedura per aggiungere categorie alla patente",
      "L'aggiornamento dei dati anagrafici sulla patente",
    ],
    correct: 1,
    explanation:
      "La revisione è un 'provvedimento tecnico' disposto dall'UMC o dal Prefetto che obbliga il conducente a sottoporsi a visita medica e/o esame di idoneità tecnica quando sorgono dubbi sulla sua idoneità alla guida.",
  },
  {
    id: 2041,
    chapter: 20,
    question: "La revisione della patente è disposta automaticamente quando:",
    options: [
      "Il punteggio scende sotto 10",
      "Il conducente ha più di 70 anni",
      "Il conducente ha azzerato i punti della patente",
      "Si cambia residenza in un altro comune",
    ],
    correct: 2,
    explanation:
      "La revisione della patente è disposta a seguito dell'azzeramento dei punti. Il conducente che non supera l'esame di revisione subisce l'immediata revoca della patente.",
  },

  // ── 20.3 Carta di Circolazione ────────────────────────────────────────────

  {
    id: 2042,
    chapter: 20,
    question: "Qual documento è obbligatorio per circolare su strade pubbliche con un autoveicolo?",
    options: [
      "Il libretto di manutenzione",
      "La carta di circolazione / Documento Unico (DU)",
      "Il certificato di collaudo annuale",
      "La ricevuta del bollo auto",
    ],
    correct: 1,
    explanation:
      "Gli autoveicoli, i motoveicoli e i rimorchi devono essere muniti di carta di circolazione / Documento Unico (DU) e immatricolati presso il Dipartimento dei Trasporti (D.T.) per poter circolare.",
  },
  {
    id: 2043,
    chapter: 20,
    question: "È obbligatorio che la carta di circolazione sia intestata al conducente del veicolo?",
    options: [
      "Sì, sempre",
      "No, il veicolo non deve essere necessariamente intestato a chi lo guida",
      "Solo per i veicoli superiori a 3,5 t",
      "Solo per i motoveicoli",
    ],
    correct: 1,
    explanation:
      "È vietato condurre un veicolo NON immatricolato sulle strade pubbliche, ma NON è necessario che la carta di circolazione sia intestata al conducente. Si può guidare un veicolo intestato ad altri.",
  },

  // ── 20.4 Targhe di Immatricolazione ──────────────────────────────────────

  {
    id: 2044,
    chapter: 20,
    question: "Gli autoveicoli devono essere muniti di targa identificativa:",
    options: [
      "Solo nella parte posteriore",
      "Solo nella parte anteriore",
      "Sia anteriormente che posteriormente",
      "Solo se circolano in autostrada",
    ],
    correct: 2,
    explanation:
      "Gli autoveicoli devono essere muniti di targa identificativa anteriormente (1) e posteriormente (2), contenente i dati di immatricolazione.",
  },
  {
    id: 2045,
    chapter: 20,
    question: "Le targhe dei veicoli devono essere:",
    options: [
      "Apposte in modo da poter essere facilmente rimosse per pulizia",
      "Apposte saldamente, in posizione corretta, sempre ben leggibili e non contraffatte",
      "Sostituite ogni 5 anni come la patente",
      "Protette da un vetro trasparente",
    ],
    correct: 1,
    explanation:
      "Le targhe devono essere apposte saldamente e in posizione corretta (non piegate), i dati devono essere sempre ben leggibili, e non devono essere manomesse o contraffatte. Se non leggibili, occorre procedere a reimmatricolazione.",
  },
  {
    id: 2046,
    chapter: 20,
    question: "I veicoli usati per le esercitazioni di guida (autoscuola) devono recare:",
    options: [
      "Una freccia arancione lampeggiante",
      "La lettera 'P' nera su sfondo bianco, anteriormente e posteriormente",
      "La sigla 'GA' su sfondo giallo",
      "Un pannello rosso con la scritta 'SCUOLA GUIDA'",
    ],
    correct: 1,
    explanation:
      "Gli autoveicoli usati per esercitazioni di guida devono essere muniti, sia anteriormente che posteriormente, di pannelli retroriflettenti con la lettera 'P' (principiante) nera su sfondo bianco.",
  },
  {
    id: 2047,
    chapter: 20,
    question: "I veicoli usati per la 'guida accompagnata' devono esporre:",
    options: [
      "Un pannello rosso con la P",
      "Un contrassegno con le lettere 'GA' su sfondo giallo",
      "Solo le frecce di emergenza accese",
      "Nessun contrassegno aggiuntivo",
    ],
    correct: 1,
    explanation:
      "Sugli autoveicoli per la 'guida accompagnata' deve essere esposto un contrassegno con le lettere GA su sfondo giallo. Solo l'allievo conducente e il suo 'accompagnatore designato' possono prendere posto nel veicolo.",
  },

  // ── 20.5 Documenti di Circolazione Obbligatori ───────────────────────────

  {
    id: 2048,
    chapter: 20,
    question: "Quali documenti deve avere con sé ed esibire il conducente a richiesta degli agenti?",
    options: [
      "Solo la patente di guida",
      "Carta di circolazione, patente valida e certificato di assicurazione RC",
      "Solo il certificato di assicurazione",
      "Carta di circolazione e codice fiscale",
    ],
    correct: 1,
    explanation:
      "Il conducente deve tenere con sé ed esibire a richiesta degli agenti: carta di circolazione del veicolo, patente di guida valida (o 'foglio rosa') e certificato di assicurazione per la responsabilità civile (può essere anche in forma digitale).",
  },
  {
    id: 2049,
    chapter: 20,
    question: "In caso di smarrimento o furto di una targa, l'intestatario deve:",
    options: [
      "Richiedere subito una nuova targa senza denunciare nulla",
      "Fare denuncia agli organi di polizia entro 48 ore",
      "Aspettare 30 giorni prima di fare la denuncia",
      "Comunicarlo solo all'assicurazione",
    ],
    correct: 1,
    explanation:
      "In caso di smarrimento, sottrazione o distruzione di una targa, l'intestatario deve fare denuncia agli organi di polizia entro 48 ore. La ricevuta della denuncia permette la circolazione del veicolo con un pannello a fondo bianco.",
  },
  {
    id: 2050,
    chapter: 20,
    question: "Il certificato di assicurazione RC obbligatoria può essere esibito agli agenti:",
    options: [
      "Solo in formato cartaceo originale",
      "Anche in formato digitale (es. sul telefono)",
      "Solo se emesso entro gli ultimi 30 giorni",
      "Solo se si è coinvolti in un incidente",
    ],
    correct: 1,
    explanation:
      "Il certificato di assicurazione per la responsabilità civile può essere esibito anche in forma digitale; non è necessario il documento cartaceo.",
  },

  // ── 20.6 Uso di Lenti e di Altri Apparecchi ──────────────────────────────

  {
    id: 2051,
    chapter: 20,
    question: "È vietato al conducente durante la marcia:",
    options: [
      "Usare il navigatore GPS montato sul veicolo",
      "Tenere in mano il cellulare o usare cuffie sonore",
      "Ascoltare la radio",
      "Usare un auricolare collegato al cellulare",
    ],
    correct: 1,
    explanation:
      "È vietato usare radiotelefonici tenendoli in mano o usare cuffie sonore. È consentito l'uso di apparecchi a viva voce o dotati di auricolare che NON richiedano l'uso delle mani per il loro funzionamento.",
  },
  {
    id: 2052,
    chapter: 20,
    question: "I sistemi di navigazione satellitare (GPS) non devono essere programmati mentre:",
    options: [
      "Si percorre un'autostrada",
      "Il veicolo è in movimento",
      "Si guida di notte",
      "Si è in una ZTL",
    ],
    correct: 1,
    explanation:
      "I sistemi di navigazione satellitare non devono essere programmati mentre il veicolo è in movimento. È consentito usarli (consultarli) solo da fermi.",
  },
  {
    id: 2053,
    chapter: 20,
    question: "Cosa indica il codice '01' riportato sulla patente di guida?",
    options: [
      "Che la patente è di prima categoria",
      "Obbligo di indossare occhiali o lenti a contatto durante la guida",
      "Che il conducente può guidare solo di giorno",
      "Che il veicolo deve avere il cambio automatico",
    ],
    correct: 1,
    explanation:
      "Il codice '01' sulla patente indica l'obbligo di usare occhiali o lenti durante la guida. Chi ha questo codice e guida senza occhiali commette un'infrazione al Codice della Strada.",
  },
  {
    id: 2054,
    chapter: 20,
    question: "Chi ha il codice 01 sulla patente (obbligo occhiali) guida senza indossarli: cosa rischia?",
    options: [
      "Nessuna sanzione se non causa incidenti",
      "Sanzione pecuniaria e possibile sospensione della patente",
      "Solo un avvertimento al primo controllo",
      "La revoca immediata della patente",
    ],
    correct: 1,
    explanation:
      "Guidare senza i dispositivi ottici prescritti (codice 01) è un'infrazione al Codice della Strada che comporta sanzione pecuniaria e possibile sospensione della patente.",
  },
];
