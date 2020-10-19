import React, {useContext, useEffect} from 'react';
import {BrowserRouter, Switch, Route, Redirect} from "react-router-dom";
import Landing from "./components/MainLayout/Landing";
import Appbar from "./components/Appbar/Appbar";
import Food from "./components/Food/Food";

function App() {
   return (
      <BrowserRouter>
         <Appbar/>
         <Switch>
            <Route exact path="/" render={() => <Redirect to="ru"/>}/>
            <Route exact path="/ru" component={Landing}/>
            <Route exact path={`/restaurant/:id`} component={Food}/>
         </Switch>
      </BrowserRouter>
   );
}

export default App;
