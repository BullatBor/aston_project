import React from "react";
import cn from "classnames";
import s from "./button.module.css";

interface InputProps {
  children?: React.ReactNode;
  onClick?: () => void;
  className?: string;
  variant: "green" | "red" | "blue";
}

export const Button = ({
  children,
  onClick,
  className,
  variant,
}: InputProps) => {
  return (
    <div className={s.buttonContainer}>
      <button
        onClick={onClick}
        className={cn(s.button, className, {
          [s.green]: variant === "green",
          [s.red]: variant === "red",
          [s.blue]: variant === "blue",
        })}
      >
        {children}
      </button>
    </div>
  );
};
