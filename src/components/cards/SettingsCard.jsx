/**
 * Settings Card component - For settings panels with toggles
 * Features: Toggle switches, animated transitions
 */

import React, { useState } from "react";
import { motion } from "framer-motion";
import * as LucideIcons from "lucide-react";
import {
  containerVariants,
  itemVariants,
} from "../../animations/motionVariants";

// Toggle Switch component
export const ToggleSwitch = ({
  label,
  description,
  defaultChecked = false,
}) => {
  const [isOn, setIsOn] = useState(defaultChecked);

  return (
    <motion.div
      className="flex items-center justify-between py-4 border-b border-slate-700/30 dark:border-slate-600/30 last:border-0"
      variants={itemVariants}
    >
      <div className="flex-1">
        <p className="text-slate-700 dark:text-slate-200 font-medium text-sm">
          {label}
        </p>
        {description && (
          <p className="text-slate-500 dark:text-slate-400 text-xs mt-1">
            {description}
          </p>
        )}
      </div>

      {/* Toggle button */}
      <motion.button
        onClick={() => setIsOn(!isOn)}
        className={`w-16 md:w-16 h-8 rounded-full p-1 transition-colors flex items-center ${
          isOn ? "bg-blue-500" : "bg-slate-200 dark:bg-slate-700"
        }`}
        whileTap={{ scale: 0.95 }}
      >
        <motion.div
          className="w-6 h-6 rounded-full bg-white"
          animate={{
            x: isOn ? 24 : 0,
          }}
          transition={{ type: "spring", stiffness: 400, damping: 20 }}
        />
      </motion.button>
    </motion.div>
  );
};

// Settings Card component
const SettingsCard = ({ title, description, children }) => (
  <motion.div
    className="bg-white/30 dark:bg-slate-900/80 backdrop-blur-sm shadow-2xl border border-slate-300/50 dark:border-slate-700/50 rounded-xl p-6"
    variants={containerVariants}
    initial="hidden"
    animate="visible"
  >
    <div className="mb-6">
      <h3 className="text-black dark:text-slate-100 font-semibold text-xl">
        {title}
      </h3>
      {description && (
        <p className="text-slate-700 dark:text-slate-400 text-sm font-semibold mt-2">
          {description}
        </p>
      )}
    </div>

    {children}
  </motion.div>
);

// Settings section with multiple toggles
export const NotificationSettings = () => (
  <SettingsCard
    title="Notification Settings"
    description="Manage how you receive notifications"
  >
    <ToggleSwitch
      label="Email Notifications"
      description="Receive updates via email"
      defaultChecked={true}
    />
    <ToggleSwitch
      label="Push Notifications"
      description="Browser push notifications"
      defaultChecked={true}
    />
    <ToggleSwitch
      label="Marketing Emails"
      description="News and product updates"
      defaultChecked={false}
    />
    <ToggleSwitch
      label="Weekly Digest"
      description="Get a weekly summary"
      defaultChecked={true}
    />
  </SettingsCard>
);

// Security settings card
export const SecuritySettings = () => (
  <SettingsCard
    title="Security Settings"
    description="Manage your account security"
  >
    <motion.div
      className="space-y-3"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.button
        className="w-full px-4 py-3 bg-blue-300 hover:bg-blue-600/30 text-black border border-blue-500 rounded-lg transition-colors text-sm font-medium flex items-center gap-2"
        variants={itemVariants}
        whileHover={{ x: 2 }}
      >
        <LucideIcons.Key size={18} />
        Change Password
      </motion.button>
      <motion.button
        className="w-full px-4 py-3 bg-gray-300/60 hover:bg-gray-100/60 text-black border shadow-2xs border-slate-300/50 rounded-lg transition-colors text-sm font-medium flex items-center gap-2"
        variants={itemVariants}
        whileHover={{ x: 2 }}
      >
        <LucideIcons.Smartphone size={18} />
        Two-Factor Authentication
      </motion.button>
      <motion.button
        className="w-full px-4 py-3 bg-slate-300/60 hover:bg-slate-100 text-slate-black border shadow-2xs border-slate-200/50 rounded-lg transition-colors text-sm font-medium flex items-center gap-2"
        variants={itemVariants}
        whileHover={{ x: 2 }}
      >
        <LucideIcons.LogOut size={18} />
        Sign Out from All Devices
      </motion.button>
    </motion.div>
  </SettingsCard>
);

export default SettingsCard;
