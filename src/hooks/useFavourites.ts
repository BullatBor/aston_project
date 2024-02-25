import { useState } from "react";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import { user } from "../store/auth/authSlice";
import { favouriteApi } from "../store/rtkQuery/favoritesApi";

export const useFavourites = () => {
  const userInfo = useSelector(user);
  const [isRefetch, setIsRefetch] = useState<boolean>(false)

  const { data: favouriteList = [], isLoading, refetch } =
    favouriteApi.useGetAllFavouritesQuery(userInfo?.email);

  const hasInFavourite = (id: number) => {
    return favouriteList.includes(id)
  };

  console.log(favouriteList)
  

  const [addInFavourite] = favouriteApi.useAddToFavouriteMutation();

  const [removeFavourite] =
    favouriteApi.useRemoveFromFavouriteMutation();

  const handleAddToFavourite = async (id: number) => {
    try {
      setIsRefetch(true)
      await addInFavourite({ email: userInfo?.email, id });
      await refetch()
      setIsRefetch(false)
      toast.success("Успешно добавлено");
    } catch(e){
      toast.error("Подождите...");
    }
    
  };

  const handleRemoveFromFavourite = async (id: number) => {
    try {
      setIsRefetch(true)
      await removeFavourite({ email: userInfo?.email, id });
      await refetch()
      setIsRefetch(false)
      toast.success("Успешно удалено");
    } catch(e) {
      toast.error("Подождите...");
    }
    
  };

  return {
    hasInFavourite,
    isFetching: isRefetch,
    isLoading,
    handleAddToFavourite,
    handleRemoveFromFavourite,
    favouriteList
  };
};
