import React from "react";
import { useHistory } from "../../../hooks/useHistory";
import Button from "../../elements/Button/Button";
import { Input } from "../../elements/Input/Input";
import Preloader from "../../elements/Preloader/Preloader";
import s from "./search.module.css";

export const Search = () => {
  const { handleAddToHistory, isFetching, searchText, setSearchText } =
    useHistory();

  const changeHandler = (e: any) => {
    setSearchText(e.target.value);
  };

  const searchHandler = () => {
    handleAddToHistory();
  };

  return (
    <div className={s.wrapper}>
      <Input placeholder="Поиск" onChange={changeHandler} value={searchText} />
      <Button
        variant="blue"
        className={s.searchBtn}
        onClick={searchHandler}
        disabled={isFetching}
      >
        {isFetching ? <Preloader width={15} /> : "Поиск"}
      </Button>
    </div>
  );
};
