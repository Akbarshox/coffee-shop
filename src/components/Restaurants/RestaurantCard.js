import React from "react";
import {useAsync} from "react-async"
import axios from 'axios';
import Card from "../UI/Card";
import {Grid} from "@material-ui/core";
import Wrapper from "../Wrapper";
import style from './rest.module.css';
import {Sugar} from "react-preloaders";

const loadData = async ({playerId}, {signal}) => {
   try {
      const res = await axios.get('/data.json', {signal});
      return res.data
   } catch (error) {
      throw new Error(error.statusText)
   }
}

export default function Restaurants() {
   const {data, error, isPending} = useAsync({promiseFn: loadData});

   if (isPending) return "loading"
   if (error) return `Something went wrong: ${error.message}`
   if (data)
      return (
         <Wrapper>
            <div className={style.rest}>
               <p>Все рестораны</p>
               <Grid container spacing={3} style={{marginTop: 20}}>
                  {data.map((el, i) =>
                     <Grid key={i} item xs={12} sm={6} md={4}>
                        <Card {...el} />
                     </Grid>
                  )}
               </Grid>
            </div>
         </Wrapper>
      )
   return null
}