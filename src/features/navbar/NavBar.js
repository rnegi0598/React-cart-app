import styles from "./navbar.module.css";
import React from "react";
import { Link } from "react-router-dom";
import logo from './logo-eCart.png';
import {BsFillCartFill} from 'react-icons/bs'
import { useSelector } from "react-redux";
const NavBar = () => {
  const cart =useSelector(state=>state.products.cart);
  const count=cart.reduce((total,value)=>{
    return total+value.qty;
  },0);
  return (
    <div className={styles.container}>
      <nav>
        <ul>
        <li>
          <Link to='/' >
            <img src={logo}/>
          </Link>
        </li>
          <li>
            <Link to="/">Products</Link>
          </li>
          <li>
            <Link to="/add-product">AddProduct</Link>
          </li>
          <li className={styles.cart}>
            <Link to="/cart">
              <BsFillCartFill style={{fontSize:"4rem"}}/>
              <span className={styles.count}>{count}</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
