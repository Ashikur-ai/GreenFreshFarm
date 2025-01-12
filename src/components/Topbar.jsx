import React from 'react';
import { FaAngleDown } from 'react-icons/fa';
import { FiMapPin } from 'react-icons/fi';

const Topbar = () => {
  return (
    <div className="border-b py-2">
      <div className='w-10/12 mx-auto'>
        <div className="lg:flex text-center lg:justify-between text-xs text-gray-500">
          <div className="flex items-center gap-2">
            <FiMapPin />
            <p className="">Store Location:  Natore, Pachani Para, Rajshahi, Bangladesh</p>
          </div>
          <div className="flex justify-center items-center gap-3">
            <p className='flex items-center'>Eng<FaAngleDown /></p>
            <p className='flex items-center'>USD<FaAngleDown /></p>
            <p>Sign In / Sign Up</p>
          </div>
       </div>
      </div>
    </div>
  );
};

export default Topbar;