import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { features } from "../data/features";

export default function FeaturesGrid() {
  const [showAll, setShowAll] = useState(false);
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const initialFeatures = features.slice(0, 3);
  const remainingFeatures = features.slice(3);

  const handleLoadMore = () => setShowAll(true);

  return (
    <div className="w-full bg-white dark:bg-black transition-colors duration-300">
      <section
        id="features"
        className="w-full max-w-7xl mx-auto px-6 py-16 md:py-24 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3"
      >
        {(showAll ? features : initialFeatures).map((feature, i) => (
          <motion.div
            key={feature.title}
            className="relative flex flex-col rounded-xl border border-gold/30 bg-white dark:bg-neutral-950 p-6 shadow hover:shadow-lg hover:border-gold transition-all cursor-pointer"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.35, delay: i * 0.1 }}
            onClick={() =>
              window.innerWidth < 640 && // Mobile only interaction
              setExpandedCard(expandedCard === i ? null : i)
            }
          >
            <div className="flex items-center gap-3">
              <feature.icon className="text-gold w-6 h-6" />
              <h2
                className={`text-xl ${
                  window.innerWidth < 640 ? "font-light" : "font-bold"
                } text-gold`}
              >
                {feature.title}
              </h2>
            </div>
            <p
              className={`mt-2 text-neutral-700 dark:text-neutral-200 ${
                window.innerWidth < 640 ? "font-light" : ""
              }`}
            >
              {feature.description}
            </p>

            {/* Desktop: Always visible; Mobile: Visible only on tap */}
            <AnimatePresence>
              {(window.innerWidth >= 640 || expandedCard === i) && (
                <motion.ul
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
                />
                <img
                  src={feature.imageDark}
                  alt={feature.title}
                  className="hidden dark:block"
                />
              </div>
            )}
          </motion.div>
        ))}

        {!showAll && remainingFeatures.length > 0 && (
          <button
            onClick={handleLoadMore}
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
