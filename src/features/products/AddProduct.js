import React from "react";
import { useState } from "react";
import { addNewProduct } from "./productsSlice";
import { useDispatch } from "react-redux";
import styles from "./addProducts.module.css";




const AddProduct = () => {
  const dispatch=useDispatch();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [rating, setRating] = useState("");

  const formhandler = (e) => {
    e.preventDefault();
    if(name && description && price && rating){
        dispatch(addNewProduct({
          title:name,
          description,
          price,
          rating,
          image:''
        }));
        setName('');
        setDescription('');
        setPrice('');
        setRating('');
    }
  };
  return (
    <div className={styles.container} style={{ backgroundColor: "#D3D3D3" }}>
      <form
        onSubmit={(e) => {
          formhandler(e);
        }}
      >
        <h2>Add a Product</h2>
        <label>
          <p>Name</p>
          <input
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </label>
        <br />
        <label>
          <p>Description</p>
          <textarea
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
        </label>
        <br />
        <label>
          <p>Price</p>
          <input
            type="text"
            value={price}
            onChange={(e) => {
              setPrice(e.target.value);
            }}
          />
        </label>
        <br />
        <label>
          <p>Rating</p>
          <input
            type="text"
            value={rating}
            onChange={(e) => {
              setRating(e.target.value);
            }}
          />
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default AddProduct;
