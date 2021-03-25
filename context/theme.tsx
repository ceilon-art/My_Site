import React, { 
  createContext, 
  useState, 
  useCallback, 
  useEffect, 
  useContext 
} from 'react';

interface ThemeContextData {
  theme: 'light' | 'dark';
  changeTheme(): void;
  lockScroll: boolean;
  lock(lockBool: boolean): void;
}

const ThemeContext = createContext<ThemeContextData>({} as ThemeContextData);

export const ThemeProvider: React.FC = ({ children }) => {
  const [chosedTheme, setChosedTheme] = useState<'light' | 'dark'>();
  const [lockScroll, setLockScroll] = useState(false);
  const [theme, setTheme] = useState(chosedTheme);

  useEffect(() => {
    function fetchTheme() {
      const theme = localStorage.getItem('@andre:theme');
      // @ts-ignore
      setChosedTheme(theme);
    } 

    fetchTheme()
  }, [])

  const changeTheme = useCallback(() => {
    if (theme === 'dark') {
      setTheme('light');
      localStorage.setItem('@andre:theme', 'light');
      console.log(theme);
    } else {
      setTheme('dark');
      localStorage.setItem('@andre:theme', 'dark');
      console.log(theme)
    }
  }, [theme]);

  const lock = useCallback(
    (lockBool: boolean) => {
      if (lockBool) {
        setLockScroll(!lockScroll);
      } else {
        setLockScroll(lockBool);
      }
    },
    [lockScroll],
  );

  return (
    <ThemeContext.Provider value={{ theme, changeTheme, lockScroll, lock }}>
      {children}
    </ThemeContext.Provider>
  );
};

export function useTheme(): ThemeContextData {
  const context = useContext(ThemeContext);

  return context;
}