import React from "react";
import { motion } from "framer-motion";
import { Lightbulb } from "lucide-react"; // optional icon lib
import factoryBg from "../assets/industry.jpg";

const factoryPoints = [
  "Have technical expertise? We provide funding",
  "Community evaluates your proposal",
  "Interview process for approved applications",
  "Launch your factory with community support",
];

const ApplyForFactorySlide = () => {
  return (
    <div
      className="w-full min-h-screen relative flex flex-col items-center justify-center px-6 md:px-12 py-16 text-white overflow-hidden"
      style={{
        backgroundImage: `url(${factoryBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark cinematic overlay */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm"></div>

      {/* Animated gradient blobs */}
      <div className="absolute top-[-20%] left-[-15%] w-[28rem] h-[28rem] bg-gradient-to-br from-amber-400 via-yellow-500 to-red-400 rounded-full blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-[-20%] right-[-15%] w-[24rem] h-[24rem] bg-gradient-to-tr from-amber-400 via-yellow-400 to-red-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>

      {/* Decorative diagonal grid lines */}
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      {/* Main Content */}
      <motion.div
        className="relative z-10 max-w-5xl w-full flex flex-col items-center text-center"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Icon + Title */}
        <motion.div
          className="mb-6 flex flex-col items-center"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8, ease: "backOut" }}
        >
          <div className="w-20 h-20 md:w-24 md:h-24 bg-amber-400/20 rounded-full flex items-center justify-center border-2 border-amber-400 shadow-lg shadow-amber-500/40">
            <Lightbulb className="text-amber-400 w-10 h-10 md:w-12 md:h-12" />
          </div>
        </motion.div>

        {/* Title */}
        <h2 className="text-4xl md:text-6xl font-extrabold drop-shadow-lg mb-4 leading-tight">
          APPLY FOR YOUR FACTORY
        </h2>

        {/* Subtitle */}
        <h3 className="text-lg md:text-2xl text-amber-400 font-semibold drop-shadow-md mb-12">
          For Skilled People Without Funds
        </h3>

        {/* Points */}
        <motion.ul
          className="grid gap-6 w-full md:grid-cols-2 max-w-3xl mx-auto"
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
        >
          {factoryPoints.map((point, index) => (
            <motion.li
              key={index}
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-5 text-left flex items-start gap-3 hover:bg-white/15 transition-colors duration-300"
              variants={{
                hidden: { y: 30, opacity: 0 },
                visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
              }}
            >
              <span className="text-amber-400 text-2xl font-bold mt-1">•</span>
              <span className="text-base md:text-lg">{point}</span>
            </motion.li>
          ))}
        </motion.ul>

        {/* CTA Button */}
        <motion.a
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          className="mt-14 px-10 py-4 rounded-full text-lg md:text-xl font-bold text-black relative overflow-hidden"
          href="https://ramaera.com/apply" target="_blank"
        >
          <span className="absolute inset-0 bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 animate-gradient-x"></span>
          <span className="relative z-10">Apply for Factory</span>
        </motion.a>
      </motion.div>

      {/* Button gradient animation */}
      <style jsx>{`
        @keyframes gradient-x {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 3s ease infinite;
        }
      `}</style>
    </div>
  );
};

export default ApplyForFactorySlide;
