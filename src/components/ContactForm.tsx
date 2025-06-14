/* src/pages/Contact.tsx */
import React, { useEffect, useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { useLang } from "../components/LanguageContext";

type ContactTopic = string | { bold: string; text: string };

export default function Contact() {
  const { t } = useLang();

  /* ---------------------------------------------------------------- theme */
  const [isDark, setIsDark] = useState(false);
  useEffect(() => {
    const html = document.documentElement;
    const sync = () => setIsDark(html.classList.contains("dark"));
    sync();
    const obs = new MutationObserver(sync);
    obs.observe(html, { attributes: true, attributeFilter: ["class"] });
    return () => obs.disconnect();
  }, []);

  /* --------------------------------------------------------- Turnstile 🛡 */
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);

  useEffect(() => {
    // @ts-expect-error injected by the Turnstile snippet in index.html
    const turnstile = window.turnstile;
    const el = document.getElementById("turnstile-widget");
    if (el && turnstile) {
      el.innerHTML = "";
      turnstile.render(el, {
        sitekey: "0x4AAAAAABgxYdNBr1gcmk5n",
        theme: isDark ? "dark" : "light",
        callback: (token: string) => setTurnstileToken(token),
        "expired-callback": () => setTurnstileToken(null),
        "error-callback": () => setTurnstileToken(null),
      });
    }
  }, [isDark]);

  /* --------------------------------------------------------------- Formspree */
  const [state, handleSubmit] = useForm("xanjjnya");

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    if (!turnstileToken) {
      // Defensive check – shouldn’t be reachable because button is disabled.
      e.preventDefault();
      return;
    }
    handleSubmit(e);
  }

  /* ---------------------------------------------------------------- CSS helpers */
  const sectionStyle = isDark
    ? {
        backgroundImage: "url('/contact-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }
    : { backgroundColor: "#fff" };

  if (state.succeeded) {
    return (
      <section
        id="contact"
        className="relative py-24 px-6 md:px-16"
        style={sectionStyle}
      >
        <div className="max-w-2xl mx-auto text-center text-2xl font-bold text-gold">
          {t.contact.success}
        </div>
      </section>
    );
  }

  /* ---------------------------------------------------------------- JSX */
  return (
    <section
      id="contact"
      className="relative py-24 px-6 md:px-16"
      style={sectionStyle}
    >
      {isDark && (
        <div className="absolute inset-0 bg-black/60 backdrop-blur-md" />
      )}

      <div className="relative z-10 mx-auto max-w-6xl animate-fadeInUp">
        <h2 className="mb-12 text-center text-4xl font-bold text-gold">
          {t.contact.heading}
        </h2>

        <div className="flex flex-col gap-10 md:flex-row">
          {/* ---------------- Form ---------------- */}
          <form
            onSubmit={onSubmit}
            autoComplete="off"
            className="flex-1 space-y-6 rounded-xl border border-gold/20
                       bg-white/90 p-8 shadow backdrop-blur
                       dark:bg-neutral-950/80"
          >
            {/* --- name + email */}
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder={t.contact.namePlaceholder}
                  className={`w-full rounded-lg border border-gold/20 p-4 focus:border-gold ${
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
                  className={`w-full rounded-lg border border-gold/20 p-4 focus:border-gold ${
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

            {/* --- message */}
            <div>
              <textarea
                id="message"
                name="message"
                rows={6}
                required
                placeholder={t.contact.messagePlaceholder}
                className={`w-full rounded-lg border border-gold/20 p-4 focus:border-gold ${
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

            {/* Turnstile */}
            <div className="flex justify-center">
              <div id="turnstile-widget" />
            </div>

            {/* hidden token field */}
            <input
              type="hidden"
              name="cf-turnstile-response"
              value={turnstileToken ?? ""}
            />

            {/* submit */}
            <div className="text-center">
              <button
                type="submit"
                disabled={!turnstileToken || state.submitting}
                className={`bg-gold py-3 px-8 font-bold rounded-lg transition
                             ${
                               !turnstileToken || state.submitting
                                 ? "cursor-not-allowed opacity-50"
                                 : "hover:bg-yellow-500"
                             }`}
              >
                {state.submitting ? "…" : t.contact.send}
              </button>
            </div>
          </form>

          {/* ---------------- Info column ---------------- */}
          <aside className="flex flex-1 flex-col justify-center">
            <div className="space-y-5 rounded-xl border border-gold/20 bg-white/90 p-8 shadow backdrop-blur dark:bg-neutral-950/80">
              <h3 className="mb-3 text-2xl font-bold text-gold">
                {t.contact.infoHeading}
              </h3>

              <ul className="ml-6 list-disc space-y-2 text-neutral-700 dark:text-neutral-300">
                {(t.contact.topics as ContactTopic[]).map((tpc, i) =>
                  typeof tpc === "string" ? (
                    <li key={i}>{tpc}</li>
                  ) : (
                    <li key={i}>
                      <b>{tpc.bold}</b> {tpc.text}
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
