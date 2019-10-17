import React from "react";

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import App from './App';
import NotFoundPage from './components/NotFoundPage/NotFoundPage';
import Historic from './views/Historic/Historic'

const Routes = () => (

    <BrowserRouter basename='/'>
      <Switch>
        <Route path='/weather-app' component={() => <App />} />
        <Route path='/historico' component={() => <Historic />} />
        <Route path='*' component={() => <NotFoundPage teste={path} />} />
      </Switch>
    </BrowserRouter>
  );

export default Routes;