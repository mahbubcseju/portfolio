import React from 'react';
import { connect } from 'react-redux';
import { getProfileImage } from '../actions';
import '../static/css/profileImage.css'

class ProfileImage extends React.Component {
  componentDidMount (){
    console.log(this.props);
  }
  uploadImage = (event) => {
    const img = event.target.files[0];
    this.props.getProfileImage(URL.createObjectURL(img));
  }

  render() {
    return (
      <div className="card">
        <div>
          Upload the image:
          <input type="file" onChange={this.uploadImage}/>
        </div>
      </div>
    );
  }
}

export default connect(null, {getProfileImage})(ProfileImage);