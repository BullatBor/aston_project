import React from "react";
import s from "./errorText.module.css";
import errorImg from "../../../assets/icons/BoundaryImage.jpg";

export const ErrorText = () => {
  return (
    <div className={s.wrapper}>
      <div>Что то пошло не так... </div>
      <img src={errorImg} alt="error" />
    </div>
  );
};
