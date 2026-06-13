/**
 * Navbar component - Top navigation bar
 * Features: Search, notifications, messages, user profile dropdown
 */

import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import * as LucideIcons from "lucide-react";
import { useClickOutside, useDropdown } from "../../hooks/useHooks";
import { dropdownVariants } from "../../animations/motionVariants";
import Avatar from "../ui/Avatar";
import { notificationItems, userMenuItems } from "../../data/analytics";
import ThemeToggle from "../ui/themeToggle"

const Navbar = ({ toggleSidebar }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const notificationDropdown = useDropdown();
  const userDropdown = useDropdown();
  const notificationRef = useRef(null);
  const userRef = useRef(null);

  // Close dropdowns when clicking outside
  useClickOutside(notificationRef, notificationDropdown.close);
  useClickOutside(userRef, userDropdown.close);

  return (
    <nav
      className="
        fixed top-0 lg:left-71 left-0 right-0 h-16 z-20
        border-b border-slate-200 bg-white/70 backdrop-blur-md shadow-2xl
        dark:border-slate-700 dark:bg-[#0F172A]/80 dark:shadow-lg
      "
    >
      <div className="h-full px-6 flex items-center justify-between">
        {/* Left side - Menu toggle + Search */}
        <div className="flex items-center gap-4 flex-1">
          {/* Menu toggle button for mobile */}
          <motion.button
            onClick={toggleSidebar}
            className="p-2 hover:bg-slate-200/50 dark:hover:bg-slate-800/50 rounded-lg md:hidden transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <LucideIcons.Menu size={20} className="text-slate-800 dark:text-slate-100" />
          </motion.button>

          {/* Search bar */}
          <div className="hidden sm:flex items-center gap-3 bg-white/80 dark:bg-slate-900/70 border border-slate-300/70 dark:border-slate-700/70 rounded-lg px-4 py-2 flex-1 max-w-xs hover:bg-slate-200/70 dark:hover:bg-slate-800/80 text-black transition-colors group">
            <LucideIcons.Search
              size={19}
              className="text-slate-700 group-hover:text-slate-500 dark:text-slate-200 dark:group-hover:text-slate-400"
            />
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-transparent text-slate-700 placeholder-slate-700 focus:outline-none w-full text-sm dark:text-slate-100 dark:placeholder-slate-400"
            />
          </div>
        </div>

        {/* Right side - Icons & User */}
        <div className="flex items-center gap-2">
          {/* Notification icon with dropdown */}
          <div className="relative" ref={notificationRef}>
            <motion.button
              onClick={notificationDropdown.toggle}
              className="relative p-2 hover:bg-slate-200/50 rounded-lg transition-colors group"
              whileHover={{ scale: 1.05 }}
            >
              <LucideIcons.Bell
                size={20}
                className="text-slate-800 dark:text-yellow-400 group-hover:text-slate-600"
              />
              {/* Notification badge */}
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 dark:bg-red-700 rounded-full" />
            </motion.button>

            {/* Notification dropdown menu */}
            <AnimatePresence>
              {notificationDropdown.isOpen && (
                <motion.div
                  variants={dropdownVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="absolute right-0 mt-2 w-80 bg-slate-100 dark:bg-slate-400/90  dark:backdrop-blur-2xl backdrop-blur-lg px-1  border  border-slate-300/50 rounded-xl shadow-2xl overflow-hidden"
                >
                  {/* Header */}
                  <div className="px-4 py-3  border-gray-300 border-b-2">
                    <h3 className="text-black dark:text-yellow-400 font-semibold text-md">
                      Notifications
                    </h3>
                  </div>

                  {/* Notification items */}
                  <div className="max-h-96 p-1 overflow-y-auto">
                    {notificationItems.map((notif) => (
                      <motion.div
                        key={notif.id}
                        className="px-4 py-3 border-b border-gray-200 hover:bg-slate-300/50 hover:rounded-2xl mt-1 cursor-pointer transition-colors"
                        whileHover={{ x: 2 }}
                      >
                        <p className="text-slate-700 dark:text-slate-100 text-sm font-medium">
                          {notif.title}
                        </p>
                        <p className="text-slate-500 dark:text-slate-100 text-xs mt-1">
                          {notif.time}
                        </p>
                      </motion.div>
                    ))}
                  </div>

                  {/* Footer */}
                  <div className="px-4 py-2  text-center">
                    <button className="text-blue-700 dark:text-yellow-300 hover:text-yellow-500 text-sm font-medium">
                      View all
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Messages icon */}
          <motion.button
            className="p-2 hover:bg-gray-200/50 hidden md:block text-black  rounded-lg transition-colors group"
            whileHover={{ scale: 1.05 }}
          >
            <LucideIcons.MessageSquare
              size={20}
              className="text-slate-800 dark:text-yellow-400  group-hover:text-slate-600"
            />
          </motion.button>

          {/* Theme toggle - visible on larger screens */}
          <motion.div
            className="flex items-center justify-center rounded-lg border border-slate-300/50 bg-white/40 p-2 text-md font-medium transition-all duration-200 hover:bg-white/70"
            whileHover={{ scale: 1.02 }}
          >
            <ThemeToggle />
          </motion.div>

          {/* User profile dropdown */}
          <div
            className="relative ml-4 pl-4 border-l border-slate-800/50"
            ref={userRef}
          >
            <motion.button
              onClick={userDropdown.toggle}
              className="flex items-center gap-2 p-1.5 hover:bg-slate-300/50  rounded-lg transition-colors"
              whileHover={{ scale: 1.05 }}
            >
              <Avatar name="MOHIT" size="md" />
              <span className="hidden sm:inline text-slate-800  dark:text-slate-200 text-md font-medium">
                MOHIT
              </span>
              <LucideIcons.ChevronDown
                size={16}
                className={`text-slate-700 dark:text-slate-200 transition-transform ${
                  userDropdown.isOpen ? "rotate-180" : ""
                }`}
              />
            </motion.button>

            {/* User menu dropdown */}
            <AnimatePresence>
              {userDropdown.isOpen && (
                <motion.div
                  variants={dropdownVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="absolute right-0 mt-2 w-48 bg-slate-100 dark:bg-slate-400/60 backdrop-blur-sm  border-slate-700/50 rounded-xl shadow-2xl overflow-hidden"
                >
                  {/* User info */}
                  <div className="px-4 py-3 border-b border-slate-700/50">
                    <p className="text-slate-700 dark:text-yellow-400 font-medium text-md">
                      MOHIT
                    </p>
                    <p className="text-black dark:text-slate-100 text-sm">Mohit@gmail.com</p>
                  </div>

                  {/* Menu items */}
                  <div className="py-2">
                    {userMenuItems.map((item) => {
                      const Icon = LucideIcons[item.icon];
                      return (
                        <motion.button
                          key={item.id}
                          className="w-full flex items-center gap-3 px-4 py-2 text-slate-600 dark:text-slate-100 hover:text-slate-500 hover:bg-slate-300/50 transition-colors text-sm"
                          whileHover={{ x: 2 }}
                        >
                          {Icon && <Icon size={16} />}
                          <span>{item.label}</span>
                        </motion.button>
                      );
                    })}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
