import React from "react";
import { motion } from "framer-motion";
import industrialBg from "../assets/industry.jpg"; // replace with a high-res factory image

const VisionSlide = () => {
  return (
    <div
      className="w-full min-h-screen relative flex flex-col items-center justify-center px-6 md:px-12 py-16 text-white overflow-hidden"
      style={{
        backgroundImage: `url(${industrialBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark cinematic overlay */}
      <div className="absolute inset-0 bg-black/75"></div>

      {/* Floating animated gradient */}
      <div className="absolute top-[-20%] left-[-10%] w-96 h-96 bg-gradient-to-br from-amber-400 via-yellow-400 to-red-400 rounded-full blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-[-20%] right-[-10%] w-80 h-80 bg-gradient-to-tr from-purple-500 via-pink-500 to-indigo-400 rounded-full blur-3xl opacity-20 animate-pulse"></div>

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-5xl w-full text-center flex flex-col items-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Main Quote */}
        <motion.h2
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white drop-shadow-lg mb-6 leading-tight"
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          "We are not raising money — <span className='text-amber-400'>we are raising a nation</span> of industrialists."
        </motion.h2>

        {/* Subheading */}
        <motion.p
          className="text-lg md:text-2xl text-gray-200 font-semibold drop-shadow-md max-w-3xl"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          Building India's industrial future, one factory at a time.
        </motion.p>
      </motion.div>

      {/* Soft gradient overlay for cinematic depth */}
      <div className="absolute -z-10 top-0 left-0 w-full h-full bg-gradient-to-br from-black/50 via-transparent to-black/70"></div>
    </div>
  );
};

export default VisionSlide;
