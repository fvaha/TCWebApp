/* ---------------------------------------------------------------------------
   ContactForm.tsx – turnkey replacement
   --------------------------------------------------------------------------- */

import React, { useEffect, useState, useRef } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { useLang } from "../components/LanguageContext";

/** ------------------------------------------------------------------------ */
/** 1. Local types                                                          **/
/** ------------------------------------------------------------------------ */
type ContactTopic = string | { bold: string; text: string };

/** ------------------------------------------------------------------------ */
/** 2. Component                                                            **/
/** ------------------------------------------------------------------------ */
export default function ContactForm() {
  const { t } = useLang();

  /** Light/dark sync ------------------------------------------------------ */
  const [isDark, setIsDark] = useState(false);
  useEffect(() => {
    const html = document.documentElement;
    const syncTheme = () => setIsDark(html.classList.contains("dark"));
    syncTheme();
    const obs = new MutationObserver(syncTheme);
    obs.observe(html, { attributes: true, attributeFilter: ["class"] });
    return () => obs.disconnect();
  }, []);

  /** Cloudflare Turnstile ------------------------------------------------- */
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);
  const [widgetReady, setWidgetReady] = useState(false); // new
  const widgetTimer = useRef<number | undefined>(undefined); // explicit

  const renderTurnstile = () => {
    // @ts-expect-error – Turnstile is injected by the CDN script in index.html
    const turnstile = window.turnstile;
    const container = document.getElementById("turnstile-widget");
    if (!container || !turnstile) return;

    container.innerHTML = ""; // reset (also clears any residual iframe)
    setTurnstileToken(null);
    setWidgetReady(false);

    turnstile.render(container, {
      sitekey: "0x4AAAAAABgxYdNBr1gcmk5n",
      theme: isDark ? "dark" : "light",
      callback: (token: string) => {
        setTurnstileToken(token);
        setWidgetReady(true);
      },
      "expired-callback": () => {
        setTurnstileToken(null);
        setWidgetReady(false);
      },
      "error-callback": () => {
        setTurnstileToken(null);
        setWidgetReady(false);
      },
    });

    // Re-render every 15 min so the token never goes stale
    clearTimeout(widgetTimer.current);
    widgetTimer.current = window.setTimeout(renderTurnstile, 15 * 60 * 1000);
  };

  useEffect(() => {
    renderTurnstile(); // first render
    return () => clearTimeout(widgetTimer.current); // cleanup on unmount
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isDark]); // re-render on theme switch

  /** Formspree ------------------------------------------------------------ */
  const [state, handleSubmit] = useForm("xanjjnya");

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    // Token guard
    if (!turnstileToken) {
      e.preventDefault();
      alert("⚠️ Please complete the security check first.");
      return;
    }
    handleSubmit(e);
  }

  /** Background helper ---------------------------------------------------- */
  const sectionStyle = isDark
    ? {
        backgroundImage: "url('/contact-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }
    : { backgroundColor: "#fff" };

  /** ---------------------------------------------------------------------- */
  /** 3. Success view                                                       **/
  /** ---------------------------------------------------------------------- */
  if (state.succeeded) {
    return (
      <section
        id="contact"
        className="relative py-24 px-6 md:px-16 transition-colors"
        style={sectionStyle}
      >
        <div className="max-w-2xl mx-auto text-center text-2xl font-bold text-gold">
          {t.contact.success}
        </div>
      </section>
    );
  }

  /** ---------------------------------------------------------------------- */
  /** 4. Form view                                                          **/
  /** ---------------------------------------------------------------------- */
  return (
    <section
      id="contact"
      className="relative py-24 px-6 md:px-16 transition-colors"
      style={sectionStyle}
    >
      {isDark && (
        <div className="absolute inset-0 bg-black/60 backdrop-blur-md" />
      )}

      <div className="relative max-w-6xl mx-auto z-10 animate-fadeInUp">
        <h2 className="text-4xl font-bold text-gold text-center mb-12">
          {t.contact.heading}
        </h2>

        <div className="flex flex-col md:flex-row gap-10">
          {/* ------------------------ FORM ----------------------------------- */}
          <form
            onSubmit={onSubmit}
            autoComplete="off"
            className="flex-1 bg-white/90 dark:bg-neutral-950/80 rounded-xl shadow
                          p-8 space-y-6 border border-gold/20 backdrop-blur"
          >
            {/* Name & Email -------------------------------------------------- */}
            <div className="grid md:grid-cols-2 gap-6">
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

            {/* Message ------------------------------------------------------- */}
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

            {/* Turnstile widget + hidden field ------------------------------ */}
            <div className="flex justify-center items-center">
              <div id="turnstile-widget" />
            </div>
            <input
              type="hidden"
              name="cf-turnstile-response"
              value={turnstileToken ?? ""}
            />

            {/* Submit -------------------------------------------------------- */}
            <div className="text-center">
              <button
                type="submit"
                disabled={state.submitting || !widgetReady}
                className={`bg-gold text-black font-bold py-3 px-8 rounded-lg
                               transition duration-300 ${
                                 state.submitting || !widgetReady
                                   ? "opacity-50 cursor-not-allowed"
                                   : "hover:bg-yellow-500"
                               }`}
              >
                {state.submitting ? "…" : t.contact.send}
              </button>
            </div>
          </form>

          {/* ------------------------ INFO ---------------------------------- */}
          <div className="flex-1 flex flex-col justify-center">
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
          </div>
        </div>
      </div>
    </section>
  );
}
