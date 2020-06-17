import React from 'react';
import { Route } from 'react-router-dom';
import {connect} from 'react-redux';
import SideNav from './sidenav';
import Profile from './profile';
import Programming from './programming';
import '../static/css/base.css'


class Home extends React.Component {
  render() {
    return (
      <div className="content">
        <div className="left">
          <SideNav/>
        </div>
        <div className="right">
          <Route exact path="/" component={Profile} />
          <Route exact path="/programming" component={Programming} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state;
}

export default connect(mapStateToProps)(Home);