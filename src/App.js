import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MenuBar from './MenuBar';
import ProductList from './ProductList';
import CartPage from './CartPage';
import AccountPage from './AccountPage';

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product, quantity) => {
    const updatedCart = [...cart, { ...product, quantity }];
    setCart(updatedCart);
  };

  const updateQuantity = (item, newQuantity) => {
    const updatedCart = cart.map((cartItem) =>
      cartItem.id === item.id ? { ...cartItem, quantity: newQuantity } : cartItem
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
        <MenuBar />
        <Routes>
          <Route
            path="/"
            element={<ProductList addToCart={addToCart} />}
          />
          <Route
            path="/cart"
            element={<CartPage
              cartItems={cart}
              updateQuantity={updateQuantity}
              removeFromCart={removeFromCart} />}
          />
          <Route path="/account" element={<AccountPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
