/**
 * Main App component - Dashboard page
 * This is the main dashboard with all components integrated
 */

import React from "react";
import { motion } from "framer-motion";
import Layout from "../components/layout/Layout";
import KPICard from "../components/cards/KPICard";
import {
  RevenueLineChart,
  UserGrowthAreaChart,
  SalesBarChart,
  CategoryPieChart,
} from "../components/charts/Charts";
import DataTable from "../components/tables/DataTable";
import ActivityFeed from "../components/activity/ActivityFeed";
import TeamMembers from "../components/cards/TeamMembers";
import {
  NotificationSettings,
  SecuritySettings,
} from "../components/cards/SettingsCard";

import {
  kpiMetrics,
  revenueData,
  userGrowthData,
  salesPerformanceData,
  categoryData,
  recentTransactions,
  activityFeed,
  teamMembers,
} from "../data/analytics";

import { containerVariants, itemVariants } from "../animations/motionVariants";

export const Dashboard = () => {
  const transactionColumns = [
    { key: "name", label: "Name" },
    { key: "email", label: "Email" },
    { key: "amount", label: "Amount" },
    { key: "status", label: "Status" },
    { key: "date", label: "Date" },
  ];

  return (
    <Layout>
      {/* Page title and header */}
      <motion.div
        className="mb-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <h1 className="text-3xl font-bold text-slate-950 dark:text-slate-100 mb-2">
          Dashboard
        </h1>
        <p className="text-slate-800 dark:text-slate-300 font-semibold md:text-lg text-sm">
          Welcome back! Here's your analytics overview.
        </p>
      </motion.div>

      {/* KPI Cards Section - Grid layout for responsive */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {kpiMetrics.map((metric) => (
          <motion.div key={metric.id} variants={itemVariants}>
            <KPICard
              title={metric.title}
              value={metric.value}
              change={metric.change}
              isPositive={metric.isPositive}
              icon={metric.icon}
              bgColor={metric.bgColor}
              borderColor={metric.borderColor}
            />
          </motion.div>
        ))}
      </motion.div>

      {/* Charts Section - 2 columns on desktop */}
      <motion.div
        className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants}>
          <RevenueLineChart data={revenueData} />
        </motion.div>
        <motion.div variants={itemVariants}>
          <UserGrowthAreaChart data={userGrowthData} />
        </motion.div>
      </motion.div>

      {/* Secondary Charts - Sales & Distribution */}
      <motion.div
        className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants}>
          <SalesBarChart data={salesPerformanceData} />
        </motion.div>
        <motion.div variants={itemVariants}>
          <CategoryPieChart data={categoryData} />
        </motion.div>
      </motion.div>

      {/* Data Table - Recent Transactions */}
      <motion.div className="mb-8" variants={itemVariants}>
        <DataTable
          data={recentTransactions}
          columns={transactionColumns}
          title="Recent Transactions"
        />
      </motion.div>

      {/* Bottom section - Activity, Team, Settings */}
      <motion.div
        className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Activity Feed */}
        <motion.div className="lg:col-span-1" variants={itemVariants}>
          <ActivityFeed activities={activityFeed} />
        </motion.div>

        {/* Team Members */}
        <motion.div className="lg:col-span-2" variants={itemVariants}>
          <TeamMembers members={teamMembers} />
        </motion.div>
      </motion.div>

      {/* Settings Section - Full width */}
      <motion.div
        className="grid grid-cols-1 lg:grid-cols-2 gap-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants}>
          <NotificationSettings />
        </motion.div>
        <motion.div variants={itemVariants}>
          <SecuritySettings />
        </motion.div>
      </motion.div>
    </Layout>
  );
};
