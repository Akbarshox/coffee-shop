import React from 'react';
import RestInfo from "./RestInfo";
import Category from "./Category";
import FoodCard from "./FoodCard";

export default function Food(props) {
   return (
      <>
         <RestInfo {...props}/>
         <Category {...props}/>
         <FoodCard {...props}/>
      </>
   )
}