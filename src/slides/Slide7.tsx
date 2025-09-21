import React from "react";
import { motion } from "framer-motion";
import ramaeraBg from "../assets/industry.jpg";

const steps = [
  { number: "1", title: "Get Invited", description: "Receive invitation from existing shareholder", icon: "📩" },
  { number: "2", title: "Buy Share", description: "Become lifetime shareholder of Ramaera", icon: "💳" },
  { number: "3", title: "Explore Projects", description: "Browse live factory projects in dashboard", icon: "🔍" },
  { number: "4", title: "Invest & Earn", description: "Contribute to factories and receive yearly profits", icon: "💰" },
];

const HowItWorksSlide = () => {
  return (
    <div
      className="w-full min-h-screen relative flex flex-col items-center justify-center px-4 md:px-12 py-12 bg-cover bg-center"
      style={{ backgroundImage: `url(${ramaeraBg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80"></div>

      <motion.div
        className="relative z-10 w-full max-w-7xl flex flex-col items-center gap-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Titles */}
        <motion.h2
          className="text-3xl md:text-5xl font-extrabold text-white drop-shadow-lg text-center"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          HOW IT WORKS
        </motion.h2>
        <motion.h3
          className="text-lg md:text-2xl text-amber-400 font-semibold drop-shadow-md text-center"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Your Journey from Shareholder to Factory Co-Owner
        </motion.h3>

        {/* Steps */}
        <div className="w-full flex gap-6 py-6 overflow-x-auto md:grid md:grid-cols-4 md:gap-8 md:overflow-visible">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="flex-shrink-0 md:flex-1 bg-white/10 backdrop-blur-md rounded-3xl shadow-2xl p-6 flex flex-col items-center text-center transition-transform duration-500 hover:scale-105 min-w-[250px] md:min-w-0"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              {/* Step Number */}
              <div className="w-16 h-16 md:w-20 md:h-20 bg-amber-400 text-black font-bold text-2xl md:text-3xl rounded-full flex items-center justify-center mb-4 drop-shadow-lg">
                {step.number}
              </div>

              {/* Icon */}
              <div className="text-4xl md:text-5xl mb-3">{step.icon}</div>

              {/* Step Title */}
              <h4 className="text-xl md:text-2xl font-semibold text-white mb-2">{step.title}</h4>

              {/* Description */}
              <p className="text-white/90 text-base md:text-lg">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default HowItWorksSlide;
