// File: perfume-shop/client/src/components/ImageGallery.js

import React, { useState } from 'react';

const ImageGallery = ({ mainImage, galleryImages }) => {
    // Set the main product image as the initial active image
    const [activeImage, setActiveImage] = useState(mainImage);

    // If there are no gallery images, create a list with just the main one
    const allImages = [mainImage, ...galleryImages];

    return (
        <div className="flex flex-col-reverse md:flex-row gap-4">
            {/* Thumbnails */}
            <div className="flex md:flex-col gap-3">
                {allImages.slice(0, 4).map((img, index) => (
                    <div
                        key={index}
                        className={`w-20 h-20 rounded-md cursor-pointer overflow-hidden border-2 ${activeImage === img ? 'border-brand-gold' : 'border-transparent'}`}
                        onClick={() => setActiveImage(img)}
                    >
                        <img src={img} alt={`Thumbnail ${index + 1}`} className="w-full h-full object-cover" />
                    </div>
                ))}
            </div>

            {/* Main Image */}
            <div className="flex-1">
                <img src={activeImage} alt="Main product" className="w-full h-auto max-h-[500px] object-cover rounded-lg shadow-lg" />
            </div>
        </div>
    );
};

export default ImageGallery;