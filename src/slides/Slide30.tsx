import React from "react";
import { motion } from "framer-motion";
import revolutionBg from "../assets/three-architects-standing-front-building.jpg"; // replace with a high-res image

const ctaItems = [
  { 
    label: "🚀 Become a Ramaera Shareholder", 
    action: () => window.open("https://ramaera.com/join", "_blank") 
  },
  { 
    label: "🏭 Apply to Launch Your Factory", 
    action: () => window.open("https://ramaera.com/apply", "_blank") 
  },
  { 
    label: "📞 Contact Our Community", 
    action: () => window.open("https://ramaera.com/contact", "_blank") 
  },
  { 
    label: "🌐 Visit Our Member Portal", 
    action: () => window.open("https://ramaera.com", "_blank") 
  },
];


const JoinRevolutionSlide = () => {
  return (
    <div
      className="w-full min-h-screen relative flex flex-col items-center justify-center px-6 md:px-12 py-16 text-white overflow-hidden"
      style={{
        backgroundImage: `url(${revolutionBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark cinematic overlay */}
      <div className="absolute inset-0 bg-black/80"></div>

      {/* Animated gradient blobs */}
      <div className="absolute top-[-20%] left-[-10%] w-96 h-96 bg-gradient-to-br from-amber-400 via-yellow-400 to-red-400 rounded-full blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-[-20%] right-[-10%] w-80 h-80 bg-gradient-to-tr from-purple-500 via-pink-500 to-indigo-400 rounded-full blur-3xl opacity-20 animate-pulse"></div>

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-4xl w-full flex flex-col items-center text-center gap-8"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Heading */}
        <motion.h2
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 drop-shadow-lg"
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          JOIN THE <span className="text-amber-400">REVOLUTION</span>
        </motion.h2>

        {/* Subheading */}
        <motion.p
          className="text-lg md:text-2xl text-gray-200 font-semibold drop-shadow-md mb-8"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Ready to Build India's Industrial Future?
        </motion.p>

        {/* CTA Buttons */}
        <div className="w-full flex flex-col md:flex-row flex-wrap gap-6 justify-center">
          {ctaItems.map((item, idx) => (
            <motion.button
              key={idx}
              onClick={item.action}
              whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(251,191,36,0.8)" }}
              whileTap={{ scale: 0.95 }}
              className="px-6 md:px-8 py-4 rounded-full text-lg md:text-xl font-bold text-black bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 shadow-lg backdrop-blur-sm transition-transform"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + idx * 0.2 }}
            >
              {item.label}
            </motion.button>
          ))}
        </div>
      </motion.div>

      {/* Soft cinematic gradient overlay */}
      <div className="absolute -z-10 top-0 left-0 w-full h-full bg-gradient-to-br from-black/50 via-transparent to-black/70"></div>
    </div>
  );
};

export default JoinRevolutionSlide;
