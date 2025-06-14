import type { FaqItem } from "../types/faq";

export const faqItems: FaqItem[] = [
  {
    question:
      "Po čemu se ova enkripcija razlikuje od standardnih rješenja poput WhatsAppa ili Signala?",
    answer: [
      "Naša tehnologija nadilazi konvencionalnu enkripciju i donosi nekoliko ključnih prednosti:",
    ],
    points: [
      "Ključevi zaštićeni na hardverskoj razini (Secure Enclave/StrongBox) nikada ne napuštaju vaš uređaj",
      "Perfect Forward Secrecy s automatskom regeneracijom ključeva",
      "Algoritmi otporni na kvantna računala (ECDSA + secp256k1) za razliku od standardnih rješenja",
      "Zero-Trust arhitektura u kojoj ni mi nemamo pristup vašim podacima",
      "Zaštita od bočnih kanala vojne razine sa slučajnim kašnjenjima",
    ],
  },
  {
    question:
      "Zašto bih vjerovao ovom rješenju više nego enkripciji odobrenoj od strane vlade SAD-a (P-256)?",
    answer: [
      "Naša enkripcija pruža bolju zaštitu privatnosti u odnosu na standardna, vladom odobrena rješenja:",
    ],
    points: [
      "Bez NSA back-doora – koristimo secp256k1 (dokazan u blockchainu) umjesto sumnjivog secp256r1 (P-256)",
      "Matematički transparentno – nije razvijeno pod nadzorom NSA-e",
      "U skladu s NATO/NIS 2 standardima i premašuje njihove zahtjeve",
      "Osnova otporna na kvantna računala, spremna za post-kvantne algoritme",
    ],
  },
  {
    question: "Kako ovo štiti od napada kvantnih računala?",
    answer: ["Naš višeslojni sustav zaštite od kvantnih napada uključuje:"],
    points: [
      "Asimetrična enkripcija secp256k1 – trenutno otporna na kvantna računala",
      "Arhitektura dizajnirana za integraciju post-kvantnih algoritama prema potrebi",
      "Zatamnjenje ulaznih podataka koje onemogućuje analizu uzoraka",
      "Perfect Forward Secrecy osigurava da prošla komunikacija ostane sigurna",
    ],
  },
  {
    question: "Mogu li vlade ili policija pristupiti mojim podacima?",
    answer: ["Ne. Sustav je dizajniran kao istinski Zero-Trust:"],
    points: [
      "Ne postoje master-ključevi koji bi se mogli iznuditi sudskim nalogom",
      "Privatni ključevi nikada ne napuštaju hardverski sigurnosni modul vašeg uređaja",
      "Ni mi ne možemo dešifrirati vaše podatke – pristup imaju samo komunikacijske strane",
      "Poslužitelj pohranjuje samo šifrirane podatke bez metapodataka",
    ],
  },
  {
    question:
      "Koliko su financijske transakcije sigurne u usporedbi s Apple Pay/Google Pay?",
    answer: ["Uklanjamo ključne ranjivosti uobičajenih platnih sustava:"],
    points: [
      "Transakcije su end-to-end šifrirane pa procesori nikada ne vide jasan tekst",
      "Autentikacija vezana uz hardver umjesto centraliziranih poslužitelja",
      "Zaštita od napada “man-in-the-middle” pomoću kriptografskih dokaza",
      "Nema jedne točke kvara – za razliku od centraliziranih sustava Visa/Mastercard",
    ],
  },
  {
    question:
      "Što se događa ako izgubim uređaj i imam aktiviran Face ID/Zaključavanje aplikacije?",
    answer: [
      "Vaši podaci ostaju sigurni. Nitko ne može pristupiti aplikaciji ili vašim porukama bez vašeg Face ID-a, otiska prsta ili PIN-a aplikacije — čak i ako ima vaš uređaj.",
    ],
    points: [
      "Zaključavanje aplikacije sprječava neovlašteni pristup vašim podacima",
      "Za otvaranje aplikacije potreban je Face ID ili biometrijska autentikacija",
      "Aplikaciju možete obrisati na daljinu ako je potrebno",
    ],
  },
  {
    question: "Što ako izgubim svoju lozinku?",
    answer: [
      "Radi vaše sigurnosti lozinke se ne mogu oporaviti niti resetirati.",
    ],
    points: [
      "Ako izgubite lozinku, morat ćete stvoriti novi račun",
      "Sve vaše poruke i podaci aplikacije bit će trajno izbrisani",
      "Preporučujemo da lozinku i kodove za oporavak pohranite na sigurno mjesto",
    ],
  },
  {
    question: "Kako ovo ispunjava propise poput GDPR-a i NIS 2?",
    answer: ["Naša arhitektura nadmašuje zahtjeve usklađenosti:"],
    points: [
      "NIS 2: Potpuna hardverska zaštita ključeva + Perfect Forward Secrecy",
      "GDPR: Prava minimizacija podataka – nemamo pristup korisničkim podacima",
      "HIPAA/GLBA: Zaštita osjetljivih podataka na vojnoj razini",
      "CMMC/DFARS: Spremno za primjenu kod obrambenih ugovarača",
    ],
  },
  {
    question: "Zašto Rust za kriptografski SDK?",
    answer: [
      "Odabrali smo Rust zbog njegove nenadmašne sigurnosti i performansi:",
    ],
    points: [
      "Sigurnost upravljanja memorijom sprječava 70 % kritičnih ranjivosti",
      "Performanse usporedive s OpenSSL-om zahvaljujući nativnoj kompilaciji",
      "Moderni alati s ugrađenim upravljanjem paketima",
      "Mogućnosti sigurne integracije s hardverom",
    ],
  },
  {
    question: "Kada će biti dostupne aplikacije za razmjenu poruka/plaćanja?",
    answer: ["Naš razvojni plan uključuje ove ključne prekretnice:"],
    points: [
      "Messenger MVP: Q4 2025 (alternativa Signalu/WhatsAppu)",
      "Šifrirani e-mail: Q2 2026 (nasljednik ProtonMaila)",
      "Platni sustav: pilot-projekt s financijskim institucijama u Q4 2025",
    ],
  },
  {
    question: "Kako poduzeća ili vlade mogu implementirati ovo rješenje?",
    answer: ["Nudimo fleksibilne opcije implementacije za organizacije:"],
    points: [
      "Potpuna akvizicija tehnologije",
      "Godišnja licenca",
      "Integracija modula",
    ],
  },
  {
    question: "Što čini vaše rješenje otpornim na kvantna računala?",
    answer: ["Naša strategija kvantne zaštite uključuje više slojeva:"],
    points: [
      "Kriptografija eliptičkih krivulja secp256k1 (trenutno otporna na kvantna računala)",
      "Dizajnirano za jednostavan prijelaz na post-kvantne algoritme",
      "Zatamnjenje ulaza/izlaza onemogućuje kvantnu analizu uzoraka",
      "Sesijski ključevi su privremeni i nikada se ne pohranjuju",
    ],
  },
  {
    question: "Kako se ovo uspoređuje sa sigurnošću blockchaina?",
    answer: [
      "Iskorištavamo najsnažnije sigurnosne principe blockchaina, uz dodatke:",
    ],
    points: [
      "Ista krivulja secp256k1 kao u Bitcoin/Ethereum mrežama",
      "Zaštita ključeva na hardverskoj razini, iznad tipičnih kripto-novčanika",
      "Perfect Forward Secrecy – za razliku od trajnih transakcija na blockchainu",
      "Zaštita od bočnih kanala koju većina blockchain implementacija nema",
    ],
  },
];
