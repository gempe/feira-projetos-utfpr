import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './containers/Home';
import Challenge from './containers/Challenge';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/desafio" component={Challenge} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
