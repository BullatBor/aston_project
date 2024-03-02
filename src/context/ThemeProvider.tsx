import { FC, useState } from "react";
import { AppThemeContext } from "./ThemeContext";

interface ThemeProviderProps {
  children: JSX.Element;
}

type Theme = "light" | "dark";

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<Theme>("dark");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <AppThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </AppThemeContext.Provider>
  );
};
