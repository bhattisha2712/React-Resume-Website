import React, { useState, useEffect } from "react";

const ThemeToggle = ({ onThemeChange }) => {
  const [dark, setDark] = useState(() => {
    // Check localStorage first, then system preference
    const saved = localStorage.getItem('darkMode');
    if (saved !== null) {
      return JSON.parse(saved);
    }
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    const html = document.documentElement;
    if (dark) {
      html.classList.add("dark");
      html.style.colorScheme = "dark";
    } else {
      html.classList.remove("dark");
      html.style.colorScheme = "light";
    }
    // Save preference
    localStorage.setItem('darkMode', JSON.stringify(dark));
    
    // Notify parent component about theme change
    if (onThemeChange) {
      onThemeChange(dark);
    }
  }, [dark, onThemeChange]);

  return (
    <button
      onClick={() => setDark((prev) => !prev)}
      className='fixed top-3 right-6 md:top-3 md:right-8 p-4 bg-white dark:bg-gray-800 text-gray-800 dark:text-white rounded-full shadow-lg hover:shadow-xl border border-gray-200 dark:border-gray-700 z-50 transition-all duration-300 hover:scale-110 hover-glow'
      aria-label='Toggle Theme'
      type='button'>
      <div className="w-4 h-4 flex items-center justify-center">
        {dark ? (
          <svg className="w-3.5 h-3.5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
          </svg>
        ) : (
          <svg className="w-3.5 h-3.5 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
          </svg>
        )}
      </div>
    </button>
  );
};

export default ThemeToggle;
