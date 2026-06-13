/**
 * Dummy analytics data for the dashboard
 * In production, this would come from an API
 */

// Main KPI metrics cards data

import { Frown } from "lucide-react";
import {GifPath} from "../path/gifpath";
import sidebarLogo from "../assets/img/letter-d.png";

export const kpiMetrics = [
  {
    id: 1,
    title: "Total Revenue",
    value: "₹12.5L",
    change: "+12.5%",
    isPositive: true,
    icon: "DollarSign",
    bgColor: "from-blue-500/10 to-blue-600/10",
    borderColor: "border-blue-500/30",
  },
  {
    id: 2,
    title: "Active Users",
    value: "₹2,543",
    change: "+8.2%",
    isPositive: true,
    icon: "Users",
    bgColor: "from-yellow-500/10 to-yellow-600/10",
    borderColor: "border-yellow-500/30",
  },
  {
    id: 3,
    title: "Sales Growth",
    value: "₹24.5%",
    change: "-2.1%",
    isPositive: false,
    icon: "TrendingUp",
    bgColor: "from-emerald-500/10 to-emerald-600/10",
    borderColor: "border-emerald-500/30",
  },
  {
    id: 4,
    title: "Conversion Rate",
    value: "₹3.24%",
    change: "+1.3%",
    isPositive: true,
    icon: "BarChart3",
    bgColor: "from-purple-500/10 to-purple-600/10",
    borderColor: "border-purple-500/30",
  },
];

// Revenue chart data - for line and area charts
export const revenueData = [
  { name: "Jan", revenue: 4000, target: 4500 },
  { name: "Feb", revenue: 3000, target: 4000 },
  { name: "Mar", revenue: 2000, target: 3500 },
  { name: "Apr", revenue: 2780, target: 4200 },
  { name: "May", revenue: 1890, target: 3800 },
  { name: "Jun", revenue: 2390, target: 4100 },
  { name: "Jul", revenue: 3490, target: 4600 },
];

// Sales performance data - for bar chart
export const salesPerformanceData = [
  { name: "Product A", sales: 4000, revenue: 2400 },
  { name: "Product B", sales: 3000, revenue: 1398 },
  { name: "Product C", sales: 2000, revenue: 9800 },
  { name: "Product D", sales: 2780, revenue: 3908 },
  { name: "Product E", sales: 1890, revenue: 4800 },
];

// User growth data - for area chart
export const userGrowthData = [
  { month: "Week 1", users: 400, activeUsers: 240 },
  { month: "Week 2", users: 600, activeUsers: 421 },
  { month: "Week 3", users: 800, activeUsers: 590 },
  { month: "Week 4", users: 1000, activeUsers: 800 },
  { month: "Week 5", users: 1200, activeUsers: 950 },
  { month: "Week 6", users: 1500, activeUsers: 1200 },
];

// Category distribution data - for pie chart
export const categoryData = [
  { name: "Premium", value: 45 },
  { name: "Standard", value: 30 },
  { name: "Basic", value: 15 },
  { name: "Enterprise", value: 10 },
];

// Recent transactions data - for table
export const recentTransactions = [
  {
    id: 1,
    name: "Mohit Sharma",
    email: "mohit.sharma@payflow.in",
    amount: "₹24,500",
    status: "Completed",
    date: "2026-05-18",
    avatar: "MS",
  },
  {
    id: 2,
    name: "Priya Verma",
    email: "priya.verma@zylotech.in",
    amount: "₹18,900",
    status: "Pending",
    date: "2026-05-17",
    avatar: "PV",
  },
  {
    id: 3,
    name: "Rahul Mehta",
    email: "rahul.mehta@finverse.in",
    amount: "₹32,000",
    status: "Completed",
    date: "2026-05-16",
    avatar: "RM",
  },
  {
    id: 4,
    name: "Ananya Kapoor",
    email: "ananya.kapoor@cloudex.in",
    amount: "₹9,500",
    status: "Failed",
    date: "2026-05-15",
    avatar: "AK",
  },
  {
    id: 5,
    name: "Arjun Singh",
    email: "arjun.singh@novatech.in",
    amount: "₹41,000",
    status: "Completed",
    date: "2026-05-14",
    avatar: "AS",
  },
  {
    id: 6,
    name: "Sneha Reddy",
    email: "sneha.reddy@bytegrid.in",
    amount: "₹7,800",
    status: "Pending",
    date: "2026-05-13",
    avatar: "SR",
  },
  {
    id: 7,
    name: "Karan Malhotra",
    email: "karan.malhotra@nextedge.in",
    amount: "₹56,000",
    status: "Completed",
    date: "2026-05-12",
    avatar: "KM",
  },
  {
    id: 8,
    name: "Isha Nair",
    email: "isha.nair@techsphere.in",
    amount: "₹12,400",
    status: "Failed",
    date: "2026-05-11",
    avatar: "IN",
  },
];
// Sidebar navigation menu items
export const navMenuItems = [
  { id: 1, name: "Dashboard", icon: GifPath.dashboardGif },
  { id: 2, name: "Analytics", icon: GifPath.analyticGif  },
  { id: 3, name: "Revenue", icon: GifPath.revenueGif  },
  { id: 4, name: "Customers", icon: GifPath.customerGif },
  { id: 5, name: "Projects", icon: GifPath.projectGif },
  { id: 6, name: "Messages", icon: GifPath.messageGif },
  { id: 7, name: "Calendar", icon: GifPath.calendarGif },
  { id: 8, name: "Settings", icon: GifPath.settingsGif },
];

// Recent activity/notifications
// Activity Feed
export const activityFeed = [
  {
    id: 1,
    title: "New payment received",
    description: "₹24,500 payment from Rahul Mehta",
    time: "5 minutes ago",
    icon: "ShoppingCart",
    color: "blue",
  },
  {
    id: 2,
    title: "Subscription upgraded",
    description: "Priya Verma upgraded to Pro plan",
    time: "25 minutes ago",
    icon: "CreditCard",
    color: "yellow",
  },
  {
    id: 3,
    title: "New team member joined",
    description: "Ananya Kapoor joined marketing team",
    time: "1 hour ago",
    icon: "UserPlus",
    color: "green",
  },
  {
    id: 4,
    title: "Analytics report generated",
    description: "Monthly business report is ready",
    time: "3 hours ago",
    icon: "RefreshCw",
    color: "purple",
  },
];
// Team Members
export const teamMembers = [
  {
    id: 1,
    name: "Mohit Sharma",
    role: "Frontend Developer",
    avatar: "MS",
    status: "online",
  },
  {
    id: 2,
    name: "Priya Verma",
    role: "UI/UX Designer",
    avatar: "PV",
    status: "online",
  },
  {
    id: 3,
    name: "Rahul Mehta",
    role: "Backend Developer",
    avatar: "RM",
    status: "offline",
  },
  {
    id: 4,
    name: "Sneha Reddy",
    role: "Marketing Lead",
    avatar: "SR",
    status: "online",
  },
];
// Notification/dropdown menu items
export const notificationItems = [
  {
    id: 1,
    title: "New payment received from Arjun Singh",
    time: "2 min ago",
    read: false,
  },
  {
    id: 2,
    title: "Dashboard analytics report generated",
    time: "15 min ago",
    read: false,
  },
  {
    id: 3,
    title: "System maintenance scheduled tonight",
    time: "1 hour ago",
    read: true,
  },
];
// User menu items in navbar
export const userMenuItems = [
  { id: 1, label: "Profile", icon: "User" },
  { id: 2, label: "Settings", icon: "Settings" },
  { id: 3, label: "Help", icon: "HelpCircle" },
  { id: 4, label: "Logout", icon: "LogOut" },
];

export const SidebarLogo = {
sidebarLogo
}