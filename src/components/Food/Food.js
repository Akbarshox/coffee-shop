import React from 'react';
import RestInfo from "./RestInfo";
import Category from "./Category";

export default function Food(props) {
   return (
      <>
         <RestInfo {...props}/>
         <Category />
         <div style={{marginBottom: 2000}}></div>
      </>
   )
}