import React from 'react';
import {connect} from 'react-redux';
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
    if(this.state.isProfileImageUpdate){
      this.setState({isProfileImageUpdate: false});
    }else {
      this.setState({isProfileImageUpdate: true});
    }
  }
  
  setModal = (isProfileImageUpdate) => {
    if(isProfileImageUpdate){
      return (
        <Modal>
          <ProfileImage toggleModal={this.callModal}/>
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
    let proImage = this.props.profileImage;
    if ( proImage === null) proImage = proimage;
    return (
      <div>
        <div className="side-nav">
          <div className="nav-image">
            <img src={proImage} className="ui circular image pro-image"/>
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

const mapStateToProps = (state) => {
  return {profileImage: state.profileImage};
}

export default connect(mapStateToProps)(SideNav);