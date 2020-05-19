import React from 'react';
import '../static/css/profile.css'

class Profile extends React.Component {
  componentDidMount (){
    console.log(this.props);
  }
  render() {
    return (
      <div>
        <div className="profile-content">
          <h1>About Myself</h1>
          Hi! I am Md. Mahbubur Rahman. I completed my graduation
          from jahangirnagar university. During my graudation I 
          participated in more than 200+ programming competitions.
        </div>
      </div>
    );
  }
}

export default Profile;