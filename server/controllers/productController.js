// File: perfume-shop/server/controllers/productController.js

const Product = require('../models/ProductModel');
const Review = require('../models/ReviewModel');

// @desc    Fetch all products
// @route   GET /api/products
// @access  Public
const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find({});
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};

// @desc    Fetch a single product by ID
// @route   GET /api/products/:id
// @access  Public
const getProductById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (product) {
            res.json(product);
        } else {
            res.status(404).json({ message: 'Product not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};

// @desc    Fetch reviews for a single product
// @route   GET /api/reviews/:productId
// @access  Public
const getReviewsForProduct = async (req, res) => {
    try {
        const reviews = await Review.find({ productId: req.params.productId });
        res.json(reviews);
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};

// @desc    Create a new review for a product
// @route   POST /api/reviews/:productId
// @access  Public
const createReview = async (req, res) => {
    try {
        const { author, rating, comment } = req.body;
        const productId = req.params.productId;

        const product = await Product.findById(productId);

        if (product) {
            const review = new Review({
                productId,
                author,
                rating,
                comment
            });
            const createdReview = await review.save();
            res.status(201).json(createdReview);
        } else {
            res.status(404).json({ message: 'Product not found' });
        }
    } catch (error) {
        res.status(400).json({ message: 'Invalid data', error: error.message });
    }
};

module.exports = { getAllProducts, getProductById, getReviewsForProduct, createReview };