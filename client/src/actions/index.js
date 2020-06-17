import axios from 'axios';

export const setProfileImage = (data) => {
  return dispatch => {
    return axios({
      method: 'POST',
      headers: {
        "Content-Type": "multipart/form-data"
      },
      url: 'http://127.0.0.1:5000/profile-image', 
      data: data
    }).then(
        res => {
          dispatch({
            type: 'SET_PROFILE_IMAGE',
            payload: res.data.image,
          });
        },
        err => console.log(err.response)
    );
  };
};

export const getProfileImage = (email) => {
  return dispatch => {
    return axios({
      method: 'GET',
      url: 'http://127.0.0.1:5000/profile-image/' + email, 
    }).then(
        res => {
          dispatch({
            type: 'SET_PROFILE_IMAGE',
            payload: res.data.image,
          });
        },
        err => console.log(err.response)
    );
  };
};

export const setSignedIn = (email) => {
  return {
    type: 'SIGNED_IN',
    payload: email
  }
}

export const setSignedOut = () => {
  return {
    type: 'SIGNED_OUT',
    payload: null
  }
}