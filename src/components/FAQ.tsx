import { useState, useMemo } from "react";
import { useLang } from "../components/LanguageContext";
import type { FaqItem } from "../types/faq";

/* ---------- language data ---------- */
import { faqItems as faqEn } from "../data/faq.en";
import { faqItems as faqDe } from "../data/faq.de";
import { faqItems as faqFr } from "../data/faq.fr";
import { faqItems as faqAr } from "../data/faq.ar";
import { faqItems as faqCr } from "../data/faq.cr";
import { faqItems as faqNo } from "../data/faq.no";
import { faqItems as faqRu } from "../data/faq.ru";
import { faqItems as faqSp } from "../data/faq.sp";

const faqMap: Record<string, FaqItem[]> = {
  en: faqEn,
  de: faqDe,
  fr: faqFr,
  ar: faqAr,
  cr: faqCr,
  no: faqNo,
  ru: faqRu,
  sp: faqSp,
};

export default function FAQGrid() {
  const { t, lang } = useLang();
  const [active, setActive] = useState<number | null>(null);
  const faqs = useMemo(() => faqMap[lang] || faqEn, [lang]);

  const toggle = (idx: number) => setActive(active === idx ? null : idx);

  return (
    <div className="full-bleed w-full bg-white dark:bg-black transition-colors">
      <section
        id="faq"
        className="mx-auto grid w-full max-w-[1800px] grid-cols-1 gap-4 px-4 py-12
                   sm:px-6 md:grid-cols-2 md:gap-5 md:py-20 lg:grid-cols-3"
      >
        <h2 className="md:col-span-2 lg:col-span-3 mb-8 text-center text-3xl font-bold text-gold md:mb-12 md:text-4xl">
          {t.faq.heading}
        </h2>

        {faqs.map((faq, i) => {
          const open = active === i;

          return (
            <div
              key={faq.question}
              onClick={() => toggle(i)}
              className="cursor-pointer transition-all"
            >
              <div className="flex justify-between items-start gap-2">
                <p className="text-lg md:text-xl text-gold">{faq.question}</p>
                <span
                  className={`text-xl text-gold transition-transform duration-300 ${
                    open ? "rotate-180" : ""
                  }`}
                >
                  ▼
                </span>
              </div>

              <div
                className={`overflow-hidden transition-[max-height,opacity] duration-300 pt-3 ${
                  open ? "max-h-[800px] opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                {faq.answer.map((p, idx) => (
                  <p
                    key={idx}
                    className="text-sm text-neutral-700 dark:text-neutral-300 md:text-base"
                  >
                    {p}
                  </p>
                ))}
              </div>
            </div>
          );
        })}

        <p className="md:col-span-2 lg:col-span-3 mt-8 text-center text-base tracking-tight text-neutral-500 dark:text-neutral-400 md:text-lg">
          <span className="font-semibold text-gold">{t.faq.moreInfo}</span>{" "}
          {t.faq.contactCTA}
        </p>
      </section>
    </div>
  );
}
