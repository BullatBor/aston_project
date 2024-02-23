import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fireBaseRegister } from "../../services/firebaseAuth";
import { setIsLoading, setUser } from "../../store/auth/authSlice";
import AuthForm from "../../ui/components/AuthForm/AuthForm";
import s from "./signUp.module.css";

export const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onSubmitRegistr = async (email: string, password: string) => {
    dispatch(setIsLoading(true));
    const user = await fireBaseRegister(email, password);
    if (user) {
      dispatch(setUser(user));
      dispatch(setIsLoading(false));
      navigate("/");
    }
  };
  return (
    <div className={s.signForm}>
      <AuthForm headerTitle="Регистрация" onSubmit={onSubmitRegistr} />
    </div>
  );
};