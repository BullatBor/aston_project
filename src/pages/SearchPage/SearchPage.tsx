import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { movieApi } from "../../store/rtkQuery/movieApi";
import MovieCard from "../../ui/components/MovieCard/MovieCard";
import Preloader from "../../ui/elements/Preloader/Preloader";
import s from "./searchPage.module.css";
import { EmptyTitle } from "../../ui/components/EmptyTitle/EmptyTitle";
import { useHistory } from "../../hooks/useHistory";

const SearchPage = () => {
  const location = useLocation();
  const { SearchTextChanged } = useHistory();
  const queryParams = new URLSearchParams(location.search);

  const query = queryParams.get("searchText");

  useEffect(() => {
    if (query) {
      SearchTextChanged(query);
    }
  }, []);

  if (!query) {
    return <div>Упс, что то пошло не так</div>;
  }

  const { data: searchResult } = movieApi.useSearchMovieQuery({ name: query });

  return (
    <div className={s.wrapper}>
      {searchResult ? (
        searchResult.length > 0 ? (
          searchResult.map((item) => <MovieCard key={item.id} {...item} />)
        ) : (
          <EmptyTitle title="Ничего не нашлось" />
        )
      ) : (
        <Preloader width={45} />
      )}
    </div>
  );
};

export default SearchPage;
