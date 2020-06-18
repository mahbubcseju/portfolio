import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import { createBrowserHistory} from 'history';
import {connect} from 'react-redux';
import Home from './home';
import Auth from './admin/auth';
import GAuth from './admin/gauth';
import '../static/css/base.css'


class App extends React.Component {
  render() {
    return (
      <Router history={createBrowserHistory()}>
        <GAuth/>
        <Switch>
          <Route path="/auth" component={Auth} />
          <Route path="/" component={Home} />
        </Switch>

      </Router>
    );
  }
}

const mapStateToProps = (state) => {
  return state;
}

export default connect(mapStateToProps)(App);