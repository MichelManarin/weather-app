import React from "react";

import { BrowserRouter, Switch, Route } from 'react-router-dom'

import App from './App';
import NotFoundPage from './components/NotFoundPage/NotFoundPage';
import Historic from './views/Historic/Historic'

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact={true} component={App} />
      <Route path="/history" component={Historic} />
    </Switch>
  </ BrowserRouter>
  );

export default Routes;