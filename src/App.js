import React, { useEffect, useState } from 'react';
import { getProducts } from './components/api/api.jsx';
import { ProductList } from './components/ProductList/ProductList.jsx';
import './App.css';
import { NewProductCard } from './components/NewProductCard/NewProductCard.jsx';

export const App = () => {
  const [products, setProducts] = useState([]);
  const [visibleProducts, setVisibleProducts] = useState(products);
  const [sortValue, setSortValue] = useState('alphabetically');
  const [numberFrom, setNumberFrom] = useState(0);
  const [numberTo, setNumberTo] = useState(10000);

  const addProduct = (product) => {
    setVisibleProducts([...visibleProducts, product])
  }
  
  useEffect(() => {
    getProducts().then(productsFromServer => {
      setProducts(productsFromServer.products)
    })
  }, []);

  useEffect(() => {
    switch (sortValue) {
      case 'alphabetically':
        setVisibleProducts([...products].sort((a, b) => (
          a.name.localeCompare(b.name)
        )))
        break;

      case 'ascending':
        setVisibleProducts([...products].sort((a, b) => (
          a.price - b.price
        )))
        break;
  
      case 'descending':
        setVisibleProducts([...products].sort((a, b) => (
          b.price - a.price
        )));
        break;

      default:
        break;
    }
  }, [sortValue, products]);
  
  useEffect(() => {
    setVisibleProducts([...products].sort((a, b) => (
      a.price - b.numberFrom
    )));
  }, [numberFrom])
  
  // console.log(numberFrom)

  return (
    <div className="wrapper">
      <div className="content">
        <div className="content-sort">
          <form>
            <h2 className="content-price">Цена</h2>
            <div className="content-inner-label">
            <label className="content-from-label">
                от:
              <input
                  className="content-from"
                  type="number"
                  onChange={(event) => setNumberFrom(event.target.value)}
              />
              </label>
              <label className="content-to-label">
              до:
              <input type="number" className="content-to" />
              </label>
              </div>
            <h2 className="currency">Валюта</h2>
            <button type="button">USD</button>
            <button type="button">UAH</button>
            <h2 className="content-sort">Сортировка</h2>
            <label className="radio-button">
              <input
                className="radio-input"
                type="radio"
                name="sorting"
                value="ascending"
                onClick={(event) => setSortValue(event.target.value)}
              />
              по возростанию цены
            </label>

            <label className="radio-button">
              <input
                className="radio-input"
                type="radio"
                name="sorting"
                value="descending"
                onClick={(event) => setSortValue(event.target.value)}
            />
              по убыванию цены
            </label>

            <label className="radio-button">
              <input
                className="radio-input"
                type="radio"
                name="sorting"
                value="alphabetically"
                onClick={(event) => setSortValue(event.target.value)}
              />
              по алфавиту
            </label>
          </form>
          <NewProductCard addProduct={addProduct} />
          </div>
        <div className="product-list">
          <ProductList products={ visibleProducts }/>
        </div>
      </div>
    </div>
  )
}
