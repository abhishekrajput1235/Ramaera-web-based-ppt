import React from "react";
import { motion } from "framer-motion";
import journeyBg from "../assets/industry.jpg"; // Replace with your background image

const milestones = [
  { year: "2020-2022", title: "Formed community of 22,000 citizens" },
  { year: "2023-Now", title: "Successfully launched first real factories" },
  { year: "2025 Goal", title: "200,000 shareholders & 1,000 industries" },
];

const OurJourneySlide = () => {
  return (
    <div
      className="w-full min-h-screen relative flex flex-col items-center justify-center px-6 md:px-12 py-16 overflow-hidden text-white"
      style={{
        backgroundImage: `url(${journeyBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Heading */}
      <motion.div
        className="relative z-10 text-center mb-12"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-4xl md:text-5xl font-extrabold mb-2 drop-shadow-lg">
          OUR <span className="text-amber-400">JOURNEY</span>
        </h2>
        <p className="text-lg md:text-2xl text-gray-300">
          From Vision to Reality
        </p>
      </motion.div>

      {/* Horizontal Timeline */}
      <div className="relative z-10 w-full flex flex-col md:flex-row items-center justify-between gap-12 md:gap-8">
        {milestones.map((milestone, idx) => (
          <motion.div
            key={idx}
            className="relative flex flex-col items-center text-center max-w-xs md:max-w-sm"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: idx * 0.3 }}
          >
            {/* Glowing floating cube */}
            <div className="w-32 h-32 md:w-40 md:h-40 bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-2xl flex items-center justify-center mb-4 hover:scale-105 transition-transform relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-amber-400 via-yellow-400 to-red-400 opacity-20 blur-2xl rounded-2xl animate-pulse"></div>
              <span className="relative text-2xl md:text-3xl font-bold text-white">
                {milestone.year}
              </span>
            </div>

            {/* Description */}
            <p className="text-white text-base md:text-lg">{milestone.title}</p>

            {/* Timeline Connector (only for middle milestones) */}
            {idx < milestones.length - 1 && (
              <div className="hidden md:block absolute top-1/2 right-[-4rem] w-32 h-1 bg-white/20 rounded-full"></div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Cinematic gradient overlay */}
      <div className="absolute -z-10 top-0 left-0 w-full h-full bg-gradient-to-br from-black/50 via-transparent to-black/70"></div>
    </div>
  );
};

export default OurJourneySlide;
