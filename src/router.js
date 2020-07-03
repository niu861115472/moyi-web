import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import Home from './routes/Home/Home'
import Login from './routes/Login/Login'
import Register from './routes/Register/Register'

  function RouterConfig({ history }) {
    return (
      <Router history={history}>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/register" component={Register} />
        </Switch>
      </Router>
    );
  }

export default RouterConfig;
