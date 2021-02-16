import React from 'react';
import { ProductCard } from '../ProductCard/ProductCard';
import './ProductList.css';

export const ProductList = ({ products, currency }) => {
  
  return (
    <>
      <ul className="product-list">
        {products.map(product => (
          <li className="product-item" key={product.id}>
            <ProductCard product={ product } currency={currency} />
          </li>
        ))}
      </ul>
    </>
  )
}