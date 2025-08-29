// File: perfume-shop/server/server.js
// NOTE: Add the two new lines under the "--- Basic Route ---" section.

// Import required packages
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config(); // Loads environment variables from .env file

// --- ADD THIS LINE ---
const productRoutes = require('./routes/productRoutes');

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(cors()); // Enable Cross-Origin Resource Sharing
app.use(express.json()); // Allow the server to accept JSON in the request body

// --- Database Connection ---
const mongoURI = process.env.MONGO_URI;

mongoose.connect(mongoURI)
  .then(() => console.log('Successfully connected to MongoDB!'))
  .catch(err => console.error('MongoDB connection error:', err));

// --- Basic Route ---
// A simple test route to make sure the server is running
app.get('/', (req, res) => {
    res.json({ message: 'Welcome to the Perfume Shop API!' });
});

// --- API Routes ---
// --- ADD THIS LINE ---
app.use('/api', productRoutes);

// --- Start the Server ---
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});