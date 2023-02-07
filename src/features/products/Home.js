import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "./productsSlice";
import Products from "./Products";

const Home = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const productStatus = useSelector((state) => state.products.status);
  const error = useSelector((state) => state.products.error);

  useEffect(() => {
    if (productStatus === "idle") {
      dispatch(fetchProducts());
    }
  }, [productStatus, dispatch]);

  let content;
  if (productStatus === "loading") {
    content = <p>Loading..</p>;
  } else if (productStatus === "succeeded") {
    content = <Products products={products} />;
  } else if (productStatus === "failed") {
    content = <p>{error}</p>;
  }

  return <div  style={{backgroundColor:'#D3D3D3'}}>{content}</div>;
};

export default Home;
