import React from "react";
import { motion } from "framer-motion";
import dreamBg from "../assets/industry.jpg"; // replace with a high-quality relevant image

const dreamers = [
  { icon: "🔧", text: "Mechanics with auto-parts ideas" },
  { icon: "🌶️", text: "Homemakers with spice blend formulas" },
  { icon: "💊", text: "Pharmacists making affordable medicine" },
  { icon: "🎓", text: "Teachers launching skill schools" },
];

const DreamersSlide = () => {
  return (
    <div
      className="w-full min-h-screen relative flex items-center justify-center px-6 md:px-12 py-16 text-white"
      style={{
        backgroundImage: `url(${dreamBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark Cinematic Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/70 to-black/90"></div>

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-5xl w-full flex flex-col items-center text-center"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
          DREAMERS <span className="text-amber-400">WE HELP</span>
        </h2>

        {/* Accent underline */}
        <div className="w-24 h-1 bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 rounded-full mb-8"></div>

        {/* Subheading */}
        <h3 className="text-lg md:text-2xl text-gray-200 mb-12 font-medium">
          Real People Building Real Factories
        </h3>

        {/* Dreamer Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl"
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
        >
          {dreamers.map((dreamer, index) => (
            <motion.div
              key={index}
              className="flex items-center gap-4 p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg hover:bg-white/20 transition-all"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.6, ease: "easeOut" },
                },
              }}
              whileHover={{ scale: 1.03 }}
            >
              <span className="text-3xl">{dreamer.icon}</span>
              <span className="text-lg md:text-xl font-medium">{dreamer.text}</span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default DreamersSlide;
