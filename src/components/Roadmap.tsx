import React from "react";

const Footer: React.FC = () => (
  <footer className="py-8 bg-white dark:bg-neutral-950 border-t border-gold/20 text-center text-neutral-500 dark:text-neutral-400">
    <div>© {new Date().getFullYear()} TerraCrypt. All rights reserved.</div>
  </footer>
);

export default Footer;
