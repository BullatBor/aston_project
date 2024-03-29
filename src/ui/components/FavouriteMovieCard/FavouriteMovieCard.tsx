import React from "react";
import { useNavigate } from "react-router-dom";
import { movieApi } from "../../../store/rtkQuery/movieApi";
import Preloader from "../../elements/Preloader/Preloader";
import { FavouriteButton } from "../FavouriteButton/FavouriteButton";
import s from "./favouriteMovieCard.module.css";
import cn from "classnames";
import { useTheme } from "../../../context/ThemeContext";

interface FavouriteMovieCardProps {
  id: number;
}

const FavouriteMovieCard = ({ id }: FavouriteMovieCardProps) => {
  const { data: movieInfo } = movieApi.useGetMovieQuery(id);
  const { theme } = useTheme();

  const navigate = useNavigate();

  const movieLinkHandler = (id: number) => {
    navigate(`/movie/${id}`);
  };

  return (
    <>
      <div
        className={cn(s.wrapper, {
          [s.dark]: theme === "dark",
          [s.light]: theme === "light",
        })}
      >
        {movieInfo ? (
          <>
            <div className={s.poster}>
              <img
                src={movieInfo.poster.url}
                alt="poster"
                onClick={() => movieLinkHandler(id)}
              />
            </div>
            <div className={s.rightBlock}>
              <div className={s.descriptions}>
                <div className={s.header}>
                  <span className={s.title}>Название: </span>
                  <span className={s.name} onClick={() => movieLinkHandler(id)}>
                    {movieInfo.name}
                  </span>
                </div>
                <div className={s.header}>
                  <span className={s.title}>Год:</span>
                  <span className={s.value}>{movieInfo.year}</span>
                </div>
                <div className={s.header}>
                  <span className={s.title}>Рейтинг КиноПоиска:</span>
                  <span className={s.value}>{movieInfo.rating.kp}</span>
                </div>
                <div className={s.header}>
                  <span className={s.title}>Страна:</span>
                  <span className={s.value}>{movieInfo.countries[0].name}</span>
                </div>
                <div className={s.description}>
                  <span className={s.descriptionTitle}>Краткое описание:</span>
                  <span className={s.descriptionText}>
                    {movieInfo.shortDescription}
                  </span>
                </div>
              </div>
              <div className={s.buttons}>
                <FavouriteButton movieId={id} isFavourPage={true} />
              </div>
            </div>
          </>
        ) : (
          <div className={s.preloader}>
            <Preloader width={50} />
          </div>
        )}
      </div>
    </>
  );
};

export default FavouriteMovieCard;
