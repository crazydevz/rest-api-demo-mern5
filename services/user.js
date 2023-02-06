const constants = require('../constants');
const User = require('../database/models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const signup = async ({ email, password }) => {
	const user = await User.findOne({ email });
	if (user) {
		throw new Error(constants.userMessage.DUPLICATE_EMAIL);
	}

	password = await bcrypt.hash(password, 12);
	const newUser = new User({ email, password });
	const result = await newUser.save();

	return result;
};

const signin = async ({ email, password }) => {
	const user = await User.findOne({ email });
	if (!user) {
		throw new Error(constants.userMessage.USER_NOT_FOUND);
	}

	const isValid = await bcrypt.compare(password, user.password);
	if (!isValid) {
		throw new Error(constants.userMessage.INVALID_PASSWORD);
	}

	const token = jwt.sign({ id: user._id }, process.env.SECRET_KEY, {
		expiresIn: '1d',
	});

	return { token };
};

module.exports = {
	signup,
	signin,
};
