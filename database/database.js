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
			useranme: String,
			email: {
				type: String,
				unique: true,
			},
			password: String,
			createdAt: { type: Date}
		});


module.exports = db;