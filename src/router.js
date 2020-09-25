import React from 'react';
import { HashRouter as Router, Route, Switch } from 'dva/router';
import Home from './routes/Home/Home'
import Login from './routes/Login/Login'
import Register from './routes/Register/Register'
import RemberPass from './routes/RemberPass/RemberPass'
<<<<<<< HEAD
import Product from './components/client/ClientComponent'
=======
import ClientComponent from './components/client/ClientComponent'
import NotFound from './routes/404/NotFound'
>>>>>>> 9-25 update

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
<<<<<<< HEAD
          <Route path="/" exact component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/set_password" component={RemberPass} />
          <Route path="/client/:child/:id" component={Product} />
=======
          <Route path="/" exact component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/set_password" component={RemberPass} />
          <Route path="/client/:child/:id" component={ClientComponent} />
          <Route component={NotFound} />
>>>>>>> 9-25 update
      </Switch>
    </Router>
  );
}

export default RouterConfig;
