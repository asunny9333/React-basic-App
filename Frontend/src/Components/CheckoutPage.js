import React, { useState } from 'react';
import axios from 'axios';
import '../CSS/checkout.css';
import { useNavigate } from 'react-router-dom';
import MenuBar from './MenuBar';

const CheckoutPage = ({ cartItems }) => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const navigate = useNavigate();

  const calculateTotalPrice = () => {
    if (!Array.isArray(cartItems)) {
      console.error('cartItems is not an array:', cartItems);
      return 0;
    }
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const calculateTax = (price) => {
    return price * 0.10;
  };

  const totalPrice = calculateTotalPrice();
  const tax = calculateTax(totalPrice);
  const grandTotal = totalPrice + tax;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const orderData = {
      cartItems: cartItems.map(item => ({
        productId: item._id,
        quantity: item.quantity,
      })),
      totalPrice,
    };

    try {
      const response = await axios.post('http://localhost:5000/api/orders', orderData);
      console.log('Order placed successfully:', response.data);
      navigate('/receipt', { state: { order: response.data } });
    } catch (error) {
      console.error('Error placing order:', error.response ? error.response.data : error.message);
    }
  };

  return (
    <div>
      <MenuBar />
      <div className="checkout-page">
        <h2 align="center">Checkout</h2>
        <div className="checkout-summary">
          <div className="summary-item">
            <h3>Total Price</h3>
            <p>${totalPrice.toFixed(2)}</p>
          </div>
          <div className="summary-item">
            <h3>Tax (10%)</h3>
            <p>${tax.toFixed(2)}</p>
          </div>
          <div className="summary-item">
            <h3>Grand Total</h3>
            <p>${grandTotal.toFixed(2)}</p>
          </div>
        </div>
        <div className="credit-card-info">
          <h3>Credit Card Information</h3>
          <form onSubmit={handleSubmit}>
            <label htmlFor="cardNumber">
              Card Number:
              <input
                id="cardNumber"
                type="text"
                placeholder="Enter your card number"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
                required
              />
            </label>
            <label htmlFor="expiryDate">
              Expiry Date:
              <input
                id="expiryDate"
                type="text"
                placeholder="MM/YY"
                value={expiryDate}
                onChange={(e) => setExpiryDate(e.target.value)}
                required
              />
            </label>
            <label htmlFor="cvv">
              CVV:
              <input
                id="cvv"
                type="text"
                placeholder="CVV"
                value={cvv}
                onChange={(e) => setCvv(e.target.value)}
                required
              />
            </label>
            <button type="submit">Place Order</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
