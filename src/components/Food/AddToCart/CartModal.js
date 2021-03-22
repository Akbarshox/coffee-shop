import React, {useContext, useState} from "react";
import TransitionsModal from "../../UI/Modal";
import Button from "../../UI/Button";
import style from './modal.module.css';
import {Store} from "../../../Store";
import cancel from '../../../assets/images/cancel.svg';

export default function CartModal(props) {
   const {state, dispatch} = useContext(Store);
   const [open, setOpen] = useState(false);
   const [cart, setCart] = useState([]);

   const handleOpen = (e) => {
      setOpen(true);
      // return dispatch({type: 'ADD-TO-CART', payload: props})
   }
   const handleClose = () => {
      setOpen(false);
      // return dispatch({type: 'ADD-TO-CART', payload: []})
   };

   const handleAddToCart = (e) => {
      if (cart.length !== 0) {
         setCart(
            cart.map(v =>
               v.name === e.name && v.price === e.price ?
                  {...v, ["count"]: v.count + 1} : v
            )
         )
      } else
         setCart([...cart, {"name": e.name, "price": e.price, "image": e.image, "count": 1}])
   }
   const handleDeleteFromCart = () => {

   }
   const handleApproveOrder = () => {

   }

   console.log(cart)

   return (
      <div>
         <div className={style.button}>
            <Button btnType="order" clicked={handleOpen}>Добавить</Button>
         </div>
         <TransitionsModal open={open} handleClose={handleClose}>
            <div className={style.modal}>
               <img src={props.image} alt="image" className={style.modalPic}/>
               <img src={cancel} alt="" className={style.cancel} onClick={handleClose}/>
               <h2>{props.name}</h2>
               <h4>Количество</h4>
               <div className={style.price}>
                  <p>1</p>
                  <p>{props.price}</p>
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