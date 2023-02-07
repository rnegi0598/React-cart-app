import styles from "./navbar.module.css";
import React from "react";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <div className={styles.container}>
      <nav>
        <ul>
        <li>
          <Link to='/' >App Icon</Link>
        </li>
          <li>
            <Link to="/">Products</Link>
          </li>
          <li>
            <Link to="/add-product">AddProduct</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
