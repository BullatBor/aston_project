import React from "react";
import cn from "classnames";
import s from "./button.module.css";

interface InputProps {
  children?: React.ReactNode;
  onClick?: () => void;
  className?: string;
  variant: "green" | "red" | "blue";
  type?: "button" | "submit" | "reset" | undefined;
  disabled?: boolean;
}

export const Button = ({
  children,
  onClick,
  className,
  variant,
  type = undefined,
  disabled = false,
}: InputProps) => {
  return (
    <div className={s.buttonContainer}>
      <button
        type={type}
        onClick={onClick}
        disabled={disabled}
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
