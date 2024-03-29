import React from "react";
import { ICollection } from "../../models/ICollection";
import { movieApi } from "../../store/rtkQuery/movieApi";
import MovieCard from "../../ui/components/MovieCard/MovieCard";
import Preloader from "../../ui/elements/Preloader/Preloader";
import s from "./mainPage.module.css";
import { useFavourites } from "../../hooks/useFavourites";

export const MainPage = () => {
  const { data: movies } = movieApi.useGetMovieCollectionQuery(15);
  const { isLoading } = useFavourites();

  return (
    <div className={s.wrapper}>
      {movies && !isLoading ? (
        <div className={s.movieCards}>
          {movies.map((movie: ICollection) => (
            <MovieCard key={movie.id} {...movie} />
          ))}
        </div>
      ) : (
        <Preloader width={40} />
      )}
    </div>
  );
};
