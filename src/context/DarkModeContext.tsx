/* eslint-disable react-refresh/only-export-components */
import React, {
  useContext,
  useState,
  type Dispatch,
  type SetStateAction,
} from "react";
import { createContext } from "react";

type DarkModeContextType = {
  isDarkMode: boolean;
  setIsDarkMode: Dispatch<SetStateAction<boolean>>;
  onToggleDarkMode: () => void;
};

const DarkModeContext = createContext<DarkModeContextType | undefined>(
  undefined
);

function DarkModeProvider({ children }: { children: React.ReactNode }) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  function onToggleDarkMode() {
    if (isDarkMode) {
      setIsDarkMode(false);
      document.documentElement.classList.remove("dark");
      localStorage.setItem("mode", "light");
    } else {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
      localStorage.setItem("mode", "dark");
    }
  }
  return (
    <DarkModeContext.Provider
      value={{ isDarkMode, setIsDarkMode, onToggleDarkMode }}
    >
      {children}
    </DarkModeContext.Provider>
  );
}

function useDarkMode() {
  const context = useContext(DarkModeContext);
  if (!context) {
    throw new Error("something wrong with darkmode context");
  }
  return context;
}

export { DarkModeProvider, useDarkMode };
