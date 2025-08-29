// File: perfume-shop/client/src/components/Testimonial.js

import React from 'react';

const Testimonial = () => {
    return (
        <div className="bg-brand-dark text-white py-20">
            <div className="container mx-auto px-6 text-center">
                <p className="text-5xl md:text-7xl text-gray-600">“</p>
                <p className="text-xl md:text-3xl max-w-4xl mx-auto leading-relaxed">
                    Their perfumes are really good as well as their service. Hats off to the team, they are very knowledgeable and friendly. 
                    <span className="text-brand-gold block mt-4">IT WAS A GREAT EXPERIENCE!</span>
                </p>
                <p className="mt-8 text-gray-400">
                    — DILSHA AMINA FROM MYOP STORE | HILITE MALL CALICUT
                </p>
            </div>
        </div>
    );
};

export default Testimonial;