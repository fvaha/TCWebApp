const fr = {
  nav: {
    features: "Fonctionnalités",
    faq: "FAQ",
    contact: "Contact",
    token: "Token",
    roadmap: "Roadmap",
    language: "Langue",
  },
  footer: {
    brand: "TerraCrypt",
    slogan: "Nous protégeons vos données.",
    product: "Produit",
    resources: "Ressources",
    developers: "Développeurs",
    company: "Entreprise",
    legal: "Juridique",
    rights: "Tous droits réservés.",
    productLinks: [
      "Implémentation du chiffrement",
      "Système de paiement",
      "Messagerie",
      "Email chiffré",
    ],
    resourcesLinks: [
      "Support",
      "Statut du système",
      "Devenir partenaire",
      "Intégrations",
      "Actifs de marque / Logos",
      "Sécurité et conformité",
      "DPA",
      "SOC2",
      "HIPAA",
    ],
    devLinks: ["Documentation", "UI Kit", "Contribuer"],
    companyLinks: [
      "Blog",
      "Témoignages clients",
      "Carrières",
      "Entreprise",
      "Événements & Webinaires",
      "Disponibilité générale",
      "Conditions d'utilisation",
      "Politique de confidentialité",
    ],
    legalLinks: [
      "Paramètres de confidentialité",
      "Politique d'utilisation acceptable",
      "Politique de support",
      "SLA",
      "Humans.txt",
      "Lawyers.txt",
      "Security.txt",
    ],
  },
  hero: {
    logoAlt: "TerraCrypt",
    slideAria: "Aller à la diapositive",
  },
  contact: {
    heading: "Nous contacter",
    namePlaceholder: "Votre nom",
    emailPlaceholder: "Votre email",
    messagePlaceholder: "Votre message",
    send: "Envoyer le message",
    success: "Formulaire envoyé",
    infoHeading: "Pourquoi nous contacter ?",
    topics: [
      "Support technique : Problèmes d'utilisation de TerraCrypt, de l'application ou d'installation.",
      "Questions de sécurité : Rapports de vulnérabilité, pratiques de sécurité ou informations sur la confidentialité.",
      "Demandes commerciales : Achat en volume, licences entreprise ou solutions sur mesure.",
      "Suggestions de fonctionnalités : Proposer des améliorations ou de nouveaux outils pour notre plateforme.",
      "Questions générales : Retours, collaborations ou demandes médias.",
    ],
  },
  features: {
    loadMore: "Charger plus de fonctionnalités",
    useOneOrAll: "Utilisez une ou toutes.",
    subtitle: "Chaque fonctionnalité fonctionne seule ou comme plateforme.",
    platforms: "Plateformes",
  },
  faq: {
    heading: "Foire Aux Questions",
    moreInfo: "Besoin de plus d'informations ?",
    contactCTA:
      "Contactez notre équipe de sécurité pour des spécifications techniques détaillées.",
  },
  token: {
    hero: {
      title: "$TERRA",
      description: "Le token utilitaire natif alimentant l'écosystème TerraCrypt avec gouvernance, staking et accès aux fonctionnalités premium.",
    },
    stats: {
      totalSupply: "Offre totale",
      circulating: "Offre en circulation",
      marketCap: "Capitalisation boursière",
    },
    utility: {
      title: "Utilité du Token",
      features: [
        {
          title: "Gouvernance",
          description: "Votez sur les mises à jour de protocole, les propositions de fonctionnalités et les décisions d'écosystème.",
        },
        {
          title: "Récompenses de Staking",
          description: "Gagnez un revenu passif en stakant des tokens TERRA et en sécurisant le réseau.",
        },
        {
          title: "Fonctionnalités Premium",
          description: "Accédez aux fonctionnalités de chiffrement avancées et au support prioritaire avec TERRA.",
        },
        {
          title: "Frais de Transaction",
          description: "Payez pour les services premium et les fonctionnalités de chiffrement avancées.",
        },
        {
          title: "Mining de Liquidité",
          description: "Fournissez de la liquidité pour gagner des récompenses TERRA supplémentaires.",
        },
        {
          title: "Accès NFT",
          description: "Débloquez des NFTs exclusifs et des objets de collection numériques avec TERRA.",
        },
      ],
    },
    tokenomics: {
      title: "Tokenomics",
      allocation: "Allocation des Tokens",
      vesting: "Calendrier de Vesting",
      distribution: [
        { label: "Vente Publique", percentage: "40%" },
        { label: "Équipe & Conseillers", percentage: "20%" },
        { label: "Fonds de Développement", percentage: "25%" },
        { label: "Marketing & Partenariats", percentage: "10%" },
        { label: "Réserve", percentage: "5%" },
      ],
      vestingSchedule: [
        { period: "Vente Publique", percentage: "100% Débloqué" },
        { period: "Équipe & Conseillers", percentage: "2 Ans Linéaire" },
        { period: "Fonds de Développement", percentage: "3 Ans Linéaire" },
        { period: "Marketing & Partenariats", percentage: "1 An Linéaire" },
        { period: "Réserve", percentage: "4 Ans Linéaire" },
      ],
    },
    howToBuy: {
      title: "Comment Acheter TERRA",
      steps: [
        {
          title: "Créer un Portefeuille",
          description: "Configurez un MetaMask ou un autre portefeuille Web3.",
        },
        {
          title: "Obtenir ETH/BNB",
          description: "Achetez ETH ou BNB sur n'importe quel exchange.",
        },
        {
          title: "Se Connecter au DEX",
          description: "Connectez votre portefeuille à Uniswap ou PancakeSwap.",
        },
        {
          title: "Échanger contre TERRA",
          description: "Échangez votre ETH/BNB contre des tokens TERRA.",
        },
      ],
    },
    contract: {
      title: "Informations sur le Contrat",
      networks: "Adresses de Contrat",
      verification: "Vérification du Contrat",
    },
  },
  roadmap: {
    hero: {
      title: "Roadmap de Développement",
      description: "Notre parcours pour révolutionner la sécurité numérique et la confidentialité grâce à la technologie blockchain.",
    },
    timeline: [
      {
        title: "Phase de Fondation",
        period: "Q1 2024",
        description: "Lancement de l'infrastructure de base et des services de chiffrement de base.",
        completed: true,
        milestones: [
          {
            title: "Formation de l'Équipe Principale",
            description: "Équipe d'experts de cryptographes et développeurs assemblée.",
            completed: true,
          },
          {
            title: "Développement de Smart Contracts",
            description: "Contrats de token TERRA et de gouvernance terminés.",
            completed: true,
          },
          {
            title: "API de Chiffrement de Base",
            description: "Services de chiffrement de base lancés.",
            completed: true,
          },
        ],
      },
      {
        title: "Phase de Croissance",
        period: "Q2-Q3 2024",
        description: "Expansion des services et construction de la communauté.",
        completed: false,
        milestones: [
          {
            title: "Lancement du Token",
            description: "Vente publique et distribution des tokens.",
            completed: false,
          },
          {
            title: "Fonctionnalités Avancées",
            description: "Chiffrement résistant aux quantiques et protocoles avancés.",
            completed: false,
          },
          {
            title: "Développement de Partenariats",
            description: "Partenariats stratégiques avec les principales plateformes.",
            completed: false,
          },
        ],
      },
      {
        title: "Phase d'Écosystème",
        period: "Q4 2024 - Q1 2025",
        description: "Développement complet de l'écosystème et adoption de masse.",
        completed: false,
        milestones: [
          {
            title: "Intégration DeFi",
            description: "Intégration avec les principaux protocoles DeFi.",
            completed: false,
          },
          {
            title: "Solutions Entreprise",
            description: "Solutions personnalisées pour les clients entreprise.",
            completed: false,
          },
          {
            title: "Applications Mobiles",
            description: "Applications mobiles natives pour iOS et Android.",
            completed: false,
          },
        ],
      },
      {
        title: "Expansion Mondiale",
        period: "Q2-Q4 2025",
        description: "Expansion mondiale du marché et fonctionnalités avancées.",
        completed: false,
        milestones: [
          {
            title: "Partenariats Mondiaux",
            description: "Expansion dans de nouveaux marchés et régions.",
            completed: false,
          },
          {
            title: "Intégration IA Avancée",
            description: "Fonctionnalités de sécurité alimentées par l'IA et automatisation.",
            completed: false,
          },
          {
            title: "Conformité Réglementaire",
            description: "Conformité complète avec les réglementations mondiales.",
            completed: false,
          },
        ],
      },
    ],
    currentPhase: {
      title: "Progrès de la Phase Actuelle",
      name: "Phase de Croissance",
      description: "Nous sommes actuellement dans la Phase de Croissance, nous concentrant sur l'expansion de nos services et la construction de notre communauté.",
      progress: [
        { percentage: "75", label: "Lancement du Token" },
        { percentage: "60", label: "Fonctionnalités Avancées" },
        { percentage: "40", label: "Partenariats" },
      ],
    },
    futureVision: {
      title: "Vision d'Avenir",
      goals: [
        {
          title: "Adoption Mondiale",
          description: "Devenir la norme mondiale pour la sécurité numérique.",
        },
        {
          title: "Sécurité Quantique",
          description: "Diriger la transition vers le chiffrement résistant aux quantiques.",
        },
        {
          title: "Gouvernance Décentralisée",
          description: "Développement entièrement décentralisé dirigé par la communauté.",
        },
        {
          title: "Interopérabilité",
          description: "Intégration transparente avec tous les principaux réseaux blockchain.",
        },
        {
          title: "Confidentialité d'Abord",
          description: "Établir de nouvelles normes pour la confidentialité et la protection des données.",
        },
        {
          title: "Croissance Durable",
          description: "Construire un écosystème durable et rentable.",
        },
      ],
    },
    community: {
      title: "Implication de la Communauté",
      description: "Rejoignez notre communauté pour contribuer à l'avenir de la sécurité numérique.",
      channels: [
        {
          name: "Discord",
          description: "Rejoignez notre serveur Discord pour des discussions en temps réel et des mises à jour.",
          link: "#",
          cta: "Rejoindre Discord",
        },
        {
          name: "Telegram",
          description: "Restez informé avec notre canal Telegram pour les annonces.",
          link: "#",
          cta: "Rejoindre Telegram",
        },
      ],
    },
  },
};

export default fr;
