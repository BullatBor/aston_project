import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import AuthForm from "../../ui/components/AuthForm/AuthForm";
import s from "./signUp.module.css";

const SignUp = () => {
  const { registration } = useAuth();
  const navigate = useNavigate();
  const onSubmitRegistr = async (email: string, password: string) => {
    if (await registration(email, password)) {
      navigate("/");
    }
  };
  return (
    <div className={s.signForm}>
      <AuthForm headerTitle="Регистрация" onSubmit={onSubmitRegistr} />
    </div>
  );
};

export default SignUp;
