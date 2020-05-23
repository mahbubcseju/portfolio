let router = require("express").Router();
let controllList = require("../controllers/user");

router.get("/", function (req, res) {
  process.stdout.write("hello: ");
  res.json({
      status: 'API Its Working',
      message: 'Welcome to RESTHub crafted with love!',
  });
});

router.post("/profile-image/:email", controllList.store_profile_image);

router.get("/profile-image/:email", controllList.get_profile_image);

module.exports = router;
