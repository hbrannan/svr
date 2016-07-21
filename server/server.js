///LIST DEPENDENCIES
var express = require('express');
// var Sequelize = require('sequelize');
// var pg = require('pg');
var utils = require('./utils.js');
////SET VARIABLES  
var port = 3000;

////CONNECT TO SERVER
var app = express();
app.listen(process.env.PORT || port, function () {
	console.log('Server listening at ' + port);
});


app.use(express.static(__dirname + '/../dummy.html'));


/////////MIDDLEWARE//////////



///////////ROUTES///////////
app.get('/', function (req, res) {
	res.send('Heyyy bitchez');
});

//get & post ?? just post? 
app.get('/users/signin', function (req, res) {
	res.send('bichez b signing in');
});

//is this signup
app.post('/users/create', function (req, res) {
	res.send('bichez b signing in');
});

app.get('/photos', function (req, res) {
	// res.send(utils.getAllPhotos());	
	res.send('something')
});

app.post('/photos', function (req, res) {
	console.log('req izzzzz', req);
	var parsedReqBody = JSON.parse(req.body);
	var result = utils.postPhoto(parsedReqBody);
	res.send(result);
});

app.get('/captions', function (req, res) {
	res.send('bichez b getten the word');
});

app.post('/captions', function (req, res) {
	res.send('bichez b postin up word');
});

app.get('/favicon.ico', function (req, res) {
	res.sendStatus(200);
});
