import React from "react";

import { HashRouter, Route } from 'react-router-dom';

import App from './App';
import NotFoundPage from './components/NotFoundPage/NotFoundPage';
import Historic from './views/Historic/Historic'

const Routes = () => (
    <HashRouter>
      <Route path='/' exact={true} component={() => <App/>} />
      <Route path='/history'  component={() => <Historic/>} />
    </HashRouter>
  );

export default Routes;