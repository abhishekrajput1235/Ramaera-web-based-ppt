



import React from "react";
import { motion } from "framer-motion";
import communityBg from "../assets/business-success-concept-wooden-table-top-view-hands-protecting-wooden-figures-people.jpg";

const communityStats = [
  { number: "22,000+", label: "Active Members", color: "from-blue-400 via-indigo-500 to-purple-500" },
  { number: "₹2.95 Cr", label: "Total Invested", color: "from-green-400 via-emerald-400 to-teal-400" },
  { number: "2", label: "Factories Running", color: "from-yellow-400 via-amber-400 to-orange-400" },
  { number: "10,000+", label: "Target Vision", color: "from-pink-400 via-fuchsia-400 to-purple-500" },
];

const ThrivingCommunitySlide = () => {
  return (
    <div
      className="w-full min-h-screen relative flex flex-col items-center justify-center px-6 md:px-12 py-16 text-white overflow-hidden"
      style={{
        backgroundImage: `url(${communityBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/80"></div>

      {/* Heading */}
      <motion.div
        className="relative z-10 text-center mb-12"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-4xl md:text-5xl font-extrabold drop-shadow-lg">
          THRIVING <span className="text-amber-400">COMMUNITY</span>
        </h2>
        <p className="text-lg md:text-2xl text-gray-300 mt-2">
          Join India's Largest Industrial Investment Community
        </p>
      </motion.div>

      {/* Stats Grid */}
      <motion.div
        className="relative z-10 w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        initial="hidden"
        animate="visible"
        variants={{
          visible: { transition: { staggerChildren: 0.2 } },
        }}
      >
        {communityStats.map((stat, idx) => (
          <motion.div
            key={idx}
            className={`relative flex flex-col items-center justify-center rounded-3xl p-6 bg-gradient-to-br ${stat.color} shadow-2xl hover:scale-105 transition-transform cursor-pointer`}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
            }}
          >
            {/* Glow behind card */}
            <div className="absolute inset-0 -z-10 rounded-3xl opacity-20 bg-white/20 blur-3xl animate-pulse"></div>
            
            <motion.span
              className="text-4xl md:text-5xl font-extrabold mb-2"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
            >
              {stat.number}
            </motion.span>
            <p className="text-white text-lg md:text-xl font-semibold text-center">{stat.label}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Decorative Orbs */}
      <div className="absolute -z-10 top-[-10%] left-[-10%] w-60 h-60 bg-gradient-to-tr from-purple-500 via-indigo-500 to-blue-400 rounded-full opacity-20 blur-3xl animate-pulse"></div>
      <div className="absolute -z-10 bottom-[-10%] right-[-10%] w-60 h-60 bg-gradient-to-bl from-pink-500 via-red-400 to-yellow-400 rounded-full opacity-20 blur-3xl animate-pulse"></div>
    </div>
  );
};

export default ThrivingCommunitySlide;
