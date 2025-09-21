import React from "react";
import { motion } from "framer-motion";
import ramaeraBg from "../assets/industry.jpg"; // cinematic industrial background

const whatIsRamaera = {
  title: "WHAT IS RAMAERA? - STEP 1",
  subtitle: "The Core Ideology: Community-Owned Industrialization",
  content: [
    "🤝 A closed community of common people, united since 2020",
    "💡 Bringing together three types of people:",
    "   • Those with knowledge but no funds",
    "   • Those with funds but no knowledge", 
    "   • Those with networks and connections",
    "🏭 Basic idea: When knowledgeable person wants to start manufacturing",
    "💰 Other community members help with small contributions",
    "🤝 Everyone shares profits based on mutual understanding",
    "🌟 Creating opportunities for common people to become industrialists"
  ]
};

const WhatIsRamaeraSlide = () => {
  return (
    <div
      className="min-h-screen w-full relative flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${ramaeraBg})` }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80"></div>

      {/* Content Container */}
      <div className="relative z-10 max-w-6xl w-full px-6 md:px-12 py-12 flex flex-col md:flex-row gap-12">
        {/* Left: Title & Subtitle */}
        <motion.div
          className="flex-1 text-center md:text-left"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 drop-shadow-lg">
            {whatIsRamaera.title}
          </h2>
          <h3 className="text-xl md:text-2xl text-amber-400 font-semibold drop-shadow-md">
            {whatIsRamaera.subtitle}
          </h3>
        </motion.div>

        {/* Right: Content Points */}
        <motion.ul
          className="flex-1 flex flex-col gap-6 text-white text-base md:text-lg"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.25 } },
          }}
        >
          {whatIsRamaera.content.map((point, index) => {
            const icon = point.trim().split(" ")[0];
            const text = point.replace(icon, "").trim();
            return (
              <motion.li
                key={index}
                className="flex items-start gap-4 md:gap-6"
                variants={{
                  hidden: { x: 50, opacity: 0 },
                  visible: { x: 0, opacity: 1, transition: { duration: 0.8 } },
                }}
              >
                <span className="text-3xl md:text-4xl bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 bg-clip-text text-transparent">
                  {icon}
                </span>
                <span className="whitespace-pre-line">{text}</span>
              </motion.li>
            );
          })}
        </motion.ul>
      </div>
    </div>
  );
};

export default WhatIsRamaeraSlide;
