import { useEffect, useMemo, useRef, useState } from "react";
import debounce from "lodash.debounce";
import { movieApi } from "../store/rtkQuery/movieApi";
import { useSelector } from "react-redux";
import { searchText } from "../store/auth/authSlice";

export const useDebounce = () => {
  const suggestRef = useRef<null | HTMLDivElement>(null);
  const inputRef = useRef<null | HTMLInputElement>(null);
  const [isSuggestVisible, setIsSuggestVisible] = useState(false);
  const [trigger, { currentData, isLoading, isFetching }] =
    movieApi.useLazySearchMovieQuery();

  const text = useSelector(searchText);

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleClickOutside = (e: MouseEvent) => {
    if (
      suggestRef.current &&
      !suggestRef.current.contains(e.target as Element) &&
      e.target !== inputRef.current
    ) {
      setIsSuggestVisible(false);
    }
  };

  const onSearchFocus = () => {
    setIsSuggestVisible(true);
    trigger({ name: text, limit: 5 });
  };

  const debouncedChangeHandler = useMemo(
    () =>
      debounce(
        (userInput: string) => trigger({ name: userInput, limit: 5 }),
        1500,
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
    suggestHided: setIsSuggestVisible,
    isSuggestVisible,
    onSearchFocus,
    suggestRef,
    inputRef,
  };
};
