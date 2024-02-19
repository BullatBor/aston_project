import { doc, getDoc } from "firebase/firestore";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fireBaseLogin } from "../../services/firebaseAuth";
import { setIsLoading, setUser } from "../../store/auth/authSlice";
import { AuthForm } from "../../ui/components/AuthForm/AuthForm";
import s from "./signIn.module.css";

export const SignIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onSubmitLogin = async (email: string, password: string) => {
    dispatch(setIsLoading(true));
    const user = await fireBaseLogin(email, password);
    if (user) {
      dispatch(setUser(user));
      navigate("/");
    }
    dispatch(setIsLoading(false));
  };
  return (
    <div className={s.signForm}>
      <AuthForm headerTitle="Авторизация" onSubmit={onSubmitLogin} />
    </div>
  );
};
