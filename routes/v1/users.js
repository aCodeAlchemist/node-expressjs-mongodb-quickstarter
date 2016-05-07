var express = require('express');
var router = express.Router();
var db = require("../../database/database.js");

/* GET users listing. */
router.get('/', function(req, res, next) {
	db.User.find({}, function (err, results) {
		if(err) {
			res.status(500).send("Error.");
			return;
		}
		res.send(results);
	});
});

/* Create new user. */
router.post('/create', function(req, res, next) {
	var data = new db.User({
		username: req.body.name,
        email: req.body.email,
		password: req.body.password // make sure to put an encryption here
	});

	data.save(function (result) {
		res.status(204).send('');
	});
});

/** Get user details by Id */
router.get('/:id', function(req, res, next) {
    db.User.findById({"_id": req.params.id}, function (err, result) {
        if(err) {
            res.status(500).send({status: false, message: "Something Went wrong."});
        }
        if(result) {
            res.status(200).send(result);
        } else {
            res.status(404).send({status: false, message: "User not found."});
        }
    });

});

module.exports = router;
