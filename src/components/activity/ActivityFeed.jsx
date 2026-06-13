/**
 * Activity Feed component - Shows recent activities and notifications
 * Features: Timeline layout, icons, timestamps, smooth animations
 */

import React from "react";
import { motion } from "framer-motion";
import * as LucideIcons from "lucide-react";
import {
  containerVariants,
  itemVariants,
} from "../../animations/motionVariants";

const ActivityFeed = ({ activities }) => {
  // Get icon component from Lucide
  const getIcon = (iconName) => {
    const IconComponent = LucideIcons[iconName];
    return IconComponent ? <IconComponent size={18} /> : null;
  };

  // Color mapping for activity types
  const getActivityColor = (color) => {
    const colors = {
      blue: "bg-blue-500/20 text-blue-400 border-blue-500/30",
      yellow: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
      green: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
      purple: "bg-purple-500/20 text-purple-400 border-purple-500/30",
      red: "bg-red-500/20 text-red-400 border-red-500/30",
    };
    return colors[color] || colors.blue;
  };

  return (
    <motion.div
      className="bg-white/30 dark:bg-slate-900/80 backdrop-blur-sm shadow-2xl border border-slate-300/50 dark:border-slate-700/50 rounded-xl p-6"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <h3 className="text-black dark:text-slate-100 font-semibold text-xl mb-6">
        Recent Activity
      </h3>

      {/* Activity timeline */}
      <div className="space-y-4">
        {activities.map((activity, index) => {
          const Icon = getIcon(activity.icon);

          return (
            <motion.div
              key={activity.id}
              className="flex gap-4"
              variants={itemVariants}
            >
              {/* Timeline dot and line */}
              <div className="flex flex-col items-center">
                {/* Icon circle */}
                <div
                  className={`w-12 h-12 rounded-full border flex items-center justify-center ${getActivityColor(
                    activity.color,
                  )} flex-shrink-0`}
                >
                  {Icon}
                </div>

                {/* Connecting line - not on last item */}
                {index < activities.length - 1 && (
                  <div className="w-0.5 h-12 bg-gradient-to-b from-slate-700/50 to-slate-800/50 my-2" />
                )}
              </div>

              {/* Activity content */}
              <div className="flex-1 pt-1">
                <div className="flex justify-between items-start gap-2">
                  <div>
                    <h4 className="text-slate-900 dark:text-slate-100 font-medium text-md">
                      {activity.title}
                    </h4>
                    <p className="text-slate-700 dark:text-slate-400 text-sm font-semibold mt-1">
                      {activity.description}
                    </p>
                  </div>
                </div>

                {/* Timestamp */}
                <p className="text-slate-700 dark:text-slate-500 font-semibold text-xs mt-2">
                  {activity.time}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* View all link */}
      <motion.button
        className="w-full mt-6 py-2 text-blue-700 dark:text-blue-400 hover:text-blue-900 dark:hover:text-blue-300 font-medium text-md transition-colors"
        whileHover={{ x: 2 }}
      >
        View all activities →
      </motion.button>
    </motion.div>
  );
};

export default ActivityFeed;
