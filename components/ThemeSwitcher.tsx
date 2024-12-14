"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaSun, FaMoon, FaPalette } from "react-icons/fa";

export default function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <motion.div
      className="fixed bottom-4 right-4 bg-card p-2 rounded-full shadow-lg theme-switch"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex space-x-2">
        <button
          onClick={() => setTheme("light")}
          className={`p-2 rounded-full ${
            theme === "light" ? "bg-yellow-400" : "bg-secondary"
          }`}
          aria-label="Switch to light theme"
        >
          <FaSun className="text-card-foreground" />
        </button>
        <button
          onClick={() => setTheme("dark")}
          className={`p-2 rounded-full ${
            theme === "dark" ? "bg-blue-600" : "bg-secondary"
          }`}
          aria-label="Switch to dark theme"
        >
          <FaMoon className="text-card-foreground" />
        </button>
        <button
          onClick={() => setTheme("custom")}
          className={`p-2 rounded-full ${
            theme === "custom" ? "bg-purple-600" : "bg-secondary"
          }`}
          aria-label="Switch to custom theme"
        >
          <FaPalette className="text-card-foreground" />
        </button>
      </div>
    </motion.div>
  );
}
