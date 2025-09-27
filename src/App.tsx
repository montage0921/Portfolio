import { useEffect } from "react";
import "./app.css";
import DarkMode from "./components/DarkMode";
import NavBar from "./sections/NavBar";
import { useDarkMode } from "./context/DarkModeContext";

function App() {
  const { setIsDarkMode, isDarkMode, onToggleDarkMode } = useDarkMode();
  useEffect(() => {
    const isDark = localStorage.getItem("mode");
    if (isDark === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  return (
    <div className="min-h-screen p-4 bg-[hsl(var(--bg-color))] text-[hsl(var(--main-text-color))]">
      <div className="flex justify-between">
        <NavBar />
        <DarkMode
          onToggleDarkMode={onToggleDarkMode}
          isDarkMode={isDarkMode}
          size={40}
        />
      </div>
    </div>
  );
}

export default App;
