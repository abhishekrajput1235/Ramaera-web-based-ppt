


import React from "react";
import { motion } from "framer-motion";
import investmentBg from "../assets/stacks-coins-arranged-bar-graph.jpg";

const investmentTerms = [
  { icon: "⚠️", text: "No guaranteed returns - this is not a scheme" },
  { icon: "📊", text: "Profits distributed only after actual earnings" },
  { icon: "⏳", text: "If no profit, investors wait for next year" },
  { icon: "🏭", text: "Pure industrialization, not financial trading" },
  { icon: "🔒", text: "All investments are non-refundable" },
];

const InvestmentTermsRibbonSlide = () => {
  return (
    <div
      className="w-full min-h-screen relative flex flex-col items-center justify-center px-6 md:px-12 py-16 overflow-hidden text-white"
      style={{
        backgroundImage: `url(${investmentBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/85"></div>

      {/* Heading */}
      <motion.div
        className="relative z-10 text-center mb-20"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-4xl md:text-5xl font-extrabold drop-shadow-lg mb-2">
          INVESTMENT <span className="text-amber-400">TERMS</span>
        </h2>
        <p className="text-lg md:text-2xl text-gray-300">
          Important Information for Shareholders
        </p>
      </motion.div>

      {/* Timeline Ribbon */}
      <div className="relative z-10 w-full max-w-5xl flex flex-col md:flex-row items-start md:items-center justify-between gap-12">
        {/* Ribbon line */}
        <div className="absolute top-1/2 md:top-0 left-10 md:left-0 md:right-0 h-1 md:h-full bg-gradient-to-r md:bg-gradient-to-b from-amber-400 via-yellow-400 to-red-400 opacity-40 rounded-full"></div>

        {investmentTerms.map((term, idx) => (
          <motion.div
            key={idx}
            className="relative z-10 flex flex-col items-center md:items-start gap-4 w-full md:w-1/5"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
          >
            {/* Floating node */}
            <div className="relative w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-tr from-amber-400 via-yellow-400 to-red-400 shadow-lg flex items-center justify-center text-xl md:text-2xl text-black animate-pulse">
              {term.icon}
            </div>

            {/* Ribbon panel */}
            <div className="bg-black/60 backdrop-blur-md rounded-3xl p-4 md:p-6 shadow-2xl border border-white/20 flex-1">
              <p className="text-white text-sm md:text-base">{term.text}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Background glow accents */}
      <div className="absolute -z-10 top-[-20%] left-[-10%] w-72 h-72 rounded-full bg-gradient-to-br from-amber-400 via-yellow-400 to-red-400 opacity-20 blur-3xl animate-pulse"></div>
      <div className="absolute -z-10 bottom-[-15%] right-[-10%] w-80 h-80 rounded-full bg-gradient-to-tr from-red-500 via-orange-400 to-yellow-400 opacity-20 blur-3xl animate-pulse"></div>
    </div>
  );
};

export default InvestmentTermsRibbonSlide;


