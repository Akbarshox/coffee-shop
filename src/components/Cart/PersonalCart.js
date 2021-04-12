import React, {useContext} from 'react';
import {Store} from "../../Store";

export default function PersonalCart() {
   const {state} = useContext(Store);
   console.log(state.addToCart)
   return (
      <div>
         Cart
      </div>
   )
}