import { useEffect } from "react";
import "./app.css";
import NavBar from "./sections/NavBar";
import { useDarkMode } from "./context/DarkModeContext";
import Home from "./sections/Home";
import Journey from "./sections/Journey";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Contacts from "./sections/Contacts";
import { Analytics } from "@vercel/analytics/react";

function App() {
  const { setIsDarkMode } = useDarkMode();
  useEffect(() => {
    const isDark = localStorage.getItem("mode");
    if (isDark === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove("dark");
    }
  }, [setIsDarkMode]);

  return (
    <div className="w-full min-h-screen overflow-x-hidden bg-[hsl(var(--bg-color))] text-[hsl(var(--main-text-color))]  transition-colors duration-300">
      <div className="fixed top-0 left-0 w-full z-50">
        <NavBar />
      </div>
      <div className="pt-16">
        <Home />
        <Journey />
        <Skills />
        <Projects />
        <Contacts />
      </div>
      <Analytics />
    </div>
  );
}

export default App;
