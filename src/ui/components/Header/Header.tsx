import React from "react";
import s from "./Header.module.css";
import { Link } from "react-router-dom";
import { AuthLinks } from "../AuthLinks/AuthLinks";
import { AuthButtons } from "../AuthButtons/AuthButtons";
import { isAuth } from "../../../store/auth/authSlice";
import { useSelector } from "react-redux";
import logo from "../../../assets/icons/logo.jpg";
import { Search } from "../Search/Search";

export const Header = () => {
  const isLogged = useSelector(isAuth);
  return (
    <div className={s.header}>
      <div className={s.leftPart}>
        <Link to={"*"}>
          <div className={s.logo}>
            <img src={logo} alt="poster" />
          </div>
        </Link>
        {isLogged && <Search />}
      </div>
      <div className={s.auth}>{isLogged ? <AuthButtons /> : <AuthLinks />}</div>
    </div>
  );
};
