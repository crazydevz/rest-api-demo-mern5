const Joi = require('joi');

const signupSchema = Joi.object().keys({
	email: Joi.string().required(),
	password: Joi.string().required(),
});

const signinSchema = Joi.object().keys({
	email: Joi.string().required(),
	password: Joi.string().required(),
});

module.exports = {
	signupSchema,
	signinSchema,
};
