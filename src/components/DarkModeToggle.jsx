import { useEffect, useState } from "react";

const DarkModeToggle = () => {
  const [isDark, setIsDark] = useState(() =>
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    const root = document.documentElement;

    if (isDark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  return (
    <div className="flex items-center gap-2">
     
      <button
        onClick={() => setIsDark(!isDark)}
        className={`md:w-14 md:h-8 w-13 flex items-center rounded-full p-1 transition-colors duration-300
          ${isDark ? "bg-amber-100" : "bg-gray-300"}`}
      >
        <div
          className={`bg-white w-6 h-6 rounded-full shadow-md transform transition-transform duration-300
          ${isDark ? "translate-x-6" : "translate-x-0"}`}
        />
      </button>
      <span className="text-xl hidden md:block">
        {isDark ? "🌙" : "☀️"}
      </span>
    </div>
  );
};

export default DarkModeToggle;
