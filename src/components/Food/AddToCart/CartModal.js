import React, {useContext, useState} from "react";
import TransitionsModal from "../../UI/Modal";
import Button from "../../UI/Button";
import style from './modal.module.css';
import {Store} from "../../../Store";
import cancel from '../../../assets/images/cancel.svg';

export default function CartModal(props) {
   const {state, dispatch} = useContext(Store);
   const [open, setOpen] = useState(false);

   const handleOpen = (e) => {
      setOpen(true);
      if (state.addToCart.length !== 0) {
         const exists = state.addToCart.some((p) => p.name === props.name && p.price === props.price);
         if (!exists) {
            return dispatch({
               type: 'ADD-TO-CART',
               payload: {"name": e.name, "price": e.price, "image": e.image, "count": 1}
            })
         }
      } else
         return dispatch({
            type: 'ADD-TO-CART',
            payload: {"name": e.name, "price": e.price, "image": e.image, "count": 1}
         })
   };
   const handleClose = (e) => {
      setOpen(false);
      return dispatch({type: 'REMOVE-FROM-CART', payload: e})
   };

   const handleAddToCart = (e) => {
      return dispatch({type: 'ADD-TO-CART', payload: e})
   }
   const handleDeleteFromCart = (e) => {
      return dispatch({type: 'DECREMENT-FROM-CART', payload: e})
   }
   const handleApproveOrder = () => {
      setOpen(false)
      localStorage.setItem('orders', JSON.stringify(state.addToCart))
   }

   console.log(state.addToCart)
   return (
      <div>
         <div className={style.button}>
            <Button btnType="order" clicked={() => handleOpen(props)}>Добавить</Button>
         </div>
         <TransitionsModal open={open} handleClose={() => handleClose(props)}>
            <div className={style.modal}>
               <img src={props.image} alt="image" className={style.modalPic}/>
               <img src={cancel} alt="" className={style.cancel} onClick={handleClose}/>
               <h2>{props.name}</h2>
               <h4>Количество</h4>
               <div className={style.price}>
                  {state.addToCart.map(v =>
                     <div className={style.price}>
                        <p>{v.image === props.image && v.name === props.name ? v.count : null}</p>
                        <p>{v.image === props.image && v.name === props.name ? v.price*v.count : null}</p>
                     </div>
                  )}
                  <span>
                     <Button btnType="PlusMinus" clicked={() => handleDeleteFromCart(props)}>-</Button>
                     <Button btnType="PlusMinus" clicked={() => handleAddToCart(props)}>+</Button>
                     </span>
               </div>
               <Button btnType="auth" clicked={() => handleApproveOrder()}>Подтвердить</Button>
            </div>
         </TransitionsModal>
      </div>
   )
}