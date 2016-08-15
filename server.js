var express = require('express');
var path = require('path');
var index = require('./routes/index.js');
var candidates = require('./routes/candidates.js');
var bodyParser  = require('body-parser');
var app = express();

app.use(bodyParser.json());

app.use(express.static('public'));
app.use(express.static('node_modules/angular'));
app.use(express.static('node_modules/angular-route'));
app.use(express.static('node_modules/bootstrap'));

app.use('/candidates', candidates),
app.use('/', index);
app.use('/*', function(request, response){
  response.sendFile(path.join(__dirname, './public/views/index.html'));
});


var server = app.listen(process.env.PORT || 3000, function(){
  var port = server.address().port;
  console.log('Definitely working on port ', port);
});
