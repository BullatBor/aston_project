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

  const addToFavourite = async (id: number) => {
    await addInFavourite({ email: userInfo?.email, id });
  };

  const removeFromFavourite = async (id: number) => {
    await removeFavourite({ email: userInfo?.email, id });
  };

  return {
    hasInFavourite,
    isFetching: addResult.isLoading || removeResult.isLoading,
    isLoading,
    addToFavourite,
    removeFromFavourite,
  };
};
