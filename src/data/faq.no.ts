import type { FaqItem } from "../types/faq";

export const faqItems: FaqItem[] = [
  {
    question:
      "Hvordan skiller denne krypteringen seg fra standardløsninger som WhatsApp eller Signal?",
    answer: [
      "Teknologien vår går lenger enn konvensjonell kryptering og gir flere viktige fordeler:",
    ],
    points: [
      "Maskinvarebeskyttede nøkler (Secure Enclave/StrongBox) som aldri forlater enheten din",
      "Perfect Forward Secrecy med automatisk nøkkelgenerering",
      "Kvantemotstandsdyktige algoritmer (ECDSA + secp256k1) i motsetning til vanlige løsninger",
      "Zero-Trust-arkitektur der selv vi ikke kan få tilgang til dataene dine",
      "Sidekanalbeskyttelse på militært nivå med tilfeldige forsinkelser",
    ],
  },
  {
    question:
      "Hvorfor bør jeg stole mer på dette enn på krypteringen godkjent av USAs myndigheter (P-256)?",
    answer: [
      "Krypteringen vår gir bedre personvern enn standardløsninger godkjent av myndigheter:",
    ],
    points: [
      "Ingen NSA-bakdører – vi bruker secp256k1 (testet i blokkjeden) i stedet for tvilsomme secp256r1 (P-256)",
      "Full matematisk åpenhet – ikke utviklet under NSA-tilsyn",
      "Overholder NATO/NIS 2-standarder og overgår kravene deres",
      "Kvantemotstandsdyktig grunnlag klart for post-kvantealgoritmer",
    ],
  },
  {
    question: "Hvordan beskytter dette mot kvantedatangrep?",
    answer: ["Vårt flerlags kvanteforsvar omfatter:"],
    points: [
      "Asymmetrisk kryptering med secp256k1 – per i dag kvantesikker",
      "Arkitektur designet for å integrere post-kvantealgoritmer ved behov",
      "Tilsløring av inndata som hindrer mønstergjenkjenning",
      "Perfect Forward Secrecy sikrer at tidligere kommunikasjon forblir trygg",
    ],
  },
  {
    question: "Kan myndigheter eller politi få tilgang til dataene mine?",
    answer: ["Nei. Systemet er bygget for ekte Zero-Trust:"],
    points: [
      "Det finnes ingen hovednøkler som kan kreves utlevert ved rettskjennelse",
      "Private nøkler forlater aldri enhetens maskinvare-sikkerhetsmodul",
      "Selv vi kan ikke dekryptere dataene dine – kun partene som kommuniserer har tilgang",
      "Serveren lagrer kun krypterte data uten metadata-mønstre",
    ],
  },
  {
    question:
      "Hvor sikre er finansielle transaksjoner sammenlignet med Apple Pay/Google Pay?",
    answer: [
      "Vi fjerner kritiske svakheter i de vanligste betalingssystemene:",
    ],
    points: [
      "End-to-end-krypterte transaksjoner der prosessorene aldri ser klartekst",
      "Maskinvarebasert autentisering i stedet for sentraliserte servere",
      "Beskyttelse mot man-in-the-middle-angrep via kryptografisk bevis",
      "Ingen enkelt feilpunkt – i motsetning til Visa/Mastercards sentraliserte systemer",
    ],
  },
  {
    question:
      "Hva skjer hvis jeg mister enheten min og Face ID/App-lås er aktivert?",
    answer: [
      "Dataene dine forblir trygge. Ingen kan åpne appen eller meldingene dine uten Face ID, fingeravtrykk eller app-PIN – selv om de har enheten din.",
    ],
    points: [
      "App-lås hindrer uautorisert tilgang til dataene dine",
      "Face ID eller biometri er påkrevd for å åpne appen",
      "Du kan fjernslette appen om nødvendig",
    ],
  },
  {
    question: "Hva skjer hvis jeg mister passordet mitt?",
    answer: [
      "Av sikkerhetsgrunner kan passord ikke gjenopprettes eller tilbakestilles.",
    ],
    points: [
      "Hvis du mister passordet, må du opprette en ny konto",
      "Alle meldinger og appdata blir permanent slettet",
      "Vi anbefaler å lagre passordet og eventuelle gjenopprettingskoder på et sikkert sted",
    ],
  },
  {
    question: "Hvordan oppfyller dette regelverk som GDPR og NIS 2?",
    answer: ["Arkitekturen vår overgår kravene til etterlevelse:"],
    points: [
      "NIS 2: Full maskinvarebeskyttelse av nøkler + Perfect Forward Secrecy",
      "GDPR: Ekte dataminimering – vi har ingen tilgang til brukerdata",
      "HIPAA/GLBA: Militærsikker beskyttelse av sensitive data",
      "CMMC/DFARS: Klar for distribusjon hos forsvarsleverandører",
    ],
  },
  {
    question: "Hvorfor Rust for det kryptografiske SDK-et?",
    answer: ["Vi valgte Rust for enestående sikkerhet og ytelse:"],
    points: [
      "Minnesikkerhet forhindrer 70 % av kritiske sårbarheter",
      "Ytelse på nivå med OpenSSL takket være native kompilering",
      "Moderne verktøykjede med innebygd pakkehåndtering",
      "Sikker integrasjon mot maskinvare",
    ],
  },
  {
    question: "Når blir melding/betaling-appene tilgjengelige?",
    answer: ["Vår utviklingsplan inkluderer disse milepælene:"],
    points: [
      "Meldings-MVP: Q4 2025 (alternativ til Signal/WhatsApp)",
      "Kryptert e-post: Q2 2026 (arvtaker til ProtonMail)",
      "Betalingssystem: pilot med finansinstitusjoner i Q4 2025",
    ],
  },
  {
    question: "Hvordan kan bedrifter eller myndigheter ta dette i bruk?",
    answer: ["Vi tilbyr fleksible distribusjonsalternativer:"],
    points: [
      "Full teknologiovertakelse",
      "Årlig lisensiering",
      "Modul-integrasjon",
    ],
  },
  {
    question: "Hva gjør løsningen deres kvantemotstandsdyktig?",
    answer: ["Kvantebeskyttelsesstrategien vår består av flere lag:"],
    points: [
      "Elliptisk-kurve-kryptografi med secp256k1 (for tiden kvantesikker)",
      "Designet for enkel overgang til post-kvantealgoritmer",
      "Tilsløring av inn-/utdata hindrer kvantemønstergjenkjenning",
      "Sesjonsnøkler er flyktige og lagres aldri",
    ],
  },
  {
    question: "Hvordan sammenlignes dette med blokkjedesikkerhet?",
    answer: [
      "Vi utnytter blokkjedens sterkeste sikkerhetsprinsipper og legger til:",
    ],
    points: [
      "Samme secp256k1-kurve som brukes i Bitcoin/Ethereum",
      "Maskinvarebasert nøkkelbeskyttelse utover vanlige kryptolommebøker",
      "Perfect Forward Secrecy – i motsetning til permanente blokkjede-transaksjoner",
      "Sidekanalbeskyttelse som mangler i de fleste blokkjedeimplementasjoner",
    ],
  },
];
