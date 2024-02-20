import React from "react";
import s from "./authLinks.module.css";
import { Link } from "react-router-dom";

export const AuthLinks = () => {
  return (
    <>
      <div className={s.authLink}>
        <Link to={"/signIn"}>Sign in</Link>
      </div>
      <div className={s.authLink}>
        <Link to={"/signUp"}>Sign up</Link>
      </div>
    </>
  );
};
