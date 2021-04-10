import React, {useContext, useEffect} from 'react';
import {BrowserRouter, Switch, Route, Redirect} from "react-router-dom";
import Landing from "./components/MainLayout/Landing";
import Appbar from "./components/Appbar/Appbar";
import Food from "./components/Food/Food";
import CartBottom from "./components/Cart/CartBottom";

function App() {
   return (
      <BrowserRouter>
         <Appbar/>
         <Switch>
            <Route exact path="/" render={() => <Redirect to="ru"/>}/>
            <Route exact path="/ru" component={Landing}/>
            <Route exact path={`/restaurant/:id`} component={Food}/>
         </Switch>
         <CartBottom />
      </BrowserRouter>
   );
}

export default App;
