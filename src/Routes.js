import React from "react";

import { BrowserRouter, Switch, Route } from 'react-router-dom'

import App from './App';
import NotFoundPage from './components/NotFoundPage/NotFoundPage';
import Historic from './views/Historic/Historic'

const Routes = () => (
    <HashRouter basename="/">
      <Route exact path='/' component={() => <App/>} />
      <Route path='/history'  component={() => <Historic/>} />
      <Route path='*' exact={true} component={NotFoundPage} />
    </HashRouter>
  );

export default Routes;