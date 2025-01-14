import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const PopularCategory = () => {
  return (
    <div className=' w-11/12 lg:w-10/12 mx-auto'>
      <div className="flex justify-between my-5">
        <p className="lg:text-3xl font-bold">Popular Categories</p>
        <p className="text-success flex items-center gap-2">View All <FaArrowRight /></p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-6 gap-4">

        <div className="flex flex-col justify-center items-center border rounded-lg hover:border-success hover:text-success hover:shadow-md py-5">
          <div className="">
            <img src="https://res.cloudinary.com/dramj404v/image/upload/v1736822083/GreenFreshFarm/public/ffgjym4npqi2dofkph9k.png" alt="" />
          </div>
          <p className="font-semibold ">Fresh Fruit</p>
        </div>

        <div className="flex flex-col justify-center items-center border rounded-lg hover:border-success hover:text-success hover:shadow-md py-5">
          <div className="">
            <img src="https://res.cloudinary.com/dramj404v/image/upload/v1736822670/GreenFreshFarm/public/i8i5yve8r9v5t7zjicp9.png" alt="" />
          </div>
          <p className="font-semibold ">Fresh Vegetables</p>
        </div>

        <div className="flex flex-col justify-center items-center border rounded-lg hover:border-success hover:text-success hover:shadow-md py-5">
          <div className="">
            <img src="https://res.cloudinary.com/dramj404v/image/upload/v1736822800/GreenFreshFarm/public/jzqyh0b3ghazwm0vlcb2.png" alt="" />
          </div>
          <p className="font-semibold ">Meat & Fish</p>
        </div>

        <div className="flex flex-col justify-center items-center border rounded-lg hover:border-success hover:text-success hover:shadow-md py-5">
          <div className="">
            <img src="https://res.cloudinary.com/dramj404v/image/upload/v1736822909/GreenFreshFarm/public/pig5jkdz6a104nb3v8uy.png" alt="" />
          </div>
          <p className="font-semibold ">Snacks</p>
        </div>

        <div className="flex flex-col justify-center items-center border rounded-lg hover:border-success hover:text-success hover:shadow-md py-5">
          <div className="">
            <img src="https://res.cloudinary.com/dramj404v/image/upload/v1736823067/GreenFreshFarm/public/svhvmzkyxn5ikomxs77y.png" alt="" />
          </div>
          <p className="font-semibold ">Beverages</p>
        </div>

        <div className="flex flex-col justify-center items-center border rounded-lg hover:border-success hover:text-success hover:shadow-md py-5">
          <div className="">
            <img src="https://res.cloudinary.com/dramj404v/image/upload/v1736823121/GreenFreshFarm/public/vxo0i3vnv2yf1uwqupsi.png" alt="" />
          </div>
          <p className="font-semibold ">Beauty & Health</p>
        </div>

        <div className="flex flex-col justify-center items-center border rounded-lg hover:border-success hover:text-success hover:shadow-md py-5">
          <div className="">
            <img src="https://res.cloudinary.com/dramj404v/image/upload/v1736823228/GreenFreshFarm/public/gu5j2xoue3gwfpux0lpt.png" alt="" />
          </div>
          <p className="font-semibold ">Bread & Bakery</p>
        </div>

        <div className="flex flex-col justify-center items-center border rounded-lg hover:border-success hover:text-success hover:shadow-md py-5">
          <div className="">
            <img src="https://res.cloudinary.com/dramj404v/image/upload/v1736823282/GreenFreshFarm/public/a09raq5wcwqrxjhobx1a.png" alt="" />
          </div>
          <p className="font-semibold ">Baking Needs</p>
        </div>

        <div className="flex flex-col justify-center items-center border rounded-lg hover:border-success hover:text-success hover:shadow-md py-5">
          <div className="">
            <img src="https://res.cloudinary.com/dramj404v/image/upload/v1736823349/GreenFreshFarm/public/ktidxvd0mjgcivngpabb.png" alt="" />
          </div>
          <p className="font-semibold ">Cooking</p>
        </div>

        <div className="flex flex-col justify-center items-center border rounded-lg hover:border-success hover:text-success hover:shadow-md py-5">
          <div className="">
            <img src="https://res.cloudinary.com/dramj404v/image/upload/v1736823407/GreenFreshFarm/public/pninlyjhr0utr3cau6w7.png" alt="" />
          </div>
          <p className="font-semibold ">Diabetic Food</p>
        </div>

        <div className="flex flex-col justify-center items-center border rounded-lg hover:border-success hover:text-success hover:shadow-md py-5">
          <div className="">
            <img src="https://res.cloudinary.com/dramj404v/image/upload/v1736823464/GreenFreshFarm/public/tloyqqjmd8pb6t32p8h2.png" alt="" />
          </div>
          <p className="font-semibold ">Dish Detergents</p>
        </div>

        <div className="flex flex-col justify-center items-center border rounded-lg hover:border-success hover:text-success hover:shadow-md py-5">
          <div className="">
            <img src="https://res.cloudinary.com/dramj404v/image/upload/v1736823516/GreenFreshFarm/public/bsf1cscf2ddrneckjcom.png" alt="" />
          </div>
          <p className="font-semibold ">Oil</p>
        </div>


      </div>
    </div>
  );
};

export default PopularCategory;