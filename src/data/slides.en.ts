import type { Slide } from "../types/slide";

export const slides: Slide[] = [
  {
    title: "Gold-Standard Encryption for All",
    description:
      "Secure communications. Quantum-resilient. Zero-trust privacy. Private keys never leave your device.",
    cta: "See Features",
    link: "#features",
    background: {
      type: 'photo',
      src: "/images/encryption-bg.jpg",
      alt: "Encryption security background"
    },
    videoLink: {
      src: "https://www.youtube.com/watch?v=example1",
      poster: "/images/video-poster1.jpg",
      alt: "Watch our encryption demo"
    }
  },
  {
    title: "Military-Grade Security Made Simple",
    description:
      "End-to-end encrypted solutions for businesses and individuals. Trusted by security experts worldwide.",
    cta: "Learn More",
    link: "#about",
    background: {
      type: 'video',
      src: "/videos/security-demo.mp4",
      alt: "Security demonstration video"
    }
  },
  {
    title: "Quantum-Resilient Technology",
    description:
      "Future-proof your security with quantum-resistant algorithms. Stay ahead of emerging threats.",
    cta: "Get Started",
    link: "#get-started",
    background: {
      type: 'photo',
      src: "/images/quantum-bg.jpg",
      alt: "Quantum technology background"
    },
    videoLink: {
      src: "https://www.youtube.com/watch?v=example2",
      poster: "/images/video-poster2.jpg",
      alt: "Quantum security explained"
    }
  },
];
