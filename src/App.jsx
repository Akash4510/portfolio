import React, { useState, useEffect } from "react";

import { ThemeContext } from "./context/themeContext";
import { Navbar } from "./components";
import { Hero, About, Skills, Work, Contact, Footer } from "./containers";

import "./styles/main.scss";

const App = () => {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const localTheme = localStorage.getItem("theme");
    localTheme && setTheme(localTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={`app app--theme-${theme}`}>
        <Navbar />
        <div className="app-sections">
          <Hero />
          <About />
          <Skills />
          <Work />
          <Contact />
          <Footer />
        </div>
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
