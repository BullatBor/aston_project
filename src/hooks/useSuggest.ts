import { useEffect, useRef, useState } from 'react';

export const useSuggest = () => {
  const suggestRef = useRef<null | HTMLDivElement>(null);
  const inputRef = useRef<null | HTMLInputElement>(null);
  const [isSuggestVisible, setIsSuggestVisible] = useState(false);

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
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
  };

  return {
    isSuggestVisible,
    onSearchFocus,
    suggestRef,
    inputRef,
  };
};
