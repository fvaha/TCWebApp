export interface FaqItem {
  question: string;
  answer: string[];
  points?: string[];
}

export const FaqItem: FaqItem[] = [
  {
    question:
      "How is this encryption different from standard solutions like WhatsApp or Signal?",
    answer: [
      "Our technology goes beyond conventional encryption with several key advantages:",
    ],
    points: [
      "Hardware-secured keys (Secure Enclave/StrongBox) that never leave your device",
      "Perfect Forward Secrecy with automatic key regeneration",
      "Quantum-resistant algorithms (ECDSA + secp256k1) unlike standard solutions",
      "Zero-Trust architecture where even we cannot access your data",
      "Military-grade side-channel protection with randomized delays",
    ],
  },
  {
    question:
      "Why should I trust this over US-government approved encryption (P-256)?",
    answer: [
      "Our encryption provides superior privacy protection compared to standard government-approved solutions:",
    ],
    points: [
      "No NSA backdoors - we use secp256k1 (proven in blockchain) instead of suspect secp256r1 (P-256)",
      "Mathematically transparent - not developed under NSA supervision",
      "Complies with NATO/NIS 2 standards while exceeding their requirements",
      "Quantum-resilient foundation ready for post-quantum algorithms",
    ],
  },
  {
    question: "How does this protect against quantum computing attacks?",
    answer: ["Our multi-layered quantum defense system includes:"],
    points: [
      "Asymmetric encryption with secp256k1 - currently quantum-resistant",
      "Architecture designed to integrate post-quantum algorithms when needed",
      "Input obfuscation that defeats pattern analysis",
      "Perfect Forward Secrecy ensures past communications remain secure",
    ],
  },
  {
    question: "Can governments or law enforcement access my data?",
    answer: ["No. The system is designed to be truly zero-trust:"],
    points: [
      "No master keys exist that could be compelled via court order",
      "Private keys never leave your device's hardware security module",
      "Even we cannot decrypt your data - only communicating parties have access",
      "Server stores only encrypted blobs without metadata patterns",
    ],
  },
  {
    question:
      "How secure are financial transactions compared to Apple Pay/Google Pay?",
    answer: [
      "We eliminate critical vulnerabilities of mainstream payment systems:",
    ],
    points: [
      "End-to-end encrypted transactions where processors never see cleartext",
      "Hardware-bound authentication instead of centralized servers",
      "Man-in-the-middle attack protection via cryptographic proof",
      "No single point of failure - unlike Visa/Mastercard's centralized systems",
    ],
  },
  {
    question:
      "What happens if I lose my device and I have Face ID/App Lock enabled?",
    answer: [
      "Your data stays safe. No one can access the app or your messages without your Face ID, fingerprint, or app lock PIN—even if they have your device.",
    ],
    points: [
      "App lock prevents unauthorized access to your data",
      "Face ID or biometric lock is required to open the app",
      "You can remotely wipe the app if needed",
    ],
  },

  {
    question: "What happens if I lose my password?",
    answer: ["For your security, passwords cannot be recovered or reset."],
    points: [
      "If you lose your password, you will need to create a new account",
      "All your messages and app data will be permanently deleted",
      "We recommend saving your password and any recovery codes in a secure place",
    ],
  },
  {
    question: "How does this comply with regulations like GDPR and NIS 2?",
    answer: ["We exceed compliance requirements through our architecture:"],
    points: [
      "NIS 2: Full hardware key protection + Perfect Forward Secrecy",
      "GDPR: True data minimization - we cannot access user data",
      "HIPAA/GLBA: Military-grade protection for sensitive data",
      "CMMC/DFARS: Ready for defense contractor deployments",
    ],
  },
  {
    question: "Why Rust for the cryptographic SDK?",
    answer: ["We chose Rust for its unparalleled security and performance:"],
    points: [
      "Memory safety prevents 70% of critical vulnerabilities",
      "Performance matches OpenSSL with native code compilation",
      "Modern tooling with built-in package management",
      "Secure hardware integration capabilities",
    ],
  },
  {
    question: "When will the messenger/payment apps be available?",
    answer: ["Our development roadmap includes these key milestones:"],
    points: [
      "Messenger MVP: Q4 2025 (Signal/WhatsApp alternative)",
      "Encrypted Email: Q2 2026 (ProtonMail successor)",
      "Payment System: Pilot with financial institutions in 4Q 2025",
    ],
  },
  {
    question: "How can enterprises or governments implement this?",
    answer: ["We offer flexible deployment options for organizations:"],
    points: [
      "Full technology acquisition ",
      "Annual licensing",
      "Module integration",
    ],
  },
  {
    question: "What makes your solution quantum-resistant?",
    answer: ["Our quantum protection strategy includes multiple layers:"],
    points: [
      "Elliptic curve cryptography with secp256k1 (currently quantum-resistant)",
      "Designed for easy migration to post-quantum algorithms",
      "Input/output obfuscation defeats quantum pattern analysis",
      "Session keys are ephemeral and never stored",
    ],
  },
  {
    question: "How does this compare to blockchain security?",
    answer: [
      "We leverage blockchain's strongest security principles while adding:",
    ],
    points: [
      "Same secp256k1 curve used in Bitcoin/Ethereum",
      "Hardware-level key protection beyond typical crypto wallets",
      "Perfect Forward Secrecy - unlike permanent blockchain transactions",
      "Side-channel protection not found in most blockchain implementations",
    ],
  },
];
