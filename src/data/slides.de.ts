import type { Slide } from "../types/slide";

export const slides: Slide[] = [
  {
    title: "Gold Standard Verschlüsselung für alle",
    description:
      "Sichere Kommunikation. Quantenresistent. Zero‑Trust‑Privatsphäre. Private Schlüssel verlassen nie Ihr Gerät.",
    cta: "Funktionalitäten ansehen",
    link: "#features",
    background: {
      type: 'photo',
      src: "/images/encryption-bg.jpg",
      alt: "Verschlüsselung Sicherheitshintergrund"
    },
    videoLink: {
      src: "https://www.youtube.com/watch?v=example1",
      poster: "/images/video-poster1.jpg",
      alt: "Verschlüsselungsdemo ansehen"
    }
  },
  {
    title: "Militärische Sicherheit, einfach gemacht",
    description:
      "End‑to‑End‑verschlüsselte Lösungen für Unternehmen und Privatpersonen. Weltweit von Sicherheitsexperten vertraut.",
    cta: "Mehr erfahren",
    link: "#about",
    background: {
      type: 'video',
      src: "/videos/security-demo.mp4",
      alt: "Sicherheitsdemonstrationsvideo"
    }
  },
  {
    title: "Quantenresistente Technologie",
    description:
      "Zukunftssichere Sicherheit mit quantenresistenten Algorithmen. Bleiben Sie Bedrohungen einen Schritt voraus.",
    cta: "Jetzt starten",
    link: "#get-started",
    background: {
      type: 'photo',
      src: "/images/quantum-bg.jpg",
      alt: "Quantentechnologie Hintergrund"
    },
    videoLink: {
      src: "https://www.youtube.com/watch?v=example2",
      poster: "/images/video-poster2.jpg",
      alt: "Quantensicherheit erklärt"
    }
  },
];
