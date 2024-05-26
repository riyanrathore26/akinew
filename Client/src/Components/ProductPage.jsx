import React from 'react'
import '../ComponentsCss/ProductPage.css';
import Category from './Category';
import ProductSlider from './ProductSlider';
import Footer from './Footer';

export default function ProductPage() {
    return (
        <>
        <Category/>
            <div className="thirdbanner">
                <img src='https://placehold.co/800x200' alt='' />
            </div>
            <ProductSlider/>
            <ProductSlider/>
            <ProductSlider/>
            <ProductSlider/>
            <div className="thirdbanner">
                <img src='https://placehold.co/800x200' alt='' />
            </div>
            <ProductSlider/>
            <ProductSlider/>
            <ProductSlider/>
            <ProductSlider/>
        <Footer/>
        </>
    )
}
