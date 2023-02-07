import React from "react";
import styles from "./products.module.css";
import RatingStar from "./RatingStar";
import { AiFillDelete, AiFillEdit, AiFillSave } from "react-icons/ai";
import noImage from "./No_Image_Available.jpg";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateProduct } from "./productsSlice";
import { deleteProduct } from "./productsSlice";
const Product = ({ product }) => {
    const dispatch=useDispatch();
  const [title, setTitle] = useState(product.title);
  const [price, setPrice] = useState(product.price);
  const [rating, setRating] = useState(product.rating);
  const [description, setDescription] = useState(product.description);
  const [editMode, setEditMode] = useState(false);

  const editHandler = () => {
    setEditMode(true);

  };
  const saveHandler=()=>{
    setEditMode(false);
    if(title!==product.title || price!==product.price || rating!==product.rating || description!==product.description){
        dispatch(updateProduct({
            id:product.id,
            title,
            price,
            rating,
            description,
            image:product.image
        }))
        .unwrap()
        .then((result)=>{
            console.log(result);
        })
        .catch((rejectedError)=>{
            console.log(rejectedError);
        })
    }
  };

  const deleteHandler=()=>{
    dispatch(deleteProduct(product.id));
  }

  return (
    <>
      <div className={styles.container}>
        <div className={styles.product}>
          <div className={styles.colOne}>
            <div className={styles.imgDiv}>
              {product.image ? (
                <img src={product.image} alt="prod-img" />
              ) : (
                <img src={noImage} alt="prod-img" />
              )}
            </div>
            <div className={styles.imgRight}>
              <p className={styles.title}>
                <input
                  value={title}
                  onChange={(e) => {
                    setTitle(e.target.value);
                  }}
                  readOnly={!editMode}
                  style={editMode ? {} : { border: "none" }}
                />
              </p>
              <p className={styles.price}>
                <span>Rs </span>
                <input
                  type="number"
                  value={price}
                  onChange={(e) => {
                    setPrice(e.target.value);
                  }}
                  readOnly={!editMode}
                  style={editMode ? {} : { border: "none" }}
                />
              </p>
              <div className={styles.rating}>
                {editMode ? (
                  <>
                    <span>Rating</span>
                    <select
                      name="rating"
                      value={rating}
                      onChange={(e) => {
                        setRating(e.target.value);
                      }}
                      readOnly={!editMode}
                      style={editMode ? {} : { border: "none" }}
                    >
                      <option value={rating} disabled hidden>
                        {rating}
                      </option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                    </select>
                  </>
                ) : (
                  <RatingStar rating={Math.ceil(product.rating)} />
                )}
              </div>
            </div>
          </div>
          <div className={styles.colTwo}>
            <p>
              <textarea
                cols="40"
                rows="8"
                value={description}
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
                readOnly={!editMode}
                style={editMode ? {} : { border: "none" }}
              />
            </p>
          </div>
        </div>
        <div className={styles.controls} style={{ textAlign: "right" }}>
          {editMode ? (
            <AiFillSave
              style={{ fontSize: "2rem", marginRight: "10px" }}
              onClick={saveHandler}
            />
          ) : (
            <AiFillEdit
              style={{ fontSize: "2rem", marginRight: "10px" }}
              onClick={editHandler}
            />
          )}

          <AiFillDelete style={{ fontSize: "2rem" }} onClick={deleteHandler} />
        </div>
      </div>
    </>
  );
};

export default Product;
