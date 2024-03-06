import { useEffect } from "react";
import { useSelector } from "react-redux";
import { isAuth, user } from "../store/auth/authSlice";
import { favouriteApi } from "../store/rtkQuery/favoritesApi";

export const useFireStore = () => {
  const userInfo = useSelector(user);
  const isLogged = useSelector(isAuth);
  const [trigger, { isLoading }] = favouriteApi.useLazyGetAllFavouritesQuery();

  useEffect(() => {
    if (isLogged) trigger(userInfo?.email);
  }, [isLogged, trigger, userInfo?.email]);

  return {
    isLoading,
  };
};
