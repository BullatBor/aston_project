import React from "react";
import { historyApi } from "../../store/rtkQuery/historyApi";
import { useSelector } from "react-redux";
import { user } from "../../store/auth/authSlice";
import s from "./userHistory.module.css";
import { HistoryItem } from "../../ui/components/historyItem/historyItem";
import Preloader from "../../ui/elements/Preloader/Preloader";

const UserHistory = () => {
  const userInfo = useSelector(user);
  const { data: searchHistory } = historyApi.useGetHistoryQuery(
    userInfo?.email
  );
  return (
    <div className={s.wrapper}>
      {searchHistory ? (
        searchHistory.map((item) => <HistoryItem {...item} />)
      ) : (
        <div className={s.preloader}>
          <Preloader width={45} />
        </div>
      )}
    </div>
  );
};

export default UserHistory;
