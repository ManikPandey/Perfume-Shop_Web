// File: perfume-shop/client/src/pages/HomePage.js

import React from 'react';
import HeroBanner from '../components/HeroBanner';
import Bestsellers from '../components/Bestsellers';
import Categories from '../components/Categories';  
import Testimonial from '../components/Testimonial'; 
const HomePage = () => {
  return (
    <div>
      <HeroBanner />
      <Bestsellers />
      <Categories />   {/* <-- Add Categories section */}
      <Testimonial />  {/* <-- Add Testimonial section */}
    </div>
  );
};

export default HomePage;