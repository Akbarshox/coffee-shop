import React, {useContext, useEffect} from 'react';
import RestInfo from "./Info/RestInfo";
import Category from "./Category/Category";
import FoodCard from "./Card/FoodCard";
import {Store} from "../../Store";

export default function Food(props) {
   // window.scrollTo(0, 0)
   const {state} = useContext(Store);

   useEffect(() => {
      if (state.addToCart.length > 0) {
         state.addToCart.map(v => {
            if (v.confirmed === true)
               return localStorage.setItem('orders', JSON.stringify(state.addToCart));
         })
      }
   }, [state.addToCart])
   return (
      <>
         <RestInfo {...props}/>
         <Category {...props}/>
         <FoodCard {...props}/>
      </>
   )
}