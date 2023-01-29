const mongoose = require('mongoose');
const constants = require('../constants');

module.exports = () => {
	mongoose.connect(process.env.DB_URI, { useNewUrlParser: true });

	const database = mongoose.connection;

	database.on('error', error => {
		console.log(constants.dbConnectionMessage.DB_CONNECTION_FAIL);
	});

	database.once('connected', () => {
		console.log(constants.dbConnectionMessage.DB_CONNECTION_SUCCESS);
	});
};
