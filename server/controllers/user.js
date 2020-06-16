ProfilePicture = require('../models/user.js');
Uploader = require("../services/profileUploader.js");
mime = require('mime');
fs = require('fs');

exports.store_profile_image = function(req, res) {
  const uploader = Uploader.upload.single("image");

  uploader(req, res, function(err){
    if(err || !req.file) {
      return res.status(500).send({
        message: "Error in uploading" 
      });
    }

    ProfilePicture.findOneAndUpdate(
      {
        email: req.body.email
      },
      {
        email: req.body.email,
        image: req.file.path
      },
      {
        upsert: true,
        new: true,
      }
    )
    .then(data => {
      res.send({
        image: req.protocol + '://' + req.get('host') + '/static/' + data['image']
      });
    }).catch(err => {
      res.status(500).send({
        message: "Error occured when creating"
      });
    });

  });
};

exports.get_profile_image = function(req, res) {

  ProfilePicture.findOne({email: req.params.email})
  .then(data => {
    res.send({
      image: req.protocol + '://' + req.get('host') + '/static/' + data['image']
    });
  }).catch(err => {
    console.log(err);
    res.status(500).send({
      message: "Error occured when getting"
    })
  });

};