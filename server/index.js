var express = require('express'),
  app = express(),
  port = process.env.PORT || 5000,
  mongoose = require('mongoose')
  bodyParser = require('body-parser')
  ;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/protfoliodb',
  {
    useNewUrlParser: true
  }).then(() => {
    console.log("Successfully connected to the database");    
  }).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
  }
);

app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true, parameterLimit: 50000 }));

let apiRoutes = require("./routes");
app.use("/", apiRoutes);

app.listen(port);

console.log('RESTful API server started on: ' + port);