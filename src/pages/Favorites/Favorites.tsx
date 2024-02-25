import React from "react";
import { useSelector } from "react-redux";
import { useFavourites } from "../../hooks/useFavourites";
import { user } from "../../store/auth/authSlice";
import FavouriteMovieCard from "../../ui/components/FavouriteMovieCard/FavouriteMovieCard";
import s from "./favourite.module.css";

export const Favorites = () => {
  const { favouriteList } = useFavourites();

  return (
    <div className={s.wrapper}>
      {favouriteList &&
        favouriteList.map((item) => {
          return <FavouriteMovieCard key={item} id={item} />;
        })}
    </div>
  );
};
