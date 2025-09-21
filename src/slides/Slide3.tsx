import React from "react";
import { motion } from "framer-motion";
import schemeImage from "../assets/schemebg.jpg";

const slideData = {
  title: "WE ARE NOT A SCHEME",
  subtitle: "Understanding What Ramaera Really Is",
  negative: [
    "Not a financial scheme or investment platform",
    "Not a startup seeking funding",
    "Not a crowdfunding website",
  ],
  positive: [
    "A legitimate public limited company",
    "Community-owned industrial enterprise",
    "Real factories with real operations",
  ],
};

const SchemeSlide = () => {
  return (
    <div
      className="h-screen w-full relative flex flex-col items-center justify-center overflow-hidden bg-fixed bg-center bg-cover px-4 sm:px-6 md:px-12"
      style={{ backgroundImage: `url(${schemeImage})` }}
    >
      {/* Gradient Overlay */}
      <motion.div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, rgba(0,0,0,0.75), rgba(0,0,0,0.4), rgba(0,0,0,0.75))",
        }}
        animate={{ opacity: [0.7, 0.85, 0.7] }}
        transition={{ duration: 20, repeat: Infinity, repeatType: "mirror" }}
      />

      {/* Main Content */}
      <motion.div
        className="relative z-10 max-w-7xl w-full flex flex-col items-center text-center"
        initial="hidden"
        animate="visible"
        variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.3 } } }}
      >
        {/* Title */}
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white tracking-wider mb-4 drop-shadow-2xl uppercase"
          variants={{
            hidden: { y: -50, opacity: 0 },
            visible: { y: 0, opacity: 1, transition: { duration: 1 } },
          }}
        >
          {slideData.title}
        </motion.h2>

        {/* Subtitle */}
        <motion.h3
          className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-amber-400 font-semibold mb-8 sm:mb-12 drop-shadow-lg"
          variants={{
            hidden: { y: -20, opacity: 0 },
            visible: { y: 0, opacity: 1, transition: { duration: 1 } },
          }}
        >
          {slideData.subtitle}
        </motion.h3>

        {/* Split Content */}
        <motion.div className="flex flex-col md:flex-row w-full gap-6 sm:gap-8">
          {/* Negative Points - Left */}
          <motion.div className="flex-1 flex flex-col gap-4 sm:gap-6 items-center md:items-start">
            <h4 className="text-xl sm:text-2xl md:text-3xl text-red-400 font-bold mb-4">
              ❌ What Ramaera is NOT
            </h4>
            {slideData.negative.map((text, i) => (
              <motion.div
                key={i}
                className="flex items-center gap-3 sm:gap-4 p-4 sm:p-6 rounded-2xl shadow-2xl backdrop-blur-md border border-white/20 bg-red-500/20 hover:bg-red-500/30 transition-all duration-500 w-full"
                variants={{
                  hidden: { x: -40, opacity: 0 },
                  visible: { x: 0, opacity: 1, transition: { duration: 0.8 } },
                }}
              >
                <span className="text-2xl sm:text-3xl text-red-400">❌</span>
                <p className="text-white text-sm sm:text-base md:text-lg font-semibold drop-shadow-lg">
                  {text}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Positive Points - Right */}
          <motion.div className="flex-1 flex flex-col gap-4 sm:gap-6 items-center md:items-end">
            <h4 className="text-xl sm:text-2xl md:text-3xl text-green-400 font-bold mb-4">
              ✅ What Ramaera IS
            </h4>
            {slideData.positive.map((text, i) => (
              <motion.div
                key={i}
                className="flex items-center gap-3 sm:gap-4 p-4 sm:p-6 rounded-2xl shadow-2xl backdrop-blur-md border border-white/20 bg-green-500/20 hover:bg-green-500/30 transition-all duration-500 w-full"
                variants={{
                  hidden: { x: 40, opacity: 0 },
                  visible: { x: 0, opacity: 1, transition: { duration: 0.8 } },
                }}
              >
                <span className="text-2xl sm:text-3xl text-green-400">✅</span>
                <p className="text-white text-sm sm:text-base md:text-lg font-semibold drop-shadow-lg">
                  {text}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* CTA Button */}
        <motion.a
          href="https://www.ramaera.com" target="_blank"
          className="mt-6 sm:mt-8 md:mt-10 px-6 sm:px-10 md:px-14 py-3 sm:py-4 md:py-5 bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-500 text-white font-bold rounded-full shadow-xl hover:shadow-2xl hover:from-yellow-400 hover:to-amber-500 transition-all duration-500"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
          }}
        >
          Learn More
        </motion.a>
      </motion.div>
    </div>
  );
};

export default SchemeSlide;
