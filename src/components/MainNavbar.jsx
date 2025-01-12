import React from 'react';
import { CiHeart, CiSearch } from 'react-icons/ci';
import { IoBagHandleOutline } from 'react-icons/io5';
import MainLink from './MainLink';

const MainNavbar = () => {
  return (
    <div className="">
      <div className='w-10/12 mx-auto  py-3'>
        <div className="flex flex-col gap-1 lg:flex-row items-center lg:justify-between">

          <div className="hidden lg:flex items-center gap-2">
            <div className="">
              <img src="https://res.cloudinary.com/deifi77os/image/upload/v1736661929/GreenFrams/Public/ympwetlspx7lk3dkyu5g.png" alt="" />
            </div>
            <p className="text-2xl font-semibold">GreenFreshFarm</p>
          </div>

          <div className="lg:flex hidden">
            <label className="input input-bordered flex items-center gap-2">
              <input type="text" className="border-none relative" placeholder="Search" />
            </label>
            <button className="bg-success flex items-center px-3 text-white rounded-r-lg -ml-3">
              <CiSearch className='font-bold text-3xl' />
            </button>
          </div>

          <div className="text-3xl flex items-center justify-center ">
            <div className="border-r px-4">
              <CiHeart />
            </div>
            <div className="px-4 flex">
              <IoBagHandleOutline />

            </div>

            <div className="">
              <p className='text-[10px]'>Shopping cart:</p>
              <p className='text-[14px] -mt-5 font-bold'>৳300</p>
            </div>
          </div>

        </div>
      </div>

      <div className="">
        <MainLink/> 
      </div>
    </div>
  );
};

export default MainNavbar;