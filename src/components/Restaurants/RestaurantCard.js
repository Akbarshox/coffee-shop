import React, {useContext, useEffect, useState} from "react";
import {useAsync} from "react-async";
import axios from 'axios';
import Card from "../UI/Card";
import {Grid} from "@material-ui/core";
import filter from 'lodash/filter';
import Wrapper from "../Wrapper";
import style from './rest.module.css';
import {Store} from "../../Store";

const loadData = async ({dispatch}) => {
   try {
      const res = await axios.get('/data.json');
      return res.data
   } catch (error) {
      throw new Error(error.statusText)
   }
}

export default function Restaurants() {
   const {state, dispatch} = useContext(Store);
   const {data, error, isPending} = useAsync({promiseFn: loadData});
   const [searchResult, setSearchResult] = useState(data);

   useEffect(() => {
      dispatch({type: 'FETCH', payload: data})
   }, [dispatch]);

   // useEffect(() => {
   //    setSearchResult(data);
   // }, [data]);

   useEffect(() => {
      const sortBy = (data, filterBy) => {
         if (filterBy) {
            return filter(data, {'categoryId': filterBy});
         } else {
            return data;
         }
      };
      setSearchResult(sortBy(data, state.filterBy))
   }, [data, state.filterBy])
   console.log(searchResult)

   if (isPending) return "loading"
   if (error) return `Something went wrong: ${error.message}`
   if (searchResult)
      return (
         <Wrapper>
            <div className={style.rest}>
               <p>Все рестораны</p>
               <Grid container spacing={4} style={{marginTop: 20}}>
                  {searchResult.map((el, i) =>
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