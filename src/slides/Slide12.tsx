import React from "react";
import { motion } from "framer-motion";
import ramaeraBg from "../assets/factory.jpg"; // cinematic industrial background

const liveProjectsData = {
  title: "LIVE FACTORY PROJECTS",
  subtitle: "Real Factories, Real Profits, Real Impact",
  description: "Currently operational and upcoming manufacturing ventures",
  icon: "🏭",
};

const LiveFactoryProjectsSlide = () => {
  return (
    <div
      className="w-full min-h-screen relative flex items-center justify-center overflow-hidden"
      style={{ backgroundImage: `url(${ramaeraBg})`, backgroundSize: "cover", backgroundPosition: "center" }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Floating gradient shapes */}
      <div className="absolute top-[-20%] left-[-10%] w-96 h-96 bg-gradient-to-br from-yellow-400 via-amber-400 to-red-400 rounded-full opacity-20 animate-pulse blur-3xl"></div>
      <div className="absolute bottom-[-15%] right-[-10%] w-80 h-80 bg-gradient-to-tr from-amber-400 via-yellow-300 to-rose-400 rounded-full opacity-20 animate-pulse blur-3xl"></div>

      {/* Main content */}
      <motion.div
        className="relative z-10 w-full max-w-6xl flex flex-col items-center text-center px-6 md:px-12 py-12 gap-8"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Icon */}
        <motion.div
          className="w-28 h-28 md:w-32 md:h-32 bg-black/50 rounded-full flex items-center justify-center text-6xl md:text-7xl text-white shadow-xl mb-6"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          {liveProjectsData.icon}
        </motion.div>

        {/* Title */}
        <motion.h2
          className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg leading-tight"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {liveProjectsData.title}
        </motion.h2>

        {/* Subtitle */}
        <motion.h3
          className="text-xl md:text-2xl text-amber-400 font-semibold drop-shadow-md"
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          {liveProjectsData.subtitle}
        </motion.h3>

        {/* Description */}
        <motion.p
          className="text-white/90 text-lg md:text-xl mt-4 max-w-3xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          {liveProjectsData.description}
        </motion.p>

        {/* Optional: CTA Button */}
        <motion.a
          href="https://ramaera.com/success-stories" target="_blank"
          className="mt-8 px-10 py-4 bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-500 text-white font-bold rounded-full shadow-xl hover:shadow-2xl hover:from-yellow-400 hover:to-amber-500 transition-all duration-500"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Explore Projects
        </motion.a>
      </motion.div>
    </div>
  );
};

export default LiveFactoryProjectsSlide;
