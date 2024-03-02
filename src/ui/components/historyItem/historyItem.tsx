import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import { useHistory } from "../../../hooks/useHistory";
import Button from "../../elements/Button/Button";
import Preloader from "../../elements/Preloader/Preloader";
import s from "./historyItem.module.css";
import cn from "classnames";
import { useTheme } from "../../../context/ThemeContext";

interface historyItemProps {
  title: string;
  url: string;
}

export const HistoryItem: FC<historyItemProps> = ({ title, url }) => {
  const navigate = useNavigate();
  const { theme } = useTheme();
  const { handleRemoveFromHistory, isFetching } = useHistory();

  const handleItemClick = () => {
    navigate(url);
  };

  const handleRemoveClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    handleRemoveFromHistory(title, url);
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
