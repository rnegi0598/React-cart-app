import React from "react";
import { useParams } from "react-router-dom";

const ProductView = () => {
  const { id } = useParams();
  return <div>Product {id}</div>;
};

export default ProductView;
