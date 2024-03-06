import React from "react";
import cn from "classnames";
import s from "./button.module.css";
import PropTypes from "prop-types";

interface ButtonProps {
  children?: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
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
}: ButtonProps) => {
  return (
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
  );
};

Button.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  className: PropTypes.string,
  variant: PropTypes.oneOf(["green", "red", "blue"]).isRequired,
  type: PropTypes.oneOf(["button", "submit", "reset", undefined]),
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  type: undefined,
  disabled: false,
};
