import React from "react";
import { FaTwitter, FaGithub, FaDiscord, FaYoutube } from "react-icons/fa";
import { useLang } from "../components/LanguageContext";

const socialLinks = [
  { name: "Twitter", url: "#", icon: <FaTwitter /> },
  { name: "GitHub", url: "#", icon: <FaGithub /> },
  { name: "Discord", url: "#", icon: <FaDiscord /> },
  { name: "YouTube", url: "#", icon: <FaYoutube /> },
];

// 7th link (index 6) in companyLinks is always TOS
const TOS_INDEX = 6;

const Footer: React.FC = () => {
  const { t } = useLang();

  return (
    <footer className="full-bleed bg-white dark:bg-black border-t border-gold py-12 px-4 md:px-8 transition-colors">
      {/* Top grid */}
      <div className="max-w-7xl mx-auto flex flex-col gap-12 md:flex-row md:justify-between">
        {/* Brand & socials */}
        <div className="flex-1 min-w-[220px]">
          <div className="mb-2 flex items-center gap-3">
            <img
              src="/logo.png"
              alt={t.footer.brand}
              width={48}
              height={48}
              className="h-12 w-12"
              draggable={false}
            />
            <p className="text-xl font-semibold text-neutral-800 dark:text-neutral-200">
              {t.footer.brand}
            </p>
          </div>

          <div className="mb-2 text-lg font-bold text-gold">
            {t.footer.slogan}
          </div>

          <div className="mt-4 flex gap-4">
            {socialLinks.map(({ name, url, icon }) => (
              <a
                key={name}
                href={url}
                title={name}
                className="text-2xl transition hover:text-gold"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>

        {/* Link columns */}
        <div className="flex-[3] grid grid-cols-2 gap-8 sm:grid-cols-4">
          <Column title={t.footer.product} links={t.footer.productLinks} />
          <Column title={t.footer.resources} links={t.footer.resourcesLinks} />
          <Column title={t.footer.developers} links={t.footer.devLinks} />
          {/* Pass a prop to indicate this is companyLinks */}
          <Column
            title={t.footer.company}
            links={t.footer.companyLinks}
            tosIndex={TOS_INDEX}
          />
        </div>
      </div>

      {/* Bottom row */}
      <div className="max-w-7xl mx-auto mt-12 flex flex-col items-center gap-2 border-t border-gold pt-6 text-xs text-neutral-500 dark:text-neutral-400 md:flex-row md:justify-between">
        <div className="mb-2 flex flex-wrap gap-4 md:mb-0">
          {t.footer.legalLinks.map((txt: string) => (
            <a key={txt} href="#" className="transition hover:text-gold">
              {txt}
            </a>
          ))}
        </div>
        <div>
          © {new Date().getFullYear()} TerraCrypt {t.footer.rights}
        </div>
      </div>
    </footer>
  );
};

// Column component: only make TOS link if tosIndex matches
const Column = ({
  title,
  links,
  tosIndex,
}: {
  title: string;
  links: string[];
  tosIndex?: number;
}) => (
  <div>
    <div className="mb-3 font-bold text-gold">{title}</div>
    <ul className="space-y-2">
      {links.map((txt, idx) => (
        <li key={txt}>
          {typeof tosIndex !== "undefined" && idx === tosIndex ? (
            <a
              href="/tos.html"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-gold"
            >
              {txt}
            </a>
          ) : (
            <a href="#" className="transition hover:text-gold">
              {txt}
            </a>
          )}
        </li>
      ))}
    </ul>
  </div>
);

export default Footer;
