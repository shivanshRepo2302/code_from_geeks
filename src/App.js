import './App.css';
import React from 'react';
import Header from './components/Header';
import HomePage from './components/homePage';
import Login from './components/LoginPage';
import TechPage from './components/technology';
import FashionPage from './components/fashion';
import SellProduct from './components/SellProduct.js';
import { Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Cart from './components/Cart.js';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedUserLoggedInInformation = localStorage.getItem('isLoggedIn');
    if (storedUserLoggedInInformation === '1') {
      setIsLoggedIn(true);
    }
  }, []);

  const loginHandler = (email, password) => {
    localStorage.setItem('isLoggedIn', '1');
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
  };

  return (
    <React.Fragment>
      <Header isLoggedIn={isLoggedIn} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Login-Page" element={<Login loginHandler={loginHandler} />} />
        <Route path="/Technology" element={<TechPage />}/>
        <Route path="/Fashion" element={<FashionPage />}/>
        <Route path="/Checkout" element={<Cart />}/>
        <Route path="/Sell" element={<SellProduct />}/>
      </Routes>
    </React.Fragment>
  );
}

export default App;
