import React from "react";
import { PieChart, Pie, Cell, Legend, ResponsiveContainer, Tooltip } from "recharts";
import ramaeraBg from "../assets/top-view-office-desk-with-growth-chart-hands-with-keyboard.jpg";
import { motion } from "framer-motion";

const data = [
  { name: "Factory Operator (Management)", value: 30, color: "#facc15" },
  { name: "Project Investors (Shareholders)", value: 55, color: "#34d399" },
  { name: "Marketing & Growth", value: 10, color: "#3b82f6" },
  { name: "Operations & Legal", value: 5, color: "#f87171" },
];

const ProfitDistributionChart = () => {
  return (
    <div
      className="w-full min-h-screen flex flex-col items-center justify-center px-6 md:px-12 py-12 bg-cover bg-center relative"
      style={{ backgroundImage: `url(${ramaeraBg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Title */}
      <div className="relative z-10 flex flex-col items-center gap-4 text-center mb-12">
        <h2 className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg">
          PROFIT DISTRIBUTION MODEL
        </h2>
        <h3 className="text-lg md:text-2xl text-amber-400 font-semibold drop-shadow-md">
          How Factory Earnings Are Shared
        </h3>
      </div>

      {/* Chart */}
      <motion.div
        className="relative z-10 w-full max-w-4xl h-96 md:h-[500px]"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              innerRadius={80}
              outerRadius={140}
              paddingAngle={3}
              label={({ name, percent }) =>
                `${name} (${(percent * 100).toFixed(0)}%)`
              }
              labelLine={false}
            >
              {data.map((entry, index) => (
                <Cell key={index} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip
              formatter={(value) => `${value}%`}
              contentStyle={{ backgroundColor: "rgba(105, 242, 51, 0.7)", borderRadius: "8px", color: "#fff" }}
            />
            <Legend
              verticalAlign="bottom"
              height={60}
              iconType="circle"
              formatter={(value, entry) => (
                <span className="text-white">{value}</span>
              )}
            />
          </PieChart>
        </ResponsiveContainer>
      </motion.div>
    </div>
  );
};

export default ProfitDistributionChart;
