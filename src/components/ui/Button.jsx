/**
 * Button component - Reusable with variants
 * Used throughout the dashboard
 */

import React from "react";

const Button = ({
  children,
  className = "",
  variant = "primary",
  size = "md",
  ...props
}) => {
  // Define button style variants
  const variants = {
    primary:
      "bg-blue-600 hover:bg-blue-700 text-white border border-blue-500/50",
    secondary:
      "bg-slate-700 hover:bg-slate-600 text-white border border-slate-600/50",
    ghost:
      "bg-transparent hover:bg-slate-800/50 text-slate-300 border border-slate-700/50",
    danger:
      "bg-red-600/20 hover:bg-red-600/30 text-red-400 border border-red-500/30",
  };

  // Define size variants
  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-sm",
    lg: "px-6 py-3 text-base",
  };

  return (
    <button
      className={`
        rounded-lg font-medium transition-all duration-200
        ${variants[variant]}
        ${sizes[size]}
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
