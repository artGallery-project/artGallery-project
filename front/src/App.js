import './App.css';
import React from 'react';
import HeaderTablet from './components/header/HeaderTablet';
import Footer from './components/footer/Footer';
import { Home } from './components/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ProductDetails } from './components/product/ProductDetails';

function App() {
  return (
    <div className="grid-container">
      <Router>
        <HeaderTablet />
        <div>
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/Home' element={<Home />}/>
            <Route path='/producto/:id' element={<ProductDetails/>}/>
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
