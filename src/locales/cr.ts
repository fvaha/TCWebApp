const cr = {
  nav: {
    features: "Značajke",
    faq: "FAQ",
    contact: "Kontakt",
    token: "Token",
    roadmap: "Roadmap",
    language: "Jezik",
  },
  footer: {
    brand: "TerraCrypt",
    slogan: "Štitimo vaše podatke.",
    product: "Proizvod",
    resources: "Resursi",
    developers: "Razvojni programeri",
    company: "Tvrtka",
    legal: "Pravno",
    rights: "Sva prava pridržana.",
    productLinks: [
      "Implementacija enkripcije",
      "Sustav plaćanja",
      "Messenger",
      "Kriptirani e-mail",
    ],
    resourcesLinks: [
      "Podrška",
      "Status sustava",
      "Postanite partner",
      "Integracije",
      "Brendirani resursi / Logotipi",
      "Sigurnost i usklađenost",
      "DPA",
      "SOC2",
      "HIPAA",
    ],
    devLinks: ["Dokumentacija", "UI Kit", "Doprinos"],
    companyLinks: [
      "Blog",
      "Priče korisnika",
      "Karijere",
      "Tvrtka",
      "Događaji i webinari",
      "Opća dostupnost",
      "Uvjeti korištenja",
      "Politika privatnosti",
    ],
    legalLinks: [
      "Postavke privatnosti",
      "Pravila prihvatljive upotrebe",
      "Pravila podrške",
      "SLA",
      "Humans.txt",
      "Lawyers.txt",
      "Security.txt",
    ],
  },
  hero: {
    logoAlt: "TerraCrypt",
    slideAria: "Idi na slajd",
  },
  contact: {
    heading: "Kontaktirajte nas",
    namePlaceholder: "Vaše ime",
    emailPlaceholder: "Vaš e-mail",
    messagePlaceholder: "Vaša poruka",
    send: "Pošalji poruku",
    success: "Obrazac poslan",
    infoHeading: "O čemu nas možete kontaktirati?",
    topics: [
      "Tehnička podrška: Problemi s korištenjem TerraCrypta, aplikacijom ili instalacijom.",
      "Sigurnosna pitanja: Prijava ranjivosti, pitanja o sigurnosti ili privatnosti.",
      "Poslovni upiti: Kupnja većih količina, enterprise licence ili prilagođena rješenja.",
      "Prijedlozi za značajke: Predložite poboljšanja ili nove alate za našu platformu.",
      "Opća pitanja: Povratne informacije, suradnja ili medijski upiti.",
    ],
  },
  features: {
    loadMore: "Učitaj više značajki",
    useOneOrAll: "Koristite jednu ili sve.",
    subtitle: "Svaka značajka radi samostalno ili kao platforma.",
    platforms: "Platforme",
  },
  faq: {
    heading: "Često postavljana pitanja",
    moreInfo: "Trebate više informacija?",
    contactCTA: "Kontaktirajte naš sigurnosni tim za tehničke specifikacije.",
  },
  token: {
    hero: {
      title: "$TERRA",
      description: "Nativni utility token koji pokreće TerraCrypt ekosustav s upravljanjem, stakingom i pristupom premium značajkama.",
    },
    stats: {
      totalSupply: "Ukupna ponuda",
      circulating: "Ponuda u opticaju",
      marketCap: "Tržišna kapitalizacija",
    },
    utility: {
      title: "Korist Tokena",
      features: [
        {
          title: "Upravljanje",
          description: "Glasajte o nadogradnjama protokola, prijedlozima značajki i odlukama ekosustava.",
        },
        {
          title: "Staking nagrade",
          description: "Zarađujte pasivni prihod stakingom TERRA tokena i osiguravanjem mreže.",
        },
        {
          title: "Premium značajke",
          description: "Pristup naprednim enkripcijskim značajkama i prioritetnoj podršci s TERRA.",
        },
        {
          title: "Naknade za transakcije",
          description: "Platite za premium usluge i napredne enkripcijske značajke.",
        },
        {
          title: "Mining likvidnosti",
          description: "Osigurajte likvidnost za zaradu dodatnih TERRA nagrada.",
        },
        {
          title: "Pristup NFT",
          description: "Otključajte ekskluzivne NFT-ove i digitalne kolekcionarske predmete s TERRA.",
        },
      ],
    },
    tokenomics: {
      title: "Tokenomics",
      allocation: "Distribucija tokena",
      vesting: "Raspored vestinga",
      distribution: [
        { label: "Javna prodaja", percentage: "40%" },
        { label: "Tim & Savjetnici", percentage: "20%" },
        { label: "Fond za razvoj", percentage: "25%" },
        { label: "Marketing & Partnerstva", percentage: "10%" },
        { label: "Rezerva", percentage: "5%" },
      ],
      vestingSchedule: [
        { period: "Javna prodaja", percentage: "100% Otključano" },
        { period: "Tim & Savjetnici", percentage: "2 godine linearno" },
        { period: "Fond za razvoj", percentage: "3 godine linearno" },
        { period: "Marketing & Partnerstva", percentage: "1 godina linearno" },
        { period: "Rezerva", percentage: "4 godine linearno" },
      ],
    },
    howToBuy: {
      title: "Kako kupiti TERRA",
      steps: [
        {
          title: "Stvorite novčanik",
          description: "Postavite MetaMask ili drugi Web3 novčanik.",
        },
        {
          title: "Nabavite ETH/BNB",
          description: "Kupite ETH ili BNB na bilo kojoj burzi.",
        },
        {
          title: "Povežite s DEX",
          description: "Povežite svoj novčanik s Uniswap ili PancakeSwap.",
        },
        {
          title: "Zamijenite za TERRA",
          description: "Zamijenite svoj ETH/BNB za TERRA tokene.",
        },
      ],
    },
    contract: {
      title: "Informacije o ugovoru",
      networks: "Adrese ugovora",
      verification: "Verifikacija ugovora",
    },
  },
  roadmap: {
    hero: {
      title: "Razvojna Roadmap",
      description: "Naše putovanje za revoluciju digitalne sigurnosti i privatnosti kroz blockchain tehnologiju.",
    },
    timeline: [
      {
        title: "Faza temelja",
        period: "Q1 2024",
        description: "Pokretanje osnovne infrastrukture i osnovnih enkripcijskih usluga.",
        completed: true,
        milestones: [
          {
            title: "Formiranje glavnog tima",
            description: "Sastavljen tim stručnjaka kriptografa i programera.",
            completed: true,
          },
          {
            title: "Razvoj pametnih ugovora",
            description: "Završeni TERRA token i upravljački ugovori.",
            completed: true,
          },
          {
            title: "Osnovna enkripcijska API",
            description: "Pokrenute osnovne enkripcijske usluge.",
            completed: true,
          },
        ],
      },
      {
        title: "Faza rasta",
        period: "Q2-Q3 2024",
        description: "Proširenje usluga i izgradnja zajednice.",
        completed: false,
        milestones: [
          {
            title: "Lansiranje tokena",
            description: "Javna prodaja i distribucija tokena.",
            completed: false,
          },
          {
            title: "Napredne značajke",
            description: "Kvantno otporna enkripcija i napredni protokoli.",
            completed: false,
          },
          {
            title: "Razvoj partnerstava",
            description: "Strateška partnerstva s glavnim platformama.",
            completed: false,
          },
        ],
      },
      {
        title: "Faza ekosustava",
        period: "Q4 2024 - Q1 2025",
        description: "Potpuni razvoj ekosustava i masovna adopcija.",
        completed: false,
        milestones: [
          {
            title: "DeFi integracija",
            description: "Integracija s glavnim DeFi protokolima.",
            completed: false,
          },
          {
            title: "Enterprise rješenja",
            description: "Prilagođena rješenja za enterprise klijente.",
            completed: false,
          },
          {
            title: "Mobilne aplikacije",
            description: "Nativne mobilne aplikacije za iOS i Android.",
            completed: false,
          },
        ],
      },
      {
        title: "Globalna ekspanzija",
        period: "Q2-Q4 2025",
        description: "Globalna ekspanzija tržišta i napredne značajke.",
        completed: false,
        milestones: [
          {
            title: "Globalna partnerstva",
            description: "Ekspanzija u nove tržište i regije.",
            completed: false,
          },
          {
            title: "Napredna AI integracija",
            description: "AI-powered sigurnosne značajke i automatizacija.",
            completed: false,
          },
          {
            title: "Regulatorna usklađenost",
            description: "Potpuna usklađenost s globalnim regulacijama.",
            completed: false,
          },
        ],
      },
    ],
    currentPhase: {
      title: "Napredak trenutne faze",
      name: "Faza rasta",
      description: "Trenutno smo u fazi rasta, fokusirajući se na proširenje naših usluga i izgradnju naše zajednice.",
      progress: [
        { percentage: "75", label: "Lansiranje tokena" },
        { percentage: "60", label: "Napredne značajke" },
        { percentage: "40", label: "Partnerstva" },
      ],
    },
    futureVision: {
      title: "Buduća vizija",
      goals: [
        {
          title: "Globalna adopcija",
          description: "Postati globalni standard za digitalnu sigurnost.",
        },
        {
          title: "Kvantna sigurnost",
          description: "Voditi prijelaz na kvantno otpornu enkripciju.",
        },
        {
          title: "Decentralizirano upravljanje",
          description: "Potpuno decentralizirani razvoj vođen zajednicom.",
        },
        {
          title: "Interoperabilnost",
          description: "Besprijekorna integracija sa svim glavnim blockchain mrežama.",
        },
        {
          title: "Privatnost prva",
          description: "Postaviti nove standarde za privatnost i zaštitu podataka.",
        },
        {
          title: "Održivi rast",
          description: "Izgraditi održiv i profitabilan ekosustav.",
        },
      ],
    },
    community: {
      title: "Uključivanje zajednice",
      description: "Pridružite se našoj zajednici da doprinosite budućnosti digitalne sigurnosti.",
      channels: [
        {
          name: "Discord",
          description: "Pridružite se našem Discord serveru za rasprave u stvarnom vremenu i ažuriranja.",
          link: "#",
          cta: "Pridruži se Discordu",
        },
        {
          name: "Telegram",
          description: "Ostanite ažurirani s našim Telegram kanalom za objave.",
          link: "#",
          cta: "Pridruži se Telegramu",
        },
      ],
    },
  },
};
export default cr;
