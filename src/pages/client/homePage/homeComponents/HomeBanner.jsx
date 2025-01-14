import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const HomeBanner = () => {
  return (
    <div>
      <div className="lg:w-10/12 my-5 mx-auto flex justify-center gap-5">
        <div className="w-full lg:w-7/12 relative">
          <img src="https://res.cloudinary.com/deifi77os/image/upload/v1736680658/GreenFrams/Public/aufsmrzxeu8aepgwtdxi.png" className='rounded-2xl w-full' alt="" />
          <div className="absolute z-10 top-[25%] lg:left-10 left-4">
            <p className="text-white  text-2xl lg:text-6xl font-bold w-8/12">
              Fresh & Healthy
              Organic Food
            </p>
            <div className="lg:my-5 px-5 lg:space-y-3 border-success border-l-2">
              <div className="lg:flex items-center gap-3">
                <div className="text-white">Sale up to</div>
                <div className="text-white bg-secondary w-24 font-bold py-1 rounded-lg text-center">30% OFF</div>
              </div>
              <p className="text-[12px] text-gray-300 hidden lg:block">Free shipping on all your order.</p>
            </div>

            <div className="bg-gray-100 lg:w-40 w-20 flex mt-2 justify-center lg:py-3 rounded-2xl">
              <button className="flex justify-center py-1  text-[10px] lg:text-[15px] gap-2 items-center text-success font-bold">Shop Now <FaArrowRight /></button>
            </div>
          </div>
        </div>
        <div className="hidden lg:flex flex-col justify-around">
          <div className="h-1/2 relative">
            <div className="">
              <img src="https://res.cloudinary.com/deifi77os/image/upload/v1736684454/GreenFrams/Public/i9idnvkeovoklewuognt.png" alt="" className='w-full' />
            </div>

            <div className="absolute top-0 p-10">
              <div className="">
                <p className="font-bold tracking-widest">SUMMER SALE</p>
                <p className="text-3xl font-bold">75%  OFF</p>
              </div>
              <p className="my-3 text-[12px] text-gray-400">Only Fruit & Vegetable</p>
              <div className="">
                <button className="flex justify-center py-1  text-[10px] lg:text-[15px] gap-2 items-center text-success font-bold">Shop Now <FaArrowRight /></button>
              </div>
            </div>
          </div>
          <div className="h-1/2 relative">
            <div className="">
              <img src="https://res.cloudinary.com/deifi77os/image/upload/v1736684607/GreenFrams/Public/hwvb1ky5as0wam5emg98.png" alt="" className='h-full' />

            </div>
            <div className="absolute top-10 p-10 text-white flex justify-center flex-col items-center w-full text-center space-y-4">
              <div className="">
                <p className="font-bold tracking-widest">BEST DEAL</p>
                <p className="text-3xl font-bold">Special Products <br /> Deal of the Month</p>
              </div>
              <div className="">
                <button className="flex justify-center py-1  text-[10px] lg:text-[15px] gap-2 items-center text-success font-bold">Shop Now <FaArrowRight /></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;