import React, { useState } from 'react';
import bg from './climb-bg.png';
import textImage from './climb-title.png';
import schedule from './schedule-table.png';

const Climb = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className='w-full h-full lg:h-screen relative'>
      <img
        src={bg}
        alt='Climb Background'
        className='absolute w-full h-full object-cover'
      />
      <div className='relative bg-white'>
        <div className='w-full lg:w-3/5 mx-auto py-8 flex justify-between items-center space-x-4 lg:space-x-10 px-4 lg:px-0'>
          <img
            src={textImage}
            alt='Text'
            className='w-36 h-20 lg:w-60 lg:h-36'
          />
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum itaque
            necessitatibus animi obcaecati molestias odio id odit totam illo
            voluptatum? Beatae fugit quasi, dignissimos voluptatum in aliquam
            provident quod dolor.
          </div>
        </div>

        <div className='w-full bg-[#414f6b]'>
          <div className='w-full lg:w-3/5 mx-auto flex font-bold text-xl'>
            <button
              onClick={() => setActiveTab(0)}
              className={`py-4 px-8 group text-base lg:font-xl ${
                activeTab === 0 ? 'bg-gray-400' : 'bg-transparent'
              } `}
            >
              <p
                className={activeTab === 0 ? 'text-[#414f6b]' : 'text-gray-400'}
              >
                MOUNTAIN 1
              </p>
              <div
                className={`border-b-2 transition-all group-hover:w-full ${
                  activeTab === 0
                    ? 'w-full border-[#414f6b]'
                    : 'w-0 border-gray-400'
                } border-[#414f6b]`}
              />
            </button>
            <button
              onClick={() => setActiveTab(1)}
              className={`py-4 px-8 group text-base lg:font-xl ${
                activeTab === 1 ? 'bg-gray-400' : 'bg-transparent'
              }`}
            >
              <p
                className={activeTab === 1 ? 'text-[#414f6b]' : 'text-gray-400'}
              >
                MOUNTAIN 2
              </p>
              <div
                className={`border-b-2 transition-all group-hover:w-full ${
                  activeTab === 1
                    ? 'w-full border-[#414f6b]'
                    : 'w-0 border-gray-400'
                }  `}
              />
            </button>
          </div>
        </div>
      </div>

      <div className='w-full lg:w-3/5 p-4 lg:p-0 lg:mx-auto'>
        <img
          src={schedule}
          alt='Schedule'
          className='relative lg:ml-8 mt-4 lg:mt-20'
        />
      </div>
    </div>
  );
};

export default Climb;
