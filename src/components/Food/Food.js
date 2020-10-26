import React from 'react';
import RestInfo from "./RestInfo";
import Category from "./Category";
import FoodCard from "./FoodCard";

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