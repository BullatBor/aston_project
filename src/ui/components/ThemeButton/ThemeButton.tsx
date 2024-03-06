import React from "react";
import { useTheme } from "../../../context/ThemeContext";
import { Button } from "../../elements/Button/Button";
import darkTheme from "../../../assets/icons/darkTheme.png";
import lightTheme from "../../../assets/icons/lightTheme.png";
import s from "./themeButton.module.css";
import cn from "classnames";

export const ThemeButton = () => {
  const { theme, toggleTheme } = useTheme();

  const themeHandler = () => {
    if (theme === "light") {
      toggleTheme("dark");
    } else {
      toggleTheme("light");
    }
  };
  return (
    <Button
      variant="blue"
      onClick={themeHandler}
      className={cn(s.btn, {
        [s.light]: theme === "light",
        [s.dark]: theme === "dark",
      })}
    >
      {theme === "light" ? (
        <img src={lightTheme} alt="lightTheme" />
      ) : (
        <img src={darkTheme} alt="darkTheme" />
      )}
    </Button>
  );
};
