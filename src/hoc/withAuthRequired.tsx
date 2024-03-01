import React, { FC } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { isAuth, signStatus } from "../store/auth/authSlice";
import Preloader from "../ui/elements/Preloader/Preloader";

interface withAuthProps {
  children: JSX.Element;
}

const WithAuthRequired: FC<withAuthProps> = ({ children }) => {
  const isLogged = useSelector(isAuth);
  const signInStatus = useSelector(signStatus);

  if (signInStatus === "pending") {
    return <Preloader />;
  }

  if (isLogged && signInStatus === "success") {
    return children;
  }

  return <Navigate to={"/signIn"} replace={true} />;
};

export default WithAuthRequired;
