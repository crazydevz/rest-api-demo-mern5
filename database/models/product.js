const mongoose = require('mongoose');

const productSchema = mongoose.Schema(
	{
		name: {
			type: String,
			required: [true, 'Name is required'],
		},
		price: {
			type: Number,
			required: [true, 'Price is required'],
		},
		brand: {
			type: String,
			required: [true, 'Brand is required'],
		},
	},
	{
		timestamps: true,
		toObject: {
			transform: function (doc, ret, options) {
				ret.id = ret._id;
				delete ret._id;
				delete ret.__v;
				return ret;
			},
		},
		toJSON: {
			transform: function (doc, ret, options) {
				ret.id = ret._id;
				delete ret._id;
				delete ret.__v;
				return ret;
			},
		},
	}
);

module.exports = mongoose.model('Product', productSchema);
