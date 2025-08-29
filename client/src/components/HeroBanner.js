
import React from 'react';
import { Link } from 'react-router-dom';

const HeroBanner = () => {
    const bannerImageUrl = "https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

    return (
        <div className="relative h-[60vh] md:h-[85vh] bg-cover bg-center" style={{ backgroundImage: `url(${bannerImageUrl})` }}>
            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-30"></div>
            
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
                <h1 className="text-4xl md:text-6xl font-bold tracking-wider leading-tight">
                    Introducing Marshmallow Fluff
                </h1>
                <p className="mt-4 text-lg md:text-xl max-w-2xl">
                    Embark on a sensory voyage with our all-new collection. A symphony of delightful notes crafted to perfection.
                </p>
                <Link 
                    to="/collections" 
                    className="mt-8 bg-brand-gold text-white font-bold py-3 px-10 rounded-full hover:bg-yellow-600 transition-all duration-300 transform hover:scale-105"
                >
                    Explore Collection
                </Link>
            </div>
        </div>
    );
};

export default HeroBanner;