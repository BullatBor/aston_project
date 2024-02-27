import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../elements/Button/Button";
import { Input } from "../../elements/Input/Input";
import s from "./search.module.css";

export const Search = () => {
  const [text, setText] = useState<string>("");
  const navigate = useNavigate();

  const changeHandler = (e: any) => {
    console.log(e.target.value);
    setText(e.target.value);
  };

  const searchHandler = () => {
    navigate(`search/${text}`);
  };

  return (
    <div className={s.wrapper}>
      <Input placeholder="Поиск" onChange={changeHandler} />
      <Button variant="blue" className={s.searchBtn} onClick={searchHandler}>
        Поиск
      </Button>
    </div>
  );
};
