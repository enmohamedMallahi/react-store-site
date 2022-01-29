import React from 'react';
import classes from './Header.module.css';

const Header = () => {
  return (
    <nav className={classes.navbar}>
      <strong>React Store</strong>
      <ul>
        <li>
          <a href="/products">Products</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
