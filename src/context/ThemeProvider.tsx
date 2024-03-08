import { useMemo, useState } from 'react';
import { AppThemeContext } from './ThemeContext';

interface ThemeProviderProps {
  children: JSX.Element;
}

type Theme = 'light' | 'dark';

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<Theme>('dark');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const contextValue = useMemo(() => {
    return { theme, toggleTheme };
  }, [theme, toggleTheme]);

  return (
    <AppThemeContext.Provider value={contextValue}>
      {children}
    </AppThemeContext.Provider>
  );
};
