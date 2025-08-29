import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import Navbar from './components/Navbar'; 
import Footer from './components/Footer'; 
import AllProductsPage from './pages/AllProductsPage';
function App() {
  return (
    <Router>
      <Navbar /> 
      <main className="font-sans text-gray-800">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/collections" element={<AllProductsPage />} />
        </Routes>
      </main>
      
      <Footer />
    </Router>
  );
}

export default App;