import React from 'react';
import {connect} from 'react-redux';
import { setSignedIn, setSignedOut } from '../../actions';
import '../../static/css/base.css';
import { GoogleLogin, GoogleLogout } from 'react-google-login';


class Auth extends React.Component {

  login = (response) => {
    this.props.setSignedIn(response.profileObj.email);
    alert(response.profileObj.email);
  }

  logout = (response) => {
    this.props.setSignedOut();
  }

  render() {
    console.log(this.props);
    const isSignedIn = this.props.auth.signedIn;
    return (
      <div>
        {
          isSignedIn?(
            <GoogleLogout
              clientId="32983310332-401tnt1l3ns6tgmfi8dm9c6dvof4dar1.apps.googleusercontent.com"
              buttonText="Logout"
              onLogoutSuccess={this.logout}
            />
          )
          :(
            <GoogleLogin
              clientId="32983310332-401tnt1l3ns6tgmfi8dm9c6dvof4dar1.apps.googleusercontent.com"
              buttonText="Login"
              onSuccess={this.login}
              onFailure={this.login}
              cookiePolicy={'single_host_origin'}
              isSignedIn={true}
            />
          )
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state;
}

export default connect(mapStateToProps, { setSignedIn, setSignedOut })(Auth);