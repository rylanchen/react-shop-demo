import { useEffect, useState } from 'react';
import productsData from '../data/products.json';

const useProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(productsData);
  }, []);

  return products;
};

export default useProducts;