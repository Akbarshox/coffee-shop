import React, {useContext, useEffect} from 'react';
import RestInfo from "./Info/RestInfo";
import Category from "./Category/Category";
import FoodCard from "./Card/FoodCard";
import {Store} from "../../Store";

export default function Food(props) {
   useEffect(() => {
      window.scroll(0, 0)
   }, [props.match.path])

   return (
      <>
         <RestInfo {...props}/>
         <Category {...props}/>
         <FoodCard {...props}/>
      </>
   )
}