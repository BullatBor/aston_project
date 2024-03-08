import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  changeSearhText,
  isAuth,
  searchText,
  user,
} from '../store/auth/authSlice';
import { historyApi } from '../store/rtkQuery/historyApi';

export const useHistory = () => {
  const userInfo = useSelector(user);
  const isLogged = useSelector(isAuth);
  const navigate = useNavigate();

  const text = useSelector(searchText);
  const dispatch = useDispatch();
  const searchParams = new URLSearchParams();

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

  const redirect = (text: string) => {
    searchParams.append('searchText', `${text}`);
    navigate(`/search?${searchParams.toString()}`);
  };

  const handleAddToHistory = async () => {
    try {
      if (text.length > 0) {
        if (isLogged) {
          setIsLoad(true);
          const searchQuery = text;
          await addInHistory({ email: userInfo?.email, searchQuery });
          setIsLoad(false);
        }
        redirect(text);
      } else {
        toast.error('Поле не должно быть пустым');
      }
    } catch (e) {
      toast.error('Подождите...');
    }
  };

  const handleRemoveFromHistory = async (title: string) => {
    try {
      setIsLoad(true);
      const searchQuery = title;
      await removeHistory({ email: userInfo?.email, searchQuery });
      toast.success('Успешно удалено');
    } catch (e) {
      toast.error('Подождите...');
    }
  };

  return {
    isFetching: addResult.isLoading || removeResult.isLoading || isLoad,
    handleAddToHistory,
    handleRemoveFromHistory,
    searchText: text,
    SearchTextChanged: ChangeText,
    redirect,
  };
};
