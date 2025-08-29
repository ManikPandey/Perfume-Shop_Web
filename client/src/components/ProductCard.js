// File: perfume-shop/client/src/components/ProductCard.js

import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
    return (
        <Link 
            to={`/product/${product._id}`} 
            className="group block bg-white rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
        >
            <div className="overflow-hidden rounded-t-lg">
                <img 
                    src={product.mainImage} 
                    alt={product.name} 
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
            </div>
            <div className="p-5 text-center">
                <h3 className="text-lg font-semibold text-brand-dark tracking-wide truncate">
                    {product.name}
                </h3>
                <p className="text-gray-500 text-sm mt-1">
                    {product.shortDescription}
                </p>
                <p className="text-brand-dark font-bold text-lg mt-3">
                    ₹ {product.price.toLocaleString('en-IN')}
                </p>
            </div>
        </Link>
    );
};

export default ProductCard;