import React from 'react';
import  './ProductCard.css';

export const ProductCard = ({ product }) => {
  
  return (
    <>
      <figure className="product-image">
        <img
          src={'/public/api/img/1.jpg'}
          alt={product.name}
        />
      </figure>

      <div className="product-inner">
        <h3 className="product-title">{product.name}</h3>
        <p className="product-price">{product.price}</p>
        <p className="product-desc">{product.description}</p>
      </div>
    </>
  )
}