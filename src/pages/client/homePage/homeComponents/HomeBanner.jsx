import React from 'react';

const HomeBanner = () => {
  return (
    <div>
      <div className="lg:w-10/12 my-5 mx-auto flex justify-center gap-5">
        <div className="w-full lg:w-7/12 relative">
          <img src="https://res.cloudinary.com/deifi77os/image/upload/v1736680658/GreenFrams/Public/aufsmrzxeu8aepgwtdxi.png" className='rounded-2xl w-full' alt="" />
          <p className="text-white absolute z-10 top-[25%] lg:left-10 left-4 text-2xl lg:text-6xl font-bold w-8/12">
            Fresh & Healthy
            Organic Food
          </p>
        </div>
        <div className="hidden lg:flex flex-col justify-around">
          <div className="h-1/2">
            <img src="https://res.cloudinary.com/deifi77os/image/upload/v1736684454/GreenFrams/Public/i9idnvkeovoklewuognt.png" alt="" className='w-full' />
          </div>
          <div className="h-1/2">
            <p className=""></p>
            <img src="https://res.cloudinary.com/deifi77os/image/upload/v1736684607/GreenFrams/Public/hwvb1ky5as0wam5emg98.png" alt="" className='h-full' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;