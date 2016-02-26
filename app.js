var express = require("express");
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var knex = require('./db/knex');
var ejs = require('ejs')

var index = require('./routes/posts')

// app.use('/js', express.static(__dirname + '/public'));
// app.use('/partials', express.static(__dirname + '/public'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, 'public')));

app.use('/index', index)

app.get('/', function(req, res){
	res.sendFile(__dirname +'/public/index.html');
})

app.listen('3000', function(){

})