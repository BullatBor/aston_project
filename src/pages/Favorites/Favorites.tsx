import React from "react";
import { useSelector } from "react-redux";
import { user } from "../../store/auth/authSlice";
import { favouriteApi } from "../../store/rtkQuery/favoritesApi";
import FavouriteMovieCard from "../../ui/components/FavouriteMovieCard/FavouriteMovieCard";
import s from "./favourite.module.css";
import { EmptyTitle } from "../../ui/components/EmptyTitle/EmptyTitle";
import Preloader from "../../ui/elements/Preloader/Preloader";

const Favorites = () => {
  const userInfo = useSelector(user);

  const { data: favouriteList = [], isLoading } =
    favouriteApi.useGetAllFavouritesQuery(userInfo?.email);

  return (
    <div className={s.wrapper}>
      {isLoading ? (
        <Preloader width={45} />
      ) : favouriteList.length > 0 ? (
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
