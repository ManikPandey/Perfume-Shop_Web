import React from 'react';

const SkeletonCard = () => {
    return (
        <div className="bg-white rounded-lg shadow-sm p-4">
            <div className="animate-pulse flex flex-col items-center">
                {/* Image Placeholder */}
                <div className="bg-gray-200 rounded-md h-64 w-full"></div>
                {/* Text Placeholders */}
                <div className="w-3/4 h-4 bg-gray-200 rounded mt-5"></div>
                <div className="w-1/2 h-3 bg-gray-200 rounded mt-2"></div>
                <div className="w-1/3 h-4 bg-gray-200 rounded mt-4"></div>
            </div>
        </div>
    );
};

export default SkeletonCard;