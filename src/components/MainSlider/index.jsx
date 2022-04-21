import React from 'react';
import Carousel from './Carousel';
import SpecialDiscount from './SpecialDiscount';
import './styles.css';


function MainSlider() {
  return (
    <section className="bg-gray-100 bg-opacity-90 py-10">
      
      <div className="container mx-auto px-4 flex flex-col lg:flex-row ">
        <div className="relative lg:w-2/3 rounded-xl bg-cover ">
          <Carousel />
        </div>
        <SpecialDiscount />
      </div>
    </section>
  )
}

export default MainSlider