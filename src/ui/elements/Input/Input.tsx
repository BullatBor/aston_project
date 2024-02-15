import React from "react";
import cn from "classnames";
import s from "./input.module.css";

interface InputProps {
  value?: string;
  onChange?: () => void;
  className?: string;
  placeholder?: string;
}

export const Input = ({ value, onChange, className }: InputProps) => {
  return (
    <div className={s.inputContainer}>
      <input
        value={value}
        onChange={onChange}
        className={cn(s.input, className)}
      />
    </div>
  );
};
