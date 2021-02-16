import React from 'react';
import './Details.css';

export const Details = ({ product, currency, reset }) => {

  return (
    <>
      { product && (
        
        <div className="details-img">
  
          <div className="details__inner">
          <div className='details__img-inner'>
          <img
            className="phone"
            src={`https://darmatt.github.io/product-cards/${product.image}`}
            alt={product.name}
            />
            </div>
            <button
              className="reset-btn"
              type="button"
              onClick={() => reset()}
            >
              Back
          </button>
          </div>
  
          <div className="text">
          <h1>{product.name}</h1>

          {currency === 'USD' ? (
           <p className="product-price">{Math.round(product.price)} USD</p>
          ) : (
          <p className="product-price">{Math.round(product.price)} UAH</p> 
          )}
  
          <p>
            {product.description}
          </p>
  
          <span>Availability and Networks</span>
          </div>
        </div>
        )}
    </>
    )
}