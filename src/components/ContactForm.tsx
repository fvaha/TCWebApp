import React, { useEffect, useState } from "react";
import { ValidationError } from "@formspree/react";
import ReCAPTCHA from "react-google-recaptcha";
import { useLang } from "../components/LanguageContext";

type ContactTopic = string | { bold: string; text: string };

const RECAPTCHA_SITE_KEY = "6Le-P2MrAAAAALS4taUTV8ZTbC5DqKwAGLsaj9Es";

export default function ContactForm() {
  const { t } = useLang();
  const [recaptchaValue, setRecaptchaValue] = useState<string | null>(null);
  const [state, setState] = useState({ submitting: false, succeeded: false, errors: [] as any[] });
  const [isDark, setIsDark] = useState(false);

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

    if (!recaptchaValue) {
      alert("Please complete the reCAPTCHA!");
      return;
    }

    setState({ ...state, submitting: true, errors: [] });

    const formData = new FormData(e.currentTarget);
    formData.append("g-recaptcha-response", recaptchaValue);

    try {
      const res = await fetch("https://formspree.io/f/xanjjnya", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      });

      const json = await res.json();

      if (json.ok) {
        setState({ submitting: false, succeeded: true, errors: [] });
        setRecaptchaValue(null);
        e.currentTarget.reset();
      } else {
        setState({ submitting: false, succeeded: false, errors: json.errors || [] });
        alert("Submission failed: " + JSON.stringify(json.errors || json));
      }
    } catch (error) {
      setState({ submitting: false, succeeded: false, errors: [error] });
      alert("Submission error: " + error);
    }
  };

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
      <section id="contact" className="relative py-24 px-6 md:px-16 transition-colors" style={sectionStyle}>
        <div className="max-w-2xl mx-auto text-center text-2xl font-bold text-gold">
          {t.contact?.success || "Thank you for contacting us!"}
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="relative py-24 px-6 md:px-16 transition-colors" style={sectionStyle}>
      {isDark && <div className="absolute inset-0 bg-black/60 backdrop-blur-md" />}
      <div className="relative max-w-6xl mx-auto z-10 animate-fadeInUp">
        <h2 className="text-4xl font-bold text-gold text-center mb-12">{t.contact?.heading || "Contact"}</h2>
        <div className="flex flex-col md:flex-row gap-10">
          <form
            onSubmit={onSubmit}
            autoComplete="off"
            className="flex-1 bg-white/90 dark:bg-neutral-950/80 rounded-xl shadow p-8 space-y-6 border border-gold/20 backdrop-blur"
          >
            <div className="grid md:grid-cols-2 gap-6">
              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder={t.contact?.namePlaceholder || "Name"}
                className={`w-full p-4 rounded-lg border border-gold/20 focus:border-gold ${
                  isDark ? "bg-neutral-900 text-white placeholder:text-neutral-400" : "bg-white text-black placeholder:text-neutral-500"
                }`}
              />
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder={t.contact?.emailPlaceholder || "Email"}
                className={`w-full p-4 rounded-lg border border-gold/20 focus:border-gold ${
                  isDark ? "bg-neutral-900 text-white placeholder:text-neutral-400" : "bg-white text-black placeholder:text-neutral-500"
                }`}
              />
            </div>
            <textarea
              id="message"
              name="message"
              required
              rows={6}
              placeholder={t.contact?.messagePlaceholder || "Message"}
              className={`w-full p-4 rounded-lg border border-gold/20 focus:border-gold ${
                isDark ? "bg-neutral-900 text-white placeholder:text-neutral-400" : "bg-white text-black placeholder:text-neutral-500"
              }`}
            />
            <div className="flex flex-col items-center">
              <ReCAPTCHA sitekey={RECAPTCHA_SITE_KEY} theme={isDark ? "dark" : "light"} onChange={setRecaptchaValue} />
            </div>

            {state.errors.length > 0 && (
              <div className="text-red-600 text-center font-medium">
                {JSON.stringify(state.errors)}
              </div>
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

          <div className="flex-1 flex flex-col justify-center">
            <div className="bg-white/90 dark:bg-neutral-950/80 rounded-xl shadow p-8 border border-gold/20 backdrop-blur space-y-5">
              <h3 className="text-2xl font-bold text-gold mb-3">{t.contact?.infoHeading || "Why contact us?"}</h3>
              <ul className="list-disc ml-6 text-neutral-700 dark:text-neutral-300 space-y-2">
                {(t.contact?.topics as ContactTopic[]).map((topic, i) =>
                  typeof topic === "string" ? <li key={i}>{topic}</li> : <li key={i}><b>{topic.bold}</b> {topic.text}</li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
