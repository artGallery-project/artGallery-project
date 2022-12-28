import './App.css';
import React, { useEffect } from 'react';
import HeaderTablet from './components/header/HeaderTablet';
import Footer from './components/footer/Footer';
import { Home } from './components/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ProductDetails } from './components/product/ProductDetails';
import HeaderMobil from './components/header/HeaderMobil';
import Dashboard from './components/admin/Dashboard';
import ProductList from './components/admin/ProductList';
import NewProduct from './components/admin/NewProduct';
import Compras from './components/cart/CartHome';
import { Register } from './components/user/Register';
import Login from './components/user/Login';
import store from './store';
import { loadUser } from './actions/userActions';
import { Profile } from './components/user/Profile';
import ProtectedRoute from './routes/ProtectedRoute';
import { UpdateProfile } from './components/user/UpdateProfile';
import { UpdatePassword } from './components/user/UpdatePassword';
import { ForgotPassword } from './components/user/ForgotPassword';
import { NewPassword } from './components/user/NewPassword';

function App() {
  useEffect(() => {
    store.dispatch(loadUser());
  }, [])

  return (
    <div className="grid-container">
      <Router>
        <HeaderTablet />
        <HeaderMobil />
        <div>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Home' element={<Home />} />
            <Route path='/producto/:id' element={<ProductDetails />} />
            <Route path='/productList' element={<ProductList />} />
            <Route path='/newProduct' element={<NewProduct />} />
            <Route path='/search/:keyword' element={<Home />} />
            <Route path='/compras' element={<Compras />} />
            <Route path='/register' element={<Register />} />
            <Route path='/login' element={<Login />} />
            <Route path='/yo' element={<Profile />} />
            <Route path='/yo/update' element={<UpdateProfile />} />
            <Route path='/password/update' element={<UpdatePassword />} />
            <Route path='/password/forgot' element={<ForgotPassword />} />
            <Route path='/resetPassword/:token' element={<NewPassword />} />


            {/* ------- Rutas protegidas ------- */}
            <Route path='/dashboard'
              element={<ProtectedRoute isAdmin={true}>
                <Dashboard />
              </ProtectedRoute>}
            />
            {/* ------- Rutas protegidas ------- */}


          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
