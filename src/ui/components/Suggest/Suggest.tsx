import React, { FC, LegacyRef, memo } from "react";
import { ICollection } from "../../../models/ICollection";
import Preloader from "../../elements/Preloader/Preloader";
import s from "./Suggest.module.css";
import { SuggestItem } from "./SuggestItem/SuggestItem";
import cn from "classnames";
import { useTheme } from "../../../context/ThemeContext";
import { EmptyTitle } from "../EmptyTitle/EmptyTitle";

interface SuggestProps {
  movies: ICollection[] | null | undefined;
  suggestRef: null | LegacyRef<HTMLDivElement>;
  suggestHided: (isVisible: boolean) => void;
}

export const Suggest: FC<SuggestProps> = memo(
  ({ movies, suggestRef, suggestHided }) => {
    const { theme } = useTheme();

    return (
      <div
        className={cn(s.wrapper, {
          [s.dark]: theme === "dark",
          [s.light]: theme === "light",
        })}
        ref={suggestRef}
      >
        {movies ? (
          movies.length > 0 ? (
            movies.map((item) => (
              <SuggestItem
                key={item.id}
                {...item}
                suggestHided={suggestHided}
              />
            ))
          ) : (
            <EmptyTitle title="Ничего не нашлось" classNames={s.emptyTitle} />
          )
        ) : (
          <div className={s.preloader}>
            <Preloader width={30} />
          </div>
        )}
      </div>
    );
  },
);
