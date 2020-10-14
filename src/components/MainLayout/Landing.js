import React from 'react';
import Appbar from "../Appbar/Appbar";
import News from "../News/News";
import ScrollBar from "../Scrollbar/ScrollBar";
import Restaurants from "../Restaurants/RestaurantCard";

export default function Landing() {
   return(
      <>
         <Appbar />
         <News />
         <ScrollBar />
         <Restaurants />
      </>
   )
}