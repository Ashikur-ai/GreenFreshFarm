import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { IoBagOutline } from 'react-icons/io5';
import ReactStars from "react-rating-stars-component";

import Buttons from '../../../../components/common/Buttons';
import CountdownTimer from '../../../../components/common/CountdownTimer';
import counterArray from '../../../../lib/data/CounterSectionData';

const PopularProduct = () => {


  const data = [
    {
      image: "https://res.cloudinary.com/dramj404v/image/upload/v1736835968/GreenFreshFarm/public/ulprswcsnww6sefahygh.png",
      name: "Green Apple",
      price: "$14.99",
      oldPrice: "$20.99",
      rating: 4,
    },
    {
      image: "https://res.cloudinary.com/dramj404v/image/upload/v1736837151/GreenFreshFarm/public/qoklaq2hlsu6sgwujyiy.png",
      name: "Fresh Indian Malta",
      price: "$14.99",
      oldPrice: "$20.99",
      rating: 4,
    },
    {
      image: "https://res.cloudinary.com/dramj404v/image/upload/v1736837151/GreenFreshFarm/public/q3nrqz7gn6sffvlgylmm.png",
      name: "Chinese Cabbage",
      price: "$14.99",
      oldPrice: "$20.99",
      rating: 4,
    },
    {
      image: "https://res.cloudinary.com/dramj404v/image/upload/v1736837151/GreenFreshFarm/public/tcihcfs1mldjqywi56vk.png",
      name: "Green Lettuce",
      price: "$14.99",
      oldPrice: "$20.99",
      rating: 4,
    },
    {
      image: "https://res.cloudinary.com/dramj404v/image/upload/v1736837151/GreenFreshFarm/public/lmsckesvmv3ruiir2zwh.png",
      name: "Eggplant",
      price: "$14.99",
      oldPrice: "$20.99",
      rating: 4,
    },
    {
      image: "https://res.cloudinary.com/dramj404v/image/upload/v1736835968/GreenFreshFarm/public/ulprswcsnww6sefahygh.png",
      name: "Green Apple",
      price: "$14.99",
      oldPrice: "$20.99",
      rating: 4,
    },
    {
      image: "https://res.cloudinary.com/dramj404v/image/upload/v1736837151/GreenFreshFarm/public/qoklaq2hlsu6sgwujyiy.png",
      name: "Fresh Indian Malta",
      price: "$14.99",
      oldPrice: "$20.99",
      rating: 4,
    },
    {
      image: "https://res.cloudinary.com/dramj404v/image/upload/v1736837151/GreenFreshFarm/public/q3nrqz7gn6sffvlgylmm.png",
      name: "Chinese Cabbage",
      price: "$14.99",
      oldPrice: "$20.99",
      rating: 4,
    },
    {
      image: "https://res.cloudinary.com/dramj404v/image/upload/v1736837151/GreenFreshFarm/public/tcihcfs1mldjqywi56vk.png",
      name: "Green Lettuce",
      price: "$14.99",
      oldPrice: "$20.99",
      rating: 4,
    },
    {
      image: "https://res.cloudinary.com/dramj404v/image/upload/v1736837151/GreenFreshFarm/public/lmsckesvmv3ruiir2zwh.png",
      name: "Eggplant",
      price: "$14.99",
      oldPrice: "$20.99",
      rating: 4,
    },
  ];




  return (
    <div>
      <div className=' w-11/12 lg:w-10/12 mx-auto'>
        <div className="flex justify-between my-5">
          <p className="lg:text-3xl font-bold">Popular Products</p>
          <p className="text-success flex items-center gap-2">View All <FaArrowRight /></p>
        </div>


        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
          {data.map((item, index) => (
            <div
              key={index}
              className="flex flex-col justify-between border hover:border-success hover:text-success hover:shadow-md h-full"
            >
              <div className="flex flex-col items-center relative">
                <img
                  src={item.image}
                  alt={item.name}
                  className="object-contain h-40 w-full"
                />
                {/* <p className="bg-danger text-white absolute top-0 left-2 px-1 rounded-sm">Sale 50%</p> */}
              </div>
              <div className="px-4 flex justify-between items-center mt-auto">
                <div>
                  <p className="text-gray-400 text-[14px]">{item.name}</p>
                  <p className="font-semibold ">
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
            </div>
          ))}
        </div>

        <div className="flex md:flex-row flex-col my-20 justify-between gap-4">
          {
            counterArray?.map(item =>
              <div className="relative">
                <div className="">
                  <img src={item?.image} alt="" />
                </div>
                <div className="absolute top-20 left-14 lg:left-0   xl:left-14 text-white flex flex-col items-center space-y-3">
                  <p className="font-bold uppercase">best deals</p>
                  <p className="md:text-xl font-semibold">Sale of the Month</p>
                  <div className="">
                    <CountdownTimer targetDate={item?.targetDate} />
                  </div>
                  <Buttons />
                </div>
              </div>)
          }


        </div>

      </div>

    </div>
  );
};

export default PopularProduct;