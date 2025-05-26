import React from "react";

const Footer = ({ social, copyright, defaultIcon }) => {
  return (
    <footer className="text-center py-8 bg-gray-200 dark:bg-gray-900 text-primary-700 dark:text-accent-200 mt-16 animate-fadeInUp-slow border-t border-gray-300 dark:border-nav-700">
      <div className="max-w-4xl mx-auto px-6 animate-scaleIn">
        <div className="flex justify-center space-x-6 mb-6">
          {social && Object.entries(social).map(([platform, data], idx) => (
            <a 
              key={platform}
              href={data.url} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-accent-600 dark:hover:text-accent-100 transition-colors duration-300 hover:scale-110 transform animate-fadeIn"
              style={{ animationDelay: `${idx * 0.1}s` }}
              aria-label={platform}
              title={platform.charAt(0).toUpperCase() + platform.slice(1)}
              onMouseEnter={(e) => {
                e.currentTarget.querySelector('svg').classList.add('animate-bounce');
              }}
              onMouseLeave={(e) => {
                e.currentTarget.querySelector('svg').classList.remove('animate-bounce');
              }}
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d={data.icon || defaultIcon} />
              </svg>
            </a>
          ))}
        </div>
        <p className="text-sm opacity-90 text-primary-700 dark:text-accent-200 animate-fadeIn animate-delay-500">
          {copyright}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
