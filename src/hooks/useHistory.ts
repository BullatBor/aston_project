import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { changeSearhText, searchText, user } from "../store/auth/authSlice";
import { historyApi } from "../store/rtkQuery/historyApi";

export const useHistory = () => {
  const userInfo = useSelector(user);
  const navigate = useNavigate();
  const text = useSelector(searchText);
  const dispatch = useDispatch();
  const { isFetching } = historyApi.useGetHistoryQuery(userInfo?.email);

  const [isLoad, setIsLoad] = useState<boolean>(false);

  useEffect(() => {
    if (!isFetching) setIsLoad(isFetching);
  }, [isFetching]);

  const ChangeText = (text: string) => {
    dispatch(changeSearhText(text));
  };

  const [addInHistory, addResult] = historyApi.useAddToHistoryMutation();

  const [removeHistory, removeResult] =
    historyApi.useRemoveFromHistoryMutation();

  const handleAddToHistory = async () => {
    try {
      setIsLoad(true);
      const searchQuery = { title: text, url: `/search/${text}` };

      if (text.length > 0) {
        await addInHistory({ email: userInfo?.email, searchQuery });
        navigate(`search/${text}`);
      } else {
        toast.error("Поле не должно быть пустым");
      }
    } catch (e) {
      toast.error("Подождите...");
    }
  };

  const handleRemoveFromHistory = async (title: string, url: string) => {
    try {
      setIsLoad(true);
      const searchQuery = { title, url };
      await removeHistory({ email: userInfo?.email, searchQuery });
      toast.success("Успешно удалено");
    } catch (e) {
      toast.error("Подождите...");
    }
  };

  return {
    isFetching: addResult.isLoading || removeResult.isLoading || isLoad,
    handleAddToHistory,
    handleRemoveFromHistory,
    searchText: text,
    setSearchText: ChangeText,
  };
};
