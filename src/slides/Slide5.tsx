import React from "react";
import { motion } from "framer-motion";
import ramaeraBg from "../assets/industry.jpg";

const financialData = [
  { icon: "💰", title: "Funding Example", detail: "₹1 Cr factory = 1,000 people × ₹10,000 each" },
  { icon: "📊", title: "Profit Distribution Model", detail: "30% → Factory operator, 55% → Shareholders, 10% → Marketing & growth, 5% → Ramaera operations" },
  { icon: "👥", title: "Community Growth", detail: "22,000 → Target: 2,00,000 shareholders" },
  { icon: "🎯", title: "Portfolio Strategy", detail: "Lower contribution, higher factory count" },
  { icon: "🌾", title: "Real Impact", detail: "Farmer invests ₹1 lakh across 30 factories" },
  { icon: "💵", title: "Expected Returns", detail: "₹50,000/year after 2-3 years" },
];

const ModernResponsiveTable = () => {
  return (
    <div
      className="w-full min-h-screen relative flex flex-col items-center justify-start py-16 px-4 md:px-12"
      style={{
        backgroundImage: `url(${ramaeraBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/80"></div>

      {/* Heading */}
      <motion.div
        className="relative z-10 text-center mb-12"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg">
          WHAT IS RAMAERA? - <span className="text-amber-400">STEP 2</span>
        </h2>
        <p className="text-lg md:text-2xl text-gray-300 mt-2">
          The Financial Model & Scalable Impact
        </p>
      </motion.div>

      {/* Scrollable Table Container */}
      <div className="relative z-10 w-full max-w-6xl h-[60vh] overflow-auto rounded-2xl shadow-2xl border border-white/20">
        <div className="min-w-[900px] min-h-[100%] overflow-auto">
          <table className="w-full table-auto border-collapse">
            <thead className="sticky top-0 bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-500 backdrop-blur-md z-20">
              <tr>
                <th className="px-4 py-3 text-white text-lg md:text-xl">Icon</th>
                <th className="px-4 py-3 text-white text-lg md:text-xl">Category</th>
                <th className="px-4 py-3 text-white text-lg md:text-xl">Details</th>
              </tr>
            </thead>
            <tbody>
              {financialData.map((row, idx) => (
                <motion.tr
                  key={idx}
                  className={`transition-transform cursor-pointer ${idx % 2 === 0 ? "bg-white/10" : "bg-white/5"} hover:scale-105 hover:bg-white/20`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  <td className="px-4 py-4 text-center text-2xl">{row.icon}</td>
                  <td className="px-4 py-4 text-white font-semibold">{row.title}</td>
                  <td className="px-4 py-4 text-gray-200">{row.detail}</td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Decorative Glowing Orbs */}
      <div className="absolute -z-10 top-[-5%] right-[-5%] w-36 h-36 bg-gradient-to-tr from-yellow-400 via-amber-500 to-red-500 rounded-full opacity-20 blur-3xl animate-pulse"></div>
      <div className="absolute -z-10 bottom-[-5%] left-[-5%] w-36 h-36 bg-gradient-to-bl from-purple-500 via-pink-500 to-red-400 rounded-full opacity-20 blur-3xl animate-pulse"></div>
    </div>
  );
};

export default ModernResponsiveTable;
