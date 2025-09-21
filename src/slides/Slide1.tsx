import React from "react";
import { motion } from "framer-motion";

const WelcomeSlide = () => {
  const backgroundImageUrl =
    "https://www.ciminelli.com/wp-content/uploads/2025/03/CRE-markets.png";
  const logoUrl = "https://www.ramaera.com/ramanew.png";

  return (
    <div className="h-screen w-full relative overflow-hidden flex items-center justify-center">
      {/* Background with subtle zoom animation */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImageUrl})` }}
        initial={{ scale: 1 }}
        animate={{ scale: 1.1 }}
        transition={{ duration: 20, repeat: Infinity, repeatType: "mirror", ease: "linear" }}
      />

      {/* Animated gradient overlay */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0.6 }}
        animate={{ opacity: [0.6, 0.8, 0.6] }}
        transition={{ duration: 15, repeat: Infinity, repeatType: "mirror" }}
        style={{
          background: "linear-gradient(120deg, rgba(0,0,0,0.7), rgba(0,0,0,0.3), rgba(0,0,0,0.7))",
        }}
      />

      {/* Main content */}
      <motion.div
        className="relative z-10 text-center px-6 flex flex-col items-center"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.3 } },
        }}
      >
        {/* Logo */}
        <motion.img
          src={logoUrl}
          alt="Ramaera Industries Ltd Logo"
          className="mx-auto w-28 md:w-40 mb-6 drop-shadow-lg"
          variants={{
            hidden: { y: -50, opacity: 0 },
            visible: { y: 0, opacity: 1, transition: { duration: 0.8 } },
          }}
        />

        {/* Welcome Text */}
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold text-white tracking-wide"
          variants={{
            hidden: { y: -40, opacity: 0 },
            visible: { y: 0, opacity: 1, transition: { duration: 0.8 } },
          }}
        >
          Welcome to
        </motion.h1>

        {/* Company Name */}
        <motion.h2
          className="mt-4 text-3xl md:text-5xl font-bold bg-gradient-to-r from-amber-400 via-yellow-500 to-orange-500 bg-clip-text text-transparent drop-shadow-md"
          variants={{
            hidden: { y: 40, opacity: 0 },
            visible: { y: 0, opacity: 1, transition: { duration: 0.8 } },
          }}
        >
          RAMAERA INDUSTRIES LTD
        </motion.h2>

        {/* Tagline */}
        <motion.p
          className="mt-6 text-lg md:text-xl text-gray-200 max-w-2xl mx-auto"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { duration: 1 } },
          }}
        >
          Innovating for a better tomorrow – Excellence, Growth & Sustainability.
        </motion.p>

        {/* Call-to-action button */}
        <motion.a
          href="https://ramaera.com/" target="_blank"
          className="mt-8 px-8 py-3 bg-amber-500 text-white font-semibold rounded-full shadow-lg hover:bg-amber-600 transition-all duration-300"
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
          }}
        >
          www.ramaera.com
        </motion.a>
      </motion.div>
    </div>
  );
};

export default WelcomeSlide;
