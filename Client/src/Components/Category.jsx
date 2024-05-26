import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../ComponentsCss/Category.css';
import { Link, NavLink,useNavigate } from 'react-router-dom'
import { BASE_URL } from '../config';

function Category(props) {
  const [categories, setCategories] = useState([]);
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
    <div className="app">
      <div className="categories">
        {categories.map(category => (
          <div key={category.id} className="category" onClick={()=>nextPage()}>
            <img src={category.imageUrl} alt={category.name} />
            <p>{category.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Category;
