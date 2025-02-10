import React from "react";
import './Products.css';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Products() {
  const products = [
    {
      id: 1,
      name: 'Electric Drill',
      price: 1999,
      image: 'https://via.placeholder.com/300x200',
    },
    {
      id: 2,
      name: 'Angle Grinder',
      price: 2499,
      image: 'https://via.placeholder.com/300x200',
    },
    {
      id: 3,
      name: 'Welding Machine',
      price: 7499,
      image: 'https://via.placeholder.com/300x200',
    },
  ];

  return (
    <>
    <Header/>
      <div className="products-container">
        <h1>Our Products</h1>
        <div className="products-list">
          {products.map(product => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.name} className="product-image" />
              <h3 className="product-name">{product.name}</h3>
              <p className="product-price">₹{product.price}</p>
              <Link to={`/product/${product.id}`} className="product-link">
                View Details
              </Link>
            </div>
          ))}
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default Products;
