var mongoose = require('mongoose');

var userProfileImage = mongoose.Schema({
    email: {
      type: String,
      unique: true,
      required: true
    },
    image : {
      type: String,
      required: true
    }
});

module.exports = mongoose.model('ProfilePicture', userProfileImage);