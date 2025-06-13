import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { features } from "../data/features";

// Custom hook for window width (avoids laggy checks in render)
function useWindowWidth() {
  const [width, setWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1200
  );
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return width;
}

export default function FeaturesGrid() {
  const [showAll, setShowAll] = useState(false);
  const [expandedCard, setExpandedCard] = useState<number | null>(null);
  const width = useWindowWidth();
  const isMobile = width < 640;

  const initialFeatures = useMemo(() => features.slice(0, 3), []);
  const remainingFeatures = useMemo(() => features.slice(3), []);

  const visibleFeatures = showAll ? features : initialFeatures;

  return (
    <div className="w-full bg-white dark:bg-black transition-colors duration-300">
      <section
        id="features"
        className="w-full max-w-7xl mx-auto px-6 py-16 md:py-24 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3"
      >
        {visibleFeatures.map((feature, i) => (
          <motion.div
            key={feature.title}
            className="relative flex flex-col rounded-xl border border-gold/30 bg-white dark:bg-neutral-950 p-6 shadow hover:shadow-lg hover:border-gold transition-all cursor-pointer"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            whileHover={{ scale: 1.03 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ type: "spring", duration: 0.6, delay: i * 0.07 }}
            onClick={() =>
              isMobile && setExpandedCard(expandedCard === i ? null : i)
            }
          >
            <div className="flex items-center gap-3">
              <feature.icon className="text-gold w-6 h-6" />
              <h2 className={`text-xl font-bold text-gold`}>{feature.title}</h2>
            </div>
            <p className="mt-2 text-neutral-700 dark:text-neutral-200 font-light">
              {feature.description}
            </p>

            {/* Desktop: Always visible; Mobile: Visible only on tap */}
            <AnimatePresence initial={false}>
              {(isMobile ? expandedCard === i : true) && (
                <motion.ul
                  key="points"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mt-4 space-y-2 overflow-hidden"
                >
                  {feature.points.map((pt) => (
                    <li
                      key={pt}
                      className="flex items-center gap-2 text-neutral-600 dark:text-neutral-300"
                    >
                      <span className="text-gold">●</span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>

            {feature.image && (
              <div className="absolute bottom-4 right-4 w-20 opacity-50 pointer-events-none select-none">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="block dark:hidden"
                  draggable={false}
                />
                <img
                  src={feature.imageDark}
                  alt={feature.title}
                  className="hidden dark:block"
                  draggable={false}
                />
              </div>
            )}
          </motion.div>
        ))}

        {!showAll && remainingFeatures.length > 0 && (
          <button
            onClick={() => setShowAll(true)}
            className="col-span-full mx-auto mt-8 bg-gold text-white px-6 py-2 rounded-md hover:bg-gold-dark transition"
          >
            Load More Features
          </button>
        )}

        <p className="text-xl sm:text-2xl text-neutral-500 dark:text-neutral-400 col-span-full tracking-tight mt-8 text-center">
          <span className="text-gold font-semibold">Use one or all.</span> Each
          feature works standalone or as a platform.
        </p>
      </section>
    </div>
  );
}
