import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import AppProvider from './context/AppProvider';

const routing = (
  <AppProvider>
      <Router>
          <Switch>
              {/* <Route exact path="/" component={App} />
              <Route path="/product/:id" component={Product} />
              <Route path="/checkout" component={Checkout} />
              <Route path="/ordercomplete" component={PlacedOrder}/> */}
              <Route component={App} />
          </Switch>
      </Router>
  </AppProvider>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
