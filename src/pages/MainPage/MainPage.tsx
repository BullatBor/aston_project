import React from "react";
import { useFavourites } from "../../hooks/useFavourites";
import { ICollection } from "../../models/ICollection";
import { movieApi } from "../../store/rtkQuery/movieApi";
import MovieCard from "../../ui/components/MovieCard/MovieCard";
import Preloader from "../../ui/elements/Preloader/Preloader";
import s from "./mainPage.module.css";

export const MainPage = () => {
  const { data: movies } = movieApi.useGetMovieCollectionQuery(15);
  const { isLoading } = useFavourites();
  return (
    <div className={s.wrapper}>
      {movies && !isLoading ? (
        movies.map((movie: ICollection) => (
          <MovieCard key={movie.id} {...movie} />
        ))
      ) : (
        <div className={s.preloader}>
          <Preloader width={40} />
        </div>
      )}
    </div>
  );
};
