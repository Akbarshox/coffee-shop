import React, {useContext} from 'react';
import {Grid} from "@material-ui/core";
import {Store} from "../../Store";
import style from './cart.module.css';
import Button from "../UI/Button";
import cancel from '../../assets/images/cancelDelete.svg';

export default function PersonalCart(props) {
   const {state, dispatch} = useContext(Store);

   const handleAddToCart = (e) => {
      return dispatch({type: 'ADD-TO-CART', payload: e})
   }
   const handleDeleteFromCart = (e) => {
      return dispatch({type: 'DECREMENT-FROM-CART', payload: e})
   }
   const removeFromCart = (e) => {
      return dispatch({type: 'REMOVE-FROM-CART', payload: e})
   }

   return (
      <div className={style.personalCart}>
         <Grid container>
            <Grid item xs={12} md={7} xl={7}>
               <h1>Корзина</h1>
               {state.addToCart.map(v =>
                  <div>
                     <div className={style.cartOrders}>
                        <img src={cancel} alt="" className={style.cancel} onClick={() => removeFromCart(v)}/>
                        <img src={v.image} alt="" className={style.imgCart}/>
                        <span>
                        <b>{v.name}</b>
                        <p>{v.price * v.count}</p>
                     </span>
                        <span className={style.plusMinus}>
                        <Button btnType="PlusMinus" disabled={v.count <= 1}
                                clicked={() => handleDeleteFromCart(v)}>-</Button>
                        <Button btnType="PlusMinus" clicked={() => handleAddToCart(v)}>+</Button>
                     </span>
                     </div>
                     <hr className={style.hr}/>
                  </div>
               )}
            </Grid>
         </Grid>
      </div>
   )
}