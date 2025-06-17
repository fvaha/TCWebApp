import React, { useEffect, useState, useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { useLang } from "../components/LanguageContext";

const RECAPTCHA_SITE_KEY = "6LeATWMrAAAAAOnaYhd54ByxLKCFv-IRHv1RHVg2";

export default function ContactForm() {
  const { t } = useLang();
  const [state, setState] = useState({ submitting: false, succeeded: false, errors: [] as any[] });
  const [isDark, setIsDark] = useState(false);
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  useEffect(() => {
    const html = document.documentElement;
    const syncTheme = () => setIsDark(html.classList.contains("dark"));
    syncTheme();
    const obs = new MutationObserver(syncTheme);
    obs.observe(html, { attributes: true, attributeFilter: ["class"] });
    return () => obs.disconnect();
  }, []);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setState({ submitting: true, succeeded: false, errors: [] });

    if (recaptchaRef.current) {
      try {
        // Execute the invisible recaptcha and wait for token
        const token = await recaptchaRef.current.executeAsync();
        recaptchaRef.current.reset();

        const formData = new FormData(e.currentTarget);
        if (token) {
          formData.append("g-recaptcha-response", token);
        }

        const res = await fetch("https://formspree.io/f/xanjjnya", {
          method: "POST",
          headers: { Accept: "application/json" },
          body: formData,
        });

        const json = await res.json();

        if (json.ok) {
          setState({ submitting: false, succeeded: true, errors: [] });
          e.currentTarget.reset();
        } else {
          setState({ submitting: false, succeeded: false, errors: json.errors || [] });
          alert("Submission failed: " + JSON.stringify(json.errors || json));
        }
      } catch (error) {
        setState({ submitting: false, succeeded: false, errors: [error] });
        alert("Submission error: " + error);
      }
    } else {
      alert("reCAPTCHA not ready");
      setState({ submitting: false, succeeded: false, errors: [] });
    }
  };

  // ... Your styling and form JSX remains mostly the same ...

  return (
    <section
      id="contact"
      className="relative py-24 px-6 md:px-16 transition-colors"
      style={isDark ? {
        backgroundImage: "url('/contact-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      } : { backgroundColor: "#fff" }}
    >
      {isDark && <div className="absolute inset-0 bg-black/60 backdrop-blur-md" />}
      <div className="relative max-w-6xl mx-auto z-10 animate-fadeInUp">
        <h2 className="text-4xl font-bold text-gold text-center mb-12">
          {t.contact?.heading || "Contact"}
        </h2>
        <form
          onSubmit={onSubmit}
          autoComplete="off"
          className="bg-white/90 dark:bg-neutral-950/80 rounded-xl shadow p-8 space-y-6 border border-gold/20 backdrop-blur max-w-lg mx-auto"
        >
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder={t.contact?.namePlaceholder || "Name"}
            className={`w-full p-4 rounded-lg border border-gold/20 focus:border-gold ${
              isDark
                ? "bg-neutral-900 text-white placeholder:text-neutral-400"
                : "bg-white text-black placeholder:text-neutral-500"
            }`}
          />
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder={t.contact?.emailPlaceholder || "Email"}
            className={`w-full p-4 rounded-lg border border-gold/20 focus:border-gold ${
              isDark
                ? "bg-neutral-900 text-white placeholder:text-neutral-400"
                : "bg-white text-black placeholder:text-neutral-500"
            }`}
          />
          <textarea
            id="message"
            name="message"
            required
            rows={6}
            placeholder={t.contact?.messagePlaceholder || "Message"}
            className={`w-full p-4 rounded-lg border border-gold/20 focus:border-gold ${
              isDark
                ? "bg-neutral-900 text-white placeholder:text-neutral-400"
                : "bg-white text-black placeholder:text-neutral-500"
            }`}
          />

          <ReCAPTCHA
            ref={recaptchaRef}
            sitekey={RECAPTCHA_SITE_KEY}
            size="invisible"
            badge="bottomright"
          />

          {state.errors.length > 0 && (
            <div className="text-red-600 text-center font-medium">{JSON.stringify(state.errors)}</div>
          )}

          <div className="text-center">
            <button
              type="submit"
              disabled={state.submitting}
              className={`bg-gold text-black font-bold py-3 px-8 rounded-lg transition duration-300 ${
                state.submitting ? "opacity-50 cursor-not-allowed" : "hover:bg-yellow-500"
              }`}
            >
              {state.submitting ? "…" : t.contact?.send || "Send"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
