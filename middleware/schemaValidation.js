const constants = require('../constants');

const validateSchema = (data, schema) => {
	const result = schema.validate(data, { convert: false });
	if (result.error) {
		const errDetails = result.error.details.map(val => ({
			error: val.message,
			path: val.path,
		}));
		return errDetails;
	}
	return null;
};

const validateBody = schema => {
	return (req, res, next) => {
		let response = { ...constants.defaultServiceResponse };
		const err = validateSchema(req.body, schema);
		if (err) {
			response.body = err;
			response.message = constants.requestValidationMessage.BAD_REQUEST;
			return res.status(response.status).send(response);
		}
		return next();
	};
};

const validateQueryParams = schema => {
	return (req, res, next) => {
		let response = { ...constants.defaultServiceResponse };
		const err = validateSchema(req.query, schema);
		if (err) {
			response.body = err;
			response.message = constants.requestValidationMessage.BAD_REQUEST;
			return res.status(response.status).send(response);
		}
		return next();
	};
};

module.exports = {
	validateBody,
	validateQueryParams,
};
