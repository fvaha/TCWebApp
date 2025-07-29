// src/locales/en.ts

const en = {
  nav: {
    features: "Features",
    faq: "FAQ",
    contact: "Contact",
    token: "Token",
    roadmap: "Roadmap",
    language: "Language",
  },
  footer: {
    brand: "TerraCrypt",
    slogan: "We protect your data.",
    product: "Product",
    resources: "Resources",
    developers: "Developers",
    company: "Company",
    legal: "Legal",
    rights: "All rights reserved.",
    // Footer columns
    productLinks: [
      "Encryption Implementation",
      "Payment System",
      "Messenger",
      "Encrypted Email",
    ],
    resourcesLinks: [
      "Support",
      "System Status",
      "Become a Partner",
      "Integrations",
      "Brand Assets / Logos",
      "Security and Compliance",
      "DPA",
      "SOC2",
      "HIPAA",
    ],
    devLinks: ["Documentation", "UI Kit", "Contributing"],
    companyLinks: [
      "Blog",
      "Customer Stories",
      "Careers",
      "Company",
      "Events & Webinars",
      "General Availability",
      "Terms of Service",
      "Privacy Policy",
    ],
    legalLinks: [
      "Privacy Settings",
      "Acceptable Use Policy",
      "Support Policy",
      "SLA",
      "Humans.txt",
      "Lawyers.txt",
      "Security.txt",
    ],
  },
  hero: {
    logoAlt: "TerraCrypt",
    slideAria: "Go to slide",
  },
  contact: {
    heading: "Contact Us",
    namePlaceholder: "Your Name",
    emailPlaceholder: "Your Email",
    messagePlaceholder: "Your Message",
    send: "Send Message",
    success: "Thanks for contacting us!",
    infoHeading: "What can you contact us about?",
    topics: [
      "Technical support: Trouble using TerraCrypt, app issues, or installation help.",
      "Security questions: Vulnerability reports, security practices, or privacy info.",
      "Business inquiries: Invest, buy our encryption, enterprise licensing, or custom solutions.",
      "Work with us: Join the TerraCrypt team or partner with us.",
      "Feature requests: Suggest improvements or new tools for our platform.",
      "General questions: Feedback, collaboration, or media requests.",
    ],
  },
  features: {
    loadMore: "Load More Features",
    useOneOrAll: "Use one or all.",
    subtitle: "Each feature works standalone or as a platform.",
    platforms: "Platforms",
  },
  faq: {
    heading: "Frequently Asked Questions",
    moreInfo: "Need more information?",
    contactCTA:
      "Contact our security team for detailed technical specifications.",
  },
  token: {
    hero: {
      title: "$TERRA",
      description: "The native utility token powering the TerraCrypt ecosystem with governance, staking, and premium feature access.",
    },
    stats: {
      totalSupply: "Total Supply",
      circulating: "Circulating Supply",
      marketCap: "Market Cap",
    },
    utility: {
      title: "Token Utility",
      features: [
        {
          title: "Governance",
          description: "Vote on protocol upgrades, feature proposals, and ecosystem decisions.",
        },
        {
          title: "Staking Rewards",
          description: "Earn passive income by staking TERRA tokens and securing the network.",
        },
        {
          title: "Premium Features",
          description: "Access advanced encryption features and priority support with TERRA.",
        },
        {
          title: "Transaction Fees",
          description: "Pay for premium services and advanced encryption features.",
        },
        {
          title: "Liquidity Mining",
          description: "Provide liquidity to earn additional TERRA rewards.",
        },
        {
          title: "NFT Access",
          description: "Unlock exclusive NFTs and digital collectibles with TERRA.",
        },
      ],
    },
    tokenomics: {
      title: "Tokenomics",
      allocation: "Token Allocation",
      vesting: "Vesting Schedule",
      distribution: [
        { label: "Public Sale", percentage: "40%" },
        { label: "Team & Advisors", percentage: "20%" },
        { label: "Development Fund", percentage: "25%" },
        { label: "Marketing & Partnerships", percentage: "10%" },
        { label: "Reserve", percentage: "5%" },
      ],
      vestingSchedule: [
        { period: "Public Sale", percentage: "100% Unlocked" },
        { period: "Team & Advisors", percentage: "2 Year Linear" },
        { period: "Development Fund", percentage: "3 Year Linear" },
        { period: "Marketing & Partnerships", percentage: "1 Year Linear" },
        { period: "Reserve", percentage: "4 Year Linear" },
      ],
    },
    howToBuy: {
      title: "How to Buy TERRA",
      steps: [
        {
          title: "Create Wallet",
          description: "Set up a MetaMask or other Web3 wallet.",
        },
        {
          title: "Get ETH/BNB",
          description: "Purchase ETH or BNB from any exchange.",
        },
        {
          title: "Connect to DEX",
          description: "Connect your wallet to Uniswap or PancakeSwap.",
        },
        {
          title: "Swap for TERRA",
          description: "Swap your ETH/BNB for TERRA tokens.",
        },
      ],
    },
    contract: {
      title: "Contract Information",
      networks: "Contract Addresses",
      verification: "Contract Verification",
    },
  },
  roadmap: {
    hero: {
      title: "Development Roadmap",
      description: "Our journey to revolutionize digital security and privacy through blockchain technology.",
    },
    timeline: [
      {
        title: "Foundation Phase",
        period: "Q1 2024",
        description: "Core infrastructure and basic encryption services launch.",
        completed: true,
        milestones: [
          {
            title: "Core Team Formation",
            description: "Assembled expert team of cryptographers and developers.",
            completed: true,
          },
          {
            title: "Smart Contract Development",
            description: "Completed TERRA token and governance contracts.",
            completed: true,
          },
          {
            title: "Basic Encryption API",
            description: "Launched core encryption services.",
            completed: true,
          },
        ],
      },
      {
        title: "Growth Phase",
        period: "Q2-Q3 2024",
        description: "Expansion of services and community building.",
        completed: false,
        milestones: [
          {
            title: "Token Launch",
            description: "Public sale and token distribution.",
            completed: false,
          },
          {
            title: "Advanced Features",
            description: "Quantum-resistant encryption and advanced protocols.",
            completed: false,
          },
          {
            title: "Partnership Development",
            description: "Strategic partnerships with major platforms.",
            completed: false,
          },
        ],
      },
      {
        title: "Ecosystem Phase",
        period: "Q4 2024 - Q1 2025",
        description: "Full ecosystem development and mass adoption.",
        completed: false,
        milestones: [
          {
            title: "DeFi Integration",
            description: "Integration with major DeFi protocols.",
            completed: false,
          },
          {
            title: "Enterprise Solutions",
            description: "Custom solutions for enterprise clients.",
            completed: false,
          },
          {
            title: "Mobile Applications",
            description: "Native mobile apps for iOS and Android.",
            completed: false,
          },
        ],
      },
      {
        title: "Global Expansion",
        period: "Q2-Q4 2025",
        description: "Global market expansion and advanced features.",
        completed: false,
        milestones: [
          {
            title: "Global Partnerships",
            description: "Expansion into new markets and regions.",
            completed: false,
          },
          {
            title: "Advanced AI Integration",
            description: "AI-powered security features and automation.",
            completed: false,
          },
          {
            title: "Regulatory Compliance",
            description: "Full compliance with global regulations.",
            completed: false,
          },
        ],
      },
    ],
    currentPhase: {
      title: "Current Phase Progress",
      name: "Growth Phase",
      description: "We are currently in the Growth Phase, focusing on expanding our services and building our community.",
      progress: [
        { percentage: "75", label: "Token Launch" },
        { percentage: "60", label: "Advanced Features" },
        { percentage: "40", label: "Partnerships" },
      ],
    },
    futureVision: {
      title: "Future Vision",
      goals: [
        {
          title: "Global Adoption",
          description: "Become the standard for digital security worldwide.",
        },
        {
          title: "Quantum Security",
          description: "Lead the transition to quantum-resistant encryption.",
        },
        {
          title: "Decentralized Governance",
          description: "Fully decentralized community-driven development.",
        },
        {
          title: "Interoperability",
          description: "Seamless integration with all major blockchain networks.",
        },
        {
          title: "Privacy First",
          description: "Set new standards for privacy and data protection.",
        },
        {
          title: "Sustainable Growth",
          description: "Build a sustainable and profitable ecosystem.",
        },
      ],
    },
    community: {
      title: "Community Involvement",
      description: "Join our community to contribute to the future of digital security.",
      channels: [
        {
          name: "Discord",
          description: "Join our Discord server for real-time discussions and updates.",
          link: "#",
          cta: "Join Discord",
        },
        {
          name: "Telegram",
          description: "Stay updated with our Telegram channel for announcements.",
          link: "#",
          cta: "Join Telegram",
        },
      ],
    },
  },
};

export default en;
