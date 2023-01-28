class AppError extends Error {
	constructor({ status, message, body }) {
		super(message);

		this.status = status;
		this.body = body;

		Error.captureStackTrace(this, this.constructor);
	}
}

module.exports = AppError;
