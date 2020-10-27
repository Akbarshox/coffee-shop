import React, {useContext, useEffect, useState} from "react";
import Wrapper from "../../Wrapper";
import Grid from "@material-ui/core/Grid";
import style from '../food.module.css';
import {Store} from '../../../Store';
import delivery from '../../../assets/images/delivery.svg';
import Info from "./Info";

export default function RestInfo(props) {
   const [rest, setRest] = useState();
   const {state} = useContext(Store);

   useEffect(() => {
      if (state.data) {
         state.data.filter(function (data) {
            if (data.id === parseInt(props.match.params.id)) {
               return setRest(data);
            }
         })
      }
   }, [state.data, props.match.params])

   if (rest) {
      return (
         <Wrapper>
            <div className={style.restInfo}>
               <Grid container spacing={3}>
                  <Grid item xs={12} md={6}>
                     <div className={style.logo}>
                        <img src={rest.logo} alt="logo"/>
                        <ul className={style.description}>
                           <li>{rest.name}</li>
                           <li>{rest.title}</li>
                           <li>Заказы от: {rest.minPrice} сум</li>
                           {rest.delivery !== 'Бесплатно' ?
                              <li><img src={delivery} alt="del"/>Сумма доставки: {rest.delivery} сум</li> :
                              <li><img src={delivery} alt="del"/>Сумма доставки: {rest.delivery}</li>
                           }
                        </ul>
                     </div>
                  </Grid>
                  <Grid item xs={12} md={6}>
                     <Info description={rest.description}/>
                  </Grid>
               </Grid>
            </div>
         </Wrapper>
      )
   } else {
      return 'loading'
   }
}