ProfilePicture = require('../models/user.js');
Uploader = require("../services/profileUploader.js");

exports.store_profile_image = function(req, res) {
  const uploader = Uploader.upload.single("image");
  uploader(req, res, function(err){
    if(err) {
      return res.status(500).send({
        message: "Error in uploading" 
      });
    }
    var newProfileImage = new ProfilePicture({
      email: req.body.email,
      image: req.file.path
    });
    newProfileImage.save()
    .then(data => {
      res.send(data);
    }).catch(err => {
      res.status(500).send({
        message: "Error occured when creating"
      });
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