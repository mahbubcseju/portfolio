import React from 'react';
import {NavLink} from 'react-router-dom';
import '../static/css/sidenav.css';
import proimage from '../images/P-2481.jpg';
import ProfileImage from './ProfileImage';
import Modal from '../modal';


class SideNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isProfileImageUpdate: false};
  }

  callModal = () => {
    this.setState({isProfileImageUpdate: true});
  }
  
  setModal = (isProfileImageUpdate) => {
    if(isProfileImageUpdate){
      return (
        <Modal>
          <ProfileImage/>
        </Modal>
      );
    }
    else {
      return <div></div>
    }
  }

  render() {
    const isProfileImageUpdate = this.state.isProfileImageUpdate;
    const getModal = this.setModal(isProfileImageUpdate);
    return (
      <div>
        <div className="side-nav">
          <div className="nav-image">
            <img src={proimage} className="ui circular image pro-image"/>
            <div className="image-button">
              <i className="edit icon" onClick={this.callModal}/>
            </div>
          </div>
          <div className="nav-item">
            <i className="user icon"></i><NavLink exact to="/" activeClassName="active"> Profile</NavLink>
          </div>
          <div className="nav-item">
            <i className="code icon"></i><NavLink exact to="/programming" activeClassName="active"> Programming</NavLink>
          </div>
        </div>
        { getModal }
      </div>
    );
  }
}

export default SideNav;