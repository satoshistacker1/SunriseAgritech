import React from 'react';
import ProductCard from '../components/ProductCard';
import './HomePage.css'; // Ensure your CSS file is properly imported
import Header from '../components/Header';
import Footer from '../components/Footer';


function HomePage() {
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
    <div className="homepage">
      <h1>Welcome to Sunrise Agritech</h1>
      <div className="product-list">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
        <div className='whatsapp-button'>
        <a href="https://wa.me/917042777172" target="_blank">
        <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" />

          </a>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
}

export default HomePage;

