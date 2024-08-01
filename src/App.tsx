import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Problems from './pages/Problems';
import Solutions from './pages/Solutions';
import Product from './pages/Product';
import Market from './pages/Market';
import Team from './pages/Team';
import ContactForm from './pages/ContactForm';
import ContactList from './pages/ContactList';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/problems" element={<Problems />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/product" element={<Product />} />
        <Route path="/market" element={<Market />} />
        <Route path="/team" element={<Team />} />
        <Route path="/contact" element={<ContactForm />} />
        <Route path="/contact-list" element={<ContactList />} />
      </Routes>
    </Router>
  );
};

export default App;

