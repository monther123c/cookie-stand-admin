"use client";
import { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

export default function ThemeWrapper({ children }) {
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  const darkIcon = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
    />
    </svg>`;

  const lightIcon = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"  />
    </svg>`;

  const switchToggle = document.querySelector("#switch-toggle");

  function initialThemeHandle() {
    const isDarkThemeLocal = JSON.parse(localStorage.getItem("mode"));
    if (!isDarkThemeLocal) {
      setIsDarkTheme(false);
      document.querySelector("body").classList.remove("dark");

    }
    else {
      isDarkTheme && document.querySelector("body").classList.add("dark");

    }
  }

  function toggleThemeHandler() {
    setIsDarkTheme(!isDarkTheme);
    document.querySelector("body").classList.toggle("dark");
    localStorage.setItem('mode', JSON.stringify(!isDarkTheme))
    switchTheme();
  }
  function switchTheme() {
    if (isDarkTheme) {
      switchToggle.classList.add("bg-yellow-500", "translate-x-full");
      switchToggle.classList.remove("bg-blue-700", "-translate-x-2");
      setTimeout(() => {
        switchToggle.innerHTML = darkIcon;
      }, 250);
    } else {
      switchToggle.classList.remove("bg-yellow-500", "translate-x-full");
      switchToggle.classList.add("bg-blue-700", "-translate-x-2");
      setTimeout(() => {
        switchToggle.innerHTML = lightIcon;
      }, 250);
    }
  }
  const globalState = {
    isDarkTheme: true,
    toggleThemeHandler,
  };
  useEffect(() => initialThemeHandle());
  return (
    <ThemeContext.Provider value={globalState}>
      {children}
    </ThemeContext.Provider>
  );
}