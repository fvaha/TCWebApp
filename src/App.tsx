import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FeaturesGrid from "./components/FeaturesGrid";
import FAQ from "./components/FAQ";
import ContactForm from "./components/ContactForm";
import AppsSection from "./components/Appssection";
import Footer from "./components/Footer";

function App() {
  const [dark, setDark] = useState(() => {
    const saved = localStorage.getItem("darkMode");
    return saved ? JSON.parse(saved) : true;
  });

  React.useEffect(() => {
    if (dark) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
    localStorage.setItem("darkMode", JSON.stringify(dark));
  }, [dark]);

  return (
    <div className="font-sans min-h-screen bg-white text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100 transition-colors duration-500">
      <Navbar toggleDark={() => setDark((d: boolean) => !d)} />

      <Hero />
      <FeaturesGrid />
      <FAQ />
      <ContactForm />
      <AppsSection />
      <Footer />
    </div>
  );
}

export default App;
