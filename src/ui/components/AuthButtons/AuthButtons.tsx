import React from "react";
import s from "./authButtons.module.css";
import { Button } from "../../elements/Button/Button";
import { fireBaseLogout } from "../../../services/firebaseAuth";
import { useDispatch, useSelector } from "react-redux";
import { isLoading, logout, setIsLoading } from "../../../store/auth/authSlice";
import Preloader from "../../elements/Preloader/Preloader";
import { useNavigate } from "react-router-dom";

export const AuthButtons = () => {
  const dispatch = useDispatch();
  const isLoad = useSelector(isLoading);
  const navigate = useNavigate();

  const logoutHandler = async () => {
    dispatch(setIsLoading(true));
    await fireBaseLogout();
    dispatch(logout());
    dispatch(setIsLoading(false));
  };

  const historyHandler = () => {
    navigate("/history");
  };

  const favoritesHandler = () => {
    navigate("/favorites");
  };

  return (
    <div className={s.buttons}>
      <Button variant="blue" onClick={historyHandler}>
        История
      </Button>
      <Button variant="blue" onClick={favoritesHandler}>
        Избранное
      </Button>
      <Button variant="green" onClick={logoutHandler}>
        {isLoad ? <Preloader /> : "Выход"}
      </Button>
    </div>
  );
};
