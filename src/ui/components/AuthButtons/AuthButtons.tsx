import React from "react";
import s from "./authButtons.module.css";
import { Button } from "../../elements/Button/Button";

export const AuthButtons = () => {
  return (
    <div className={s.buttons}>
      <Button variant="blue">История</Button>
      <Button variant="blue">Избранное</Button>
      <Button variant="green">Выход</Button>
    </div>
  );
};
