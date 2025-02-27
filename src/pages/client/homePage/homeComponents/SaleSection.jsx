import React from 'react';
import saleImg from '@/assets/images/banner.png';
import { Button } from 'flowbite-react';
import Buttons from '../../../../components/common/Buttons';
import HotDealData from '../../../../lib/data/HotDealData';
import ReactStars from "react-rating-stars-component";
import { IoBagOutline } from 'react-icons/io5';
import { FaArrowRight } from 'react-icons/fa';


const SaleSection = () => {
  return (
    <div className="w-11/12 lg:w-10/12 mx-auto">
      {/* Sales section  */}
      <div className='relative'>
        <div className="w-full lg:h-[200px] 2xl:h-[300px]"> {/* Set a height */}
          <img src={saleImg} alt="" className='rounded-lg w-full h-full object-cover' />
        </div>
        <div className="absolute top-4 right-10">
          <p className="font-bold uppercase text-white ">Summer Sale</p>
          <p className="text-4xl text-white"><span className="text-[#ff8a00]">37%</span> OFF</p>
          <p className="text-white">Free on all your order, Free Shipping and  30 days <br /> money-back guarantee</p>
          <Buttons />
        </div>
      </div>

      {/* Features section  */}
      <div className="">
        <div className="flex justify-between my-5">
          <p className="lg:text-3xl font-bold">Featured Products</p>  

          
          <p className="text-success flex items-center gap-2">View All <FaArrowRight /></p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-5">
          {HotDealData?.map((item, index) => (
            <div
              key={index}
              className="relative flex flex-col justify-between border transition-all transform delay-100 duration-150 hover:border-success hover:shadow-md group overflow-hidden h-full"
            >
              {/* Product Image */}
              <div className="flex flex-col items-center relative">
                <img
                  src={item.image}
                  alt={item.name}
                  className="object-contain h-40 w-full"
                />
              </div>

              {/* Product Info */}
              <div className="px-4 flex justify-between items-center mt-auto">
                <div>
                  <p className="text-gray-400 text-[14px]">{item.name}</p>
                  <p className="font-semibold">
                    {item.price}{" "}
                    <span className="font-light line-through">{item.oldPrice}</span>
                  </p>
                  <ReactStars
                    count={5}
                    value={item.rating}
                    size={12}
                    activeColor="#ffd700"
                  />
                </div>
                <div className="bg-gray-200 p-2 rounded-full hover:bg-success hover:text-white">
                  <IoBagOutline className="text-xl" />
                </div>
              </div>

              {/* Hover Actions */}
              <div className="absolute inset-0 bg-white bg-opacity-90 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button className="bg-success text-white px-4 py-2 rounded-full mb-2 hover:bg-green-600">Add to Cart</button>
                <button className="bg-primary text-white px-4 py-2 rounded-full hover:bg-blue-600">Buy Now</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

  );
};

export default SaleSection;