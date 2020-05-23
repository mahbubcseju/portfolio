ProfilePicture = require('../models/user.js');

exports.store_profile_image = function(req, res) {
  var newProfileImage = new ProfilePicture(req.body);
  newProfileImage.save()
  .then(data => {
    res.send(data);
  }).catch(err => {
    res.status(500).send({
      message: "Error occured when creating"
    });
  });
};

exports.get_profile_image = function(req, res) {
  ProfilePicture.find()
  .then(data => {
    res.send(data);
  }).catch(err => {
    res.status(500).send({
      message: err.message | "Error occured when getting"
    })
  })
};