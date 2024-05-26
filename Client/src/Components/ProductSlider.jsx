import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { BASE_URL } from '../config';
import { Link, NavLink,useNavigate } from 'react-router-dom'
import '../ComponentsCss/ProductSlider.css';

function ProductSlider() {
  const [products, setProducts] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const productContainerRef = useRef(null);
  const navigate= useNavigate();

  useEffect(() => {
    axios.get(`${BASE_URL}/products`)
      .then(response => setProducts(response.data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);
  const nextPage = () =>{
    navigate("/Product");
  }
  const nextSlide = () => {
    if (currentIndex < products.length - 4) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(products.length - 4);
    }
  };

  useEffect(() => {
    if (productContainerRef.current) {
      productContainerRef.current.style.transform = `translateX(-${currentIndex * 25}%)`;
    }
  }, [currentIndex]);

  return (
    <div className="product-slider">
      <div className="slider-container">
        <button 
          className="prev-btn" 
          onClick={prevSlide} 
          disabled={products.length <= 4}
        >
          ❮
        </button>
        <div className="product-container" ref={productContainerRef}>
          {products.map((product, index) => (
            <div key={index} className="product-card" onClick={()=>nextPage()}>
              <img src={product.imageUrl} alt={product.name}  />
              <div className="product-info">
                <h3>{product.name}</h3>
                <p>{product.brand}</p>
                <p className="price">₹{product.price} <span className="old-price">₹{product.oldPrice}</span></p>
                <p className="discount">({product.discount} Off)</p>
                <button className="buy-btn">Buy</button>
              </div>
            </div>
          ))}
        </div>
        <button 
          className="next-btn" 
          onClick={nextSlide} 
          disabled={products.length <= 4}
        >
          ❯
        </button>
      </div>
    </div>
  );
}

export default ProductSlider;
