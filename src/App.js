import React, { useEffect, useState } from 'react';
import { getProducts } from './components/api/api.jsx'
import './App.css';

export const App = () => {
  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    getProducts().then(setProducts)
  }, [])

  console.log(products)

  return (
    <div className={"wrapper"}>
      <div className={"content"}>
        <form className={"content-sort"}>
          <h2 className={"content-price"}>Цена</h2>
          <label className="content-from">
            от:
            <input type="number"></input>
          </label>
          <label className="content-to">
            до:
            <input type="number"></input>
          </label>
          <h2>Валюта</h2>
          <button type="button">USD</button>
          <button type="button">UAH</button>
          <h2>Сортировка</h2>
          <label>
          <input
            type="radio"
            name="Ascending"
            value="Ascending"
            />
            по возростанию цены
          </label>

         <input
            type="radio"
            name="descending"
            value="descending"
          />
          <input
            type="radio"
            name="alphabetically"
            value="alphabetically"
          />
        </form>
      </div>
    </div>
  )
}
