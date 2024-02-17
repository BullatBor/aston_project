import React from "react";
import { AuthForm } from "../../ui/components/AuthForm/AuthForm";
import s from "./signIn.module.css";

export const SignIn = () => {
  return (
    <div className={s.signForm}>
      <AuthForm
        headerTitle="Авторизация"
        onSubmit={(email: string, password: string) =>
          console.log(email, password)
        }
      />
    </div>
  );
};
