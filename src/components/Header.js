import React, { useState, useEffect } from 'react';
import logo from '../images/logo.png';
import logoText from '../images/logo-text.png';

const Header = ({ historyRef, teamRef }) => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const isScrolled = scrollPosition !== 0;

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
  };

  return (
    <div
      className={`fixed w-full top-0 z-10 py-4 transition-all ${
        isScrolled ? 'bg-white' : 'bg-transparent'
      }`}
    >
      <div className='w-full mx-4 lg:w-3/5 flex lg:justify-between items-center lg:mx-auto'>
        <div className='flex space-x-2'>
          <img src={logo} alt='Logo' />
          <img
            src={logoText}
            alt='Logo Text'
            className={`w-20 lg:w-full ${
              isScrolled ? 'opacity-100' : 'opacity-0'
            }`}
          />
        </div>
        <div
          className={`flex space-x-4 lg:space-x-16 ml-8 lg:ml-0 text-white font-semibold ${
            isScrolled ? 'text-black' : 'text-white'
          }`}
        >
          <button
            className='group text-xs lg:text-base'
            onClick={() =>
              historyRef.current.scrollIntoView({
                behavior: 'smooth',
              })
            }
          >
            <p className='italic'>01. HISTORY</p>
            <div
              className={`w-full transition-all group-hover:w-0 border-b-2 ${
                isScrolled ? 'border-black' : 'border-white'
              }`}
            />
          </button>
          <button
            className='group text-xs lg:text-base'
            onClick={() =>
              teamRef.current.scrollIntoView({
                behavior: 'smooth',
              })
            }
          >
            <p className='italic'>02. TEAM</p>
            <div
              className={`w-full transition-all group-hover:w-0 border-b-2 ${
                isScrolled ? 'border-black' : 'border-white'
              }`}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
