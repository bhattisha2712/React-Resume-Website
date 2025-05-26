import React from "react";

const About = ({ title, description }) => {
  // Split the description into sentences for animation
  const sentences = description.split('. ').filter(Boolean).map(sentence => sentence.endsWith('.') ? sentence : sentence + '.');
  
  return (
    <section id="about" className="component-section max-w-full sm:max-w-4xl mx-auto py-10 sm:py-16 px-4 sm:px-6 text-center animate-fadeInUp-slow my-2 sm:my-3">
      <div className="component-card p-5 sm:p-8 shadow-xl hover-lift animate-scaleIn">
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 sm:mb-6 text-gray-900 dark:text-accent-400 animate-slideInDown">{title}</h2>
        <div className="w-12 sm:w-16 h-1 bg-primary-600 dark:bg-accent-400 mx-auto mb-6 sm:mb-8 rounded-full animate-scaleIn animate-delay-300"></div>
        <div className="text-base sm:text-lg text-gray-800 dark:text-accent-400 leading-relaxed">
          {sentences.map((sentence, idx) => (
            <span 
              key={idx} 
              className="inline-block animate-fadeIn" 
              style={{ animationDelay: `${idx * 0.15 + 0.5}s` }}
            >
              {sentence + ' '}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
