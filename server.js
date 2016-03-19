var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;
var router = express.Router();

router.use(function(req, res, next) {
  console.log('req ' + req, 'res' + res);
  next(); // goes to the next route, don't stop
})

// Register routes here
// ====================
app.listen(port); // open connection
console.log('Magic on port: ' + port); // test connection is working

// Serve static files
app.use('/',express.static(__dirname + '/build/'));
