import React from 'react';
import  './ProductCard.css';

export const ProductCard = ({ product }) => {
  console.log(product.image)
  const src = (product.image) ? `../../../${product.image}` : URL.createObjectURL(product.file);

  return (
    <>
      <figure className="product-image-wrapper">
        <img className="product-image"
          src={src}
          alt={product.name}
        />
      </figure>

      <div className="product-inner">
        <h3 className="product-title">{product.name}</h3>
        <p className="product-price">{Math.round(product.price)}</p>
        <p className="product-desc">{product.description}</p>
      </div>
    </>
  )
}