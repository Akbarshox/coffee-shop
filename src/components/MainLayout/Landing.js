import React from 'react';
import News from "../News/News";
import ScrollBar from "../Scrollbar/ScrollBar";
import Restaurants from "../Restaurants/RestaurantCard";

export default function Landing() {
   return(
      <>
         <News />
         <ScrollBar />
         <Restaurants />
      </>
   )
}