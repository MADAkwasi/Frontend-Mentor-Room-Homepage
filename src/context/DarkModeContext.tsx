import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

interface ContextValue {
  isDarkMode: boolean;
  setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
  toggleDarkMode: () => void;
}

const DarkModeContext = createContext<ContextValue | undefined>(undefined);

function DarkModeProvider({ children }: { children: ReactNode }) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  function toggleDarkMode() {
    setIsDarkMode((isDark) => !isDark);
  }

  useEffect(
    function () {
      if (isDarkMode) {
        document.documentElement.classList.add("dark-mode");
        document.documentElement.classList.remove("light-mode");
      } else {
        document.documentElement.classList.add("light-mode");
        document.documentElement.classList.remove("dark-mode");
      }
    },
    [isDarkMode]
  );

  const contextValue: ContextValue = {
    isDarkMode,
    toggleDarkMode,
    setIsDarkMode,
  };

  return (
    <DarkModeContext.Provider value={contextValue}>
      {children}
    </DarkModeContext.Provider>
  );
}

function useDarkMode() {
  const context = useContext(DarkModeContext);

  if (context === undefined)
    throw new Error("DarkModeContext was used outside of DarkModeProvider");

  return context;
}

// eslint-disable-next-line react-refresh/only-export-components
export { DarkModeProvider, useDarkMode };
