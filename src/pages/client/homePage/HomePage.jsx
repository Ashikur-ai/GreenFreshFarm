import React from 'react';
import HomeBanner from './homeComponents/HomeBanner';
import KeyPoints from './homeComponents/KeyPoints';
import PopularCategory from './homeComponents/PopularCategory';
import PopularProduct from './homeComponents/PopularProduct';

const HomePage = () => {
  return (
    <div>
      <HomeBanner />
      <KeyPoints />
      <div className="mt-20">
        <PopularCategory />
      </div>
      <div className="mt-20">
        <PopularProduct/>
      </div>
    </div>
  );
};

export default HomePage;