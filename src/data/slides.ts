export interface Slide {
  title: string;
  description: string;
  cta: string;
  link: string;
}

export const slides: Slide[] = [
  {
    title: "Gold-Standard Encryption for All",
    description:
      "Secure communications. Quantum-resilient. Zero-trust privacy. Private keys never leave your device.",
    cta: "See Features",
    link: "#features",
  },
  {
    title: "Military-Grade Security Made Simple",
    description:
      "End-to-end encrypted solutions for businesses and individuals. Trusted by security experts worldwide.",
    cta: "Learn More",
    link: "#about",
  },
  // Add more slides here as needed
];
