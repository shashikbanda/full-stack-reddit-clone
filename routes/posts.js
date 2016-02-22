var express = require('express');
var router = express.Router();

var knex = require('../db/knex')

router.get('/', function(req, res){
	res.render('index')
})

router.post('/', function(req,res){

})


module.exports = router;