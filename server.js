// get the things we need
var express = require('express');
var app = express();
var path = require('path');

// set the public folder to serve public assets
app.use(express.static(__dirname + '/public'));

// set up our one route to the index.html file
app.get('/website', function(req, res) {
	res.sendFile(path.join(__dirname + '/public/index.html'));
});

app.get('/gapi', function(req, res) {
	res.sendFile(path.join(__dirname + '/public/gapi.html'));
});

app.get('*', function(req, res) {
	res.sendFile(path.join(__dirname + 'index.html'));
});



// start the server on port 8080 (http://localhost:8080)
app.listen(process.env.PORT || 8080);
console.log('Magic happens on port '+process.env.PORT +'.');
