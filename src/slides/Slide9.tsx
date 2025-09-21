import React from "react";
import { motion } from "framer-motion";
import ramaeraBg from "../assets/tree-grows-coin-glass-jar-with-copy-space.jpg";

const step2Data = {
  title: "STEP 2: BUY MINIMUM 1 SHARE",
  subtitle: "Become a Lifetime Partner",
  points: [
    "Minimum investment: ₹500 for 1 share",
    "Lifetime partnership with Ramaera Industries",
    "Access to all current and future projects",
    "Non-tradable until IPO announcement",
  ],
  icon: "💰",
};

const Step2AdvancedSlide = () => {
  return (
    <div
      className="w-full min-h-screen relative flex items-center justify-center overflow-hidden"
      style={{ backgroundImage: `url(${ramaeraBg})`, backgroundSize: "cover", backgroundPosition: "center" }}
    >
      {/* Cinematic overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Floating gradient shapes */}
      <div className="absolute top-[-25%] left-[-10%] w-96 h-96 bg-gradient-to-br from-yellow-400 via-amber-400 to-red-400 rounded-full opacity-20 animate-pulse blur-3xl"></div>
      <div className="absolute bottom-[-20%] right-[-10%] w-80 h-80 bg-gradient-to-tr from-amber-400 via-yellow-300 to-rose-400 rounded-full opacity-20 animate-pulse blur-3xl"></div>

      {/* Main content */}
      <motion.div
        className="relative z-10 w-full max-w-6xl flex flex-col md:flex-row items-center md:items-start justify-between px-6 md:px-12 py-12 gap-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Left: Icon with animated halo */}
        <motion.div
          className="relative flex flex-col items-center md:items-start"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="relative">
            <motion.div
              className="absolute -inset-6 bg-gradient-to-r from-yellow-400 via-amber-400 to-red-400 rounded-full blur-3xl opacity-60 animate-pulse"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
            ></motion.div>
            <div className="relative w-28 h-28 md:w-32 md:h-32 bg-black/50 rounded-full flex items-center justify-center text-6xl md:text-7xl text-white shadow-xl">
              {step2Data.icon}
            </div>
          </div>
          <motion.div
            className="mt-6 text-white text-xl md:text-2xl font-bold drop-shadow-lg"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            STEP 2 / 4
          </motion.div>
        </motion.div>

        {/* Right: Text content */}
        <motion.div
          className="flex-1 flex flex-col gap-6 md:gap-8"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          {/* Title */}
          <motion.h2
            className="text-4xl md:text-6xl font-extrabold text-white leading-tight drop-shadow-lg"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            {step2Data.title}
          </motion.h2>

          {/* Subtitle */}
          <motion.h3
            className="text-lg md:text-2xl text-amber-400 font-semibold drop-shadow-md"
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            {step2Data.subtitle}
          </motion.h3>

          {/* Points with glassmorphic cards */}
          <motion.ul
            className="flex flex-col gap-4 md:gap-6 mt-4"
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
          >
            {step2Data.points.map((point, index) => (
              <motion.li
                key={index}
                className="flex items-start gap-4 bg-white/10 backdrop-blur-md rounded-2xl p-4 md:p-6 hover:bg-white/20 transition-all duration-500 shadow-lg cursor-pointer"
                whileHover={{ scale: 1.03 }}
                variants={{
                  hidden: { x: 50, opacity: 0 },
                  visible: { x: 0, opacity: 1, transition: { duration: 0.6 } },
                }}
              >
                <span className="text-amber-400 text-2xl md:text-3xl font-bold">•</span>
                <span className="text-white text-base md:text-lg">{point}</span>
              </motion.li>
            ))}
          </motion.ul>

          {/* Step Progress Bar */}
          <div className="w-full flex items-center justify-between mt-8">
            {Array.from({ length: 4 }).map((_, idx) => (
              <div key={idx} className="flex-1 h-2 md:h-3 bg-white/20 rounded-full mx-1 relative overflow-hidden">
                {idx === 1 && (
                  <motion.div
                    className="h-2 md:h-3 bg-amber-400 rounded-full w-full absolute left-0 top-0"
                    animate={{ width: ["0%", "100%"] }}
                    transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
                  ></motion.div>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Step2AdvancedSlide;
