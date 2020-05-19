import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import SideNav from './sidenav';
import Profile from './profile';
import Programming from './programming';
import '../static/css/base.css'


class App extends React.Component {
  render() {
    return (

      <div className="content">
        <div className="left">
          <SideNav/>
        </div>
        <div className="right">
          <Router>
            <Route exact path="/" component={Profile} />
            <Route path="/programming" component={Programming} />
          </Router>
        </div>
      </div>
    );
  }
}

export default App;