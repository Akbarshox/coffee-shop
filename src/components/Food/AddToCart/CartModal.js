import React, {useContext, useEffect, useState} from "react";
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
               payload: {
                  "name": e.name,
                  "price": e.price,
                  "image": e.image,
                  "count": 1,
                  "restaurantId": props.match.params.id,
                  "confirmed": false
               }
            })
         }
      } else
         return dispatch({
            type: 'ADD-TO-CART',
            payload: {
               "name": e.name,
               "price": e.price,
               "image": e.image,
               "count": 1,
               "restaurantId": props.match.params.id,
               "confirmed": false
            }
         })
   };
   const handleClose = (e) => {
      setOpen(false);
      state.addToCart.map(v => {
         if (v.name !== e.name && v.price !== e.price && !v.confirmed) {
            return dispatch({type: 'REMOVE-FROM-CART', payload: e})
         }
      })
   };

   const handleAddToCart = (e) => {
      return dispatch({type: 'ADD-TO-CART', payload: e})
   }
   const handleDeleteFromCart = (e) => {
      return dispatch({type: 'DECREMENT-FROM-CART', payload: e})
   }
   const handleApproveOrder = (e) => {
      dispatch({type: 'CONFIRM-ORDER', payload: e})
      setOpen(false)
   }

   function Count(data) {
      let value
      if (state.addToCart.length !== 0)
         state.addToCart.map(v => {
            if (v.name === data.name && v.price === data.price) {
               value = v.count
            } else
               value = '1'
         })
      return value
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
                  <p>{Count(props)}</p>
                  <p>{props.price * Count(props)}</p>
                  <span>
                     <Button btnType="PlusMinus" clicked={() => handleDeleteFromCart(props)}>-</Button>
                     <Button btnType="PlusMinus" clicked={() => handleAddToCart(props)}>+</Button>
                  </span>
               </div>
               <div className={style.approve}>
                  <Button btnType="auth" clicked={() => handleApproveOrder(props)}>Подтвердить</Button>
               </div>
            </div>
         </TransitionsModal>
      </div>
   )
}