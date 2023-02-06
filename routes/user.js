const express = require('express');
const router = express.Router();
const userController = require('../controllers/user');
const userSchema = require('../apiSchema/user');
const { validateBody } = require('../middleware/schemaValidation');

router.post(
	'/signup',
	validateBody(userSchema.signupSchema),
	userController.signup
);

router.post(
	'/signin',
	validateBody(userSchema.signinSchema),
	userController.signin
);

module.exports = router;
