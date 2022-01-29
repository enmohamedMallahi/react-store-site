import React, { useState } from 'react';
import Product from './Product';
import classes from './ProductsList.module.css';

const ProductsList = () => {
  const [products, setProducts] = useState([
    {
      id: 888676,
      name: 'Book number #1',
      shortDescription: 'A simple book about the nothing thing.',
    },
    {
      id: 7676778,
      name: 'Book number #2',
      shortDescription: 'A complex book about the nothing thing.',
    },
  ]);
  return (
    <div className={classes.products}>
      {products.map((product) => (
        <Product product={product} />
      ))}
    </div>
  );
};

export default ProductsList;
