import React from "react";
import { movieApi } from "../../store/rtkQuery/movieApi";
import MovieCard from "../../ui/components/MovieItem/MovieCard";
import Preloader from "../../ui/elements/Preloader/Preloader";
import s from "./mainPage.module.css";

export const MainPage = () => {
  const { data: movies } = movieApi.useGetMovieCollectionQuery(15);
  return (
    <div className={s.wrapper}>
      {movies ? (
        movies.map(
          (movie, index) =>
            index !== 0 && <MovieCard key={movie.id} {...movie} />
        )
      ) : (
        <div className={s.preloader}>
          <Preloader width={40} />
        </div>
      )}
    </div>
  );
};
