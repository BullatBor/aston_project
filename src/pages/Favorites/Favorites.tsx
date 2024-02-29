import React from "react";
import { useSelector } from "react-redux";
import { user } from "../../store/auth/authSlice";
import { favouriteApi } from "../../store/rtkQuery/favoritesApi";
import FavouriteMovieCard from "../../ui/components/FavouriteMovieCard/FavouriteMovieCard";
import s from "./favourite.module.css";

const Favorites = () => {
  const userInfo = useSelector(user);

  const { data: favouriteList = [] } = favouriteApi.useGetAllFavouritesQuery(
    userInfo?.email,
  );

  return (
    <div className={s.wrapper}>
      {favouriteList &&
        favouriteList.map((item) => {
          return <FavouriteMovieCard key={item} id={item} />;
        })}
    </div>
  );
};

export default Favorites;
