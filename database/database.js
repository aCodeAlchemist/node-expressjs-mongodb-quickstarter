var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost/test');

// Log error if not connected
mongoose.connection.on('error', console.error.bind(console, 'Connection error.'));

// Log status if we are connected to database
mongoose.connection.once('open', function() {
	// we're connected!
	console.log("Connected to database.")
});

var db = {};

/** Users table here */
db.User = mongoose.model('User', { 
			username: String,
			//if you are using mongoose then unique has required=true if you not use null also consider unique and fire error 
			email: {
				type: String,
				required:true,
				unique: true,
			},
			password: String,
			createdAt: { type: Date}
		});


module.exports = db;
