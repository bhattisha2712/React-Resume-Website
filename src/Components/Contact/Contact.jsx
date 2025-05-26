import React, { useState } from "react";

const Contact = ({ title, email, phone }) => {
  const [hoveredEmail, setHoveredEmail] = useState(false);
  const [hoveredPhone, setHoveredPhone] = useState(false);

  return (
    <section id="contact" className="max-w-4xl mx-auto py-16 px-6 text-center animate-fadeInUp">
      <div className="bg-white dark:bg-gray-800 rounded-2xl p-12 shadow-2xl hover-lift animate-scaleIn" style={{ boxShadow: '0 6px 32px 0 rgba(0,0,0,0.22)' }}>
        <h2 className="text-4xl font-bold mb-8 text-black dark:text-[#a18dff] animate-slideInDown">{title}</h2>
        <div className="w-16 h-1 bg-accent-600 mx-auto mb-8 rounded-full animate-scaleIn animate-delay-200"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-fadeIn animate-delay-300">
          <div 
            className={`flex items-center justify-center space-x-4 bg-primary-50 dark:bg-gray-900 rounded-xl p-6 hover-glow transition-all duration-300 ${hoveredEmail ? 'animate-pulse' : 'animate-slideInLeft animate-delay-400'}`}
            onMouseEnter={() => setHoveredEmail(true)}
            onMouseLeave={() => setHoveredEmail(false)}
          >
            <div className="bg-primary-100 dark:bg-primary-900 p-3 rounded-full">
              <svg className={`w-6 h-6 text-primary-600 dark:text-accent-200 transition-all duration-500 ${hoveredEmail ? 'animate-bounce' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <p className="text-sm text-primary-700 dark:text-[#a18dff] uppercase font-semibold animate-slideInRight animate-delay-500">Email</p>
              <a 
                href={`mailto:${email}`} 
                className="text-lg font-semibold text-primary-700 dark:text-[#a18dff] hover:text-accent-600 dark:hover:text-accent-200 transition-colors duration-300 animate-slideInRight animate-delay-600"
              >
                {email}
              </a>
            </div>
          </div>
          <div 
            className={`flex items-center justify-center space-x-4 bg-primary-50 dark:bg-gray-900 rounded-xl p-6 hover-glow transition-all duration-300 ${hoveredPhone ? 'animate-pulse' : 'animate-slideInRight animate-delay-400'}`}
            onMouseEnter={() => setHoveredPhone(true)}
            onMouseLeave={() => setHoveredPhone(false)}
          >
            <div className="bg-accent-100 dark:bg-accent-900 p-3 rounded-full">
              <svg className={`w-6 h-6 text-accent-600 dark:text-accent-200 transition-all duration-500 ${hoveredPhone ? 'animate-bounce' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <div>
              <p className="text-sm text-primary-700 dark:text-[#a18dff] uppercase font-semibold animate-slideInLeft animate-delay-500">Phone</p>
              <p className="text-lg font-semibold text-accent-600 dark:text-[#a18dff] animate-slideInLeft animate-delay-600">{phone}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;