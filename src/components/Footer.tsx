import React from "react";
import { FaTwitter, FaGithub, FaDiscord, FaYoutube } from "react-icons/fa";
import { useLang } from "../components/LanguageContext";

const socialLinks = [
  { name: "Twitter", url: "https://x.com/terra_crypt", icon: FaTwitter },
  { name: "GitHub", url: "#", icon: FaGithub },
  { name: "Discord", url: "#", icon: FaDiscord },
  { name: "YouTube", url: "#", icon: FaYoutube },
];

const Footer: React.FC = () => {
  const { t } = useLang();

  return (
    <footer className="full-bleed bg-white dark:bg-black border-t border-gold py-16 px-4 md:px-8 transition-colors">
      <div className="max-w-7xl mx-auto">
        {/* Main content grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand section */}
          <div className="lg:col-span-1">
            <div className="mb-6 flex items-center gap-3">
              <img
                src="/logo.png"
                alt={t.footer.brand}
                className="h-12 w-12 object-contain"
                draggable={false}
              />
              <h3 className="text-xl font-semibold text-neutral-800 dark:text-neutral-200">
                {t.footer.brand}
              </h3>
            </div>

            <p className="mb-6 text-lg font-bold text-gold">
              {t.footer.slogan}
            </p>

            <div className="flex gap-4">
              {socialLinks.map(({ name, url, icon: Icon }) => (
                <a
                  key={name}
                  href={url}
                  title={name}
                  className="text-2xl text-neutral-600 dark:text-neutral-400 transition hover:text-gold"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Product links */}
          <div>
            <h4 className="mb-4 font-bold text-gold">{t.footer.product}</h4>
            <ul className="space-y-3">
              {t.footer.productLinks.map((txt: string, idx: number) => (
                <li key={`product-${idx}`}>
                  <a 
                    href="#" 
                    className="text-neutral-600 dark:text-neutral-400 transition hover:text-gold"
                  >
                    {txt}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources links */}
          <div>
            <h4 className="mb-4 font-bold text-gold">{t.footer.resources}</h4>
            <ul className="space-y-3">
              {t.footer.resourcesLinks.map((txt: string, idx: number) => (
                <li key={`resources-${idx}`}>
                  {idx === 6 ? (
                    <a
                      href="/tos.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-neutral-600 dark:text-neutral-400 transition hover:text-gold"
                    >
                      {txt}
                    </a>
                  ) : (
                    <a 
                      href="#" 
                      className="text-neutral-600 dark:text-neutral-400 transition hover:text-gold"
                    >
                      {txt}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Legal links */}
          <div>
            <h4 className="mb-4 font-bold text-gold">Legal</h4>
            <ul className="space-y-3">
              {t.footer.legalLinks.map((txt: string, idx: number) => (
                <li key={`legal-${idx}`}>
                  <a 
                    href="#" 
                    className="text-neutral-600 dark:text-neutral-400 transition hover:text-gold"
                  >
                    {txt}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="border-t border-gold pt-8 text-center">
          <p className="text-sm text-neutral-500 dark:text-neutral-400">
            © {new Date().getFullYear()} TerraCrypt {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;