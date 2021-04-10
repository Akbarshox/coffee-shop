import React, {useContext} from 'react';
import style from './cart.module.css';
import cartBottom from '../../assets/images/cartBottom.svg';
import {Store} from "../../Store";

export default function CartBottom() {
   const {state} = useContext(Store);
   let cart = JSON.parse(localStorage.getItem('orders'))

   function formatMoney(number) {
      if (Number(number) === number && number % 1 !== 0) {
         var parts = number.toFixed(2).toString().split(".");
         parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ");
         return parts.join(".");
      } else {
         var parts = number.toString().split(".");
         parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ");
         return parts.join(".");
      }
   }

   function totalCount(data) {
      let value = 0;
      data.map(v => {
         value += v.count * v.price
      })
      return formatMoney(value)
   }

   if (state.addToCart.length > 0) {
      return (
         <div className={[style.container, style.fixed].join(' ')}>
            <p className={style.cartText}>
               В вашей
               корзине <b>{state.addToCart.length > 1 ? state.addToCart.length + ' товара' : state.addToCart.length + ' товар'}</b> на
               сумму <b>{totalCount(state.addToCart)} сум</b>
            </p>
            <div className={style.cart}>
               <img src={cartBottom} alt="" width={30}/> Корзина
            </div>
         </div>
      )
   } else
      return ''
}