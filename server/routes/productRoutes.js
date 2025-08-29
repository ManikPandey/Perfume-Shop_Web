
const express = require('express');
const router = express.Router();
const {
    getAllProducts,
    getProductById,
    getReviewsForProduct,
    createReview
} = require('../controllers/productController.js');

// Routes for products
router.route('/products').get(getAllProducts);
router.route('/products/:id').get(getProductById);

// Routes for reviews
router.route('/reviews/:productId').get(getReviewsForProduct).post(createReview);

module.exports = router;