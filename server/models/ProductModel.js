const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    shortDescription: {
        type: String,
        required: true
    },
    fullDescription: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    sizes: {
        type: [String],
        required: true,
        default: ['50ml', '100ml']
    },
    // The main image for the product card
    mainImage: {
        type: String,
        required: true
    },
    // Additional images for the product page gallery
    galleryImages: {
        type: [String],
        required: true
    },
    // To add a "bestseller" tag or similar
    tags: {
        type: [String],
        default: []
    }
}, { timestamps: true }); // Automatically adds createdAt and updatedAt fields

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
