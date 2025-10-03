import { Sun, Moon } from "lucide-react";
import { useDarkMode } from "../context/DarkModeContext";

type DarkModeProps = {
  size: number; // size of icon
};

export default function DarkMode({ size }: DarkModeProps) {
  const { onToggleDarkMode, isDarkMode } = useDarkMode();
  return (
    <div onClick={onToggleDarkMode} className="hover: cursor-pointer">
      {isDarkMode ? (
        <Moon
          className="text-yellow-400 hover:text-yellow-600 text-2xl"
          size={size}
        />
      ) : (
        <Sun
          className="text-orange-400 hover:text-orange-600 text-2xl"
          size={size}
        />
      )}
    </div>
  );
}
