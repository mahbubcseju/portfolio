import React from 'react';
import {NavLink} from 'react-router-dom';
import '../static/css/sidenav.css';
import proimage from '../images/P-2481.jpg';

class SideNav extends React.Component {
  componentDidMount() {
    console.log(this.props);
  }
  render() {
    return (
      <div>
        <div className="side-nav">
          <div className="nav-image">
            <img src={proimage} className="ui circular image pro-image"/>
            <div className="image-button">
              <i className="edit icon"/>
            </div>
          </div>
          <div className="nav-item">
            <i className="user icon"></i><NavLink exact to="/" activeClassName="active"> Profile</NavLink>
          </div>
          <div className="nav-item">
            <i className="code icon"></i><NavLink exact to="/programming" activeClassName="active"> Programming</NavLink>
          </div>
        </div>
      </div>
    );
  }
}

export default SideNav;