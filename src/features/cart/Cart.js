import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import {useState,useEffect} from 'react';
import styles from './cart.module.css';
import RatingStar from '../products/RatingStar';
import {AiFillDelete} from 'react-icons/ai'
import { deleteFromCart } from '../products/productsSlice';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Cart = () => {
  const dispatch=useDispatch();
  const cart =useSelector(state=>state.products.cart);
  const [total,setTotal]=useState(0);
  useEffect(()=>{
    let temp=cart.reduce((total,val)=>{
        return total+val.qty*val.price
    },0)
    setTotal(temp);
  },[cart])

  const deleteItemHandler=(item)=>{
    dispatch(deleteFromCart(item))
    toast.success('Product deleted successfully',{ autoClose: 2000 ,position: "bottom-right"});
  }


  return (
    <div className={styles.itemContainer}>
     
      {
        cart.map((item)=>{
        return <div className={styles.item} key={item.id}>
            <div className={styles.colOne}><img style={{width:'100px'}} src={item.image} alt="logo"/></div>
            <div className={styles.colTwo}>
              <p>{item.title}</p>
              <p>Rs {item.price}</p>
              <p>Qty {item.qty}</p>
              <p><RatingStar rating={Math.ceil(item.rating)} /></p>
            </div>
            <div className={styles.colThree}>
              {item.description}
            </div>
            <button onClick={()=>{deleteItemHandler(item)}}>
              <AiFillDelete/>
            </button>
            
        </div>
      })
      }

      {
        total?<div className={styles.total}><span>Total</span> : Rs {Math.round(total)}</div>:
        <p className={styles.empty}>Cart is empty</p>
      }
    </div>
  )
}

export default Cart