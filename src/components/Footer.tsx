import React from "react";
import { FaTwitter, FaGithub, FaDiscord, FaYoutube } from "react-icons/fa";

const socialLinks = [
  { name: "Twitter", url: "#", icon: <FaTwitter /> },
  { name: "GitHub", url: "#", icon: <FaGithub /> },
  { name: "Discord", url: "#", icon: <FaDiscord /> },
  { name: "YouTube", url: "#", icon: <FaYoutube /> },
];

const productLinks = [
  "Database",
  "Auth",
  "Functions",
  "Realtime",
  "Storage",
  "Vector",
  "Cron",
  "Pricing",
  "Launch Week",
  "AI Builders",
  "Switch from Neon",
];
const resourcesLinks = [
  "Support",
  "System Status",
  "Become a Partner",
  "Integrations",
  "Brand Assets / Logos",
  "Security and Compliance",
  "DPA",
  "SOC2",
  "HIPAA",
];
const devLinks = [
  "Documentation",
  "UI Kit",
  "Changelog",
  "Contributing",
  "Open Source",
  "SupaSquad",
  "DevTo",
  "RSS",
];
const companyLinks = [
  "Blog",
  "Customer Stories",
  "Careers",
  "Company",
  "Events & Webinars",
  "General Availability",
  "Terms of Service",
  "Privacy Policy",
];
const legalLinks = [
  "Privacy Settings",
  "Acceptable Use Policy",
  "Support Policy",
  "SLA",
  "Humans.txt",
  "Lawyers.txt",
  "Security.txt",
];

const Footer: React.FC = () => (
  <footer className="bg-white dark:bg-neutral-950 border-t border-gold/20 py-12 px-4 md:px-8 transition-colors">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 justify-between">
      {/* Brand & Security Section */}
      <div className="flex-1 min-w-[220px] mb-8 md:mb-0">
        <img src="/logo.png" alt="TerraCrypt" className="w-12 h-12 mb-4" />
        <div className="text-lg font-bold text-gold mb-2">
          We protect your data.
        </div>
        <div className="mb-2 text-neutral-700 dark:text-neutral-200">
          <a href="#" className="hover:text-gold font-semibold transition">
            More on Security
          </a>
        </div>
        <div className="flex gap-2 text-xs mb-4 flex-wrap">
          <span className="px-2 py-1 rounded bg-gold/10 text-gold font-semibold border border-gold/40">
            SOC2 Type 2 Certified
          </span>
          <span className="px-2 py-1 rounded bg-gold/10 text-gold font-semibold border border-gold/40">
            HIPAA Compliant
          </span>
        </div>
        <div className="flex gap-4 mt-4">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              className="text-2xl hover:text-gold transition"
              title={link.name}
            >
              <span role="img" aria-label={link.name}>
                {link.icon}
              </span>
            </a>
          ))}
        </div>
      </div>
      {/* Links Grid */}
      <div className="flex-[3] grid grid-cols-2 sm:grid-cols-4 gap-8">
        <div>
          <div className="text-gold font-bold mb-3">Product</div>
          <ul className="space-y-2">
            {productLinks.map((txt) => (
              <li key={txt}>
                <a href="#" className="hover:text-gold transition">
                  {txt}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="text-gold font-bold mb-3">Resources</div>
          <ul className="space-y-2">
            {resourcesLinks.map((txt) => (
              <li key={txt}>
                <a href="#" className="hover:text-gold transition">
                  {txt}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="text-gold font-bold mb-3">Developers</div>
          <ul className="space-y-2">
            {devLinks.map((txt) => (
              <li key={txt}>
                <a href="#" className="hover:text-gold transition">
                  {txt}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="text-gold font-bold mb-3">Company</div>
          <ul className="space-y-2">
            {companyLinks.map((txt) => (
              <li key={txt}>
                <a href="#" className="hover:text-gold transition">
                  {txt}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
    {/* Legal & Bottom Row */}
    <div className="max-w-7xl mx-auto mt-12 border-t border-gold/10 pt-6 flex flex-col md:flex-row justify-between items-center text-xs text-neutral-500 dark:text-neutral-400 gap-2">
      <div className="flex flex-wrap gap-4 mb-2 md:mb-0">
        {legalLinks.map((txt) => (
          <a key={txt} href="#" className="hover:text-gold transition">
            {txt}
          </a>
        ))}
      </div>
      <div>© {new Date().getFullYear()} TerraCrypt</div>
    </div>
  </footer>
);

export default Footer;
