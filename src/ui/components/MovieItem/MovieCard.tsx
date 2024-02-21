import React from "react";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import { ICollection } from "../../../models/ICollection";
import { isAuth } from "../../../store/auth/authSlice";
import Button from "../../elements/Button/Button";
import s from "./movieCard.module.css";

const MovieCard = ({
  name,
  poster,
  shortDescription,
  year,
  rating,
  countries,
}: ICollection) => {
  const isLogged = useSelector(isAuth);

  const favoriteHandler = () => {
    if (isLogged) {
      console.log("added");
    } else {
      toast.error("Чтобы продолжить надо авторизоваться");
    }
  };
  return (
    <div className={s.wrapper}>
      <div className={s.poster}>
        <img src={poster.url} alt="poster" />
      </div>
      <div className={s.rightBlock}>
        <div className={s.descriptions}>
          <div className={s.header}>
            <span className={s.title}>Название: </span>
            <span className={s.name}>{name}</span>
          </div>
          <div className={s.header}>
            <span className={s.title}>Год:</span>
            <span className={s.value}>{year}</span>
          </div>
          <div className={s.header}>
            <span className={s.title}>Рейтинг КиноПоиска:</span>
            <span className={s.value}>{rating.kp}</span>
          </div>
          <div className={s.header}>
            <span className={s.title}>Страна:</span>
            <span className={s.value}>{countries[0].name}</span>
          </div>
          <div className={s.description}>
            <span className={s.descriptionTitle}>Краткое описание:</span>
            <span className={s.descriptionText}>{shortDescription}</span>
          </div>
        </div>
        <div className={s.buttons}>
          <Button variant="green" onClick={favoriteHandler}>
            В избранное
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
