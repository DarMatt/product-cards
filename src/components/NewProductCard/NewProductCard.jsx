import React, { useEffect, useState } from 'react';
import './NewProduct.css';

export const NewProductCard = ({addProduct}) => {
  const [product, setProduct] = useState({});
  const [name, setName] = useState('');
  const [price, setPrice] = useState(1000);
  const [file, setFile] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    setProduct({
      id : +new Date(),
      name, price, file, description
    })

  }, [name,price, file, description])

  console.log(product.file)

  const handleSubmit = (event) => {
    event.preventDefault();

    addProduct(product);

    setName('');
    setPrice('');
    setDescription('');
    setFile('');
  }

  const handleUpload = (event) => {
    setFile(event.target.files[0]);
  }

  return (
    <form className="new-product"
      onSubmit={handleSubmit}
    >
      <label className="new-product-insert">
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
  
      <label className="new-product-insert" />
        Цена
      <input
        type="number"
        required
        className="new-product-input new-price"
        value={price}
        onChange={(event) => setPrice(event.target.value)}
      />
      
      <div className="input__wrapper" id="upload-box">
        <input
          name="file"
          type="file"
          id="input__file"
          required
          className="input input__file"
          multiple
          onChange={handleUpload}
        />
        <div className="art">Изображение</div> 
        <label htmlFor="input__file" className="input__file-button">
          <span className="input__file-icon-wrapper">
            +  
          </span>
        </label>
        {file && <ImageThumb image={file} />}
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

const ImageThumb = ({ image }) => {
  return <img src={URL.createObjectURL(image)} alt={image.name} />;
};