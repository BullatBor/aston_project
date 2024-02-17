import React from "react";
import { AuthForm } from "../../ui/components/AuthForm/AuthForm";
import s from "./signUp.module.css";

export const SignUp = () => {
  return (
    <div className={s.signForm}>
      <AuthForm
        headerTitle="Регистрация"
        onSubmit={(email: string, password: string) =>
          console.log(email, password)
        }
      />
    </div>
  );
};
