
import React from 'react';

const categories = [
    {
        name: 'Floral',
        description: 'Fruity, Bloom, Candytuft,class',
        imageUrl: 'https://images.pexels.com/photos/1037999/pexels-photo-1037999.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
        name: 'Oriental / Woody',
        description: 'Exotic, Sensual, Subtle',
        imageUrl: 'https://images.pexels.com/photos/2080960/pexels-photo-2080960.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
        name: 'Fresh',
        description: 'Energize, Vitalize, Awaken',
        imageUrl: 'https://images.pexels.com/photos/1961795/pexels-photo-1961795.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    }
];

const CategoryCard = ({ category }) => (
    <div className="relative rounded-lg overflow-hidden group h-64">
        <img src={category.imageUrl} alt={category.name} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
            <h3 className="text-2xl font-bold">{category.name}</h3>
            <p className="text-sm">{category.description}</p>
        </div>
    </div>
);

const Categories = () => {
    return (
        <div className="py-16">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-brand-dark mb-12">
                    OUR <span className="text-brand-gold">FRAGRANCES</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {categories.map(cat => <CategoryCard key={cat.name} category={cat} />)}
                </div>
            </div>
        </div>
    );
};

export default Categories;