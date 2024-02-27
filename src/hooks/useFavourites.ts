import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import { user } from "../store/auth/authSlice";
import { favouriteApi } from "../store/rtkQuery/favoritesApi";

export const useFavourites = () => {
  const userInfo = useSelector(user);

  const { data: favouriteList = [], isLoading } =
    favouriteApi.useGetAllFavouritesQuery(userInfo?.email);

  const hasInFavourite = (id: number) => {
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
  };
};
