import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import chooseBg from "../assets/industry.jpg";

const chooseBenefits = [
  { icon: "🏭", title: "Co-own Real Industries", description: "Not paper investments" },
  { icon: "🛡️", title: "No Risk of Fraud", description: "Legal & regulated" },
  { icon: "♾️", title: "Lifetime Project Access", description: "Unlimited opportunities" },
  { icon: "💰", title: "Real Profits", description: "From actual factories" },
  { icon: "🤝", title: "Community Support", description: "Transparent governance" },
];

const WhyChooseRamaeraTimeline = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <div
      ref={containerRef}
      className="w-full min-h-screen relative flex flex-col items-center justify-start px-6 md:px-12 py-16 text-white overflow-x-hidden"
      style={{
        backgroundImage: `url(${chooseBg})`,
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
          WHY CHOOSE <span className="text-amber-400">RAMAERA?</span>
        </h2>
        <p className="text-lg md:text-2xl text-gray-300">
          Unique Benefits of Community Ownership
        </p>
      </motion.div>

      {/* Timeline Container */}
      <div className="relative z-10 w-full max-w-6xl flex flex-col md:flex-row md:flex-wrap md:justify-between items-start">
        {/* Vertical glowing line */}
        <motion.div
          className="absolute top-0 left-1/2 w-1 bg-gradient-to-b from-amber-400 via-yellow-400 to-red-400 rounded-full opacity-40"
          style={{ height: isInView ? "100%" : 0 }}
          initial={{ height: 0 }}
          animate={{ height: isInView ? "100%" : 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />

        {/* Timeline Nodes */}
        {chooseBenefits.map((benefit, idx) => {
          const isLeft = idx % 2 === 0;

          return (
            <motion.div
              key={idx}
              className={`relative flex w-full md:w-1/2 mb-16 md:mb-24 ${
                isLeft ? "md:justify-start" : "md:justify-end"
              }`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
            >
              {/* Node */}
              <div className="relative z-10 flex items-center md:flex-col">
                <div className="relative flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-amber-400 rounded-full shadow-lg">
                  <span className="text-2xl md:text-3xl">{benefit.icon}</span>
                  <div className="absolute w-16 h-16 md:w-20 md:h-20 bg-amber-400 rounded-full opacity-20 animate-pulse"></div>
                </div>

                {/* Connector glow to line */}
                <div
                  className={`absolute w-1 h-1/2 bg-amber-400 rounded-full md:block ${
                    isLeft ? "left-full top-1/2 md:left-1/2 md:top-full" : "right-full top-1/2 md:right-1/2 md:top-full"
                  }`}
                ></div>
              </div>

              {/* Node Content */}
              <div
                className={`ml-4 md:ml-0 md:mt-6 text-left md:text-${isLeft ? "left" : "right"} max-w-xs`}
              >
                <h3 className="text-white text-xl md:text-2xl font-bold">{benefit.title}</h3>
                <p className="text-gray-300 mt-1">{benefit.description}</p>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Cinematic spotlight behind timeline */}
      <div className="absolute -z-10 top-1/4 left-1/2 w-80 h-80 bg-gradient-to-tr from-amber-400 via-yellow-400 to-red-400 rounded-full opacity-10 blur-3xl transform -translate-x-1/2"></div>
    </div>
  );
};

export default WhyChooseRamaeraTimeline;
