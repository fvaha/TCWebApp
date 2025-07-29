import React from "react";
import { useLang } from "../components/LanguageContext";
import Footer from "../components/Footer";

const TokenPage: React.FC = () => {
  const { t } = useLang();

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950 text-neutral-900 dark:text-white transition-colors duration-300">
      {/* Hero Section */}
      <section className="relative py-20 px-6 bg-gradient-to-br from-neutral-50 to-neutral-100 dark:from-neutral-900 dark:to-neutral-950">
        <div className="max-w-6xl mx-auto text-center">
          {/* $TERRA Logo */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="w-24 h-24 bg-gold rounded-full flex items-center justify-center border-4 border-gold shadow-2xl">
                <div className="w-20 h-20 bg-neutral-900 dark:bg-neutral-900 rounded-full flex items-center justify-center">
                  <span className="text-gold font-bold text-4xl">T</span>
                </div>
              </div>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-gold mb-6">
            $TERRA
          </h1>
          <p className="text-xl md:text-2xl text-neutral-700 dark:text-neutral-300 max-w-3xl mx-auto mb-8">
            The native utility token powering the TerraCrypt ecosystem with governance, staking, and premium feature access.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="bg-white dark:bg-neutral-900 border border-gold/20 p-6 rounded-lg shadow-xl">
              <h3 className="text-2xl font-bold text-gold mb-2">
                {t.token.stats.totalSupply}
              </h3>
              <p className="text-neutral-600 dark:text-neutral-400">
                1,000,000,000 $TERRA
              </p>
            </div>
            <div className="bg-white dark:bg-neutral-900 border border-gold/20 p-6 rounded-lg shadow-xl">
              <h3 className="text-2xl font-bold text-gold mb-2">
                {t.token.stats.circulating}
              </h3>
              <p className="text-neutral-600 dark:text-neutral-400">
                750,000,000 $TERRA
              </p>
            </div>
            <div className="bg-white dark:bg-neutral-900 border border-gold/20 p-6 rounded-lg shadow-xl">
              <h3 className="text-2xl font-bold text-gold mb-2">
                {t.token.stats.marketCap}
              </h3>
              <p className="text-neutral-600 dark:text-neutral-400">
                $50,000,000
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Token Utility Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gold mb-16">
            {t.token.utility.title}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.token.utility.features.map((feature, index) => (
              <div
                key={index}
                className="bg-white dark:bg-neutral-900 border border-gold/20 p-8 rounded-lg shadow-xl hover:border-gold/40 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gold/20 rounded-lg flex items-center justify-center mb-6">
                  <span className="text-2xl text-gold">🔐</span>
                </div>
                <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-4">
                  {feature.title}
                </h3>
                <p className="text-neutral-600 dark:text-neutral-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tokenomics Section */}
      <section className="py-20 px-6 bg-neutral-50 dark:bg-neutral-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gold mb-16">
            {t.token.tokenomics.title}
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gold mb-8">
                {t.token.tokenomics.allocation}
              </h3>
              <div className="space-y-4">
                {t.token.tokenomics.distribution.map((item, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="text-neutral-700 dark:text-neutral-300">
                      {item.label}
                    </span>
                    <span className="font-bold text-gold">{item.percentage}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gold mb-8">
                {t.token.tokenomics.vesting}
              </h3>
              <div className="space-y-4">
                {t.token.tokenomics.vestingSchedule.map((item, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="text-neutral-700 dark:text-neutral-300">
                      {item.period}
                    </span>
                    <span className="font-bold text-gold">{item.percentage}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Buy Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gold mb-16">
            {t.token.howToBuy.title}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.token.howToBuy.steps.map((step, index) => (
              <div
                key={index}
                className="text-center bg-white dark:bg-neutral-900 border border-gold/20 p-6 rounded-lg shadow-xl"
              >
                <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4 text-black font-bold text-xl">
                  {index + 1}
                </div>
                <h3 className="text-lg font-bold text-neutral-900 dark:text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-neutral-600 dark:text-neutral-300">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contract Information */}
      <section className="py-20 px-6 bg-neutral-50 dark:bg-neutral-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gold mb-8">
            {t.token.contract.title}
          </h2>
          <div className="bg-white dark:bg-neutral-800 border border-gold/20 p-8 rounded-lg shadow-xl">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-gold mb-4">
                  {t.token.contract.networks}
                </h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-neutral-600 dark:text-neutral-300">
                      Ethereum
                    </span>
                    <span className="font-mono text-sm text-gold">
                      0x1234...5678
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-600 dark:text-neutral-300">
                      BSC
                    </span>
                    <span className="font-mono text-sm text-gold">
                      0xabcd...efgh
                    </span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gold mb-4">
                  {t.token.contract.verification}
                </h3>
                <div className="space-y-2">
                  <a
                    href="#"
                    className="block text-gold hover:text-yellow-400 transition-colors"
                  >
                    Etherscan
                  </a>
                  <a
                    href="#"
                    className="block text-gold hover:text-yellow-400 transition-colors"
                  >
                    BscScan
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TokenPage; 