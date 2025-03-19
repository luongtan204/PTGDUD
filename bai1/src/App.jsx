import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home';
import { MenuProvider, Menu } from './pages/Menu'; // Import MenuProvider và Menu
import Contact from './pages/Contact.jsx';
import './styles/App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <MenuProvider> {/* Bọc Routes với MenuProvider */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </MenuProvider>
      <Footer />
    </div>
  );
}

export default App;