import React from 'react';

const KeyPoints = () => {
  return (
    <div>
      <div className="lg:w-10/12 mx-auto shadow-lg rounded-lg px-10 py-10 space-y-5 lg:space-y-0 lg:flex justify-between ">
        <div className="flex gap-4">
          <div className="">
            <img src="https://res.cloudinary.com/dramj404v/image/upload/v1736820909/GreenFreshFarm/public/qjn1spargcywh5whbqyt.png" alt="" />
          </div>
          <div className="">
            <p className="font-bold">Free Shipping</p>
            <p className="text-[12px] text-gray-400 hidden lg:block">Free shipping on all your order.</p>
          </div>
        </div>


        <div className="flex gap-4">
          <div className="">
            <img src="https://res.cloudinary.com/dramj404v/image/upload/v1736820909/GreenFreshFarm/public/kujfpqi6g6ekqxzohoaz.png" alt="" />
          </div>
          <div className="">
            <p className="font-bold">Customer Support 24/7</p>
            <p className="text-[12px] text-gray-400 hidden lg:block">Instant access to Support</p>
          </div>
        </div>

        
        <div className="flex gap-4">
          <div className="">
            <img src="https://res.cloudinary.com/dramj404v/image/upload/v1736820909/GreenFreshFarm/public/buee3upndejpz9mgs93a.png" alt="" />
          </div>
          <div className="">
            <p className="font-bold">100% Secure Payment</p>
            <p className="text-[12px] text-gray-400 hidden lg:block">We ensure your money is save</p>
          </div>
        </div>

        <div className="flex gap-4">
          <div className="">
            <img src="https://res.cloudinary.com/dramj404v/image/upload/v1736820909/GreenFreshFarm/public/ir8vhat3wpkv5guejvsa.png" alt="" />
          </div>
          <div className="">
            <p className="font-bold">Money-Back Guarantee</p>
            <p className="text-[12px] text-gray-400 hidden lg:block">30 Days Money-Back Guarantee</p>
          </div>
        </div>

        
      </div>
    </div>
  );
};

export default KeyPoints;