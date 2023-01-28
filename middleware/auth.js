const jwt = require('jsonwebtoken');

const constants = require('../constants');
const catchAsync = require('./catchAsync');
const AppError = require('../middleware/appError');

const validateToken = catchAsync(async (req, res, next) => {
	let response = { ...constants.defaultServiceResponse };

	if (!req.headers.authorization) {
		response.status = 401;
		response.message = constants.requestValidationMessage.TOKEN_MISSING;
		return next(new AppError(response));
	}

	const token = req.headers.authorization.split(' ')[1].trim();
	const decoded = jwt.verify(token, process.env.SECRET_KEY);
	req.user = decoded;
	next();
});

const restrictTo = catchAsync(async (...roles) => {
	let response = { ...constants.defaultServiceResponse };

	return (req, res, next) => {
		if (!roles.includes(req.user.role)) {
			response.status = 403;
			response.message = constants.requestValidationMessage.NOT_AUTHORIZED;
			return next(new AppError(response));
		}
		next();
	};
});

module.exports = {
	validateToken,
	restrictTo,
};
