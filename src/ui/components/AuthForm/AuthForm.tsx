import { useFormik } from "formik";
import React from "react";
import { Input } from "../../elements/Input/Input";
import s from "./authForm.module.css";

interface AuthFormProps {
  headerTitle: string;
  onSubmit: (email: string, password: string) => void;
}

export const AuthForm = ({ onSubmit, headerTitle }: AuthFormProps) => {
  const formik = useFormik({
    initialValues: {
      email: "segseg",
      password: "ssg",
    },
    onSubmit: (values) => {
      onSubmit(values.email, values.password);
    },
  });
  return (
    <div className={s.main}>
      <div className={s.headerTitle}>
        <span>{headerTitle}</span>
      </div>
      <form onSubmit={formik.handleSubmit} className={s.form}>
        <div className={s.inputs}>
          <div className={s.element}>
            <span>Почта</span>
            <Input
              name="email"
              type="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              placeholder={"email"}
            />
          </div>
          <div className={s.element}>
            <span>Пароль</span>
            <Input
              name="password"
              type="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              placeholder={"password"}
            />
          </div>
        </div>
      </form>
    </div>
  );
};
