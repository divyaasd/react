import React from 'react';
import data from '../assets/products.json';
import Product from './product';
import './home.css';

function Home() {
  const products = data;

  return (
    <div className="home-container">
      {products.map((product) => (
        <section key={product.id}>
          <Product product={product} />
        </section>
      ))}
    </div>
  );
}

export default Home;
