const constants = require('../constants');
const productService = require('../services/product');

const createProduct = async (req, res) => {
	let response = { ...constants.defaultServiceResponse };
	try {
		const payload = await productService.createProduct(req.body);
		response.status = 200;
		response.message = constants.productMessage.PRODUCT_CREATED;
		response.body = payload;
	} catch (err) {
		response.message = err.message;
	}

	res.status(response.status).send(response);
};

const getAllProducts = async (req, res) => {
	let response = { ...constants.defaultServiceResponse };
	try {
		const payload = await productService.getAllProducts(req.query);
		response.status = 200;
		response.message = constants.productMessage.PRODUCT_FETCHED;
		response.body = payload;
	} catch (err) {
		response.message = err.message;
	}

	res.status(response.status).send(response);
};

const getProductById = async (req, res) => {
	let response = { ...constants.defaultServiceResponse };
	try {
		const payload = await productService.getProductById(req.params.id);
		response.status = 200;
		response.message = constants.productMessage.PRODUCT_FETCHED;
		response.body = payload;
	} catch (err) {
		response.message = err.message;
	}

	// console.log('Something went wrong: Controller: getProductById', err);
	return res.status(response.status).send(response);
};

const updateProductById = async (req, res) => {
	let response = { ...constants.defaultServiceResponse };
	try {
		const payload = await productService.updateProductById({
			id: req.params.id,
			body: req.body,
		});
		response.status = 200;
		response.message = constants.productMessage.PRODUCT_UPDATED;
		response.body = payload;
	} catch (err) {
		response.message = err.message;
	}

	// console.log('Something went wrong: Controller: updateProduct', err);
	return res.status(response.status).send(response);
};

const deleteProductById = async (req, res) => {
	let response = { ...constants.defaultServiceResponse };
	try {
		const payload = await productService.deleteProductById(req.params);
		response.status = 200;
		response.message = constants.productMessage.PRODUCT_DELETED;
		response.body = payload;
	} catch (err) {
		response.message = err.message;
	}

	// console.log('Something went wrong: Controller: deleteProduct', err);
	return res.status(response.status).send(response);
};

module.exports = {
	createProduct,
	getAllProducts,
	getProductById,
	updateProductById,
	deleteProductById,
};
