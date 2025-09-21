import React from "react";
import { motion } from "framer-motion";
import industriesBg from "../assets/industry.jpg";

const industries = [
  { icon: "🏭", text: "FMCG & Personal Care" },
  { icon: "🌾", text: "Food Processing & Agriculture" },
  { icon: "🏪", text: "Retail & Supermarkets" },
  { icon: "⚡", text: "Electronics & Appliances" },
  { icon: "👕", text: "Apparel & Textiles" },
  { icon: "💊", text: "Healthcare & Pharma" },
  { icon: "🎓", text: "Education & Training Centers" },
  { icon: "🔨", text: "Construction Materials" },
];

const TargetIndustriesSlide = () => {
  return (
    <div
      className="w-full min-h-screen relative flex flex-col items-center justify-start py-16 px-6 md:px-12 text-white"
      style={{
        backgroundImage: `url(${industriesBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Heading */}
      <motion.div
        className="relative z-10 text-center mb-12"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-4xl md:text-5xl font-extrabold drop-shadow-lg">
          TARGET <span className="text-amber-400">INDUSTRIES</span>
        </h2>
        <p className="text-lg md:text-2xl text-gray-300 mt-2">
          Manufacturing Across Every Sector
        </p>
      </motion.div>

      {/* Desktop Timeline */}
      <div className="hidden md:flex relative z-10 w-full flex-col md:flex-row md:flex-wrap justify-center items-start gap-12 md:gap-x-24 md:gap-y-16">
        {industries.map((item, idx) => {
          return (
            <motion.div
              key={idx}
              className="relative flex flex-col items-center md:w-1/4 text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
            >
              <div className="relative flex items-center justify-center w-16 h-16 bg-amber-400 rounded-full shadow-lg mb-3">
                <span className="text-3xl">{item.icon}</span>
                <div className="absolute w-20 h-20 bg-amber-400 rounded-full opacity-20 animate-pulse"></div>
              </div>
              <p className="text-white text-base md:text-lg font-semibold mt-2">{item.text}</p>
              {idx < industries.length - 1 && (
                <div
                  className="hidden md:block absolute top-full left-1/2 w-1 h-16 bg-amber-400 rounded-full animate-pulse"
                  style={{ transform: "translateX(-50%)" }}
                />
              )}
            </motion.div>
          );
        })}
      </div>

      {/* Mobile List */}
      <div className="md:hidden relative z-10 w-full max-w-md flex flex-col gap-4">
        {industries.map((item, idx) => (
          <motion.div
            key={idx}
            className="flex items-center gap-4 bg-white/10 backdrop-blur-md rounded-lg p-3"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
          >
            <span className="text-xl">{item.icon}</span>
            <p className="text-white font-semibold">{item.text}</p>
          </motion.div>
        ))}
      </div>

      {/* Background Glow */}
      <div className="absolute -z-10 top-1/4 left-1/2 w-80 h-80 bg-gradient-to-tr from-amber-400 via-yellow-400 to-red-400 rounded-full opacity-10 blur-3xl transform -translate-x-1/2 animate-pulse"></div>
      <div className="absolute -z-10 bottom-[-5%] right-[-5%] w-72 h-72 bg-gradient-to-tr from-purple-500 via-pink-500 to-red-500 rounded-full opacity-10 blur-3xl animate-pulse"></div>
    </div>
  );
};

export default TargetIndustriesSlide;
