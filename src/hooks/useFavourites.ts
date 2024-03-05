import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import { user } from "../store/auth/authSlice";
import { favouriteApi } from "../store/rtkQuery/favoritesApi";

export const useFavourites = () => {
  const userInfo = useSelector(user);
  const [isLoadTest, setIsLoadTest] = useState<boolean>(false);

  const {
    data: favouriteList = [],
    currentData,
    isLoading,
    isFetching,
  } = favouriteApi.useGetAllFavouritesQuery(userInfo?.email);

  useEffect(() => {
    if (!isFetching) setIsLoadTest(isFetching);
  }, [isFetching]);

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
      setIsLoadTest(true);
      await addInFavourite({ email: userInfo?.email, id });
      toast.success("Успешно добавлено");
    } catch (e) {
      toast.error("Подождите...");
    }
  };

  const handleRemoveFromFavourite = async (id: number) => {
    try {
      setIsLoadTest(true);
      await removeFavourite({ email: userInfo?.email, id });
      toast.success("Успешно удалено");
    } catch (e) {
      toast.error("Подождите...");
    }
  };

  return {
    hasInFavourite,
    isFetching: addResult.isLoading || removeResult.isLoading || isLoadTest,
    isLoading,
    handleAddToFavourite,
    handleRemoveFromFavourite,
  };
};
