import React, {createContext, useEffect, useReducer} from 'react';
import reducer from './store/reducer';
import axios from "axios";
import {useAsync} from "react-async";

export const Store = createContext();

const InitialState = {
   data: [],
   filterBy: ''
}

const loadData = async () => {
   try {
      const res = await axios.get('/data.json');
      return res.data
   } catch (error) {
      throw new Error(error.statusText)
   }
}

export function StoreProvider(props) {
   const [state, dispatch] = useReducer(reducer, InitialState);
   const {data} = useAsync({promiseFn: loadData});
   const value = {state: state, dispatch: dispatch}

   useEffect(() => {
      dispatch({type: 'FETCH', payload: data})
   }, [data]);

   return(
      <Store.Provider value={value}>{props.children}</Store.Provider>
   )
}