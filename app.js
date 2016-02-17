var express = require("express");
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var knex = require('./db/knex');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.get('/', function(req, res){
	res.send("Welcome to Express")
})

app.listen('3000', function(){

})