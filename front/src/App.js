import './App.css';
import React from 'react';
import HeaderTablet from './components/header/HeaderTablet';
import Footer from './components/footer/Footer';
import { Home } from './components/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ProductDetails } from './components/product/ProductDetails';
import HeaderMobil from './components/header/HeaderMobil';
import Dashboard from './components/admin/Dashboard';
import ProductList from './components/admin/ProductList';
import NewProduct from './components/admin/NewProduct';

function App() {
  

  return (
    <div className="grid-container">
      <Router>
        <HeaderTablet />
        <HeaderMobil/>
        <div>
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/Home' element={<Home />}/>
            <Route path='/producto/:id' element={<ProductDetails/>}/>
            <Route path='/dashboard' element={<Dashboard/>}/>
            <Route path='/productList' element={<ProductList />} />
            <Route path='/newProduct' element={<NewProduct />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
