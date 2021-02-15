const MAIN_URL = 'https://darmatt.github.io/product-cards';

export const getProducts = () => {
  return fetch(`${MAIN_URL}/api/products.json`)
    .then(response => {
      if (response.ok) {
        return response.json();
      }
    })
}