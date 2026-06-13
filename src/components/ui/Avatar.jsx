/**
 * Avatar component - For user profile pictures
 */

import React from "react";
import { getAvatarColor, getInitials } from "../../utils/helpers";

const Avatar = ({ name, size = "md" }) => {
  const sizes = {
    sm: "w-8 h-8 text-xs",
    md: "w-10 h-10 text-sm",
    lg: "w-12 h-12 text-base",
  };

  const statusIndicator = {
    sm: "w-2.5 h-2.5",
    md: "w-3 h-3",
    lg: "w-4 h-4",
  };

  return (
    <div className="relative inline-block">
      <div
        className={`
          flex items-center justify-center rounded-full font-semibold
          bg-gradient-to-br text-white
          ${sizes[size]}
          ${getAvatarColor(Math.floor(Math.random() * 5))}
        `}
      >
        {getInitials(name)}
      </div>
      {/* Green online indicator dot */}
      <div
        className={`
          absolute bottom-0 right-0 rounded-full
          bg-emerald-400 border-2 border-white dark:border-slate-900
          ${statusIndicator[size]}
        `}
      />
    </div>
  );
};

export default Avatar;
