import React from 'react';
import { Link } from 'react-router-dom';

const getImage = (imgName: string) => {
  try {
    return new URL(`../assets/${imgName}`, import.meta.url).href;
  } catch {
    return '';
  }
};

const ProductCard = ({ product }) => {
  return (
    <Link to={`/product/${product.id}`} className="block group">
      <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-800">
        <img
          src={getImage(product.image)}
          alt={product.name}
          className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="mt-4 flex justify-between items-center">
        <h3 className="text-sm font-medium text-gray-900 dark:text-white">{product.name}</h3>
        <p className="text-sm text-primary font-semibold">¥{product.price}</p>
      </div>
    </Link>
  );
};

export default ProductCard;