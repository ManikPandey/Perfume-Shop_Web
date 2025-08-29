// File: perfume-shop/client/src/pages/AllProductsPage.js
// ACTION: Import SkeletonCard and update the loading state logic.

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from '../components/ProductCard';
import SkeletonCard from '../components/SkeletonCard'; // <-- Import SkeletonCard

const AllProductsPage = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchAllProducts = async () => {
            try {
                const { data } = await axios.get('http://localhost:5001/api/products');
                setProducts(data);
                setLoading(false);
            } catch (err) {
                setError('Failed to fetch products. Please try again later.');
                setLoading(false);
                console.error(err);
            }
        };
        setTimeout(fetchAllProducts, 500);
    }, []);

    return (
        <div className="py-16 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-brand-dark">Our Collections</h1>
                    <p className="text-lg text-gray-500 mt-2">Discover our full range of exclusive fragrances.</p>
                </div>

                {error && <div className="text-center text-red-500">{error}</div>}

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {loading ? (
                        Array.from({ length: 8 }).map((_, index) => <SkeletonCard key={index} />)
                    ) : (
                        products.map((product) => (
                            <ProductCard key={product._id} product={product} />
                        ))
                    )}
                </div>
            </div>
        </div>
    );
};

export default AllProductsPage;