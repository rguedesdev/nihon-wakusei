"use client";

import { useEffect, useState } from "react";
import { LuMoon, LuSun } from "react-icons/lu"; // Lucide dentro do react-icons
import "./theme-toggle.css";

function ThemeToggle() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.setAttribute("data-theme", savedTheme);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <button className={`toggle-btn ${theme}`} onClick={toggleTheme}>
      <span className="icon-wrapper">
        {theme === "light" ? (
          <LuMoon className="icon" />
        ) : (
          <LuSun className="icon" />
        )}
      </span>
    </button>
  );
}

export { ThemeToggle };
