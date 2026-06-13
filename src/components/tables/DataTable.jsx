/**
 * Table component - Responsive data table
 * Features: Sorting, pagination, hover effects, responsive
 */

import React, { useState } from "react";
import { motion } from "framer-motion";
import * as LucideIcons from "lucide-react";
import Badge from "../ui/Badge";
import Avatar from "../ui/Avatar";
import { getStatusColor } from "../../utils/helpers";
import {
  containerVariants,
  itemVariants,
} from "../../animations/motionVariants";

const DataTable = ({ data, columns, title }) => {
  const [sortConfig, setSortConfig] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Sort data based on column
  const getSortedData = () => {
    let sorted = [...data];

    if (sortConfig) {
      sorted.sort((a, b) => {
        const aValue = a[sortConfig.key];
        const bValue = b[sortConfig.key];

        if (typeof aValue === "string") {
          return sortConfig.direction === "asc"
            ? aValue.localeCompare(bValue)
            : bValue.localeCompare(aValue);
        }
        return sortConfig.direction === "asc"
          ? aValue - bValue
          : bValue - aValue;
      });
    }

    return sorted;
  };

  const sortedData = getSortedData();
  const totalPages = Math.ceil(sortedData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedData = sortedData.slice(startIndex, startIndex + itemsPerPage);

  // Handle column sort
  const handleSort = (key) => {
    setSortConfig({
      key,
      direction:
        sortConfig?.key === key && sortConfig?.direction === "asc"
          ? "desc"
          : "asc",
    });
  };

  // Render cell value based on type
  const renderCellValue = (value, key) => {
    if (key === "avatar") {
      return <Avatar name={value} size="md" />;
    }
    if (key === "status") {
      return <Badge variant={value.toLowerCase()}>{value}</Badge>;
    }
    return value;
  };

  return (
    <motion.div
      className="bg-white/60 dark:bg-slate-900/80 backdrop-blur-xl border border-slate-300/50 dark:border-slate-700/50 shadow-2xl rounded-xl overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Table header */}
      <div className="px-6 py-4 border-b border-slate-700/50 dark:border-slate-600/50">
        <h3 className="text-black dark:text-slate-100 font-semibold text-xl">
          {title}
        </h3>
      </div>

      {/* Table wrapper - responsive overflow */}
      <div className="overflow-x-auto">
        <table className="w-full">
          {/* Table head */}
          <thead>
            <tr className="border-b border-slate-300/50 dark:border-slate-700/50 shadow-2xl bg-white/35 dark:bg-slate-800/50">
              {columns.map((column) => (
                <th
                  key={column.key}
                  className="px-6 py-3 text-left cursor-pointer hover:bg-slate-300/50 dark:hover:bg-slate-700/50 transition-colors"
                  onClick={() => handleSort(column.key)}
                >
                  <div className="flex items-center gap-2 text-slate-900 dark:text-slate-100 font-semibold text-md">
                    <span>{column.label}</span>
                    {/* Sort indicator */}
                    {sortConfig?.key === column.key && (
                      <motion.div
                        animate={{
                          rotate: sortConfig.direction === "asc" ? 0 : 180,
                        }}
                        transition={{ duration: 0.2 }}
                      >
                        {sortConfig.direction === "asc" ? (
                          <LucideIcons.ArrowUp
                            size={16}
                            className="text-blue-400"
                          />
                        ) : (
                          <LucideIcons.ArrowDown
                            size={16}
                            className="text-blue-400"
                          />
                        )}
                      </motion.div>
                    )}
                  </div>
                </th>
              ))}
            </tr>
          </thead>

          {/* Table body */}
          <tbody>
            {paginatedData.map((row, rowIndex) => (
              <motion.tr
                key={rowIndex}
                className="border-b border-slate-300/30 dark:border-slate-700/30 hover:bg-slate-300/50 dark:hover:bg-slate-700/50 shadow-2xltransition-colors"
                variants={itemVariants}
              >
                {columns.map((column) => (
                  <td key={column.key} className="px-6 py-4">
                    <div className="text-slate-800 dark:text-slate-200 text-sm">
                      {renderCellValue(row[column.key], column.key)}
                    </div>
                  </td>
                ))}
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="px-6 py-4 border-t border-slate-700/50 dark:border-slate-600/50 flex items-center justify-between">
        <p className="text-slate-800 dark:text-slate-200 text-md font-semibold">
          Page {currentPage} of {totalPages}
        </p>

        <div className="flex gap-2">
          <motion.button
            onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
            disabled={currentPage === 1}
            className="p-2 hover:bg-slate-300/50 dark:hover:bg-slate-700/50 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <LucideIcons.ChevronLeft
              size={18}
              className="text-slate-700 dark:text-slate-300"
            />
          </motion.button>

          {[...Array(totalPages)].map((_, i) => (
            <motion.button
              key={i + 1}
              onClick={() => setCurrentPage(i + 1)}
              className={`px-3 py-1 rounded-lg text-sm font-medium transition-colors ${
                currentPage === i + 1
                  ? "bg-blue-400 text-white dark:bg-blue-600"
                  : "text-slate-700 dark:text-slate-200 hover:bg-slate-300/50 dark:hover:bg-slate-700/50"
              }`}
              whileHover={{ scale: 1.05 }}
            >
              {i + 1}
            </motion.button>
          ))}

          <motion.button
            onClick={() =>
              setCurrentPage(Math.min(totalPages, currentPage + 1))
            }
            disabled={currentPage === totalPages}
            className="p-2 hover:bg-slate-300/50 dark:hover:bg-slate-700/50 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <LucideIcons.ChevronRight
              size={18}
              className="text-slate-800 dark:text-slate-300"
            />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default DataTable;
