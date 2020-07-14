import React from 'react';
import { HashRouter as Router, Route, Switch } from 'dva/router';
import Home from './routes/Home/Home'
import Login from './routes/Login/Login'
import Register from './routes/Register/Register'
import RemberPass from './routes/RemberPass/RemberPass'
import Product from './components/client/ClientComponent'

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/set_password" component={RemberPass} />
          <Route path="/client/:child/:id" component={Product} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
