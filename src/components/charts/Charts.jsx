/**
 * Chart components using Recharts
 * Includes: Line Chart, Area Chart, Bar Chart, Pie Chart
 * All charts are responsive and dark-themed
 */

import React from "react";
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { motion } from "framer-motion";

// Chart wrapper component for consistent styling
const ChartWrapper = ({ title, subtitle, children }) => (
  <motion.div
    className="bg-white/30 dark:bg-slate-900/80 backdrop-blur-md border border-slate-300/50 dark:border-slate-700/50 shadow-2xl rounded-xl p-6 hover:border-slate-600/50 dark:hover:border-slate-600/50 transition-all"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <div className="mb-4">
      <h3 className="text-black dark:text-slate-100 font-semibold md:text-xl text-lg">
        {title}
      </h3>
      {subtitle && (
        <p className="text-slate-700 dark:text-slate-400 text-md font-medium mt-1">
          {subtitle}
        </p>
      )}
    </div>
    {children}
  </motion.div>
);

// Custom tooltip styling
const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-slate-100 dark:bg-slate-800 border border-slate-500/50 dark:border-slate-700/50 rounded-lg p-3 backdrop-blur-xl">
        <p className="text-slate-800 dark:text-slate-100 text-md font-medium">
          {payload[0].payload.name}
        </p>
        {payload.map((entry, index) => (
          <p
            key={index}
            className="text-sm font-medium"
            style={{ color: entry.color }}
          >
            {entry.name}: ${entry.value}
          </p>
        ))}
      </div>
    );
  }
  return null;
};

// Line Chart - Revenue trends
export const RevenueLineChart = ({ data }) => (
  <ChartWrapper title="Revenue Trend" subtitle="Monthly revenue comparison">
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" stroke="#475569" />
        <XAxis stroke="#94a3b8" />
        <YAxis stroke="#94a3b8" />
        <Tooltip content={<CustomTooltip />} />
        <Legend />
        {/* Revenue line */}
        <Line
          type="monotone"
          dataKey="revenue"
          stroke="#3B82F6"
          strokeWidth={2}
          dot={{ fill: "#3B82F6", r: 4 }}
          activeDot={{ r: 6 }}
          isAnimationActive={true}
        />
        {/* Target line */}
        <Line
          type="monotone"
          dataKey="target"
          stroke="#FACC15"
          strokeWidth={2}
          dot={{ fill: "#FACC15", r: 4 }}
          activeDot={{ r: 6 }}
          isAnimationActive={true}
        />
      </LineChart>
    </ResponsiveContainer>
  </ChartWrapper>
);

// Area Chart - User growth
export const UserGrowthAreaChart = ({ data }) => (
  <ChartWrapper title="User Growth" subtitle="Active users over time">
    <ResponsiveContainer width="100%" height={300}>
      <AreaChart data={data}>
        <defs>
          {/* Gradient for area fill */}
          <linearGradient id="colorUsers" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.3} />
            <stop offset="95%" stopColor="#3B82F6" stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" stroke="#475569" />
        <XAxis stroke="#94a3b8" />
        <YAxis stroke="#94a3b8" />
        <Tooltip content={<CustomTooltip />} />
        <Legend />
        {/* Total users area */}
        <Area
          type="monotone"
          dataKey="users"
          stroke="#3B82F6"
          fillOpacity={1}
          fill="url(#colorUsers)"
          isAnimationActive={true}
        />
      </AreaChart>
    </ResponsiveContainer>
  </ChartWrapper>
);

// Bar Chart - Sales performance
export const SalesBarChart = ({ data }) => (
  <ChartWrapper title="Sales Performance" subtitle="Revenue by product">
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" stroke="#475569" />
        <XAxis stroke="#94a3b8" />
        <YAxis stroke="#94a3b8" />
        <Tooltip content={<CustomTooltip />} />
        <Legend />
        {/* Sales bar */}
        <Bar
          dataKey="sales"
          fill="#3B82F6"
          radius={[8, 8, 0, 0]}
          isAnimationActive={true}
        />
        {/* Revenue bar */}
        <Bar
          dataKey="revenue"
          fill="#FACC15"
          radius={[8, 8, 0, 0]}
          isAnimationActive={true}
        />
      </BarChart>
    </ResponsiveContainer>
  </ChartWrapper>
);

// Pie Chart - Category distribution
export const CategoryPieChart = ({ data }) => {
  const COLORS = ["#3B82F6", "#FACC15", "#10B981", "#8B5CF6"];

  return (
    <ChartWrapper title="Distribution" subtitle="By category">
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={({ name, value }) => `${name} ${value}%`}
            outerRadius={100}
            fill="#8884d8"
            dataKey="value"
            isAnimationActive={true}
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip
            formatter={(value) => `${value}%`}
            contentStyle={{
              backgroundColor: "#ffff",
              border: "1px solid #475569",
              borderRadius: "8px",
            }}
          />
        </PieChart>
      </ResponsiveContainer>
    </ChartWrapper>
  );
};
