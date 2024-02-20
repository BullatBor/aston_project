import React from "react";
import { useSelector } from "react-redux";
import { isAuth } from "../store/auth/authSlice";

interface withAuthProps {
  Component: JSX.Element;
  UnauthorizedComponent: JSX.Element;
}

const withAuthorization = ({
  Component,
  UnauthorizedComponent,
}: withAuthProps) => {
  const AuthorizationComponent = () => {
    const isLoggedIn = useSelector(isAuth);

    return isLoggedIn ? Component : UnauthorizedComponent;
  };

  return AuthorizationComponent;
};

export default withAuthorization;
