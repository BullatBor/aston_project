import React from "react";
import s from "./authButtons.module.css";
import { Button } from "../../elements/Button/Button";
import { useSelector } from "react-redux";
import { isLoading } from "../../../store/auth/authSlice";
import Preloader from "../../elements/Preloader/Preloader";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../hooks/useAuth";

export const AuthButtons = () => {
  const isLoad = useSelector(isLoading);
  const navigate = useNavigate();
  const { userLogout } = useAuth();

  const logoutHandler = async () => {
    userLogout();
  };

  const historyHandler = () => {
    navigate("/history");
  };

  const favoritesHandler = () => {
    navigate("/favorites");
  };

  return (
    <div className={s.buttons}>
      <Button variant="blue" onClick={historyHandler} className={s.btn}>
        История
      </Button>
      <Button variant="blue" onClick={favoritesHandler} className={s.btn}>
        Избранное
      </Button>
      <Button variant="green" onClick={logoutHandler} className={s.btn}>
        {isLoad ? <Preloader /> : "Выход"}
      </Button>
    </div>
  );
};
