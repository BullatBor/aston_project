import React, { useState } from "react";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import { useFavourites } from "../../../hooks/useFavourites";
import { ICollection } from "../../../models/ICollection";
import { isAuth } from "../../../store/auth/authSlice";
import Button from "../../elements/Button/Button";
import Preloader from "../../elements/Preloader/Preloader";
import s from "./movieCard.module.css";

const MovieCard = ({
  name,
  poster,
  shortDescription,
  year,
  rating,
  countries,
  id,
}: ICollection) => {
  const {
    handleAddToFavourite,
    isFetching,
    handleRemoveFromFavourite,
    hasInFavourite,
  } = useFavourites();

  const [isHas, setHas] = useState<boolean>(hasInFavourite(id));
  const isLogged = useSelector(isAuth);

  const addFavoriteHandler = async (id: number) => {
    if (isLogged) {
      await handleAddToFavourite(id);
      setHas((prev) => !prev);
    } else {
      toast.error("Чтобы продолжить надо авторизоваться");
    }
  };

  const removeHandler = async (id: number) => {
    if (isLogged) {
      await handleRemoveFromFavourite(id);
      setHas((prev) => !prev);
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
          {isHas && isLogged ? (
            <Button variant="red" onClick={() => removeHandler(id)}>
              {isFetching ? <Preloader width={15} /> : "Удалить из избранного"}
            </Button>
          ) : (
            <Button variant="green" onClick={() => addFavoriteHandler(id)}>
              {isFetching ? <Preloader width={15} /> : "В избранное"}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
