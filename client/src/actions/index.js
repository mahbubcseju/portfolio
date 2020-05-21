export const getProfileImage = (profileImage) => {
  return {
    type: 'GET_PROFILE_IMAGE',
    payload: profileImage
  };
};