import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import { ICollection } from "../../../../models/ICollection";
import s from "./suggestItem.module.css";
import cn from "classnames";
import { useTheme } from "../../../../context/ThemeContext";

interface ISuggestItemProps extends ICollection {
  suggestHided: (isHide: boolean) => void;
  style: React.CSSProperties;
}

export const SuggestItem: FC<ISuggestItemProps> = ({
  name,
  poster,
  year,
  rating,
  id,
  suggestHided,
  style,
}) => {
  const navigate = useNavigate();
  const { theme } = useTheme();

  const itemHandler = () => {
    navigate(`/movie/${id}`);
    suggestHided(false);
  };

  return (
    <div
      style={style}
      className={cn(s.wrapper, {
        [s.dark]: theme === "dark",
        [s.light]: theme === "light",
      })}
      onClick={itemHandler}
    >
      <div className={s.poster}>
        <img src={poster.previewUrl} alt="постер" />
      </div>
      <div className={s.descriptions}>
        <div className={s.title}>
          <span className={s.name}>Название:</span>
          <span className={s.text}>{name}</span>
        </div>
        <div className={s.title}>
          <span className={s.name}>Год:</span>
          <span className={s.text}>{year}</span>
        </div>
        <div className={s.title}>
          <span className={s.name}>Рейтинг:</span>
          <span className={s.text}>{rating.kp}</span>
        </div>
      </div>
    </div>
  );
};
