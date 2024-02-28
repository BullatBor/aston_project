import { useEffect, useMemo, useState } from "react";
import debounce from "lodash.debounce";
import { movieApi } from "../store/rtkQuery/movieApi";
import { ICollection } from "../models/ICollection";

export const useDebounce = () => {
  //const [isLoading, setIsLoading] = useState(false);
  //const [searchResult, setSearchResult] = useState<ICollection[] | null | undefined>(null)

  const [trigger, { currentData, isLoading, isFetching }] =
    movieApi.useLazySearchMovieQuery();

  const debouncedChangeHandler = useMemo(
    () =>
      debounce(
        (userInput: string) => trigger({ name: userInput, limit: 5 }),
        2000,
      ),
    [],
  );

  useEffect(() => {
    return () => {
      debouncedChangeHandler.cancel();
    };
  }, [debouncedChangeHandler]);

  function handleInputChange(searchText: string) {
    debouncedChangeHandler(searchText);
  }

  return {
    handleInputChange,
    isLoading: isLoading || isFetching,
    currentData,
  };
};
