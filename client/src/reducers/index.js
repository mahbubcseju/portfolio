import {combineReducers} from 'redux';
const auth = {
  signedIn: null,
  mail: null
}
const setSignIn = (state=auth, action) => {
  if (action.type === 'SIGNED_IN') {
    return { ...state, signedIn: true, mail: action.payload };
  }
  else if (action.type === 'SIGNED_OUT') {
    return { ...state, signedIn: false, mail: null };
  }
  return state;
}

const profileImage = (profileImage = null, action) => {
  if(action.type === 'SET_PROFILE_IMAGE') {
    return action.payload;
  }
  return profileImage;
}

export default combineReducers({
  auth: setSignIn,
  profileImage: profileImage
});