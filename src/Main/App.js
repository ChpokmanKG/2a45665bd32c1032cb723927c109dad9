import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AuthInn from "./features/Auth-inn";


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/auth-inn' component={AuthInn}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
