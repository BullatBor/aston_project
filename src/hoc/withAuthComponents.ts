import React from "react";
import { useSelector } from "react-redux";
import { isAuth } from "../store/auth/authSlice";

const withAuthorization = (
  Component: JSX.Element,
  UnAuthorizedComponent: JSX.Element,
) => {
  const AuthorizationComponent = () => {
    const isLoggedIn = useSelector(isAuth);

    return isLoggedIn ? Component : UnAuthorizedComponent;
  };

  return AuthorizationComponent;
};

export default withAuthorization;
