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

router.get('/delete', function(req, res, next){

})

router.post('/delete', function(req, res, next){
	var title_delete = req.body.title;
	var author_delete = req.body.author;
	var url_delete = req.body.url;
	var description = req.body.description;

	knex('posts')
	.where({title:title_delete})
	.del()
	.then(function(data){
		res.send("tes")
	})
})



module.exports = router;