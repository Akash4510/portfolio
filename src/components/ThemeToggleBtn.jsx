import React from "react";
import { IoMdMoon } from "react-icons/io";
import { BsSunFill } from "react-icons/bs";

import { useTheme } from "../context/themeContext";

const ThemeToggleBtn = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <button className="theme-toggle-btn" onClick={toggleTheme}>
      {theme === "light" ? (
        <div className="theme-toggle-btn__icon moon">
          <IoMdMoon />
        </div>
      ) : (
        <div className="theme-toggle-btn__icon sun">
          <BsSunFill />
        </div>
      )}
    </button>
  );
};

export default ThemeToggleBtn;
