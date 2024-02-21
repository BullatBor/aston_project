import React, { FC } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { isAuth } from "../store/auth/authSlice";

interface withAuthProps {
  children: JSX.Element;
}

const WithAuthRequired: FC<withAuthProps> = ({ children }) => {
  const isLogged = useSelector(isAuth);
  if (isLogged) return children;
  else {
    return <Navigate to={"/signIn"} replace={true} />;
  }
};

export default WithAuthRequired;
