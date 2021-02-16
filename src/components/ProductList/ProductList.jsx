import React from 'react';
import { ProductCard } from '../ProductCard/ProductCard';
import './ProductList.css';

export const ProductList = ({ products }) => {
  
  return (
    <>
      <ul className="product-list">
        {products.map(product => (
          <li className="product-item" key={product.id}>
            <ProductCard product={ product }/>
          </li>
        ))}
      </ul>
    </>
  )
}