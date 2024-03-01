import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import AuthForm from "../../ui/components/AuthForm/AuthForm";
import s from "./signIn.module.css";

const SignIn = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const onSubmitLogin = async (email: string, password: string) => {
    if (await login(email, password)) {
      navigate("/");
    }
  };
  return (
    <div className={s.signForm}>
      <AuthForm headerTitle="Авторизация" onSubmit={onSubmitLogin} />
    </div>
  );
};

export default SignIn;
