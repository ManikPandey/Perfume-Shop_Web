// File: perfume-shop/client/src/components/Bestsellers.js
// ACTION: Import SkeletonCard and update the loading state return.

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from './ProductCard';
import SkeletonCard from './SkeletonCard'; 

const Bestsellers = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const { data } = await axios.get('http://localhost:5001/api/products');
                const bestsellerProducts = data.filter(p => p.tags.includes('bestseller'));
                setProducts(bestsellerProducts.length > 0 ? bestsellerProducts.slice(0, 5) : data.slice(0, 4));
                setLoading(false);
            } catch (err) {
                setError('Failed to fetch products. Please make sure the server is running.');
                setLoading(false);
                console.error(err);
            }
        };

        setTimeout(fetchProducts, 500); 
    }, []);

    if (error) {
        return <div className="text-center py-10 text-red-500">{error}</div>;
    }

    return (
        <div className="py-16 bg-gray-50">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-brand-dark mb-12">
                    DISCOVER <span className="text-brand-gold">OUR BESTSELLERS</span>
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-8">
                    {/* --- THIS IS THE UPDATED PART --- */}
                    {loading ? (
                        // Show 5 skeleton cards while loading
                        Array.from({ length: 5 }).map((_, index) => <SkeletonCard key={index} />)
                    ) : (
                        // Show actual product cards once loaded
                        products.map((product) => (
                            <ProductCard key={product._id} product={product} />
                        ))
                    )}
                </div>
            </div>
        </div>
    );
};

export default Bestsellers;