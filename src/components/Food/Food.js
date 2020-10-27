import React from 'react';
import RestInfo from "./Info/RestInfo";
import Category from "./Category/Category";
import FoodCard from "./Card/FoodCard";

export default function Food(props) {
   window.scrollTo(0, 0)
   return (
      <>
         <RestInfo {...props}/>
         <Category {...props}/>
         <FoodCard {...props}/>
      </>
   )
}