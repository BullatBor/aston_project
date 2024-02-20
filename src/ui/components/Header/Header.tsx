import React from "react";
import { Input } from "../../elements/Input/Input";
import s from "./Header.module.css";
import { Link } from "react-router-dom";
import withAuthorization from "../../../hoc/withAuthComponents";
import { AuthLinks } from "../AuthLinks/AuthLinks";
import { AuthButtons } from "../AuthButtons/AuthButtons";

export const Header = () => {
  const AuthComponents = withAuthorization(<AuthButtons />, <AuthLinks />);
  const SearchInput = withAuthorization(<Input placeholder="Поиск" />, <></>);
  return (
    <div className={s.header}>
      <div className={s.leftPart}>
        <Link to={"*"}>
          <div className={s.logo}>Logo</div>
        </Link>
        <SearchInput />
      </div>
      <div className={s.auth}>
        <AuthComponents />
      </div>
    </div>
  );
};

const Test = () => {
  return (
    <>
      {" "}
      <div className={s.authLink}>
        <Link to={"/signIn"}>Sign in</Link>
      </div>
      <div className={s.authLink}>
        <Link to={"/signUp"}>Sign up</Link>
      </div>
    </>
  );
};
