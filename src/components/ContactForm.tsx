import React, { useEffect, useState, useRef } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { useLang } from "../components/LanguageContext";

type ContactTopic = string | { bold: string; text: string };

export default function ContactForm() {
  const { t } = useLang();

  /* ------------------------------------------------------------------ */
  /*  1. Dark-mode sync                                                 */
  /* ------------------------------------------------------------------ */
  const [isDark, setIsDark] = useState(false);
  useEffect(() => {
    const html = document.documentElement;
    const sync = () => setIsDark(html.classList.contains("dark"));
    sync();
    const obs = new MutationObserver(sync);
    obs.observe(html, { attributes: true, attributeFilter: ["class"] });
    return () => obs.disconnect();
  }, []);

  /* ------------------------------------------------------------------ */
  /*  2. Cloudflare Turnstile                                           */
  /* ------------------------------------------------------------------ */
  const widgetId = useRef<string | null>(null); // if you ever need to reset
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    // @ts-expect-error: provided by Turnstile script
    const ts = window.turnstile as typeof import("turnstile");
    const container = document.getElementById("turnstile-widget");

    if (container && ts) {
      container.innerHTML = ""; // remount on theme switch
      widgetId.current = ts.render(container, {
        sitekey: "0x4AAAAAABgxYdNBr1gcmk5n",
        theme: isDark ? "dark" : "light",
        callback: (tok: string) => setToken(tok), // got a fresh token
        "expired-callback": () => setToken(null),
        "error-callback": () => setToken(null),
      });
    }
  }, [isDark]);

  /* ------------------------------------------------------------------ */
  /*  3. Formspree                                                      */
  /* ------------------------------------------------------------------ */
  const [state, formspreeSubmit] = useForm("xanjjnya");

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    if (!token) {
      e.preventDefault();
      alert("Please complete the security check.");
      return;
    }
    formspreeSubmit(e);
  };

  /* ------------------------------------------------------------------ */
  /*  4. Simple success screen                                          */
  /* ------------------------------------------------------------------ */
  const bgStyle = isDark
    ? {
        backgroundImage: "url('/contact-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }
    : { backgroundColor: "#fff" as const };

  if (state.succeeded) {
    return (
      <section id="contact" className="py-24 px-6 md:px-16" style={bgStyle}>
        <div className="max-w-2xl mx-auto text-center text-2xl font-bold text-gold">
          {t.contact.success}
        </div>
      </section>
    );
  }

  /* ------------------------------------------------------------------ */
  /*  5. Form markup                                                    */
  /* ------------------------------------------------------------------ */
  return (
    <section id="contact" className="py-24 px-6 md:px-16" style={bgStyle}>
      {isDark && (
        <div className="absolute inset-0 bg-black/60 backdrop-blur-md pointer-events-none" />
      )}

      <div className="relative max-w-6xl mx-auto z-10 animate-fadeInUp">
        <h2 className="text-4xl font-bold text-gold text-center mb-12">
          {t.contact.heading}
        </h2>

        <div className="flex flex-col md:flex-row gap-10">
          {/* ----------------------------- FORM ----------------------------- */}
          <form
            onSubmit={onSubmit}
            autoComplete="off"
            className="flex-1 bg-white/90 dark:bg-neutral-950/80
                       rounded-xl shadow p-8 space-y-6 border border-gold/20
                       backdrop-blur"
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

            {/* Turnstile widget */}
            <div className="flex justify-center">
              <div id="turnstile-widget" />
            </div>

            {/* Hidden field – send token to Formspree */}
            <input
              type="hidden"
              name="cf-turnstile-response"
              value={token ?? ""}
            />

            {/* Submit */}
            <div className="text-center">
              <button
                type="submit"
                disabled={!token || state.submitting}
                className="bg-gold hover:bg-yellow-500 text-black font-bold
                           py-3 px-8 rounded-lg transition duration-300
                           disabled:opacity-40 disabled:cursor-not-allowed"
              >
                {t.contact.send}
              </button>
            </div>
          </form>

          {/* --------------------------- INFO BOX --------------------------- */}
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
