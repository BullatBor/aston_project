import React from "react";
import { historyApi } from "../../store/rtkQuery/historyApi";
import { useSelector } from "react-redux";
import { user } from "../../store/auth/authSlice";
import s from "./userHistory.module.css";
import { HistoryItem } from "../../ui/components/historyItem/historyItem";
import Preloader from "../../ui/elements/Preloader/Preloader";
import { EmptyTitle } from "../../ui/components/EmptyTitle/EmptyTitle";

const UserHistory = () => {
  const userInfo = useSelector(user);
  const { data: searchHistory } = historyApi.useGetHistoryQuery(
    userInfo?.email,
  );

  return (
    <div className={s.wrapper}>
      {searchHistory ? (
        searchHistory.length > 0 ? (
          <div className={s.items}>
            {searchHistory.map((item, index) => (
              <HistoryItem key={index} title={item} />
            ))}
          </div>
        ) : (
          <EmptyTitle title="Ничего нет" />
        )
      ) : (
        <Preloader width={45} />
      )}
    </div>
  );
};

export default UserHistory;
