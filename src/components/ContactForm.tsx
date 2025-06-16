import { useEffect, useState, useRef } from "react";
import { useLang } from "../components/LanguageContext";

type ContactTopic = string | { bold: string; text: string };

export default function ContactForm() {
  const { t } = useLang();

  const [isDark, setIsDark] = useState(false);
  useEffect(() => {
    const html = document.documentElement;
    const syncTheme = () => setIsDark(html.classList.contains("dark"));
    syncTheme();
    const obs = new MutationObserver(syncTheme);
    obs.observe(html, { attributes: true, attributeFilter: ["class"] });
    return () => obs.disconnect();
  }, []);

  const siteKey = "0x4AAAAAABgxYdNBr1gcmk5n";

  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);
  const widgetTimer = useRef<number | null>(null);

  const renderTurnstile = () => {
    const turnstile = (window as any).turnstile;
    const container = document.getElementById("turnstile-widget");

    if (!turnstile || !container || !siteKey) {
      return;
    }

    container.innerHTML = "";
    setTurnstileToken(null);

    turnstile.render(container, {
      sitekey: siteKey,
      theme: isDark ? "dark" : "light",
      callback: (token: string) => {
        setTurnstileToken(token);
      },
      "expired-callback": () => {
        setTurnstileToken(null);
      },
      "error-callback": () => {
        setTurnstileToken(null);
      },
    });

    if (widgetTimer.current) clearTimeout(widgetTimer.current);
    widgetTimer.current = window.setTimeout(renderTurnstile, 15 * 60 * 1000);
  };

  useEffect(() => {
    if (!siteKey) return;
    let cancelled = false;

    function tryRender() {
      if (cancelled) return;
      if ((window as any).turnstile && document.getElementById("turnstile-widget")) {
        renderTurnstile();
      } else {
        setTimeout(tryRender, 100);
      }
    }
    tryRender();

    return () => {
      cancelled = true;
      if (widgetTimer.current) clearTimeout(widgetTimer.current);
    };
  }, [isDark]);

  const [submitting, setSubmitting] = useState(false);
  const [succeeded, setSucceeded] = useState(false);
  const [errors, setErrors] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrors(null);

    if (!turnstileToken) {
      alert("Please complete the security check first.");
      return;
    }

    setSubmitting(true);
    const formData = new FormData(e.currentTarget);
    const data: Record<string, string> = {};
    for (const [key, value] of formData.entries()) data[key] = String(value);
    data["token"] = turnstileToken;

    try {
      const res = await fetch("/api", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (json.success) setSucceeded(true);
      else setErrors(json.error || "Unknown error.");
    } catch {
      setErrors("Network/server error. Please try again later.");
    } finally {
      setSubmitting(false);
    }
  }

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
      {isDark && <div className="absolute inset-0 bg-black/60 backdrop-blur-md" />}
      <div className="relative max-w-6xl mx-auto z-10 animate-fadeInUp">
        <h2 className="text-4xl font-bold text-gold text-center mb-12">
          {t.contact.heading}
        </h2>
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
                placeholder={t.contact.namePlaceholder}
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
                placeholder={t.contact.emailPlaceholder}
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
              placeholder={t.contact.messagePlaceholder}
              className={`w-full p-4 rounded-lg border border-gold/20 focus:border-gold ${
                isDark
                  ? "bg-neutral-900 text-white placeholder:text-neutral-400"
                  : "bg-white text-black placeholder:text-neutral-500"
              }`}
            />
            <div className="flex flex-col items-center">
              <div id="turnstile-widget" />
            </div>
            {errors && (
              <div className="text-red-600 text-center font-medium">{errors}</div>
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
                {submitting ? "…" : t.contact.send}
              </button>
            </div>
          </form>

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
