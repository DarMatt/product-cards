import React from 'react';
import  './ProductCard.css';

export const ProductCard = ({ product, currency, onSelectedId }) => {
  const src = (product.image) ? `https://darmatt.github.io/product-cards/${product.image}` : URL.createObjectURL(product.file);

  return (
    <>
      <figure className="product-image-wrapper">
        <img className="product-image"
          src={src}
          alt={product.name}
          onClick={() => onSelectedId(product.id)}
        />
      </figure>

      <div className="product-inner" onClick={() => onSelectedId(product.id)}>
        <h3 className="product-title">{product.name}</h3>
        {currency === 'USD' ? (
           <p className="product-price">{Math.round(product.price)} USD</p>
        ) : (
          <p className="product-price">{Math.round(product.price)} UAH</p> 
        )}
        <p className="product-desc">{product.description}</p>
      </div>
    </>
  )
}