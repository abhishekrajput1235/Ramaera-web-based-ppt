import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ramaeraBg from "../assets/industry.jpg";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

// Animated counter
const Counter = ({ end, duration = 2, className }) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const increment = end / (duration * 60);
    const interval = setInterval(() => {
      start += increment;
      if (start >= end) {
        start = end;
        clearInterval(interval);
      }
      setCount(Math.floor(start));
    }, 1000 / 60);
    return () => clearInterval(interval);
  }, [end, duration]);
  return <span className={className}>{count.toLocaleString()}</span>;
};

// Achievements data
const achievements = [
  { label: "Spice Factory Launched", value: 22000000, prefix: "₹", icon: "🏭", progress: 100 },
  { label: "Supermarket Funded", value: 4500000, prefix: "₹", icon: "🛒", progress: 90 },
  { label: "Shareholders Growing", value: 22000, prefix: "", icon: "👥", progress: 80 },
  { label: "Target Factories", value: 10000, prefix: "", icon: "🌾", progress: 60 },
];

const AdvancedAchievementsSlide = () => {
  return (
    <div
      className="w-full min-h-screen relative flex flex-col items-center justify-center px-4 md:px-12 py-12 bg-cover bg-center"
      style={{ backgroundImage: `url(${ramaeraBg})` }}
    >
      {/* Cinematic overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80"></div>

      <motion.div
        className="relative z-10 w-full max-w-7xl flex flex-col items-center gap-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Title */}
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg text-center"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          REAL IMPACT, REAL RESULTS
        </motion.h2>
        <motion.h3
          className="text-xl md:text-2xl text-amber-400 font-semibold drop-shadow-md text-center"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Our Current Achievements
        </motion.h3>

        {/* Achievement Cards */}
        <div className="w-full flex overflow-x-auto gap-6 py-6 md:grid md:grid-cols-4 md:gap-8 md:overflow-visible">
          {achievements.map((achieve, index) => (
            <motion.div
              key={index}
              className="flex-shrink-0 md:flex-1 bg-white/10 backdrop-blur-md rounded-3xl shadow-2xl p-6 flex flex-col items-center justify-center transform hover:scale-105 transition-transform duration-500 min-w-[250px]"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              {/* Circular progress */}
              <div className="w-24 h-24 md:w-28 md:h-28 mb-4">
                <CircularProgressbar
                  value={achieve.progress}
                  text={achieve.icon}
                  strokeWidth={8}
                  styles={buildStyles({
                    textSize: "32px",
                    pathColor: "#facc15",
                    textColor: "#fff",
                    trailColor: "rgba(255,255,255,0.1)",
                  })}
                />
              </div>

              {/* Counter */}
              <p className="text-2xl md:text-3xl font-bold text-white mb-1">
                {achieve.prefix}
                <Counter end={achieve.value} />
              </p>
              <p className="text-white/90 text-lg md:text-xl text-center">{achieve.label}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default AdvancedAchievementsSlide;
