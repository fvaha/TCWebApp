import type { FaqItem } from "../types/faq";

export const faqItems: FaqItem[] = [
  {
    question:
      "En quoi ce chiffrement est-il différent des solutions standard comme WhatsApp ou Signal ?",
    answer: [
      "Notre technologie va au-delà du chiffrement conventionnel et offre plusieurs avantages clés :",
    ],
    points: [
      "Clés protégées matériellement (Secure Enclave/StrongBox) qui ne quittent jamais votre appareil",
      "Perfect Forward Secrecy avec régénération automatique des clés",
      "Algorithmes résistants au quantique (ECDSA + secp256k1) contrairement aux solutions standard",
      "Architecture Zero-Trust où même nous ne pouvons pas accéder à vos données",
      "Protection contre les canaux auxiliaires de niveau militaire avec délais aléatoires",
    ],
  },
  {
    question:
      "Pourquoi devrais-je faire confiance à cette solution plutôt qu’au chiffrement approuvé par le gouvernement américain (P-256) ?",
    answer: [
      "Notre chiffrement offre une meilleure protection de la vie privée que les solutions standards approuvées par les gouvernements :",
    ],
    points: [
      "Aucun backdoor de la NSA : nous utilisons secp256k1 (éprouvé dans la blockchain) au lieu du douteux secp256r1 (P-256)",
      "Transparence mathématique : développé hors supervision de la NSA",
      "Conforme aux normes OTAN/NIS 2 et dépasse leurs exigences",
      "Base résistante au quantique prête pour les algorithmes post-quantiques",
    ],
  },
  {
    question:
      "Comment ce système protège-t-il contre les attaques d’informatique quantique ?",
    answer: ["Notre système de défense quantique multicouche comprend :"],
    points: [
      "Chiffrement asymétrique avec secp256k1 – actuellement résistant au quantique",
      "Architecture conçue pour intégrer des algorithmes post-quantiques le moment venu",
      "Obfuscation des entrées pour déjouer l’analyse de modèles",
      "Perfect Forward Secrecy garantit que les communications passées restent sécurisées",
    ],
  },
  {
    question:
      "Les gouvernements ou les forces de l’ordre peuvent-ils accéder à mes données ?",
    answer: ["Non. Le système est conçu pour être réellement Zero-Trust :"],
    points: [
      "Aucune clé maîtresse n’existe pouvant être exigée par décision de justice",
      "Les clés privées ne quittent jamais le module de sécurité matériel de votre appareil",
      "Même nous ne pouvons pas déchiffrer vos données – seuls les correspondants y ont accès",
      "Le serveur ne stocke que des blobs chiffrés sans métadonnées",
    ],
  },
  {
    question:
      "Quelle est la sécurité des transactions financières comparée à Apple Pay/Google Pay ?",
    answer: [
      "Nous éliminons les vulnérabilités critiques des systèmes de paiement traditionnels :",
    ],
    points: [
      "Transactions chiffrées de bout en bout, les processeurs ne voient jamais de texte clair",
      "Authentification liée au matériel plutôt que serveurs centralisés",
      "Protection contre les attaques « man-in-the-middle » via preuves cryptographiques",
      "Aucun point de défaillance unique – contrairement aux systèmes centralisés Visa/Mastercard",
    ],
  },
  {
    question:
      "Que se passe-t-il si je perds mon appareil et que Face ID/verrouillage de l’application est activé ?",
    answer: [
      "Vos données restent protégées. Personne ne peut accéder à l’application ni à vos messages sans votre Face ID, empreinte ou code PIN, même s’il possède votre appareil.",
    ],
    points: [
      "Le verrouillage de l’app empêche tout accès non autorisé à vos données",
      "Face ID ou une authentification biométrique est requis pour ouvrir l’app",
      "Vous pouvez effacer l’app à distance si nécessaire",
    ],
  },
  {
    question: "Que se passe-t-il si je perds mon mot de passe ?",
    answer: [
      "Pour votre sécurité, les mots de passe ne peuvent pas être récupérés ni réinitialisés.",
    ],
    points: [
      "Si vous perdez votre mot de passe, vous devrez créer un nouveau compte",
      "Tous vos messages et données d’app seront définitivement supprimés",
      "Nous recommandons de conserver votre mot de passe et vos codes de récupération en lieu sûr",
    ],
  },
  {
    question:
      "Comment cette solution est-elle conforme aux réglementations comme le RGPD et la NIS 2 ?",
    answer: ["Notre architecture dépasse les exigences de conformité :"],
    points: [
      "NIS 2 : Protection complète des clés par matériel + Perfect Forward Secrecy",
      "RGPD : véritable minimisation des données – nous ne pouvons pas accéder aux données utilisateur",
      "HIPAA/GLBA : protection de niveau militaire pour les données sensibles",
      "CMMC/DFARS : prêt pour les déploiements chez les contractants de défense",
    ],
  },
  {
    question: "Pourquoi avoir choisi Rust pour le SDK cryptographique ?",
    answer: [
      "Nous avons choisi Rust pour sa sécurité et ses performances incomparables :",
    ],
    points: [
      "Sécurité mémoire évitant 70 % des vulnérabilités critiques",
      "Performances équivalentes à OpenSSL grâce à la compilation native",
      "Outils modernes avec gestion de paquets intégrée",
      "Capacité d’intégration sécurisée avec du matériel",
    ],
  },
  {
    question:
      "Quand les applications de messagerie/paiement seront-elles disponibles ?",
    answer: ["Notre feuille de route comprend les jalons suivants :"],
    points: [
      "Messenger MVP : T4 2025 (alternative à Signal/WhatsApp)",
      "E-mail chiffré : T2 2026 (successeur de ProtonMail)",
      "Système de paiement : pilote avec des institutions financières au T4 2025",
    ],
  },
  {
    question:
      "Comment les entreprises ou les gouvernements peuvent-ils déployer cette solution ?",
    answer: [
      "Nous proposons des options de déploiement flexibles pour les organisations :",
    ],
    points: [
      "Acquisition complète de la technologie",
      "Licence annuelle",
      "Intégration modulaire",
    ],
  },
  {
    question: "Qu’est-ce qui rend votre solution résistante au quantique ?",
    answer: [
      "Notre stratégie de protection quantique comporte plusieurs couches :",
    ],
    points: [
      "Cryptographie à courbe elliptique secp256k1 (actuellement résistante au quantique)",
      "Conçue pour migrer aisément vers des algorithmes post-quantiques",
      "Obfuscation des entrées/sorties empêchant l’analyse de modèles quantiques",
      "Les clés de session sont éphémères et jamais stockées",
    ],
  },
  {
    question: "Comment cela se compare-t-il à la sécurité de la blockchain ?",
    answer: [
      "Nous tirons parti des principes de sécurité les plus solides de la blockchain tout en ajoutant :",
    ],
    points: [
      "La même courbe secp256k1 utilisée dans Bitcoin/Ethereum",
      "Protection des clés au niveau matériel au-delà des portefeuilles crypto classiques",
      "Perfect Forward Secrecy – contrairement aux transactions permanentes de la blockchain",
      "Protection contre les canaux auxiliaires absente de la plupart des implémentations blockchain",
    ],
  },
];
