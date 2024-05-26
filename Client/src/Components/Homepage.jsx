import React, { useEffect, useRef, useState } from 'react';
import Footer from './Footer';
import Gallery from './Gallery';
import Category from './Category';
import ProductSlider from './ProductSlider';
import '../ComponentsCss/homepage.css';
function Homepage() {
  return (
    <>
    <Category/>
    <div className="firstbanner">
    <img src='https://placehold.co/800x200' alt='' />
    </div>
    {/* <MultiCarousel/> */}
    <ProductSlider/>
    <div className="secondbanner">
    <img src='https://placehold.co/800x200' alt='' />
    </div>
    <Gallery/>
    <Footer/>
    </>

  )
}

export default Homepage
