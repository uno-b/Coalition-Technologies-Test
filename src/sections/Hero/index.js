import React from 'react';
import bg from './hero-bg.png';

const Hero = () => {
  return (
    <div className='w-full h-screen relative'>
      <img
        src={bg}
        alt='Hero Background'
        className='object-cover absolute w-full h-full'
      />
    </div>
  );
};

export default Hero;
