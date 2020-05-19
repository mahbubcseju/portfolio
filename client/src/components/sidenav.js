import React from 'react';
import {Link} from 'react-router-dom';
import '../static/css/sidenav.css'

class SideNav extends React.Component {
  render() {
    return (
      <div>
        <div className="side-nav">
          <div className="nav-item">
            <i className="heart icon"></i><Link to="/">Profile</Link>
          </div>
          <div className="nav-item">
            <i className="heart icon"></i><Link to="/programming">Programming</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default SideNav;