import React, { useState, useMemo, createContext, useEffect } from "react";

interface ThemeInterface {
  toggleTheme: () => void;
  theme: string | null;
  isThemeLight: boolean;
}

interface ThemeProviderProps {
  children: React.ReactNode;
}

const defaultTheme: ThemeInterface = {
  toggleTheme: () => {},
  theme: "light",
  isThemeLight: true,
};

export const ThemeContext = createContext<ThemeInterface>(defaultTheme);

/**
 * Context provider to provide app level state for the theme
 */
export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  // Set initial color state
  const [mode, setMode] = useState("light");

  useEffect(() => {
    const _mode = localStorage.theme
      ? localStorage.theme
      : window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";

    setMode(_mode);
    localStorage.theme = _mode === "light" ? "light" : "dark";
    _mode === "dark"
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");
  }, []);

  const theme: ThemeInterface = useMemo(
    () => ({
      toggleTheme: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
        localStorage.theme = mode === "light" ? "dark" : "light";
        mode === "light"
          ? document.documentElement.classList.add("dark")
          : document.documentElement.classList.remove("dark");
      },
      theme: mode,
      isThemeLight: mode === "light" ? true : false,
    }),
    [mode]
  );

  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};
