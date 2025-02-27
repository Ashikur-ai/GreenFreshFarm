import React from 'react';
import HomeBanner from './homeComponents/HomeBanner';
import KeyPoints from './homeComponents/KeyPoints';
import PopularCategory from './homeComponents/PopularCategory';
import PopularProduct from './homeComponents/PopularProduct';
import HotDeals from './homeComponents/HotDeals';
import SaleSection from './homeComponents/SaleSection';
import LatestNews from './homeComponents/LatestNews';
import Testimonial from './homeComponents/Testimonial';
import SocialSection from './homeComponents/SocialSection';

const HomePage = () => {
  return (
    <div>
      <HomeBanner />
      <KeyPoints />
      <div className="mt-20">
        <PopularCategory />
      </div>
      <div className="mt-20">
        <PopularProduct />
      </div>

      <div className="mt-20">
        <HotDeals />
      </div>

      <div className="mt-20">
        <SaleSection />
      </div>
      <div className="mt-20">
        <LatestNews />
      </div>
      <div className="mt-20">
        <Testimonial />
      </div>
      <div className="">
        <SocialSection/>
      </div>
    </div>
  );
};

export default HomePage;