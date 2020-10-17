import React, {useContext, useEffect, useState} from "react";
import {useAsync} from "react-async";
import axios from 'axios';
import Card from "../UI/Card";
import {Grid} from "@material-ui/core";
import filter from 'lodash/filter';
import Wrapper from "../Wrapper";
import style from './rest.module.css';
import {Store} from "../../Store";
import Button from "../UI/Button";

const loadData = async () => {
   try {
      const res = await axios.get('/data.json');
      return res.data
   } catch (error) {
      throw new Error(error.statusText)
   }
}

export default function Restaurants() {
   const {state} = useContext(Store);
   const {data, error, isPending} = useAsync({promiseFn: loadData});
   const [searchResult, setSearchResult] = useState(data);
   const [offset, setOffset] = useState(0);
   const extraData = 9;

   useEffect(() => {
      const sortBy = (data, filterBy) => {
         if (state.filterBy.length !== 0) {
            let collection = [];
            filter(data, function (o) {
               o.categoryId.forEach(el => {
                  if (el.id === parseInt(filterBy)) {
                     collection.push(o)
                  }
               })
            })
            return collection
         } else {
            return data
         }
      }
      if (data) {
         setSearchResult(sortBy(data, state.filterBy).slice(0, extraData + offset))
      }
   }, [data, state.filterBy, offset, extraData])
   const handleClick = () => {
      setOffset(offset + 3);
      console.log(offset)
   }

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
            <div className={style.btn}>
               <Button btnType="auth" clicked={() => handleClick()}>Показать еще</Button>
            </div>
         </Wrapper>
      )
   return null
}