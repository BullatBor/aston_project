import React, { memo } from "react";
import { useDebounce } from "../../../hooks/useDebounce";
import { useHistory } from "../../../hooks/useHistory";
import { Button } from "../../elements/Button/Button";
import { Input } from "../../elements/Input/Input";
import Preloader from "../../elements/Preloader/Preloader";
import { Suggest } from "../Suggest/Suggest";
import s from "./search.module.css";

export const Search = memo(() => {
  const { handleAddToHistory, isFetching, searchText, SearchTextChanged } =
    useHistory();

  const {
    handleInputChange,
    currentData,
    isSuggestVisible,
    onSearchFocus,
    suggestHided,
    suggestRef,
    inputRef,
  } = useDebounce();

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    SearchTextChanged(e.target.value);
    handleInputChange(e.target.value);
  };

  const searchHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleAddToHistory();
  };

  return (
    <div className={s.wrapper}>
      <form className={s.form} onSubmit={searchHandler}>
        <Input
          placeholder="Поиск"
          onChange={changeHandler}
          value={searchText}
          inputRef={inputRef}
          onFocus={onSearchFocus}
        />
        <Button
          variant="blue"
          className={s.searchBtn}
          type="submit"
          disabled={isFetching}
        >
          {isFetching ? <Preloader width={15} /> : "Поиск"}
        </Button>
      </form>
      {isSuggestVisible && (
        <Suggest
          movies={currentData}
          suggestRef={suggestRef}
          suggestHided={suggestHided}
        />
      )}
    </div>
  );
});
