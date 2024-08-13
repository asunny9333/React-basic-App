// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import ProductList from './Components/ProductList';
import CartPage from './Components/CartPage';
import CheckoutPage from './Components/CheckoutPage';
import SignUpPage from './Components/SignUpPage';
import SignInPage from './Components/SignInPage';
import ReceiptPage from './Components/ReceiptPage';



function App() {


  const [cart, setCart] = useState([]);

  const addToCart = (product, quantity) => {
    const updatedCart = [...cart, { ...product, quantity: parseInt(quantity) }];
    setCart(updatedCart);
  };

  const updateQuantity = (item, newQuantity) => {
    const quantity = parseInt(newQuantity);
    const updatedCart = cart.map((cartItem) =>
      cartItem.id === item.id ? { ...cartItem, quantity } : cartItem
    );
    setCart(updatedCart);
  };

  const removeFromCart = (itemToRemove) => {
    const updatedCart = cart.filter((item) => item.id !== itemToRemove.id);
    setCart(updatedCart);
  };


  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Navigate to="/signup" />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/products" element={<ProductList addToCart={addToCart} />} />
          <Route path="/cart" element={
            <CartPage
              cartItems={cart}
              updateQuantity={updateQuantity}
              removeFromCart={removeFromCart}
            />
          } />
          <Route path="/checkout" element={<CheckoutPage cartItems={cart} />} />
          <Route path="/receipt" element={<ReceiptPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
