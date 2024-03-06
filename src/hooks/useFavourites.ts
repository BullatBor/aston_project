import { useEffect, useMemo, useState } from "react";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import { user } from "../store/auth/authSlice";
import { favouriteApi } from "../store/rtkQuery/favoritesApi";

export const useFavourites = () => {
  const userInfo = useSelector(user);
  const [isLoadTest, setIsLoadTest] = useState<boolean>(false);

  const { data: favouriteList = [], isFetching } =
    favouriteApi.useGetAllFavouritesQuery(userInfo?.email);

  //в рамках интенсива, нет возможности обновлять один элемент базы.

  useEffect(() => {
    if (!isFetching) setIsLoadTest(isFetching);
  }, [isFetching]);

  const hasInFavourite = (id: number) => {
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

  return useMemo(
    () => ({
      hasInFavourite,
      isFetching: addResult.isLoading || removeResult.isLoading || isLoadTest,
      handleAddToFavourite,
      handleRemoveFromFavourite,
    }),
    [
      hasInFavourite,
      isFetching,
      isLoadTest,
      handleAddToFavourite,
      handleRemoveFromFavourite,
    ],
  );
};
