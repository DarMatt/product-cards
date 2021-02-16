import React, { useEffect, useMemo, useState } from 'react';
import { getProducts } from './components/api/api.jsx';
import { ProductList } from './components/ProductList/ProductList.jsx';
import './App.css';
import { NewProductCard } from './components/NewProductCard/NewProductCard.jsx';
import { Details } from './components/Details/Details.jsx';

export const App = () => {
  const [products, setProducts] = useState([]);
  const [sortValue, setSortValue] = useState('alphabetically');
  const [numberFrom, setNumberFrom] = useState(0);
  const [numberTo, setNumberTo] = useState(100000);
  const [currency, setCurrency] = useState('UAH')
  const [selectedId, setSelectedId] = useState('')
  const [details, setDetails] = useState({});

  useEffect(() => {
    getProducts().then(productsFromServer => {
      setProducts(productsFromServer.products)
    })
  }, []);

  const addProduct = (product) => {
    setProducts([...products, product]);
  }
  
  let filteredProducts = useMemo(() => products.filter((product) => {
    return product.price >= numberFrom && product.price <= numberTo
  }), [numberTo, numberFrom, sortValue, products])

  const sortedProducts = useMemo(() => {
    switch (sortValue) {
      case 'alphabetically':
        return [...filteredProducts].sort((a, b) => (
          a.name.localeCompare(b.name)
        ))

      case 'ascending':
        return [...filteredProducts].sort((a, b) => (
          a.price - b.price
        ))
  
      case 'descending':
        return [...filteredProducts].sort((a, b) => (
          b.price - a.price
        ));
       
      default:
        return filteredProducts
    }
  }, [sortValue, filteredProducts])
  

  useEffect(() => {
    setProducts(products.map(product => {
      if (currency === 'USD') {
        return {
          ...product,
          price: +product.price / 28
        };
      } else {
        return {
          ...product,
          price: +product.price * 28
        }
      }
    }))
  }, [currency])

  const onSelectedId = (id) => {
    setSelectedId(id)
  }

  const reset = () => {
    setSelectedId('')
  }

  useEffect(() => {
    setDetails(products.filter(product => (product.id === selectedId)))
  }, [selectedId])

  return (
    <div className="wrapper">
      <div className="content">
        {!selectedId ? (
          <>
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
                  <input
                      type="number"
                      className="content-to"
                      onChange={(event) => {
                        if (!event.target.value) {
                          setNumberTo(Infinity)
                        } else {
                          setNumberTo(event.target.value)
                        }}}
                    />
                  </label>
                  </div>
                <h2 className="currency">Валюта</h2>
                <button
                  className="usd"
                  type="button"
                  value="USD"
                  onClick={(event) => setCurrency(event.target.value)}>
                  USD
                  </button>
                <button
                  className="uah"
                  type="button"
                  value="UAH"
                  onClick={(event) => setCurrency(event.target.value)}>
                  UAH
                  </button>
                <h2 className="content-sorting">Сортировка</h2>
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
            <div className="product-wrapper-list">
              <ProductList
                products={sortedProducts}
                currency={currency}
                onSelectedId={onSelectedId}
              />
            </div>
          </>
        ) : (
            <Details
              product={details[0]}
              currency={currency}
              reset={reset}
            />
          )}
      </div>
    </div>
  )
}
