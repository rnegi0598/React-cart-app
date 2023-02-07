import React from "react";
import Product from "./Product";
import styles from "./products.module.css";
import { AiFillCloseCircle } from "react-icons/ai";
import { useState } from "react";
const Products = ({ products }) => {
  const [sort, setSort] = useState(false);

  var productsList = products.slice();
  if (sort) {
    productsList.sort((a, b) => a.price - b.price);
  }

  return (
    <div className={styles.productsDiv}>
      <h1 style={{marginLeft:'20px',marginTop:'10px'}}>Products</h1>
      <div className={styles.sort}>
        <span
          className={styles.sortText}
          onClick={() => {
            setSort(true);
          }}
        >
          Sort by price{" "}
        </span>
        {sort ? (
          <span
            style={{ marginLeft: "5px" }}
            onClick={() => {
              setSort(false);
            }}
          >
            <AiFillCloseCircle style={{ fontSize: "1.5rem",marginBottom:'-5px' }} />
          </span>
        ) : (
          null
        )}
      </div>
      <div>
        {productsList.map((product) => {
          return <Product key={product.id} product={product} />;
        })}
      </div>
    </div>
  );
};

export default Products;
