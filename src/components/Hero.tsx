import React, { useEffect, useState } from "react";
import EllipticCurveCanvas from "./EllipticCurveCanvas";
import { useLang } from "../components/LanguageContext";
import type { Slide } from "../types/slide";

/* ---------------- slide bundles ---------------- */
import { slides as slidesEn } from "../data/slides.en";
import { slides as slidesDe } from "../data/slides.de";
import { slides as slidesFr } from "../data/slides.fr";
import { slides as slidesAr } from "../data/slides.ar";
import { slides as slidesCr } from "../data/slides.cr";
import { slides as slidesNo } from "../data/slides.no";
import { slides as slidesRu } from "../data/slides.ru";
import { slides as slidesSp } from "../data/slides.sp";

const slidesMap: Record<string, Slide[]> = {
  en: slidesEn,
  de: slidesDe,
  fr: slidesFr,
  ar: slidesAr,
  cr: slidesCr,
  no: slidesNo,
  ru: slidesRu,
  sp: slidesSp,
};

/* navbar has py-3 ⇒ 3 rem total height → shift hero up */
const NAVBAR_SHIFT = "-mt-12 pt-12";

const Hero: React.FC = () => {
  const { lang, t } = useLang();
  const slides = slidesMap[lang] ?? slidesEn;
  const slideAria = t.hero.slideAria;

  const [isDark, setIsDark] = useState(false);
  useEffect(() => {
    const html = document.documentElement;
    const sync = () => setIsDark(html.classList.contains("dark"));
    sync();
    const obs = new MutationObserver(sync);
    obs.observe(html, { attributes: true, attributeFilter: ["class"] });
    return () => obs.disconnect();
  }, []);

  const [current, setCurrent] = useState(0);
  useEffect(() => {
    const id = setInterval(
      () => setCurrent((p) => (p + 1) % slides.length),
      8000
    );
    return () => clearInterval(id);
  }, [slides.length]);

  // Fix for mobile viewport height inconsistencies (e.g. Safari address bar)
  useEffect(() => {
    const setVh = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    };
    setVh();
    window.addEventListener("resize", setVh);
    return () => window.removeEventListener("resize", setVh);
  }, []);

  return (
    <section
      className={`hero-section relative flex flex-col items-center
                  overflow-hidden text-center
                  bg-white dark:bg-black transition-colors duration-300
                  ${NAVBAR_SHIFT}`}
      style={{ minHeight: "calc(var(--vh, 1vh) * 100)" }}
    >
      <EllipticCurveCanvas isDark={isDark} />

      {/* logo */}
      <div className="z-10 mb-10">
        <img
          src="/logo.png"
          alt={t.hero.logoAlt}
          width={192}
          height={192}
          className="w-48 h-48 mx-auto object-contain"
        />
      </div>

      {/* slides */}
      <div className="relative z-10 flex flex-col items-center flex-1 w-full">
        {slides.map((slide, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 flex flex-col items-center justify-center
                        transition-opacity duration-1000
                        ${current === idx ? "opacity-100" : "opacity-0"}`}
          >
            <h1 className="px-4 mb-4 text-5xl font-extrabold md:text-6xl text-gold drop-shadow">
              {slide.title}
            </h1>
            <p
              className={`px-4 mb-8 max-w-xl text-lg md:text-2xl ${
                isDark ? "text-neutral-300" : "text-neutral-700"
              }`}
            >
              {slide.description}
            </p>

            <a
              href={slide.link}
              className="bg-gold hover:bg-yellow-500 text-black font-bold py-3 px-8 rounded-lg transition duration-300 shadow"
            >
              {slide.cta}
            </a>
          </div>
        ))}
      </div>

      {/* sticky dot navigation (won’t jump on mobile Safari) */}
      <div className="z-20 mt-auto sticky bottom-6 flex justify-center space-x-2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => setCurrent(idx)}
            aria-label={`${slideAria} ${idx + 1}`}
            className={`h-3 w-3 rounded-full transition-colors ${
              current === idx ? "bg-gold" : "bg-neutral-400 dark:bg-neutral-600"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
