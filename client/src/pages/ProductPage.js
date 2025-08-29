
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ImageGallery from '../components/ImageGallery';
import ReviewsSection from '../components/ReviewsSection';
import { FiShare2 } from 'react-icons/fi';

const ProductPage = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                setLoading(true);
                const { data } = await axios.get(`http://localhost:5001/api/products/${id}`);
                setProduct(data);
                setLoading(false);
            } catch (err) {
                setError('Product not found. Please check the URL.');
                setLoading(false);
                console.error(err);
            }
        };
        fetchProduct();
    }, [id]);

    const handleShare = () => {
        if (navigator.share) {
            navigator.share({
                title: product.name,
                text: `Check out ${product.name}!`,
                url: window.location.href,
            }).catch(console.error);
        } else {
            // Fallback for browsers that don't support the Web Share API
            navigator.clipboard.writeText(window.location.href);
            alert('Link copied to clipboard!');
        }
    };

    if (loading) {
        return <div className="text-center py-20">Loading...</div>;
    }

    if (error) {
        return <div className="text-center py-20 text-red-500">{error}</div>;
    }
    
    if (!product) {
        return null; // or a 'product not found' component
    }

    return (
        <div className="container mx-auto px-6 py-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Left Side: Image Gallery */}
                <div>
                    <ImageGallery mainImage={product.mainImage} galleryImages={product.galleryImages} />
                </div>

                {/* Right Side: Product Details */}
                <div>
                    <h1 className="text-4xl font-bold text-brand-dark">{product.name}</h1>
                    <p className="text-gray-500 mt-2">{product.shortDescription}</p>
                    <p className="text-3xl font-bold text-brand-dark my-6">₹ {product.price.toLocaleString('en-IN')}</p>
                    
                    <div className="mb-6">
                        <h3 className="text-lg font-semibold mb-2">Available Sizes</h3>
                        <div className="flex gap-3">
                            {product.sizes.map(size => (
                                <button key={size} className="border border-gray-300 rounded-md py-2 px-4 hover:border-brand-dark focus:border-brand-dark focus:outline-none">
                                    {size}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="flex items-center gap-4 mb-8">
                        <button className="flex-1 bg-brand-dark text-white font-bold py-3 px-6 rounded-lg hover:bg-gray-800 transition-colors">
                            Add to Cart
                        </button>
                        <button onClick={handleShare} className="border border-gray-300 rounded-lg p-3 hover:bg-gray-100 transition-colors" title="Share">
                            <FiShare2 size={24} />
                        </button>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-2">Description</h3>
                        <p className="text-gray-600 leading-relaxed">{product.fullDescription}</p>
                    </div>
                </div>
            </div>

            {/* Reviews Section */}
            <ReviewsSection productId={product._id} />
        </div>
    );
};

export default ProductPage;