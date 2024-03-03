import React, { FC } from "react";
import { useTheme } from "../../../context/ThemeContext";
import s from "./emptyTitle.module.css";
import cn from "classnames";

interface EmptyTitleProps {
  title: string;
  classNames?: string;
}

export const EmptyTitle: FC<EmptyTitleProps> = ({ title, classNames }) => {
  const { theme } = useTheme();
  return (
    <div
      className={cn(s.empty, classNames, {
        [s.dark]: theme === "dark",
        [s.light]: theme === "light",
      })}
    >
      {title}
    </div>
  );
};
