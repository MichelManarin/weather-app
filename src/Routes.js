import React from "react";

import { HashRouter, Route } from 'react-router-dom';

import App from './App';
import NotFoundPage from './components/NotFoundPage/NotFoundPage';
import Historic from './views/Historic/Historic'

const Routes = () => (
    <HashRouter>
      <Route path='/weather-app' exact={true} component={() => <App/>} />
      <Route path='/weather-app/history'  component={() => <Historic/>} />
    </HashRouter>
  );

export default Routes;