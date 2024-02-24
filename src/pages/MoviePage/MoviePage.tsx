import React from "react";
import s from "./moviePage.module.css";
import { useParams } from "react-router-dom";
import { movieApi } from "../../store/rtkQuery/movieApi";
import Preloader from "../../ui/elements/Preloader/Preloader";

export const MoviePage = () => {
  const { id } = useParams();
  const { data: movieInfo } = movieApi.useGetMovieQuery(id ? parseInt(id) : 0);
  console.log(movieInfo);

  return (
    <div className={s.wrapper}>
      {movieInfo ? (
        <div className={s.card}>
          <div className={s.main}>
            <div className={s.leftPart}>
              <img src={movieInfo.poster.url} />
              <div className={s.infoUnderLogo}>
                <div className={s.otherInfo}>
                  <div className={s.descriptTitle}>Жанр:</div>
                  <div className={s.descripText}>
                    {movieInfo.genres.map((item) => `${item.name} `)}
                  </div>
                </div>
                <div className={s.otherInfo}>
                  <div className={s.descriptTitle}>Рейтинг КиноПоиска:</div>
                  <div className={s.descripText}>{movieInfo.rating.kp}</div>
                </div>
                <div className={s.otherInfo}>
                  <div className={s.descriptTitle}>Год:</div>
                  <div className={s.descripText}>{movieInfo.year}</div>
                </div>
                <div className={s.otherInfo}>
                  <div className={s.descriptTitle}>Бюджет:</div>
                  <div
                    className={s.descripText}
                  >{`${movieInfo.budget.value}${movieInfo.budget.currency}`}</div>
                </div>
              </div>
            </div>
            <div className={s.rightPart}>
              <div className={s.name}>{movieInfo.name}</div>
              <div className={s.description}>
                <div className={s.descriptTitle}>Описание:</div>
                <div className={s.descripText}>{movieInfo.description}</div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className={s.preloader}>
          <Preloader width={30} />
        </div>
      )}
    </div>
  );
};
