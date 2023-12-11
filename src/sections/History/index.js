import React from 'react';
import bg from './history-bg.png';
import textImage from './history-title.png';
import carousel1 from './carousel-1.png';
import carousel2 from './carousel-2.png';

const Circle = ({ active }) => (
  <div
    className={`w-2 h-2 rounded-full ${active ? 'bg-white' : 'bg-gray-300/50'}`}
  />
);

const History = () => {
  return (
    <div className='w-full h-full lg:h-screen relative'>
      <img
        src={bg}
        alt='History Background'
        className='absolute w-full h-full z-0 object-cover'
      />

      <div className='relative w-full px-4 lg:px-0 lg:w-3/5 lg:mx-auto pt-10 lg:pt-20 flex flex-row lg:flex-col'>
        <img
          src={textImage}
          alt='History Text'
          className='w-36 h-20 lg:w-60 lg:h-36'
        />
        <p className='ml-4 lg:ml-20'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi
          alias cumque voluptatem expedita omnis, veritatis repellat. Maiores
          magni dolor aut! Architecto facilis ut rerum nemo voluptatibus amet
          eligendi, neque corporis? Lorem ipsum dolor sit amet. Lorem ipsum
          dolor sit amet consectetur adipisicing. Consequatur, alias!
        </p>
      </div>

      <div className='relative mt-20 lg:mt-0 lg:absolute bottom-0 bg-[#414f6b]/70 w-full pt-8 pb-4'>
        <div className='w-3/5 mx-auto flex space-x-4 justify-center items-center'>
          <img src={carousel1} alt='1' className='w-60' />
          <img src={carousel2} alt='2' className='w-60 hidden lg:block' />
          <img src={carousel1} alt='3' className='w-60 hidden lg:block' />
          <img src={carousel2} alt='4' className='w-60 hidden lg:block' />
        </div>

        <div className='flex w-full justify-center items-center space-x-2 mt-4'>
          <Circle active />
          <Circle />
          <Circle />
        </div>
      </div>
    </div>
  );
};

export default History;
