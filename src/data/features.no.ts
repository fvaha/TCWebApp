import type { Feature } from "../types/feature";
import {
  FaShieldAlt,
  FaRandom,
  FaUserSecret,
  FaServer,
  FaCoins,
  FaLock,
  FaFingerprint,
  FaUserCheck,
  FaCogs,
  FaEyeSlash,
  FaSyncAlt,
  FaLaptop,
  FaBookOpen,
} from "react-icons/fa";
import { GiAbstract023 as FaCheckShield } from "react-icons/gi";

export const features: Feature[] = [
  {
    title: "Ende-til-ende-kryptering",
    icon: FaShieldAlt,
    description:
      "All data krypteres før den forlater enheten din og sikrer total personvern.",
    points: [
      "AES-256 + ECDSA + secp256k1",
      "Kryptering av meldinger og betalinger",
      "Aldri tilgjengelig for tredjeparter",
    ],
  },
  {
    title: "Maskinvarelagring av nøkler",
    icon: FaFingerprint,
    description:
      "Private nøkler lagres i maskinvare-moduler (Secure Enclave, StrongBox) og forlater aldri enheten.",
    points: [
      "Støtter iPhone, Android, TPM",
      "Ingen programvareuttrekk",
      "Biometrisk opplåsing",
    ],
  },
  {
    title: "Perfect Forward Secrecy",
    icon: FaSyncAlt,
    description:
      "Hver økt bruker nye nøkler, slik at et brudd aldri avslører tidligere data.",
    points: [
      "Automatisk nøkkelgenerering",
      "Sesjonsbasert kryptering",
      "Ingen retroaktiv kompromittering",
    ],
  },
  {
    title: "Tilsløring av inndata",
    icon: FaRandom,
    description:
      "Samme inndata gir aldri samme krypterte utdata, noe som stopper trafikk-analyse.",
    points: [
      "Tilfeldig utdata",
      "Sterkere personvern",
      "Blokkerer kjent-chiffer-angrep",
    ],
  },
  {
    title: "Beskyttelse mot sidekanalangrep",
    icon: FaLock,
    description:
      "Tilfeldige forsinkelser og algoritmiske beskyttelser hindrer timing- og sidekanalangrep.",
    points: [
      "Motstand mot timing-angrep",
      "Tilslørte operasjoner",
      "Maskinvare-sikkerhet",
    ],
  },
  {
    title: "Selvstendig Rust-SDK",
    icon: FaCogs,
    description:
      "Et sikkert og effektivt kryptografisk SDK i Rust – lynraskt, trygt og kun tilgjengelig fra appen din.",
    points: [
      "Åpen, reviderbar kode",
      "Lynrask kryptografi",
      "Ingen servertilgang til SDK",
    ],
  },
  {
    title: "Ingen servertilgang til nøkler",
    icon: FaServer,
    description:
      "Serveren lagrer eller leser aldri dine private nøkler eller dekrypterte data – selv om den blir hacket.",
    points: [
      "Zero-knowledge-backend",
      "Ingen nøkkeldepositum",
      "Ekte brukereierskap",
    ],
  },
  {
    title: "Krypterte betalinger",
    icon: FaCoins,
    description:
      "Digitale betalinger med maskinvare-basert kryptering, kvantemotstandsdyktig beskyttelse og ingen sentrale mellommenn.",
    points: [
      "Ende-til-ende-kryptering av transaksjoner",
      "Fungerer på alle plattformer",
      "Ingen datalekkasjer til prosessorer",
    ],
  },
  {
    title: "Anonym registrering",
    icon: FaUserSecret,
    description:
      "Registrer deg med telefonnummer – ingen sentral innsamling av persondata.",
    points: [
      "Ingen sentral datalagring",
      "Personvern-fokusert onboarding",
      "Valgfri telefonverifisering",
    ],
  },
  {
    title: "Samsvar og standarder",
    icon: FaUserCheck,
    description: "Fullt kompatibel med NIS 2, HIPAA, CMMC, DFARS, NATO og mer.",
    points: [
      "Klar for GDPR & HIPAA",
      "Militær/​NATO-kompatibel",
      "Ingen NIST/NSA-bakdører",
    ],
  },
  {
    title: "Kvantemotstandsdyktig sikkerhet",
    icon: FaCheckShield,
    description:
      "Forsvarer mot både klassiske og kvanteangrep – fremtidssikker beskyttelse.",
    points: [
      "Støtte for post-kvantealgoritmer",
      "secp256k1-kurve",
      "Kryptografi på blokkjedenivå",
    ],
  },
  {
    title: "Zero-Trust-arkitektur",
    icon: FaEyeSlash,
    description:
      "Selv systemadministratorer kan ikke få tilgang til brukerdata eller nøkler – absolutt personvern i designet.",
    points: [
      "Ingen privilegerte serverkontoer",
      "Ende-til-ende bruker­kontroll",
      "Policy-styrt tilgang",
    ],
  },
  {
    title: "Ekstra rask og sikker kommunikasjon",
    icon: FaSyncAlt,
    description:
      "Meldinger og betalinger leveres umiddelbart med robust sikkerhet i alle lag.",
    points: [
      "Rask, pålitelig kommunikasjon",
      "Kryptering i sanntid",
      "Ingen ytelseskompromiss",
    ],
  },
  {
    title: "Flerplattformstøtte",
    icon: FaLaptop,
    description:
      "Tilgjengelig på iPhone, Android og desktop – enhetlig opplevelse overalt.",
    points: [
      "Tverrplattform-SDK",
      "Konsistent brukeropplevelse",
      "Enhetsbasert sikkerhet",
    ],
  },
  {
    title: "Detaljert revisjonslogg",
    icon: FaBookOpen,
    description: "Spor hver handling for full åpenhet og regulatorisk samsvar.",
    points: ["Uforanderlige logger", "Klar for samsvar", "Full sporbarhet"],
  },
];
