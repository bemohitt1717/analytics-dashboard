/**
 * Framer Motion animation variants for reusable animations
 * These define entrance/exit animations and hover states
 */

// Container animation - stagger children animations
export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Each child animates 0.1s after the previous one
      delayChildren: 0.2,
    },
  },
};

// Individual item animation - fade and slide up
export const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

// Card hover animation - lift effect
export const cardHoverVariants = {
  rest: {
    y: 0,
    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
  },
  hover: {
    y: -8, // Moves up slightly
    boxShadow: "0 20px 50px rgba(0, 0, 0, 0.2)",
    transition: { duration: 0.3 },
  },
};

// Sidebar slide animation - for collapsible sidebar
export const sidebarVariants = {
  open: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.3, ease: "easeOut" },
  },
  closed: {
    x: "-100%",
    opacity: 0,
    transition: { duration: 0.3, ease: "easeIn" },
  },
};

// Dropdown menu animation - scale and fade
export const dropdownVariants = {
  hidden: {
    opacity: 0,
    scale: 0.95,
    y: -10,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.2, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    y: -10,
    transition: { duration: 0.2 },
  },
};

// Chart animation - bars/lines grow from zero
export const chartBarVariants = {
  hidden: { height: 0 },
  visible: (custom) => ({
    height: custom,
    transition: {
      duration: 0.6,
      delay: Math.random() * 0.3, // Stagger bars randomly
      ease: "easeOut",
    },
  }),
};

// Number counter animation - for animated KPI numbers
export const numberVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5 },
  },
};

// Page transition animation
export const pageVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    y: 10,
    transition: { duration: 0.3 },
  },
};

// Pulse animation - for loading/notification indicators
export const pulseVariants = {
  animate: {
    scale: [1, 1.1, 1],
    opacity: [1, 0.8, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

// Theme transition animation - smooth color transition on theme change
export const themeTransitionVariants = {
  animate: {
    transition: {
      duration: 0.4,
      ease: "easeInOut",
    },
  },
};
