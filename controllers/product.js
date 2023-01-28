const createProduct = async (req, res) => {
	res.send('Create a product');
};

const getAllProducts = async (req, res) => {
	res.send('Get all products');
};

const getProductById = async (req, res) => {
	res.send('Get product by id');
};

const updateProduct = async (req, res) => {
	res.send('Update product by id');
};

const deleteProduct = async (req, res) => {
	res.send('Delete product by id');
};

module.exports = {
	createProduct,
	getAllProducts,
	getProductById,
	updateProduct,
	deleteProduct,
};
