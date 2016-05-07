var express = require('express');
var router = express.Router();
var db = require("../../database/database.js");

/** LOGIN API */
router.post('/', function(req, res, next) {
	db.User.find({email: req.body.email, password: req.body.password}, function (err, results) {
		if(err) {
			res.status(500).send('Server error.');
		}

		if(results.length > 0) {
			res.status(200).send({status: true, message: "Logged in successfully.", data: results[0]});
		} else {
			res.status(404).send({status: false, message: "Invalid credentials."});
		}
	});
});

module.exports = router;