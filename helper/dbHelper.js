const mongoose = require('mongoose');
const constants = require('../constants');

const validateObjectId = id => {
	if (!mongoose.Types.ObjectId.isValid(id)) {
		throw new Error(constants.requestValidationMessage.INVALID_ID);
	}
};

module.exports = {
	validateObjectId,
};
