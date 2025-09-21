import React from "react";
import { motion } from "framer-motion";
import benefitsBg from "../assets/benifits.jpg";

const shareholderBenefits = [
  { icon: "🏭", text: "Co-ownership in real manufacturing units" },
  { icon: "💰", text: "Yearly profit distributions from successful factories" },
  { icon: "🎯", text: "Access to unlimited future projects" },
  { icon: "👨‍👩‍👧‍👦", text: "Transferable to family members/nominees" },
  { icon: "📈", text: "Potential IPO benefits when company goes public" },
];

const ShareholderBenefitsTimeline = () => {
  return (
    <div
      className="w-full min-h-screen relative flex flex-col items-center justify-start px-6 md:px-12 py-16 text-white overflow-x-hidden"
      style={{
        backgroundImage: `url(${benefitsBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Heading */}
      <motion.div
        className="relative z-10 text-center mb-16"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-4xl md:text-5xl font-extrabold mb-2 drop-shadow-lg">
          SHAREHOLDER <span className="text-amber-400">BENEFITS</span>
        </h2>
        <p className="text-lg md:text-2xl text-gray-300">
          What You Get as a Ramaera Partner
        </p>
      </motion.div>

      {/* Timeline */}
      <div className="relative z-10 w-full max-w-3xl flex flex-col md:flex-row md:justify-between">
        {/* Vertical line */}
        <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-1 bg-white/20 transform -translate-x-1/2"></div>

        {shareholderBenefits.map((benefit, idx) => (
          <motion.div
            key={idx}
            className="relative flex md:flex-col items-start md:items-center md:w-1/5 mb-12 md:mb-0"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
          >
            {/* Timeline node */}
            <div className="flex items-center md:flex-col">
              <div className="relative flex items-center justify-center w-12 h-12 md:w-16 md:h-16 bg-amber-400 rounded-full shadow-lg">
                <span className="text-2xl md:text-3xl">{benefit.icon}</span>
                <div className="absolute w-16 h-16 md:w-20 md:h-20 bg-amber-400 rounded-full opacity-20 animate-pulse"></div>
              </div>

              {/* Connector line */}
              {idx !== shareholderBenefits.length - 1 && (
                <div className="hidden md:block w-1 h-20 bg-white/20 mt-2"></div>
              )}
            </div>

            {/* Text */}
            <motion.div
              className="ml-4 md:ml-0 md:mt-4 text-left md:text-center max-w-xs"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 + 0.2 }}
            >
              <p className="text-white text-base md:text-lg font-semibold">
                {benefit.text}
              </p>
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Subtle spotlight behind timeline */}
      <div className="absolute -z-10 top-1/4 left-1/2 w-80 h-80 bg-gradient-to-tr from-amber-400 via-yellow-400 to-red-400 rounded-full opacity-10 blur-3xl transform -translate-x-1/2"></div>
    </div>
  );
};

export default ShareholderBenefitsTimeline;
