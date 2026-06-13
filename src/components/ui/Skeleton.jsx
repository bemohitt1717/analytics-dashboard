/**
 * Loading Skeleton component - Shows placeholder while data loads
 */

import React from "react";
import { motion } from "framer-motion";

const Skeleton = ({
  width = "w-full",
  height = "h-4",
  rounded = "rounded",
}) => {
  return (
    <motion.div
      className={`bg-gradient-to-r from-slate-700 to-slate-800 ${width} ${height} ${rounded}`}
      animate={{
        opacity: [0.5, 0.8, 0.5], // Pulsing effect
      }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
      }}
    />
  );
};

// Skeleton for card loading
export const CardSkeleton = () => (
  <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-xl p-6 space-y-4">
    <div className="flex justify-between items-start">
      <div className="space-y-2 flex-1">
        <Skeleton width="w-24" height="h-3" />
        <Skeleton width="w-32" height="h-6" rounded="rounded-lg" />
      </div>
      <Skeleton width="w-10" height="h-10" rounded="rounded-lg" />
    </div>
    <Skeleton width="w-full" height="h-12" rounded="rounded-lg" />
  </div>
);

// Skeleton for table row
export const TableRowSkeleton = () => (
  <tr className="border-b border-slate-700/50">
    <td className="px-6 py-4">
      <Skeleton width="w-24" height="h-3" />
    </td>
    <td className="px-6 py-4">
      <Skeleton width="w-32" height="h-3" />
    </td>
    <td className="px-6 py-4">
      <Skeleton width="w-20" height="h-3" />
    </td>
    <td className="px-6 py-4">
      <Skeleton width="w-16" height="h-3" />
    </td>
  </tr>
);

// Skeleton for chart loading
export const ChartSkeleton = () => (
  <div className="space-y-4">
    <Skeleton width="w-full" height="h-64" rounded="rounded-xl" />
  </div>
);

export default Skeleton;
