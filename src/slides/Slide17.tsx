import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LabelList,
  Cell, // ← Import Cell here
} from "recharts";
import ramaeraBg from "../assets/top-view-office-desk-with-growth-chart-hands-with-keyboard.jpg";

const profitExampleData = [
  { name: "Factory Operator", value: 3, color: "#facc15", amount: "₹3 Lakh" },
  { name: "Project Investors", value: 5.5, color: "#34d399", amount: "₹5.5 Lakh" },
  { name: "Marketing Budget", value: 1, color: "#3b82f6", amount: "₹1 Lakh" },
  { name: "Operations", value: 0.5, color: "#f87171", amount: "₹50,000" },
];

const ProfitExampleBarSlide = () => {
  return (
    <div
      className="w-full min-h-screen flex flex-col items-center justify-center px-6 md:px-12 py-12 bg-cover bg-center relative"
      style={{ backgroundImage: `url(${ramaeraBg})` }}
    >
      <div className="absolute inset-0 bg-black/70"></div>

      <div className="relative z-10 flex flex-col items-center gap-6">
        <h2 className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg">
          PROFIT EXAMPLE
        </h2>
        <h3 className="text-lg md:text-2xl text-amber-400 font-semibold drop-shadow-md">
          ₹1 Crore Factory with ₹10 Lakh Monthly Profit
        </h3>
      </div>

      <div className="relative z-10 w-full max-w-4xl h-96 md:h-[400px] mt-12">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={profitExampleData}
            layout="vertical"
            margin={{ top: 20, right: 40, left: 20, bottom: 20 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
            <XAxis type="number" tick={{ fill: "#fff" }} />
            <YAxis
              type="category"
              dataKey="name"
              tick={{ fill: "#fff", fontSize: 16 }}
              width={200}
            />
            <Tooltip
              formatter={(value, name, entry) => [entry.amount, name]}
              contentStyle={{
                backgroundColor: "rgba(0,0,0,0.8)",
                borderRadius: "8px",
                color: "#fff",
              }}
            />
            <Bar dataKey="value" barSize={40}>
              {profitExampleData.map((entry, index) => (
                <Cell key={index} fill={entry.color} />
              ))}
              <LabelList
                dataKey="amount"
                position="right"
                fill="#fff"
                fontSize={16}
              />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ProfitExampleBarSlide;
