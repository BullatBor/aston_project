import { useState } from "react";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { user } from "../store/auth/authSlice";
import { historyApi } from "../store/rtkQuery/historyApi";

export const useHistory = () => {
  const userInfo = useSelector(user);
  const navigate = useNavigate();

  const [searchText, setSearchText] = useState<string>("");

  const [addInHistory, addResult] = historyApi.useAddToHistoryMutation();

  const [removeHistory, removeResult] =
    historyApi.useRemoveFromHistoryMutation();

  const handleAddToHistory = async () => {
    try {
      const searchQuery = { title: searchText, url: `/search/${searchText}` };

      if (searchText.length > 0) {
        await addInHistory({ email: userInfo?.email, searchQuery });
        navigate(`search/${searchText}`);
      } else {
        toast.error("Поле не должно быть пустым");
      }
    } catch (e) {
      toast.error("Подождите...");
    }
  };

  const handleRemoveFromHistory = async (title: string, url: string) => {
    try {
      const searchQuery = { title, url };
      await removeHistory({ email: userInfo?.email, searchQuery });
      toast.success("Успешно удалено");
    } catch (e) {
      toast.error("Подождите...");
    }
  };

  return {
    isFetching: addResult.isLoading || removeResult.isLoading,
    handleAddToHistory,
    handleRemoveFromHistory,
    searchText,
    setSearchText,
  };
};
