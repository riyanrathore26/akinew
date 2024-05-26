import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BASE_URL } from '../config';
import '../ComponentsCss/Gallery.css';
import { Link, NavLink,useNavigate } from 'react-router-dom'


export default function Gallery() {
  const [categories, setCategories] = useState([]);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const navigate= useNavigate();
  useEffect(() => {
    axios.get(`${BASE_URL}/categories`)
      .then(response => setCategories(response.data))
      .catch(error => console.error('Error fetching categories:', error));
  }, []);
  const nextPage = () =>{
    navigate("/Product");
  }
  return (
    <div className="gallery">
      {categories.length > 0 && (
        <>
          <div className="big-image" onClick={()=>nextPage()}>
            <img src={categories[selectedImageIndex].imageUrl} alt={categories[selectedImageIndex].name} />
            <div className="thumbnail-row">
              {categories.map((category, index) => (
                <div 
                  key={category.id} 
                  className={`thumbnail ${index === selectedImageIndex ? 'active' : ''}`}
                  onClick={() => setSelectedImageIndex(index)}
                >
                  <img src={category.imageUrl} alt={category.name} />
                </div>
              ))}
            </div>
          </div>
          <div className="information">
            <h2>{categories[selectedImageIndex].name}</h2>
            <p>{categories[selectedImageIndex].description}</p>
          </div>
        </>
      )}
    </div>
  );
}
