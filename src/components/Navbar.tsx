import React, { useEffect, useState, useRef } from "react";
import { TbSun, TbMoon, TbMenu2 } from "react-icons/tb";
import { useLang } from "../components/LanguageContext";
import { useLocation } from "react-router-dom";

type NavbarProps = {
  toggleDark: () => void;
};

const Navbar: React.FC<NavbarProps> = ({ toggleDark }) => {
  // Dark mode
  const [isDark, setIsDark] = useState(false);
  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);
  const handleToggleDark = () => {
    toggleDark();
    setIsDark((d) => !d);
  };

  // i18n
  const { t, lang, setLang, languages } = useLang();

  // Desktop language dropdown
  const [showLangDesktop, setShowLangDesktop] = useState(false);
  const desktopLangRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!showLangDesktop) return;
    const handle = (e: MouseEvent) => {
      if (
        desktopLangRef.current &&
        !desktopLangRef.current.contains(e.target as Node)
      ) {
        setShowLangDesktop(false);
      }
    };
    window.addEventListener("mousedown", handle);
    return () => window.removeEventListener("mousedown", handle);
  }, [showLangDesktop]);

  // Mobile language dropdown
  const [showLangMobile, setShowLangMobile] = useState(false);
  const mobileLangRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!showLangMobile) return;
    const handle = (e: MouseEvent) => {
      if (
        mobileLangRef.current &&
        !mobileLangRef.current.contains(e.target as Node)
      ) {
        setShowLangMobile(false);
      }
    };
    window.addEventListener("mousedown", handle);
    return () => window.removeEventListener("mousedown", handle);
  }, [showLangMobile]);

  // Mobile drawer
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Get current location for conditional navigation
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const isTokenPage = location.pathname === "/token";
  const isRoadmapPage = location.pathname === "/roadmap";

  return (
    <nav className="sticky top-0 z-50 bg-white/80 dark:bg-black/80 backdrop-blur-sm border-b border-gold/50 transition-colors">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-3 px-6">
        {/* Logo/brand */}
        <span className="text-xl font-bold text-gold select-none">
          TerraCrypt
        </span>

        {/* ===== Desktop nav ===== */}
        <div className="hidden md:flex items-center space-x-4">
          <div className="flex space-x-6">
            {isHomePage ? (
              // Home page - show all navigation items
              <>
                <a
                  href="#features"
                  className="hover:text-gold font-medium transition"
                >
                  {t.nav.features}
                </a>
                <a href="#faq" className="hover:text-gold font-medium transition">
                  {t.nav.faq}
                </a>
                <a
                  href="#contact"
                  className="hover:text-gold font-medium transition"
                >
                  {t.nav.contact}
                </a>
                <a
                  href="/token"
                  className="hover:text-gold font-medium transition"
                >
                  {t.nav.token}
                </a>
                <a
                  href="/roadmap"
                  className="hover:text-gold font-medium transition"
                >
                  {t.nav.roadmap}
                </a>
              </>
            ) : (
              // Token/Roadmap pages - show only home/token/roadmap
              <>
                <a
                  href="/"
                  className="hover:text-gold font-medium transition"
                >
                  Home
                </a>
                <a
                  href="/token"
                  className={`font-medium transition ${
                    isTokenPage ? "text-gold" : "hover:text-gold"
                  }`}
                >
                  {t.nav.token}
                </a>
                <a
                  href="/roadmap"
                  className={`font-medium transition ${
                    isRoadmapPage ? "text-gold" : "hover:text-gold"
                  }`}
                >
                  {t.nav.roadmap}
                </a>
              </>
            )}
          </div>
          {/* Dark mode toggle */}
          <button
            onClick={handleToggleDark}
            aria-label="Toggle dark mode"
            className="ml-3 p-2 rounded bg-neutral-200 text-neutral-800 hover:bg-gold hover:text-neutral-900 dark:bg-neutral-800 dark:hover:bg-gold dark:text-white dark:hover:text-neutral-900 transition"
          >
            {isDark ? (
              <TbSun className="w-5 h-5" />
            ) : (
              <TbMoon className="w-5 h-5" />
            )}
          </button>
          {/* Desktop language dropdown */}
          <div className="relative z-40 ml-2" ref={desktopLangRef}>
            <button
              onClick={() => setShowLangDesktop((v) => !v)}
              className="rounded border border-gold px-3 py-2 text-sm font-medium bg-neutral-100 hover:text-gold dark:bg-neutral-800"
            >
              {languages.find((l) => l.code === lang)?.label || lang}
            </button>
            {showLangDesktop && (
              <div className="absolute right-0 mt-2 w-32 rounded border border-gold bg-white shadow dark:bg-neutral-900">
                {languages.map((l) => (
                  <button
                    key={l.code}
                    onClick={() => {
                      setLang(l.code);
                      setShowLangDesktop(false);
                    }}
                    className={`block w-full px-4 py-2 text-left hover:bg-gold/20 dark:hover:bg-gold/40 ${
                      lang === l.code ? "font-bold text-gold" : ""
                    }`}
                  >
                    {l.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* ===== Mobile nav ===== */}
        <div className="flex items-center space-x-2 md:hidden">
          {/* Dark mode */}
          <button
            aria-label="Toggle dark mode"
            onClick={handleToggleDark}
            className="rounded bg-neutral-200 p-2 text-neutral-800 hover:bg-gold hover:text-neutral-900 dark:bg-neutral-800 dark:text-white dark:hover:bg-gold dark:hover:text-neutral-900"
          >
            {isDark ? (
              <TbSun className="h-5 w-5" />
            ) : (
              <TbMoon className="h-5 w-5" />
            )}
          </button>
          {/* Mobile language code + dropdown */}
          <div className="relative" ref={mobileLangRef}>
            <button
              aria-label="Change language"
              onClick={() => setShowLangMobile((v) => !v)}
              className="rounded border border-gold px-2 py-1 text-xs font-semibold text-gold hover:bg-gold hover:text-black transition"
            >
              {lang}
            </button>
            {showLangMobile && (
              <div className="absolute right-0 mt-2 w-28 rounded border border-gold bg-white shadow dark:bg-neutral-900">
                {languages.map((l) => (
                  <button
                    key={l.code}
                    onClick={() => {
                      setLang(l.code);
                      setShowLangMobile(false);
                    }}
                    className={`block w-full px-3 py-1.5 text-left text-sm hover:bg-gold/20 dark:hover:bg-gold/40 ${
                      lang === l.code ? "font-bold text-gold" : ""
                    }`}
                  >
                    {l.code}
                  </button>
                ))}
              </div>
            )}
          </div>
          {/* Hamburger */}
          <button
            aria-label="Toggle menu"
            onClick={() => setIsMobileMenuOpen((v) => !v)}
            className="rounded p-2 text-neutral-800 transition hover:bg-neutral-200 dark:text-white dark:hover:bg-neutral-800"
          >
            <TbMenu2 className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* ===== Mobile drawer ===== */}
      {isMobileMenuOpen && (
        <div className="animate-fadeIn border-t border-gold bg-white py-2 px-4 shadow-lg dark:bg-black md:hidden">
          <div className="flex flex-col space-y-3">
            {isHomePage ? (
              // Home page mobile navigation
              <>
                <a
                  href="#features"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="font-medium hover:text-gold"
                >
                  {t.nav.features}
                </a>
                <a
                  href="#faq"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="font-medium hover:text-gold"
                >
                  {t.nav.faq}
                </a>
                <a
                  href="#contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="font-medium hover:text-gold"
                >
                  {t.nav.contact}
                </a>
                <a
                  href="/token"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="font-medium hover:text-gold"
                >
                  {t.nav.token}
                </a>
                <a
                  href="/roadmap"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="font-medium hover:text-gold"
                >
                  {t.nav.roadmap}
                </a>
              </>
            ) : (
              // Token/Roadmap pages mobile navigation
              <>
                <a
                  href="/"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="font-medium hover:text-gold"
                >
                  Home
                </a>
                <a
                  href="/token"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`font-medium transition ${
                    isTokenPage ? "text-gold" : "hover:text-gold"
                  }`}
                >
                  {t.nav.token}
                </a>
                <a
                  href="/roadmap"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`font-medium transition ${
                    isRoadmapPage ? "text-gold" : "hover:text-gold"
                  }`}
                >
                  {t.nav.roadmap}
                </a>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
