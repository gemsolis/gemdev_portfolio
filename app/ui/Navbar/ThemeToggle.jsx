"use client";

import { useState, useEffect } from "react";
import { IoIosSunny, IoIosMoon } from "react-icons/io";
import { useTheme } from "next-themes";

export default function ThemeToggle() {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  const currentTheme = theme === "system" ? systemTheme : theme;

  const toggleTheme = () => {
    setTheme(currentTheme === "light" ? "dark" : "light");
  };

  const buttonPosition = currentTheme === "light" ? "0%" : "150%";

  return (
    <div
      className={`h-[23px] w-[50px] rounded-full  shadow-lg ${
        currentTheme === "light" ? "bg-gray-200" : "bg-gray-700"
      }`}
    >
      <button
        style={{ transform: `translateX(${buttonPosition})` }}
        className={`transition-transform duration-500 ease-in-out ${
          currentTheme === "light" ? "gradient-bg" : "dark-gradient"
        } rounded-full p-[5px] text-white `}
        onClick={toggleTheme}
      >
        {currentTheme === "light" ? <IoIosSunny /> : <IoIosMoon />}
      </button>
    </div>
  );
}
