import type { FaqItem } from "../types/faq";

export const faqItems: FaqItem[] = [
  {
    question:
      "¿En qué se diferencia este cifrado de las soluciones estándar como WhatsApp o Signal?",
    answer: [
      "Nuestra tecnología va más allá del cifrado convencional y ofrece varias ventajas clave:",
    ],
    points: [
      "Claves protegidas por hardware (Secure Enclave/StrongBox) que nunca abandonan tu dispositivo",
      "Perfect Forward Secrecy con regeneración automática de claves",
      "Algoritmos resistentes a la computación cuántica (ECDSA + secp256k1) a diferencia de las soluciones estándar",
      "Arquitectura Zero-Trust en la que ni siquiera nosotros podemos acceder a tus datos",
      "Protección contra canales laterales de grado militar con retardos aleatorios",
    ],
  },
  {
    question:
      "¿Por qué debería confiar en esto en lugar del cifrado aprobado por el gobierno de EE. UU. (P-256)?",
    answer: [
      "Nuestro cifrado ofrece una protección de privacidad superior en comparación con las soluciones estándar aprobadas por gobiernos:",
    ],
    points: [
      "Sin puertas traseras de la NSA: usamos secp256k1 (probado en blockchain) en lugar del sospechoso secp256r1 (P-256)",
      "Transparencia matemática: no se desarrolló bajo supervisión de la NSA",
      "Cumple con los estándares OTAN/NIS 2 y supera sus requisitos",
      "Base resistente a la computación cuántica preparada para algoritmos poscuánticos",
    ],
  },
  {
    question: "¿Cómo protege esto frente a ataques de computación cuántica?",
    answer: ["Nuestro sistema de defensa cuántica multicapa incluye:"],
    points: [
      "Cifrado asimétrico con secp256k1: actualmente resistente a la computación cuántica",
      "Arquitectura diseñada para integrar algoritmos poscuánticos cuando sea necesario",
      "Ofuscación de entradas que frustra el análisis de patrones",
      "Perfect Forward Secrecy asegura que las comunicaciones pasadas permanezcan seguras",
    ],
  },
  {
    question:
      "¿Pueden los gobiernos o las fuerzas del orden acceder a mis datos?",
    answer: [
      "No. El sistema está diseñado para ser verdaderamente Zero-Trust:",
    ],
    points: [
      "No existen claves maestras que se puedan exigir mediante orden judicial",
      "Las claves privadas nunca salen del módulo de seguridad de hardware de tu dispositivo",
      "Ni siquiera nosotros podemos descifrar tus datos: solo las partes que se comunican tienen acceso",
      "El servidor solo almacena blobs cifrados sin patrones de metadatos",
    ],
  },
  {
    question:
      "¿Qué tan seguras son las transacciones financieras en comparación con Apple Pay/Google Pay?",
    answer: [
      "Eliminamos vulnerabilidades críticas de los sistemas de pago convencionales:",
    ],
    points: [
      "Transacciones cifradas de extremo a extremo en las que los procesadores nunca ven texto plano",
      "Autenticación vinculada al hardware en lugar de servidores centralizados",
      "Protección contra ataques de intermediario mediante pruebas criptográficas",
      "Sin punto único de fallo, a diferencia de los sistemas centralizados de Visa/Mastercard",
    ],
  },
  {
    question:
      "¿Qué sucede si pierdo mi dispositivo y tengo habilitado Face ID/Bloqueo de la app?",
    answer: [
      "Tus datos permanecen seguros. Nadie puede acceder a la app ni a tus mensajes sin tu Face ID, huella o PIN de la app, incluso si tiene tu dispositivo.",
    ],
    points: [
      "El bloqueo de la app impide el acceso no autorizado a tus datos",
      "Se requiere Face ID o autenticación biométrica para abrir la app",
      "Puedes borrar la app de forma remota si es necesario",
    ],
  },
  {
    question: "¿Qué sucede si pierdo mi contraseña?",
    answer: [
      "Por tu seguridad, las contraseñas no se pueden recuperar ni restablecer.",
    ],
    points: [
      "Si pierdes tu contraseña, deberás crear una cuenta nueva",
      "Todos tus mensajes y datos de la app se eliminarán permanentemente",
      "Recomendamos guardar tu contraseña y códigos de recuperación en un lugar seguro",
    ],
  },
  {
    question: "¿Cómo cumple esto con regulaciones como el GDPR y NIS 2?",
    answer: [
      "Superamos los requisitos de cumplimiento mediante nuestra arquitectura:",
    ],
    points: [
      "NIS 2: Protección completa de claves en hardware + Perfect Forward Secrecy",
      "GDPR: Verdadera minimización de datos: no podemos acceder a los datos de usuario",
      "HIPAA/GLBA: Protección de grado militar para datos sensibles",
      "CMMC/DFARS: Listo para despliegues de contratistas de defensa",
    ],
  },
  {
    question: "¿Por qué Rust para el SDK criptográfico?",
    answer: ["Elegimos Rust por su seguridad y rendimiento inigualables:"],
    points: [
      "Seguridad de memoria que evita el 70 % de las vulnerabilidades críticas",
      "Rendimiento comparable a OpenSSL gracias a la compilación nativa",
      "Herramientas modernas con gestión de paquetes integrada",
      "Capacidades de integración segura con hardware",
    ],
  },
  {
    question: "¿Cuándo estarán disponibles las apps de mensajería/pagos?",
    answer: ["Nuestra hoja de ruta de desarrollo incluye estos hitos clave:"],
    points: [
      "MVP de mensajería: T4 2025 (alternativa a Signal/WhatsApp)",
      "Correo electrónico cifrado: T2 2026 (sucesor de ProtonMail)",
      "Sistema de pagos: piloto con instituciones financieras en T4 2025",
    ],
  },
  {
    question: "¿Cómo pueden las empresas o los gobiernos implementar esto?",
    answer: [
      "Ofrecemos opciones de implementación flexibles para organizaciones:",
    ],
    points: [
      "Adquisición completa de la tecnología",
      "Licenciamiento anual",
      "Integración por módulos",
    ],
  },
  {
    question:
      "¿Qué hace que vuestra solución sea resistente a la computación cuántica?",
    answer: [
      "Nuestra estrategia de protección cuántica incluye múltiples capas:",
    ],
    points: [
      "Criptografía de curva elíptica con secp256k1 (actualmente resistente al cuántico)",
      "Diseñada para migrar fácilmente a algoritmos poscuánticos",
      "Ofuscación de entrada/salida que frustra el análisis de patrones cuánticos",
      "Las claves de sesión son efímeras y nunca se almacenan",
    ],
  },
  {
    question: "¿Cómo se compara esto con la seguridad de blockchain?",
    answer: [
      "Aprovechamos los principios de seguridad más sólidos de blockchain y añadimos:",
    ],
    points: [
      "La misma curva secp256k1 utilizada en Bitcoin/Ethereum",
      "Protección de claves a nivel hardware que supera las carteras cripto habituales",
      "Perfect Forward Secrecy, a diferencia de las transacciones permanentes de blockchain",
      "Protección contra canales laterales ausente en la mayoría de implementaciones blockchain",
    ],
  },
];
