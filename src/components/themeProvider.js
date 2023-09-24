import React, { createContext, useState, useContext, useEffect } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    console.log("TOGGLING THEME******")
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme');
    if (localTheme) setTheme(localTheme);
  }, []);

  useEffect(() => {
    window.localStorage.setItem('theme', theme);


    if (theme === 'dark') {
      document.body.style.setProperty('--text', 'var(--dark-text)');
      document.body.style.setProperty('--background', 'var(--dark-background)');
    } else {
      document.body.style.setProperty('--text', 'var(--light-text)');
      document.body.style.setProperty('--background', 'var(--light-background)');
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
