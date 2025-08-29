// File: perfume-shop/client/src/components/ReviewsSection.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FiShare2, FiStar } from 'react-icons/fi';

const ReviewsSection = ({ productId }) => {
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(true);
    // Form state
    const [rating, setRating] = useState(5);
    const [comment, setComment] = useState('');
    const [author, setAuthor] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const fetchReviews = async () => {
        try {
            const { data } = await axios.get(`http://localhost:5001/api/reviews/${productId}`);
            setReviews(data);
            setLoading(false);
        } catch (err) {
            console.error("Failed to fetch reviews", err);
            setLoading(false);
        }
    };

    useEffect(() => {
        if (productId) {
            fetchReviews();
        }
    }, [productId]);

    const submitHandler = async (e) => {
        e.preventDefault();
        if (!comment || !author) {
            setError("Please fill in all fields.");
            return;
        }
        try {
            const reviewData = { author, rating, comment };
            await axios.post(`http://localhost:5001/api/reviews/${productId}`, reviewData);
            setSuccess("Thank you for your review!");
            setError('');
            // Reset form and refetch reviews
            setAuthor('');
            setComment('');
            setRating(5);
            fetchReviews();
        } catch (err) {
            setError("Failed to submit review. Please try again.");
            console.error(err);
        }
    };

    return (
        <div className="mt-16">
            <h3 className="text-2xl font-bold text-brand-dark mb-6">Reviews</h3>
            {/* Existing Reviews */}
            <div className="space-y-6 mb-10">
                {loading ? <p>Loading reviews...</p> : reviews.length === 0 ? <p>No reviews yet. Be the first!</p> :
                    reviews.map(review => (
                        <div key={review._id} className="border-b pb-4">
                            <div className="flex items-center mb-1">
                                <p className="font-semibold">{review.author}</p>
                                <div className="flex items-center ml-4">
                                    {[...Array(review.rating)].map((_, i) => <FiStar key={i} className="text-yellow-400 fill-current" />)}
                                    {[...Array(5 - review.rating)].map((_, i) => <FiStar key={i} className="text-gray-300" />)}
                                </div>
                            </div>
                            <p className="text-gray-600">{review.comment}</p>
                        </div>
                    ))
                }
            </div>

            {/* Add Review Form */}
            <h4 className="text-xl font-bold text-brand-dark mb-4">Add Your Review</h4>
            <form onSubmit={submitHandler} className="space-y-4">
                <div>
                    <label htmlFor="author" className="block text-sm font-medium text-gray-700">Name</label>
                    <input type="text" id="author" value={author} onChange={e => setAuthor(e.target.value)} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-brand-gold focus:border-brand-gold" />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Rating</label>
                    <div className="flex items-center mt-1">
                        {[...Array(5)].map((_, index) => {
                            const ratingValue = index + 1;
                            return <FiStar key={ratingValue} onClick={() => setRating(ratingValue)} className={`cursor-pointer ${ratingValue <= rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} size={24}/>
                        })}
                    </div>
                </div>
                <div>
                    <label htmlFor="comment" className="block text-sm font-medium text-gray-700">Comment</label>
                    <textarea id="comment" rows="4" value={comment} onChange={e => setComment(e.target.value)} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-brand-gold focus:border-brand-gold"></textarea>
                </div>
                {error && <p className="text-red-500">{error}</p>}
                {success && <p className="text-green-500">{success}</p>}
                <button type="submit" className="bg-brand-dark text-white font-bold py-2 px-6 rounded-md hover:bg-gray-800 transition-colors">Submit Review</button>
            </form>
        </div>
    );
};

export default ReviewsSection;