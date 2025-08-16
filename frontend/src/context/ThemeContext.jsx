// import React, { createContext, useContext, useEffect, useState } from "react";

// const ThemeContext = createContext(null);

// export const ThemeProvider = ({ children }) => {
//   const [theme, setThemeState] = useState("light");

//   useEffect(() => {
//     // Check for saved theme preference or default to 'light'
//     const savedTheme = localStorage.getItem("foodly-theme");
//     const prefersDark = window.matchMedia(
//       "(prefers-color-scheme: dark)"
//     ).matches;

//     const initialTheme = savedTheme || (prefersDark ? "dark" : "light");
//     setThemeState(initialTheme);

//     // Apply theme to document
//     if (initialTheme === "dark") {
//       document.documentElement.classList.add("dark");
//     } else {
//       document.documentElement.classList.remove("dark");
//     }
//   }, []);

//   const setTheme = (newTheme) => {
//     setThemeState(newTheme);
//     localStorage.setItem("foodly-theme", newTheme);

//     if (newTheme === "dark") {
//       document.documentElement.classList.add("dark");
//     } else {
//       document.documentElement.classList.remove("dark");
//     }
//   };

//   const toggleTheme = () => {
//     setTheme(theme === "light" ? "dark" : "light");
//   };

//   const value = {
//     theme,
//     toggleTheme,
//     setTheme,
//   };

//   return (
//     <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
//   );
// };

// export const useTheme = () => {
//   const context = useContext(ThemeContext);
//   if (!context) {
//     throw new Error("useTheme must be used within a ThemeProvider");
//   }
//   return context;
// };
