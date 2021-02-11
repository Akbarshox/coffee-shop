import React, {useContext, useEffect, useState} from "react";
import {Grid} from "@material-ui/core";
import {Store} from "../../../Store";
import Wrapper from "../../Wrapper";
import style from './foodcard.module.css';
import CartModal from "../AddToCart/CartModal";
import useMediaQuery from '@material-ui/core/useMediaQuery';

export default function FoodCard(props) {
   const {state} = useContext(Store);
   const [products, setProducts] = useState();
   const matches = useMediaQuery('(max-width:600px)');

   useEffect(() => {
      if (state.food) {
         let data = [];
         state.food.filter(function (o) {
            if (o.id === parseInt(props.match.params.id)) {
               o.categories.map(e => {
                  data.push(e);
               })
            }
         })
         return setProducts(data);
      }
   }, [state.food, props.match.params.id])

   if (products) {
      return (
         <Wrapper>
            <div className={style.main}>
               {products.map((el, i) =>
                  <div key={i} style={{marginTop: 50}} id={"u" + el.id}>
                     <div className={style.scrollTo}/>
                     <p className={style.paragraph}>{el.name}</p>
                     <Grid container spacing={3}>
                        {el.food.map((r, i) =>
                           <Grid key={i} item xs={12} sm={4} md={3}>
                              {matches === false ?
                                 <div className={style.card}>
                                    <div className={style.image}>
                                       <img src={r.image} alt="img"/>
                                       <div className={style.order}>
                                          <CartModal {...r}/>
                                       </div>
                                    </div>
                                    <h3>{r.name}</h3>
                                    <p>{r.price} сум</p>
                                 </div>
                                 : <div className={style.card}>
                                    <div className={style.image}>
                                       <img src={r.image} alt="img"/>
                                       {/*<div className={style.order}>*/}
                                       {/*   <CartModal {...r}/>*/}
                                       {/*</div>*/}
                                    </div>
                                    <h3>{r.name}</h3>
                                    <p>{r.price} сум</p>
                                 </div>}
                           </Grid>
                        )}
                     </Grid>
                  </div>
               )}
            </div>
         </Wrapper>
      )
   } else {
      return 'loading'
   }
}