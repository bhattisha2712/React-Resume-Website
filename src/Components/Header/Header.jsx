import React from "react";

const Header = ({ name, title }) => (
  <header className='text-center py-16 bg-gradient-primary dark:bg-gray-900 text-white relative overflow-hidden animate-fadeIn'>
    <div className="absolute inset-0 bg-black opacity-10"></div>
    <div className="relative z-10">
      <h1 className='text-5xl md:text-6xl font-bold mb-4 animate-slideInDown'>{name}</h1>
      <p className='text-xl md:text-2xl font-light animate-slideInUp animate-delay-300'>{title}</p>
      <div className="mt-8 animate-fadeIn animate-delay-600">
        <div className="w-24 h-1 bg-white mx-auto rounded-full animate-scaleIn animate-delay-700"></div>
      </div>
    </div>
  </header>
);

export default Header;
