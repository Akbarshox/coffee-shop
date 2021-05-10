import React, {useContext, useEffect} from 'react';
import {BrowserRouter, Switch, Route, Redirect} from "react-router-dom";
import Landing from "./components/MainLayout/Landing";
import Appbar from "./components/Appbar/Appbar";
import Food from "./components/Food/Food";
import CartBottom from "./components/Cart/CartBottom";
import PersonalCart from "./components/Cart/PersonalCart";
import {Store} from "./Store";

function App() {
   const {state} = useContext(Store)
   useEffect(() => {
      if (state.addToCart.length > 0) {
         state.addToCart.map(v => {
            if (v.confirmed === true)
               return localStorage.setItem('orders', JSON.stringify(state.addToCart));
         })
      } else {
         return localStorage.removeItem('orders')
      }
   }, [state.addToCart])

   return (
      <BrowserRouter>
         <Appbar/>
         <Switch>
            <Route exact path="/" render={() => <Redirect to="ru"/>}/>
            <Route exact path="/ru" component={Landing}/>
            <Route exact path={`/restaurant/:id`} component={Food}/>
            <Route exact path={"/personal/cart"} render={(props) => <PersonalCart {...props}/>}/>
         </Switch>
         <Route exact path={"*"} render={(props) => <CartBottom {...props}/>}/>
      </BrowserRouter>
   );
}

export default App;