import React, { FC } from "react";
import { useHistory } from "../../../hooks/useHistory";
import { Button } from "../../elements/Button/Button";
import Preloader from "../../elements/Preloader/Preloader";
import s from "./historyItem.module.css";
import cn from "classnames";
import { useTheme } from "../../../context/ThemeContext";
import { useDispatch } from "react-redux";
import { changeSearhText } from "../../../store/auth/authSlice";

interface historyItemProps {
  title: string;
}

export const HistoryItem: FC<historyItemProps> = ({ title }) => {
  const { theme } = useTheme();
  const { handleRemoveFromHistory, isFetching, redirect } = useHistory();
  const dispatch = useDispatch();

  const handleItemClick = () => {
    dispatch(changeSearhText(title));
    redirect(title);
  };

  const handleRemoveClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    handleRemoveFromHistory(title);
  };

  return (
    <div
      className={cn(s.wrapper, { [s.dark]: theme === "dark" })}
      onClick={handleItemClick}
    >
      <div className={s.title}>
        <span className={s.searchTitle}>Текст поиска:</span>
        <span className={s.text}>{title}</span>
      </div>
      <div>
        <Button
          variant="red"
          className={s.btn}
          onClick={handleRemoveClick}
          disabled={isFetching}
        >
          {isFetching ? <Preloader width={15} /> : "Удалить"}
        </Button>
      </div>
    </div>
  );
};
