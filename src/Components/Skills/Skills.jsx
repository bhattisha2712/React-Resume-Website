import React from "react";

const Skills = ({ title, skills }) => (
  <section id="skills" className="max-w-4xl mx-auto py-12 sm:py-16 px-4 sm:px-6 animate-fadeInUp">
    <h2 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8 text-center text-gray-900 dark:text-white animate-scaleIn">{title}</h2>
    <div className="w-12 sm:w-16 h-1 bg-accent-600 mx-auto mb-8 sm:mb-12 rounded-full animate-scaleIn animate-delay-200"></div>
    <div className="flex flex-wrap justify-center gap-2 sm:gap-4 animate-fadeIn animate-delay-300">
      {skills && skills.length > 0 ? (
        skills.map((skill, idx) => (
          <span 
            key={idx} 
            className="bg-primary-100 dark:bg-primary-800 text-primary-900 dark:text-primary-100 px-4 py-2 sm:px-6 sm:py-3 rounded-full text-xs sm:text-sm font-semibold hover-lift hover-glow transition-all duration-300 animate-slideInUp cursor-pointer"
            style={{ animationDelay: `${idx * 0.05 + 0.3}s` }}
            onMouseEnter={(e) => {
              e.currentTarget.classList.add('animate-pulse');
            }}
            onMouseLeave={(e) => {
              e.currentTarget.classList.remove('animate-pulse');
            }}
          >
            {skill}
          </span>
        ))
      ) : (
        <span className="text-gray-500">No skills listed.</span>
      )}
    </div>
  </section>
);

export default Skills;
