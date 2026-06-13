/**
 * Badge component - For status labels, tags, etc.
 */

import React from "react";
import { getStatusColor } from "../../utils/helpers";

const Badge = ({ children, variant = "default" }) => {
  const variants = {
    default: "bg-slate-700/50 text-slate-300 border border-slate-600/50",
    primary: "bg-blue-500/20 text-blue-400 border border-blue-500/30",
    success: "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30",
    warning: "bg-yellow-500/20 text-yellow-400 border border-yellow-500/30",
    danger: "bg-red-500/20 text-red-400 border border-red-500/30",
  };

  return (
    <span
      className={`
        inline-block px-2.5 py-1 rounded-full text-xs font-medium
        ${variants[variant]}
      `}
    >
      {children}
    </span>
  );
};

export default Badge;
