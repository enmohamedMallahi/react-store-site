import React from 'react';
import classes from './Product.module.css';

const Product = ({ product }) => {
  return (
    <div className={classes.product}>
      <ul>
        <li>{product.name}</li>
        <li>{product.price}</li>
        <li>{product.shortDescription}</li>
      </ul>
    </div>
  );
};

export default Product;
