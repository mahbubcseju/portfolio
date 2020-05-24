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
  ProfilePicture.findOne({email: req.params.email})
  .then(data => {
    const type = mime.getType(data["image"]);
    const img = fs.readFileSync(data["image"]);
    res.writeHead(200, {'Content-Type': type });
    res.write(img, "binary");
    res.end();
  }).catch(err => {
    console.log(err);
    res.status(500).send({
      message: "Error occured when getting"
    })
  })
};