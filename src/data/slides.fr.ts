import type { Slide } from "../types/slide";

export const slides: Slide[] = [
  {
    title: "Chiffrement de référence pour tous",
    description:
      "Communications sécurisées. Résistant au quantique. Confidentialité Zero‑Trust. Les clés privées ne quittent jamais votre appareil.",
    cta: "Voir les fonctionnalités",
    link: "#features",
    background: {
      type: 'photo',
      src: "/images/encryption-bg.jpg",
      alt: "Arrière-plan de sécurité de chiffrement"
    },
    videoLink: {
      src: "https://www.youtube.com/watch?v=example1",
      poster: "/images/video-poster1.jpg",
      alt: "Regarder notre démo de chiffrement"
    }
  },
  {
    title: "Sécurité militaire, simple",
    description:
      "Solutions chiffrées de bout en bout pour entreprises et particuliers. Fiable pour les experts en sécurité du monde entier.",
    cta: "En savoir plus",
    link: "#about",
    background: {
      type: 'video',
      src: "/videos/security-demo.mp4",
      alt: "Vidéo de démonstration de sécurité"
    }
  },
  {
    title: "Technologie résistante au quantique",
    description:
      "Sécurisez votre avenir avec des algorithmes résistants au quantique. Restez en avance sur les menaces émergentes.",
    cta: "Commencer",
    link: "#get-started",
    background: {
      type: 'photo',
      src: "/images/quantum-bg.jpg",
      alt: "Arrière-plan de technologie quantique"
    },
    videoLink: {
      src: "https://www.youtube.com/watch?v=example2",
      poster: "/images/video-poster2.jpg",
      alt: "Sécurité quantique expliquée"
    }
  },
];
