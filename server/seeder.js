

require('dotenv').config();
const mongoose = require('mongoose');
const products = require('./data/mockData.js');
const Product = require('./models/ProductModel.js');
const Review = require('./models/ReviewModel.js');

const mongoURI = process.env.MONGO_URI;

const connectDB = async () => {
    try {
        await mongoose.connect(mongoURI);
        console.log('MongoDB connected for seeder.');
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
};

const importData = async () => {
    try {
        // Clear existing data
        await Product.deleteMany();
        await Review.deleteMany();

        // Insert products
        const createdProducts = await Product.insertMany(products);
        console.log('Products Imported!');
        
        // Create sample reviews for the first product
        const sampleProductId = createdProducts[0]._id;
        const sampleReviews = [
            { productId: sampleProductId, author: "Aisha", rating: 5, comment: "Absolutely stunning fragrance, my new favorite!" },
            { productId: sampleProductId, author: "Rohan", rating: 4, comment: "Very fresh and long-lasting. Great for daily wear." }
        ];

        await Review.insertMany(sampleReviews);
        console.log('Sample Reviews Imported!');
        
        console.log('Data seeding complete!');
        process.exit();
    } catch (error) {
        console.error(`Error with data import: ${error.message}`);
        process.exit(1);
    }
};

const destroyData = async () => {
    try {
        await Product.deleteMany();
        await Review.deleteMany();
        console.log('Data Destroyed!');
        process.exit();
    } catch (error) {
        console.error(`Error with data destruction: ${error.message}`);
        process.exit(1);
    }
};

// This allows running the script from the command line with arguments
const run = async () => {
    await connectDB();
    if (process.argv[2] === '-d') {
        await destroyData();
    } else {
        await importData();
    }
};

run();