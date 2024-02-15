import React from "react";
import { Input } from "../../elements/Input/Input";
import s from "./Header.module.css";

export const Header = () => {
  return (
    <div className={s.header}>
      <div className={s.leftPart}>
        <div className={s.logo}>Logo</div>
        <Input />
      </div>
      <div className={s.auth}>
        <div className={s.authLink}>Sign in</div>
        <div className={s.authLink}>Sign up</div>
      </div>
    </div>
  );
};
