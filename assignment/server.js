var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');

var catData = {
  cats: []
};

app.use(express.static('assignment/public'));
app.use(bodyParser.urlencoded({ extended: true }));

/**
 * @TODO: Write a route that responds to GET /cats by sending the catData object
 * (defined above)
 */

/**
 * @TODO: Write a route that responds to POST /cats by adding a new cat object
 * to the cats array in the catData object (defined above)
 */

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'public/views/index.html'));
});

var server = app.listen(3000, function () {
  console.log('server listening for requests on port:', server.address().port);
  console.log('press control+c to quit');
});

module.exports = server;
