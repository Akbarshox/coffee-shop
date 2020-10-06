import React from 'react';
import {BrowserRouter, Switch, Route, Redirect} from "react-router-dom";
import Landing from "./components/MainLayout/Landing";

function App() {
   return (
      <BrowserRouter>
         <Switch>
            <Route exact path="/" render={() => <Redirect to="ru"/>} />
            <Route exact path="/ru" component={Landing}/>
         </Switch>
      </BrowserRouter>
   );
}

export default App;
