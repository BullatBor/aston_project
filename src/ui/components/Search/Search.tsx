import React, { useState } from "react";
import Button from "../../elements/Button/Button";
import { Input } from "../../elements/Input/Input";
import s from "./search.module.css";

export const Search = () => {
  const [text, setText] = useState<string>("");

  const changeHandler = (e: any) => {
    console.log(e.target.value);
  };

  return (
    <div className={s.wrapper}>
      <Input placeholder="Поиск" onChange={changeHandler} />
      <Button
        variant="blue"
        className={s.searchBtn}
        onClick={() => console.log("test")}
      >
        Поиск
      </Button>
    </div>
  );
};
