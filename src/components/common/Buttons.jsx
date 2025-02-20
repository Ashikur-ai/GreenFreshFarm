import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const Buttons = () => {
  return (
    <div>
      <div className="bg-gray-100 lg:w-40 w-20 flex mt-2 justify-center lg:py-3 rounded-3xl">
        <button className="flex justify-center py-1  text-[10px] lg:text-[15px] gap-2 items-center text-success font-bold">Shop Now <FaArrowRight /></button>
      </div>
    </div>
  );
};

export default Buttons;