const constants = require('../constants');
const Product = require('../database/models/product');
const { validateObjectId } = require('../helper/dbHelper');

const createProduct = async data => {
	// try {
	let product = new Product({ ...data });
	let result = await product.save();
	return result;
	// } catch (err) {
	// 	console.log('Something went wrong: Service: createProduct', err);
	// 	throw new Error(err);
	// }
};

const getAllProducts = async ({ skip = 0, limit = 10 }) => {
	// try {
	let products = await Product.find({})
		.skip(parseInt(skip))
		.limit(parseInt(limit));
	return products;
	// } catch (err) {
	// 	console.log('Something went wrong: Service: getAllProducts', err);
	// 	throw new Error(err);
	// }
};

const getProductById = async id => {
	// try {
	validateObjectId(id);
	let product = await Product.findById(id);
	if (!product) throw new Error(constants.productMessage.PRODUCT_NOT_FOUND);
	return product;
	// } catch (err) {
	// 	console.log('Something went wrong: Service: getProductById', err);
	// 	throw new Error(err);
	// }
};

const updateProductById = async ({ id, body }) => {
	// try {
	validateObjectId(id);

	let conditions = {
		_id: id,
	};
	let update = body;
	let options = { new: true };

	let product = await Product.findOneAndUpdate(conditions, update, options);
	if (!product) throw new Error(constants.productMessage.PRODUCT_NOT_FOUND);
	return product;
	// } catch (err) {
	// 	console.log('Something went wrong: Service: updateProductById', err);
	// 	throw new Error(err);
	// }
};

const deleteProductById = async ({ id }) => {
	// try {
	validateObjectId(id);
	let product = await Product.findByIdAndDelete(id);
	if (!product) throw new Error(constants.productMessage.PRODUCT_NOT_FOUND);
	return product;
	// } catch (err) {
	// 	console.log('Something went wrong: Service: deleteProductById', err);
	// 	throw new Error(err);
	// }
};

module.exports = {
	createProduct,
	getAllProducts,
	getProductById,
	updateProductById,
	deleteProductById,
};
