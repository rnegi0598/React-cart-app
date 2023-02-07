import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import {useState,useEffect} from 'react';
import styles from './cart.module.css';
import RatingStar from '../products/RatingStar';
import {AiFillDelete} from 'react-icons/ai'
import { deleteCart } from '../products/productsSlice';
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
    dispatch(deleteCart(item));
  }


  return (
    <div className={styles.itemContainer}>
      <h1>Cart</h1>
      {
        cart.map((item)=>{
        return <div className={styles.item} key={item.id}>
            <div className={styles.colOne}><img style={{width:'100px'}} src={item.image}/></div>
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

      <div className={styles.total}>Total : {total}</div>
    </div>
  )
}

export default Cart