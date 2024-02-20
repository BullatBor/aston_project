import React from "react";
import cn from "classnames";
import s from "./button.module.css";
import PropTypes from "prop-types";

interface ButtonProps {
  children?: React.ReactNode;
  onClick?: () => void;
  className?: string;
  variant: "green" | "red" | "blue";
  type?: "button" | "submit" | "reset" | undefined;
  disabled?: boolean;
}

const Button = ({
  children,
  onClick,
  className,
  variant,
  type = undefined,
  disabled = false,
}: ButtonProps) => {
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

Button.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
  variant: PropTypes.oneOf(["green", "red", "blue"]).isRequired,
  type: PropTypes.oneOf(["button", "submit", "reset", undefined]),
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  type: undefined,
  disabled: false,
};

export default Button;
