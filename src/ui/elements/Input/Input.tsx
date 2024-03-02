import React, { LegacyRef } from "react";
import cn from "classnames";
import s from "./input.module.css";
import { useTheme } from "../../../context/ThemeContext";

interface InputProps {
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  placeholder?: string;
  type?: string;
  name?: string;
  inputRef?: null | LegacyRef<HTMLInputElement>;
  onFocus: () => void;
}

export const Input = ({
  value,
  onChange,
  className,
  type,
  placeholder,
  name,
  inputRef,
  onFocus,
}: InputProps) => {
  const { theme } = useTheme();

  return (
    <div className={s.inputContainer}>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={cn(s.input, className, {
          [s.dark]: theme === "dark",
          [s.light]: theme === "light",
        })}
        ref={inputRef}
        onFocus={onFocus}
      />
    </div>
  );
};
