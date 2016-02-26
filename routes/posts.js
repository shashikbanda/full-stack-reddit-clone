var express = require('express');
var router = express.Router();

var knex = require('../db/knex')

router.get('/', function(req, res, next){
	res.send("Hello")
})


router.post('/', function(req, res, next){
	var body = req;
	console.log(req.body)
})



module.exports = router;