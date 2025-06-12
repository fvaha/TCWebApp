import React, { useEffect, useState } from "react";
import { slides } from "../data/slides";
import EllipticCurveCanvas from "./EllipticCurveCanvas";

const Hero: React.FC = () => {
  const [isDark, setIsDark] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Watch for theme changes
  useEffect(() => {
    const html = document.documentElement;
    const updateDark = () => setIsDark(html.classList.contains("dark"));

    updateDark();
    const observer = new MutationObserver(updateDark);
    observer.observe(html, { attributes: true, attributeFilter: ["class"] });

    return () => observer.disconnect();
  }, []);

  // Auto-rotate slides
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  const bgStyle = isDark
    ? { backgroundColor: "black" }
    : { backgroundColor: "white" };

  const textColor = isDark ? "text-neutral-300" : "text-neutral-700";

  return (
    <section
      className="relative flex flex-col items-center justify-start min-h-screen pt-20 pb-12 text-center transition-colors duration-300 overflow-hidden"
      style={bgStyle}
    >
      {/* 3D Canvas Background */}
      <EllipticCurveCanvas isDark={isDark} />

      {/* Logo */}
      <div className="mb-12 z-10">
        <img
          src="/logo2.png"
          alt="TerraCrypt"
          className="w-48 h-48 mx-auto object-contain"
        />
      </div>

      {/* Slides */}
      <div className="relative w-full flex-grow flex flex-col items-center justify-start z-10">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute w-full flex flex-col items-center justify-center transition-opacity duration-1000 ${
              currentSlide === index ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <h1 className="text-5xl md:text-6xl font-extrabold text-gold mb-4 px-4">
              {slide.title}
            </h1>
            <p
              className={`text-lg md:text-2xl ${textColor} max-w-xl mb-8 px-4`}
            >
              {slide.description}
            </p>
            <a
              href={slide.link}
              className="bg-gold text-neutral-900 font-bold px-8 py-3 rounded shadow hover:bg-yellow-400 transition"
            >
              {slide.cta}
            </a>
          </div>
        ))}
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              currentSlide === index
                ? "bg-gold"
                : "bg-neutral-400 dark:bg-neutral-600"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
