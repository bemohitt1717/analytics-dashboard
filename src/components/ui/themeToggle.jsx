import { Around } from "@theme-toggles/react";
import "@theme-toggles/react/styles/around.css";
import { useTheme } from "../../context/ThemeContext";

const ThemeToggle = () => {
  const { currentTheme, toggleTheme } = useTheme();
  const isDark = currentTheme === "dark";

  return (
    <Around
      onClick={toggleTheme}
      duration={750}
      title={`Switch to ${isDark ? "light" : "dark"} theme`}
      aria-label={`Switch to ${isDark ? "light" : "dark"} theme`}
      className="text-2xl cursor-pointer text-blue-800 transition-colors hover:text-slate-800 dark:text-yellow-400 dark:hover:text-slate-200"
    />
  );
};

export default ThemeToggle;
