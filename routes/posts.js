var express = require('express');
var router = express.Router();

var knex = require('../db/knex');

router.get('/', function(req, res, next){
	knex('posts')
	.then(function(data){
		res.send(data)
	})
})


router.post('/', function(req, res, next){
	var title = req.body.title;
	var author = req.body.author;
	var url = req.body.url;
	var description = req.body.description;
	knex('posts')
	.insert({
		title:title,
		author:author,
		imageUrl: url,
		description: description
	})
	.then(function(data){
		res.send("test")
	})
})



module.exports = router;