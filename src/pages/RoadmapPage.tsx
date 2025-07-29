import React from "react";
import { useLang } from "../components/LanguageContext";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { FaCubes, FaCommentDots, FaEnvelope, FaWallet, FaBuilding } from "react-icons/fa";

const RoadmapPage: React.FC = () => {
  const { t } = useLang();

  const roadmap = [
    {
      icon: <FaCubes size={36} />,
      title: "SDK",
      status: "Realised",
      subtitle: "Rust & Golang",
      color: "bg-gradient-to-r from-yellow-400 to-orange-600",
      description: "Foundation library enabling all Terracrypt modules.",
    },
    {
      icon: <FaCommentDots size={36} />,
      title: "Encrypted Chat",
      status: "In development",
      subtitle: "",
      color: "bg-gradient-to-r from-yellow-400 to-orange-600",
      description: "Next-gen private chat with zero trust encryption.",
    },
    {
      icon: <FaEnvelope size={36} />,
      title: "Encrypted Mail",
      status: "In progress",
      subtitle: "",
      color: "bg-gradient-to-r from-yellow-400 to-orange-600",
      description: "Secure, private, post-quantum email architecture.",
    },
    {
      icon: <FaWallet size={36} />,
      title: "Secure Payments",
      status: "Planned",
      subtitle: "",
      color: "bg-gradient-to-r from-yellow-400 to-orange-600",
      description: "Privacy-first payment rails, coming soon.",
    },
    {
      icon: <FaBuilding size={36} />,
      title: "Enterprise Platform",
      status: "Planned",
      subtitle: "",
      color: "bg-gradient-to-r from-yellow-400 to-orange-600",
      description: "Scalable, encrypted solutions for business.",
    },
  ];

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
            {t.roadmap.hero.title}
          </h1>
          <p className="text-xl md:text-2xl text-neutral-700 dark:text-neutral-300 max-w-4xl mx-auto mb-8">
            {t.roadmap.hero.description}
          </p>
        </div>
      </section>

      {/* Liquid Glass Zigzag Roadmap */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="relative">
            {/* Central Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-yellow-400 to-orange-600 hidden md:block"></div>
            
            <div className="space-y-16 md:space-y-20">
              {roadmap.map((step, idx) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.2, type: "spring", stiffness: 80 }}
                  className={`relative flex items-center ${
                    idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-neutral-800 dark:bg-neutral-800 border-2 border-gold rounded-full flex items-center justify-center z-10 hidden md:flex">
                    <div className="w-3 h-3 rounded-full bg-gold"></div>
                  </div>
                  
                  {/* Content */}
                  <div
                    className={`md:w-5/12 ${
                      idx % 2 === 0 ? "md:pr-6" : "md:pl-6"
                    }`}
                  >
                    <motion.div
                      whileHover={{ 
                        scale: 1.02,
                        y: -5,
                        transition: { duration: 0.2 }
                      }}
                      className="backdrop-blur-md bg-white/10 dark:bg-black/20 border border-white/20 dark:border-white/10 shadow-2xl rounded-3xl px-6 py-5 cursor-pointer group relative overflow-hidden"
                    >
                      {/* Liquid Glass Effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-3xl"></div>
                      <div className="absolute inset-0 bg-gradient-to-tl from-transparent to-white/5 rounded-3xl"></div>
                      
                      {/* Content */}
                      <div className="relative z-10 flex flex-col items-center">
                        <motion.div 
                          className={`mb-4 rounded-full p-3 ${step.color} shadow-lg group-hover:shadow-2xl transition-all duration-300 backdrop-blur-sm`}
                          whileHover={{ 
                            rotate: 5,
                            scale: 1.1,
                            transition: { duration: 0.2 }
                          }}
                        >
                          {step.icon}
                        </motion.div>
                        <div className="text-xl font-bold text-white group-hover:text-gold transition-colors duration-300">
                          {step.title}
                        </div>
                        <div className="text-sm text-yellow-400 font-semibold mb-1">
                          {step.status}
                        </div>
                        {step.subtitle && (
                          <div className="text-xs text-gray-300 mb-2">
                            {step.subtitle}
                          </div>
                        )}
                        <div className="text-sm text-gray-200 text-center group-hover:text-white transition-colors duration-300">
                          {step.description}
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default RoadmapPage; 