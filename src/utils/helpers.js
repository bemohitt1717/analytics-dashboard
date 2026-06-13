/**
 * Utility functions for formatting and helpers
 */

// Format currency values
export const formatCurrency = (value) => {
  if (typeof value !== "number") return value;
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(value);
};

// Format numbers with commas
export const formatNumber = (num) => {
  if (typeof num !== "number") return num;
  return num.toLocaleString();
};

// Format percentage
export const formatPercent = (value) => {
  if (typeof value !== "number") return value;
  return `${value.toFixed(1)}%`;
};

// Color theme mapping - using our 3 primary colors
export const colorTheme = {
  black: "#0B0B0F",
  yellow: "#FACC15",
  blue: "#3B82F6",
  dark: "#0B0B0F",
  darkGray: "#1a1a2e",
  mediumGray: "#2a2a3e",
  lightGray: "#3a3a4e",
};

// Icon color mapping based on status/type
export const getIconColor = (type) => {
  const colors = {
    primary: "text-blue-400",
    success: "text-emerald-400",
    warning: "text-yellow-400",
    danger: "text-red-400",
    purple: "text-purple-400",
    pink: "text-pink-400",
  };
  return colors[type] || colors.primary;
};

// Get status badge color
export const getStatusColor = (status) => {
  const statusColors = {
    Completed:
      "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30",
    Pending: "bg-yellow-500/20 text-yellow-400 border border-yellow-500/30",
    Failed: "bg-red-500/20 text-red-400 border border-red-500/30",
    Processing: "bg-blue-500/20 text-blue-400 border border-blue-500/30",
  };
  return statusColors[status] || statusColors.Pending;
};

// Truncate text
export const truncateText = (text, length) => {
  if (text.length > length) {
    return text.substring(0, length) + "...";
  }
  return text;
};

// Get initials from name
export const getInitials = (name) => {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();
};

// Generate random avatar color
export const getAvatarColor = (index) => {
  const colors = [
    "from-blue-500 to-blue-600",
    "from-yellow-500 to-yellow-600",
    "from-emerald-500 to-emerald-600",
    "from-purple-500 to-purple-600",
    "from-pink-500 to-pink-600",
  ];
  return colors[index % colors.length];
};
