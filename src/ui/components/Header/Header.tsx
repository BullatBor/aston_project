import React from "react";
import { Input } from "../../elements/Input/Input";
import s from "./Header.module.css";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div className={s.header}>
      <div className={s.leftPart}>
        <Link to={""}>
          <div className={s.logo}>Logo</div>
        </Link>
        <Input />
      </div>
      <div className={s.auth}>
        <div className={s.authLink}>
          <Link to={"/signIn"}>Sign in</Link>
        </div>
        <div className={s.authLink}>
          <Link to={"/signUp"}>Sign up</Link>
        </div>
      </div>
    </div>
  );
};
