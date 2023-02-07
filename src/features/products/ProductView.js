import React from "react";
import { useParams } from "react-router-dom";
import RatingStar from "./RatingStar";
import {addCart} from './productsSlice';
import {useDispatch,useSelector} from 'react-redux';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductView = () => {
  const { id } = useParams();
  const dispatch=useDispatch();
  const products = useSelector((state) => state.products.products);
  const product = products.find((product) => product.id === Number(id));
  const addToCartHandler=()=>{
    
    dispatch(addCart(product));
    toast.success('Product updated successfully',{ autoClose: 2000 ,position: "bottom-right"});

  }

  return (
    <div style={{ backgroundColor: "#D3D3D3", padding: "10px" }}>
      <div
        style={{
          backgroundColor: "white",
          width: "70%",
          margin: "auto",
          padding: "20px",
        }}
      >
        <p>
          <img src={product.image} alt="prod-img" style={{ width: "300px" }} />
        </p>
        <h2>{product.title}</h2>
        <p>Rs {product.price}</p>
        <p>
          <RatingStar rating={product.rating} />
        </p>
        <p style={{fontSize:'1.2rem'}}>{product.description}</p>
        <button style={{fontSize:'1.5rem',padding:'10px',margin:'10px',fontWeight:'600'}} onClick={addToCartHandler}>Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductView;
