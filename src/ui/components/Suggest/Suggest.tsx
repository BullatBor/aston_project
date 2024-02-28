import React, { FC, LegacyRef } from "react";
import { ICollection } from "../../../models/ICollection";
import Preloader from "../../elements/Preloader/Preloader";
import s from "./Suggest.module.css";
import { SuggestItem } from "./SuggestItem/SuggestItem";

interface SuggestProps {
  movies: ICollection[] | null | undefined;
  suggestRef: null | LegacyRef<HTMLDivElement>;
}

export const Suggest: FC<SuggestProps> = ({ movies, suggestRef }) => {
  return (
    <div className={s.wrapper} ref={suggestRef}>
      {movies ? (
        movies.map((item) => <SuggestItem key={item.id} {...item} />)
      ) : (
        <div className={s.preloader}>
          <Preloader width={30} />
        </div>
      )}
    </div>
  );
};
