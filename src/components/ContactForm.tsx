import React, { useEffect, useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { useLang } from "../components/LanguageContext";

type ContactTopic = string | { bold: string; text: string };

export default function Contact() {
  const { t } = useLang();
  const [isDark, setIsDark] = useState(false);
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);

  // Formspree
  const [state, handleSubmit] = useForm("xanjjnya");

  // Watch for theme changes
  useEffect(() => {
    const html = document.documentElement;
    const updateDark = () => setIsDark(html.classList.contains("dark"));
    updateDark();
    const observer = new MutationObserver(updateDark);
    observer.observe(html, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  // Mount Cloudflare Turnstile and listen for response token
  useEffect(() => {
    // @ts-expect-error: window.turnstile is injected by the CDN script
    const turnstile = window.turnstile;
    const container = document.getElementById("turnstile-widget");

    if (container && turnstile) {
      container.innerHTML = "";
      turnstile.render(container, {
        sitekey: "0x4AAAAAABgxYdNBr1gcmk5n",
        theme: isDark ? "dark" : "light",
        callback: (token: string) => setTurnstileToken(token),
        "expired-callback": () => setTurnstileToken(null),
        "error-callback": () => setTurnstileToken(null),
      });
    }
  }, [isDark]);

  // Prevent form submit if Turnstile not passed
  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    if (!turnstileToken) {
      e.preventDefault();
      alert("Please complete the security check.");
      return;
    }
    handleSubmit(e);
  }

  const sectionStyle = isDark
    ? {
        backgroundImage: "url('/contact-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }
    : {
        backgroundColor: "#fff",
      };

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

  return (
    <section
      id="contact"
      className="relative py-24 px-6 md:px-16 transition-colors"
      style={sectionStyle}
    >
      {isDark && (
        <div className="absolute inset-0 bg-black bg-opacity-60 backdrop-blur-md" />
      )}
      <div className="relative max-w-6xl mx-auto z-10 animate-fadeInUp">
        <h2 className="text-4xl font-bold text-gold text-center mb-12">
          {t.contact.heading}
        </h2>
        <div className="flex flex-col md:flex-row gap-10">
          {/* Left: Form */}
          <form
            onSubmit={onSubmit}
            className="flex-1 bg-white/90 dark:bg-neutral-950/80 rounded-xl shadow p-8 space-y-6 border border-gold/20 backdrop-blur"
            autoComplete="off"
          >
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
            <div>
              <textarea
                id="message"
                name="message"
                required
                placeholder={t.contact.messagePlaceholder}
                rows={6}
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
            <div className="flex justify-center items-center">
              <div id="turnstile-widget" />
            </div>
            <div className="text-center">
              <button
                type="submit"
                disabled={state.submitting}
                className="bg-gold hover:bg-yellow-500 text-black font-bold py-3 px-8 rounded-lg transition duration-300"
              >
                {t.contact.send}
              </button>
            </div>
          </form>

          {/* Right: Info */}
          <div className="flex-1 flex flex-col justify-center">
            <div className="bg-white/90 dark:bg-neutral-950/80 rounded-xl shadow p-8 border border-gold/20 backdrop-blur space-y-5">
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
