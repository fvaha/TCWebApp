import React from "react";

const Callout: React.FC = () => (
  <section className="py-24 bg-neutral-50 dark:bg-neutral-900 text-center transition-colors">
    <h2 className="text-3xl md:text-4xl font-bold text-gold mb-2">
      Why TerraCrypt?
    </h2>
    <hr className="border-t-2 border-gold w-20 mx-auto mb-8" />
    <p className="max-w-2xl mx-auto text-neutral-700 dark:text-neutral-200">
      TerraCrypt brings zero-trust, gold-standard encryption to everyone.
      Private keys never leave your device. Compliant, hardware-secured, and
      easy to use.
    </p>
  </section>
);

export default Callout;
