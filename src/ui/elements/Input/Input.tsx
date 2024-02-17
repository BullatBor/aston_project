import React from "react";
import cn from "classnames";
import s from "./input.module.css";

interface InputProps {
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  placeholder?: string;
  type?: string;
  name?: string;
}

export const Input = ({
  value,
  onChange,
  className,
  type,
  placeholder,
  name,
}: InputProps) => {
  return (
    <div className={s.inputContainer}>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={cn(s.input, className)}
      />
    </div>
  );
};
