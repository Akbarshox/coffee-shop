import React, {createContext, useEffect, useReducer} from 'react';
import reducer from './store/reducer';
import axios from "axios";
import {useAsync} from "react-async";

export const Store = createContext();

const InitialState = {
   data: [],
   food: [],
   filterBy: '',
   addToCart: []
}

const loadData = async () => {
   try {
      const [res, food] = await Promise.all([
         axios.get('/data.json'),
         axios.get('/food.json')
      ])
      return [res.data, food.data]
   } catch (error) {
      throw new Error(error.statusText)
   }
}

export function StoreProvider(props) {
   const [state, dispatch] = useReducer(reducer, InitialState);
   const {data} = useAsync({promiseFn: loadData});
   const value = {state: state, dispatch: dispatch}

   useEffect(() => {
      if (data) {
         dispatch({type: 'FETCH', payload: data[0]})
         dispatch({type: 'FOOD', payload: data[1]})
      }
   }, [data]);

   return (
      <Store.Provider value={value}>{props.children}</Store.Provider>
   )
}