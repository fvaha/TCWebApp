const sp = {
  nav: {
    features: "Funciones",
    faq: "FAQ",
    contact: "Contacto",
    token: "Token",
    roadmap: "Roadmap",
    language: "Idioma",
  },
  footer: {
    brand: "TerraCrypt",
    slogan: "Protegemos tus datos.",
    product: "Producto",
    resources: "Recursos",
    developers: "Desarrolladores",
    company: "Compañía",
    legal: "Legal",
    rights: "Todos los derechos reservados.",
    productLinks: [
      "Implementación de cifrado",
      "Sistema de pagos",
      "Mensajero",
      "Correo electrónico cifrado",
    ],
    resourcesLinks: [
      "Soporte",
      "Estado del sistema",
      "Hazte socio",
      "Integraciones",
      "Activos de marca / Logotipos",
      "Seguridad y cumplimiento",
      "DPA",
      "SOC2",
      "HIPAA",
    ],
    devLinks: ["Documentación", "UI Kit", "Contribuir"],
    companyLinks: [
      "Blog",
      "Historias de clientes",
      "Carreras",
      "Compañía",
      "Eventos y Webinars",
      "Disponibilidad general",
      "Términos de servicio",
      "Política de privacidad",
    ],
    legalLinks: [
      "Configuración de privacidad",
      "Política de uso aceptable",
      "Política de soporte",
      "SLA",
      "Humans.txt",
      "Lawyers.txt",
      "Security.txt",
    ],
  },
  hero: {
    logoAlt: "TerraCrypt",
    slideAria: "Ir a la diapositiva",
  },
  contact: {
    heading: "Contáctanos",
    namePlaceholder: "Tu nombre",
    emailPlaceholder: "Tu email",
    messagePlaceholder: "Tu mensaje",
    send: "Enviar mensaje",
    success: "Formulario enviado",
    infoHeading: "¿Sobre qué puedes contactarnos?",
    topics: [
      "Soporte técnico: Problemas con TerraCrypt, fallos de la aplicación o ayuda para la instalación.",
      "Preguntas de seguridad: Reportes de vulnerabilidades, prácticas de seguridad o información de privacidad.",
      "Consultas comerciales: Compras al por mayor, licencias empresariales o soluciones personalizadas.",
      "Sugerencias y mejoras: Propuestas para mejorar o añadir nuevas herramientas a nuestra plataforma.",
      "Consultas generales: Feedback, colaboración o solicitudes de prensa.",
    ],
  },
  features: {
    loadMore: "Cargar más funciones",
    useOneOrAll: "Usa una o todas.",
    subtitle:
      "Cada función funciona de forma independiente o como una plataforma.",
    platforms: "Plataformas",
  },
  faq: {
    heading: "Preguntas Frecuentes",
    moreInfo: "¿Necesitas más información?",
    contactCTA:
      "Contacta a nuestro equipo de seguridad para especificaciones técnicas.",
  },
  token: {
    hero: {
      title: "$TERRA",
      description: "El token de utilidad nativo que impulsa el ecosistema TerraCrypt con gobernanza, staking y acceso a funciones premium.",
    },
    stats: {
      totalSupply: "Suministro Total",
      circulating: "Suministro en Circulación",
      marketCap: "Capitalización de Mercado",
    },
    utility: {
      title: "Utilidad del Token",
      features: [
        {
          title: "Gobernanza",
          description: "Vota en actualizaciones de protocolo, propuestas de funciones y decisiones del ecosistema.",
        },
        {
          title: "Recompensas de Staking",
          description: "Gana ingresos pasivos staking tokens $TERRA y asegurando la red.",
        },
        {
          title: "Funciones Premium",
          description: "Accede a funciones de cifrado avanzadas y soporte prioritario con $TERRA.",
        },
        {
          title: "Tarifas de Transacción",
          description: "Paga por servicios premium y funciones de cifrado avanzadas.",
        },
        {
          title: "Minería de Liquidez",
          description: "Proporciona liquidez para ganar recompensas $TERRA adicionales.",
        },
        {
          title: "Acceso NFT",
          description: "Desbloquea NFTs exclusivos y coleccionables digitales con $TERRA.",
        },
      ],
    },
    tokenomics: {
      title: "Tokenomics",
      allocation: "Distribución de Tokens",
      vesting: "Calendario de Vesting",
      distribution: [
        { label: "Venta Pública", percentage: "40%" },
        { label: "Equipo & Asesores", percentage: "20%" },
        { label: "Fondo de Desarrollo", percentage: "25%" },
        { label: "Marketing & Alianzas", percentage: "10%" },
        { label: "Reserva", percentage: "5%" },
      ],
      vestingSchedule: [
        { period: "Venta Pública", percentage: "100% Desbloqueado" },
        { period: "Equipo & Asesores", percentage: "2 Años Lineal" },
        { period: "Fondo de Desarrollo", percentage: "3 Años Lineal" },
        { period: "Marketing & Alianzas", percentage: "1 Año Lineal" },
        { period: "Reserva", percentage: "4 Años Lineal" },
      ],
    },
    howToBuy: {
      title: "Cómo Comprar TERRA",
      steps: [
        {
          title: "Crear Billetera",
          description: "Configura MetaMask u otra billetera Web3.",
        },
        {
          title: "Obtener ETH/BNB",
          description: "Compra ETH o BNB en cualquier exchange.",
        },
        {
          title: "Conectar a DEX",
          description: "Conecta tu billetera a Uniswap o PancakeSwap.",
        },
        {
          title: "Intercambiar por TERRA",
          description: "Intercambia tu ETH/BNB por tokens TERRA.",
        },
      ],
    },
    contract: {
      title: "Información del Contrato",
      networks: "Direcciones del Contrato",
      verification: "Verificación del Contrato",
    },
  },
  roadmap: {
    hero: {
      title: "Roadmap de Desarrollo",
      description: "Nuestro viaje para revolucionar la seguridad digital y privacidad a través de la tecnología blockchain.",
    },
    timeline: [
      {
        title: "Fase de Fundación",
        period: "Q1 2024",
        description: "Lanzamiento de infraestructura básica y servicios de cifrado básicos.",
        completed: true,
        milestones: [
          {
            title: "Formación del Equipo Principal",
            description: "Equipo de expertos de criptógrafos y desarrolladores ensamblado.",
            completed: true,
          },
          {
            title: "Desarrollo de Smart Contracts",
            description: "Contratos de token TERRA y gobernanza completados.",
            completed: true,
          },
          {
            title: "API de Cifrado Básico",
            description: "Servicios de cifrado básicos lanzados.",
            completed: true,
          },
        ],
      },
      {
        title: "Fase de Crecimiento",
        period: "Q2-Q3 2024",
        description: "Expansión de servicios y construcción de comunidad.",
        completed: false,
        milestones: [
          {
            title: "Lanzamiento del Token",
            description: "Venta pública y distribución de tokens.",
            completed: false,
          },
          {
            title: "Funciones Avanzadas",
            description: "Cifrado resistente a cuánticos y protocolos avanzados.",
            completed: false,
          },
          {
            title: "Desarrollo de Alianzas",
            description: "Alianzas estratégicas con plataformas principales.",
            completed: false,
          },
        ],
      },
      {
        title: "Fase de Ecosistema",
        period: "Q4 2024 - Q1 2025",
        description: "Desarrollo completo del ecosistema y adopción masiva.",
        completed: false,
        milestones: [
          {
            title: "Integración DeFi",
            description: "Integración con protocolos DeFi principales.",
            completed: false,
          },
          {
            title: "Soluciones Empresariales",
            description: "Soluciones personalizadas para clientes empresariales.",
            completed: false,
          },
          {
            title: "Aplicaciones Móviles",
            description: "Aplicaciones móviles nativas para iOS y Android.",
            completed: false,
          },
        ],
      },
      {
        title: "Expansión Global",
        period: "Q2-Q4 2025",
        description: "Expansión global del mercado y funciones avanzadas.",
        completed: false,
        milestones: [
          {
            title: "Alianzas Globales",
            description: "Expansión a nuevos mercados y regiones.",
            completed: false,
          },
          {
            title: "Integración IA Avanzada",
            description: "Funciones de seguridad impulsadas por IA y automatización.",
            completed: false,
          },
          {
            title: "Cumplimiento Regulatorio",
            description: "Cumplimiento completo con regulaciones globales.",
            completed: false,
          },
        ],
      },
    ],
    currentPhase: {
      title: "Progreso de la Fase Actual",
      name: "Fase de Crecimiento",
      description: "Actualmente estamos en la Fase de Crecimiento, enfocándonos en expandir nuestros servicios y construir nuestra comunidad.",
      progress: [
        { percentage: "75", label: "Lanzamiento del Token" },
        { percentage: "60", label: "Funciones Avanzadas" },
        { percentage: "40", label: "Alianzas" },
      ],
    },
    futureVision: {
      title: "Visión Futura",
      goals: [
        {
          title: "Adopción Global",
          description: "Convertirse en el estándar global para la seguridad digital.",
        },
        {
          title: "Seguridad Cuántica",
          description: "Liderar la transición al cifrado resistente a cuánticos.",
        },
        {
          title: "Gobernanza Descentralizada",
          description: "Desarrollo completamente descentralizado dirigido por la comunidad.",
        },
        {
          title: "Interoperabilidad",
          description: "Integración perfecta con todas las principales redes blockchain.",
        },
        {
          title: "Privacidad Primero",
          description: "Establecer nuevos estándares para la privacidad y protección de datos.",
        },
        {
          title: "Crecimiento Sostenible",
          description: "Construir un ecosistema sostenible y rentable.",
        },
      ],
    },
    community: {
      title: "Participación de la Comunidad",
      description: "Únete a nuestra comunidad para contribuir al futuro de la seguridad digital.",
      channels: [
        {
          name: "Discord",
          description: "Únete a nuestro servidor de Discord para discusiones en tiempo real y actualizaciones.",
          link: "#",
          cta: "Unirse a Discord",
        },
        {
          name: "Telegram",
          description: "Mantente actualizado con nuestro canal de Telegram para anuncios.",
          link: "#",
          cta: "Unirse a Telegram",
        },
      ],
    },
  },
};
export default sp;
