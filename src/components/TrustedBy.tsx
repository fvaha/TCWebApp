import React from "react";

const logos = ["/logo1.png", "/logo2.png", "/logo3.png", "/logo4.png"];

const TrustedBy: React.FC = () => (
  <section className="py-12 bg-white dark:bg-neutral-950 border-y border-gold/30 text-center">
    <p className="text-neutral-500 dark:text-neutral-400 uppercase mb-4 tracking-widest">
      Trusted by
    </p>
    <div className="flex flex-wrap justify-center gap-8">
      {logos.map((src, i) => (
        <img src={src} alt="" key={i} className="h-10 opacity-70" />
      ))}
    </div>
  </section>
);

export default TrustedBy;
