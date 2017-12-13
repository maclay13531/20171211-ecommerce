var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var config = require('../config/config');
var connection = mysql.createConnection(config)
connection.connect();

router.post('/register', (req,res,next)=>{
	res.json(req.body);
})

/* GET home page. */

module.exports = router;
