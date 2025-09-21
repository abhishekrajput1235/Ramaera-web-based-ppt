import React from "react";
import { motion } from "framer-motion";
import legacyBg from "../assets/industry.jpg";

const benefits = [
  { icon: "👨‍👩‍👧‍👦", text: "Shares transferable to family members" },
  { icon: "♾️", text: "Lifetime partnership benefits" },
  { icon: "🏭", text: "Real asset ownership, not paper investments" },
  { icon: "💎", text: "Building wealth for future generations" },
];

const BuildingLegacySlide = () => {
  return (
    <div
      className="w-full min-h-screen relative flex flex-col md:flex-row items-center justify-center px-6 md:px-12 py-16 text-white overflow-hidden"
      style={{
        backgroundImage: `url(${legacyBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/80"></div>

      {/* Left Side - Heading */}
      <motion.div
        className="relative z-10 w-full md:w-1/2 flex flex-col items-start md:pr-12 mb-12 md:mb-0"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-lg">
          BUILDING <span className="text-amber-400">LEGACY</span>
        </h2>
        <p className="text-lg md:text-2xl text-gray-300">
          Generational Wealth Through Industrial Ownership
        </p>
      </motion.div>

      {/* Right Side - Benefits List */}
      <motion.ul
        className="relative z-10 w-full md:w-1/2 flex flex-col gap-6"
        initial="hidden"
        animate="visible"
        variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
      >
        {benefits.map((benefit, idx) => (
          <motion.li
            key={idx}
            className="flex items-center gap-4 bg-gray-900/80 backdrop-blur-md rounded-xl p-4 cursor-pointer hover:scale-105 hover:shadow-2xl transition-transform"
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
            }}
          >
            <div className="text-3xl md:text-4xl text-amber-400 animate-pulse">
              {benefit.icon}
            </div>
            <p className="text-white text-base md:text-lg">{benefit.text}</p>
          </motion.li>
        ))}
      </motion.ul>

      {/* Soft cinematic gradient overlay */}
      <div className="absolute -z-10 top-0 left-0 w-full h-full bg-gradient-to-br from-black/50 via-transparent to-black/70"></div>
    </div>
  );
};

export default BuildingLegacySlide;
