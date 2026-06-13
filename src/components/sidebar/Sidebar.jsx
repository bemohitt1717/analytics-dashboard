/**
 * Sidebar component - Left navigation menu
 * Features: Collapsible, navigation links, icons, hover effects
 */

import React, { useState } from "react";
import { motion } from "framer-motion";
import * as LucideIcons from "lucide-react";
import { navMenuItems } from "../../data/analytics";
import { sidebarVariants } from "../../animations/motionVariants";
import { useResponsive } from "../../hooks/useHooks";
import { SidebarLogo } from "../../data/analytics";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const [activeItem, setActiveItem] = useState(0);
  const { isMobile } = useResponsive();


  return (
    <>
      {/* Mobile backdrop - clicking closes sidebar */}
      {isMobile && isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
          onClick={toggleSidebar}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        />
      )}

      {/* Sidebar container */}
      <motion.aside
        className={`
          fixed top-0 left-0 h-screen
          bg-slate-100/50 backdrop-blur-sm
           dark:border-slate-700 dark:bg-[#0F172A]/80 dark:shadow-lg
          border-r border-slate-300/50
          shadow-2xl
          ${isMobile ? "w-64 z-40" : "w-72 z-30"}
          overflow-y-auto scrollbar-hide
        `}
        variants={sidebarVariants}
        initial={isMobile ? "closed" : "open"}
        animate={isOpen ? "open" : isMobile ? "closed" : "open"}
        transition={{ duration: 0.3 }}
      >
        {/* Sidebar header with logo */}
        <div className="p-6 border-b shadow-2xs  border-slate-300/50">
          <div className="flex items-center gap-3">
            {/* Logo circle with gradient */}
            <div className="w-10 h-10 rounded-lg  flex items-center justify-center">
              <span className="text-slate-900  font-bold text-lg">
                <img src= {SidebarLogo.sidebarLogo} alt="" className="h-10" />
              </span>
            </div>
            <div>
              <h1 className="text-gray-700 font-bold dark:text-slate-200 text-lg">Dashboard</h1>
              <p className="text-slate-500 font-semibold dark:text-yellow-400 text-sm">Analytics Pro</p>
            </div>
          </div>
        </div>

        {/* Navigation menu */}
        <nav className="p-4 space-y-2">
          {navMenuItems.map((item, index) => {
            const isActive = activeItem === index;

            return (
              <motion.button
                key={item.id}
                onClick={() => setActiveItem(index)}
                className={`
                  w-full flex items-center gap-3 px-4 py-3 rounded-lg
                  transition-all duration-100 relative group
                  ${
                    isActive
                      ? "bg-blue-600/20 text-gray-800 border border-blue-500/30  dark:text-slate-100 dark:border-yellow-500"
                      : "text-slate-800 hover:text-black hover:bg-blue-300/50 dark:text-slate-200 dark:hover:bg-slate-300/60"
                  }
                `}
                whileHover={{ x: 4 }} // Slight move on hover
              >
                {/* Icon */}
                <div className="flex-shrink-0 ">
                  <img src= {item.icon} alt= {item.name} className="h-16 rounded-full p-1" />
                </div>

                {/* Label */}
                <span className="flex-1 text-left text-sm font-medium">
                  {item.name}
                </span>

                {/* Active indicator glow */}
                {isActive && (
                  <motion.div
                    className="absolute inset-0 rounded-lg bg-blue-300 dark:bg-yellow-400/30 -z-10"
                    layoutId="activeIndicator"
                    transition={{ type: "spring", stiffness: 200, damping: 30 }}
                  />
                )}

                {/* Hover glow effect */}
                <div className="absolute inset-0 rounded-lg bg-blue-600/0 group-hover:bg-blue-600/5 -z-10 transition-colors" />
              </motion.button>
            );
          })}
        </nav>

        {/* Settings section at bottom */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-slate-300/50 ">
          <motion.button
            className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-slate-800 dark:text-slate-200 hover:text-slate-900 hover:bg-blue-300/50 transition-all duration-200"
            whileHover={{ x: 4 }}
          >
            <LucideIcons.HelpCircle size={20} />
            <span className="flex-1 text-left text-sm font-medium">Help</span>
          </motion.button>
        </div>
      </motion.aside>
    </>
  );
};

export default Sidebar;
