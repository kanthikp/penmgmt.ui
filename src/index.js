/* eslint-disable import/default */

import React from 'react';
import { render } from 'react-dom';
//import { AppContainer } from 'react-hot-loader';
import { history } from './store/configureStore';
//import Root from './components/Root';
import './styles/styles.scss'; // Yep, that's right. You can import SASS/CSS files too! Webpack will run the associated loader and plug this into the page.
require('./favicon.ico'); // Tell webpack to load favicon.ico
//import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";

// core components
import Admin from "layouts/Admin.jsx";
//import RTL from "layouts/RTL.jsx";

import "assets/css/material-dashboard-react.css";
//const store = configureStore();

render(
  //<AppContainer>
    //<Root store={store} history={history} />
    <Router history={history}>
      <Switch>
        <Route path="/admin" component={Admin} />
        <Redirect from="/" to="/admin/dashboard" />
      </Switch>
    </Router>
  //</AppContainer>,
  ,document.getElementById('app')
);

/* if (module.hot) {
  module.hot.accept('./components/Root', () => {
    //const NewRoot = require('./components/Root').default;
    render(
     // <AppContainer>
       // <NewRoot store={store} history={history} />
        <Router history={history}>
          <Switch>
            <Route path="/admin" component={Admin} />
            <Route path="/rtl" component={RTL} />
            <Redirect from="/" to="/admin/dashboard" />
          </Switch>
        </Router>
      //</AppContainer>,
      ,document.getElementById('app')
    );
  });
} */


//const hist = createBrowserHistory();

/* render(
  <Router history={history}>
    <Switch>
      <Route path="/admin" component={Admin} />
      <Route path="/rtl" component={RTL} />
      <Redirect from="/" to="/admin/dashboard" />
    </Switch>
  </Router>,
  document.getElementById("app")
); */
