const express = require('express');
const router = express.Router();
const productController = require('../controllers/product');
const productSchema = require('../apiSchema/product');
const {
	validateBody,
	validateQueryParams,
} = require('../middleware/schemaValidation');
const { validateToken, restrictTo } = require('../middleware/auth');

router
	.route('/')
	.get(
		validateToken,
		// restrictTo('user', 'admin'),
		validateQueryParams(productSchema.getAllProductsSchema),
		productController.getAllProducts
	)
	.post(
		validateBody(productSchema.createProductSchema),
		productController.createProduct
	);

router
	.route('/:id')
	.get(productController.getProductById)
	.patch(
		validateBody(productSchema.updateProductSchema),
		productController.updateProductById
	)
	.delete(productController.deleteProductById);

module.exports = router;
