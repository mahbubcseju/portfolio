import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import { createBrowserHistory} from 'history';
import {connect} from 'react-redux';
import Home from './home';
import Auth from './admin/auth';
import '../static/css/base.css'


class App extends React.Component {
  render() {
    return (
      <Router history={createBrowserHistory()}>
        <Route exact path="/" component={Home} />
        <Route path="/auth/" component={Auth} />
      </Router>
    );
  }
}

const mapStateToProps = (state) => {
  return state;
}

export default connect(mapStateToProps)(App);