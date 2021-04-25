import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

type ThemeContextData = {
  isDarkMode: boolean;
  changeTheme: () => void;
};

type ThemeContextProviderProps = {
  children: ReactNode;
};

export const ThemeContext = createContext({} as ThemeContextData);

export function ThemeContextProvider({ children }: ThemeContextProviderProps) {
  const [activeTheme, setActiveTheme] = useState("light");
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const currentTheme = localStorage.getItem("theme");
    setIsDarkMode(currentTheme === "dark" ? true : false);
    setActiveTheme(currentTheme);
  }, []);

  useEffect(() => {
    document.body.dataset.theme = activeTheme;
    localStorage.setItem("theme", activeTheme);
  }, [activeTheme]);

  function changeTheme() {
    setIsDarkMode(!isDarkMode);
    setActiveTheme(isDarkMode ? "light" : "dark");
  }
  return (
    <ThemeContext.Provider
      value={{
        isDarkMode,
        changeTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
