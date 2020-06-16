import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import { createBrowserHistory} from 'history';
import {connect} from 'react-redux';
import SideNav from './sidenav';
import Profile from './profile';
import Programming from './programming';
import '../static/css/base.css'


class App extends React.Component {
  render() {
    return (
      <Router history={createBrowserHistory()}>
        <div className="content">
          <div className="left">
            <SideNav/>
          </div>
          <div className="right">
            <Route exact path="/" component={Profile} />
            <Route exact path="/programming" component={Programming} />
          </div>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return state;
}

export default connect(mapStateToProps)(App);