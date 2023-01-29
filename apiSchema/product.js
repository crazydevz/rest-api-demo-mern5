const Joi = require('joi');

const createProductSchema = Joi.object().keys({
	name: Joi.string().required(),
	price: Joi.number().required(),
	brand: Joi.string().required(),
});

const getAllProductsSchema = Joi.object().keys({
	skip: Joi.string(),
	limit: Joi.string(),
});

const updateProductSchema = Joi.object().keys({
	name: Joi.string(),
	price: Joi.number(),
	brand: Joi.string(),
});

module.exports = {
	createProductSchema,
	getAllProductsSchema,
	updateProductSchema,
};
