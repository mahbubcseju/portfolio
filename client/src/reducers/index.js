import {combineReducers} from 'redux';

const setSignIn = (signedIn = null, action) => {
  if (action.type === 'SIGNED_IN') {
    return action.payload;
  }
  return signedIn;
}

const profileImage = (profileImage = null, action) => {
  if(action.type === 'SET_PROFILE_IMAGE') {
    return action.payload;
  }
  return profileImage;
}

export default combineReducers({
  signedIn: setSignIn,
  profileImage: profileImage
});