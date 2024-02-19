import React from "react";
import { useSelector } from "react-redux";
import { isAuth } from "../store/auth/authSlice";

interface withAuthProps {
  Component: JSX.Element
  UnAuthorizedComponent: JSX.Element,
}

const withAuthorization = ({
  Component,
  UnAuthorizedComponent}: withAuthProps
) => {
  const AuthorizationComponent = () => {
    const isLoggedIn = useSelector(isAuth);

    return isLoggedIn ? Component : UnAuthorizedComponent;
  };

  return AuthorizationComponent;
};

export default withAuthorization;
