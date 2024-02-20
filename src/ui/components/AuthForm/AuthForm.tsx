import { Field, Form, Formik } from "formik";
import React from "react";
import s from "./authForm.module.css";
import cn from "classnames";
import * as Yup from "yup";
import Button from "../../elements/Button/Button";
import { useSelector } from "react-redux";
import { isLoading } from "../../../store/auth/authSlice";
import Preloader from "../../elements/Preloader/Preloader";
import PropTypes from "prop-types";

interface AuthFormProps {
  headerTitle: string;
  onSubmit: (email: string, password: string) => void;
}
const AuthForm = ({ onSubmit, headerTitle }: AuthFormProps) => {
  const isLoad = useSelector(isLoading);

  const SignupSchema = Yup.object().shape({
    email: Yup.string().email("Неверный email").required("Обязательное поле"),
    password: Yup.string()
      .min(6, "Длина пароля 6 символов")
      .required("Обязательное поле"),
  });
  return (
    <div className={s.main}>
      <div className={s.headerTitle}>
        <span>{headerTitle}</span>
      </div>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={SignupSchema}
        onSubmit={(values) => {
          onSubmit(values.email, values.password);
        }}
      >
        {({ errors, touched }) => (
          <Form className={s.form}>
            <div className={s.inputs}>
              <div className={s.element}>
                <span>Почта</span>
                <div className={s.inputBlock}>
                  <Field
                    name="email"
                    type="email"
                    placeholder="email"
                    className={cn(s.input, {
                      [s.error]: errors.email && touched.email,
                    })}
                  />
                  {errors.email && touched.email ? (
                    <div className={s.errorText}>{errors.email}</div>
                  ) : null}
                </div>
              </div>
              <div className={s.element}>
                <span>Пароль</span>
                <div className={s.inputBlock}>
                  <Field
                    name="password"
                    type="password"
                    placeholder="password"
                    className={cn(s.input, {
                      [s.error]: errors.password && touched.password,
                    })}
                  />
                  {errors.password && touched.password ? (
                    <div className={s.errorText}>{errors.password}</div>
                  ) : null}
                </div>
              </div>
            </div>
            <div className={s.submit}>
              <Button type="submit" variant="green" disabled={isLoad}>
                {isLoad ? <Preloader /> : headerTitle}
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

AuthForm.propTypes = {
  headerTitle: PropTypes.string,
  onSubmit: PropTypes.func,
};
export default AuthForm;
