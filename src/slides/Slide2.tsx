import React from "react";
import { motion } from "framer-motion";
import visionImage from "../assets/vision.jpg";

const visionPoints = [
  "Turn ordinary Indians into co-owners of extraordinary industries",
  "Build India's future from the grassroots up",
  "Create generational wealth through real asset ownership",
  "Democratize industrial ownership across the nation",
];

const VisionSlide = () => {
  return (
    <div
      className="h-screen w-full relative overflow-hidden flex items-center justify-center bg-fixed bg-cover bg-center"
      style={{ backgroundImage: `url(${visionImage})` }}
    >
      {/* Animated Gradient Overlay */}
      <motion.div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, rgba(0,0,0,0.7), rgba(0,0,0,0.3), rgba(0,0,0,0.7))",
        }}
        animate={{ opacity: [0.6, 0.8, 0.6] }}
        transition={{ duration: 20, repeat: Infinity, repeatType: "mirror" }}
      />

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="w-1 h-1 bg-white rounded-full absolute"
            initial={{
              x: Math.random() * 100 + "%",
              y: Math.random() * 100 + "%",
            }}
            animate={{ y: ["0%", "100%"], x: ["0%", "50%"] }}
            transition={{
              duration: 25 + i,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 text-center px-4 sm:px-6 md:px-8 lg:px-12 max-w-7xl flex flex-col items-center"
        initial="hidden"
        animate="visible"
        variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.35 } } }}
      >
        {/* Slide Title */}
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white tracking-wide mb-4 uppercase drop-shadow-xl"
          variants={{
            hidden: { y: -50, opacity: 0 },
            visible: { y: 0, opacity: 1, transition: { duration: 1 } },
          }}
        >
          Our Vision
        </motion.h2>

        {/* Subtitle */}
        <motion.h3
          className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-amber-400 font-semibold mb-8 sm:mb-12 drop-shadow-lg"
          variants={{
            hidden: { y: -20, opacity: 0 },
            visible: { y: 0, opacity: 1, transition: { duration: 1 } },
          }}
        >
          Transforming India Through Industrial Democracy
        </motion.h3>

        {/* Vision Points */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 w-full"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.2 } },
          }}
        >
          {visionPoints.map((point, index) => (
            <motion.div
              key={index}
              className="bg-white/10 backdrop-blur-md p-4 sm:p-6 md:p-8 rounded-2xl shadow-2xl border border-white/20 hover:bg-white/20 hover:scale-105 transition-all duration-500"
              variants={{
                hidden: { y: 20, opacity: 0 },
                visible: { y: 0, opacity: 1, transition: { duration: 0.8 } },
              }}
            >
              <h4 className="text-sm sm:text-base md:text-lg lg:text-xl text-white font-semibold drop-shadow-lg">
                {point}
              </h4>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.a
          href="https://ramaera.com/industries" target="_blank"
          className="mt-8 sm:mt-10 md:mt-12 px-6 sm:px-10 md:px-12 py-3 sm:py-4 md:py-5 bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-500 text-white font-bold rounded-full shadow-xl hover:shadow-2xl hover:from-yellow-400 hover:to-amber-500 transition-all duration-500"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
          }}
        >
          Explore More
        </motion.a>
      </motion.div>
    </div>
  );
};

export default VisionSlide;
