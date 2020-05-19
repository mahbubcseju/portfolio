import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import SideNav from './sidenav';
import Profile from './profile';
import Programming from './programming';
import '../static/css/base.css'


class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="content">
          <div className="left">
            <SideNav/>
          </div>
          <div className="right">
            <Route exact path="/" component={Profile} />
            <Route path="/programming" component={Programming} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;