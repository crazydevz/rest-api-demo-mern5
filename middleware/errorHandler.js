module.exports = (err, req, res, next) => {
	let { status, message, body } = err;

	let response = {
		status: status || 500,
		message,
		body,
	};

	res.status(response.status).send(response);
};
