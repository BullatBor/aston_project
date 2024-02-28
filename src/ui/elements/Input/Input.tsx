import React, { LegacyRef } from "react";
import cn from "classnames";
import s from "./input.module.css";

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
  return (
    <div className={s.inputContainer}>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={cn(s.input, className)}
        ref={inputRef}
        onFocus={onFocus}
      />
    </div>
  );
};
