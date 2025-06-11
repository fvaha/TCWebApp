import { motion } from "framer-motion";
import { features } from "../data/features";

export default function FeaturesGrid() {
  return (
    <div className="w-full bg-white dark:bg-black transition-colors duration-300">
      <section
        id="features"
        className="w-full max-w-7xl mx-auto px-6 py-16 md:py-24 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3"
      >
        {features.map((feature, i) => (
          <motion.a
            key={feature.title}
            href="#"
            tabIndex={0}
            className="group relative w-full flex flex-col rounded-xl border border-gold/30 bg-white dark:bg-neutral-950 p-6 shadow hover:shadow-lg hover:border-gold transition-all focus:outline-none focus:ring-2 focus:ring-gold"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            whileHover={{
              scale: 1.03,
              boxShadow: "0 8px 32px 0 rgba(212,175,55,0.14)",
            }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: i * 0.08 }}
          >
            <div className="flex items-center gap-3 mb-2">
              <span>
                <feature.icon className="text-gold w-6 h-6" />
              </span>
              <h2 className="text-xl font-bold text-gold">{feature.title}</h2>
            </div>
            <p className="mb-4 text-neutral-700 dark:text-neutral-200">
              {feature.description}
            </p>
            <ul className="space-y-2 mb-2">
              {feature.points.map((pt) => (
                <li
                  key={pt}
                  className="flex items-center gap-2 text-neutral-600 dark:text-neutral-300"
                >
                  <span className="text-gold">●</span>
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
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
          </motion.a>
        ))}
        <p className="text-xl sm:text-2xl text-neutral-500 dark:text-neutral-400 col-span-full tracking-tight mt-8 text-center">
          <span className="text-gold font-semibold">Use one or all.</span> Each
          feature works standalone or as a platform.
        </p>
      </section>
    </div>
  );
}
