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
    title: "Chiffrement de bout en bout",
    icon: FaShieldAlt,
    description:
      "Toutes les données sont chiffrées avant de quitter votre appareil, garantissant une confidentialité totale.",
    points: [
      "AES-256 + ECDSA + secp256k1",
      "Chiffrement des messages et des paiements",
      "Jamais accessible à des tiers",
    ],
  },
  {
    title: "Stockage de clés matériel",
    icon: FaFingerprint,
    description:
      "Les clés privées sont stockées dans des modules matériels (Secure Enclave, StrongBox) et ne quittent jamais votre appareil.",
    points: [
      "Prend en charge iPhone, Android, TPM",
      "Aucune extraction logicielle",
      "Déverrouillage biométrique",
    ],
  },
  {
    title: "Perfect Forward Secrecy",
    icon: FaSyncAlt,
    description:
      "Chaque session utilise de nouvelles clés ; un compromis n’expose donc jamais les données antérieures.",
    points: [
      "Régénération automatique des clés",
      "Chiffrement au niveau de la session",
      "Aucune compromission rétroactive",
    ],
  },
  {
    title: "Obfuscation des entrées",
    icon: FaRandom,
    description:
      "La même entrée ne produit jamais la même sortie chiffrée, empêchant l’analyse de trafic.",
    points: [
      "Aléa de la sortie",
      "Vie privée renforcée",
      "Bloque les attaques par chiffre connu",
    ],
  },
  {
    title: "Protection contre les canaux auxiliaires",
    icon: FaLock,
    description:
      "Des délais aléatoires et des protections algorithmiques contrent les attaques temporelles et latérales.",
    points: [
      "Résistance aux attaques temporelles",
      "Opérations obscurcies",
      "Sécurité matérielle",
    ],
  },
  {
    title: "SDK Rust indépendant",
    icon: FaCogs,
    description:
      "Un SDK cryptographique Rust sécurisé et performant : rapide, sûr, accessible uniquement par votre appli.",
    points: [
      "Code ouvert et auditable",
      "Crypto ultra-rapide",
      "Pas d’accès serveur au SDK",
    ],
  },
  {
    title: "Aucun accès serveur aux clés",
    icon: FaServer,
    description:
      "Le serveur ne stocke ni n’accède jamais à vos clés privées ou données déchiffrées, même en cas de piratage.",
    points: [
      "Backend zéro-connaissance",
      "Pas de séquestre de clés",
      "Véritable propriété utilisateur",
    ],
  },
  {
    title: "Paiements chiffrés",
    icon: FaCoins,
    description:
      "Paiements numériques avec chiffrement matériel, protection résistante au quantique et sans intermédiaires centraux.",
    points: [
      "Chiffrement de transaction de bout en bout",
      "Fonctionne sur toutes les plateformes",
      "Aucune fuite de données vers les processeurs",
    ],
  },
  {
    title: "Inscription anonyme",
    icon: FaUserSecret,
    description:
      "Inscrivez-vous avec un numéro de téléphone – aucune collecte centralisée de données personnelles.",
    points: [
      "Pas de stockage centralisé",
      "Onboarding axé sur la vie privée",
      "Vérification téléphonique facultative",
    ],
  },
  {
    title: "Conformité & normes",
    icon: FaUserCheck,
    description:
      "Entièrement conforme aux exigences NIS 2, HIPAA, CMMC, DFARS, OTAN et autres.",
    points: [
      "Prêt pour RGPD & HIPAA",
      "Compatible militaire/OTAN",
      "Aucune backdoor NIST/NSA",
    ],
  },
  {
    title: "Sécurité résistante au quantique",
    icon: FaCheckShield,
    description:
      "Protège contre les attaques classiques et quantiques : une solution pérenne.",
    points: [
      "Prise en charge des algorithmes post-quantiques",
      "Courbe secp256k1",
      "Cryptographie niveau blockchain",
    ],
  },
  {
    title: "Architecture Zero-Trust",
    icon: FaEyeSlash,
    description:
      "Même les administrateurs système ne peuvent accéder aux données ou clés – confidentialité totale par conception.",
    points: [
      "Aucun compte serveur privilégié",
      "Contrôle utilisateur de bout en bout",
      "Accès basé sur des politiques",
    ],
  },
  {
    title: "Communication ultra-rapide et sécurisée",
    icon: FaSyncAlt,
    description:
      "Messages et paiements sont livrés instantanément avec une sécurité robuste à chaque couche.",
    points: [
      "Communication rapide et fiable",
      "Chiffrement en temps réel",
      "Aucune concession de performance",
    ],
  },
  {
    title: "Prise en charge multiplateforme",
    icon: FaLaptop,
    description:
      "Disponible sur iPhone, Android et bureau – expérience unifiée partout.",
    points: [
      "SDK multiplateforme",
      "Expérience utilisateur cohérente",
      "Sécurité basée sur l’appareil",
    ],
  },
  {
    title: "Journalisation d’audit détaillée",
    icon: FaBookOpen,
    description:
      "Suivez chaque action pour une transparence totale et la conformité réglementaire.",
    points: [
      "Journaux immuables",
      "Prêt pour la conformité",
      "Traçabilité complète",
    ],
  },
];
