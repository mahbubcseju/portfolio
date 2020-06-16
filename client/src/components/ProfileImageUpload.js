import React from 'react';
import { connect } from 'react-redux';
import { getProfileImage } from '../actions';

import '../static/css/profileImage.css'
import 'react-image-crop/dist/ReactCrop.css';

class ProfileImage extends React.Component {

  state = {
    src: null,
  };
 
  componentDidMount (){
    console.log(this.props);
  }

  uploadImage = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const reader = new FileReader();
      reader.addEventListener('load', () =>
        this.setState({ src: reader.result })
      );
      reader.readAsDataURL(e.target.files[0]);
    }
  }

  saveImage = () => {
    this.props.getProfileImage(this.state.src);
    this.props.toggleModal();
  }

  render() {
    const { src } = this.state;
    return (
      <div className="card">
        <div className="image-cropper">
          <img src={ src } />
        </div>
        <div className={"uploader"}>
          <div>
            <p>Upload an profile image</p>
            <input type="file" onChange={this.uploadImage}/>
          </div>
        </div>
        <button onClick={this.saveImage}>submit</button>
      </div>
    );
  }
}

export default connect(null, {getProfileImage})(ProfileImage);