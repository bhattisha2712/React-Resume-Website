import React, { useState } from "react";

const Navigation = ({ navigationData }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <nav className="bg-primary-100 dark:bg-gray-900 border-b-2 border-primary-300 dark:border-accent-700 text-primary-800 dark:text-accent-200 shadow-lg sticky top-0 z-40 animate-slideInDown">
      {/* Mobile menu button */}
      <div className="flex justify-between items-center px-4 py-3 sm:hidden">
        <span className="font-bold text-primary-800 dark:text-accent-200 animate-fadeIn">{navigationData.title}</span>
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)} 
          className="text-primary-800 dark:text-accent-200 focus:outline-none animate-fadeIn animate-delay-200"
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>
      
      {/* Mobile menu */}
      <div className={`${isMenuOpen ? 'block' : 'hidden'} sm:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          {navigationData.links.map((section, idx) => (
            <a
              key={section}
              href={`#${section.toLowerCase()}`}
              className="block px-3 py-2 text-base font-medium text-primary-800 dark:text-accent-200 hover:bg-primary-200 dark:hover:bg-gray-800 rounded-md animate-slideInRight"
              style={{ animationDelay: `${idx * 0.05}s` }}
              onClick={() => setIsMenuOpen(false)}
            >
              {section}
            </a>
          ))}
        </div>
      </div>      
      {/* Desktop menu */}
      <div className="hidden sm:flex justify-center gap-8 py-6">
        {navigationData.links.map((section, idx) => (
          <a
            key={section}
            href={`#${section.toLowerCase()}`}
            className="text-primary-800 dark:text-accent-200 font-semibold hover:text-accent-600 dark:hover:text-accent-100 transition-all duration-300 relative group animate-fadeIn"
            style={{ animationDelay: `${idx * 0.1}s` }}
          >
            {section}
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent-400 transition-all duration-300 group-hover:w-full"></span>
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navigation;
