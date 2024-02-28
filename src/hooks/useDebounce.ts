import { useEffect, useMemo } from "react";
import debounce from "lodash.debounce";
import { movieApi } from "../store/rtkQuery/movieApi";

export const useDebounce = () => {

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
