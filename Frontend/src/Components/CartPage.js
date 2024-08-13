import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../CSS/cart.css';
import MenuBar from './MenuBar';

const CartPage = ({ cartItems = [], updateQuantity, removeFromCart }) => {
  const navigate = useNavigate(); 

  const handleQuantityChange = (itemId, newQuantity) => {
    updateQuantity(itemId, newQuantity);
  };

  const handleRemoveFromCart = (item) => {
    removeFromCart(item);
  };

  const handleFinalizePurchase = () => {
    navigate('/checkout'); 
  };

  return (
    <div className="cart-page">
      <MenuBar />
      <h2 align="center">Cart</h2>
      {cartItems.length === 0 ? (
        <p align="center">Your cart is empty.</p>
      ) : (
        <div className="cart-items" align="center">
          {cartItems.map((item) => (
            <div key={item?.id} className="cart-item">
              <img src={item?.image} alt={item?.name} style={{ width: '200px', height: '200px' }} />
              <div className="cart-item-details">
                <h3>{item?.name}</h3>
                <p>${item?.price}</p>
                <input
                  type="number"
                  value={item?.quantity}
                  onChange={(e) => handleQuantityChange(item?.id, parseInt(e.target.value))}
                  min={1}
                  style={{ marginRight: '10px' }}
                />
                <button onClick={() => handleRemoveFromCart(item)}>Remove</button>
              </div>
            </div>
          ))}
        </div>
      )}
      {cartItems.length > 0 && (
        <div className="finalize-purchase" style={{ textAlign: 'center' }}>
          <button className="buynow" onClick={handleFinalizePurchase}>
            Buy Now
          </button>
        </div>
      )}
    </div>
  );
};

export default CartPage;
