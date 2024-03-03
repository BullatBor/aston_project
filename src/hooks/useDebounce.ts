import { useEffect, useMemo } from "react";
import debounce from "lodash.debounce";
import { movieApi } from "../store/rtkQuery/movieApi";
import { useSelector } from "react-redux";
import { searchText } from "../store/auth/authSlice";

export const useDebounce = () => {
  const [trigger, { currentData, isLoading, isFetching }] =
    movieApi.useLazySearchMovieQuery();

  const text = useSelector(searchText);

  const debouncedChangeHandler = useMemo(
    () =>
      debounce(
        (userInput: string) => trigger({ name: userInput, limit: 5 }),
        2000,
      ),
    [trigger],
  );

  useEffect(() => {
    return () => {
      debouncedChangeHandler.cancel();
    };
  }, [debouncedChangeHandler]);

  function handleInputChange() {
    debouncedChangeHandler(text);
  }

  return {
    handleInputChange,
    isLoading: isLoading || isFetching,
    currentData,
  };
};
