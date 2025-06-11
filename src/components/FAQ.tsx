import { motion } from "framer-motion";
import { useState } from "react";
import { FaqItem } from "../data/faq";

export default function FAQGrid() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAnswer = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="w-full bg-white dark:bg-black transition-colors duration-300">
      <section
        id="faq"
        className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 py-12 md:py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5"
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="md:col-span-2 lg:col-span-3"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gold text-center mb-8 md:mb-12">
            Frequently Asked Questions
          </h2>
        </motion.div>

        {FaqItem.map((faq, i) => (
          <motion.div
            key={faq.question}
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            whileHover={{
              scale: 1.02,
              boxShadow: "0 8px 32px 0 rgba(212,175,55,0.08)",
            }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: i * 0.05 }}
            className="group relative w-full flex flex-col rounded-xl border border-gold/30 bg-white dark:bg-neutral-950 p-5 md:p-6 shadow hover:shadow-lg hover:border-gold transition-all cursor-pointer"
            onClick={() => toggleAnswer(i)}
          >
            <div className="flex items-start gap-3">
              <span className="text-gold font-bold text-lg md:text-xl">
                Q{i + 1}.
              </span>
              <div className="flex-1">
                <h3 className="text-lg md:text-xl font-bold text-gold">
                  {faq.question}
                </h3>

                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{
                    height: activeIndex === i ? "auto" : 0,
                    opacity: activeIndex === i ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="space-y-2 pt-3">
                    {faq.answer.map((paragraph, pIndex) => (
                      <p
                        key={pIndex}
                        className="text-sm md:text-base text-neutral-700 dark:text-neutral-300"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                  {faq.points && (
                    <ul className="mt-3 space-y-1.5">
                      {faq.points.map((point, ptIndex) => (
                        <li
                          key={ptIndex}
                          className="flex items-start gap-2 text-sm md:text-base text-neutral-700 dark:text-neutral-300"
                        >
                          <span className="text-gold mt-1">●</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </motion.div>
              </div>
              <motion.span
                className="ml-2 text-gold text-xl mt-0.5"
                animate={{ rotate: activeIndex === i ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                ▼
              </motion.span>
            </div>
          </motion.div>
        ))}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="md:col-span-2 lg:col-span-3 mt-6 md:mt-8"
        >
          <p className="text-base md:text-lg text-neutral-500 dark:text-neutral-400 tracking-tight text-center">
            <span className="text-gold font-semibold">
              Need more information?
            </span>{" "}
            Contact our security team for detailed technical specifications.
          </p>
        </motion.div>
      </section>
    </div>
  );
}
