import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isDark, setIsDark] = useState(false);

  // Watch for theme changes (Tailwind dark mode: class strategy)
  useEffect(() => {
    const html = document.documentElement;
    const updateDark = () => setIsDark(html.classList.contains("dark"));

    updateDark();
    const observer = new MutationObserver(updateDark);
    observer.observe(html, { attributes: true, attributeFilter: ["class"] });

    return () => observer.disconnect();
  }, []);

  // Mount Cloudflare Turnstile only ONCE, with correct theme
  useEffect(() => {
    // @ts-expect-error -- window.turnstile is not defined in the global scope
    const turnstile = window.turnstile;
    const container = document.getElementById("turnstile-widget");

    if (container && turnstile) {
      // Remove previous widget if exists
      container.innerHTML = "";
      turnstile.render(container, {
        sitekey: "",
        theme: isDark ? "dark" : "light",
      });
    }
  }, [isDark]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Form submitted");
  };

  // Dynamically set section style
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

  return (
    <section
      id="contact"
      className="relative py-24 px-6 md:px-16 transition-colors"
      style={sectionStyle}
    >
      {/* Overlay for dark mode */}
      {isDark && (
        <div className="absolute inset-0 bg-black bg-opacity-60 backdrop-blur-md" />
      )}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative max-w-5xl mx-auto z-10"
      >
        <h2 className="text-4xl font-bold text-gold text-center mb-8">
          Contact Us
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <input
              name="name"
              type="text"
              required
              placeholder="Your Name"
              className={`w-full p-4 rounded-lg border border-gold/20 focus:border-gold ${
                isDark
                  ? "bg-neutral-900 text-white placeholder:text-neutral-400"
                  : "bg-white text-black placeholder:text-neutral-500"
              }`}
              onChange={handleChange}
            />
            <input
              name="email"
              type="email"
              required
              placeholder="Your Email"
              className={`w-full p-4 rounded-lg border border-gold/20 focus:border-gold ${
                isDark
                  ? "bg-neutral-900 text-white placeholder:text-neutral-400"
                  : "bg-white text-black placeholder:text-neutral-500"
              }`}
              onChange={handleChange}
            />
          </div>
          <textarea
            name="message"
            required
            placeholder="Your Message"
            rows={6}
            className={`w-full p-4 rounded-lg border border-gold/20 focus:border-gold ${
              isDark
                ? "bg-neutral-900 text-white placeholder:text-neutral-400"
                : "bg-white text-black placeholder:text-neutral-500"
            }`}
            onChange={handleChange}
          />
          {/* Cloudflare Turnstile */}
          <div className="flex justify-center items-center">
            <div id="turnstile-widget" />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-gold hover:bg-yellow-500 text-black font-bold py-3 px-8 rounded-lg transition duration-300"
            >
              Send Message
            </button>
          </div>
        </form>
      </motion.div>
    </section>
  );
}
