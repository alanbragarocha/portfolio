import React, { useState, useEffect } from "react";
import "./styles/ThemeToggle.css";

function ThemeToggle({ className = "" }) {
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setIsDarkTheme(savedTheme === "dark");
      document.documentElement.setAttribute("data-theme", savedTheme);
    } else {
      document.documentElement.setAttribute("data-theme", "dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = isDarkTheme ? "light" : "dark";
    setIsDarkTheme(!isDarkTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return React.createElement(
    "button",
    {
      className: `theme-toggle ${className}`,
      "aria-label": "Alternar tema",
      onClick: toggleTheme,
    },
    React.createElement("img", {
      src: isDarkTheme ? "/images/sun.svg" : "/images/moon.svg",
      alt: isDarkTheme ? "Modo claro" : "Modo escuro",
      className: "theme-icon",
    })
  );
}

export default ThemeToggle;
