import React from "react";
import { useSelector } from "react-redux";
import { user } from "../../store/auth/authSlice";
import { favouriteApi } from "../../store/rtkQuery/favoritesApi";
import FavouriteMovieCard from "../../ui/components/FavouriteMovieCard/FavouriteMovieCard";
import s from "./favourite.module.css";
import { EmptyTitle } from "../../ui/components/EmptyTitle/EmptyTitle";

const Favorites = () => {
  const userInfo = useSelector(user);

  const { data: favouriteList = [] } = favouriteApi.useGetAllFavouritesQuery(
    userInfo?.email
  );

  return (
    <div className={s.wrapper}>
      {favouriteList.length > 0 ? (
        <div className={s.items}>
          {favouriteList.map((item) => {
            return <FavouriteMovieCard key={item} id={item} />;
          })}
        </div>
      ) : (
        <EmptyTitle title="Ничего нет" />
      )}
    </div>
  );
};

export default Favorites;
