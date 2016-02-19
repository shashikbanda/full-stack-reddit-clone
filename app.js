var express = require("express");
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var knex = require('./db/knex');
var ejs = require('ejs')

var posts = require('./routes/posts')

// app.use('/js', express.static(__dirname + '/public'));
// app.use('/partials', express.static(__dirname + '/public'))
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', posts)

app.get('*', function(req, res){
	res.sendFile(__dirname +'/public/index.html');
})

app.listen('3000', function(){

})