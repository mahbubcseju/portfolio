import React from 'react';
import '../static/css/sidenav.css'

class SideNav extends React.Component {
  render() {
    return (
      <div>
        <div className="side-nav">
          <div className="nav-item">
            <i className="heart icon"></i><a href="/">Profile</a>
          </div>
          <div className="nav-item">
            <i className="heart icon"></i><a href="/programming">Programming</a>
          </div>
        </div>
      </div>
    );
  }
}

export default SideNav;