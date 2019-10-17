import React from "react";

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import App from './App';
import NotFoundPage from './components/NotFoundPage/NotFoundPage';
import Historic from './views/Historic/Historic'

const Routes = () => (
    <BrowserRouter>
      <Switch>
      <Route exact path='/' component={() => <App />} />
      <Route exact path='/historico' component={() => <App />} />
      <Route path='*' component={() => <Historic/>} />
      </Switch>
    </BrowserRouter>
  );

export default Routes;