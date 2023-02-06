const constants = require('../constants');
const userService = require('../services/user');
const catchAsync = require('../middleware/catchAsync');

const signup = catchAsync(async (req, res) => {
	let response = { ...constants.defaultServiceResponse };

	const payload = await userService.signup(req.body);
	response.status = 200;
	response.message = constants.userMessage.SIGNUP_SUCCESS;
	response.body = payload;

	// console.log('Something went wrong: Controller: signup', err);
	return res.status(response.status).send(response);
});

const signin = catchAsync(async (req, res) => {
	let response = { ...constants.defaultServiceResponse };

	const payload = await userService.signin(req.body);
	response.status = 200;
	response.message = constants.userMessage.SIGNIN_SUCCESS;
	response.body = payload;

	// console.log('Something went wrong: Controller: signin', err);
	return res.status(response.status).send(response);
});

module.exports = {
	signup,
	signin,
};
