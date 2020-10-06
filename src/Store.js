import React, {createContext, useReducer} from 'react';
import reducer from './store/reducer';

export const Store = createContext();

const InitialState = {
   data: []
}

export function StoreProvider(props) {
   const [state, dispatch] = useReducer(reducer, InitialState);
   const value = {state: state, dispatch: dispatch}
   return(
      <Store.Provider value={value}>{props.children}</Store.Provider>
   )
}