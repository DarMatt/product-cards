import React, { useEffect, useState } from 'react';
import './NewProduct.css';

export const NewProductCard = ({addProduct}) => {
  const [product, setProduct] = useState({});
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [file, setFile] = useState('');
  const [description, setDescription] = useState('');
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setProduct({
      id : +new Date(),
      name, price, file, description
    })

  }, [name,price, file, description])

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(product.file)
    if (product.file.Error) {
      setVisible(true)
    }

      addProduct(product);

    setName('');
    setPrice('');
    setDescription('');
    setFile('');
  }


  const handleUpload = (event) => {
    setFile(event.target.files[0]);
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
      
      <div class="input__wrapper" id="upload-box">
        <input
          name="file"
          type="file"
          id="input__file"
          required
          class="input input__file"
          multiple
          onChange={handleUpload}
        />
        {!visible ? (
          <p className="hidden"></p>
        ) : (
          <p className="visible">Не выбрано изображение</p>
          )}
        <div className="art">Изображение</div> 
        <label for="input__file" class="input__file-button">
          <span class="input__file-icon-wrapper">
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