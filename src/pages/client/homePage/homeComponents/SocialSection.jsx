import React from 'react';
import { instaImages, socialIcons } from '../../../../lib/data/DataBase';
import HotDealData from '../../../../lib/data/HotDealData';
import ReactStars from "react-rating-stars-component";
import { IoBagOutline } from 'react-icons/io5';
import { FaInstagram } from 'react-icons/fa';
import { Button, Input } from 'antd';


const SocialSection = () => {
  return (

    <>
      <div className='container mx-auto'>

        <div className="flex flex-wrap justify-center gap-5 lg:gap-20 py-5">
          {/* social icons  */}
          {
            socialIcons?.map(item =>
              <div className="">
                <img src={item?.icon} alt="" />
              </div>
            )
          }

          {/* instagram section  */}

          <div className="">
            <p className="text-4xl font-bold text-center pb-4">Follow us on Instagram</p>
            <div className="grid grid-cols-2 lg:grid-cols-6 gap-4">
              {instaImages?.map((item, index) => (
                <div
                  key={index}
                  className="relative flex flex-col justify-between  transition-all transform delay-100 duration-150 hover:border-success hover:shadow-md group overflow-hidden h-full"
                >
                  {/* Product Image */}
                  <div className="flex flex-col items-center relative">
                    <img
                      src={item.image}

                      className="object-contain h-40 w-full"
                    />
                  </div>


                  {/* Hover Actions */}
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <FaInstagram className='text-white text-3xl' />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
      <div className="bg-gray-100">
        <div className="container mx-auto px-10 lg:flex justify-between items-center py-10">
          <div className="lg:w-1/4">
            <p className="text-2xl font-bold">Subscribe our Newsletter</p>
            <p className="text-sm text-gray-400">
              Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna.
            </p>
          </div>
          <div className="relative lg:w-[33%]">
            <Input className='rounded-3xl' placeholder="Your email address" />
            <Button type="primary" className='absolute bg-green-500 right-0 p-5 text-xl font-semibold rounded-3xl'>Subscribe</Button>
          </div>
          
        </div>
      </div>
    </>


  );
};

export default SocialSection;