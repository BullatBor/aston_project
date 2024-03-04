import React, { memo, useState } from "react";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import { useFavourites } from "../../../hooks/useFavourites";
import { isAuth } from "../../../store/auth/authSlice";
import Button from "../../elements/Button/Button";
import Preloader from "../../elements/Preloader/Preloader";

interface FavourButtonType {
  movieId: number;
  isFavourPage?: boolean;
}

export const FavouriteButton = memo(
  ({ movieId, isFavourPage = false }: FavourButtonType) => {
    const {
      handleAddToFavourite,
      isFetching,
      handleRemoveFromFavourite,
      hasInFavourite,
    } = useFavourites();

    const [isHas, setHas] = useState<boolean>(hasInFavourite(movieId));
    const isLogged = useSelector(isAuth);

    const addFavoriteHandler = async (id: number) => {
      if (isLogged) {
        await handleAddToFavourite(id);
        setHas((prev) => !prev);
      } else {
        toast.error("Чтобы продолжить надо авторизоваться");
      }
    };

    const removeHandler = async (id: number) => {
      if (isLogged) {
        await handleRemoveFromFavourite(id);
        setHas((prev) => !prev);
      } else {
        toast.error("Чтобы продолжить надо авторизоваться");
      }
    };

    if (isFavourPage) {
      return (
        <Button
          variant="red"
          onClick={() => removeHandler(movieId)}
          disabled={isFetching}
        >
          {isFetching ? <Preloader width={15} /> : "Удалить из избранного"}
        </Button>
      );
    }

    return (
      <>
        {isHas && isLogged ? (
          <Button
            variant="red"
            onClick={() => removeHandler(movieId)}
            disabled={isFetching}
          >
            {isFetching ? <Preloader width={15} /> : "Удалить из избранного"}
          </Button>
        ) : (
          <Button
            variant="green"
            onClick={() => addFavoriteHandler(movieId)}
            disabled={isFetching}
          >
            {isFetching ? <Preloader width={15} /> : "В избранное"}
          </Button>
        )}
      </>
    );
  }
);
