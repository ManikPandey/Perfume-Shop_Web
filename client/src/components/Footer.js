// File: perfume-shop/client/src/components/Footer.js

import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaYoutube, FaPinterestP } from 'react-icons/fa';
import { FiArrowRight } from 'react-icons/fi';

const Footer = () => {
    return (
        <footer className="bg-brand-dark text-gray-300">
            <div className="container mx-auto px-6 py-16">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                    {/* Column 1: Logo and Social */}
                    <div className="space-y-6">
                        <Link to="/" className="text-2xl font-bold text-white tracking-wider">OLCADEMY</Link>
                        <div className="flex space-x-4">
                            <a href="#" className="hover:text-white"><FaFacebookF size={20} /></a>
                            <a href="#" className="hover:text-white"><FaInstagram size={20} /></a>
                            <a href="#" className="hover:text-white"><FaYoutube size={20} /></a>
                            <a href="#" className="hover:text-white"><FaPinterestP size={20} /></a>
                        </div>
                    </div>

                    {/* Column 2: Company Info */}
                    <div>
                        <h4 className="font-bold text-white mb-4">Company Info</h4>
                        <ul className="space-y-2 text-sm">
                            <li><Link to="/about" className="hover:text-white">About Us</Link></li>
                            <li><Link to="/careers" className="hover:text-white">Careers</Link></li>
                            <li><Link to="/blog" className="hover:text-white">Blogs</Link></li>
                        </ul>
                    </div>

                    {/* Column 3: Support */}
                    <div>
                        <h4 className="font-bold text-white mb-4">Support</h4>
                        <ul className="space-y-2 text-sm">
                            <li><Link to="/faq" className="hover:text-white">FAQs</Link></li>
                            <li><Link to="/contact" className="hover:text-white">Customer Services</Link></li>
                            <li><Link to="/privacy" className="hover:text-white">Privacy Policy</Link></li>
                        </ul>
                    </div>

                    {/* Column 4: Newsletter */}
                    <div>
                        <h4 className="font-bold text-white mb-4">STAY IN THE LOOP</h4>
                        <p className="text-sm mb-4">For exciting offers, coupons and more!</p>
                        <form className="flex">
                            <input type="email" placeholder="Enter your email" className="bg-gray-800 text-white px-4 py-2 rounded-l-md focus:outline-none w-full" />
                            <button className="bg-white text-brand-dark px-4 py-2 rounded-r-md">
                                <FiArrowRight size={20} />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            <div className="bg-black text-center text-gray-500 text-sm py-4">
                © {new Date().getFullYear()} Olcademy Perfumes. All Rights Reserved.
            </div>
        </footer>
    );
};

export default Footer;