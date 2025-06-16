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
    title: "Potpuno nova arhitektura",
    icon: FaShieldAlt,
    description: "Napredna enkripcija izvan standardnih rešenja.",
    points: [
      "Bazirano na secp256k1 krivoj",
      "Isti unos uvek daje različit izlaz",
      "Bez vladinih backdoor-ova"
    ],
  }  ,
  {
    title: "Hardversko pohranjivanje ključeva",
    icon: FaFingerprint,
    description:
      "Privatni ključevi pohranjeni su u hardverskim modulima (Secure Enclave, StrongBox) i nikada ne napuštaju uređaj.",
    points: [
      "Podrška za iPhone, Android, TPM",
      "Nema softverskog izvlačenja",
      "Biometrijsko otključavanje",
    ],
  },
  {
    title: "Perfect Forward Secrecy",
    icon: FaSyncAlt,
    description:
      "Svaka sesija koristi nove ključeve, pa kompromitacija ne otkriva prethodne podatke.",
    points: [
      "Automatska obnova ključeva",
      "Sesijska enkripcija",
      "Bez retroaktivnog kompromisa",
    ],
  },
  {
    title: "Zamagljivanje ulaza",
    icon: FaRandom,
    description:
      "Isti ulaz nikada ne daje isti šifrirani izlaz, sprječavajući analizu prometa.",
    points: [
      "Nasumični izlaz",
      "Jača privatnost",
      "Blokira napade poznatom šifrom",
    ],
  },
  {
    title: "Zaštita od bočnih kanala",
    icon: FaLock,
    description:
      "Nasumična kašnjenja i algoritamske zaštite štite od timing i bočnih napada.",
    points: [
      "Otpornost na timing napade",
      "Zamagljene operacije",
      "Hardverska sigurnost",
    ],
  },
  {
    title: "Neovisni Rust SDK",
    icon: FaCogs,
    description:
      "Sigurni i učinkoviti kriptografski SDK u Rustu – brz, siguran i dostupan samo vašoj aplikaciji.",
    points: [
      "Otvoren, provjerljiv kod",
      "Izuzetno brza kriptografija",
      "Nema serverskog pristupa SDK-u",
    ],
  },
  {
    title: "Bez pristupa ključeva na poslužitelju",
    icon: FaServer,
    description:
      "Poslužitelj nikada ne pohranjuje ni pristupa vašim privatnim ključevima ili dešifriranim podacima – čak ni ako je hakiran.",
    points: [
      "Backend s nultim znanjem",
      "Bez pohrane ključeva",
      "Pravo vlasništvo korisnika",
    ],
  },
  {
    title: "Šifrirana plaćanja",
    icon: FaCoins,
    description:
      "Digitalna plaćanja s hardverski potpomognutom enkripcijom, kvantno otpornom zaštitom i bez centralnih posrednika.",
    points: [
      "End-to-end enkripcija transakcija",
      "Radi na svim platformama",
      "Bez curenja podataka procesorima",
    ],
  },
  {
    title: "Anonimna registracija",
    icon: FaUserSecret,
    description:
      "Registrirajte se putem telefonskog broja – bez centralnog prikupljanja osobnih podataka.",
    points: [
      "Bez centralne pohrane podataka",
      "Privatnost na prvom mjestu",
      "Opcionalna provjera broja",
    ],
  },
  {
    title: "Sukladnost i standardi",
    icon: FaUserCheck,
    description:
      "Potpuno sukladno s NIS 2, HIPAA, CMMC, DFARS, NATO i ostalim propisima.",
    points: [
      "Spremno za GDPR & HIPAA",
      "Kompatibilno s vojskom/NATO-om",
      "Bez NIST/NSA backdoora",
    ],
  },
  {
    title: "Sigurnost otporna na kvantna računala",
    icon: FaCheckShield,
    description:
      "Štiti od klasičnih i kvantnih napada – budućnost je osigurana.",
    points: [
      "Podrška post-kvantnim algoritmima",
      "Krivulja secp256k1",
      "Kriptografija razine blockchaina",
    ],
  },
  {
    title: "Zero-Trust arhitektura",
    icon: FaEyeSlash,
    description:
      "Čak ni administratori sustava ne mogu pristupiti korisničkim podacima ili ključevima – potpuna privatnost po dizajnu.",
    points: [
      "Nema privilegiranih server računa",
      "Potpuna kontrola korisnika",
      "Pristup temeljen na pravilima",
    ],
  },
  {
    title: "Ultrabrza i sigurna komunikacija",
    icon: FaSyncAlt,
    description:
      "Poruke i plaćanja isporučuju se trenutno uz čvrstu sigurnost na svakoj razini.",
    points: [
      "Brza, pouzdana komunikacija",
      "Šifriranje u stvarnom vremenu",
      "Bez kompromisa u performansama",
    ],
  },
  {
    title: "Višeplatformska podrška",
    icon: FaLaptop,
    description:
      "Dostupno na iPhoneu, Androidu i računalima – jedinstveno iskustvo posvuda.",
    points: [
      "SDK za više platformi",
      "Dosljedno korisničko iskustvo",
      "Sigurnost temeljena na uređaju",
    ],
  },
  {
    title: "Detaljno evidentiranje audita",
    icon: FaBookOpen,
    description:
      "Pratite svaku radnju zbog potpune transparentnosti i regulatorne usklađenosti.",
    points: [
      "Neizmjenjivi logovi",
      "Spremno za usklađenost",
      "Potpuna sljedivost",
    ],
  },
];
