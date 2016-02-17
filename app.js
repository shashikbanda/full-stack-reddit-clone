var express = require("express");
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var knex = require('./db/knex');
var ejs = require('ejs')

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// app.use('/', submit)
app.get('*', function(req, res){
	res.render('index')
})

app.listen('3000', function(){

})