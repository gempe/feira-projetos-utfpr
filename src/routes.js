import React from 'react';

import { HashRouter, Switch, Route } from 'react-router-dom';

import Home from './containers/Home';
import Challenge from './containers/Challenge';

const Routes = () => (
  <HashRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/desafio" component={Challenge} />
    </Switch>
  </HashRouter>
);

export default Routes;
