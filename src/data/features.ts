// src/data/features.ts
import { type FC } from "react";
import {
  FaShieldAlt, // Security, E2E Encryption
  FaRandom, // Obfuscation (from Fa)
  FaUserSecret, // Anonymous registration
  FaServer, // Server-related
  FaCoins, // Payments
  FaLock, // General lock/crypto
  FaFingerprint, // Biometric, Hardware security
  FaUserCheck, // Compliance
  FaCogs, // SDK, Customizable
  FaEyeSlash, // Zero-Trust/No admin access
  FaSyncAlt, // Fast & Secure comms
  FaLaptop, // Multi-Platform
  FaBookOpen, // Audit logs
} from "react-icons/fa";
import { GiAbstract023 as FaCheckShield } from "react-icons/gi";

export type Feature = {
  title: string;
  icon: FC<{ className?: string }>;
  description: string;
  points: string[];
  image?: string;
  imageDark?: string;
};

export const features: Feature[] = [
  {
    title: "End-to-End Encryption",
    icon: FaShieldAlt,
    description:
      "All data is encrypted before leaving your device, ensuring total privacy.",
    points: [
      "AES-256 + ECDSA + secp256k1",
      "Encryption for messages and payments",
      "Never accessible to third parties",
    ],
  },
  {
    title: "Hardware Key Storage",
    icon: FaFingerprint,
    description:
      "Private keys are stored in hardware modules (Secure Enclave, StrongBox) and never leave your device.",
    points: [
      "Supports iPhone, Android, TPM",
      "Zero software extraction",
      "Biometric unlock",
    ],
  },
  {
    title: "Perfect Forward Secrecy",
    icon: FaSyncAlt,
    description:
      "Every session uses fresh keys, so a compromise never exposes previous data.",
    points: [
      "Automatic key regeneration",
      "Session-level encryption",
      "No retroactive compromise",
    ],
  },
  {
    title: "Input Obfuscation",
    icon: FaRandom,
    description:
      "The same input never produces the same encrypted output, blocking traffic analysis.",
    points: [
      "Output randomness",
      "Stronger privacy",
      "Blocks known-cipher attacks",
    ],
  },
  {
    title: "Side-Channel Attack Protection",
    icon: FaLock,
    description:
      "Randomized delays and algorithmic protections defend against timing and side-channel attacks.",
    points: [
      "Timing attack resistance",
      "Obfuscated operations",
      "Hardware security",
    ],
  },
  {
    title: "Independent Rust SDK",
    icon: FaCogs,
    description:
      "A secure and efficient cryptographic SDK in Rust—fast, safe, and only accessible from your app.",
    points: [
      "Open, auditable code",
      "Lightning-fast crypto",
      "No SDK access for server",
    ],
  },
  {
    title: "No Server Key Access",
    icon: FaServer,
    description:
      "The server never stores or accesses your private keys or decrypted data—even if hacked.",
    points: ["Zero-knowledge backend", "No key escrow", "True user ownership"],
  },
  {
    title: "Encrypted Payments",
    icon: FaCoins,
    description:
      "Digital payments with hardware-backed encryption, quantum-resistant protection, and no centralized intermediaries.",
    points: [
      "End-to-end transaction encryption",
      "Works on all platforms",
      "No data leaks to processors",
    ],
  },
  {
    title: "Anonymous Registration",
    icon: FaUserSecret,
    description:
      "Sign up with a phone number—no centralized personal data collection.",
    points: [
      "No central data storage",
      "Privacy-first onboarding",
      "Optional phone verification",
    ],
  },
  {
    title: "Compliance & Standards",
    icon: FaUserCheck,
    description:
      "Fully compliant with NIS 2, HIPAA, CMMC, DFARS, NATO, and more.",
    points: [
      "GDPR & HIPAA ready",
      "Military/NATO compatible",
      "No NIST/NSA backdoors",
    ],
  },
  {
    title: "Quantum-Resistant Security",
    icon: FaCheckShield,
    description:
      "Defends against both classical and quantum attacks—future-proofed for next-gen security.",
    points: [
      "Post-quantum algorithm support",
      "secp256k1 curve",
      "Blockchain-grade cryptography",
    ],
  },
  {
    title: "Zero-Trust Architecture",
    icon: FaEyeSlash,
    description:
      "Even system admins can't access user data or keys—absolute privacy by design.",
    points: [
      "No privileged server accounts",
      "End-to-end user control",
      "Policy-driven access",
    ],
  },
  {
    title: "Ultra-Fast & Secure Communication",
    icon: FaSyncAlt,
    description:
      "Messages and payments are delivered instantly with robust security at every layer.",
    points: [
      "Fast, reliable comms",
      "Realtime encryption",
      "No performance compromise",
    ],
  },
  {
    title: "Multi-Platform Support",
    icon: FaLaptop,
    description:
      "Available on iPhone, Android, and desktop—unified experience everywhere.",
    points: ["Cross-platform SDK", "Consistent UX", "Device-based security"],
  },
  {
    title: "Detailed Audit Logging",
    icon: FaBookOpen,
    description:
      "Track every action for full transparency and regulatory compliance.",
    points: ["Immutable logs", "Compliance ready", "Complete traceability"],
  },
];
