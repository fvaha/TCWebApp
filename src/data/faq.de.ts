import type { FaqItem } from "../types/faq";

export const faqItems: FaqItem[] = [
  {
    question:
      "Wodurch unterscheidet sich diese Verschlüsselung von Standardlösungen wie WhatsApp oder Signal?",
    answer: [
      "Unsere Technologie geht über herkömmliche Verschlüsselung hinaus und bietet mehrere entscheidende Vorteile:",
    ],
    points: [
      "Hardware-gesicherte Schlüssel (Secure Enclave/StrongBox), die Ihr Gerät niemals verlassen",
      "Perfect Forward Secrecy mit automatischer Schlüsselerneuerung",
      "Quantenresistente Algorithmen (ECDSA + secp256k1) anstelle gängiger Lösungen",
      "Zero-Trust-Architektur, bei der selbst wir keinen Zugriff auf Ihre Daten haben",
      "Seitkanalschutz in Militärqualität mit zufälligen Verzögerungen",
    ],
  },
  {
    question:
      "Warum sollte ich dieser Lösung mehr vertrauen als von der US-Regierung genehmigten Verschlüsselungen (P-256)?",
    answer: [
      "Unsere Verschlüsselung bietet im Vergleich zu behördlich genehmigten Standards einen überlegenen Datenschutz:",
    ],
    points: [
      "Keine NSA-Hintertüren – wir nutzen secp256k1 (bewährt in der Blockchain) statt des verdächtigen secp256r1 (P-256)",
      "Mathematisch transparent – nicht unter Aufsicht der NSA entwickelt",
      "Erfüllt NATO/NIS-2-Standards und übertrifft deren Anforderungen",
      "Quantenresistente Basis, vorbereitet auf Post-Quanten-Algorithmen",
    ],
  },
  {
    question: "Wie schützt das System vor Angriffen durch Quantencomputer?",
    answer: ["Unser mehrschichtiges Quantenschutzsystem umfasst:"],
    points: [
      "Asymmetrische Verschlüsselung mit secp256k1 – derzeit quantenresistent",
      "Architektur, die bei Bedarf Post-Quanten-Algorithmen integriert",
      "Eingabe-Obfuskation zur Abwehr von Musteranalysen",
      "Perfect Forward Secrecy sorgt dafür, dass vergangene Kommunikation sicher bleibt",
    ],
  },
  {
    question:
      "Können Regierungen oder Strafverfolgungsbehörden auf meine Daten zugreifen?",
    answer: ["Nein. Das System ist auf echten Zero-Trust ausgelegt:"],
    points: [
      "Es existieren keine Generalschlüssel, die per Gerichtsbeschluss erzwungen werden könnten",
      "Private Schlüssel verlassen niemals das Hardware-Sicherheitsmodul Ihres Geräts",
      "Selbst wir können Ihre Daten nicht entschlüsseln – nur die Kommunikationspartner haben Zugriff",
      "Der Server speichert ausschließlich verschlüsselte Blobs ohne Metadatenmuster",
    ],
  },
  {
    question:
      "Wie sicher sind Finanztransaktionen im Vergleich zu Apple Pay/Google Pay?",
    answer: [
      "Wir eliminieren kritische Schwachstellen herkömmlicher Zahlungssysteme:",
    ],
    points: [
      "End-to-end verschlüsselte Transaktionen, bei denen Zahlungsprozessoren nie Klartext sehen",
      "Hardwaregebundene Authentifizierung statt zentralisierter Server",
      "Schutz vor Man-in-the-Middle-Angriffen durch kryptographische Nachweise",
      "Kein Single Point of Failure – anders als die zentralen Systeme von Visa/Mastercard",
    ],
  },
  {
    question:
      "Was passiert, wenn ich mein Gerät verliere und Face ID/App-Sperre aktiviert ist?",
    answer: [
      "Ihre Daten bleiben geschützt. Ohne Ihre Face ID, Ihren Fingerabdruck oder den App-PIN kann niemand auf die App oder Ihre Nachrichten zugreifen – selbst wenn er Ihr Gerät besitzt.",
    ],
    points: [
      "App-Sperre verhindert unbefugten Zugriff auf Ihre Daten",
      "Zum Öffnen der App ist Face ID oder eine biometrische Sperre erforderlich",
      "Sie können die App bei Bedarf aus der Ferne löschen",
    ],
  },
  {
    question: "Was passiert, wenn ich mein Passwort verliere?",
    answer: [
      "Zu Ihrer Sicherheit können Passwörter nicht wiederhergestellt oder zurückgesetzt werden.",
    ],
    points: [
      "Wenn Sie Ihr Passwort verlieren, müssen Sie ein neues Konto erstellen",
      "Alle Ihre Nachrichten und App-Daten werden dauerhaft gelöscht",
      "Wir empfehlen, Passwort und Wiederherstellungs-Codes sicher aufzubewahren",
    ],
  },
  {
    question: "Wie erfüllt das System Vorschriften wie GDPR und NIS 2?",
    answer: ["Unsere Architektur übertrifft die Compliance-Anforderungen:"],
    points: [
      "NIS 2: Vollständiger Hardwareschutz der Schlüssel + Perfect Forward Secrecy",
      "GDPR: Echte Datenminimierung – wir können nicht auf Nutzerdaten zugreifen",
      "HIPAA/GLBA: Militärischer Schutz für sensible Daten",
      "CMMC/DFARS: Bereit für den Einsatz bei Verteidigungsauftragnehmern",
    ],
  },
  {
    question: "Warum Rust für das kryptografische SDK?",
    answer: [
      "Wir haben Rust wegen seiner unvergleichlichen Sicherheit und Performance gewählt:",
    ],
    points: [
      "Speichersicherheit verhindert 70 % kritischer Schwachstellen",
      "Performance auf OpenSSL-Niveau dank nativer Kompilierung",
      "Moderne Toolchain mit integriertem Paketmanagement",
      "Leistungsfähige Integration in Hardware-Sicherheitsmodule",
    ],
  },
  {
    question: "Wann werden Messenger- und Zahlungs-Apps verfügbar sein?",
    answer: ["Unser Entwicklungsfahrplan umfasst folgende Meilensteine:"],
    points: [
      "Messenger-MVP: Q4 2025 (Alternative zu Signal/WhatsApp)",
      "Verschlüsselte E-Mail: Q2 2026 (Nachfolger von ProtonMail)",
      "Zahlungssystem: Pilotphase mit Finanzinstituten in Q4 2025",
    ],
  },
  {
    question:
      "Wie können Unternehmen oder Regierungen das System implementieren?",
    answer: ["Wir bieten flexible Bereitstellungsoptionen für Organisationen:"],
    points: [
      "Kompletter Technologie-Erwerb",
      "Jährliche Lizenzierung",
      "Modul-Integration",
    ],
  },
  {
    question: "Was macht Ihre Lösung quantenresistent?",
    answer: ["Unsere Quantenschutzstrategie umfasst mehrere Ebenen:"],
    points: [
      "Elliptische-Kurven-Kryptografie mit secp256k1 (derzeit quantenresistent)",
      "Ausgelegt auf einfache Migration zu Post-Quanten-Algorithmen",
      "Ein/Ausgabe-Obfuskation verhindert Quanten-Musteranalyse",
      "Sitzungsschlüssel sind flüchtig und werden nie gespeichert",
    ],
  },
  {
    question: "Wie schneidet das im Vergleich zur Blockchain-Sicherheit ab?",
    answer: [
      "Wir nutzen die stärksten Sicherheitsprinzipien der Blockchain und ergänzen sie um:",
    ],
    points: [
      "Die gleiche secp256k1-Kurve wie bei Bitcoin/Ethereum",
      "Hardwareschutz der Schlüssel, der über typische Krypto-Wallets hinausgeht",
      "Perfect Forward Secrecy – im Gegensatz zu permanenten Blockchain-Transaktionen",
      "Seitkanalschutz, der in den meisten Blockchain-Implementierungen fehlt",
    ],
  },
];
