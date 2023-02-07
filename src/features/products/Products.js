import React from "react";
import Product from "./Product";
const Products = ({ products }) => {

  return (
    <div>
      <h1>Products</h1>
      <div>
        {products.map((product) => {
          return (
            <Product  key={product.id} product={product}/>
          );
        })}
      </div>
    </div>
  );
};

export default Products;
