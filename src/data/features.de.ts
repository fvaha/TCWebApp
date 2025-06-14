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

/* ---------- German (de) ---------- */
export const features: Feature[] = [
  {
    title: "Ende-zu-Ende-Verschlüsselung",
    icon: FaShieldAlt,
    description:
      "Alle Daten werden vor dem Verlassen Ihres Geräts verschlüsselt und gewährleisten vollständige Privatsphäre.",
    points: [
      "AES-256 + ECDSA + secp256k1",
      "Verschlüsselung für Nachrichten und Zahlungen",
      "Nie für Dritte zugänglich",
    ],
  },
  {
    title: "Hardware-Schlüsselspeicherung",
    icon: FaFingerprint,
    description:
      "Private Schlüssel werden in Hardware-Modulen (Secure Enclave, StrongBox) gespeichert und verlassen Ihr Gerät niemals.",
    points: [
      "Unterstützt iPhone, Android, TPM",
      "Keine softwarebasierte Extraktion",
      "Biometrische Entsperrung",
    ],
  },
  {
    title: "Perfect Forward Secrecy",
    icon: FaSyncAlt,
    description:
      "Jede Sitzung nutzt frische Schlüssel, sodass ein Kompromiss niemals frühere Daten offenlegt.",
    points: [
      "Automatische Schlüsselerneuerung",
      "Sitzungsbezogene Verschlüsselung",
      "Kein rückwirkender Kompromiss",
    ],
  },
  {
    title: "Eingabe-Verschleierung",
    icon: FaRandom,
    description:
      "Die gleiche Eingabe erzeugt nie die gleiche verschlüsselte Ausgabe und verhindert Verkehrsanalysen.",
    points: [
      "Ausgabezufälligkeit",
      "Stärkere Privatsphäre",
      "Blockiert bekannte-Chiffre-Angriffe",
    ],
  },
  {
    title: "Schutz vor Seitenkanalangriffen",
    icon: FaLock,
    description:
      "Zufällige Verzögerungen und algorithmische Schutzmechanismen wehren Timing- und Seitenkanalangriffe ab.",
    points: [
      "Widerstand gegen Timing-Angriffe",
      "Verschleierte Operationen",
      "Hardware-Sicherheit",
    ],
  },
  {
    title: "Unabhängiges Rust-SDK",
    icon: FaCogs,
    description:
      "Ein sicheres, effizientes Kryptografie-SDK in Rust – schnell, sicher und nur für Ihre App zugänglich.",
    points: [
      "Offener, prüfbarer Code",
      "Blitzschnelle Kryptografie",
      "Kein SDK-Zugriff für den Server",
    ],
  },
  {
    title: "Kein Server-Zugriff auf Schlüssel",
    icon: FaServer,
    description:
      "Der Server speichert oder liest niemals Ihre privaten Schlüssel oder entschlüsselten Daten – selbst wenn er gehackt wird.",
    points: [
      "Zero-Knowledge-Backend",
      "Keine Schlüssel-Hinterlegung",
      "Echte Nutzer-Eigentümerschaft",
    ],
  },
  {
    title: "Verschlüsselte Zahlungen",
    icon: FaCoins,
    description:
      "Digitale Zahlungen mit hardware-gestützter Verschlüsselung, quantenresistentem Schutz und ohne zentrale Vermittler.",
    points: [
      "Ende-zu-Ende-Transaktionsverschlüsselung",
      "Funktioniert auf allen Plattformen",
      "Keine Datenlecks an Zahlungsprozessoren",
    ],
  },
  {
    title: "Anonyme Registrierung",
    icon: FaUserSecret,
    description:
      "Registrieren Sie sich mit einer Telefonnummer – ohne zentrale Erfassung personenbezogener Daten.",
    points: [
      "Keine zentrale Datenspeicherung",
      "Privacy-First-Onboarding",
      "Optionale Telefonverifizierung",
    ],
  },
  {
    title: "Compliance & Standards",
    icon: FaUserCheck,
    description:
      "Vollständig konform mit NIS 2, HIPAA, CMMC, DFARS, NATO und mehr.",
    points: [
      "GDPR- & HIPAA-bereit",
      "Militär/NATO-kompatibel",
      "Keine NIST/NSA-Backdoors",
    ],
  },
  {
    title: "Quantenresistente Sicherheit",
    icon: FaCheckShield,
    description:
      "Verteidigt gegen klassische und Quantenangriffe – zukunftssicher für die nächste Sicherheitsgeneration.",
    points: [
      "Unterstützung post-quanter Algorithmen",
      "secp256k1-Kurve",
      "Blockchain-grade Kryptografie",
    ],
  },
  {
    title: "Zero-Trust-Architektur",
    icon: FaEyeSlash,
    description:
      "Selbst Admins können nicht auf Benutzerdaten oder Schlüssel zugreifen – absolute Privatsphäre by Design.",
    points: [
      "Keine privilegierten Serverkonten",
      "Ende-zu-Ende-Benutzerkontrolle",
      "Richtliniengesteuerter Zugriff",
    ],
  },
  {
    title: "Ultraschnelle & sichere Kommunikation",
    icon: FaSyncAlt,
    description:
      "Nachrichten und Zahlungen werden sofort mit robuster Sicherheit in jeder Schicht zugestellt.",
    points: [
      "Schnelle, zuverlässige Kommunikation",
      "Echtzeit-Verschlüsselung",
      "Keine Performance-Einbußen",
    ],
  },
  {
    title: "Multi-Plattform-Unterstützung",
    icon: FaLaptop,
    description:
      "Verfügbar auf iPhone, Android und Desktop – einheitliches Erlebnis überall.",
    points: [
      "Plattformübergreifendes SDK",
      "Konsistente Benutzererfahrung",
      "Gerätebasierte Sicherheit",
    ],
  },
  {
    title: "Detaillierte Audit-Protokollierung",
    icon: FaBookOpen,
    description:
      "Verfolgen Sie jede Aktion für vollständige Transparenz und regulatorische Compliance.",
    points: [
      "Unveränderliche Logs",
      "Compliance-bereit",
      "Vollständige Nachverfolgbarkeit",
    ],
  },
];
