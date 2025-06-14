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
    title: "Cifrado de extremo a extremo",
    icon: FaShieldAlt,
    description:
      "Todos los datos se cifran antes de salir de tu dispositivo, garantizando privacidad total.",
    points: [
      "AES-256 + ECDSA + secp256k1",
      "Cifrado de mensajes y pagos",
      "Nunca accesible a terceros",
    ],
  },
  {
    title: "Almacenamiento de claves en hardware",
    icon: FaFingerprint,
    description:
      "Las claves privadas se almacenan en módulos de hardware (Secure Enclave, StrongBox) y nunca abandonan tu dispositivo.",
    points: [
      "Compatible con iPhone, Android, TPM",
      "Sin extracción por software",
      "Desbloqueo biométrico",
    ],
  },
  {
    title: "Perfect Forward Secrecy",
    icon: FaSyncAlt,
    description:
      "Cada sesión utiliza claves nuevas, de modo que un compromiso nunca expone datos anteriores.",
    points: [
      "Regeneración automática de claves",
      "Cifrado a nivel de sesión",
      "Sin compromiso retroactivo",
    ],
  },
  {
    title: "Ofuscación de entradas",
    icon: FaRandom,
    description:
      "La misma entrada nunca produce la misma salida cifrada, bloqueando el análisis de tráfico.",
    points: [
      "Aleatoriedad en la salida",
      "Mayor privacidad",
      "Bloquea ataques de cifra conocida",
    ],
  },
  {
    title: "Protección contra ataques de canal lateral",
    icon: FaLock,
    description:
      "Retrasos aleatorios y defensas algorítmicas protegen contra ataques de temporización y canal lateral.",
    points: [
      "Resistencia a ataques de temporización",
      "Operaciones ofuscadas",
      "Seguridad de hardware",
    ],
  },
  {
    title: "SDK Rust independiente",
    icon: FaCogs,
    description:
      "Un SDK criptográfico seguro y eficiente en Rust — rápido, seguro y accesible solo desde tu app.",
    points: [
      "Código abierto y auditable",
      "Cripto ultrarrápida",
      "Sin acceso del servidor al SDK",
    ],
  },
  {
    title: "Sin acceso del servidor a las claves",
    icon: FaServer,
    description:
      "El servidor nunca almacena ni accede a tus claves privadas ni datos descifrados, incluso si es hackeado.",
    points: [
      "Backend de conocimiento cero",
      "Sin custodia de claves",
      "Propiedad real del usuario",
    ],
  },
  {
    title: "Pagos cifrados",
    icon: FaCoins,
    description:
      "Pagos digitales con cifrado respaldado por hardware, protección resistente al cuántico y sin intermediarios centralizados.",
    points: [
      "Cifrado de transacciones de extremo a extremo",
      "Funciona en todas las plataformas",
      "Sin fugas de datos a procesadores",
    ],
  },
  {
    title: "Registro anónimo",
    icon: FaUserSecret,
    description:
      "Regístrate con un número de teléfono — sin recopilación centralizada de datos personales.",
    points: [
      "Sin almacenamiento central de datos",
      "Onboarding centrado en la privacidad",
      "Verificación telefónica opcional",
    ],
  },
  {
    title: "Cumplimiento y estándares",
    icon: FaUserCheck,
    description:
      "Totalmente compatible con NIS 2, HIPAA, CMMC, DFARS, OTAN y más.",
    points: [
      "Listo para GDPR y HIPAA",
      "Compatible militar/OTAN",
      "Sin puertas traseras NIST/NSA",
    ],
  },
  {
    title: "Seguridad resistente al cuántico",
    icon: FaCheckShield,
    description:
      "Defiende contra ataques clásicos y cuánticos — preparada para el futuro.",
    points: [
      "Soporte de algoritmos poscuánticos",
      "Curva secp256k1",
      "Criptografía nivel blockchain",
    ],
  },
  {
    title: "Arquitectura Zero-Trust",
    icon: FaEyeSlash,
    description:
      "Ni siquiera los administradores del sistema pueden acceder a los datos o claves de los usuarios — privacidad absoluta por diseño.",
    points: [
      "Sin cuentas de servidor privilegiadas",
      "Control total del usuario",
      "Acceso basado en políticas",
    ],
  },
  {
    title: "Comunicación rápida y segura",
    icon: FaSyncAlt,
    description:
      "Los mensajes y pagos se entregan al instante con seguridad robusta en todas las capas.",
    points: [
      "Comunicación rápida y fiable",
      "Cifrado en tiempo real",
      "Sin comprometer el rendimiento",
    ],
  },
  {
    title: "Soporte multiplataforma",
    icon: FaLaptop,
    description:
      "Disponible en iPhone, Android y escritorio — experiencia unificada en todas partes.",
    points: [
      "SDK multiplataforma",
      "UX coherente",
      "Seguridad basada en el dispositivo",
    ],
  },
  {
    title: "Registro de auditoría detallado",
    icon: FaBookOpen,
    description:
      "Haz seguimiento de cada acción para una transparencia total y cumplimiento normativo.",
    points: [
      "Registros inmutables",
      "Listo para cumplimiento",
      "Trazabilidad completa",
    ],
  },
];
