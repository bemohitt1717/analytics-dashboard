/**
 * KPI Card component - Displays key metrics with animated counters
 * Features: Icon, mini chart, hover lift effect, glowing border, animated number
 */

import React from "react";
import { motion } from "framer-motion";
import * as LucideIcons from "lucide-react";
import {
  cardHoverVariants,
  numberVariants,
} from "../../animations/motionVariants";
import { useCountUp } from "../../hooks/useHooks";

const KPICard = ({
  title,
  value,
  change,
  isPositive,
  icon,
  bgColor,
  borderColor,
}) => {
  // Extract numeric value for counter animation
  const numericValue = parseInt(value.replace(/[^0-9]/g, ""));
  const animatedValue = useCountUp(numericValue, 1500);

  // Get icon component from Lucide
  const Icon = LucideIcons[icon];

  return (
    <motion.div
      variants={cardHoverVariants}
      initial="rest"
      whileHover="hover"
      className={`
        relative p-6 rounded-xl backdrop-blur-sm
        border ${borderColor} overflow-hidden
        bg-slate-100/30 dark:bg-slate-900/80
        bg-gradient-to-br ${bgColor}
        cursor-pointer
      `}
    >
      {/* Animated background glow */}
      <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity" />

      {/* Content */}
      <div className="relative z-10">
        {/* Header with icon */}
        <div className="flex justify-between items-start mb-4">
          <div>
            <p className="text-slate-800 dark:text-slate-100 text-lg  font-medium">
              {title}
            </p>
          </div>
          {/* Icon with background */}
          <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center">
            {Icon && <Icon size={28} className="text-blue-600" />}
          </div>
        </div>

        {/* Main value with animation */}
        <motion.div
          variants={numberVariants}
          initial="hidden"
          animate="visible"
          className="text-3xl font-bold text-gray-700 dark:text-slate-100 mb-2"
        >
          {value.includes("₹") ? "₹" : ""}
          {animatedValue}
          {value.includes("%") ? "%" : ""}
        </motion.div>

        {/* Change indicator */}
        <div className="flex items-center gap-2">
          {isPositive ? (
            <>
              <LucideIcons.TrendingUp size={18} className="text-emerald-600" />
              <span className="text-emerald-600 text-sm font-medium">
                {change}
              </span>
            </>
          ) : (
            <>
              <LucideIcons.TrendingDown size={18} className="text-red-600" />
              <span className="text-red-600 text-md font-medium">{change}</span>
            </>
          )}
          <span className="text-slate-700 text-sm">vs last month</span>
        </div>
      </div>

      {/* Animated border glow on hover */}
      <motion.div
        className={`absolute inset-0 rounded-xl border ${borderColor} pointer-events-none`}
        whileHover={{
          boxShadow: `inset 0 0 20px rgba(59, 130, 246, 0.2)`,
        }}
      />
    </motion.div>
  );
};

export default KPICard;
