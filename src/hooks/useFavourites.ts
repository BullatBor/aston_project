import { useState } from "react";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import { user } from "../store/auth/authSlice";
import { favouriteApi } from "../store/rtkQuery/favoritesApi";

export const useFavourites = () => {
  const userInfo = useSelector(user);
  const [isRemoveClick, setIsRemoveClick] = useState<boolean>(false);

  const {
    data: favouriteList = [],
    currentData,
    isLoading,
  } = favouriteApi.useGetAllFavouritesQuery(userInfo?.email);

  const hasInFavourite = (id: number) => {
    if (currentData) {
      return currentData.includes(id);
    }
    return favouriteList.includes(id);
  };

  const [addInFavourite, addResult] = favouriteApi.useAddToFavouriteMutation();

  const [removeFavourite, removeResult] =
    favouriteApi.useRemoveFromFavouriteMutation();

  const handleAddToFavourite = async (id: number) => {
    try {
      await addInFavourite({ email: userInfo?.email, id });
      toast.success("Успешно добавлено");
    } catch (e) {
      toast.error("Подождите...");
    }
  };

  const handleRemoveFromFavourite = async (id: number) => {
    try {
      setIsRemoveClick(true);
      await removeFavourite({ email: userInfo?.email, id });
      toast.success("Успешно удалено");
    } catch (e) {
      toast.error("Подождите...");
    }
  };

  return {
    hasInFavourite,
    isFetching: addResult.isLoading || removeResult.isLoading,
    isLoading,
    handleAddToFavourite,
    handleRemoveFromFavourite,
    isRemoveClick,
  };
};
