import React from 'react';
import footerLogo from '../images/footer-logo.png';

const Footer = () => {
  return (
    <div className='w-full bg-[#414f6b] flex'>
      <div className='w-full mx-4 lg:w-3/5 lg:mx-auto py-4 flex justify-between items-center space-x-4'>
        <img src={footerLogo} alt='Logo' className='w-36' />
        <p className='text-[#63769D] font-semibold italic text-xs sm:text-sm text-center'>
          COPYRIGHT 2016. ALL RIGHTS RESERVED.
        </p>
      </div>
    </div>
  );
};

export default Footer;
