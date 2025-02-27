import React from 'react';
import { latestNews } from '../../../../lib/data/DataBase';
import { FaArrowRight } from 'react-icons/fa';

const LatestNews = () => {
  return (
    <div className="">
      <p className="text-center text-4xl font-bold mb-12">Latest News</p>
      <div className='grid lg:grid-cols-3 container mx-auto gap-3 px-3'>
        {
          latestNews?.map(item =>
            <div key={item?.id} className="transform transition-all delay-100  hover:shadow-lg rounded-b-2xl ">
              <img src={item?.image} alt="" />
              <div className="bg-white border p-3 rounded-b-2xl">
                <p className="text-xl font-semibold">{item?.title}</p>
                <button className='text-green-500 font-bold flex justify-center items-center gap-2'>Read More <FaArrowRight /></button>
              </div>
            </div>
          )
        }
      </div>
   </div>
  );
};

export default LatestNews;