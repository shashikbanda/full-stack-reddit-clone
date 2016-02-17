var express = require('express');
var router = express.Router();

var knex = require('../db/knex')

router.get('/posts', function(req, res){
	res.render('index')
})

router.post('/posts', function(req,res){
	var l;
})


module.exports = router;