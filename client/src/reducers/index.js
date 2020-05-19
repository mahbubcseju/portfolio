import {combineReducers} from 'redux';

const setSignIn = (signedIn = null, action) => {
  if (action.type === 'SIGNED_IN') {
    return action.payload;
  }
  return signedIn;
}

export default combineReducers({
  signedIn: setSignIn
});