import React from 'react';
import {NavLink} from 'react-router-dom';
import '../static/css/sidenav.css'

class SideNav extends React.Component {
  componentDidMount() {
    console.log(this.props);
  }
  render() {
    return (
      <div>
        <div className="side-nav">
          <div className="nav-item">
            <i className="heart icon"></i><NavLink exact to="/" activeClassName="active">Profile</NavLink>
          </div>
          <div className="nav-item">
            <i className="heart icon"></i><NavLink exact to="/programming" activeClassName="active">Programming</NavLink>
          </div>
        </div>
      </div>
    );
  }
}

export default SideNav;