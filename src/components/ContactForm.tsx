/* ------------------------------------------------------------------------
   src/pages/Contact.tsx
   ------------------------------------------------------------------------ */

import React, { useEffect, useRef, useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { useLang } from "../components/LanguageContext";

/* ────────────────────────────────────────────────────────────────────── */
/* 1. Helpers                                                             */
/* ────────────────────────────────────────────────────────────────────── */

// Use Cloudflare’s public **test** key when running vite locally, otherwise
// use your real widget key.
const TURNSTILE_SITEKEY = import.meta.env.DEV
  ? "1x00000000000000000000AA" // ⬅ localhost / dev
  : "0x4AAAAAABgxYdNBr1gcmk5n"; // ⬅ your production key

type ContactTopic = string | { bold: string; text: string };

/* ────────────────────────────────────────────────────────────────────── */
/* 2. Component                                                           */
/* ────────────────────────────────────────────────────────────────────── */

export default function Contact() {
  const { t } = useLang();

  /* -------- theme sync (for dark-mode widget) ------------------------ */
  const [isDark, setIsDark] = useState(false);
  useEffect(() => {
    const html = document.documentElement;
    const sync = () => setIsDark(html.classList.contains("dark"));
    sync();
    const obs = new MutationObserver(sync);
    obs.observe(html, { attributes: true, attributeFilter: ["class"] });
    return () => obs.disconnect();
  }, []);

  /* -------- Cloudflare Turnstile ------------------------------------ */
  const widgetRef = useRef<HTMLDivElement | null>(null); // <div id="turnstile">
  const widgetId = useRef<string | null>(null); // id returned by render()
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error – injected by CDN script in index.html
    const turnstile = window.turnstile as typeof window.turnstile | undefined;

    if (!turnstile || !widgetRef.current) return;

    // Remove previous widget (dark/light toggle or Vite Fast-Refresh)
    if (widgetId.current) turnstile.remove(widgetId.current);

    widgetId.current = turnstile.render(widgetRef.current, {
      sitekey: TURNSTILE_SITEKEY,
      theme: isDark ? "dark" : "light",
      callback: (tok: string) => setToken(tok),
      "expired-callback": () => setToken(null),
      "error-callback": () => setToken(null),
    });

    // Clean up when component unmounts
    return () => {
      if (widgetId.current) turnstile.remove(widgetId.current);
    };
  }, [isDark]);

  /* -------- Formspree ------------------------------------------------ */
  const [state, formspreeSubmit] = useForm("xanjjnya"); // your Formspree ID

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    if (!token) {
      e.preventDefault();
      alert("Please complete the security check.");
      return;
    }
    formspreeSubmit(e); // let Formspree handle the POST
  };

  /* -------- style helper --------------------------------------------- */
  const sectionStyle = isDark
    ? {
        backgroundImage: "url('/contact-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }
    : { backgroundColor: "#fff" };

  /* -------- success screen ------------------------------------------- */
  if (state.succeeded) {
    return (
      <section
        id="contact"
        className="py-24 px-6 md:px-16"
        style={sectionStyle}
      >
        <p className="max-w-2xl mx-auto text-center text-2xl font-bold text-gold">
          {t.contact.success}
        </p>
      </section>
    );
  }

  /* ------------------------------------------------------------------ */
  /* 3. Mark-up                                                         */
  /* ------------------------------------------------------------------ */
  return (
    <section id="contact" className="py-24 px-6 md:px-16" style={sectionStyle}>
      {/* dark overlay for background image */}
      {isDark && (
        <div className="absolute inset-0 bg-black/60 backdrop-blur-md" />
      )}

      <div className="relative max-w-6xl mx-auto z-10 animate-fadeInUp">
        <h2 className="text-4xl font-bold text-gold text-center mb-12">
          {t.contact.heading}
        </h2>

        <div className="flex flex-col md:flex-row gap-10">
          {/* ────────────────  FORM  ──────────────── */}
          <form
            onSubmit={onSubmit}
            autoComplete="off"
            className="flex-1 bg-white/90 dark:bg-neutral-950/80 rounded-xl
                          shadow p-8 space-y-6 border border-gold/20 backdrop-blur"
          >
            <div className="grid md:grid-cols-2 gap-6">
              {/* Name */}
              <div>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder={t.contact.namePlaceholder}
                  className={`w-full p-4 rounded-lg border border-gold/20 focus:border-gold ${
                    isDark
                      ? "bg-neutral-900 text-white placeholder:text-neutral-400"
                      : "bg-white text-black placeholder:text-neutral-500"
                  }`}
                />
                <ValidationError
                  prefix="Name"
                  field="name"
                  errors={state.errors}
                />
              </div>

              {/* Email */}
              <div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder={t.contact.emailPlaceholder}
                  className={`w-full p-4 rounded-lg border border-gold/20 focus:border-gold ${
                    isDark
                      ? "bg-neutral-900 text-white placeholder:text-neutral-400"
                      : "bg-white text-black placeholder:text-neutral-500"
                  }`}
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
              </div>
            </div>

            {/* Message */}
            <div>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                placeholder={t.contact.messagePlaceholder}
                className={`w-full p-4 rounded-lg border border-gold/20 focus:border-gold ${
                  isDark
                    ? "bg-neutral-900 text-white placeholder:text-neutral-400"
                    : "bg-white text-black placeholder:text-neutral-500"
                }`}
              />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </div>

            {/* Turnstile widget mounts here */}
            <div className="flex justify-center">
              <div id="turnstile-widget" ref={widgetRef} />
            </div>

            {/* hidden field sent to Formspree */}
            <input
              type="hidden"
              name="cf-turnstile-response"
              value={token ?? ""}
            />

            {/* Submit */}
            <div className="text-center">
              <button
                type="submit"
                disabled={state.submitting}
                className="bg-gold hover:bg-yellow-500 text-black font-bold
                              py-3 px-8 rounded-lg transition duration-300"
              >
                {t.contact.send}
              </button>
            </div>
          </form>

          {/* ────────────────  INFO COLUMN  ──────────────── */}
          <aside className="flex-1 flex flex-col justify-center">
            <div
              className="bg-white/90 dark:bg-neutral-950/80 rounded-xl shadow
                               p-8 border border-gold/20 backdrop-blur space-y-5"
            >
              <h3 className="text-2xl font-bold text-gold mb-3">
                {t.contact.infoHeading}
              </h3>

              <ul className="list-disc ml-6 text-neutral-700 dark:text-neutral-300 space-y-2">
                {(t.contact.topics as ContactTopic[]).map((topic, i) =>
                  typeof topic === "string" ? (
                    <li key={i}>{topic}</li>
                  ) : (
                    <li key={i}>
                      <b>{topic.bold}</b> {topic.text}
                    </li>
                  )
                )}
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
