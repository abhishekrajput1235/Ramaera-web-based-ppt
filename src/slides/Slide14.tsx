import React from "react";
import { motion } from "framer-motion";
import successBg from "../assets/mart.jpg";

const successPoints = [
  { icon: "✅", text: "Community supermarket operational" },
  { icon: "✅", text: "1,800+ investors involved" },
  { icon: "✅", text: "20+ local families employed" },
  { icon: "✅", text: "Serving 2,000+ households weekly" },
  { icon: "✅", text: "Digital payment integration complete" },
];

const RamaeraMartSuccessSlideUnique = () => {
  return (
    <div
      className="w-full min-h-screen relative flex flex-col md:flex-row items-center justify-center px-6 md:px-16 py-16 text-white overflow-hidden"
      style={{
        backgroundImage: `url(${successBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/80"></div>

      {/* Left Side: Stats */}
      <motion.div
        className="relative z-10 flex-1 flex flex-col items-center md:items-start justify-center gap-6 mb-12 md:mb-0"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-5xl md:text-6xl font-extrabold drop-shadow-lg text-amber-400 mb-2 text-center md:text-left">
          RAMAERA MART
        </h2>
        <p className="text-lg md:text-2xl text-gray-300 text-center md:text-left">
          Agra, UP - ₹45 Lacs Investment
        </p>
        <div className="grid grid-cols-2 gap-6 mt-6">
          <div className="text-center md:text-left">
            <p className="text-4xl md:text-5xl font-bold text-white animate-pulse">1,800+</p>
            <p className="text-gray-300 mt-1 text-sm md:text-base">Investors</p>
          </div>
          <div className="text-center md:text-left">
            <p className="text-4xl md:text-5xl font-bold text-white animate-pulse">2,000+</p>
            <p className="text-gray-300 mt-1 text-sm md:text-base">Households Served Weekly</p>
          </div>
          <div className="text-center md:text-left">
            <p className="text-4xl md:text-5xl font-bold text-white animate-pulse">20+</p>
            <p className="text-gray-300 mt-1 text-sm md:text-base">Local Families Employed</p>
          </div>
          <div className="text-center md:text-left">
            <p className="text-4xl md:text-5xl font-bold text-white animate-pulse">₹45 Lacs</p>
            <p className="text-gray-300 mt-1 text-sm md:text-base">Total Investment</p>
          </div>
        </div>
      </motion.div>

      {/* Right Side: Animated Points */}
      <div className="relative z-10 flex-1 flex flex-col gap-6">
        {successPoints.map((point, idx) => (
          <motion.div
            key={idx}
            className="flex items-start gap-4 group relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
          >
            <span className="text-2xl md:text-3xl text-amber-400 flex-shrink-0 animate-pulse">
              {point.icon}
            </span>
            <p className="text-white text-base md:text-lg font-semibold relative">
              {point.text}
              <span className="absolute left-0 -bottom-1 w-0 group-hover:w-full h-1 bg-amber-400 rounded transition-all"></span>
            </p>
          </motion.div>
        ))}
      </div>

      {/* Decorative Glows */}
      <div className="absolute -z-10 top-[-5%] right-[-5%] w-36 h-36 bg-gradient-to-tr from-yellow-400 via-amber-500 to-red-500 rounded-full opacity-20 blur-3xl animate-pulse"></div>
      <div className="absolute -z-10 bottom-[-5%] left-[-5%] w-36 h-36 bg-gradient-to-bl from-purple-500 via-pink-500 to-red-400 rounded-full opacity-20 blur-3xl animate-pulse"></div>
    </div>
  );
};

export default RamaeraMartSuccessSlideUnique;
