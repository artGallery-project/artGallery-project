import './App.css';
import React from 'react';
import HeaderTablet from './components/header/HeaderTablet';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="grid-container">
      <HeaderTablet />
      <Footer />
    </div>
  );
}

export default App;
