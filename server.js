var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
	res.sendFile(__dirname + '/public/index.html');
});

app.get('/getData', function(req, res){
	res.send('Data came from server');
});

app.listen(8080, function(){
	console.log('Server listens on 8080');
});