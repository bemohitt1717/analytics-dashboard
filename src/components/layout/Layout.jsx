/**
 * Layout component - Wraps the entire dashboard
 * Combines Sidebar, Navbar, and main content area
 * Handles responsive behavior for mobile/tablet/desktop
 */

import React from "react";
import { motion } from "framer-motion";
import Sidebar from "../sidebar/Sidebar";
import Navbar from "../navbar/Navbar";
import { useSidebar } from "../../hooks/useHooks";
import { useTheme } from "../../context/ThemeContext";
import { containerVariants, themeTransitionVariants } from "../../animations/motionVariants";
import BackgroundBlur from "../ui/BgBlur";

const Layout = ({ children }) => {
  const { isSidebarOpen, toggleSidebar } = useSidebar();
  const { currentTheme } = useTheme();

  return (
    <motion.div 
      className="relative isolate min-h-screen overflow-x-hidden bg-gradient-to-br from-white to-slate-50 dark:from-slate-950 dark:to-slate-900"
      key={currentTheme}
      variants={themeTransitionVariants}
      animate="animate"
    >
      <BackgroundBlur />
      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      {/* Navbar */}
      <Navbar toggleSidebar={toggleSidebar} />

      {/* Main content area */}
      <motion.main
        className="relative z-10 pt-16 md:pl-72 min-h-screen"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Content wrapper with padding */}
        <div className="p-4 md:p-8 max-w-7xl mx-auto">{children}</div>
      </motion.main>
    </motion.div>
  );
};


export default Layout;
