import React, { memo } from "react";
import { useNavigate } from "react-router-dom";
import { ICollection } from "../../../models/ICollection";
import s from "./movieCard.module.css";
import cn from "classnames";
import { useTheme } from "../../../context/ThemeContext";

const MovieCard = memo(
  ({
    name,
    poster,
    shortDescription,
    year,
    rating,
    countries,
    id,
  }: ICollection) => {
    const navigate = useNavigate();
    const { theme } = useTheme();

    const movieLinkHandler = (id: number) => {
      navigate(`/movie/${id}`);
    };

    return (
      <div
        className={cn(s.wrapper, {
          [s.dark]: theme === "dark",
          [s.light]: theme === "light",
        })}
      >
        <div className={s.poster}>
          <img
            src={poster.url}
            alt="poster"
            onClick={() => movieLinkHandler(id)}
          />
        </div>
        <div className={s.rightBlock}>
          <div className={s.descriptions}>
            <div className={s.header}>
              <span className={s.title}>Название: </span>
              <span className={s.name} onClick={() => movieLinkHandler(id)}>
                {name}
              </span>
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
        </div>
      </div>
    );
  },
);

export default MovieCard;
