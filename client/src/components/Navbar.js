
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiSearch, FiUser, FiShoppingCart, FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Signature Perfume', path: '/collections' }, 
        { name: 'Personalized', path: '/collections' },      
        { name: 'Collections', path: '/collections' },       
    ];

    return (
        <nav className="bg-white shadow-md sticky top-0 z-50">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                {/* Logo */}
                <Link to="/" className="text-2xl font-bold text-brand-dark tracking-wider">
                    OLCADEMY
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <Link key={link.name} to={link.path} className="text-gray-600 hover:text-brand-gold transition-colors duration-300">
                            {link.name}
                        </Link>
                    ))}
                </div>

                {/* Icons and Mobile Menu Button */}
                <div className="flex items-center space-x-5">
                    <button className="text-gray-600 hover:text-brand-gold transition-colors duration-300">
                        <FiSearch size={22} />
                    </button>
                    <button className="text-gray-600 hover:text-brand-gold transition-colors duration-300">
                        <FiUser size={22} />
                    </button>
                    <button className="text-gray-600 hover:text-brand-gold transition-colors duration-300">
                        <FiShoppingCart size={22} />
                    </button>
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-gray-600">
                        {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden bg-white px-6 pb-4">
                    {navLinks.map((link) => (
                        <Link key={link.name} to={link.path} className="block py-2 text-gray-600 hover:text-brand-gold transition-colors duration-300">
                            {link.name}
                        </Link>
                    ))}
                </div>
            )}
        </nav>
    );
};

export default Navbar;