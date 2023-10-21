import { MoonIcon as MoonOutline } from "@heroicons/react/24/outline";
import { MoonIcon as MoonSolid } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";

function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const isDarkMode = localStorage.getItem("darkMode") === "true";
    setDarkMode(isDarkMode);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("darkMode", darkMode.toString());

    if (darkMode) {
      document.documentElement.classList.remove("bg-userLightBg");
      document.documentElement.classList.add("bg-userDarkBg");
    } else {
      document.documentElement.classList.remove("bg-userDarkBg");
      document.documentElement.classList.add("bg-userLightBg");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <button
      type="button"
      onClick={toggleDarkMode}
      className="
      flex items-center gap-x-2 bg-userLightSecondaryBg text-sm font-semibold dark:bg-userDarkSecondaryBg 
    md:text-base"
    >
      {darkMode ? (
        <MoonSolid data-testid="moon-solid" className="h-4 w-4 md:h-5 md:w-5" />
      ) : (
        <MoonOutline
          data-testid="moon-outline"
          className="h-4 w-4 md:h-5 md:w-5"
        />
      )}
      <p>Dark Mode</p>
    </button>
  );
}

export default ThemeToggle;
