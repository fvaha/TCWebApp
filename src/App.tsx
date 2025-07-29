import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FeaturesGrid from "./components/FeaturesGrid";
import FAQ from "./components/FAQ";
import ContactForm from "./components/ContactForm";
import AppsSection from "./components/Appssection";
import Footer from "./components/Footer";
import TokenPage from "./pages/TokenPage";
import RoadmapPage from "./pages/RoadmapPage";
import PortfolioPage from "./pages/PortfolioPage";

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
    <Router>
      <div className="font-sans min-h-screen bg-white text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100 transition-colors duration-500">
        <Navbar toggleDark={() => setDark((d: boolean) => !d)} />

        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <FeaturesGrid />
              <FAQ />
              <ContactForm />
              <AppsSection />
              <Footer />
            </>
          } />
          <Route path="/token" element={<TokenPage />} />
          <Route path="/roadmap" element={<RoadmapPage />} />
          <Route path="/portfolio/:slug" element={<PortfolioPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
