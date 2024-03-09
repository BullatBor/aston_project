import { FC, LegacyRef, memo } from "react";
import { ICollection } from "../../../models/ICollection";
import s from "./Suggest.module.css";
import { SuggestItem } from "./SuggestItem/SuggestItem";
import cn from "classnames";
import { useTheme } from "../../../context/ThemeContext";
import { EmptyTitle } from "../EmptyTitle/EmptyTitle";
import { FixedSizeList as List } from "react-window";
import Preloader from "../../elements/Preloader/Preloader";

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
            <List
              height={300}
              itemCount={movies.length}
              itemSize={80}
              width={400}
              className={s.list}
            >
              {({ index, style }) => (
                <SuggestItem
                  key={movies[index].id}
                  {...movies[index]}
                  suggestHided={suggestHided}
                  style={style}
                />
              )}
            </List>
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
