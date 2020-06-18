import React from 'react';
import {connect} from 'react-redux';
import { setSignedIn, setSignedOut } from '../../actions';
import '../../static/css/base.css';
import { GoogleLogin, GoogleLogout } from 'react-google-login';


class GAuth extends React.Component {

  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId: "32983310332-401tnt1l3ns6tgmfi8dm9c6dvof4dar1.apps.googleusercontent.com",
        scope: "https://www.googleapis.com/auth/userinfo.email"
      }).then(() => {
        this.auth = window.gapi.auth2.getAuthInstance();
        this.onAuthChange(this.auth.isSignedIn);
        this.auth.isSignedIn.listen(this.onAuthChange);
      });
    });
  }

  onAuthChange = (isSingednIn) => {
    if(isSingednIn){
      this.props.setSignedIn(this.auth.currentUser.get().getBasicProfile().getEmail());
    }
    else {
      this.props.setSignedOut();
    }
  }

  login = () => {
    this.auth.signIn();
  }

  logout = () => {
    this.auth.signOut();
  }

  render() {
    console.log(this.props);
    const isSignedIn = this.props.auth.signedIn;
    return (
      <div className="auth">
        { isSignedIn?(
            <button onClick={this.logout} className="ui red google button">
              <i className="google icon">Sign Out</i>
            </button>
          ):(
            <button onClick={this.login} className="ui red google button">
              <i className="google icon">Sign In</i>
            </button>
          )
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state;
}

export default connect(mapStateToProps, { setSignedIn, setSignedOut })(GAuth);