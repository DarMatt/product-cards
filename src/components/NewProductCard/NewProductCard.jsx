import React, { useEffect, useState } from 'react';

export const NewProductCard = ({addProduct}) => {
  const [product, setProduct] = useState({});
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [file, setFile] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    setProduct({
      id : +new Date(),
      name, price, description
    })
  }, [name,price,description])

  const handleSubmit = (event) => {
    event.preventDefault();

      addProduct(product);

    setName('');
    setPrice('');
    setDescription('');
  }

  // console.log(product);

  return (
    <form className="new-product"
      onSubmit={handleSubmit}
    >
      <label className="new-product-label">
        Имя
        <input
          type="text"
          placeholder="Name"
          className="new-product-input new-name"
          required
          value={name}
          onChange={(event) => setName(event.target.value.trimLeft())}
        />
      </label>
  
      <label className="new-product-label" />
        Цена
      <input
        type="number"
        // value="1000"
        required
        className="new-product-input new-price"
        value={price}
        onChange={(event) => setPrice(event.target.value)}
      />
      
      <div class="input__wrapper">
        <input
          name="file"
          type="file"
          id="input__file"
          required
          class="input input__file"
          multiple
        />
        <div className="art">Изображение</div> 
        <label for="input__file" class="input__file-button">
          <span class="input__file-icon-wrapper">
            +  
          </span>
          </label>
      </div>
  
      <textarea
        placeholder="Description"
        className="new-product-label"
        required
        value={description}
        onChange={(event) => setDescription(event.target.value.trimLeft())}
      >

      </textarea>
      <button type="submit" className="new-product-save">Save</button>
    </form>
  )
}