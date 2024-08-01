import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Problems from './pages/Problems';
import Solutions from './pages/Solutions';
import Product from './pages/Product';
import Market from './pages/Market';
import Team from './pages/Team';
import Contact from './pages/Contact';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/problems" element={<Problems />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/product" element={<Product />} />
        <Route path="/market" element={<Market />} />
        <Route path="/team" element={<Team />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;

