const mongoose = require('mongoose');
const ProductSchema = new mongoose.Schema({
        title: { 
            type: String,
            required: [true, "Product name required."],
            minlength: [2, "Product name must be at least 2 characters"]
        },
        price: { 
            type: Number,
            required: [true, "Price is required."],
        },
        description: { 
            type: String,
            required: [true, "Product description required"],
            minlength: [10, "Description must be at least 10 characters"]
        },
    },{ timestamps: true}
);
module.exports.Product = mongoose.model('Product', ProductSchema);