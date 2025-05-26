import React from "react";

const Projects = ({ title, projects }) => (
  <section id="projects" className="max-w-6xl mx-auto py-16 px-6 animate-fadeInUp">
    <h2 className="text-4xl font-bold mb-8 text-center text-gray-900 dark:text-white animate-scaleIn">{title}</h2>
    <div className="w-16 h-1 bg-primary-600 mx-auto mb-12 rounded-full animate-scaleIn animate-delay-200"></div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects && projects.length > 0 ? (
        projects.map((project, idx) => (
          <div 
            key={idx} 
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover-lift hover-glow transition-all duration-300 animate-fadeInUp border border-gray-100 dark:border-gray-700"
            style={{ animationDelay: `${idx * 0.1 + 0.2}s` }}
          >
            <h3 className="text-xl font-bold mb-3 text-primary-700 dark:text-primary-300 animate-slideInRight" style={{ animationDelay: `${idx * 0.1 + 0.3}s` }}>{project.title || project.name}</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4 line-clamp-3 animate-fadeIn" style={{ animationDelay: `${idx * 0.1 + 0.4}s` }}>{project.description}</p>
            {project.link && (
              <a 
                href={project.link}
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center text-accent-600 dark:text-accent-400 font-semibold hover:text-accent-700 dark:hover:text-accent-300 transition-colors duration-300 animate-slideInUp"
                style={{ animationDelay: `${idx * 0.1 + 0.5}s` }}
              >
                {project.linkLabel || "View Project"}
                <svg className="w-4 h-4 ml-1 animate-slideInRight" style={{ animationDelay: `${idx * 0.1 + 0.6}s` }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            )}
          </div>
        ))
      ) : (
        <span className="text-gray-500 col-span-full text-center">No projects listed.</span>
      )}
    </div>
  </section>
);

export default Projects;
