/**
 * Team Members component - Shows team collaboration
 * Features: User avatars, status indicators, roles
 */

import React from "react";
import { motion } from "framer-motion";
import Avatar from "../ui/Avatar";
import {
  containerVariants,
  itemVariants,
} from "../../animations/motionVariants";

const TeamMembers = ({ members }) => {
  return (
    <motion.div
      className="bg-white/30 dark:bg-slate-900/80 backdrop-blur-sm border border-slate-300/50 dark:border-slate-700/50 shadow-2xl rounded-xl p-6"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <h3 className="text-black dark:text-slate-100 font-semibold text-lg mb-6">
        Team Members
      </h3>

      {/* Team grid */}
      <div className="space-y-4">
        {members.map((member) => (
          <motion.div
            key={member.id}
            className="flex items-center justify-between p-4 bg-slate-300/30 dark:bg-slate-800/50 rounded-lg hover:bg-slate-400/50 dark:hover:bg-slate-700/50 transition-colors"
            variants={itemVariants}
            whileHover={{ x: 4 }}
          >
            {/* Left side - Avatar and info */}
            <div className="flex items-center gap-4">
              <Avatar name={member.name} size="lg" />
              <div>
                <p className="text-slate-800 dark:text-slate-100 font-medium text-md">
                  {member.name}
                </p>
                <p className="text-slate-700 dark:text-slate-400 text-sm">
                  {member.role}
                </p>
              </div>
            </div>

            {/* Right side - Status */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2">
                <div
                  className={`w-2.5 h-2.5 rounded-full ${
                    member.status === "online"
                      ? "bg-emerald-600"
                      : "bg-slate-500"
                  }`}
                />
                <span className="text-slate-700 dark:text-slate-300 text-sm font-semibold capitalize">
                  {member.status}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Add team member button */}
      <motion.button
        className="w-full mt-4 py-2 text-blue-600 dark:text-blue-400 hover:text-blue-400 dark:hover:text-blue-300 font-medium text-lg transition-colors"
        whileHover={{ scale: 1.02 }}
      >
        + Add Team Member
      </motion.button>
    </motion.div>
  );
};

export default TeamMembers;
