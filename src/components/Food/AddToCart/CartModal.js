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
   const [globalCart, setglobalCart] = useState([]);

   const handleOpen = (e) => {
      setOpen(true);
      if (state.addToCart.length !== 0) {
         state.addToCart.map(v => {
            if (v.name === e.name && v.price === e.price)
               return v
         })
      } else
         return dispatch({
            type: 'ADD-TO-CART',
            payload: {"name": e.name, "price": e.price, "image": e.image, "count": 1}
         })
   };
   const handleClose = (e) => {
      setOpen(false);
   };

   const handleAddToCart = (e) => {
      if (state.addToCart.length !== 0) {
         // return dispatch({type: 'ADD-TO-CART', payload: e})
         state.addToCart.map(v =>
            v.name === e.name && v.price === e.price ?
               {...v, ["count"]: v.count + 1, ["totalPrice"]: (v.count + 1) * v.price} : v
         )
      } else
         setCart([...cart, {"name": e.name, "price": e.price, "image": e.image, "count": 1}])
      return dispatch({type: 'ADD-TO-CART', payload: e})
   }
   const handleDeleteFromCart = () => {

   }
   const handleApproveOrder = () => {
      setglobalCart([...globalCart, cart[0]])
      setOpen(false)
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
                  {cart.map(v =>
                     <div className={style.price}>
                        <p>{v.image === props.image ? v.count : 1}</p>
                        <p>{props.price}</p>
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