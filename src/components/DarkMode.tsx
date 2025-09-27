import { Sun, Moon } from "lucide-react";

type DarkModeProps = {
  onToggleDarkMode: () => void; // function with no args
  isDarkMode: boolean; // true/false
  size: number; // size of icon
};

export default function DarkMode({
  onToggleDarkMode,
  isDarkMode,
  size,
}: DarkModeProps) {
  return (
    <div onClick={onToggleDarkMode}>
      {isDarkMode ? (
        <Moon color="yellow" size={size} />
      ) : (
        <Sun color="orange" size={size} />
      )}
    </div>
  );
}
