import React, { useEffect, useState } from "react";
import { TbSun, TbMoon, TbMenu2 } from "react-icons/tb";

type NavbarProps = {
  toggleDark: () => void;
};

const Navbar: React.FC<NavbarProps> = ({ toggleDark }) => {
  const [isDark, setIsDark] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  const handleToggle = () => {
    toggleDark();
    setIsDark((prev) => !prev);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white dark:bg-black border-b border-gold/50 transition-colors">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-3 px-6">
        {/* Logo - Text only */}
        <span className="text-xl font-bold text-gold">TerraCrypt</span>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-4">
          <div className="flex space-x-6">
            <a
              href="#features"
              className="hover:text-gold font-medium transition"
            >
              Features
            </a>
            <a href="#faq" className="hover:text-gold font-medium transition">
              FAQ
            </a>
            <a
              href="#contact"
              className="hover:text-gold font-medium transition"
            >
              Contact
            </a>
          </div>

          {/* Dark/Light Mode Toggle */}
          <button
            onClick={handleToggle}
            className="p-2 rounded bg-neutral-200 text-neutral-800 hover:bg-gold hover:text-neutral-900 
            dark:bg-neutral-800 dark:hover:bg-gold dark:text-white dark:hover:text-neutral-900 transition"
            aria-label="Toggle dark mode"
          >
            {isDark ? (
              <TbSun className="w-5 h-5" />
            ) : (
              <TbMoon className="w-5 h-5" />
            )}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-2">
          <button
            onClick={handleToggle}
            className="p-2 rounded bg-neutral-200 text-neutral-800 hover:bg-gold hover:text-neutral-900 
            dark:bg-neutral-800 dark:hover:bg-gold dark:text-white dark:hover:text-neutral-900 transition"
            aria-label="Toggle dark mode"
          >
            {isDark ? (
              <TbSun className="w-5 h-5" />
            ) : (
              <TbMoon className="w-5 h-5" />
            )}
          </button>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded text-neutral-800 dark:text-white hover:bg-neutral-200 dark:hover:bg-neutral-800 transition"
            aria-label="Toggle menu"
          >
            <TbMenu2 className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-black py-2 px-4 border-t border-gold/10">
          <div className="flex flex-col space-y-3">
            <a
              href="#features"
              className="hover:text-gold font-medium transition py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Features
            </a>
            <a
              href="#faq"
              className="hover:text-gold font-medium transition py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              FAQ
            </a>
            <a
              href="#contact"
              className="hover:text-gold font-medium transition py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
