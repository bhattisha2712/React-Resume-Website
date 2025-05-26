import React from "react";

const Education = ({ title, education }) => (
  <section id="education" className="max-w-4xl mx-auto py-16 px-6 animate-fadeInUp">
    <h2 className="text-4xl font-bold mb-8 text-center text-gray-900 dark:text-white animate-scaleIn">{title}</h2>
    <div className="w-16 h-1 bg-primary-600 mx-auto mb-12 rounded-full animate-scaleIn animate-delay-200"></div>
    <div className="space-y-8">
      {education && education.length > 0 ? (
        education.map((edu, idx) => (
          <div 
            key={idx} 
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 hover-lift transition-all duration-300 animate-slideInLeft border-l-4 border-primary-500"
            style={{ animationDelay: `${idx * 0.2}s` }}
            onMouseEnter={(e) => {
              const border = e.currentTarget.querySelector('.border-pulse');
              if (border) border.classList.add('animate-pulse');
            }}
            onMouseLeave={(e) => {
              const border = e.currentTarget.querySelector('.border-pulse');
              if (border) border.classList.remove('animate-pulse');
            }}
          >
            <div className="border-pulse absolute top-0 left-0 bottom-0 w-1 bg-primary-500 rounded-l-xl" style={{ width: '4px' }}></div>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 animate-slideInRight" style={{ animationDelay: `${idx * 0.2 + 0.2}s` }}>
              <h3 className="text-xl font-bold text-primary-700 dark:text-primary-300 mb-2 animate-slideInRight" style={{ animationDelay: `${idx * 0.2 + 0.3}s` }}>
                {edu.degree}
              </h3>
              <span className="text-sm text-accent-600 dark:text-accent-400 font-semibold bg-accent-50 dark:bg-accent-900 px-3 py-1 rounded-full mt-2 md:mt-0 animate-slideInLeft" style={{ animationDelay: `${idx * 0.2 + 0.4}s` }}>
                {edu.year || edu.period}
              </span>
            </div>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed animate-fadeIn" style={{ animationDelay: `${idx * 0.2 + 0.5}s` }}>{edu.institution}</p>
          </div>
        ))
      ) : (
        <div className="text-gray-500 text-center col-span-full">No education listed.</div>
      )}
    </div>
  </section>
);

export default Education;
