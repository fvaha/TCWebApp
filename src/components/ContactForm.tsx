import React, { useEffect, useRef, useState } from "react";
import { useLang } from "../components/LanguageContext";

const TURNSTILE_SITE_KEY = "0x4AAAAAABgxYdNBr1gcmk5n"; // Your key

export default function ContactForm() {
  const { t } = useLang();
  const [token, setToken] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [succeeded, setSucceeded] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isDark, setIsDark] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const turnstileRef = useRef<HTMLDivElement>(null);

  // Theme sync
  useEffect(() => {
    const html = document.documentElement;
    const syncTheme = () => setIsDark(html.classList.contains("dark"));
    syncTheme();
    const obs = new MutationObserver(syncTheme);
    obs.observe(html, { attributes: true, attributeFilter: ["class"] });
    return () => obs.disconnect();
  }, []);

  // Load Turnstile widget
  useEffect(() => {
    if (window.turnstile) {
      renderWidget();
    } else {
      const script = document.createElement("script");
      script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js";
      script.async = true;
      script.onload = renderWidget;
      document.body.appendChild(script);
    }
    // eslint-disable-next-line
  }, []);

  function renderWidget() {
    if (!turnstileRef.current) return;
    window.turnstile?.render(turnstileRef.current, {
      sitekey: TURNSTILE_SITE_KEY,
      theme: isDark ? "dark" : "light",
      callback: setToken,
      "expired-callback": () => setToken(null),
    });
  }

  // Update widget theme on theme change
  useEffect(() => {
    if (window.turnstile && turnstileRef.current) {
      turnstileRef.current.innerHTML = "";
      renderWidget();
    }
    // eslint-disable-next-line
  }, [isDark]);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!token) {
      setError("Please complete the captcha.");
      return;
    }
    if (!formRef.current) return;

    setSubmitting(true);

    try {
      const formData = new FormData(formRef.current);
      formData.append("cf-turnstile-response", token);

      const res = await fetch("/contact.php", {
        method: "POST",
        body: formData,
      });

      // Make sure the response is actually JSON!
      let result;
      try {
        result = await res.json();
      } catch {
        setError("Submission error: server did not return JSON.");
        setSubmitting(false);
        return;
      }

      if (result.success) {
        setSucceeded(true);
        formRef.current.reset();
        setToken(null);
        if (window.turnstile && turnstileRef.current) {
          window.turnstile.reset(turnstileRef.current);
        }
      } else {
        setError(result.message || "Submission failed.");
      }
    } catch (err: any) {
      setError("Submission error: " + err.message);
    } finally {
      setSubmitting(false);
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

  if (succeeded) {
    return (
      <section id="contact" className="py-24 px-6 md:px-16" style={sectionStyle}>
        <div className="max-w-2xl mx-auto text-center text-2xl font-bold text-gold">
          {t.contact?.success || "Thank you for contacting us!"}
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
        <div className="absolute inset-0 bg-black/60 backdrop-blur-md pointer-events-none" />
      )}
      <div className="relative max-w-6xl mx-auto z-10 animate-fadeInUp">
        <h2 className="text-4xl font-bold text-gold text-center mb-12">
          {t.contact?.heading || "Contact"}
        </h2>
        <div className="flex flex-col md:flex-row gap-10">
          <form
            ref={formRef}
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
            </div>
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

            {/* --- Centered Cloudflare Turnstile --- */}
            <div className="flex justify-center">
              <div ref={turnstileRef} className="my-2" />
            </div>

            {error && (
              <div className="text-red-600 text-center font-medium">{error}</div>
            )}

            <div className="text-center">
              <button
                type="submit"
                disabled={submitting}
                className={`bg-gold text-black font-bold py-3 px-8 rounded-lg transition duration-300 ${
                  submitting
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:bg-yellow-500"
                }`}
              >
                {submitting ? "…" : t.contact?.send || "Send"}
              </button>
            </div>
          </form>
          {/* You can include your info box here if you want */}
        </div>
      </div>
    </section>
  );
}

// For TS global
declare global {
  interface Window {
    turnstile: any;
  }
}
